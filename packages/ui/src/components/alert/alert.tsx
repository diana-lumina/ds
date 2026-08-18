"use client"

import * as React from 'react'
import { CloseIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import { IconButton } from '../icon-button'
import styles from './alert.module.css'

export type AlertIntent = 'info' | 'success' | 'warning' | 'danger'

export interface AlertProps
  extends Omit<React.ComponentProps<'div'>, 'children' | 'title'> {
  intent?: AlertIntent
  icon?: React.ReactNode
  title: string
  message: string
  /** Link opcional (instancia de Link). */
  link?: React.ReactNode
  /** Muestra IconButton tertiary sm a la derecha. */
  onDismiss?: () => void
  dismissLabel?: string
}

export function Alert({
  intent = 'info',
  icon,
  title,
  message,
  link,
  onDismiss,
  dismissLabel = 'Cerrar',
  className,
  ...props
}: AlertProps) {
  const titleId = React.useId()
  const messageId = React.useId()

  return (
    <div
      data-slot="alert"
      data-intent={intent}
      role={intent === 'danger' || intent === 'warning' ? 'alert' : 'status'}
      aria-labelledby={titleId}
      aria-describedby={messageId}
      className={cn(styles.root, className)}
      {...props}
    >
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <div className={styles.copy}>
        <p id={titleId} className={styles.title}>
          {title}
        </p>
        <p id={messageId} className={styles.message}>
          {message}
        </p>
        {link ? <div className={styles.link}>{link}</div> : null}
      </div>
      {onDismiss ? (
        <IconButton
          hierarchy="tertiary"
          size="sm"
          icon={<CloseIcon />}
          aria-label={dismissLabel}
          onClick={onDismiss}
        />
      ) : null}
    </div>
  )
}
