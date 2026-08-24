"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './pagination-item.module.css'

export interface PaginationItemProps
  extends Omit<React.ComponentProps<"button">, 'children'> {
  /** Página actual. Aplica `aria-current="page"`. Independiente de hover / pressed / focus-visible / disabled. */
  current?: boolean
  /** Número o contenido visible del ítem. */
  children: React.ReactNode
}

/**
 * Ítem de paginación. Current marca la página activa; los estados
 * default, hover, pressed, focus-visible y disabled son CSS nativos.
 * La exclusividad de current la garantiza el contenedor (Pagination).
 */
export function PaginationItem({
  current = false,
  children,
  className,
  disabled,
  type = 'button',
  ...props
}: PaginationItemProps) {
  return (
    <button
      type={type}
      data-slot="pagination-item"
      data-current={current ? 'true' : undefined}
      aria-current={current ? 'page' : undefined}
      disabled={disabled}
      className={cn(styles.root, className)}
      {...props}
    >
      {children}
    </button>
  )
}
