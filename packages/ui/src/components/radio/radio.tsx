"use client"

import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"
import { cn } from '../../lib/utils'
import styles from './radio.module.css'

export interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {}

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn(styles.group, className)}
      {...props}
    />
  )
}

export interface RadioProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {}

export function Radio({ className, ...props }: RadioProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio"
      className={cn(styles.root, className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-indicator"
        className={styles.indicator}
      >
        <span className={styles.dot} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}
