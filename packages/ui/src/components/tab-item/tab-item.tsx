"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './tab-item.module.css'

export interface TabItemProps
  extends Omit<React.ComponentProps<"button">, 'onClick' | 'children'> {
  /** Selected=true identifica el tab activo; la exclusividad la garantiza el grupo. */
  selected?: boolean
  onSelectedChange?: (selected: boolean) => void
  /** Label (string editable). */
  label: string
}

/**
 * Ítem de un Tab. Selected / unselected son independientes de State
 * (default, hover, focus-visible, disabled). No administra exclusividad del grupo.
 */
export function TabItem({
  selected = false,
  onSelectedChange,
  label,
  className,
  disabled,
  ...props
}: TabItemProps) {
  return (
    <button
      type="button"
      role="tab"
      data-slot="tab-item"
      data-selected={selected}
      aria-selected={selected}
      disabled={disabled}
      onClick={() => onSelectedChange?.(!selected)}
      className={cn(styles.root, className)}
      {...props}
    >
      {label}
    </button>
  )
}
