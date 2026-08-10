"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './link.module.css'

export interface LinkProps extends React.ComponentProps<"a"> {
  tone?: 'standard' | 'inverse'
  external?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export function Link({
  tone = 'standard',
  href,
  children,
  external = false,
  icon,
  iconPosition = 'right',
  className,
  ...props
}: LinkProps) {
  return (
    <a
      data-slot="link"
      data-tone={tone}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(styles.root, className)}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      )}
    </a>
  )
}
