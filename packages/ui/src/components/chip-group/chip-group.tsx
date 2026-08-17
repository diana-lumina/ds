import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './chip-group.module.css'

export type ChipGroupProps = React.ComponentProps<'div'>

/**
 * Pattern compartido para componer chips relacionados mediante instancias reales
 * de FilterChip o InputChip. No introduce una acción ni apariencia propias;
 * organiza wrap y gap. Alignment es responsabilidad del contenedor padre.
 */
export function ChipGroup({ className, children, ...props }: ChipGroupProps) {
  return (
    <div data-slot="chip-group" className={cn(styles.root, className)} {...props}>
      {children}
    </div>
  )
}
