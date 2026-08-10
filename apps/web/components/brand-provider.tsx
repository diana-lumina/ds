'use client'

import * as React from 'react'

export type BrandId = 'tec-360' | 'tec-educacion-continua'

const BRAND_STORAGE_KEY = 'ds-brand'

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

export function BrandProvider({
  children,
  defaultBrand = 'tec-360',
}: {
  children: React.ReactNode
  defaultBrand?: BrandId
}) {
  const [brand, setBrandState] = React.useState<BrandId>(defaultBrand)

  React.useEffect(() => {
    const stored = window.localStorage.getItem(BRAND_STORAGE_KEY)
    if (stored === 'tec-360' || stored === 'tec-educacion-continua') {
      setBrandState(stored)
      applyBrand(stored)
      return
    }
    applyBrand(defaultBrand)
  }, [defaultBrand])

  const setBrand = React.useCallback((next: BrandId) => {
    setBrandState(next)
    applyBrand(next)
    window.localStorage.setItem(BRAND_STORAGE_KEY, next)
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
