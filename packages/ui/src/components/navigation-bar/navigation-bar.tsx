"use client"

import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './navigation-bar.module.css'

export interface NavigationBarProps
  extends Omit<React.ComponentProps<'nav'>, 'children'> {
  /** SLOT nativo: instancias reales de NavigationItem. Current lo aporta cada ítem. */
  children: React.ReactNode
}

function withNavigationBarContext(children: React.ReactNode) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement<{ context?: string }>(child)) {
      return child
    }

    return React.cloneElement(child, { context: 'navigation-bar' })
  })
}

/**
 * Barra de navegación horizontal. SLOT de NavigationItem (context=navigation-bar).
 * La exclusividad de current la garantiza el consumidor.
 */
export function NavigationBar({
  children,
  className,
  'aria-label': ariaLabel = 'Navegación',
  ...props
}: NavigationBarProps) {
  return (
    <nav
      data-slot="navigation-bar"
      aria-label={ariaLabel}
      className={cn(styles.root, className)}
      {...props}
    >
      {withNavigationBarContext(children)}
    </nav>
  )
}
