import * as React from 'react'
import { Textarea } from '../textarea'
import { cn } from '../../lib/utils'
import { AlertCircleIcon } from 'lucide-react'

export type TextAreaProps = {
  id?: string
  name?: string
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
  readOnly?: boolean
  error?: boolean
  errorMessage?: string
  hint?: string
  label?: string
  required?: boolean
  maxLength?: number
  showCount?: boolean
  rows?: number
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  autoFocus?: boolean
  autoComplete?: string
  className?: string
}

export function TextArea({
  id,
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  readOnly = false,
  error = false,
  errorMessage,
  hint,
  label,
  required = false,
  maxLength,
  showCount = false,
  rows = 4,
  resize = 'vertical',
  autoFocus = false,
  autoComplete,
  className,
}: TextAreaProps) {
  const innerId = React.useId()
  const inputId = id ?? innerId

  const currentLength = value?.length ?? 0

  const resizeClass = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  }[resize]

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {/* Label */}
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium">
          {label}
          {required && (
            <span className="text-destructive ml-0.5" aria-hidden="true">*</span>
          )}
        </label>
      )}

      {/* Textarea wrapper */}
      <div className="relative">
        <Textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          rows={rows}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
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
            resizeClass,
            error && 'border-destructive focus-visible:ring-destructive/20 pr-8',
            readOnly && 'bg-muted cursor-default',
          )}
        />

        {/* Ícono de error */}
        {error && (
          <span className="absolute top-2.5 right-2.5 text-destructive pointer-events-none">
            <AlertCircleIcon size={16} />
          </span>
        )}
      </div>

      {/* Footer: hint/error + contador */}
      <div className="flex items-start justify-between gap-2">
        <div>
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

        {/* Contador de caracteres */}
        {showCount && maxLength && (
          <span className={cn(
            'text-xs text-muted-foreground shrink-0 ml-auto',
            currentLength >= maxLength && 'text-destructive'
          )}>
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    </div>
  )
}