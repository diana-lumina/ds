"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './segment.module.css'

export interface SegmentProps extends Omit<React.ComponentProps<"button">, 'onClick'> {
  size?: 'sm' | 'md' | 'lg'
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
}

export function Segment({
  size = 'sm',
  selected = false,
  onSelectedChange,
  children,
  className,
  disabled,
  ...props
}: SegmentProps) {
  return (
    <button
      type="button"
      data-slot="segment"
      data-size={size}
      data-selected={selected}
      aria-pressed={selected}
      disabled={disabled}
      onClick={() => onSelectedChange?.(!selected)}
      className={cn(styles.root, className)}
      {...props}
    >
      {children}
    </button>
  )
}
