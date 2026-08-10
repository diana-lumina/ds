# TEC DS — Tracking de integración de tokens reales

Registro de qué colecciones de Figma ya están migradas a `src/primitives`/`src/semantic`,
cuáles están parciales, y cuáles faltan por revisar. Reemplaza esta tabla a medida
que avancemos — no confíes en la memoria de la conversación para esto.

## Colecciones de Figma (fuente: TEC DS — Foundations)

| Colección | Total en Figma | Estado en el repo | Notas |
|---|---|---|---|
| Core → spacing | 14 | 🟢 Completo (14/14) | `src/core/spacing-radius.json` — export real reemplaza el placeholder parcial. Estado: **Approved** (FAC-001), no experimental |
| Core → radius | 10 | 🟢 Completo (10/10) | `src/core/spacing-radius.json` — estado Approved (FAC-001). OJO: `radius/40` es anomalía — sin `$description`, variableId de otra serie (611:2 vs 39:x), scope ALL_SCOPES en vez de CORNER_RADIUS. Confirmar con designer si está realmente aprobado |
| Color Primitives | 134 | 🟢 Completo (134/134) | `src/core/color.json` — un solo modo (Default), va a `core/`. OJO: mayoría marcada "Experimental, no semantic meaning" — solo `neutral` (25,50,100,600) trae descripciones validadas/WCAG |
| Semantic (TEC 360, color) | 144 | 🟢 Completo (144/144) | `src/brands/tec-360/semantic/color.json` — subido como archivo real, copiado sin transcripción |
| Semantic (Educación Continua, color) | 144 | 🟢 Completo (144/144) | `src/brands/tec-educacion-continua/semantic/color.json` — mismos 144 nombres de token que TEC 360, confirma estructura 1:1 entre marcas (solo cambian valores) |
| Component Tokens | 288 | 🟢 Completo (285/288) | `src/component/default.json` — subido como archivo real. Cubre avatar, button, divider, filter-chip, icon-button, input-chip, link, status, tag — coincide con el panel "Capas" visto al inicio. Confirmar si tiene más modos aparte de "Default" |
| Typography Primitives | 40 | 🔴 No iniciado | |
| Semantic Typography (TEC 360) | 10 | 🟢 Completo | `src/brands/tec-360/semantic/typography.json` — font-family referencia colección propia de la marca; el resto (weight/spacing/size/line-height) apunta a los mismos primitivos compartidos que TEC Educación Continua |
| Semantic Typography (Educación Continua) | 10 | 🟢 Completo | `src/brands/tec-educacion-continua/semantic/typography.json` |
| Border | 4 | 🔴 No iniciado | Corresponde a `color/border`, que en el tracking de Notion aparecía como PENDING EVIDENCE |
| Grid | 4 | 🟢 Completo (3/3 modos) | `src/core/grid/{compact,medium,wide}.json` — valores coinciden exacto con la captura manual, buena señal de consistencia |
| Breakpoints | 3 | 🔴 No iniciado | Buena noticia: sí están tokenizando esto, no hay que dejarlo en default de Tailwind |
| Iconography | 6 | 🟢 Completo (6/6) | `src/primitives/iconography.json` — nombres de stroke usan convención ×100 (150→1.5px), distinta a spacing/radius |
| Motion | 10 | 🟢 Completo (10/10) | `src/core/motion/{default,reduced-motion}.json` — export real reemplaza placeholder. OJO: easing viene como `$type: "string"` (CSS), no como array DTCG `cubicBezier` — necesita conversión en preprocesamiento antes del build |
| Opacity | 8 | 🟢 Completo (8/8) | `src/core/opacity.json` — export real coincide exacto con placeholder manual. `$value` ya viene dividido entre 100 (0.08, no 8), sin transform pendiente aquí |
| TEC 360 — Reference (primitivos) | 44 | 🟢 Completo (44/44) | `src/brands/tec-360/primitives/color.json` — grupos: brand (black/white/blue/turquoise), supporting (aqua/mauve/lavender/gray/purple/gradient) |
| TEC 360 — Typography (scale) | 31 | 🟡 Guardado, NO usar aún | `src/brands/tec-360/primitives/typography-scale/{desktop,mobile}.json`. ⚠️ Marcado "Experimental — Unvalidated": Mobile sin evidencia verificada, fuente es un "unapproved architecture proposal" 2026-07-23. CONFIRMAR con designer antes de usar en componentes |
| TEC Educación Continua — Reference (primitivos color) | 6 | 🟢 Completo (6/6) | `src/brands/tec-educacion-continua/primitives/color.json` — brand (near-black #231F20, blue), supporting.blue (swatch 01-04). **Approved** 2026-07-23, no Experimental — confiable |
| TEC Educación Continua — Typography (scale) | 31 | 🟢 Guardado (revisar mismo aviso que TEC 360 si aplica) | `src/brands/tec-educacion-continua/primitives/typography-scale/{desktop,mobile}.json` |

## Confirmaciones pendientes con el designer

- [ ] Valores de spacing faltantes entre 0 y 12
- [ ] `padding-block: 6` en `component/button/sm` — ¿valor suelto intencional o token faltante?
- [ ] ¿`TEC DS` es el sistema base y `TEC 360`/`TEC Educación Continua` son overrides de marca sobre esa base?
- [ ] URGENTE: confirmar con el designer si `TEC 360 — Typography (scale)` está listo para usarse — la propia metadata dice que es un "unapproved architecture proposal" y que Mobile no tiene evidencia verificada. No construir componentes de heading/display/body sobre esto sin luz verde explícita
- [ ] Confirmar que `Core` es efectivamente el nivel "primitivo" (spacing, radius) y no hay otra colección con nombres distintos para lo mismo
- [ ] Motion trae un modo "Reduced motion" en Figma — confirmar si el equipo espera que esto se implemente vía `@media (prefers-reduced-motion: reduce)` automático, o si es algo que los componentes deben manejar manualmente
- [x] ~~Valor de container.max-width en 0~~ — CONFIRMADO oficialmente en la descripción del token: significa fluid width, no error
- [ ] Confirmar si las escalas "Experimental" (color y grid) están aprobadas para usarse en semantic/componentes, o si el equipo las trata como borrador todavía — a diferencia de spacing/radius que sí están "Approved" (FAC-001)
- [ ] Escribir el preprocesamiento pendiente que: (1) resuelve `$extensions.com.figma.aliasData` en referencias reales para semantic, y (2) convierte `easing.*` de string CSS (`"cubic-bezier(0, 0, 1, 1)"`) al array DTCG `cubicBezier` (`[0, 0, 1, 1]`) que Style Dictionary espera — ambos son transformaciones de un solo script, se pueden resolver juntos
- [ ] CORRECCIÓN a nota anterior: `com.figma.scopes` NO siempre es ruido — en `Core` (spacing/radius) sí es información real (`GAP`, `CORNER_RADIUS`), a diferencia de `Color Primitives` donde siempre es `ALL_SCOPES`. Evaluar caso por caso, no asumir
- [ ] Activar `usesDtcg: true` en `config.json` de Style Dictionary — los exports reales usan `$value`/`$type`, no `value`/`type`
- [ ] Registrar transform custom para convertir `$type: "number"` sin unidad a `px` en el build CSS (aplica a typography y probablemente otras colecciones numéricas)

## Convención de nombres confirmada (real, distinta al placeholder de prueba)

El nombre del token es el valor mismo, no un índice de escalón:
- ✅ Real: `spacing.16` → `16px`
- ❌ Placeholder viejo (ya no aplica): `spacing.4` → `16px`

Esto afecta el nombre final de la CSS variable generada (`--spacing-16`, no `--spacing-4`) —
tenerlo en cuenta si se reutiliza código o documentación escrita antes de esta sesión.

## Estado del preprocesador de alias (resuelve referencias reales, no valores planos)

`build.js` incluye un preprocesador que reconstruye `{color.neutral.600}` a partir de `$extensions.aliasData`, en vez de dejar el hex/px aplanado que exporta Figma por defecto. Resultado actual: **400 de 679 tokens (58%) ya usan `var(--...)` real**.

Los 11 alias que NO resuelven son exactamente los que dependen de estos dos archivos, confirmados como placeholders viejos (formato sin `$`, nunca reexportados con el plugin real):
- `src/core/iconography.json` — reexportar colección `TEC DS — Iconography` (6 tokens)
- `src/core/typography.json` — reexportar colección `TEC DS — Typography Primitives` (40 tokens)

Cuando ambos se reemplacen por el export real, el % de referencias resueltas debería subir considerablemente.
