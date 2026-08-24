"use client"

import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './side-navigation.module.css'

export interface SideNavigationProps
  extends Omit<React.ComponentProps<'nav'>, 'children'> {
  /** Heading opcional de la sección. */
  heading?: string
  /** SLOT nativo: instancias reales de NavigationItem. Current lo aporta cada ítem. */
  children: React.ReactNode
}

function withSideNavigationContext(children: React.ReactNode) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement<{ context?: string }>(child)) {
      return child
    }

    return React.cloneElement(child, { context: 'side-navigation' })
  })
}

/**
 * Navegación lateral. Compone heading opcional y SLOT de NavigationItem
 * (context=side-navigation). La exclusividad de current la garantiza el consumidor.
 */
export function SideNavigation({
  heading,
  children,
  className,
  'aria-label': ariaLabel,
  ...props
}: SideNavigationProps) {
  const headingId = React.useId()

  return (
    <nav
      data-slot="side-navigation"
      aria-label={heading ? undefined : (ariaLabel ?? 'Navegación')}
      aria-labelledby={heading ? headingId : undefined}
      className={cn(styles.root, className)}
      {...props}
    >
      {heading ? (
        <h2 id={headingId} className={styles.heading}>
          {heading}
        </h2>
      ) : null}
      <div className={styles.list}>{withSideNavigationContext(children)}</div>
    </nav>
  )
}
