import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './tag.module.css'

export interface TagProps
  extends Omit<React.ComponentProps<"span">, 'children' | 'onClick'> {
  size?: 'sm' | 'md'
  tone?: 'neutral' | 'brand'
  /** Label breve y específico de la clasificación. */
  label: string
  /** Leading icon opcional (instance swap). Complementario; no única fuente de significado. */
  icon?: React.ReactNode
}

/**
 * Clasificación o identificación de contenido. No interactivo: sin State, selected, dismiss, href ni onClick.
 */
export function Tag({
  size = 'sm',
  tone = 'neutral',
  label,
  icon,
  className,
  ...props
}: TagProps) {
  return (
    <span
      data-slot="tag"
      data-size={size}
      data-tone={tone}
      className={cn(styles.root, className)}
      {...props}
    >
      {icon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{label}</span>
    </span>
  )
}
