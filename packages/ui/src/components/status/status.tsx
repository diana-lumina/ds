import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './status.module.css'

export type StatusIntent = 'neutral' | 'info' | 'success' | 'warning' | 'danger'

export interface StatusProps extends React.ComponentProps<"span"> {
  size?: 'sm' | 'md'
  intent?: StatusIntent
  icon?: React.ReactNode
}

export function Status({
  size = 'sm',
  intent = 'neutral',
  icon,
  children,
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
      {children}
    </span>
  )
}