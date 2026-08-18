"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import { LoadingIcon } from '@workspace/ui/icons'
import styles from './icon-button.module.css'

export interface IconButtonProps
  extends Omit<React.ComponentProps<"button">, 'children'> {
  icon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  hierarchy?: 'primary' | 'tertiary'
  /** standard sobre superficies claras · inverse sobre oscuras / brand. Solo aplica a primary. */
  tone?: 'standard' | 'inverse'
  loading?: boolean
  'aria-label': string
}

export function IconButton({
  icon,
  size = 'md',
  hierarchy = 'primary',
  tone = 'standard',
  loading = false,
  className,
  disabled,
  ...props
}: IconButtonProps) {
  const displayIcon = loading ? <LoadingIcon /> : icon
  const effectiveTone = hierarchy === 'primary' ? tone : 'standard'

  return (
    <button
      data-slot="icon-button"
      data-size={size}
      data-hierarchy={hierarchy}
      data-tone={effectiveTone}
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
