import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './counter-badge.module.css'

export interface CounterBadgeProps extends Omit<React.ComponentProps<"span">, 'children'> {
  size?: 'sm' | 'md'
  emphasis?: 'neutral' | 'attention' | 'inverse'
  count: number
  max?: number
}

export function CounterBadge({
  size = 'sm',
  emphasis = 'neutral',
  count,
  max,
  className,
  ...props
}: CounterBadgeProps) {
  const display = max !== undefined && count > max ? `${max}+` : String(count)

  return (
    <span
      data-slot="counter-badge"
      data-size={size}
      data-emphasis={emphasis}
      className={cn(styles.root, className)}
      {...props}
    >
      {display}
    </span>
  )
}