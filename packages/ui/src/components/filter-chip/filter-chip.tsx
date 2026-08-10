"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './filter-chip.module.css'

export interface FilterChipProps extends Omit<React.ComponentProps<"button">, 'onClick'> {
  size?: 'sm' | 'md'
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
  icon?: React.ReactNode
}

export function FilterChip({
  size = 'sm',
  selected = false,
  onSelectedChange,
  icon,
  children,
  className,
  disabled,
  ...props
}: FilterChipProps) {
  return (
    <button
      type="button"
      data-slot="filter-chip"
      data-size={size}
      data-selected={selected}
      aria-pressed={selected}
      disabled={disabled}
      onClick={() => onSelectedChange?.(!selected)}
      className={cn(styles.root, className)}
      {...props}
    >
      {icon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </button>
  )
}