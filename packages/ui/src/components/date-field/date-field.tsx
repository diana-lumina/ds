"use client"

import * as React from 'react'
import { CalendarIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import {
  TextInput,
  type TextInputAppearance,
  type TextInputTone,
} from '../text-input'
import styles from './date-field.module.css'

export type DateFieldAppearance = TextInputAppearance
export type DateFieldTone = TextInputTone

export interface DateFieldProps
  extends Omit<React.ComponentProps<'input'>, 'disabled' | 'type'> {
  label: string
  supportingText?: string
  appearance?: DateFieldAppearance
  tone?: DateFieldTone
  error?: boolean
  disabled?: boolean
  /** Label accesible del ícono de calendario. */
  calendarLabel?: string
  /** Si se pasa, el ícono no abre el picker nativo. */
  onCalendarClick?: React.MouseEventHandler<HTMLButtonElement>
  /** `aria-expanded` del ícono cuando un popup controla la apertura. */
  calendarExpanded?: boolean
  /** `false` evita el date picker nativo (lo usa DatePicker). */
  nativePicker?: boolean
}

/**
 * Campo de fecha: FormField (label + supporting) y TextInput type="date"
 * outlined | underline × standard | inverse. CalendarIcon trailing.
 * Por defecto abre el picker nativo; DatePicker pasa onCalendarClick.
 */
export function DateField({
  label,
  supportingText,
  appearance = 'outlined',
  tone = 'standard',
  error = false,
  disabled,
  calendarLabel = 'Abrir calendario',
  onCalendarClick,
  calendarExpanded,
  nativePicker = true,
  className,
  id,
  onClick,
  ...props
}: DateFieldProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const supportingId = supportingText ? `${inputId}-supporting` : undefined
  const showError = error && !disabled

  function openPicker(event: React.MouseEvent<HTMLButtonElement>) {
    if (disabled) return
    if (onCalendarClick) {
      onCalendarClick(event)
      return
    }
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
      data-slot="date-field"
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
          type="date"
          embedded
          appearance={appearance}
          tone={tone}
          error={error}
          disabled={disabled}
          aria-describedby={supportingId}
          className={styles.input}
          {...props}
          onClick={(event) => {
            onClick?.(event)
            if (!nativePicker) event.preventDefault()
          }}
        />
        <button
          type="button"
          className={styles.trailing}
          aria-label={calendarLabel}
          aria-haspopup={onCalendarClick ? 'dialog' : undefined}
          aria-expanded={onCalendarClick ? Boolean(calendarExpanded) : undefined}
          disabled={disabled}
          tabIndex={onCalendarClick ? 0 : -1}
          onClick={openPicker}
        >
          <CalendarIcon />
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
