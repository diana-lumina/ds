'use client'

import { NavLink } from './nav-link'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from 'lucide-react'

const components = [
  { name: 'Button', href: '/playground/button' },
  { name: 'Card', href: '/playground/card-course' },
  { name: 'Modal', href: '/playground/modal' },
  { name: 'Accordion', href: '/playground/accordion' },
  { name: 'Input', href: '/playground/input' },
  { name: 'Checkbox', href: '/playground/checkbox' },
  { name: 'Switch', href: '/playground/switch' },
  { name: 'ProgressBar', href: '/playground/progress-bar' },
  { name: 'MediaCard', href: '/playground/media-card' },
  { name: 'CategoryCard', href: '/playground/category-card' },
  { name: 'Link', href: '/playground/link' },
  { name: 'ChatButton', href: '/playground/chat-button' },
  { name: 'IconButton', href: '/playground/icon-button' },
  { name: 'Topbar', href: '/playground/topbar' },
]

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex min-h-screen">
      <aside className="w-48 shrink-0 border-r p-4 flex flex-col gap-1">

        {/* Header del sidebar */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            Componentes
          </p>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Cambiar tema"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {theme === 'dark'
              ? <SunIcon size={14} />
              : <MoonIcon size={14} />
            }
          </button>
        </div>

        {/* Links */}
        {components.map((c) => (
          <NavLink key={c.href} href={c.href} name={c.name} />
        ))}

      </aside>
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  )
}