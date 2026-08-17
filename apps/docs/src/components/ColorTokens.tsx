import React, { useEffect, useState } from 'react'
import styles from './ColorTokens.module.css'

const GROUPS = [
  { label: 'Surface', prefix: 'color-surface' },
  { label: 'Text', prefix: 'color-text' },
  { label: 'Border', prefix: 'color-border' },
  { label: 'Icon', prefix: 'color-icon' },
  { label: 'Focus', prefix: 'color-focus' },
  { label: 'Primitivos — Neutral (referencia)', prefix: 'color-neutral' },
  { label: 'Primitivos — Blue (referencia)', prefix: 'color-blue' },
] as const

const BRANDS = [
  { value: 'tec-360', title: 'TEC 360' },
  { value: 'tec-educacion-continua', title: 'TEC Educación Continua' },
] as const

function getDesignTokens(prefix: string): Record<string, string> {
  const computed = getComputedStyle(document.documentElement)
  const tokens: Record<string, string> = {}

  for (let i = 0; i < computed.length; i++) {
    const prop = computed[i]
    if (prop.startsWith(`--${prefix}`)) {
      tokens[prop] = computed.getPropertyValue(prop).trim()
    }
  }

  return tokens
}

export default function ColorTokens() {
  const [brand, setBrand] = useState<(typeof BRANDS)[number]['value']>('tec-360')
  const [groups, setGroups] = useState<{ label: string; tokens: [string, string][] }[]>([])

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', brand)
    setGroups(
      GROUPS.map(({ label, prefix }) => ({
        label,
        tokens: Object.entries(getDesignTokens(prefix)),
      }))
    )
  }, [brand])

  return (
    <div>
      <div className={styles.brands} role="tablist" aria-label="Marca">
        {BRANDS.map((item) => (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={brand === item.value}
            className={`${styles.brand} ${brand === item.value ? styles.brandActive : ''}`}
            onClick={() => setBrand(item.value)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {groups.map(({ label, tokens }) =>
        tokens.length === 0 ? null : (
          <section key={label} className={styles.group}>
            <h2 className={styles.heading}>
              {label}{' '}
              <span className={styles.count}>({tokens.length})</span>
            </h2>
            <div className={styles.grid}>
              {tokens.map(([varName, value]) => (
                <div key={varName} className={styles.card}>
                  <div
                    className={styles.swatch}
                    style={{ background: `var(${varName})` }}
                  />
                  <code className={styles.name}>{varName.replace(/^--/, '')}</code>
                  <span className={styles.value}>{value}</span>
                </div>
              ))}
            </div>
          </section>
        )
      )}
    </div>
  )
}
