"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"
import { cn } from '../../lib/utils'
import styles from './switch.module.css'

export interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {}

/**
 * Control binario on/off. Label pertenece al patrón consumidor.
 * Tamaño visual único (track 40×24).
 */
export function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(styles.root, className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={styles.thumb}
      />
    </SwitchPrimitive.Root>
  )
}
