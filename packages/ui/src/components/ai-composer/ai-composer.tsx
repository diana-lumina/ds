"use client"

import * as React from 'react'
import { ArrowUpIcon, PlusIcon, StopIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import { IconButton } from '../icon-button'
import styles from './ai-composer.module.css'

export type AiComposerStatus =
  | 'default'
  | 'submitting'
  | 'generating'
  | 'error'
  | 'disabled'

export interface AiComposerProps
  extends Omit<React.ComponentProps<'textarea'>, 'disabled'> {
  status?: AiComposerStatus
  /** Acción izquierda (IconButton tertiary sm). */
  leadingAction?: React.ReactNode
  /** Acción derecha (IconButton primary sm). */
  trailingAction?: React.ReactNode
  onLeadingActionClick?: React.MouseEventHandler<HTMLButtonElement>
  onTrailingActionClick?: React.MouseEventHandler<HTMLButtonElement>
  onSubmit?: (value: string) => void
}

/**
 * Composer de mensaje de IA. Status: default, submitting, generating, error, disabled.
 * Content: empty (placeholder) o value. Acciones sm: tertiary izquierda, primary derecha.
 */
export const AiComposer = React.forwardRef<HTMLTextAreaElement, AiComposerProps>(
  function AiComposer(
    {
      status = 'default',
      leadingAction,
      trailingAction,
      onLeadingActionClick,
      onTrailingActionClick,
      onSubmit,
      className,
      value,
      defaultValue,
      onChange,
      onKeyDown,
      placeholder = 'Escribe un mensaje',
      id,
      ...props
    },
    forwardedRef,
  ) {
    const generatedId = React.useId()
    const fieldId = id ?? generatedId
    const isControlled = value !== undefined
    const [uncontrolled, setUncontrolled] = React.useState(
      () => (defaultValue == null ? '' : String(defaultValue)),
    )
    const current = isControlled ? String(value ?? '') : uncontrolled
    const isDisabled = status === 'disabled'
    const isBusy = status === 'submitting' || status === 'generating'
    const fieldLocked = isDisabled || isBusy
    const isEmpty = current.length === 0

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      if (!isControlled) setUncontrolled(event.target.value)
      onChange?.(event)
    }

    function submitIfReady() {
      if (fieldLocked || isEmpty) return
      onSubmit?.(current)
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
      onKeyDown?.(event)
      if (event.defaultPrevented) return
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        submitIfReady()
      }
    }

    function handleTrailingClick(event: React.MouseEvent<HTMLButtonElement>) {
      onTrailingActionClick?.(event)
      if (event.defaultPrevented) return
      if (status === 'generating') return
      submitIfReady()
    }

    const defaultLeading = (
      <IconButton
        type="button"
        size="sm"
        hierarchy="tertiary"
        icon={<PlusIcon />}
        aria-label="Adjuntar"
        disabled={fieldLocked}
        onClick={onLeadingActionClick}
      />
    )

    const isSubmitting = status === 'submitting'
    const isGenerating = status === 'generating'
    const trailingDisabled = isDisabled || (!isSubmitting && !isGenerating && isEmpty)

    const defaultTrailing = (
      <IconButton
        type="button"
        size="sm"
        hierarchy="primary"
        icon={isGenerating ? <StopIcon /> : <ArrowUpIcon />}
        aria-label={isGenerating ? 'Detener' : 'Enviar'}
        loading={isSubmitting}
        disabled={trailingDisabled}
        onClick={handleTrailingClick}
      />
    )

    return (
      <div
        data-slot="ai-composer"
        data-status={status}
        data-empty={isEmpty ? 'true' : undefined}
        aria-busy={isBusy || undefined}
        className={cn(styles.root, className)}
      >
        <textarea
          ref={forwardedRef}
          id={fieldId}
          data-slot="ai-composer-field"
          className={styles.field}
          disabled={isDisabled}
          readOnly={isBusy}
          placeholder={placeholder}
          aria-invalid={status === 'error' ? true : undefined}
          rows={2}
          {...props}
          value={current}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div data-slot="ai-composer-actions" className={styles.actions}>
          {leadingAction ?? defaultLeading}
          {trailingAction ?? defaultTrailing}
        </div>
      </div>
    )
  },
)
