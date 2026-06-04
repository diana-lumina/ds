import * as React from 'react'
import { Input } from '../input'
import { cn } from '../../lib/utils'
import { AlertCircle } from 'lucide-react'

// ─── Props ───────────────────────────────────────────────
export type TextInputProps = {
  id?: string
  name?: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  readOnly?: boolean
  error?: boolean
  errorMessage?: string
  hint?: string
  label?: string
  required?: boolean
  maxLength?: number
  autoComplete?: string
  autoFocus?: boolean
  className?: string
}

// ─── Componente ──────────────────────────────────────────
export function TextInput({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  icon,
  iconPosition = 'left',
  disabled = false,
  readOnly = false,
  error = false,
  errorMessage,
  hint,
  label,
  required = false,
  maxLength,
  autoComplete,
  autoFocus,
  className,
}: TextInputProps) {
  // Genera un id estable si no se pasa uno — necesario para asociar label
  const innerId = React.useId()
  const inputId = id ?? innerId

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {/* Label */}
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium">
          {label}
          {required && <span className="text-destructive ml-0.5" aria-hidden="true">*</span>}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative flex items-center">
        {/* Icon izquierdo */}
        {icon && iconPosition === 'left' && (
          <span className="absolute left-3 text-muted-foreground shrink-0 pointer-events-none">
            {icon}
          </span>
        )}

        <Input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          required={required}
          aria-required={required}
          aria-invalid={error}
          aria-describedby={
            error && errorMessage
              ? `${inputId}-error`
              : hint
                ? `${inputId}-hint`
                : undefined
          }
          className={cn(
            icon && iconPosition === 'left' && 'pl-9',
            icon && iconPosition === 'right' && 'pr-9',
            error && 'border-destructive focus-visible:ring-destructive/20',
            readOnly && 'bg-muted cursor-default',
          )}
        />

        {/* Icon derecho — o error icon automático */}
        {error ? (
          <span className="absolute right-3 text-destructive shrink-0 pointer-events-none">
            <AlertCircle size={16} />
          </span>
        ) : icon && iconPosition === 'right' ? (
          <span className="absolute right-3 text-muted-foreground shrink-0 pointer-events-none">
            {icon}
          </span>
        ) : null}
      </div>

      {/* Hint o error message */}
      {error && errorMessage ? (
        <span id={`${inputId}-error`} className="text-xs text-destructive" role="alert">
          {errorMessage}
        </span>
      ) : hint ? (
        <span id={`${inputId}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </span>
      ) : null}
    </div>
  )
}