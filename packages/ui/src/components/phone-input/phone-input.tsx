"use client"

import * as React from "react"
import { cn } from '../../lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  type SelectAppearance,
} from '../select'
import { TextInput } from '../text-input'
import styles from './phone-input.module.css'

export type PhoneInputAppearance = SelectAppearance

export type PhoneCountry = {
  value: string
  dialCode: string
  label: string
}

export const DEFAULT_PHONE_COUNTRIES: PhoneCountry[] = [
  { value: 'mx', dialCode: '+52', label: 'México' },
  { value: 'us', dialCode: '+1', label: 'Estados Unidos' },
  { value: 'ca', dialCode: '+1', label: 'Canadá' },
  { value: 'co', dialCode: '+57', label: 'Colombia' },
  { value: 'ar', dialCode: '+54', label: 'Argentina' },
  { value: 'cl', dialCode: '+56', label: 'Chile' },
  { value: 'pe', dialCode: '+51', label: 'Perú' },
  { value: 'es', dialCode: '+34', label: 'España' },
]

export interface PhoneInputProps
  extends Omit<React.ComponentProps<'input'>, 'disabled' | 'type'> {
  appearance?: PhoneInputAppearance
  error?: boolean
  disabled?: boolean
  countries?: PhoneCountry[]
  country?: string
  defaultCountry?: string
  onCountryChange?: (country: string) => void
  countryLabel?: string
}

export function PhoneInput({
  appearance = 'outlined',
  error = false,
  disabled,
  className,
  countries = DEFAULT_PHONE_COUNTRIES,
  country,
  defaultCountry = 'mx',
  onCountryChange,
  countryLabel = 'Código de país',
  id,
  placeholder = 'Número telefónico',
  ...props
}: PhoneInputProps) {
  const generatedId = React.useId()
  const numberId = id ?? generatedId
  const rootRef = React.useRef<HTMLDivElement>(null)
  const [menuWidth, setMenuWidth] = React.useState<number>()

  React.useLayoutEffect(() => {
    const node = rootRef.current
    if (!node) return

    const syncWidth = () => {
      setMenuWidth(node.getBoundingClientRect().width)
    }

    syncWidth()
    const observer = new ResizeObserver(syncWidth)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const showError = error && !disabled

  return (
    <div
      ref={rootRef}
      data-slot="phone-input"
      data-appearance={appearance}
      data-error={showError ? 'true' : undefined}
      data-disabled={disabled || undefined}
      className={cn(styles.root, className)}
    >
      <div className={styles.country}>
        <Select
          value={country}
          defaultValue={country ? undefined : defaultCountry}
          onValueChange={onCountryChange}
          disabled={disabled}
        >
          <SelectTrigger
            embedded
            appearance={appearance}
            error={error}
            disabled={disabled}
            aria-label={countryLabel}
            className={styles.countryTrigger}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            className={styles.menu}
            style={
              menuWidth
                ? ({
                    '--phone-input-menu-width': `${menuWidth}px`,
                    width: menuWidth,
                    minWidth: menuWidth,
                  } as React.CSSProperties)
                : undefined
            }
          >
            {countries.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                suffix={item.label}
                textValue={`${item.dialCode} ${item.label}`}
              >
                {item.dialCode}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <TextInput
        id={numberId}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        embedded
        appearance={appearance}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        className={styles.number}
        {...props}
      />
    </div>
  )
}
