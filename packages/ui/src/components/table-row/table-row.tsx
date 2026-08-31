import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './table-row.module.css'

export interface TableRowProps extends React.ComponentProps<'tr'> {
  /** Fila seleccionada. Selected-hover es CSS (:hover). */
  selected?: boolean
}

/**
 * Fila de tabla. Se compone de TableCell. Divider thickness 1 en el bottom.
 * Estados: default, hover, selected, selected-hover (CSS).
 */
export function TableRow({
  selected = false,
  className,
  children,
  ...props
}: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      data-selected={selected ? 'true' : undefined}
      aria-selected={selected || undefined}
      className={cn(styles.root, className)}
      {...props}
    >
      {children}
    </tr>
  )
}
