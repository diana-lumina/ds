"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "radix-ui"
import { cn } from '../../lib/utils'
import { CaretDownIcon, CaretUpIcon, CheckIcon } from '@workspace/ui/icons'
import styles from './select.module.css'

export type SelectAppearance = 'outlined' | 'underline'

export interface SelectProps
  extends React.ComponentProps<typeof SelectPrimitive.Root> {}

export function Select({ ...props }: SelectProps) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

export interface SelectGroupProps
  extends React.ComponentProps<typeof SelectPrimitive.Group> {}

export function SelectGroup({ ...props }: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

export interface SelectValueProps
  extends React.ComponentProps<typeof SelectPrimitive.Value> {}

export function SelectValue({ className, ...props }: SelectValueProps) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn(styles.value, className)}
      {...props}
    />
  )
}

export interface SelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  appearance?: SelectAppearance
  error?: boolean
  /** Sin cromo propio; el contenedor compuesto pinta el borde. */
  embedded?: boolean
}

export function SelectTrigger({
  appearance = 'outlined',
  error = false,
  className,
  children,
  disabled,
  embedded = false,
  ...props
}: SelectTriggerProps) {
  const showError = error && !disabled

  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-appearance={appearance}
      data-error={showError ? 'true' : undefined}
      data-embedded={embedded ? 'true' : undefined}
      className={cn(styles.trigger, className)}
      disabled={disabled}
      aria-invalid={showError ? true : undefined}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <CaretDownIcon className={styles.icon} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export interface SelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Content> {}

export function SelectContent({
  className,
  children,
  position = 'popper',
  align = 'start',
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(styles.content, className)}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={styles.viewport}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

export interface SelectLabelProps
  extends React.ComponentProps<typeof SelectPrimitive.Label> {}

export function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(styles.label, className)}
      {...props}
    />
  )
}

export interface SelectItemProps
  extends React.ComponentProps<typeof SelectPrimitive.Item> {
  /** Texto extra en la lista; no aparece en el trigger. */
  suffix?: React.ReactNode
}

export function SelectItem({ className, children, suffix, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(styles.item, className)}
      {...props}
    >
      <SelectPrimitive.ItemText data-slot="select-item-text">{children}</SelectPrimitive.ItemText>
      {suffix ? <span className={styles.itemSuffix}>{suffix}</span> : null}
      <SelectPrimitive.ItemIndicator className={styles.itemIndicator}>
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

export interface SelectSeparatorProps
  extends React.ComponentProps<typeof SelectPrimitive.Separator> {}

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(styles.separator, className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(styles.scrollButton, className)}
      {...props}
    >
      <CaretUpIcon />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(styles.scrollButton, className)}
      {...props}
    >
      <CaretDownIcon />
    </SelectPrimitive.ScrollDownButton>
  )
}
