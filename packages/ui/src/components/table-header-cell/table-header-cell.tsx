import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './table-header-cell.module.css'

export interface TableHeaderCellProps
  extends Omit<React.ComponentProps<'th'>, 'children'> {
  /** Texto (Semantic/Label/Medium/Strong). */
  label: string
  /** Ícono trailing opcional (a la derecha). */
  icon?: React.ReactNode
}

/**
 * Encabezado de columna. Estados: default, hover y focus-visible (CSS).
 */
export function TableHeaderCell({
  label,
  icon,
  className,
  onClick,
  scope = 'col',
  ...props
}: TableHeaderCellProps) {
  return (
    <th
      data-slot="table-header-cell"
      scope={scope}
      className={cn(styles.root, className)}
      {...props}
    >
      <button type="button" className={styles.trigger} onClick={onClick}>
        <span className={styles.label}>{label}</span>
        {icon ? (
          <span data-slot="table-header-cell-icon" className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </button>
    </th>
  )
}
