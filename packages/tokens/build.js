import StyleDictionary from 'style-dictionary';
import { rmSync } from 'fs';

// Limpia build/ antes de generar — evita que queden archivos huérfanos de
// versiones anteriores del script (ej. cuando cambia la estructura de carpetas
// de salida y el build ya no vuelve a escribir ahí, pero el archivo viejo persiste).
rmSync('build', { recursive: true, force: true });

/**
 * PREPROCESADOR: reconstruye referencias reales ({color.neutral.600}) a partir de
 * $extensions.com.figma.aliasData.targetVariableName, en vez de dejar el valor
 * aplanado que exporta Figma por defecto para alias cross-colección.
 *
 * Sin esto, el build "funciona" pero con ~97% de los tokens como valores planos
 * (hex/px sueltos) en vez de var(--...) encadenados — pierde la ventaja central
 * de la arquitectura de dos capas (cambiar un primitivo no se propaga solo).
 *
 * Solo sustituye si el path derivado del nombre de Figma ("color/neutral/600" ->
 * "color.neutral.600") existe de verdad en el árbol de tokens de ESTE build — si no
 * existe (ej. references a Typography Primitives, que sigue siendo placeholder),
 * deja el valor aplanado tal cual y lo reporta en el resumen final.
 */
let unresolvedAliases = [];

function pathExistsAsToken(tree, pathSegments) {
  let cur = tree;
  for (const seg of pathSegments) {
    if (cur && typeof cur === 'object' && seg in cur) {
      cur = cur[seg];
    } else {
      return false;
    }
  }
  return !!(cur && typeof cur === 'object' && '$value' in cur);
}

function walkAndResolve(node, tree) {
  if (!node || typeof node !== 'object') return;

  const aliasData = node.$extensions?.['com.figma.aliasData'];
  if ('$value' in node && aliasData?.targetVariableName && typeof node.$value !== 'string') {
    const targetPath = aliasData.targetVariableName.split('/');
    if (pathExistsAsToken(tree, targetPath)) {
      node.$value = `{${targetPath.join('.')}}`;
    } else {
      unresolvedAliases.push(aliasData.targetVariableName);
    }
  }

  for (const key of Object.keys(node)) {
    if (key.startsWith('$')) continue;
    walkAndResolve(node[key], tree);
  }
}

StyleDictionary.registerPreprocessor({
  name: 'resolve-figma-aliases',
  preprocessor: (dictionary) => {
    walkAndResolve(dictionary, dictionary);
    return dictionary;
  },
});

/**
 * Figma pone `$extensions.com.figma.modeName` en la raíz de cada JSON.
 * Style Dictionary trata esa clave como token al mergear sources y choca
 * (Default vs Compact vs TEC 360). No es un token; se descarta al parsear.
 */
StyleDictionary.registerParser({
  name: 'json-strip-file-extensions',
  pattern: /\.json$/,
  parser: ({ contents }) => {
    const data = JSON.parse(contents);
    delete data.$extensions;
    return data;
  },
});

/**
 * Transform: agrega "px" a valores numéricos crudos que representan dimensiones.
 * El export de Figma trae $type:"number" incluso para spacing/radius/font-size/etc,
 * sin unidad — sin esto, el CSS generado sería inválido (ej. "font-size: 16;").
 * Usa coincidencia por substring sobre el path completo, no prefijo exacto —
 * los tokens de component/ tienen nombres compuestos (ej. "border-width") que
 * un match por segmento exacto no captura.
 */
const PX_KEYWORDS = [
  'spacing', 'radius', 'border', 'gutter', 'margin', 'max-width',
  'font-size', 'line-height', 'size', 'stroke', 'breakpoint',
  'height', 'width', 'padding', 'gap',
];
const PX_EXCLUDE_KEYWORDS = ['duration', 'font-weight', 'columns', 'opacity'];

StyleDictionary.registerTransform({
  name: 'size/px-from-number',
  type: 'value',
  filter: (token) => {
    if (token.$type !== 'number') return false;
    const path = token.path.join('.').toLowerCase();
    if (PX_EXCLUDE_KEYWORDS.some((kw) => path.includes(kw))) return false;
    return PX_KEYWORDS.some((kw) => path.includes(kw));
  },
  transform: (token) => `${token.$value}px`,
});

/**
 * Transform: milisegundos para duration.* (bug anterior: comparaba path[0]=='duration',
 * pero el path real es "motion.duration.instant" -> path[0] es "motion". Corregido a
 * buscar "duration" en cualquier posición del path.)
 */
StyleDictionary.registerTransform({
  name: 'duration/ms-from-number',
  type: 'value',
  filter: (token) => token.$type === 'number' && token.path.join('.').toLowerCase().includes('duration'),
  transform: (token) => `${token.$value}ms`,
});

/**
 * Transform: convierte la estructura de color anidada de Figma
 * { colorSpace, components: [r,g,b] (0-1), alpha, hex } a un valor CSS usable.
 * Bug anterior: no había transform para esto, Style Dictionary serializaba el
 * objeto crudo -> "[object Object]" en el CSS.
 * Usa hex cuando alpha=1 (más legible); si no, usa rgba() calculado desde
 * components, porque el campo "hex" de Figma NO codifica el canal alpha
 * (ej. whiteAlpha/8 tiene hex "#FFFFFF" con alpha 0.08 — usar el hex solo
 * perdería la transparencia).
 */
StyleDictionary.registerTransform({
  name: 'color/figma-nested',
  type: 'value',
  filter: (token) => token.$type === 'color' && typeof token.$value === 'object' && token.$value !== null,
  transform: (token) => {
    const { components, alpha, hex } = token.$value;
    if (alpha === 1) return hex;
    const [r, g, b] = components.map((c) => Math.round(c * 255));
    const a = Math.round(alpha * 10000) / 10000; // limpia el ruido de precisión flotante de Figma
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'css-tec',
  transforms: ['attribute/cti', 'name/kebab', 'size/px-from-number', 'duration/ms-from-number', 'color/figma-nested'],
});

/**
 * Formato custom: envuelve el output en un @media query.
 * Reimplementado de forma simple (no reutiliza el format interno css/variables
 * vía API no documentada, que cambió entre builds de Style Dictionary v4).
 */
StyleDictionary.registerFormat({
  name: 'css/variables-media',
  format: ({ dictionary, options }) => {
    const selector = options.selector || ':root';
    const lines = dictionary.allTokens
      .map((token) => `  --${token.name}: ${token.$value};`)
      .join('\n');
    return `/**\n * Do not edit directly, this file was auto-generated.\n */\n\n@media ${options.mediaQuery} {\n${selector} {\n${lines}\n}\n}\n`;
  },
});

/**
 * Fuentes compartidas por ambas marcas, para el build "principal" (un solo valor por token).
 * NO incluye typography-scale/ (marcado "Experimental — Unvalidated" por el designer,
 * pendiente de aprobación) ni grid/ o motion/ completos — esas colecciones tienen
 * múltiples archivos con LOS MISMOS nombres de token (uno por modo: compact/medium/wide,
 * default/reduced-motion). Mezclarlos en un solo source hace que el último archivo
 * cargado sobreescriba a los anteriores en silencio (confirmado con --verbose:
 * 114 colisiones, valores sobreescritos).
 *
 * Solución temporal: usamos el modo "base" (compact para grid, default para motion) en el
 * build principal, y generamos los demás modos como archivos CSS separados, pendientes de
 * conectar a @media queries a mano en globals.css. Arquitectura definitiva (breakpoints
 * reales por modo, prefers-reduced-motion automático) queda como TODO — no bloqueante para
 * validar que el resto del pipeline compila.
 */
const CORE_SOURCE = [
  'src/core/border.json',
  'src/core/breakpoints.json',
  'src/core/color.json',
  'src/core/iconography.json',
  'src/core/opacity.json',
  'src/core/elevation.json',
  'src/core/spacing-radius.json',
  'src/core/typography.json', // ya es DTCG real (antes placeholder, excluido a propósito)
  'src/core/grid/compact.json', // modo base (mobile-first), sin media query
  'src/core/motion/default.json', // modo base
  'src/component/**/*.json',
];

const brands = ['tec-360', 'tec-educacion-continua'];

for (const brand of brands) {
  const sd = new StyleDictionary({
    usesDtcg: true,
    parsers: ['json-strip-file-extensions'],
    source: [
      ...CORE_SOURCE,
      `src/brands/${brand}/primitives/color.json`, // explícito: NO typography-scale
      `src/brands/${brand}/semantic/**/*.json`,
    ],
    preprocessors: ['resolve-figma-aliases'],
    platforms: {
      css: {
        transformGroup: 'css-tec',
        buildPath: `build/css/${brand}/`,
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables',
            options: { outputReferences: true, selector: `[data-brand="${brand}"]` },
          },
        ],
      },
    },
  });

  await sd.buildAllPlatforms();

  // Modos adicionales de grid, envueltos en @media con los breakpoints reales
  // (breakpoint/medium = 768px, breakpoint/wide = 1280px — ver src/core/breakpoints.json)
  const GRID_MEDIA = { medium: '(min-width: 768px)', wide: '(min-width: 1280px)' };
  for (const mode of ['medium', 'wide']) {
    const sdGrid = new StyleDictionary({
      usesDtcg: true,
      source: [`src/core/grid/${mode}.json`],
      platforms: {
        css: {
          transformGroup: 'css-tec',
          buildPath: `build/css/${brand}/`,
          files: [{
            destination: `grid-${mode}.css`,
            format: 'css/variables-media',
            options: { mediaQuery: GRID_MEDIA[mode] },
          }],
        },
      },
    });
    await sdGrid.buildAllPlatforms();
  }

  // Reduced motion, envuelto en @media (prefers-reduced-motion: reduce)
  const sdMotion = new StyleDictionary({
    usesDtcg: true,
    source: ['src/core/motion/reduced-motion.json'],
    platforms: {
      css: {
        transformGroup: 'css-tec',
        buildPath: `build/css/${brand}/`,
        files: [{
          destination: 'motion-reduced.css',
          format: 'css/variables-media',
          options: { mediaQuery: '(prefers-reduced-motion: reduce)' },
        }],
      },
    },
  });
  await sdMotion.buildAllPlatforms();
}

console.log('\n✅ grid-medium.css, grid-wide.css y motion-reduced.css ya vienen envueltos en su @media correspondiente — listos para importar directo, sin envolver nada a mano.');
console.log('⚠️  core/typography-scratch-EXCLUDED.json (árbol "font.*") queda fuera del build a propósito — parece trabajo en progreso/reconciliación, algunos tokens marcados "hiddenFromPublishing". Confirmar con el designer antes de usar.');

if (unresolvedAliases.length > 0) {
  const unique = [...new Set(unresolvedAliases)];
  console.log(`\n⚠️  ${unique.length} alias no se pudieron resolver a referencia real (el path destino no existe en este build) — se dejaron como valor aplanado:`);
  unique.forEach((name) => console.log(`   - ${name}`));
}