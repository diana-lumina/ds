"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './input-chip.module.css'
import { CloseIcon } from "@workspace/ui/icons"

export interface InputChipProps {
  size?: 'sm' | 'md'
  icon?: React.ReactNode
  children: React.ReactNode
  onClose: () => void
  closeDisabled?: boolean
  closeLabel?: string
  className?: string
}

export function InputChip({
  size = 'sm',
  icon,
  children,
  onClose,
  closeDisabled = false,
  closeLabel = 'Quitar',
  className,
}: InputChipProps) {
  return (
    <span
      data-slot="input-chip"
      data-size={size}
      data-close-disabled={closeDisabled}
      className={cn(styles.root, className)}
    >
      {icon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{children}</span>
      <button
        type="button"
        data-slot="input-chip-close"
        className={styles.closeButton}
        onClick={onClose}
        disabled={closeDisabled}
        aria-label={closeLabel}
      >
        <CloseIcon />
      </button>
    </span>
  )
}

