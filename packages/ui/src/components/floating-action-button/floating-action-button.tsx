"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import { Button } from '../button'
import { IconButton } from '../icon-button'
import styles from './floating-action-button.module.css'

type FloatingActionButtonBase = Omit<
  React.ComponentProps<"button">,
  'type' | 'children' | 'aria-label'
> & {
  icon: React.ReactNode
  /** Cuando es true, fija el botón en la esquina inferior derecha. */
  floating?: boolean
}

export type FloatingActionButtonStandardProps = FloatingActionButtonBase & {
  type?: 'standard'
  /** Obligatorio en standard (Accessible label vía Icon Button anidado). */
  'aria-label': string
  label?: never
  loading?: never
}

export type FloatingActionButtonExtendedProps = FloatingActionButtonBase & {
  type: 'extended'
  /** Label visible (Button primary lg anidado). */
  label: string
  'aria-label'?: string
  loading?: boolean
}

export type FloatingActionButtonProps =
  | FloatingActionButtonStandardProps
  | FloatingActionButtonExtendedProps

export function FloatingActionButton(props: FloatingActionButtonProps) {
  const {
    type = 'standard',
    icon,
    floating = true,
    className,
    disabled,
    ...rest
  } = props

  const sharedClassName = cn(styles.root, className)

  if (type === 'extended') {
    const {
      label,
      'aria-label': ariaLabel,
      loading,
      ...buttonProps
    } = rest as Omit<
      FloatingActionButtonExtendedProps,
      'type' | 'icon' | 'floating' | 'className' | 'disabled'
    >

    return (
      <Button
        data-slot="floating-action-button"
        data-type="extended"
        data-floating={floating}
        type="button"
        hierarchy="primary"
        tone="standard"
        size="lg"
        leftIcon={icon}
        label={label}
        disabled={disabled}
        loading={loading}
        aria-label={ariaLabel}
        className={sharedClassName}
        {...buttonProps}
      />
    )
  }

  const { 'aria-label': ariaLabel, ...iconButtonProps } = rest as Omit<
    FloatingActionButtonStandardProps,
    'type' | 'icon' | 'floating' | 'className' | 'disabled'
  >

  return (
    <IconButton
      data-slot="floating-action-button"
      data-type="standard"
      data-floating={floating}
      type="button"
      size="lg"
      tone="standard"
      icon={icon}
      disabled={disabled}
      aria-label={ariaLabel}
      className={sharedClassName}
      {...iconButtonProps}
    />
  )
}
