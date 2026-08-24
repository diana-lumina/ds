"use client"

import * as React from 'react'
import { Popover as PopoverPrimitive } from 'radix-ui'
import { cn } from '../../lib/utils'
import { Calendar } from '../calendar'
import {
  DateField,
  type DateFieldAppearance,
  type DateFieldTone,
} from '../date-field'
import styles from './date-picker.module.css'

export type DatePickerAppearance = DateFieldAppearance
export type DatePickerTone = DateFieldTone

export interface DatePickerProps
  extends Omit<
    React.ComponentProps<'div'>,
    'children' | 'defaultValue' | 'onChange'
  > {
  label: string
  supportingText?: string
  appearance?: DatePickerAppearance
  tone?: DatePickerTone
  error?: boolean
  disabled?: boolean
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  minDate?: Date
  maxDate?: Date
  locale?: string
  calendarLabel?: string
  name?: string
  id?: string
}

function toIsoDate(date: Date) {
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function fromIsoDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined
  const [yearStr, monthStr, dayStr] = value.split('-')
  if (!yearStr || !monthStr || !dayStr) return undefined
  const year = Number(yearStr)
  const month = Number(monthStr)
  const day = Number(dayStr)
  const date = new Date(year, month - 1, day)
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return undefined
  }
  return date
}

/**
 * Date Picker: DateField + Calendar en Popover (Radix).
 * El ícono abre el calendario; elegir un día cierra y actualiza el campo.
 */
export function DatePicker({
  label,
  supportingText,
  appearance = 'outlined',
  tone = 'standard',
  error = false,
  disabled,
  value,
  defaultValue,
  onValueChange,
  minDate,
  maxDate,
  locale = 'es-MX',
  calendarLabel,
  name,
  id,
  className,
  ...props
}: DatePickerProps) {
  const fieldRef = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState(false)
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue)
  const selected = value ?? uncontrolled

  function setSelected(next: Date | undefined) {
    if (value == null) setUncontrolled(next)
    onValueChange?.(next)
  }

  function handleFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const next = event.target.value ? fromIsoDate(event.target.value) : undefined
    setSelected(next)
  }

  return (
    <div
      data-slot="date-picker"
      data-appearance={appearance}
      data-tone={tone}
      className={cn(styles.root, className)}
      {...props}
    >
      <PopoverPrimitive.Root
        open={open}
        onOpenChange={(next) => {
          if (disabled) return
          setOpen(next)
        }}
      >
        <PopoverPrimitive.Anchor asChild>
          <div ref={fieldRef} className={styles.anchor}>
            <DateField
              label={label}
              supportingText={supportingText}
              appearance={appearance}
              tone={tone}
              error={error}
              disabled={disabled}
              calendarLabel={calendarLabel}
              nativePicker={false}
              calendarExpanded={open}
              onCalendarClick={() => {
                if (disabled) return
                setOpen((current) => !current)
              }}
              value={selected ? toIsoDate(selected) : ''}
              onChange={handleFieldChange}
              min={minDate ? toIsoDate(minDate) : undefined}
              max={maxDate ? toIsoDate(maxDate) : undefined}
              name={name}
              id={id}
            />
          </div>
        </PopoverPrimitive.Anchor>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            data-slot="date-picker-content"
            className={styles.content}
            side="bottom"
            align="start"
            sideOffset={8}
            onOpenAutoFocus={(event) => event.preventDefault()}
            onInteractOutside={(event) => {
              if (fieldRef.current?.contains(event.target as Node)) {
                event.preventDefault()
              }
            }}
          >
            <Calendar
              value={selected ?? null}
              onValueChange={(next) => {
                setSelected(next)
                setOpen(false)
              }}
              defaultMonth={selected}
              minDate={minDate}
              maxDate={maxDate}
              locale={locale}
            />
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}
