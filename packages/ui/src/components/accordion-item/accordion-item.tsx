"use client"

import * as React from 'react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import { CaretDownIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import { Divider } from '../divider'
import styles from './accordion-item.module.css'

export type AccordionItemTreatment = 'plain' | 'contained'

export interface AccordionItemProps {
  treatment?: AccordionItemTreatment
  /** Título (Semantic/Label/Medium/Strong). */
  title: string
  /** Texto de apoyo a la izquierda, junto al título. */
  supportingText?: string
  /** Ícono leading (24px). Ausente = off. */
  icon?: React.ReactNode
  /** Contenido al expandir. */
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
  className?: string
}

const ITEM_VALUE = 'accordion-item'

/**
 * Accordion Item. Treatments: plain · contained.
 * Estados (CSS): collapsed, hover, expanded, focus-visible.
 * Focus: plain = anillo en el trigger; contained = anillo rectangular inset al padding.
 */
export function AccordionItem({
  treatment = 'plain',
  title,
  supportingText,
  icon,
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  disabled,
  className,
}: AccordionItemProps) {
  const isControlled = open !== undefined

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      disabled={disabled}
      value={isControlled ? (open ? ITEM_VALUE : '') : undefined}
      defaultValue={defaultOpen ? ITEM_VALUE : undefined}
      onValueChange={(next) => onOpenChange?.(next === ITEM_VALUE)}
      className={styles.scope}
    >
      <AccordionPrimitive.Item
        value={ITEM_VALUE}
        data-slot="accordion-item"
        data-treatment={treatment}
        className={cn(styles.root, className)}
      >
        <AccordionPrimitive.Header className={styles.header}>
          <AccordionPrimitive.Trigger
            data-slot="accordion-item-trigger"
            className={styles.trigger}
          >
            {icon ? (
              <span data-slot="accordion-item-icon" className={styles.leading} aria-hidden="true">
                {icon}
              </span>
            ) : null}
            <span className={styles.copy}>
              <span className={styles.title}>{title}</span>
              {supportingText ? (
                <span className={styles.supporting}>{supportingText}</span>
              ) : null}
            </span>
            <span className={styles.caret} aria-hidden="true">
              <CaretDownIcon />
            </span>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content
          data-slot="accordion-item-content"
          className={styles.content}
        >
          <div className={styles.panel}>{children}</div>
        </AccordionPrimitive.Content>
        {treatment === 'plain' ? (
          <Divider thickness={1} className={styles.divider} />
        ) : null}
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  )
}
