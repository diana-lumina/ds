"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './input-chip.module.css'
import { CloseIcon } from "@workspace/ui/icons"

export interface InputChipProps {
  size?: 'sm' | 'md'
  /** Label (valor aplicado). */
  label: string
  /** Leading icon opcional (instance swap). */
  icon?: React.ReactNode
  onClose: () => void
  /** Disabled: no recibe interacción ni emite remoción. Close sigue visible. */
  disabled?: boolean
  /**
   * Nombre accesible del close. Por defecto: `Eliminar {label}`.
   */
  closeLabel?: string
  className?: string
}

export function InputChip({
  size = 'sm',
  label,
  icon,
  onClose,
  disabled = false,
  closeLabel,
  className,
}: InputChipProps) {
  const resolvedCloseLabel = closeLabel ?? `Eliminar ${label}`

  return (
    <span
      data-slot="input-chip"
      data-size={size}
      data-disabled={disabled || undefined}
      className={cn(styles.root, className)}
    >
      {icon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{label}</span>
      <button
        type="button"
        data-slot="input-chip-close"
        className={styles.closeButton}
        onClick={onClose}
        disabled={disabled}
        aria-label={resolvedCloseLabel}
      >
        <CloseIcon />
      </button>
    </span>
  )
}
