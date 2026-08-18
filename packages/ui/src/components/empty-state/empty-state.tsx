import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './empty-state.module.css'

export type EmptyStateType = 'empty' | 'error' | 'success'

export interface EmptyStateProps
  extends Omit<React.ComponentProps<'div'>, 'children' | 'title'> {
  /** empty · error · success */
  type?: EmptyStateType
  /** Visual de 32px (instance swap). */
  icon?: React.ReactNode
  /** Título (Semantic/Label/Medium/Strong). */
  title: string
  /** Supporting message (Semantic/Label/Medium). */
  message: string
  /** Acción primaria opcional (Button hierarchy="primary"). */
  action?: React.ReactNode
}

export function EmptyState({
  type = 'empty',
  icon,
  title,
  message,
  action,
  className,
  ...props
}: EmptyStateProps) {
  const titleId = React.useId()
  const messageId = React.useId()

  return (
    <div
      data-slot="empty-state"
      data-type={type}
      role={type === 'error' ? 'alert' : type === 'success' ? 'status' : undefined}
      aria-labelledby={titleId}
      aria-describedby={messageId}
      className={cn(styles.root, className)}
      {...props}
    >
      {icon ? (
        <span className={styles.visual} aria-hidden="true">
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
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  )
}
