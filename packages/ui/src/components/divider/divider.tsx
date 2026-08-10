import * as React from "react"
import { cn } from '../../lib/utils'
import styles from './divider.module.css'

export interface DividerProps extends React.ComponentProps<"div"> {
  orientation?: 'horizontal' | 'vertical'
  thickness?: 1 | 2
}

export function Divider({ orientation = 'horizontal', thickness = 1, className, ...props }: DividerProps) {
  return (
    <div
      data-slot="divider"
      data-orientation={orientation}
      data-thickness={thickness}
      role="separator"
      aria-orientation={orientation}
      className={cn(styles.root, className)}
      {...props}
    />
  )
}