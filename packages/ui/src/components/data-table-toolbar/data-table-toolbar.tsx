import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './data-table-toolbar.module.css'

export interface DataTableToolbarProps extends React.ComponentProps<'div'> {
  /** Search del toolbar. */
  search: React.ReactNode
  /** FilterChip (o ChipGroup). */
  filters?: React.ReactNode
  /** Button e IconButton. */
  actions?: React.ReactNode
}

/**
 * Toolbar de Data Table: Search, y slots opcionales de FilterChip, Button e IconButton.
 */
export function DataTableToolbar({
  search,
  filters,
  actions,
  className,
  children,
  ...props
}: DataTableToolbarProps) {
  return (
    <div
      data-slot="data-table-toolbar"
      className={cn(styles.root, className)}
      {...props}
    >
      <div data-slot="data-table-toolbar-search" className={styles.search}>
        {search}
      </div>
      {filters ? (
        <div data-slot="data-table-toolbar-filters" className={styles.slot}>
          {filters}
        </div>
      ) : null}
      {actions ? (
        <div data-slot="data-table-toolbar-actions" className={styles.slot}>
          {actions}
        </div>
      ) : null}
      {children}
    </div>
  )
}
