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
  /** Obligatorio en standard (solo ícono). */
  'aria-label': string
  children?: never
}

export type FloatingActionButtonExtendedProps = FloatingActionButtonBase & {
  type: 'extended'
  /** Etiqueta visible del botón extendido. */
  children: React.ReactNode
  'aria-label'?: string
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
    const { children, 'aria-label': ariaLabel, ...buttonProps } = rest as Omit<
      FloatingActionButtonExtendedProps,
      'type' | 'icon' | 'floating' | 'className' | 'disabled'
    >

    return (
      <Button
        data-slot="floating-action-button"
        data-type="extended"
        data-floating={floating}
        type="button"
        variant="default"
        tone="standard"
        size="lg"
        leftIcon={icon}
        disabled={disabled}
        aria-label={ariaLabel}
        className={sharedClassName}
        {...buttonProps}
      >
        {children}
      </Button>
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
      variant="default"
      icon={icon}
      disabled={disabled}
      aria-label={ariaLabel}
      className={sharedClassName}
      {...iconButtonProps}
    />
  )
}
