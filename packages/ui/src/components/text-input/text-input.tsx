"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './text-input.module.css'

export type TextInputAppearance = 'outlined' | 'underline'

export interface TextInputProps
  extends Omit<React.ComponentProps<"input">, 'disabled'> {
  /** `outlined` (caja) o `underline`. */
  appearance?: TextInputAppearance
  /** Error: borde danger. Disabled gana sobre error. */
  error?: boolean
  /** Disabled: valor muted; no recibe interacción. */
  disabled?: boolean
  /** Sin cromo propio; el contenedor compuesto pinta el borde. */
  embedded?: boolean
}

/**
 * Control de texto interno (outlined | underline × default | error | disabled).
 * No forma parte de la API pública de `@workspace/ui`; se usa para componer
 * campos (FormField y siguientes).
 */
export function TextInput({
  appearance = 'outlined',
  error = false,
  disabled,
  embedded = false,
  className,
  type = 'text',
  ...props
}: TextInputProps) {
  const showError = error && !disabled

  return (
    <input
      type={type}
      data-slot="text-input"
      data-appearance={appearance}
      data-error={showError ? 'true' : undefined}
      data-embedded={embedded ? 'true' : undefined}
      className={cn(styles.root, className)}
      disabled={disabled}
      aria-invalid={showError ? true : undefined}
      {...props}
    />
  )
}
