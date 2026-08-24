"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './navigation-item.module.css'

export type NavigationItemContext = 'navigation-bar' | 'side-navigation'

export interface NavigationItemProps
  extends Omit<React.ComponentProps<"button">, 'children'> {
  /** `navigation-bar` (sin superficie en current) · `side-navigation` (superficie current). */
  context?: NavigationItemContext
  /** Destino o sección actual. Aplica `aria-current="page"`. Independiente de hover / pressed / focus-visible / disabled. */
  current?: boolean
  /** Label (string editable). */
  label: string
  /** Ícono leading opcional (16px). */
  icon?: React.ReactNode
}

/**
 * Ítem de navegación para navigation-bar o side-navigation.
 * Current marca la sección activa; default, hover, pressed, focus-visible y disabled son CSS nativos.
 */
export function NavigationItem({
  context = 'navigation-bar',
  current = false,
  label,
  icon,
  className,
  disabled,
  type = 'button',
  ...props
}: NavigationItemProps) {
  return (
    <button
      type={type}
      data-slot="navigation-item"
      data-context={context}
      data-current={current ? 'true' : undefined}
      data-icon={icon ? 'true' : undefined}
      aria-current={current ? 'page' : undefined}
      disabled={disabled}
      className={cn(styles.root, className)}
      {...props}
    >
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className={styles.label}>{label}</span>
    </button>
  )
}
