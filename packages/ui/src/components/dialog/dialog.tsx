"use client"

import * as React from 'react'
import { Dialog as DialogPrimitive } from 'radix-ui'
import { CloseIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import { ButtonGroup } from '../button-group'
import { IconButton } from '../icon-button'
import styles from './dialog.module.css'

export type DialogSize = 'sm' | 'md' | 'lg'

export interface DialogProps {
  size?: DialogSize
  title: string
  children: React.ReactNode
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
  trigger?: React.ReactElement
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  dismissLabel?: string
  className?: string
}

/**
 * Dialog (overlay). Sizes sm 480 · md 640 · lg 800.
 * Cierre: IconButton tertiary sm. Acciones: Button secondary + primary, size md.
 */
export function Dialog({
  size = 'md',
  title,
  children,
  primaryAction,
  secondaryAction,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  dismissLabel = 'Cerrar',
  className,
}: DialogProps) {
  const hasActions = Boolean(primaryAction || secondaryAction)

  return (
    <DialogPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {trigger ? (
        <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      ) : null}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay data-slot="dialog-overlay" className={styles.overlay} />
        <DialogPrimitive.Content
          data-slot="dialog"
          data-size={size}
          className={cn(styles.content, className)}
        >
          <div className={styles.header}>
            <DialogPrimitive.Title className={styles.title}>
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Close asChild>
              <IconButton
                hierarchy="tertiary"
                size="sm"
                icon={<CloseIcon />}
                aria-label={dismissLabel}
              />
            </DialogPrimitive.Close>
          </div>
          <DialogPrimitive.Description asChild>
            <div className={styles.body}>{children}</div>
          </DialogPrimitive.Description>
          {hasActions ? (
            <div className={styles.actions}>
              <ButtonGroup>
                {secondaryAction}
                {primaryAction}
              </ButtonGroup>
            </div>
          ) : null}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
