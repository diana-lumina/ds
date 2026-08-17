"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './segment.module.css'

export interface SegmentProps
  extends Omit<React.ComponentProps<"button">, 'onClick' | 'children'> {
  size?: 'sm' | 'md' | 'lg'
  /** Selected=true identifica la opción activa; la exclusividad la garantiza el grupo. */
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
  /** Leading icon (instance swap). A la izquierda si hay label. */
  icon?: React.ReactNode
  /** Label (string editable). Opcional si hay icon (icon-only requiere aria-label). */
  label?: string
}

/**
 * Subcomponente interno de Segmented Button.
 * Contenido: icon, label o ambos (icon a la izquierda).
 * No administra exclusividad del grupo ni debe consumirse como acción independiente.
 */
export function Segment({
  size = 'sm',
  selected = false,
  onSelectedChange,
  icon,
  label,
  className,
  disabled,
  ...props
}: SegmentProps) {
  const content =
    icon && label ? 'both' : icon ? 'icon' : 'label'

  return (
    <button
      type="button"
      data-slot="segment"
      data-size={size}
      data-selected={selected}
      data-content={content}
      aria-pressed={selected}
      disabled={disabled}
      onClick={() => onSelectedChange?.(!selected)}
      className={cn(styles.root, className)}
      {...props}
    >
      {icon ? (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {label}
    </button>
  )
}
