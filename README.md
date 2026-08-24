# Design System

Monorepo del design system del Tec: tokens de diseño (3 capas), componentes React publicables, íconos propios y documentación visual.

Pensado para que apps Next.js (dentro y fuera del monorepo) consuman `@workspace/ui` como librería instalable. **No usa Tailwind ni shadcn en runtime.**

## Stack

| Capa | Tecnología |
|------|------------|
| Monorepo | pnpm workspaces + Turborepo |
| Tokens | Style Dictionary → CSS custom properties (`[data-brand]`) |
| UI | React 19, **CSS Modules**, tsdown (ESM + CSS) |
| Íconos | Componentes SVG propios en `@workspace/ui/icons` |
| Docs | Storybook 10 (Vite) |
| Tests | Vitest + Testing Library + axe |
| Playground | Next.js (`apps/web`) |

**No forma parte del runtime:** Tailwind, CVA, `tailwind-merge`, Lucide. shadcn CLI solo se usa de forma ocasional como andamiaje de primitivos nuevos (generar → limpiar → adaptar a CSS Modules).

**Requisitos:** Node `>=20`, pnpm `10.33.4`

## Arquitectura

```
Figma (export manual)
        ↓
packages/tokens/src  (JSON / DTCG)
  · primitivos
  · semánticos
  · componente
        ↓  Style Dictionary
CSS vars bajo [data-brand="…"]
        ↓
packages/ui
  · components/*/  (+ *.module.css)
  · components/icons/
  · styles/library.css  →  @workspace/ui/styles.css
  · styles/globals.css  →  tokens + base (playground / Storybook)
        ↓  tsdown
dist/  (ESM + .d.ts + CSS Modules)
        ↓
apps/web · apps/storybook · apps Next externas
```

- **Tokens (3 capas):** primitivos → semánticos → componente; theming multi-marca sin JS de runtime.
- **CSS Modules:** estilos de componente scoped + `var(--component-*)` / tokens semánticos.
- **Variantes:** atributos `data-*` en el DOM (p. ej. `data-hierarchy`, `data-size`), no utility classes.
- **tsdown:** build de librería; el CSS del componente se importa junto al JS.
- **Íconos:** viven en la UI y los usan los componentes (`LoadingIcon`, etc.).

## Estructura

```
apps/
  storybook/          # Foundations + stories de componentes
  web/                # Playground Next.js
packages/
  tokens/             # JSON → CSS por marca
  ui/
    src/components/   # button/, icons/, …
    src/styles/       # library.css, globals.css
    dist/             # artefacto de build
  eslint-config/
  typescript-config/
```

## Inicio rápido

```bash
pnpm install
pnpm build              # tokens → ui → apps
pnpm storybook          # http://localhost:6006
pnpm --filter web dev   # playground
pnpm test               # tests de componentes
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `pnpm build` | Build en orden: tokens → ui → apps |
| `pnpm dev` | Dev de las apps (Turbo) |
| `pnpm test` | Tests (Vitest) |
| `pnpm typecheck` | TypeScript en los packages |
| `pnpm lint` / `pnpm format` | ESLint / Prettier |
| `pnpm storybook` | Storybook en http://localhost:6006 |
| `pnpm build-storybook` | Build estático de Storybook |
| `pnpm --filter @workspace/ui dev` | Watch del build de la librería |
| `pnpm --filter @workspace/ui test` | Solo tests de UI |

## Packages

### `@workspace/tokens`

Fuente de verdad de diseño (JSON / DTCG). Style Dictionary genera CSS variables bajo `[data-brand="…"]`.

**Actualización (proceso actual):** no hay sync automático. Los archivos se **descargan desde Figma** y se actualizan en `packages/tokens/src/`. Luego:

```bash
pnpm --filter @workspace/tokens build
```

Marcas: `tec-360`, `tec-educacion-continua`.

### `@workspace/ui`

Librería de componentes e íconos:

- Source en `src/`, publishable en `dist/`
- Estilos: **CSS Modules** + tokens CSS
- Build: **tsdown** (componentes bajo `src/components/*/`, íconos en `src/components/icons`)
- Dependencias runtime mínimas: `@workspace/tokens`, `clsx`

| Import | Uso |
|--------|-----|
| `@workspace/ui/components/button` | Componentes |
| `@workspace/ui/icons` | Íconos del sistema |
| `@workspace/ui/lib/utils` | `cn()` (clsx) |
| `@workspace/ui/styles.css` | Solo tokens (apps externas) |
| `@workspace/ui/globals.css` | Tokens + base tipográfica (playground / Storybook) |

## Uso en una app Next.js

### Apps externas

```tsx
// app/layout.tsx
import "@workspace/ui/styles.css"

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-brand="tec-360">
      <body>{children}</body>
    </html>
  )
}
```

```tsx
import { Button } from "@workspace/ui/components/button"
import { ArrowRightIcon } from "@workspace/ui/icons"

export default function Page() {
  return <Button label="Continuar" rightIcon={<ArrowRightIcon />} />
}
```

1. Importar `@workspace/ui/styles.css` una vez.
2. Activar marca con `data-brand` en `<html>`.
3. Importar por subpath; el CSS del componente viaja con el JS.

Detalle: [packages/ui/CONSUMING.md](packages/ui/CONSUMING.md).

### Playground (`apps/web`)

Misma API pública. Usa `globals.css` (tokens + base, sin Tailwind).

## Convenciones de imports

| Contexto | Convención |
|----------|------------|
| Dentro de `packages/ui` | Relativos, sin extensión: `import { LoadingIcon } from '../icons'` |
| Apps (`web`, externas) | Subpaths del paquete: `@workspace/ui/components/...` |
| `dist/` | Generado por tsdown (incluye `.js`); no editar |

`packages/ui` usa `moduleResolution: "bundler"` (source sin extensiones `.js`).

## Tokens y marcas

Sin `data-brand` en un ancestro, las variables tokenizadas no aplican.

| Valor | Marca |
|-------|--------|
| `tec-360` | Tec 360 |
| `tec-educacion-continua` | Educación Continua |

En Storybook la marca se cambia desde el toolbar.

## Añadir un componente

1. Crear `packages/ui/src/components/<nombre>/`:
   - `<nombre>.tsx` — componente (`"use client"` si hace falta)
   - `<nombre>.module.css` — estilos con tokens / `data-*`
   - `index.ts` — re-export
   - `<nombre>.stories.tsx` / `<nombre>.test.tsx`
2. tsdown detecta la carpeta (excepto `icons`, que se publica como `@workspace/ui/icons`).
3. Verificar:

```bash
pnpm --filter @workspace/ui build
pnpm --filter @workspace/ui test
pnpm storybook
```

## Estado actual

- [x] Pipeline de tokens multi-marca (3 capas)
- [x] Build de librería UI (`tsdown` → `dist/`)
- [x] Estilos: CSS Modules (sin Tailwind en runtime)
- [x] Íconos propios en UI
- [x] Button (stories + tests + a11y)
- [x] Storybook (foundations + componentes)
- [x] Contrato de consumo documentado
- [ ] Publicación npm (scope público, quitar `private`)
- [ ] CI (build + test + pack)
- [ ] Más componentes

## Documentación relacionada

- [Consumo de la librería UI](packages/ui/CONSUMING.md)
- Storybook: `pnpm storybook`
