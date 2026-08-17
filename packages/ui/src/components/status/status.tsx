import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './status.module.css'

export type StatusIntent = 'neutral' | 'info' | 'success' | 'warning' | 'danger'

export interface StatusProps
  extends Omit<React.ComponentProps<"span">, 'children' | 'onClick'> {
  size?: 'sm' | 'md'
  intent?: StatusIntent
  /** Label breve y específico de la condición del sistema. */
  label: string
  /** Leading icon opcional (instance swap). Complementario; no única fuente de significado. */
  icon?: React.ReactNode
}

/**
 * Condición generada por el sistema. No interactivo: sin State, selected, dismiss, href ni onClick.
 */
export function Status({
  size = 'sm',
  intent = 'neutral',
  label,
  icon,
  className,
  ...props
}: StatusProps) {
  return (
    <span
      data-slot="status"
      data-size={size}
      data-intent={intent}
      className={cn(styles.root, className)}
      {...props}
    >
      {icon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{label}</span>
    </span>
  )
}
