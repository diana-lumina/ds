"use client"

import * as React from 'react'
import { Dialog as DialogPrimitive } from 'radix-ui'
import { CloseIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import { ButtonGroup } from '../button-group'
import { IconButton } from '../icon-button'
import styles from './drawer.module.css'

export type DrawerSize = 'sm' | 'lg'

export interface DrawerProps {
  size?: DrawerSize
  /** SLOT header. Si no se pasa, se usa `title`. */
  header?: React.ReactNode
  title?: string
  /** SLOT content: título de sección. */
  contentTitle?: string
  /** SLOT content. */
  children?: React.ReactNode
  /** SLOT footer. Si no se pasa, se usan las actions. */
  footer?: React.ReactNode
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
 * Drawer: panel derecho anclado al bottom. Hug-content (máx. 100vh).
 * Sizes sm 400 · lg 640. Cierre: IconButton tertiary (sm o lg según size).
 */
export function Drawer({
  size = 'sm',
  header,
  title,
  contentTitle,
  children,
  footer,
  primaryAction,
  secondaryAction,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  dismissLabel = 'Cerrar',
  className,
}: DrawerProps) {
  const closeSize = size === 'lg' ? 'lg' : 'sm'
  const accessibleTitle = title ?? 'Panel'
  const hasHeader = header != null || (title != null && title !== '')
  const hasContent = contentTitle != null || children != null
  const hasDescription = children != null
  const defaultFooter =
    primaryAction || secondaryAction ? (
      <div className={styles.footerActions}>
        <ButtonGroup>
          {secondaryAction}
          {primaryAction}
        </ButtonGroup>
      </div>
    ) : null
  const footerContent = footer ?? defaultFooter

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
        <DialogPrimitive.Overlay data-slot="drawer-overlay" className={styles.overlay} />
        <DialogPrimitive.Content
          data-slot="drawer"
          data-size={size}
          className={cn(styles.panel, className)}
          {...(hasDescription ? {} : { 'aria-describedby': undefined })}
        >
          <div className={styles.close}>
            <DialogPrimitive.Close asChild>
              <IconButton
                hierarchy="tertiary"
                size={closeSize}
                icon={<CloseIcon />}
                aria-label={dismissLabel}
              />
            </DialogPrimitive.Close>
          </div>
          {hasHeader ? (
            <div data-slot="drawer-header" className={styles.header}>
              {header ? (
                <>
                  <DialogPrimitive.Title className={styles.srOnly}>
                    {accessibleTitle}
                  </DialogPrimitive.Title>
                  {header}
                </>
              ) : (
                <DialogPrimitive.Title className={styles.title}>
                  {title}
                </DialogPrimitive.Title>
              )}
            </div>
          ) : (
            <DialogPrimitive.Title className={styles.srOnly}>
              {accessibleTitle}
            </DialogPrimitive.Title>
          )}
          {hasContent ? (
            <div data-slot="drawer-content" className={styles.body}>
              {contentTitle ? (
                <p className={styles.contentTitle}>{contentTitle}</p>
              ) : null}
              {hasDescription ? (
                <DialogPrimitive.Description asChild>
                  <div className={styles.text}>{children}</div>
                </DialogPrimitive.Description>
              ) : null}
            </div>
          ) : null}
          {footerContent ? (
            <div data-slot="drawer-footer" className={styles.footer}>
              {footerContent}
            </div>
          ) : null}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
