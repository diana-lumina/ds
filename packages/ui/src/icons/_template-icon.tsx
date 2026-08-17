import { createIcon } from "./create-icon"

/**
 * Plantilla para un ícono nuevo.
 *
 * 1. Copia este archivo a `nombre-icon.tsx`.
 * 2. Pega los `<path>` desde `svg/nombre.svg`.
 * 3. Cambia displayName y el export.
 * 4. Reexporta en `index.ts`.
 *
 * No exportar esta plantilla en el barrel.
 */
export const TemplateIcon = createIcon(
  "TemplateIcon",
  <circle cx="12" cy="12" r="8" fill="currentColor" />
)
