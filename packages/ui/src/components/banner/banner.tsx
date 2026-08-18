"use client"

import * as React from 'react'
import { CloseIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import { IconButton } from '../icon-button'
import type { AlertIntent } from '../alert'
import styles from './banner.module.css'

export type BannerIntent = AlertIntent

export interface BannerProps
  extends Omit<React.ComponentProps<'div'>, 'children' | 'title'> {
  intent?: BannerIntent
  icon?: React.ReactNode
  title: string
  message: string
  /** Link opcional (instancia de Link). */
  link?: React.ReactNode
  /** Muestra IconButton tertiary sm a la derecha. */
  onDismiss?: () => void
  dismissLabel?: string
}

export function Banner({
  intent = 'info',
  icon,
  title,
  message,
  link,
  onDismiss,
  dismissLabel = 'Cerrar',
  className,
  ...props
}: BannerProps) {
  const titleId = React.useId()
  const messageId = React.useId()

  return (
    <div
      data-slot="banner"
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
