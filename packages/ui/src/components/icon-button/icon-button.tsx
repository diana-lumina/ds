"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import { LoadingIcon } from '@workspace/ui/icons'
import styles from './icon-button.module.css'

export interface IconButtonProps
  extends Omit<React.ComponentProps<"button">, 'children'> {
  icon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  /** standard sobre superficies claras · inverse sobre oscuras / brand. Hierarchy = Primary (fija). */
  tone?: 'standard' | 'inverse'
  loading?: boolean
  'aria-label': string
}

export function IconButton({
  icon,
  size = 'md',
  tone = 'standard',
  loading = false,
  className,
  disabled,
  ...props
}: IconButtonProps) {
  const displayIcon = loading ? <LoadingIcon /> : icon

  return (
    <button
      data-slot="icon-button"
      data-size={size}
      data-tone={tone}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cn(styles.root, className)}
      {...props}
    >
      <span aria-hidden="true" className={styles.iconWrapper}>
        {displayIcon}
      </span>
    </button>
  )
}
