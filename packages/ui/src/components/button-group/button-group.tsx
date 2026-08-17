import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './button-group.module.css'

export interface ButtonGroupProps extends React.ComponentProps<'div'> {
  orientation?: 'horizontal' | 'vertical'
}

/**
 * Pattern compartido para componer acciones relacionadas mediante instancias reales de Button.
 * No introduce una acción ni apariencia propias; organiza orientación y respuesta al espacio.
 */
export function ButtonGroup({
  orientation = 'horizontal',
  className,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(styles.root, className)}
      {...props}
    >
      {children}
    </div>
  )
}
