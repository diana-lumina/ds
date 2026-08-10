'use client'

import * as React from 'react'
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  CounterBadge,
  Divider,
  FilterChip,
  FloatingActionButton,
  IconButton,
  InputChip,
  Link,
  Radio,
  RadioGroup,
  Segment,
  Status,
  Tag,
} from '@workspace/ui'
import { BagIcon, ChevronIcon } from '@workspace/ui/icons'
import { useTheme } from 'next-themes'
import { useBrand, type BrandId } from '@/components/brand-provider'
import styles from './showcase.module.css'

type ViewMode = 'lista' | 'cuadricula'

const COURSES = [
  {
    id: '1',
    title: 'Diseño de interfaces',
    description: 'Fundamentos de UI para productos digitales educativos.',
    tags: ['En línea', '8 semanas'] as const,
    status: { intent: 'success' as const, label: 'Disponible' },
    badge: 'Nuevo',
    cta: 'Inscribirme' as const,
  },
  {
    id: '2',
    title: 'UX Research aplicado',
    description: 'Métodos de investigación para validar hipótesis de producto.',
    tags: ['Híbrido', '6 semanas'] as const,
    status: { intent: 'info' as const, label: 'En revisión' },
    badge: null,
    cta: null,
  },
  {
    id: '3',
    title: 'Accesibilidad web',
    description: 'Prácticas WCAG para interfaces inclusivas en el ecosistema Tec.',
    tags: ['En línea', '4 semanas'] as const,
    status: { intent: 'warning' as const, label: 'Cupo lleno' },
    badge: null,
    cta: 'Unirme a lista' as const,
  },
  {
    id: '4',
    title: 'Design tokens en práctica',
    description: 'Cómo conectar Figma y código con tokens semánticos multi-marca.',
    tags: ['En línea', '3 semanas'] as const,
    status: { intent: 'danger' as const, label: 'Cancelado' },
    badge: null,
    cta: null,
  },
]

function BellIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-5V11a7 7 0 1 0-14 0v6l-2 2v1h18v-1l-2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BrandDropdown() {
  const { brand, setBrand, brands } = useBrand()
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)

  const activeBrandLabel = brands.find((item) => item.id === brand)?.label ?? brand
  const shortLabel = brand === 'tec-360' ? 'Tec 360' : 'Educación Continua'

  React.useEffect(() => {
    if (!open) return

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className={styles.brandDropdown} ref={rootRef}>
      <button
        type="button"
        className={styles.brandTrigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Marca activa: ${activeBrandLabel}. Cambiar marca`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.brandTriggerLabel}>{shortLabel}</span>
        <span className={styles.brandChevron} data-open={open || undefined}>
          <ChevronIcon />
        </span>
      </button>
      {open ? (
        <ul className={styles.brandMenu} role="listbox" aria-label="Seleccionar marca">
          {brands.map((item) => (
            <li key={item.id} role="option" aria-selected={brand === item.id}>
              <button
                type="button"
                className={styles.brandOption}
                data-selected={brand === item.id || undefined}
                onClick={() => {
                  setBrand(item.id as BrandId)
                  setOpen(false)
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <IconButton
      size="sm"
      variant={isDark ? 'inverse' : 'default'}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    />
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 14.3A8.5 8.5 0 0 1 9.7 3 7 7 0 1 0 21 14.3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function ShowcasePage() {
  const [view, setView] = React.useState<ViewMode>('lista')
  const [modality, setModality] = React.useState<string | null>('online')
  const [level, setLevel] = React.useState(true)
  const [tags, setTags] = React.useState(['UX Research', 'Producto'])
  const [notifyCourse, setNotifyCourse] = React.useState(true)
  const [notifyMarketing, setNotifyMarketing] = React.useState(false)
  const [contact, setContact] = React.useState('email')

  const allChecked =
    notifyCourse && notifyMarketing
      ? true
      : !notifyCourse && !notifyMarketing
        ? false
        : 'indeterminate'

  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <BrandDropdown />
          <nav className={styles.navLinks} aria-label="Principal">
            <Link href="/showcase">Catálogo</Link>
            <Link href="/playground/button">Playground</Link>
            <span className={styles.navDivider}>
              <Divider orientation="vertical" thickness={1} />
            </span>
            <Link href="#" icon={<ChevronIcon />}>
              Recursos
            </Link>
          </nav>
        </div>

        <div className={styles.navbarActions}>
          <ThemeToggle />
          <IconButton size="sm" icon={<BagIcon />} aria-label="Carrito" />
          <span className={styles.notifyWrap}>
            <IconButton
              size="sm"
              variant="inverse"
              icon={<BellIcon />}
              aria-label="Notificaciones, 3 sin leer"
            />
            <span className={styles.notifyBadge}>
              <CounterBadge size="sm" emphasis="attention" count={3} />
            </span>
          </span>
          <Divider orientation="vertical" thickness={1} />
          <div className={styles.user}>
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/96?img=12"
              alt="Ana Beltrán"
            />
            <span className={styles.userName}>Ana Beltrán</span>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.introTitleRow}>
            <h1 className={styles.title}>Catálogo de cursos</h1>
            <Badge size="sm">Beta</Badge>
          </div>
          <p className={styles.subtitle}>
            Composición de prueba con todos los componentes actuales del design system.
          </p>
        </div>

        <section className={styles.toolbar} aria-label="Filtros y vista">
          <div className={styles.filters}>
            <FilterChip
              size="sm"
              selected={modality === 'online'}
              onSelectedChange={(selected) => setModality(selected ? 'online' : null)}
            >
              En línea
            </FilterChip>
            <FilterChip
              size="sm"
              selected={modality === 'presencial'}
              onSelectedChange={(selected) => setModality(selected ? 'presencial' : null)}
            >
              Presencial
            </FilterChip>
            <FilterChip
              size="sm"
              selected={level}
              onSelectedChange={setLevel}
              icon={<BagIcon />}
            >
              Intermedio
            </FilterChip>
          </div>

          <div className={styles.segments}>
            <Segment
              size="sm"
              selected={view === 'lista'}
              onSelectedChange={(selected) => selected && setView('lista')}
            >
              Lista
            </Segment>
            <Segment
              size="sm"
              selected={view === 'cuadricula'}
              onSelectedChange={(selected) => selected && setView('cuadricula')}
            >
              Cuadrícula
            </Segment>
          </div>
        </section>

        <section className={styles.chipsField} aria-label="Etiquetas activas">
          <span className={styles.fieldLabel}>Etiquetas activas</span>
          <div className={styles.chipsRow}>
            {tags.map((tag) => (
              <InputChip
                key={tag}
                size="sm"
                closeLabel={`Quitar ${tag}`}
                onClose={() => setTags((prev) => prev.filter((t) => t !== tag))}
              >
                {tag}
              </InputChip>
            ))}
            {tags.length === 0 && (
              <span className={styles.emptyChips}>Sin etiquetas</span>
            )}
          </div>
        </section>

        <Divider orientation="horizontal" thickness={1} />

        <div className={styles.content}>
          <section
            className={view === 'lista' ? styles.courseList : styles.courseGrid}
            aria-label="Cursos"
          >
            {COURSES.map((course) => (
              <article key={course.id} className={styles.courseCard}>
                <div className={styles.courseHeader}>
                  <div className={styles.courseHeading}>
                    <h2 className={styles.courseTitle}>{course.title}</h2>
                    {course.badge ? <Badge size="sm">{course.badge}</Badge> : null}
                  </div>
                  <Status size="sm" intent={course.status.intent}>
                    {course.status.label}
                  </Status>
                </div>
                <p className={styles.courseDescription}>{course.description}</p>
                <div className={styles.courseMeta}>
                  {course.tags.map((tag) => (
                    <Tag key={tag} size="sm" tone={tag === 'En línea' ? 'brand' : 'neutral'}>
                      {tag}
                    </Tag>
                  ))}
                </div>
                <Divider orientation="horizontal" thickness={1} />
                <div className={styles.courseActions}>
                  <Link href="#">Ver detalle</Link>
                  {course.cta ? (
                    <Button size="sm" variant={course.status.intent === 'warning' ? 'secondary' : 'default'}>
                      {course.cta}
                    </Button>
                  ) : (
                    <Button size="sm" disabled>
                      No disponible
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </section>

          <aside className={styles.aside} aria-label="Preferencias">
            <h2 className={styles.asideTitle}>Preferencias</h2>
            <p className={styles.asideText}>
              Ejemplo de formularios con Checkbox y Radio.
            </p>

            <div className={styles.asideBlock}>
              <span className={styles.fieldLabel}>Notificaciones</span>
              <label className={styles.field}>
                <Checkbox
                  id="showcase-all"
                  checked={allChecked}
                  onCheckedChange={(value) => {
                    const next = value === true
                    setNotifyCourse(next)
                    setNotifyMarketing(next)
                  }}
                />
                <span>Seleccionar todo</span>
              </label>
              <label className={styles.field}>
                <Checkbox
                  id="showcase-course"
                  checked={notifyCourse}
                  onCheckedChange={(value) => setNotifyCourse(value === true)}
                />
                <span>Avisos del curso</span>
              </label>
              <label className={styles.field}>
                <Checkbox
                  id="showcase-marketing"
                  checked={notifyMarketing}
                  onCheckedChange={(value) => setNotifyMarketing(value === true)}
                />
                <span>Novedades y marketing</span>
              </label>
            </div>

            <Divider orientation="horizontal" thickness={1} />

            <div className={styles.asideBlock}>
              <span className={styles.fieldLabel}>Canal de contacto</span>
              <RadioGroup
                value={contact}
                onValueChange={setContact}
                aria-label="Canal de contacto"
                className={styles.radioGroup}
              >
                <label className={styles.field}>
                  <Radio value="email" id="showcase-email" />
                  <span>Correo</span>
                </label>
                <label className={styles.field}>
                  <Radio value="phone" id="showcase-phone" />
                  <span>Teléfono</span>
                </label>
                <label className={styles.field}>
                  <Radio value="none" id="showcase-none" disabled />
                  <span>No contactar</span>
                </label>
              </RadioGroup>
            </div>

            <div className={styles.asideActions}>
              <Button variant="secondary" size="sm">
                Cancelar
              </Button>
              <Button size="sm">Guardar</Button>
            </div>
          </aside>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCopy}>
            <p className={styles.footerBrand}>Tec Design System</p>
            <p className={styles.footerText}>
              © {new Date().getFullYear()} TecDS
            </p>
          </div>
          <nav className={styles.footerNav} aria-label="Enlaces legales">
            <Link href="#" tone="inverse">
              Términos y condiciones
            </Link>
            <Link href="#" tone="inverse">
              Aviso de privacidad
            </Link>
            <Link href="#" tone="inverse">
              Cookies
            </Link>
            <Link href="#" tone="inverse">
              Accesibilidad
            </Link>
          </nav>
          <div className={styles.footerActions}>
            <Button size="sm" variant="secondary" tone="inverse">
              Contacto
            </Button>
          </div>
        </div>
      </footer>

      <FloatingActionButton type="extended" floating icon={<BagIcon />}>
        Contáctanos
      </FloatingActionButton>
    </div>
  )
}
