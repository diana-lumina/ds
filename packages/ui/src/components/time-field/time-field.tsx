"use client"

import * as React from 'react'
import { ClockIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import {
  TextInput,
  type TextInputAppearance,
  type TextInputTone,
} from '../text-input'
import styles from './time-field.module.css'

export type TimeFieldAppearance = TextInputAppearance
export type TimeFieldTone = TextInputTone

export interface TimeFieldProps
  extends Omit<React.ComponentProps<'input'>, 'disabled' | 'type'> {
  label: string
  supportingText?: string
  appearance?: TimeFieldAppearance
  tone?: TimeFieldTone
  error?: boolean
  disabled?: boolean
  /** Label accesible del ícono de tiempo. */
  timeLabel?: string
}

/**
 * Campo de hora: FormField (label + supporting) y TextInput type="time"
 * outlined | underline × standard | inverse. ClockIcon trailing.
 */
export function TimeField({
  label,
  supportingText,
  appearance = 'outlined',
  tone = 'standard',
  error = false,
  disabled,
  timeLabel = 'Abrir selector de hora',
  className,
  id,
  ...props
}: TimeFieldProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const supportingId = supportingText ? `${inputId}-supporting` : undefined
  const showError = error && !disabled

  function openPicker() {
    if (disabled) return
    const input = inputRef.current
    if (!input) return
    try {
      input.showPicker?.()
    } catch {
      input.focus()
    }
  }

  return (
    <div
      data-slot="time-field"
      data-appearance={appearance}
      data-tone={tone}
      data-error={showError ? 'true' : undefined}
      data-disabled={disabled || undefined}
      className={cn(styles.root, className)}
    >
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <div className={styles.control}>
        <TextInput
          ref={inputRef}
          id={inputId}
          type="time"
          embedded
          appearance={appearance}
          tone={tone}
          error={error}
          disabled={disabled}
          aria-describedby={supportingId}
          className={styles.input}
          {...props}
        />
        <button
          type="button"
          className={styles.trailing}
          aria-label={timeLabel}
          disabled={disabled}
          tabIndex={-1}
          onClick={openPicker}
        >
          <ClockIcon />
        </button>
      </div>
      {supportingText ? (
        <span id={supportingId} className={styles.supporting}>
          {supportingText}
        </span>
      ) : null}
    </div>
  )
}
