"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import { Button } from '../button'
import { Bar } from '../bar'
import styles from './file-upload-item.module.css'

export type FileUploadItemStatus = 'selected' | 'uploading' | 'success' | 'error'
export type FileUploadItemTone = 'standard' | 'inverse'

export interface FileUploadItemProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  status?: FileUploadItemStatus
  tone?: FileUploadItemTone
  /** Nombre o título del archivo. */
  primaryText: string
  /** Supporting (peso, progreso, mensaje de éxito/error). */
  secondaryText: string
  /** Label del Button sm. */
  actionLabel: string
  onAction?: React.MouseEventHandler<HTMLButtonElement>
  /** Progreso 0–100. Solo aplica en `uploading`. */
  progress?: number
}

/**
 * Ítem de carga de archivo: selected | uploading | success | error × standard | inverse.
 * Button sm: secondary (standard) · secondary inverse (inverse).
 */
export function FileUploadItem({
  status = 'selected',
  tone = 'standard',
  primaryText,
  secondaryText,
  actionLabel,
  onAction,
  progress = 0,
  className,
  ...props
}: FileUploadItemProps) {
  const primaryId = React.useId()
  const secondaryId = React.useId()
  const isInverse = tone === 'inverse'
  const isUploading = status === 'uploading'
  const clampedProgress = Math.min(100, Math.max(0, progress))

  return (
    <div
      data-slot="file-upload-item"
      data-status={status}
      data-tone={tone}
      role={status === 'error' ? 'alert' : status === 'success' || isUploading ? 'status' : undefined}
      aria-busy={isUploading || undefined}
      aria-labelledby={primaryId}
      aria-describedby={secondaryId}
      className={cn(styles.root, className)}
      {...props}
    >
      <div className={styles.main}>
        <div className={styles.copy}>
          <p id={primaryId} className={styles.primary}>
            {primaryText}
          </p>
          <p id={secondaryId} className={styles.secondary}>
            {secondaryText}
          </p>
        </div>
        <Button
          size="sm"
          hierarchy="secondary"
          tone={isInverse ? 'inverse' : 'standard'}
          label={actionLabel}
          onClick={onAction}
        />
      </div>
      {isUploading ? (
        <Bar
          className={styles.bar}
          value={clampedProgress}
          max={100}
          aria-labelledby={secondaryId}
        />
      ) : null}
    </div>
  )
}
