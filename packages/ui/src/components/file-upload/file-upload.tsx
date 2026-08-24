"use client"

import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from '../button'
import {
  FileUploadDropZone,
  type FileUploadDropZoneTone,
} from '../file-upload-drop-zone'
import {
  FileUploadItem,
  type FileUploadItemStatus,
} from '../file-upload-item'
import styles from './file-upload.module.css'

export type FileUploadType = 'button' | 'drag-zone'
export type FileUploadTone = 'standard' | 'inverse'

export type FileUploadEntry = {
  id: string
  primaryText: string
  secondaryText: string
  status?: FileUploadItemStatus
  actionLabel?: string
  progress?: number
}

export interface FileUploadProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  type?: FileUploadType
  tone?: FileUploadTone
  disabled?: boolean
  primaryText: string
  secondaryText: string
  actionLabel: string
  /** Copy interno de FileUploadDropZone. Solo aplica en `drag-zone`. */
  dropZonePrimaryText?: string
  dropZoneSecondaryText?: string
  supportingText?: string
  accept?: string
  multiple?: boolean
  /** Ítems controlados. Si no se pasa, se generan al elegir archivos. */
  items?: FileUploadEntry[]
  itemActionLabel?: string
  onFilesChange?: (files: File[]) => void
  onItemAction?: (id: string) => void
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function toEntry(file: File, id: string, actionLabel: string): FileUploadEntry {
  return {
    id,
    primaryText: file.name,
    secondaryText: formatFileSize(file.size),
    status: 'selected',
    actionLabel,
  }
}

/**
 * File Upload: type button | drag-zone × tone standard | inverse.
 * button: primary, secondary, Button secondary, supporting.
 * drag-zone: primary, secondary, FileUploadDropZone, supporting; FileUploadItem debajo al elegir.
 */
export function FileUpload({
  type = 'button',
  tone = 'standard',
  disabled = false,
  primaryText,
  secondaryText,
  actionLabel,
  dropZonePrimaryText = 'Arrastra el archivo aquí',
  dropZoneSecondaryText = 'PDF, DOCX o JPG · máximo 10 MB',
  supportingText,
  accept,
  multiple = true,
  items,
  itemActionLabel = 'Eliminar',
  onFilesChange,
  onItemAction,
  className,
  ...props
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const primaryId = React.useId()
  const secondaryId = React.useId()
  const supportingId = React.useId()
  const isInverse = tone === 'inverse'
  const dropTone: FileUploadDropZoneTone = tone
  const isItemsControlled = items != null

  const [internalFiles, setInternalFiles] = React.useState<
    { id: string; file: File }[]
  >([])

  const displayedItems = isItemsControlled
    ? items
    : internalFiles.map(({ id, file }) => toEntry(file, id, itemActionLabel))

  function emitFiles(list: FileList | File[]) {
    if (disabled) return
    const incoming = Array.from(list)
    if (incoming.length === 0) return

    if (!isItemsControlled) {
      const first = incoming[0]
      const next = multiple
        ? [
            ...internalFiles,
            ...incoming.map((file, index) => ({
              id: `${file.name}-${file.size}-${file.lastModified}-${internalFiles.length + index}`,
              file,
            })),
          ]
        : first
          ? [
              {
                id: `${first.name}-${first.size}-${first.lastModified}`,
                file: first,
              },
            ]
          : internalFiles
      setInternalFiles(next)
      onFilesChange?.(next.map((entry) => entry.file))
      return
    }

    onFilesChange?.(incoming)
  }

  function handleItemAction(id: string) {
    if (!isItemsControlled) {
      const next = internalFiles.filter((entry) => entry.id !== id)
      setInternalFiles(next)
      onFilesChange?.(next.map((entry) => entry.file))
    }
    onItemAction?.(id)
  }

  return (
    <div
      data-slot="file-upload"
      data-type={type}
      data-tone={tone}
      data-disabled={disabled || undefined}
      aria-disabled={disabled || undefined}
      aria-labelledby={primaryId}
      aria-describedby={
        [secondaryId, supportingText ? supportingId : null]
          .filter(Boolean)
          .join(' ') || undefined
      }
      className={cn(styles.root, className)}
      {...props}
    >
      <p id={primaryId} className={styles.primary}>
        {primaryText}
      </p>
      <p id={secondaryId} className={styles.secondary}>
        {secondaryText}
      </p>
      {type === 'drag-zone' ? (
        <FileUploadDropZone
          className={styles.dropZone}
          tone={dropTone}
          disabled={disabled}
          primaryText={dropZonePrimaryText}
          secondaryText={dropZoneSecondaryText}
          actionLabel={actionLabel}
          accept={accept}
          multiple={multiple}
          onFilesChange={emitFiles}
        />
      ) : (
        <div className={styles.trigger}>
          <input
            ref={inputRef}
            className={styles.input}
            type="file"
            tabIndex={-1}
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={(event) => {
              emitFiles(event.target.files ?? [])
              event.target.value = ''
            }}
          />
          <Button
            type="button"
            size="sm"
            hierarchy="secondary"
            tone={isInverse ? 'inverse' : 'standard'}
            label={actionLabel}
            disabled={disabled}
            onClick={() => {
              if (disabled) return
              inputRef.current?.click()
            }}
          />
        </div>
      )}
      {supportingText ? (
        <p
          id={supportingId}
          className={styles.supporting}
          data-tone={tone}
        >
          {supportingText}
        </p>
      ) : null}
      {displayedItems.length > 0 ? (
        <ul className={styles.list}>
          {displayedItems.map((item) => (
            <li key={item.id}>
              <FileUploadItem
                className={styles.item}
                status={item.status}
                tone={tone}
                primaryText={item.primaryText}
                secondaryText={item.secondaryText}
                actionLabel={item.actionLabel ?? itemActionLabel}
                progress={item.progress}
                onAction={() => handleItemAction(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
