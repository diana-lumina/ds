import * as React from 'react'
import { cn } from '../../lib/utils'

// ─── Props ───────────────────────────────────────────────
export type ChatButtonProps = {
  label?: string
  badge?: number
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
}

// ─── Componente ──────────────────────────────────────────
export function ChatButton({
  label,
  badge,
  onClick,
  className,
  icon,
}: ChatButtonProps) {
  return (
     <div className="fixed bottom-6 right-0 z-50">
      <button
        onClick={onClick}
        style={{
          width: '85px',
          height: '114px',
          padding: '12px 8px',
          borderRadius: '4px 0 0 4px',
          background: '#F4F4F5',
          boxShadow: '0 4px 10.7px 0 rgba(0, 0, 0, 0.15)',
        }}
        className={cn(
          'relative flex flex-col items-center justify-center gap-2',
          'hover:brightness-95 transition-all',
          className
        )}
        aria-label={label ?? 'Abrir chat'}
      >
        {/* Ícono o logo */}
        {icon && (
          <span className="shrink-0">{icon}</span>
        )}

        {/* Label */}
        {label && (
          <span className="text-xs font-semibold text-primary text-center leading-tight">
            {label}
          </span>
        )}

        {/* Badge */}
        {badge !== undefined && badge > 0 && (
          <span className="absolute -top-1.5 -left-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-destructive text-white text-xs font-medium">
            {badge > 99 ? '99+' : badge}
          </span>
        )}
      </button>
    </div>
  )
}