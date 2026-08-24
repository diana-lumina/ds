"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './calendar-day.module.css'

export interface CalendarDayProps
  extends Omit<React.ComponentProps<'button'>, 'children'> {
  /** Día seleccionado. Independiente de hover / disabled. */
  selected?: boolean
  /** Número o contenido visible del día. */
  children: React.ReactNode
}

/**
 * Día de calendario. Selected / unselected × default, hover y disabled (CSS nativo).
 */
export function CalendarDay({
  selected = false,
  children,
  className,
  disabled,
  type = 'button',
  ...props
}: CalendarDayProps) {
  return (
    <button
      type={type}
      data-slot="calendar-day"
      data-selected={selected ? 'true' : undefined}
      aria-pressed={selected}
      disabled={disabled}
      className={cn(styles.root, className)}
      {...props}
    >
      {children}
    </button>
  )
}
