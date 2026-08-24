"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import { LoadingIcon } from '@workspace/ui/icons'
import styles from './social-button.module.css'

export interface SocialButtonProps
  extends Omit<React.ComponentProps<"button">, 'children'> {
  /** Label visible. */
  label: string
  /** Ícono leading (marca social). Obligatorio. */
  icon: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export function SocialButton({
  label,
  icon,
  size = 'md',
  loading = false,
  className,
  disabled,
  type = 'button',
  ...props
}: SocialButtonProps) {
  const displayIcon = loading ? <LoadingIcon /> : icon

  return (
    <button
      type={type}
      data-slot="social-button"
      data-size={size}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cn(styles.root, className)}
      {...props}
    >
      <span aria-hidden="true" className={styles.icon}>
        {displayIcon}
      </span>
      <span>{label}</span>
    </button>
  )
}
