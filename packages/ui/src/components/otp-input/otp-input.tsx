"use client"

import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './otp-input.module.css'

export const OTP_LENGTH = 6

export interface OtpInputProps
  extends Omit<
    React.ComponentProps<'div'>,
    'children' | 'onChange' | 'defaultValue'
  > {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  name?: string
  autoComplete?: string
  autoFocus?: boolean
  'aria-label'?: string
}

function onlyDigits(value: string) {
  return value.replace(/\D/g, '').slice(0, OTP_LENGTH)
}

function cellsOf(value: string) {
  return Array.from({ length: OTP_LENGTH }, (_, index) => value[index] ?? '')
}

/**
 * Código de un solo uso: 6 segmentos. Default y focus-visible (el anillo rodea el grupo).
 */
export function OtpInput({
  value,
  defaultValue = '',
  onValueChange,
  name,
  autoComplete = 'one-time-code',
  autoFocus,
  className,
  id,
  'aria-label': ariaLabel = 'Código de verificación',
  ...props
}: OtpInputProps) {
  const generatedId = React.useId()
  const groupId = id ?? generatedId
  const isControlled = value !== undefined
  const [uncontrolled, setUncontrolled] = React.useState(() =>
    onlyDigits(String(defaultValue)),
  )
  const current = onlyDigits(isControlled ? String(value ?? '') : uncontrolled)
  const cells = cellsOf(current)
  const refs = React.useRef<Array<HTMLInputElement | null>>([])

  function commit(next: string) {
    const digits = onlyDigits(next)
    if (!isControlled) setUncontrolled(digits)
    onValueChange?.(digits)
  }

  function focusAt(index: number) {
    const clamped = Math.max(0, Math.min(index, OTP_LENGTH - 1))
    refs.current[clamped]?.focus()
    refs.current[clamped]?.select()
  }

  function handleChange(index: number, raw: string) {
    const incoming = onlyDigits(raw)
    if (!incoming) return

    if (incoming.length > 1) {
      commit(incoming)
      focusAt(Math.min(incoming.length, OTP_LENGTH) - 1)
      return
    }

    const writeAt = Math.min(index, current.length)
    const next = (
      current.slice(0, writeAt) +
      incoming +
      current.slice(writeAt + 1)
    ).slice(0, OTP_LENGTH)
    commit(next)
    focusAt(next.length >= OTP_LENGTH ? OTP_LENGTH - 1 : writeAt + 1)
  }

  function handleKeyDown(
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault()
      if (current[index]) {
        commit(current.slice(0, index) + current.slice(index + 1))
        return
      }
      if (index > 0) {
        commit(current.slice(0, index - 1) + current.slice(index))
        focusAt(index - 1)
      }
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      focusAt(index - 1)
      return
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      focusAt(index + 1)
    }
  }

  function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
    const pasted = onlyDigits(event.clipboardData.getData('text'))
    if (!pasted) return
    event.preventDefault()
    commit(pasted)
    focusAt(Math.min(pasted.length, OTP_LENGTH) - 1)
  }

  return (
    <div
      id={groupId}
      role="group"
      data-slot="otp-input"
      aria-label={ariaLabel}
      className={cn(styles.root, className)}
      {...props}
    >
      {name ? <input type="hidden" name={name} value={current} /> : null}
      {cells.map((digit, index) => (
        <input
          key={index}
          ref={(node) => {
            refs.current[index] = node
          }}
          id={index === 0 ? `${groupId}-0` : undefined}
          className={styles.segment}
          data-slot="otp-input-segment"
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? autoComplete : 'off'}
          autoFocus={autoFocus && index === 0}
          aria-label={`Dígito ${index + 1} de ${OTP_LENGTH}`}
          maxLength={OTP_LENGTH}
          value={digit}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          onFocus={(event) => event.currentTarget.select()}
        />
      ))}
    </div>
  )
}
