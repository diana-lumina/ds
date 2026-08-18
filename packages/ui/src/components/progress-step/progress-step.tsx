import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './progress-step.module.css'

export type ProgressStepState =
  | 'completed'
  | 'current'
  | 'upcoming'
  | 'error'
  | 'disabled'

export interface ProgressStepProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  /** Estado visual del paso. */
  state?: ProgressStepState
  /** Texto debajo del marker. */
  label: string
  /** Contenido del marker: ícono o número. */
  icon?: React.ReactNode
}

export function ProgressStep({
  state = 'upcoming',
  label,
  icon,
  className,
  ...props
}: ProgressStepProps) {
  return (
    <div
      data-slot="progress-step"
      data-state={state}
      aria-current={state === 'current' ? 'step' : undefined}
      aria-disabled={state === 'disabled' ? true : undefined}
      className={cn(styles.root, className)}
      {...props}
    >
      <span className={styles.marker} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
