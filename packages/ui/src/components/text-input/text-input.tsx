"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './text-input.module.css'

export type TextInputAppearance = 'outlined' | 'underline'
export type TextInputTone = 'standard' | 'inverse'

export interface TextInputProps
  extends Omit<React.ComponentProps<"input">, 'disabled'> {
  /** `outlined` (caja) o `underline`. */
  appearance?: TextInputAppearance
  /** `standard` sobre superficies claras · `inverse` sobre oscuras / brand. */
  tone?: TextInputTone
  /** Error: borde danger. Disabled gana sobre error. */
  error?: boolean
  /** Disabled: valor muted; no recibe interacción. */
  disabled?: boolean
  /** Sin cromo propio; el contenedor compuesto pinta el borde. */
  embedded?: boolean
}

/**
 * Control de texto interno (outlined | underline × standard | inverse × default | error | disabled).
 * `embedded` es la misma receta (outlined o underline, standard o inverse) sin background ni borde.
 * No forma parte de la API pública de `@workspace/ui`; se usa para componer
 * campos (FormField y siguientes).
 */
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    {
      appearance = 'outlined',
      tone = 'standard',
      error = false,
      disabled,
      embedded = false,
      className,
      type = 'text',
      ...props
    },
    ref,
  ) {
    const showError = error && !disabled

    return (
      <input
        ref={ref}
        type={type}
        data-slot="text-input"
        data-appearance={appearance}
        data-tone={tone}
        data-error={showError ? 'true' : undefined}
        data-embedded={embedded ? 'true' : undefined}
        className={cn(styles.root, className)}
        disabled={disabled}
        aria-invalid={showError ? true : undefined}
        {...props}
      />
    )
  },
)
