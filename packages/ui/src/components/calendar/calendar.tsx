"use client"

import * as React from 'react'
import { CaretLeftIcon, CaretRightIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import { CalendarDay } from '../calendar-day'
import { IconButton } from '../icon-button'
import styles from './calendar.module.css'

const WEEK_STARTS_ON = 1

export interface CalendarProps
  extends Omit<React.ComponentProps<'div'>, 'children' | 'defaultValue'> {
  value?: Date | null
  defaultValue?: Date
  onValueChange?: (date: Date) => void
  month?: Date
  defaultMonth?: Date
  onMonthChange?: (month: Date) => void
  locale?: string
  minDate?: Date
  maxDate?: Date
  previousLabel?: string
  nextLabel?: string
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1)
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

function toTime(date: Date) {
  return startOfDay(date).getTime()
}

function buildWeeks(viewMonth: Date) {
  const first = startOfMonth(viewMonth)
  const startOffset = (first.getDay() - WEEK_STARTS_ON + 7) % 7
  const cursor = new Date(first.getFullYear(), first.getMonth(), 1 - startOffset)
  const weeks: Date[][] = []

  for (let week = 0; week < 6; week += 1) {
    const days: Date[] = []
    for (let day = 0; day < 7; day += 1) {
      days.push(new Date(cursor))
      cursor.setDate(cursor.getDate() + 1)
    }
    weeks.push(days)
  }

  return weeks
}

function weekdayLabels(locale: string) {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' })
  const sunday = new Date(2026, 0, 4)
  const start = new Date(sunday)
  start.setDate(sunday.getDate() + WEEK_STARTS_ON)

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start)
    date.setDate(start.getDate() + index)
    const label = formatter.format(date).replace(/\./g, '')
    return label.charAt(0).toUpperCase() + label.slice(1)
  })
}

function monthTitle(month: Date, locale: string) {
  const label = new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
  }).format(month)
  return label.charAt(0).toUpperCase() + label.slice(1)
}

function dayLabel(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(date)
}

/**
 * Calendario mensual. Compone IconButton tertiary md y CalendarDay.
 * Radix no tiene primitivo de calendario; shadcn usa react-day-picker + Tailwind.
 */
export function Calendar({
  value,
  defaultValue,
  onValueChange,
  month: monthProp,
  defaultMonth,
  onMonthChange,
  locale = 'es-MX',
  minDate,
  maxDate,
  previousLabel = 'Mes anterior',
  nextLabel = 'Mes siguiente',
  className,
  ...props
}: CalendarProps) {
  const titleId = React.useId()
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
  const isControlled = value !== undefined
  const selected = isControlled ? (value ?? undefined) : uncontrolledValue

  const [uncontrolledMonth, setUncontrolledMonth] = React.useState(() =>
    startOfMonth(defaultMonth ?? value ?? defaultValue ?? new Date()),
  )
  const viewMonth = monthProp ? startOfMonth(monthProp) : uncontrolledMonth
  const weeks = React.useMemo(() => buildWeeks(viewMonth), [viewMonth])
  const labels = React.useMemo(() => weekdayLabels(locale), [locale])
  const minTime = minDate ? toTime(minDate) : undefined
  const maxTime = maxDate ? toTime(maxDate) : undefined

  function setViewMonth(next: Date) {
    const normalized = startOfMonth(next)
    if (monthProp == null) setUncontrolledMonth(normalized)
    onMonthChange?.(normalized)
  }

  function selectDate(next: Date) {
    if (!isControlled) setUncontrolledValue(next)
    onValueChange?.(next)
    if (!isSameMonth(next, viewMonth)) setViewMonth(next)
  }

  function isDisabled(date: Date) {
    const time = toTime(date)
    if (minTime != null && time < minTime) return true
    if (maxTime != null && time > maxTime) return true
    return false
  }

  return (
    <div
      data-slot="calendar"
      role="group"
      aria-labelledby={titleId}
      className={cn(styles.root, className)}
      {...props}
    >
      <div className={styles.header}>
        <IconButton
          hierarchy="tertiary"
          size="md"
          icon={<CaretLeftIcon />}
          aria-label={previousLabel}
          onClick={() => setViewMonth(addMonths(viewMonth, -1))}
        />
        <h2 id={titleId} className={styles.title} aria-live="polite">
          {monthTitle(viewMonth, locale)}
        </h2>
        <IconButton
          hierarchy="tertiary"
          size="md"
          icon={<CaretRightIcon />}
          aria-label={nextLabel}
          onClick={() => setViewMonth(addMonths(viewMonth, 1))}
        />
      </div>
      <div role="grid" aria-labelledby={titleId} className={styles.grid}>
        <div role="row" className={styles.weekdays}>
          {labels.map((label) => (
            <div key={label} role="columnheader" className={styles.weekday}>
              {label}
            </div>
          ))}
        </div>
        {weeks.map((week) => {
          const firstDay = week[0]
          if (!firstDay) return null

          return (
            <div
              key={firstDay.toISOString()}
              role="row"
              className={styles.week}
            >
              {week.map((date) => {
                const selectedDay = selected != null && isSameDay(date, selected)
                const outside = !isSameMonth(date, viewMonth)
                const disabled = isDisabled(date)

                return (
                  <div
                    key={date.toISOString()}
                    role="gridcell"
                    aria-selected={selectedDay}
                    data-outside={outside || undefined}
                  >
                    <CalendarDay
                      selected={selectedDay}
                      disabled={disabled}
                      aria-label={dayLabel(date, locale)}
                      onClick={() => selectDate(date)}
                    >
                      {date.getDate()}
                    </CalendarDay>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
