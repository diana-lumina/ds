import * as React from 'react'
import { cn } from '../../lib/utils'

// ─── Props ───────────────────────────────────────────────
export type IconButtonProps = {
  icon: React.ReactNode
  size?: 's' | 'm'
  disabled?: boolean
  onClick?: () => void
  'aria-label': string
  className?: string
}

// ─── Componente ──────────────────────────────────────────
export function IconButton({
  icon,
  size = 'm',
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
  className,
}: IconButtonProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-border bg-background transition-colors',
        'hover:bg-muted',
        'disabled:opacity-50 disabled:pointer-events-none',
        size === 's' && 'w-6 h-6',
        size === 'm' && 'w-8 h-8',
        className
      )}
    >
      {icon}
    </button>
  )
}