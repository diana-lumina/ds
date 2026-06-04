import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

// ─── Variants ────────────────────────────────────────────
const linkVariants = cva(
  'inline-flex items-center gap-1 text-sm transition-colors',
  {
    variants: {
      variant: {
        text: 'text-primary underline-offset-4 hover:underline',
        button: 'font-medium text-foreground hover:underline',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'text',
      disabled: false,
    },
  }
)

// ─── Props ───────────────────────────────────────────────
export type LinkProps = VariantProps<typeof linkVariants> & {
  href?: string
  children: React.ReactNode
  external?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  onClick?: () => void
  className?: string
}

// ─── Componente ──────────────────────────────────────────
export function Link({
  variant = 'text',
  href,
  children,
  disabled = false,
  external = false,
  icon,
  iconPosition = 'right',
  onClick,
  className,
}: LinkProps) {
  return (
    <a
      href={disabled ? undefined : href}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled ?? undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(linkVariants({ variant, disabled }), className)}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </a>
  )
}