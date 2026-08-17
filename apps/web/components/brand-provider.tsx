'use client'

import * as React from 'react'

export type BrandId = 'tec-360' | 'tec-educacion-continua'

const BRAND_STORAGE_KEY = 'ds-brand'
const BRAND_CHANGE_EVENT = 'ds-brand-change'

const BRANDS: { id: BrandId; label: string }[] = [
  { id: 'tec-360', label: 'TEC 360' },
  { id: 'tec-educacion-continua', label: 'TEC Educación Continua' },
]

type BrandContextValue = {
  brand: BrandId
  setBrand: (brand: BrandId) => void
  brands: typeof BRANDS
}

const BrandContext = React.createContext<BrandContextValue | null>(null)

function applyBrand(brand: BrandId) {
  document.documentElement.setAttribute('data-brand', brand)
}

function isBrandId(value: string | null): value is BrandId {
  return value === 'tec-360' || value === 'tec-educacion-continua'
}

function getBrandSnapshot(): BrandId {
  const stored = window.localStorage.getItem(BRAND_STORAGE_KEY)
  return isBrandId(stored) ? stored : 'tec-360'
}

function subscribeBrand(onChange: () => void) {
  window.addEventListener('storage', onChange)
  window.addEventListener(BRAND_CHANGE_EVENT, onChange)
  return () => {
    window.removeEventListener('storage', onChange)
    window.removeEventListener(BRAND_CHANGE_EVENT, onChange)
  }
}

export function BrandProvider({
  children,
  defaultBrand = 'tec-360',
}: {
  children: React.ReactNode
  defaultBrand?: BrandId
}) {
  const brand = React.useSyncExternalStore(
    subscribeBrand,
    getBrandSnapshot,
    () => defaultBrand,
  )

  React.useLayoutEffect(() => {
    applyBrand(brand)
  }, [brand])

  const setBrand = React.useCallback((next: BrandId) => {
    window.localStorage.setItem(BRAND_STORAGE_KEY, next)
    applyBrand(next)
    window.dispatchEvent(new Event(BRAND_CHANGE_EVENT))
  }, [])

  const value = React.useMemo(
    () => ({ brand, setBrand, brands: BRANDS }),
    [brand, setBrand],
  )

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
}

export function useBrand() {
  const context = React.useContext(BrandContext)
  if (!context) {
    throw new Error('useBrand must be used within BrandProvider')
  }
  return context
}
