"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import { Button } from '../button'
import styles from './file-upload-drop-zone.module.css'

export type FileUploadDropZoneTone = 'standard' | 'inverse'

export interface FileUploadDropZoneProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  tone?: FileUploadDropZoneTone
  disabled?: boolean
  primaryText: string
  secondaryText: string
  actionLabel: string
  accept?: string
  multiple?: boolean
  onFilesChange?: (files: FileList) => void
}

/**
 * Drop zone de carga: default | focus-visible/focus-within | disabled × standard | inverse.
 * Button: secondary (standard) · secondary inverse (inverse).
 */
export function FileUploadDropZone({
  tone = 'standard',
  disabled = false,
  primaryText,
  secondaryText,
  actionLabel,
  accept,
  multiple,
  onFilesChange,
  className,
  onDragOver,
  onDrop,
  ...props
}: FileUploadDropZoneProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const primaryId = React.useId()
  const secondaryId = React.useId()
  const inputId = React.useId()
  const isInverse = tone === 'inverse'

  function openPicker() {
    if (disabled) return
    inputRef.current?.click()
  }

  function emitFiles(files: FileList | null) {
    if (disabled || !files || files.length === 0) return
    onFilesChange?.(files)
  }

  return (
    <div
      data-slot="file-upload-drop-zone"
      data-tone={tone}
      data-disabled={disabled || undefined}
      aria-disabled={disabled || undefined}
      aria-labelledby={primaryId}
      aria-describedby={secondaryId}
      className={cn(styles.root, className)}
      onDragOver={(event) => {
        event.preventDefault()
        onDragOver?.(event)
      }}
      onDrop={(event) => {
        event.preventDefault()
        emitFiles(event.dataTransfer.files)
        onDrop?.(event)
      }}
      {...props}
    >
      <input
        ref={inputRef}
        id={inputId}
        className={styles.input}
        type="file"
        tabIndex={-1}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={(event) => {
          emitFiles(event.target.files)
          event.target.value = ''
        }}
      />
      <p id={primaryId} className={styles.primary}>
        {primaryText}
      </p>
      <p id={secondaryId} className={styles.secondary}>
        {secondaryText}
      </p>
      <Button
        type="button"
        size="sm"
        hierarchy="secondary"
        tone={isInverse ? 'inverse' : 'standard'}
        label={actionLabel}
        disabled={disabled}
        onClick={openPicker}
      />
    </div>
  )
}
