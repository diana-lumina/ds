"use client"

import * as React from 'react'
import { Popover as PopoverPrimitive } from 'radix-ui'
import { CheckIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import {
  TextInput,
  type TextInputAppearance,
  type TextInputTone,
} from '../text-input'
import selectStyles from '../select/select.module.css'
import styles from './combobox.module.css'

export type ComboboxAppearance = TextInputAppearance
export type ComboboxTone = TextInputTone

export type ComboboxOption = {
  value: string
  label: string
  disabled?: boolean
}

export interface ComboboxProps
  extends Omit<React.ComponentProps<'div'>, 'children' | 'defaultValue' | 'onChange'> {
  label: string
  supportingText?: string
  appearance?: ComboboxAppearance
  tone?: ComboboxTone
  error?: boolean
  disabled?: boolean
  placeholder?: string
  options: ComboboxOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  emptyText?: string
  name?: string
  id?: string
}

function optionLabel(options: ComboboxOption[], value: string | undefined) {
  if (!value) return ''
  return options.find((option) => option.value === value)?.label ?? ''
}

function matchesQuery(option: ComboboxOption, query: string) {
  const normalized = query.trim().toLocaleLowerCase('es-MX')
  if (!normalized) return true
  return option.label.toLocaleLowerCase('es-MX').includes(normalized)
}

/**
 * Combobox: FormField (label + TextInput + supporting) y lista de opciones
 * con los mismos estilos del Select. Filtra al escribir.
 */
export function Combobox({
  label,
  supportingText,
  appearance = 'outlined',
  tone = 'standard',
  error = false,
  disabled,
  placeholder,
  options,
  value,
  defaultValue,
  onValueChange,
  emptyText = 'Sin resultados',
  name,
  id,
  className,
  ...props
}: ComboboxProps) {
  const listId = React.useId()
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const supportingId = supportingText ? `${inputId}-supporting` : undefined
  const showError = error && !disabled
  const fieldRef = React.useRef<HTMLDivElement>(null)

  const isControlled = value !== undefined
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue)
  const selected = isControlled ? value : uncontrolled

  const [query, setQuery] = React.useState(() => optionLabel(options, selected))
  const [open, setOpen] = React.useState(false)
  const [highlight, setHighlight] = React.useState(0)

  const filtered = React.useMemo(
    () => options.filter((option) => matchesQuery(option, query)),
    [options, query],
  )

  React.useEffect(() => {
    setQuery(optionLabel(options, selected))
  }, [options, selected])

  React.useEffect(() => {
    setHighlight(0)
  }, [query, open])

  function setSelected(next: string) {
    if (!isControlled) setUncontrolled(next)
    onValueChange?.(next)
    setQuery(optionLabel(options, next))
    setOpen(false)
  }

  function moveHighlight(delta: number) {
    if (filtered.length === 0) return
    setHighlight((current) => {
      const next = (current + delta + filtered.length) % filtered.length
      return next
    })
  }

  function selectHighlighted() {
    const option = filtered[highlight]
    if (!option || option.disabled) return
    setSelected(option.value)
  }

  return (
    <div
      data-slot="combobox"
      data-appearance={appearance}
      data-tone={tone}
      data-error={showError ? 'true' : undefined}
      data-disabled={disabled || undefined}
      className={cn(styles.root, className)}
      {...props}
    >
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
        <PopoverPrimitive.Anchor asChild>
          <div ref={fieldRef} className={styles.control}>
            <TextInput
              id={inputId}
              embedded
              appearance={appearance}
              tone={tone}
              error={error}
              disabled={disabled}
              placeholder={placeholder}
              name={name}
              role="combobox"
              aria-expanded={open}
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={
                open && filtered[highlight]
                  ? `${listId}-${filtered[highlight].value}`
                  : undefined
              }
              aria-describedby={supportingId}
              autoComplete="off"
              value={query}
              className={styles.input}
              onFocus={() => {
                if (!disabled) setOpen(true)
              }}
              onChange={(event) => {
                setQuery(event.target.value)
                if (!disabled) setOpen(true)
              }}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown') {
                  event.preventDefault()
                  if (!open) setOpen(true)
                  else moveHighlight(1)
                } else if (event.key === 'ArrowUp') {
                  event.preventDefault()
                  if (!open) setOpen(true)
                  else moveHighlight(-1)
                } else if (event.key === 'Enter') {
                  if (open && filtered[highlight]) {
                    event.preventDefault()
                    selectHighlighted()
                  }
                } else if (event.key === 'Escape') {
                  setOpen(false)
                }
              }}
            />
          </div>
        </PopoverPrimitive.Anchor>
        {supportingText ? (
          <span id={supportingId} className={styles.supporting}>
            {supportingText}
          </span>
        ) : null}
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            data-slot="combobox-content"
            className={cn(selectStyles.content, styles.list)}
            side="bottom"
            align="start"
            sideOffset={4}
            onOpenAutoFocus={(event) => event.preventDefault()}
            onCloseAutoFocus={(event) => event.preventDefault()}
            onInteractOutside={(event) => {
              if (fieldRef.current?.contains(event.target as Node)) {
                event.preventDefault()
              }
            }}
          >
            <ul
              id={listId}
              role="listbox"
              className={cn(selectStyles.viewport, styles.options)}
            >
              {filtered.length === 0 ? (
                <li className={styles.empty} role="presentation">
                  {emptyText}
                </li>
              ) : (
                filtered.map((option, index) => {
                  const selectedOption = option.value === selected
                  const highlighted = index === highlight
                  return (
                    <li
                      key={option.value}
                      id={`${listId}-${option.value}`}
                      role="option"
                      aria-selected={selectedOption}
                      aria-disabled={option.disabled || undefined}
                      data-highlighted={highlighted ? '' : undefined}
                      data-state={selectedOption ? 'checked' : undefined}
                      data-disabled={option.disabled || undefined}
                      className={selectStyles.item}
                      onMouseEnter={() => {
                        if (!option.disabled) setHighlight(index)
                      }}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => {
                        if (option.disabled) return
                        setSelected(option.value)
                      }}
                    >
                      <span data-slot="select-item-text">{option.label}</span>
                      {selectedOption ? (
                        <span className={selectStyles.itemIndicator}>
                          <CheckIcon />
                        </span>
                      ) : null}
                    </li>
                  )
                })
              )}
            </ul>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}
