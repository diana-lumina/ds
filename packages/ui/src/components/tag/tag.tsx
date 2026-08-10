import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './tag.module.css'

export interface TagProps extends React.ComponentProps<"span"> {
  size?: 'sm' | 'md'
  tone?: 'neutral' | 'brand'
  icon?: React.ReactNode
}

export function Tag({ size = 'sm', tone = 'neutral', icon, children, className, ...props }: TagProps) {
  return (
    <span data-slot="tag" data-size={size} data-tone={tone} className={cn(styles.root, className)} {...props}>
      {icon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  )
}