"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './filter-chip.module.css'

export interface FilterChipProps
  extends Omit<React.ComponentProps<"button">, 'onClick' | 'children'> {
  size?: 'sm' | 'md'
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
  /** Leading icon opcional (instance swap). */
  icon?: React.ReactNode
  /** Label del filtro. */
  label?: React.ReactNode
}

export function FilterChip({
  size = 'sm',
  selected = false,
  onSelectedChange,
  icon,
  label,
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
      {label}
    </button>
  )
}
