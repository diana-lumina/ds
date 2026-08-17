import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './badge.module.css'

export interface BadgeProps extends Omit<React.ComponentProps<"span">, 'children'> {
  size?: 'sm' | 'md'
  tone?: 'neutral'
  label: string
}

export function Badge({
  size = 'sm',
  tone = 'neutral',
  label,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      data-size={size}
      data-tone={tone}
      className={cn(styles.root, className)}
      {...props}
    >
      {label}
    </span>
  )
}
