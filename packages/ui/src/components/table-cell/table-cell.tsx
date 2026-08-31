import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './table-cell.module.css'

export interface TableCellProps extends React.ComponentProps<'td'> {}

/**
 * Celda de tabla. Semantic/Label/Medium. Contenido vía children.
 */
export function TableCell({ className, children, ...props }: TableCellProps) {
  return (
    <td data-slot="table-cell" className={cn(styles.root, className)} {...props}>
      {children}
    </td>
  )
}
