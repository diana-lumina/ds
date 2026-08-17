import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './counter-badge.module.css'

export interface CounterBadgeProps extends Omit<React.ComponentProps<"span">, 'children'> {
  size?: 'sm' | 'md'
  emphasis?: 'neutral' | 'attention' | 'inverse'
  /** Texto breve ya resuelto por el consumidor: "1", "9", "24", "99+". */
  value: string
}

export function CounterBadge({
  size = 'sm',
  emphasis = 'neutral',
  value,
  className,
  ...props
}: CounterBadgeProps) {
  return (
    <span
      data-slot="counter-badge"
      data-size={size}
      data-emphasis={emphasis}
      className={cn(styles.root, className)}
      {...props}
    >
      {value}
    </span>
  )
}
