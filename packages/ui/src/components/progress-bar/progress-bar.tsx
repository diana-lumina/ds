"use client"

import * as React from 'react'
import { cn } from '../../lib/utils'
import { Bar } from '../bar'
import styles from './progress-bar.module.css'

export type ProgressBarValueFormat = 'percent' | 'fraction'

export interface ProgressBarProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  /** Label visible (Semantic/Label/Medium/Strong). */
  label: string
  /** Progreso actual. */
  value?: number
  /** Valor máximo. */
  max?: number
  /** Cómo se muestra el dato: porcentaje o fracción. */
  valueFormat?: ProgressBarValueFormat
}

function formatValue(
  value: number,
  max: number,
  valueFormat: ProgressBarValueFormat,
) {
  if (valueFormat === 'fraction') {
    return `${value} / ${max}`
  }

  const percent = max > 0 ? Math.round((value / max) * 100) : 0
  return `${percent}%`
}

export function ProgressBar({
  label,
  value = 0,
  max = 100,
  valueFormat = 'percent',
  className,
  ...props
}: ProgressBarProps) {
  const labelId = React.useId()
  const numericMax = max > 0 ? max : 100
  const numericValue = Math.min(numericMax, Math.max(0, value))
  const displayValue = formatValue(numericValue, numericMax, valueFormat)
  const valueText =
    valueFormat === 'fraction' ? `${numericValue} de ${numericMax}` : displayValue

  return (
    <div
      data-slot="progress-bar"
      data-value-format={valueFormat}
      className={cn(styles.root, className)}
      {...props}
    >
      <span id={labelId} className={styles.label}>
        {label}
      </span>
      <div className={styles.row}>
        <Bar
          className={styles.bar}
          value={numericValue}
          max={numericMax}
          aria-labelledby={labelId}
          aria-valuetext={valueText}
        />
        <span className={styles.value} aria-hidden="true">
          {displayValue}
        </span>
      </div>
    </div>
  )
}
