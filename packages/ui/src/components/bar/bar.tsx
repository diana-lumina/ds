"use client"

import * as React from 'react'
import { Progress as ProgressPrimitive } from 'radix-ui'
import { cn } from '../../lib/utils'
import styles from './bar.module.css'

export interface BarProps
  extends Omit<React.ComponentProps<typeof ProgressPrimitive.Root>, 'children'> {}

export function Bar({ className, value = 0, max = 100, ...props }: BarProps) {
  const numericMax = max ?? 100
  const numericValue = typeof value === 'number' ? value : 0
  const percent =
    numericMax > 0 ? Math.min(100, Math.max(0, (numericValue / numericMax) * 100)) : 0

  return (
    <ProgressPrimitive.Root
      data-slot="bar"
      className={cn(styles.root, className)}
      value={value}
      max={max}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="bar-indicator"
        className={styles.indicator}
        style={{ width: `${percent}%` }}
      />
    </ProgressPrimitive.Root>
  )
}
