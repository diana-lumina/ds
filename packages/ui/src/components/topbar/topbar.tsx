import * as React from 'react'
import { Search, X, ShoppingCart, Bell, Menu, ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Link } from "../link"
import { TextInput } from '../text-input'
import { UserImage } from '../user-image'

// ─── Sub-types ───────────────────────────────────────────────────────────────

export type TopbarUser = {
  name?: string
  avatarUrl?: string
  role?: string
}

export type TopbarAlert = {
  message: string
  onClose?: () => void
}

export type TopbarNavItem = {
  label: string
  href?: string
  onClick?: () => void
  children?: TopbarNavItem[]
}

// ─── Props ───────────────────────────────────────────────────────────────────

export type TopbarProps = {
  variant?: 'default' | 'search' | 'logged-in'
  logo?: React.ReactNode
  appName?: string
  appImage?: string
  navItems?: TopbarNavItem[]
  nav?: React.ReactNode
  actions?: React.ReactNode
  onLogin?: () => void
  onRegister?: () => void
  loginLabel?: string
  registerLabel?: string
  user?: TopbarUser
  onUserMenuClick?: () => void
  showCartButton?: boolean
  onCartClick?: () => void
  cartCount?: number
  showNotificationsButton?: boolean
  onNotificationsClick?: () => void
  notificationsCount?: number
  searchPlaceholder?: string
  onSearch?: (value: string) => void
  onSearchClose?: () => void
  announcement?: TopbarAlert
  allowSidebarForMobile?: boolean
  onMobileMenuClick?: () => void
  lang?: string
  className?: string
}

// ─── Internal: Announcement Banner ───────────────────────────────────────────

function AnnouncementBanner({ message, onClose }: { message: string; onClose?: () => void }) {
  const [visible, setVisible] = React.useState(true)
  if (!visible) return null
  return (
    <div
      role="banner"
      className="w-full flex items-center justify-center gap-3 px-4 py-2 bg-muted text-sm text-muted-foreground border-b"
    >
      <span className="text-center flex-1 line-clamp-1">{message}</span>
      <button
        type="button"
        onClick={() => { setVisible(false); onClose?.() }}
        aria-label="Cerrar anuncio"
        className="shrink-0 rounded hover:text-foreground transition-colors p-0.5"
      >
        <X size={14} />
      </button>
    </div>
  )
}

// ─── Internal: Nav Item ───────────────────────────────────────────────────────

function NavItem({ item }: { item: TopbarNavItem }) {
  if (item.children?.length) {
    return (
      <div className="relative group">
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-1"
        >
          {item.label}
          <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
        </button>
        <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50">
          <div className="min-w-40 rounded-md border bg-popover shadow-md py-1">
            {item.children.map((child) => (
              <Link
                key={child.label}
                variant="button"
                href={child.href}
                onClick={child.onClick}
                className="block px-4 py-2 hover:bg-accent"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return (
    <Link variant="button" href={item.href} onClick={item.onClick}>
      {item.label}
    </Link>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function Topbar({
  variant = 'default',
  logo,
  appName,
  appImage,
  navItems,
  nav,
  actions,
  onLogin,
  onRegister,
  loginLabel = 'Iniciar sesión',
  registerLabel = 'Regístrate',
  user,
  onUserMenuClick,
  showCartButton = false,
  onCartClick,
  cartCount,
  showNotificationsButton = false,
  onNotificationsClick,
  notificationsCount,
  searchPlaceholder = 'Hablemos de tus metas: cuéntame, ¿qué te gustaría aprender hoy?',
  onSearch,
  onSearchClose,
  announcement,
  allowSidebarForMobile = true,
  onMobileMenuClick,
  lang = 'es',
  className,
}: TopbarProps) {
  const [searchValue, setSearchValue] = React.useState('')

  const logoNode = logo ?? (
    appImage
      ? <img src={appImage} alt={appName ?? 'Logo'} className="h-7 w-auto" />
      : appName
        ? <span className="font-semibold text-base tracking-tight">{appName}</span>
        : null
  )

  const iconBtn = cn(
    'relative flex items-center justify-center rounded-md p-2',
    'text-foreground/70 hover:text-foreground hover:bg-accent transition-colors'
  )

  const Badge = ({ count }: { count?: number }) =>
    count != null ? (
      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px]  text-white ring-2 ring-background">
        {count > 9 ? '9+' : count}
      </span>
    ) : null

  return (
    <div className="w-full" lang={lang}>
      <header
        className={cn(
          'w-full flex items-center px-4 h-14 border-b bg-background',
          variant === 'search' ? 'justify-center' : 'justify-between',
          className
        )}
      >
      
        {/* ── Search variant ───────────────────────────────────────────────── */}
        {variant === 'search' && (
          <div className="w-full flex items-center justify-center gap-2">
            <TextInput
              icon={<Search size={16} className="shrink-0 text-muted-foreground" />}
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => { setSearchValue(e.target.value); onSearch?.(e.target.value) }}
            />
          </div>
        )}

        {/* ── Default / Logged-in variant ──────────────────────────────────── */}
        {variant !== 'search' && (
          <>
            {/* Logo */}
            {logoNode && <div className="shrink-0">{logoNode}</div>}

            {/* Desktop nav — hidden on mobile */}
            <nav className="hidden md:flex items-center gap-1 mx-4 flex-1">
              {nav ?? navItems?.map((item) => <NavItem key={item.label} item={item} />)}
            </nav>

            {/* Spacer on mobile so actions go to the right */}
            <div className="flex-1 md:hidden" />

            {/* Right actions */}
            <div className="flex items-center gap-1">
              {/* Custom slot */}
              {actions}

              {/* Notifications — hidden on mobile */}
              {showNotificationsButton && (
                <button type="button" onClick={onNotificationsClick} className={cn(iconBtn, 'hidden md:flex')} aria-label="Notificaciones">
                  <Bell size={18} />
                  <Badge count={notificationsCount} />
                </button>
              )}

              {/* Cart */}
              {showCartButton && (
                <button type="button" onClick={onCartClick} className={iconBtn} aria-label="Carrito">
                  <ShoppingCart size={18} />
                  <Badge count={cartCount} />
                </button>
              )}

              {/* Auth buttons (default, desktop only) */}
              {variant === 'default' && (onLogin || onRegister) && (
                <div className="hidden md:flex items-center gap-2 ml-1">
                  {onLogin && (
                    <button
                      type="button"
                      onClick={onLogin}
                      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-1.5"
                    >
                      {loginLabel}
                    </button>
                  )}
                  {onRegister && (
                    <button
                      type="button"
                      onClick={onRegister}
                      className="text-sm font-medium rounded-md bg-primary px-4 py-1.5 text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      {registerLabel}
                    </button>
                  )}
                </div>
              )}

              {/* User avatar (logged-in) */}
              {variant === 'logged-in' && (
                <button
                  type="button"
                  onClick={onUserMenuClick}
                  className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-accent transition-colors"
                  aria-label="Menú de usuario"
                >
                  <UserImage
                    image={user?.avatarUrl}
                  />
                  {/* Name only on desktop */}
                  {user?.name && (
                    <span className="hidden md:block text-sm font-medium max-w-[120px] truncate">
                      {user.name}
                    </span>
                  )}
                </button>
              )}

              {/* Hamburger — mobile only, always last */}
              {allowSidebarForMobile && (
                <button
                  type="button"
                  onClick={onMobileMenuClick}
                  className={cn(iconBtn, 'md:hidden')}
                  aria-label="Abrir menú"
                >
                  <Menu size={20} />
                </button>
              )}
            </div>
          </>
        )}
      </header>

      {/* Announcement */}
      {announcement && (
        <AnnouncementBanner message={announcement.message} onClose={announcement.onClose} />
      )}
    </div>
  )
}