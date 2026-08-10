"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from '../../lib/utils'
import styles from './icon-button.module.css'

export interface IconButtonProps extends React.ComponentProps<"button"> {

  icon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'

  variant?: 'default' | 'inverse'

  asChild?: boolean

  'aria-label': string
}

export function IconButton({
  icon,
  size = 'md',
  variant = 'default',
  asChild = false,
  className,
  children,
  ...props
}: IconButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="icon-button"
      data-size={size}
      data-variant={variant}
      className={cn(styles.root, className)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <span aria-hidden="true" className={styles.iconWrapper}>
          {icon}
        </span>
      )}
    </Comp>
  )
}