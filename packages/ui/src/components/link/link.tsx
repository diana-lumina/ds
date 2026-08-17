"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import { SalesIcon } from '@workspace/ui/icons'
import styles from './link.module.css'

export interface LinkProps extends Omit<React.ComponentProps<"a">, 'children'> {
  /** inline en flujo de texto · standalone como enlace autónomo */
  context?: 'inline' | 'standalone'
  tone?: 'standard' | 'inverse'
  /** Label (string editable). Debe describir el destino. */
  label: string
  /**
   * Destino externo: muestra el glyph canónico Sales y abre en pestaña nueva
   * (`target="_blank"` + `rel="noopener noreferrer"`).
   */
  external?: boolean
  href: string
}

export function Link({
  context = 'standalone',
  tone = 'standard',
  href,
  label,
  external = false,
  className,
  target,
  rel,
  ...props
}: LinkProps) {
  return (
    <a
      data-slot="link"
      data-context={context}
      data-tone={tone}
      data-external={external || undefined}
      href={href}
      target={target ?? (external ? '_blank' : undefined)}
      rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
      className={cn(styles.root, className)}
      {...props}
    >
      <span className={styles.label}>{label}</span>
      {external && (
        <span className={styles.iconWrapper} aria-hidden="true">
          <SalesIcon />
        </span>
      )}
    </a>
  )
}
