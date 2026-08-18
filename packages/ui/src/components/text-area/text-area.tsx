"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './text-area.module.css'

export type TextAreaAppearance = 'outlined' | 'underline'

export interface TextAreaProps
  extends Omit<React.ComponentProps<"textarea">, 'disabled'> {
  /** `outlined` (caja) o `underline`. */
  appearance?: TextAreaAppearance
  /** Error: borde danger. Disabled gana sobre error. */
  error?: boolean
  /** Disabled: valor muted; no recibe interacción. */
  disabled?: boolean
}

/**
 * Control de área de texto interno (outlined | underline × default | error | disabled).
 * No forma parte de la API pública de `@workspace/ui`; se usa para componer
 * campos (FormField y siguientes).
 */
export function TextArea({
  appearance = 'outlined',
  error = false,
  disabled,
  className,
  ...props
}: TextAreaProps) {
  const showError = error && !disabled

  return (
    <textarea
      data-slot="text-area"
      data-appearance={appearance}
      data-error={showError ? 'true' : undefined}
      className={cn(styles.root, className)}
      disabled={disabled}
      aria-invalid={showError ? true : undefined}
      {...props}
    />
  )
}
