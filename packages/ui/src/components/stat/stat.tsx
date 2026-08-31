import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './stat.module.css'

export interface StatProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  /** Valor (Semantic/Heading/Medium). */
  value: string
  /** Label (Semantic/Body/Medium). */
  label: string
  /** Ícono 32px, columna izquierda (instance swap). */
  icon: React.ReactNode
}

/**
 * Stat: ícono 32px a la izquierda; value + label a la derecha.
 */
export function Stat({ value, label, icon, className, ...props }: StatProps) {
  const valueId = React.useId()
  const labelId = React.useId()

  return (
    <div
      data-slot="stat"
      aria-labelledby={valueId}
      aria-describedby={labelId}
      className={cn(styles.root, className)}
      {...props}
    >
      <span data-slot="stat-icon" className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <div className={styles.copy}>
        <p id={valueId} className={styles.value}>
          {value}
        </p>
        <p id={labelId} className={styles.label}>
          {label}
        </p>
      </div>
    </div>
  )
}
