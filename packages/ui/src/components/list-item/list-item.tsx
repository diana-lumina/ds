"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import { Avatar } from '../avatar/avatar'
import styles from './list-item.module.css'

export interface ListItemProps
  extends Omit<React.ComponentProps<"button">, 'children'> {
  /** Texto primario (obligatorio). Semantic/Label/Medium. */
  primaryText: string
  /** Texto secundario (opcional). */
  secondaryText?: string
  /** Texto terciario (opcional). */
  tertiaryText?: string
  avatarSrc?: string
  avatarInitials?: string
  /** alt de la imagen del Avatar. Vacío si el nombre ya está en primaryText. */
  avatarAlt?: string
  /** Ícono trailing (instance swap). A la derecha del texto. */
  icon: React.ReactNode
}

function resolveLines(secondaryText?: string, tertiaryText?: string): 1 | 2 | 3 {
  if (tertiaryText) return 3
  if (secondaryText) return 2
  return 1
}

/**
 * Fila de lista: Avatar — texto (primary obligatorio) — ícono trailing.
 * Estados: default, hover, pressed, focus-visible, disabled.
 */
export function ListItem({
  primaryText,
  secondaryText,
  tertiaryText,
  avatarSrc,
  avatarInitials,
  avatarAlt = '',
  icon,
  className,
  disabled,
  type = 'button',
  ...props
}: ListItemProps) {
  const lines = resolveLines(secondaryText, tertiaryText)

  return (
    <button
      type={type}
      data-slot="list-item"
      data-lines={lines}
      disabled={disabled}
      className={cn(styles.root, className)}
      {...props}
    >
      <span className={styles.avatar} aria-hidden={avatarAlt ? undefined : true}>
        <Avatar
          size="sm"
          src={avatarSrc}
          initials={avatarInitials}
          alt={avatarAlt}
        />
      </span>
      <span className={styles.text}>
        <span className={styles.primary}>{primaryText}</span>
        {secondaryText ? (
          <span className={styles.secondary}>{secondaryText}</span>
        ) : null}
        {tertiaryText ? (
          <span className={styles.tertiary}>{tertiaryText}</span>
        ) : null}
      </span>
      <span className={styles.iconWrapper} data-slot="list-item-icon" aria-hidden="true">
        {icon}
      </span>
    </button>
  )
}
