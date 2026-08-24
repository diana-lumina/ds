'use client'

import * as React from 'react'
import {
  Alert,
  Badge,
  Banner,
  Button,
  ButtonGroup,
  Checkbox,
  ChipGroup,
  Combobox,
  CounterBadge,
  DatePicker,
  Divider,
  EmptyState,
  FileUpload,
  FilterChip,
  FloatingActionButton,
  FormField,
  IconButton,
  InputChip,
  Link,
  ListItem,
  MenuItem,
  NavigationBar,
  NavigationItem,
  Pagination,
  PaginationItem,
  ProgressBar,
  ProgressIndicator,
  ProgressStep,
  Radio,
  RadioGroup,
  Segment,
  SideNavigation,
  SocialButton,
  Status,
  Switch,
  TabItem,
  Tag,
  TimeField,
  Toast,
} from '@workspace/ui'
import * as IconCatalog from '@workspace/ui/icons'
import {
  type IconProps,
  BellIcon,
  BookmarkSimpleIcon,
  BookOpenIcon,
  CaretDownIcon,
  CaretRightIcon,
  ChatCircleIcon,
  CheckCircleIcon,
  CheckIcon,
  DownloadSimpleIcon,
  FacebookIcon,
  FavoriteIcon,
  FolderSimpleIcon,
  InfoIcon,
  MapPinIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  WarningIcon,
  XCircleIcon,
} from '@workspace/ui/icons'
import { useTheme } from 'next-themes'
import { useBrand, type BrandId } from '@/components/brand-provider'
import styles from './showcase.module.css'

type CatalogFilter = 'todos' | 'recomendados' | 'guardados'
type ComponentSize = 'sm' | 'md'
type NavSection = 'catalogo' | 'aprendizaje'
type SideSection = 'oferta' | 'inscripciones' | 'certificados'

const PAGE_SIZE = 3

const CAMPUS_OPTIONS = [
  { value: 'mty', label: 'Campus Monterrey' },
  { value: 'cdmx', label: 'Campus Ciudad de México' },
  { value: 'gdl', label: 'Campus Guadalajara' },
]

const INTEREST_OPTIONS = [
  { value: 'ux', label: 'Diseño de interfaces' },
  { value: 'research', label: 'UX Research aplicado' },
  { value: 'a11y', label: 'Accesibilidad web' },
  { value: 'tokens', label: 'Design tokens en práctica' },
]

type Program = {
  id: string
  title: string
  faculty: string
  campus: string
  tags: { label: string; tone: 'brand' | 'neutral' }[]
  status: { intent: 'success' | 'info' | 'warning' | 'danger' | 'neutral'; label: string }
  badge: string | null
  avatarSrc?: string
  avatarInitials?: string
  cta: 'inscribir' | 'lista' | 'none'
  recommended?: boolean
  saved?: boolean
  occupancy: { value: number; max: number }
}

const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Diseño de interfaces',
    faculty: 'Escuela de Arquitectura, Arte y Diseño',
    campus: 'Campus Monterrey · 8 semanas',
    tags: [
      { label: 'En línea', tone: 'brand' },
      { label: 'Intermedio', tone: 'neutral' },
    ],
    status: { intent: 'success', label: 'Inscripciones abiertas' },
    badge: 'Nuevo',
    avatarSrc: 'https://i.pravatar.cc/96?img=5',
    cta: 'inscribir',
    recommended: true,
    saved: true,
    occupancy: { value: 18, max: 30 },
  },
  {
    id: '2',
    title: 'UX Research aplicado',
    faculty: 'Escuela de Humanidades y Educación',
    campus: 'Campus Ciudad de México · 6 semanas',
    tags: [
      { label: 'Híbrido', tone: 'neutral' },
      { label: 'Avanzado', tone: 'neutral' },
    ],
    status: { intent: 'info', label: 'En revisión académica' },
    badge: null,
    avatarInitials: 'UR',
    cta: 'none',
    recommended: true,
    occupancy: { value: 12, max: 25 },
  },
  {
    id: '3',
    title: 'Accesibilidad web',
    faculty: 'Escuela de Ingeniería y Ciencias',
    campus: 'En línea · 4 semanas',
    tags: [
      { label: 'En línea', tone: 'brand' },
      { label: 'Introductorio', tone: 'neutral' },
    ],
    status: { intent: 'warning', label: 'Cupo lleno' },
    badge: null,
    avatarSrc: 'https://i.pravatar.cc/96?img=32',
    cta: 'lista',
    saved: true,
    occupancy: { value: 24, max: 24 },
  },
  {
    id: '4',
    title: 'Design tokens en práctica',
    faculty: 'Dirección de Experiencia Digital',
    campus: 'Campus Guadalajara · 3 semanas',
    tags: [{ label: 'Presencial', tone: 'neutral' }],
    status: { intent: 'danger', label: 'Cancelado' },
    badge: null,
    avatarInitials: 'DT',
    cta: 'none',
    occupancy: { value: 0, max: 20 },
  },
  {
    id: '5',
    title: 'Facilitación de talleres',
    faculty: 'Educación Continua',
    campus: 'Campus Monterrey · 2 semanas',
    tags: [{ label: 'Presencial', tone: 'neutral' }],
    status: { intent: 'neutral', label: 'Próximamente' },
    badge: null,
    avatarSrc: 'https://i.pravatar.cc/96?img=15',
    cta: 'none',
    recommended: true,
    occupancy: { value: 4, max: 20 },
  },
]

type CatalogIcon = (props: IconProps) => React.ReactNode

const ICON_ENTRIES: Array<[string, CatalogIcon]> = []
for (const [name, value] of Object.entries(IconCatalog)) {
  if (name.endsWith('Icon') && name !== 'LoadingIcon' && typeof value === 'function') {
    ICON_ENTRIES.push([name, value as CatalogIcon])
  }
}

function IconsPanel({ size }: { size: ComponentSize }) {
  return (
    <>
      <div className={styles.hero}>
        <span className={styles.heroEyebrow}>Referencia visual</span>
        <div className={styles.heroTitleRow}>
          <h1 className={styles.heroTitle}>Íconos</h1>
          <CounterBadge size={size} emphasis="neutral" value={`${ICON_ENTRIES.length}`} />
        </div>
        <p className={styles.heroSubtitle}>
          Catálogo de <code className={styles.inlineCode}>@workspace/ui/icons</code>. El color es
          currentColor; el tamaño lo pone el componente o la prop size.
        </p>
      </div>
      <section className={styles.iconGrid} aria-label="Catálogo de íconos">
        {ICON_ENTRIES.map(([name, Icon]) => (
          <div key={name} className={styles.iconCell}>
            <Icon size={22} />
            <code className={styles.iconName}>{name}</code>
          </div>
        ))}
      </section>
    </>
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
          <CaretDownIcon size={16} />
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

function AccountMenu({ size }: { size: ComponentSize }) {
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)

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
    <div className={styles.accountMenu} ref={rootRef}>
      <Button
        size={size}
        hierarchy="secondary"
        label="Mi cuenta"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open ? (
        <div className={styles.accountPanel} role="menu" aria-label="Cuenta">
          <MenuItem label="Perfil" onClick={() => setOpen(false)} />
          <MenuItem label="Mis programas" onClick={() => setOpen(false)} />
          <MenuItem label="Cerrar sesión" disabled />
        </div>
      ) : null}
    </div>
  )
}

function ThemeToggle({ size }: { size: ComponentSize }) {
  const { resolvedTheme, setTheme } = useTheme()
  const isClient = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const isDark = isClient && resolvedTheme === 'dark'

  return (
    <IconButton
      size={size}
      tone={isDark ? 'inverse' : 'standard'}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    />
  )
}

function StatusRail({ intent }: { intent: Program['status']['intent'] }) {
  return <span className={styles.listItemRail} data-intent={intent} aria-hidden />
}

function CourseAlert({ program }: { program: Program }) {
  if (program.status.intent === 'danger') {
    return (
      <Alert
        intent="danger"
        icon={<XCircleIcon />}
        title="Programa cancelado"
        message="Este grupo no se abrirá en el periodo. Puedes explorar otra fecha o un programa equivalente."
        link={<Link href="/showcase" label="Ver alternativas" />}
      />
    )
  }

  if (program.status.intent === 'warning') {
    return (
      <Alert
        intent="warning"
        icon={<WarningIcon />}
        title="Cupo lleno"
        message="El grupo actual no tiene lugares. Únete a la lista de espera para avisos de baja."
        link={<Link href="/showcase" label="Cómo funciona la lista" />}
      />
    )
  }

  if (program.status.intent === 'info') {
    return (
      <Alert
        intent="info"
        icon={<InfoIcon />}
        title="En revisión académica"
        message="Coordinación valida el temario. La inscripción se habilita cuando el estatus pase a abierto."
      />
    )
  }

  return null
}

type WizardStep = 1 | 2 | 3

function wizardStepState(
  step: WizardStep,
  current: WizardStep,
  submitted: boolean,
  errorStep: WizardStep | null,
) {
  if (submitted) return 'completed' as const
  if (errorStep === step) return 'error' as const
  if (step < current) return 'completed' as const
  if (step === current) return 'current' as const
  return 'upcoming' as const
}

function scrollToContact() {
  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function ShowcasePage() {
  const [pageTab, setPageTab] = React.useState<'programas' | 'iconos'>('programas')
  const [navSection, setNavSection] = React.useState<NavSection>('catalogo')
  const [sideSection, setSideSection] = React.useState<SideSection>('oferta')
  const [size, setSize] = React.useState<ComponentSize>('sm')
  const [catalog, setCatalog] = React.useState<CatalogFilter>('todos')
  const [modality, setModality] = React.useState<string | null>(null)
  const [level, setLevel] = React.useState(false)
  const [tags, setTags] = React.useState(['UX Research', 'Producto'])
  const [selectedId, setSelectedId] = React.useState('1')
  const [page, setPage] = React.useState(1)
  const [notifyCourse, setNotifyCourse] = React.useState(true)
  const [notifyMarketing, setNotifyMarketing] = React.useState(false)
  const [contact, setContact] = React.useState('email')
  const [weeklyDigest, setWeeklyDigest] = React.useState(true)
  const [fullName, setFullName] = React.useState('Ana Beltrán')
  const [email, setEmail] = React.useState('ana.beltran@tec.mx')
  const [phone, setPhone] = React.useState('81 1234 5678')
  const [campus, setCampus] = React.useState('mty')
  const [interest, setInterest] = React.useState('ux')
  const [sessionDate, setSessionDate] = React.useState<Date | undefined>(
    new Date(2026, 7, 24),
  )
  const [sessionTime, setSessionTime] = React.useState('09:30')
  const [comment, setComment] = React.useState('')
  const [ctaName, setCtaName] = React.useState('')
  const [ctaPhone, setCtaPhone] = React.useState('')
  const [ctaCampus, setCtaCampus] = React.useState('mty')
  const [ctaNote, setCtaNote] = React.useState('')
  const [ctaTopic, setCtaTopic] = React.useState('research')
  const [ctaDate, setCtaDate] = React.useState<Date | undefined>()
  const [ctaTime, setCtaTime] = React.useState('16:00')
  const [showBanner, setShowBanner] = React.useState(true)
  const [toastOpen, setToastOpen] = React.useState(false)
  const [wizardStep, setWizardStep] = React.useState<WizardStep>(1)
  const [wizardErrorStep, setWizardErrorStep] = React.useState<WizardStep | null>(null)
  const [wizardSubmitted, setWizardSubmitted] = React.useState(false)

  const emailError = email.length > 0 && !email.includes('@')

  const allChecked =
    notifyCourse && notifyMarketing
      ? true
      : !notifyCourse && !notifyMarketing
        ? false
        : 'indeterminate'

  const visiblePrograms = PROGRAMS.filter((program) => {
    if (sideSection === 'inscripciones' && !program.saved) return false
    if (sideSection === 'certificados') return false
    if (catalog === 'recomendados' && !program.recommended) return false
    if (catalog === 'guardados' && !program.saved) return false
    if (modality === 'online' && !program.tags.some((tag) => tag.label === 'En línea')) {
      return false
    }
    if (modality === 'presencial' && !program.tags.some((tag) => tag.label === 'Presencial')) {
      return false
    }
    if (level && !program.tags.some((tag) => tag.label === 'Intermedio')) {
      return false
    }
    return true
  })

  const pageCount = Math.max(1, Math.ceil(visiblePrograms.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const pagedPrograms = visiblePrograms.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  )

  const selected = PROGRAMS.find((program) => program.id === selectedId) ?? PROGRAMS[0]!
  const step1State = wizardStepState(1, wizardStep, wizardSubmitted, wizardErrorStep)
  const step2State = wizardStepState(2, wizardStep, wizardSubmitted, wizardErrorStep)
  const step3State = wizardStepState(3, wizardStep, wizardSubmitted, wizardErrorStep)

  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <div className={styles.navbarInner}>
          <div className={styles.navbarBrand}>
            <BrandDropdown />
            <NavigationBar className={styles.navBar} aria-label="Principal">
              <NavigationItem
                label="Catálogo"
                current={navSection === 'catalogo'}
                onClick={() => {
                  setNavSection('catalogo')
                  setPageTab('programas')
                  setSideSection('oferta')
                }}
              />
              <NavigationItem
                label="Mi aprendizaje"
                icon={<UserIcon />}
                current={navSection === 'aprendizaje'}
                onClick={() => {
                  setNavSection('aprendizaje')
                  setPageTab('programas')
                  setCatalog('guardados')
                  setSideSection('inscripciones')
                }}
              />
              <NavigationItem label="Sitio Tec" disabled />
            </NavigationBar>
          </div>

          <div className={styles.navbarActions}>
            <ThemeToggle size={size} />
            <IconButton size={size} icon={<BookmarkSimpleIcon />} aria-label="Programas guardados" />
            <span className={styles.notifyWrap}>
              <IconButton
                size={size}
                tone="inverse"
                icon={<BellIcon />}
                aria-label="Notificaciones, 3 sin leer"
              />
              <span className={styles.notifyBadge}>
                <CounterBadge size={size} emphasis="attention" value="3" />
              </span>
            </span>
            <ButtonGroup>
              <AccountMenu size={size} />
              <Button size={size} hierarchy="primary" label="Inscribirme" />
            </ButtonGroup>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.tabs} role="tablist" aria-label="Vistas del showcase">
          <TabItem
            selected={pageTab === 'programas'}
            onSelectedChange={(selected) => selected && setPageTab('programas')}
            label="Programas"
          />
          <TabItem
            selected={pageTab === 'iconos'}
            onSelectedChange={(selected) => selected && setPageTab('iconos')}
            label="Íconos"
          />
        </div>

        {pageTab === 'iconos' ? (
          <IconsPanel size={size} />
        ) : (
          <>
            {showBanner ? (
              <div className={styles.bannerSlot}>
                <Banner
                  intent="info"
                  icon={<InfoIcon />}
                  title="Periodo de inscripción abierto"
                  message="Las solicitudes para ago–dic se reciben hasta el 30 de agosto. Los cupos se asignan por orden de registro."
                  link={<Link href="/showcase" label="Calendario académico" />}
                  onDismiss={() => setShowBanner(false)}
                />
              </div>
            ) : null}

            <div className={styles.hero}>
              <span className={styles.heroEyebrow}>Educación Continua</span>
              <div className={styles.heroTitleRow}>
                <h1 className={styles.heroTitle}>Programas abiertos</h1>
                <Badge size={size} label="Periodo ago–dic" />
              </div>
              <p className={styles.heroSubtitle}>
                Explora la oferta de Educación Continua, filtra por modalidad y solicita un lugar.
                Los cupos y el estatus académico se actualizan en tiempo real.
              </p>
              <div className={styles.segments} role="group" aria-label="Colección del catálogo">
                <Segment
                  size={size}
                  selected={catalog === 'todos'}
                  onSelectedChange={(selected) => selected && setCatalog('todos')}
                  label="Todos"
                />
                <Segment
                  size={size}
                  selected={catalog === 'recomendados'}
                  onSelectedChange={(selected) => selected && setCatalog('recomendados')}
                  icon={<FavoriteIcon />}
                  label="Recomendados"
                />
                <Segment
                  size={size}
                  selected={catalog === 'guardados'}
                  onSelectedChange={(selected) => selected && setCatalog('guardados')}
                  icon={<BookmarkSimpleIcon />}
                  aria-label="Guardados"
                />
              </div>
            </div>

            <section className={styles.toolbar} aria-label="Filtros">
              <div className={styles.sizeSwitcher}>
                <label htmlFor="showcase-size" className={styles.fieldLabel}>
                  Tamaño
                </label>
                <select
                  id="showcase-size"
                  className={styles.sizeSelect}
                  value={size}
                  onChange={(event) => setSize(event.target.value as ComponentSize)}
                >
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                </select>
              </div>

              <div className={styles.toolbarDivider} aria-hidden />

              <ChipGroup>
                <FilterChip
                  size={size}
                  selected={modality === 'online'}
                  onSelectedChange={(selected) => setModality(selected ? 'online' : null)}
                  label="En línea"
                />
                <FilterChip
                  size={size}
                  selected={modality === 'presencial'}
                  onSelectedChange={(selected) => setModality(selected ? 'presencial' : null)}
                  label="Presencial"
                />
                <FilterChip
                  size={size}
                  selected={level}
                  onSelectedChange={setLevel}
                  icon={<BookOpenIcon />}
                  label="Intermedio"
                />
              </ChipGroup>

              <div className={styles.toolbarDivider} aria-hidden />

              <div className={styles.activeTags}>
                <span className={styles.fieldLabel}>Etiquetas</span>
                <ChipGroup>
                  <InputChip size={size} label="Periodo vigente" onClose={() => undefined} disabled />
                  {tags.map((tag) => (
                    <InputChip
                      key={tag}
                      size={size}
                      label={tag}
                      onClose={() => setTags((prev) => prev.filter((item) => item !== tag))}
                    />
                  ))}
                </ChipGroup>
                {tags.length === 0 ? (
                  <span className={styles.emptyChips}>
                    Sin etiquetas · limpia los filtros para ver más programas
                  </span>
                ) : null}
              </div>
            </section>

            <div className={styles.layout}>
              <section className={styles.listPane} aria-label="Resultados">
                <SideNavigation
                  className={styles.sideNav}
                  heading="Catálogo"
                  aria-label="Secciones del catálogo"
                >
                  <NavigationItem
                    label="Oferta"
                    icon={<BookOpenIcon />}
                    current={sideSection === 'oferta'}
                    onClick={() => {
                      setSideSection('oferta')
                      setPage(1)
                    }}
                  />
                  <NavigationItem
                    label="Inscripciones"
                    icon={<BookmarkSimpleIcon />}
                    current={sideSection === 'inscripciones'}
                    onClick={() => {
                      setSideSection('inscripciones')
                      setPage(1)
                    }}
                  />
                  <NavigationItem
                    label="Certificados"
                    icon={<CheckCircleIcon />}
                    current={sideSection === 'certificados'}
                    onClick={() => {
                      setSideSection('certificados')
                      setPage(1)
                    }}
                  />
                </SideNavigation>

                <Divider />

                <div className={styles.listPaneHeader}>
                  <h2 className={styles.listPaneTitle}>Resultados</h2>
                  <Status size={size} intent="info" label={`${visiblePrograms.length} programas`} />
                </div>

                <div className={styles.programList}>
                  {pagedPrograms.map((program) => (
                    <div key={program.id} className={styles.listItemWrap}>
                      <StatusRail intent={program.status.intent} />
                      <ListItem
                        primaryText={program.title}
                        secondaryText={program.faculty}
                        tertiaryText={program.campus}
                        avatarSrc={program.avatarSrc}
                        avatarInitials={program.avatarInitials}
                        icon={<CaretRightIcon />}
                        disabled={program.cta === 'none' && program.status.intent === 'danger'}
                        aria-pressed={selectedId === program.id}
                        onClick={() => setSelectedId(program.id)}
                      />
                    </div>
                  ))}
                  {visiblePrograms.length === 0 ? (
                    <EmptyState
                      className={styles.emptyState}
                      type="empty"
                      icon={<FolderSimpleIcon />}
                      title={
                        sideSection === 'certificados'
                          ? 'Sin certificados'
                          : 'Sin programas'
                      }
                      message={
                        sideSection === 'certificados'
                          ? 'Cuando completes un programa, el diploma aparecerá en esta sección.'
                          : 'No hay resultados con estos filtros. Ajusta la modalidad o el nivel para ver más opciones.'
                      }
                      action={
                        sideSection === 'certificados' ? undefined : (
                          <Button
                            size={size}
                            hierarchy="secondary"
                            label="Limpiar filtros"
                            onClick={() => {
                              setCatalog('todos')
                              setModality(null)
                              setLevel(false)
                              setSideSection('oferta')
                              setPage(1)
                            }}
                          />
                        )
                      }
                    />
                  ) : null}
                </div>

                {visiblePrograms.length > 0 ? (
                  <div className={styles.paginationWrap}>
                    <Pagination
                      previousDisabled={currentPage === 1}
                      nextDisabled={currentPage === pageCount}
                      onPrevious={() => setPage((value) => Math.max(1, value - 1))}
                      onNext={() => setPage((value) => Math.min(pageCount, value + 1))}
                    >
                      {Array.from({ length: pageCount }, (_, index) => {
                        const number = index + 1
                        return (
                          <PaginationItem
                            key={number}
                            current={currentPage === number}
                            onClick={() => setPage(number)}
                          >
                            {number}
                          </PaginationItem>
                        )
                      })}
                    </Pagination>
                  </div>
                ) : null}
              </section>

              <article className={styles.detailPane} aria-label={`Detalle de ${selected.title}`}>
                <div className={styles.detailHeader}>
                  <div className={styles.courseHeading}>
                    <h3 className={styles.courseTitle}>{selected.title}</h3>
                    {selected.badge ? <Badge size={size} label={selected.badge} /> : null}
                  </div>
                  <Status
                    size={size}
                    intent={selected.status.intent}
                    icon={<CheckCircleIcon />}
                    label={selected.status.label}
                  />
                </div>

                <div className={styles.courseMetaRow}>
                  <span className={styles.courseMetaItem}>
                    <BookOpenIcon size={16} />
                    {selected.faculty}
                  </span>
                  <span className={styles.courseMetaItem}>
                    <MapPinIcon size={16} />
                    {selected.campus}
                  </span>
                </div>

                <div className={styles.courseTags}>
                  {selected.tags.map((tag) => (
                    <Tag
                      key={tag.label}
                      size={size}
                      tone={tag.tone}
                      icon={tag.tone === 'brand' ? <MapPinIcon /> : undefined}
                      label={tag.label}
                    />
                  ))}
                  <Tag size={size} tone="neutral" label="Tiempo estimado · 24 h de estudio" />
                </div>

                {selected.status.intent !== 'danger' ? (
                  <ProgressBar
                    label="Cupo del grupo"
                    value={selected.occupancy.value}
                    max={selected.occupancy.max}
                    valueFormat="fraction"
                  />
                ) : null}

                <CourseAlert program={selected} />

                <Divider />

                <p className={styles.courseDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className={styles.courseActions}>
                  <Link href="/showcase" label="Ver temario" />
                  <ButtonGroup>
                    {selected.cta === 'inscribir' ? (
                      <Button size={size} hierarchy="primary" label="Inscribirme" />
                    ) : null}
                    {selected.cta === 'lista' ? (
                      <Button size={size} hierarchy="secondary" label="Unirme a lista de espera" />
                    ) : null}
                    {selected.cta === 'none' ? (
                      <Button size={size} hierarchy="primary" disabled label="No disponible" />
                    ) : null}
                    <Button
                      size={size}
                      hierarchy="tertiary"
                      label="Solicitar información"
                      onClick={scrollToContact}
                    />
                  </ButtonGroup>
                </div>
              </article>
            </div>

            <section id="contacto" className={styles.section} aria-label="Contacto">
              <div className={styles.contactIntro}>
                <h2 className={styles.sectionTitle}>Contacto</h2>
                <p className={styles.sectionLead}>
                  Solicita información de {selected.title} en tres pasos. El indicador muestra el
                  estado de cada etapa al avanzar.
                </p>
                <div className={styles.socialRow}>
                  <SocialButton
                    size={size === 'md' ? 'md' : 'sm'}
                    label="Continuar con Facebook"
                    icon={<FacebookIcon />}
                  />
                </div>
              </div>

              <div className={styles.formPane}>
                <div className={styles.progressTrack}>
                  <ProgressIndicator aria-label="Pasos de la solicitud">
                    <ProgressStep
                      state={step1State}
                      label="Datos"
                      icon={
                        step1State === 'completed' ? (
                          <CheckIcon />
                        ) : step1State === 'error' ? (
                          <WarningIcon />
                        ) : (
                          1
                        )
                      }
                    />
                    <ProgressStep
                      state={step2State}
                      label="Preferencias"
                      icon={step2State === 'completed' ? <CheckIcon /> : 2}
                    />
                    <ProgressStep
                      state={step3State}
                      label="Confirmación"
                      icon={step3State === 'completed' ? <CheckIcon /> : 3}
                    />
                  </ProgressIndicator>
                </div>

                {wizardSubmitted ? (
                  <div className={styles.emptyStateWrap}>
                    <EmptyState
                      type="success"
                      icon={<CheckCircleIcon />}
                      title="Solicitud enviada"
                      message={`Coordinación te contactará sobre ${selected.title}.`}
                      action={
                        <Button
                          size={size}
                          hierarchy="secondary"
                          label="Nueva solicitud"
                          onClick={() => {
                            setWizardSubmitted(false)
                            setWizardStep(1)
                            setWizardErrorStep(null)
                          }}
                        />
                      }
                    />
                  </div>
                ) : (
                  <>
                    {wizardStep === 1 ? (
                      <div className={styles.formGrid}>
                        <FormField
                          label="Nombre completo"
                          supportingText="Como aparece en tu registro Tec"
                          placeholder="Nombre y apellidos"
                          value={fullName}
                          onChange={(event) => setFullName(event.target.value)}
                        />
                        <FormField
                          label="Correo"
                          supportingText={
                            emailError || wizardErrorStep === 1
                              ? 'Incluye un dominio válido, por ejemplo @tec.mx'
                              : 'Usa tu correo institucional'
                          }
                          placeholder="nombre@tec.mx"
                          value={email}
                          error={emailError || wizardErrorStep === 1}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                        <div className={styles.formGridFull}>
                          <FormField
                            control="phone"
                            label="Teléfono"
                            supportingText="Incluye lada"
                            placeholder="Número telefónico"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                          />
                        </div>
                      </div>
                    ) : null}

                    {wizardStep === 2 ? (
                      <div className={styles.formGrid}>
                        <FormField
                          control="select"
                          label="Campus de preferencia"
                          supportingText="Se usa para asignar grupo y horarios"
                          placeholder="Selecciona un campus"
                          value={campus}
                          onValueChange={setCampus}
                          options={CAMPUS_OPTIONS}
                        />
                        <Combobox
                          label="Programa de interés"
                          supportingText="Escribe para filtrar la oferta"
                          placeholder="Buscar programa"
                          options={INTEREST_OPTIONS}
                          value={interest}
                          onValueChange={setInterest}
                        />
                        <DatePicker
                          label="Fecha de sesión informativa"
                          supportingText="Elige un día hábil"
                          value={sessionDate}
                          onValueChange={setSessionDate}
                        />
                        <TimeField
                          label="Horario preferido"
                          supportingText="Hora local del campus"
                          value={sessionTime}
                          onChange={(event) => setSessionTime(event.target.value)}
                        />
                        <div className={styles.formBlock}>
                          <span className={styles.fieldLabel}>Canal de contacto</span>
                          <RadioGroup
                            value={contact}
                            onValueChange={setContact}
                            aria-label="Canal de contacto"
                            className={styles.radioGroup}
                          >
                            <label className={styles.checkField}>
                              <Radio value="email" id="showcase-email" />
                              <span>Correo</span>
                            </label>
                            <label className={styles.checkField}>
                              <Radio value="phone" id="showcase-phone" />
                              <span>Teléfono</span>
                            </label>
                            <label className={styles.checkField}>
                              <Radio value="none" id="showcase-none" disabled />
                              <span>No contactar</span>
                            </label>
                          </RadioGroup>
                        </div>
                        <div className={styles.formGridFull}>
                          <FormField
                            multiline
                            rows={3}
                            label="Comentario"
                            supportingText="Cuéntanos qué te interesa del programa"
                            placeholder="Horario, modalidad o dudas para coordinación"
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                          />
                        </div>
                      </div>
                    ) : null}

                    {wizardStep === 3 ? (
                      <div className={styles.formBlock}>
                        <FileUpload
                          type="button"
                          primaryText="Comprobante de estudios"
                          secondaryText="PDF o JPG · máximo 10 MB"
                          actionLabel="Seleccionar archivo"
                          supportingText="Opcional. Ayuda a validar el nivel del programa."
                          accept=".pdf,.jpg,.jpeg,.png"
                          multiple={false}
                        />
                        <span className={styles.fieldLabel}>Avisos del programa</span>
                        <label className={styles.checkField}>
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
                        <label className={styles.checkField}>
                          <Checkbox
                            id="showcase-course"
                            checked={notifyCourse}
                            onCheckedChange={(value) => setNotifyCourse(value === true)}
                          />
                          <span>Cambios de horario y cupo</span>
                        </label>
                        <label className={styles.checkField}>
                          <Checkbox
                            id="showcase-marketing"
                            checked={notifyMarketing}
                            onCheckedChange={(value) => setNotifyMarketing(value === true)}
                          />
                          <span>Otras convocatorias</span>
                        </label>
                        <label className={styles.checkField}>
                          <Checkbox id="showcase-sms" disabled checked={false} />
                          <span>SMS (no disponible en este periodo)</span>
                        </label>
                        <Divider />
                        <label className={styles.checkField}>
                          <Switch
                            checked={weeklyDigest}
                            onCheckedChange={setWeeklyDigest}
                            aria-label="Resumen semanal"
                          />
                          <span>Resumen semanal de programas nuevos</span>
                        </label>
                        <p className={styles.formPaneText}>
                          Al enviar aceptas el{' '}
                          <Link href="/privacidad" context="inline" label="aviso de privacidad" />.
                        </p>
                      </div>
                    ) : null}

                    <div className={styles.formActions}>
                      <ButtonGroup>
                        <Button
                          hierarchy="secondary"
                          size={size}
                          label="Atrás"
                          disabled={wizardStep === 1}
                          onClick={() => {
                            setWizardErrorStep(null)
                            setWizardStep((step) => (step === 1 ? 1 : ((step - 1) as WizardStep)))
                          }}
                        />
                        {wizardStep < 3 ? (
                          <Button
                            size={size}
                            label="Continuar"
                            onClick={() => {
                              if (wizardStep === 1 && (emailError || email.length === 0)) {
                                setWizardErrorStep(1)
                                return
                              }
                              setWizardErrorStep(null)
                              setWizardStep((step) => (step === 3 ? 3 : ((step + 1) as WizardStep)))
                            }}
                          />
                        ) : (
                          <Button
                            size={size}
                            label="Enviar solicitud"
                            onClick={() => {
                              setWizardSubmitted(true)
                              setToastOpen(true)
                            }}
                          />
                        )}
                      </ButtonGroup>
                    </div>
                  </>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      {pageTab === 'programas' ? (
        <section className={styles.inverseBand} aria-label="Avisos de nuevos programas">
          <div className={styles.inverseInner}>
            <div className={styles.inverseIntro}>
              <span className={styles.inverseEyebrow}>Comunidad Tec</span>
              <h2 className={styles.inverseTitle}>Recibe avisos de nuevos programas</h2>
              <p className={styles.inverseLead}>
                Campos inverse sobre superficie brand. Agenda una sesión o deja tus datos para
                coordinación.
              </p>
              <SocialButton
                size={size === 'md' ? 'md' : 'sm'}
                label="Continuar con Facebook"
                icon={<FacebookIcon />}
              />
            </div>

            <div className={styles.inverseForm}>
              <div className={styles.formGrid}>
                <FormField
                  tone="inverse"
                  label="Nombre"
                  supportingText="Como aparece en tu registro"
                  placeholder="Nombre y apellidos"
                  value={ctaName}
                  onChange={(event) => setCtaName(event.target.value)}
                />
                <FormField
                  tone="inverse"
                  control="phone"
                  label="Teléfono"
                  supportingText="Incluye lada"
                  placeholder="Número telefónico"
                  value={ctaPhone}
                  onChange={(event) => setCtaPhone(event.target.value)}
                />
                <FormField
                  tone="inverse"
                  control="select"
                  label="Campus"
                  supportingText="Preferencia de sede"
                  placeholder="Selecciona un campus"
                  value={ctaCampus}
                  onValueChange={setCtaCampus}
                  options={CAMPUS_OPTIONS}
                />
                <Combobox
                  tone="inverse"
                  label="Tema de la sesión"
                  supportingText="Escribe para filtrar"
                  placeholder="Buscar tema"
                  options={INTEREST_OPTIONS}
                  value={ctaTopic}
                  onValueChange={setCtaTopic}
                />
                <DatePicker
                  tone="inverse"
                  label="Fecha"
                  supportingText="Día de la sesión"
                  value={ctaDate}
                  onValueChange={setCtaDate}
                />
                <TimeField
                  tone="inverse"
                  label="Hora"
                  supportingText="Horario de 16:00 a 19:00"
                  value={ctaTime}
                  onChange={(event) => setCtaTime(event.target.value)}
                />
                <div className={styles.formGridFull}>
                  <FormField
                    tone="inverse"
                    multiline
                    rows={3}
                    label="Mensaje"
                    supportingText="Dudas para coordinación"
                    placeholder="Cuéntanos qué te interesa"
                    value={ctaNote}
                    onChange={(event) => setCtaNote(event.target.value)}
                  />
                </div>
                <div className={styles.formGridFull}>
                  <FileUpload
                    type="drag-zone"
                    tone="inverse"
                    primaryText="Adjunta tu CV"
                    secondaryText="PDF o DOCX · máximo 10 MB"
                    actionLabel="Seleccionar archivo"
                    dropZonePrimaryText="Arrastra el archivo aquí"
                    dropZoneSecondaryText="PDF o DOCX · máximo 10 MB"
                    supportingText="Opcional para la sesión informativa."
                    accept=".pdf,.docx"
                    multiple={false}
                  />
                </div>
              </div>
              <div className={styles.inverseActions}>
                <Button
                  size={size}
                  hierarchy="primary"
                  tone="inverse"
                  label="Agendar sesión"
                  onClick={() => setToastOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCopy}>
            <p className={styles.footerBrand}>Tec Design System</p>
            <p className={styles.footerText}>Composición de catálogo </p>
          </div>
          <nav className={styles.footerNav} aria-label="Enlaces legales">
            <Link href="/terminos" tone="inverse" label="Términos y condiciones" />
            <Link href="/privacidad" tone="inverse" label="Aviso de privacidad" />
            <Link href="/showcase" tone="inverse" label="tec.mx" external />
          </nav>
          <div className={styles.footerActions}>
            <IconButton
              size={size}
              tone="inverse"
              icon={<DownloadSimpleIcon />}
              aria-label="Descargar folleto"
            />
            <Button
              size={size}
              hierarchy="secondary"
              tone="inverse"
              label="Contacto"
              onClick={scrollToContact}
            />
          </div>
        </div>
      </footer>

      {pageTab === 'programas' && toastOpen ? (
        <div className={styles.toastRegion}>
          <Toast
            intent="success"
            icon={<CheckCircleIcon />}
            title="Solicitud enviada"
            message={`Coordinación te contactará sobre ${selected.title}.`}
            link={<Link href="/showcase" label="Ver mi aprendizaje" />}
            onDismiss={() => setToastOpen(false)}
          />
        </div>
      ) : null}

      {pageTab === 'programas' ? (
        <FloatingActionButton
          type="extended"
          floating
          icon={<ChatCircleIcon />}
          label="Hablar con un asesor"
        />
      ) : null}
    </div>
  )
}
