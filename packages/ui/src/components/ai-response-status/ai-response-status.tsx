import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './ai-response-status.module.css'

export type AiResponseStatusActivity =
  | 'searching-sources'
  | 'generating'
  | 'streaming'
  | 'thinking'

export interface AiResponseStatusProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  activity?: AiResponseStatusActivity
  /** Texto visible. Si no se pasa, se usa el copy de la activity. */
  label?: string
}

const ACTIVITY_LABEL: Record<AiResponseStatusActivity, string> = {
  'searching-sources': 'Buscando fuentes',
  generating: 'Generando',
  streaming: 'Escribiendo',
  thinking: 'Pensando',
}

/**
 * Indicador de actividad de una respuesta de IA. Ellipsis + Body Small.
 */
export function AiResponseStatus({
  activity = 'thinking',
  label,
  className,
  ...props
}: AiResponseStatusProps) {
  const text = label ?? ACTIVITY_LABEL[activity]

  return (
    <div
      data-slot="ai-response-status"
      data-activity={activity}
      role="status"
      aria-live="polite"
      className={cn(styles.root, className)}
      {...props}
    >
      <span data-slot="ai-response-status-icon" className={styles.icon} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </span>
      <p className={styles.label}>{text}</p>
    </div>
  )
}
