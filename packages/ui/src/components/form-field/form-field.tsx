"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './form-field.module.css'

export interface FormFieldProps
  extends Omit<React.ComponentProps<"input">, 'disabled'> {
  /** Label visible (Semantic/Label/Medium/Strong). */
  label: string
  /** Texto de ayuda o error (Semantic/Label/Small). */
  supportingText?: string
  /** Error: sólo cambia el color del supporting text. */
  error?: boolean
  /** Disabled: el input no recibe interacción; el supporting text usa color disabled. */
  disabled?: boolean
}

/**
 * Campo de formulario: label, control y supporting text opcional.
 * Estados: default, error, disabled (error/disabled sólo afectan el supporting text).
 *
 * TODO: el control es un <input> nativo provisional. Aún no existen los
 * componentes individuales (Text Field / input) para componer FormField.
 */
export function FormField({
  label,
  supportingText,
  error = false,
  id,
  className,
  disabled,
  ...props
}: FormFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const supportingId = supportingText ? `${inputId}-supporting` : undefined

  return (
    <div
      data-slot="form-field"
      data-error={error && !disabled ? 'true' : 'false'}
      data-disabled={disabled || undefined}
      className={cn(styles.root, className)}
    >
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        id={inputId}
        data-slot="form-field-control"
        className={styles.control}
        disabled={disabled}
        aria-invalid={error && !disabled ? true : undefined}
        aria-describedby={supportingId}
        {...props}
      />
      {supportingText ? (
        <span id={supportingId} className={styles.supporting}>
          {supportingText}
        </span>
      ) : null}
    </div>
  )
}
