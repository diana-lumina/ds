"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import { Link, type LinkProps } from '../link'
import styles from './breadcrumb-item.module.css'

export interface BreadcrumbItemProps
  extends Omit<LinkProps, 'context' | 'tone' | 'external'> {
  /** Página actual del recorrido. Aplica estilos current y `aria-current="page"`. */
  current?: boolean
}

/**
 * Ítem de un recorrido de navegación. Reutiliza Link (standalone / standard);
 * current expresa la ubicación actual y no cambia con hover, pressed ni visited.
 */
export function BreadcrumbItem({
  current = false,
  className,
  ...props
}: BreadcrumbItemProps) {
  return (
    <Link
      data-slot="breadcrumb-item"
      data-current={current || undefined}
      aria-current={current ? 'page' : undefined}
      context="standalone"
      tone="standard"
      className={cn(styles.root, className)}
      {...props}
    />
  )
}
