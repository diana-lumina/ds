# SVG fuente

Cada archivo es un glifo del Icon System. Los componentes React (`*-icon.tsx`) copian los `<path>` de aquí.

## Export desde Figma

1. Frame **24×24** (artboard del Icon System).
2. Outline o flatten según el archivo de diseño.
3. Export SVG.
4. Limpia el archivo para que cumpla el contrato de abajo.
5. Guárdalo como `kebab-case.svg` (ej. `arrow-right.svg`).

## Contrato (obligatorio)

- Un solo `<svg>` raíz, **sin grupos extra** ni `style` inline de color.
- `viewBox="0 0 24 24"` (cuadrado). Íconos viejos pueden tener 16/20 hasta redibujarlos.
- `fill="none"` en el `<svg>`.
- Paths: `fill="currentColor"` **o** `stroke="currentColor"` (stroke 1.5 para 16–20 px, 2 para 24–32 px).
- Sin `width`/`height` fijos de producto; el React wrapper y el CSS del componente los ponen.
- Sin IDs, `clipPath` ni filtros si se puede evitar.

## Después del SVG

1. Copia `../_template-icon.tsx` → `../nombre-icon.tsx`.
2. Pega los paths y ajusta `viewBox` si no es 24.
3. Exporta en `../index.ts`.
