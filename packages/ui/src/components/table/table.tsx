import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './table.module.css'

export interface TableProps extends Omit<React.ComponentProps<'table'>, 'children'> {
  /** Fila de TableHeaderCell. */
  header?: React.ReactNode
  /** TableRow. */
  children?: React.ReactNode
}

/**
 * Wrapper de TableHeaderCell y TableRow. Radius 16px, border 1px.
 */
export function Table({ header, children, className, ...props }: TableProps) {
  return (
    <div data-slot="table" className={cn(styles.frame, className)}>
      <table className={styles.table} {...props}>
        {header ? (
          <thead>
            <tr data-slot="table-header">{header}</tr>
          </thead>
        ) : null}
        {children ? <tbody>{children}</tbody> : null}
      </table>
    </div>
  )
}
