import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './badge.module.css'

export interface BadgeProps extends React.ComponentProps<"span"> {
  size?: 'sm' | 'md'
  tone?: 'neutral'
}

export function Badge({ size = 'sm', tone = 'neutral', children, className, ...props }: BadgeProps) {
  return (
    <span data-slot="badge" data-size={size} data-tone={tone} className={cn(styles.root, className)} {...props}>
      {children}
    </span>
  )
}