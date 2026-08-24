"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './menu-item.module.css'

export interface MenuItemProps
  extends Omit<React.ComponentProps<"button">, 'children'> {
  /** Label (string editable). */
  label: string
}

/**
 * Ítem de menú. Default, hover, pressed, focus-visible y disabled son CSS nativos.
 */
export function MenuItem({
  label,
  className,
  disabled,
  type = 'button',
  ...props
}: MenuItemProps) {
  return (
    <button
      type={type}
      data-slot="menu-item"
      disabled={disabled}
      className={cn(styles.root, className)}
      {...props}
    >
      {label}
    </button>
  )
}
