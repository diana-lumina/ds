"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import {
  PhoneInput,
  type PhoneCountry,
} from '../phone-input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select'
import { TextArea, type TextAreaProps } from '../text-area'
import {
  TextInput,
  type TextInputAppearance,
  type TextInputTone,
} from '../text-input'
import styles from './form-field.module.css'

export type FormFieldControl = 'input' | 'textarea' | 'select' | 'phone'
export type FormFieldTone = TextInputTone

export type FormFieldOption = {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

export interface FormFieldProps
  extends Omit<React.ComponentProps<"input">, 'disabled' | 'value'> {
  /** Label visible (Semantic/Label/Medium/Strong). */
  label: string
  /** Texto de ayuda o error (Semantic/Label/Small). */
  supportingText?: string
  /** Apariencia del control interno. */
  appearance?: TextInputAppearance
  /** `standard` sobre superficies claras · `inverse` sobre oscuras / brand. */
  tone?: FormFieldTone
  /** Control interno. `multiline` equivale a `textarea`. */
  control?: FormFieldControl
  /** Usa TextArea en lugar de TextInput. */
  multiline?: boolean
  /** Filas iniciales del TextArea. */
  rows?: number
  /** Opciones cuando `control="select"`. */
  options?: FormFieldOption[]
  /** Valor del Select (controlado). */
  value?: string
  /** Valor inicial del Select (no controlado). */
  defaultValue?: string
  /** Cambio de valor del Select. */
  onValueChange?: (value: string) => void
  /** País seleccionado cuando `control="phone"`. */
  country?: string
  defaultCountry?: string
  onCountryChange?: (country: string) => void
  countries?: PhoneCountry[]
  /** Error: supporting text + control en estado error. */
  error?: boolean
  /** Disabled: el input no recibe interacción; el supporting text usa color disabled. */
  disabled?: boolean
}

/**
 * Campo de formulario: label, TextInput / TextArea / Select / PhoneInput y supporting text.
 * Appearances: outlined, underline. Tones: standard, inverse. Estados: default, error, disabled.
 */
export function FormField({
  label,
  supportingText,
  appearance = 'outlined',
  tone = 'standard',
  control,
  multiline = false,
  rows,
  options,
  value,
  defaultValue,
  onValueChange,
  country,
  defaultCountry,
  onCountryChange,
  countries,
  error = false,
  id,
  className,
  disabled,
  type,
  placeholder,
  ...props
}: FormFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const supportingId = supportingText ? `${inputId}-supporting` : undefined
  const resolvedControl = control ?? (multiline ? 'textarea' : 'input')
  const controlProps = {
    id: inputId,
    appearance,
    tone,
    error,
    disabled,
    'aria-describedby': supportingId,
  }

  return (
    <div
      data-slot="form-field"
      data-tone={tone}
      data-error={error && !disabled ? 'true' : 'false'}
      data-disabled={disabled || undefined}
      className={cn(styles.root, className)}
    >
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      {resolvedControl === 'phone' ? (
        <PhoneInput
          {...controlProps}
          country={country}
          defaultCountry={defaultCountry}
          onCountryChange={onCountryChange}
          countries={countries}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          {...props}
        />
      ) : resolvedControl === 'select' ? (
        <Select
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
        >
          <SelectTrigger {...controlProps}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : resolvedControl === 'textarea' ? (
        <TextArea
          rows={rows}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          {...controlProps}
          {...(props as unknown as TextAreaProps)}
        />
      ) : (
        <TextInput
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          {...controlProps}
          {...props}
        />
      )}
      {supportingText ? (
        <span id={supportingId} className={styles.supporting}>
          {supportingText}
        </span>
      ) : null}
    </div>
  )
}
