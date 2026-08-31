"use client"

import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './chat-input.module.css'

export interface ChatInputProps
  extends Omit<React.ComponentProps<'input'>, 'disabled' | 'type'> {
  error?: boolean
  disabled?: boolean
}


export const ChatInput = React.forwardRef<HTMLInputElement, ChatInputProps>(
  function ChatInput(
    {
      error = false,
      disabled,
      className,
      value,
      defaultValue,
      onChange,
      placeholder = 'Escribe un mensaje',
      id,
      ...props
    },
    forwardedRef,
  ) {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    const isControlled = value !== undefined
    const [uncontrolled, setUncontrolled] = React.useState(
      () => (defaultValue == null ? '' : String(defaultValue)),
    )
    const current = isControlled ? String(value ?? '') : uncontrolled
    const showError = error && !disabled

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (!isControlled) setUncontrolled(event.target.value)
      onChange?.(event)
    }

    return (
      <div
        data-slot="chat-input"
        data-error={showError ? 'true' : undefined}
        data-disabled={disabled || undefined}
        data-empty={current.length === 0 ? 'true' : undefined}
        className={cn(styles.root, className)}
      >
        <input
          ref={forwardedRef}
          id={inputId}
          type="text"
          data-slot="chat-input-field"
          className={styles.input}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={showError ? true : undefined}
          {...props}
          value={current}
          onChange={handleChange}
        />
      </div>
    )
  },
)
