'use client'

import { NavLink } from './nav-link'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@workspace/ui/icons'

const components = [
  { name: 'Showcase', href: '/showcase' },
  { name: 'Alert', href: '/playground/alert' },
  { name: 'Avatar', href: '/playground/avatar' },
  { name: 'Badge', href: '/playground/badge' },
  { name: 'Banner', href: '/playground/banner' },
  { name: 'Breadcrumb', href: '/playground/breadcrumb' },
  { name: 'BreadcrumbItem', href: '/playground/breadcrumb-item' },
  { name: 'Button', href: '/playground/button' },
  { name: 'ButtonGroup', href: '/playground/button-group' },
  { name: 'Checkbox', href: '/playground/checkbox' },
  { name: 'ChipGroup', href: '/playground/chip-group' },
  { name: 'CounterBadge', href: '/playground/counter-badge' },
  { name: 'Divider', href: '/playground/divider' },
  { name: 'EmptyState', href: '/playground/empty-state' },
  { name: 'FilterChip', href: '/playground/filter-chip' },
  { name: 'FormField', href: '/playground/form-field' },
  { name: 'FAB', href: '/playground/floating-action-button' },
  { name: 'IconButton', href: '/playground/icon-button' },
  { name: 'InputChip', href: '/playground/input-chip' },
  { name: 'Link', href: '/playground/link' },
  { name: 'ListItem', href: '/playground/list-item' },
  { name: 'NavigationItem', href: '/playground/navigation-item' },
  { name: 'PhoneInput', href: '/playground/phone-input' },
  { name: 'PaginationItem', href: '/playground/pagination-item' },
  { name: 'Pagination', href: '/playground/pagination' },
  { name: 'ProgressBar', href: '/playground/progress-bar' },
  { name: 'ProgressIndicator', href: '/playground/progress-indicator' },
  { name: 'Radio', href: '/playground/radio' },
  { name: 'Select', href: '/playground/select' },
  { name: 'Segment', href: '/playground/segment' },
  { name: 'Status', href: '/playground/status' },
  { name: 'SideNavigation', href: '/playground/side-navigation' },
  { name: 'Switch', href: '/playground/switch' },
  { name: 'TabItem', href: '/playground/tab-item' },
  { name: 'Tag', href: '/playground/tag' },
  { name: 'Toast', href: '/playground/toast' },
]

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="flex min-h-screen">
      <aside className="w-52 shrink-0 border-r p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            Componentes
          </p>
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Cambiar tema"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {resolvedTheme === 'dark' ? <SunIcon size={14} /> : <MoonIcon size={14} />}
          </button>
        </div>

        {components.map((c) => (
          <NavLink key={c.href} href={c.href} name={c.name} />
        ))}
      </aside>
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  )
}
