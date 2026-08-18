import * as React from 'react'
import { cn } from '../../lib/utils'
import type { ProgressStepState } from '../progress-step'
import styles from './progress-indicator.module.css'

export type ProgressIndicatorProps = React.ComponentProps<'nav'>

function getStepState(child: React.ReactNode): ProgressStepState {
  if (React.isValidElement<{ state?: ProgressStepState }>(child)) {
    return child.props.state ?? 'upcoming'
  }
  return 'upcoming'
}

function connectorState(previous: ProgressStepState) {
  return previous === 'completed' ? 'completed' : 'upcoming'
}

export function ProgressIndicator({
  className,
  children,
  'aria-label': ariaLabel = 'Progreso',
  ...props
}: ProgressIndicatorProps) {
  const items = React.Children.toArray(children).filter(Boolean)

  return (
    <nav
      data-slot="progress-indicator"
      aria-label={ariaLabel}
      className={cn(className)}
      {...props}
    >
      <ol className={styles.list}>
        {items.map((child, index) => (
          <li key={index} className={styles.item}>
            {child}
            {index < items.length - 1 ? (
              <span
                data-slot="progress-indicator-connector"
                className={styles.connector}
                data-state={connectorState(getStepState(child))}
                aria-hidden="true"
              >
                <span className={styles.line} />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
