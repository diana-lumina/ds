"use client"

import * as React from "react"
import { MagnifyingGlassIcon, XIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import {
  TextInput,
  type TextInputAppearance,
  type TextInputTone,
} from '../text-input'
import styles from './search.module.css'

export type SearchAppearance = TextInputAppearance
export type SearchTone = TextInputTone

export interface SearchProps
  extends Omit<React.ComponentProps<"input">, 'disabled' | 'type'> {
  appearance?: SearchAppearance
  tone?: SearchTone
  error?: boolean
  disabled?: boolean
  /** Label accesible del botón clear. */
  clearLabel?: string
  onClear?: () => void
}

export function Search({
  appearance = 'outlined',
  tone = 'standard',
  error = false,
  disabled,
  className,
  value,
  defaultValue,
  onChange,
  onClear,
  clearLabel = 'Borrar búsqueda',
  placeholder = 'Buscar',
  id,
  ...props
}: SearchProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const isControlled = value !== undefined
  const [uncontrolled, setUncontrolled] = React.useState(
    () => (defaultValue == null ? '' : String(defaultValue)),
  )
  const current = isControlled ? String(value ?? '') : uncontrolled
  const showError = error && !disabled
  const showClear = current.length > 0 && !disabled

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) setUncontrolled(event.target.value)
    onChange?.(event)
  }

  function handleClear() {
    if (!isControlled) setUncontrolled('')
    onClear?.()
    onChange?.({
      target: { value: '' },
      currentTarget: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>)
    inputRef.current?.focus()
  }

  return (
    <div
      data-slot="search"
      data-appearance={appearance}
      data-tone={tone}
      data-error={showError ? 'true' : undefined}
      data-disabled={disabled || undefined}
      className={cn(styles.root, className)}
    >
      <span aria-hidden="true" className={styles.leading}>
        <MagnifyingGlassIcon />
      </span>
      <TextInput
        ref={inputRef}
        id={inputId}
        type="search"
        embedded
        appearance={appearance}
        tone={tone}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
        value={current}
        className={cn(styles.input)}
        onChange={handleChange}
      />
      {showClear ? (
        <button
          type="button"
          className={styles.clear}
          aria-label={clearLabel}
          onClick={handleClear}
        >
          <XIcon />
        </button>
      ) : null}
    </div>
  )
}
