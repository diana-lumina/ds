import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { Select as Select$1, Avatar as Avatar$1, RadioGroup as RadioGroup$1, Checkbox as Checkbox$1, Switch as Switch$1 } from 'radix-ui';

declare const buttonVariants: (props?: ({
    hierarchy?: "primary" | "secondary" | "tertiary" | "destructive" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends Omit<React.ComponentProps<"button">, "children">, VariantProps<typeof buttonVariants> {
    /** `inverse` aplica a primary y secondary. */
    tone?: "standard" | "inverse";
    /** Texto / label del botón. */
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loading?: boolean;
}
declare function Button({ className, hierarchy, size, tone, label, leftIcon, rightIcon, loading, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface ButtonGroupProps extends React.ComponentProps<'div'> {
    orientation?: 'horizontal' | 'vertical';
}
/**
 * Pattern compartido para componer acciones relacionadas mediante instancias reales de Button.
 * No introduce una acción ni apariencia propias; organiza orientación y respuesta al espacio.
 */
declare function ButtonGroup({ orientation, className, children, ...props }: ButtonGroupProps): react_jsx_runtime.JSX.Element;

interface IconButtonProps extends Omit<React.ComponentProps<"button">, 'children'> {
    icon?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    hierarchy?: 'primary' | 'tertiary';
    /** standard sobre superficies claras · inverse sobre oscuras / brand. Solo aplica a primary. */
    tone?: 'standard' | 'inverse';
    loading?: boolean;
    'aria-label': string;
}
declare function IconButton({ icon, size, hierarchy, tone, loading, className, disabled, ...props }: IconButtonProps): react_jsx_runtime.JSX.Element;

interface SocialButtonProps extends Omit<React.ComponentProps<"button">, 'children'> {
    /** Label visible. */
    label: string;
    /** Ícono leading (marca social). Obligatorio. */
    icon: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
}
declare function SocialButton({ label, icon, size, loading, className, disabled, type, ...props }: SocialButtonProps): react_jsx_runtime.JSX.Element;

interface LinkProps extends Omit<React.ComponentProps<"a">, 'children'> {
    /** inline en flujo de texto · standalone como enlace autónomo */
    context?: 'inline' | 'standalone';
    tone?: 'standard' | 'inverse';
    /** Label (string editable). Debe describir el destino. */
    label: string;
    /**
     * Destino externo: muestra el glyph canónico Sales y abre en pestaña nueva
     * (`target="_blank"` + `rel="noopener noreferrer"`).
     */
    external?: boolean;
    href: string;
}
declare function Link({ context, tone, href, label, external, className, target, rel, ...props }: LinkProps): react_jsx_runtime.JSX.Element;

interface ListItemProps extends Omit<React.ComponentProps<"button">, 'children'> {
    /** Texto primario (obligatorio). Semantic/Label/Medium. */
    primaryText: string;
    /** Texto secundario (opcional). */
    secondaryText?: string;
    /** Texto terciario (opcional). */
    tertiaryText?: string;
    avatarSrc?: string;
    avatarInitials?: string;
    /** alt de la imagen del Avatar. Vacío si el nombre ya está en primaryText. */
    avatarAlt?: string;
    /** Ícono trailing (instance swap). A la derecha del texto. */
    icon: React.ReactNode;
}
/**
 * Fila de lista: Avatar — texto (primary obligatorio) — ícono trailing.
 * Estados: default, hover, pressed, focus-visible, disabled.
 */
declare function ListItem({ primaryText, secondaryText, tertiaryText, avatarSrc, avatarInitials, avatarAlt, icon, className, disabled, type, ...props }: ListItemProps): react_jsx_runtime.JSX.Element;

type AccordionItemTreatment = 'plain' | 'contained';
interface AccordionItemProps {
    treatment?: AccordionItemTreatment;
    /** Título (Semantic/Label/Medium/Strong). */
    title: string;
    /** Texto de apoyo a la izquierda, junto al título. */
    supportingText?: string;
    /** Ícono leading (24px). Ausente = off. */
    icon?: React.ReactNode;
    /** Contenido al expandir. */
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    className?: string;
}
/**
 * Accordion Item. Treatments: plain · contained.
 * Estados (CSS): collapsed, hover, expanded, focus-visible.
 * Focus: plain = anillo en el trigger; contained = anillo rectangular inset al padding.
 */
declare function AccordionItem({ treatment, title, supportingText, icon, children, open, defaultOpen, onOpenChange, disabled, className, }: AccordionItemProps): react_jsx_runtime.JSX.Element;

interface StatProps extends Omit<React.ComponentProps<'div'>, 'children'> {
    /** Valor (Semantic/Heading/Medium). */
    value: string;
    /** Label (Semantic/Body/Medium). */
    label: string;
    /** Ícono 32px, columna izquierda (instance swap). */
    icon: React.ReactNode;
}
/**
 * Stat: ícono 32px a la izquierda; value + label a la derecha.
 */
declare function Stat({ value, label, icon, className, ...props }: StatProps): react_jsx_runtime.JSX.Element;

interface TableCellProps extends React.ComponentProps<'td'> {
}
/**
 * Celda de tabla. Semantic/Label/Medium. Contenido vía children.
 */
declare function TableCell({ className, children, ...props }: TableCellProps): react_jsx_runtime.JSX.Element;

interface TableHeaderCellProps extends Omit<React.ComponentProps<'th'>, 'children' | 'onClick'> {
    /** Texto (Semantic/Label/Medium/Strong). */
    label: string;
    /** Ícono trailing opcional (a la derecha). */
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
/**
 * Encabezado de columna. Estados: default, hover y focus-visible (CSS).
 */
declare function TableHeaderCell({ label, icon, className, onClick, scope, ...props }: TableHeaderCellProps): react_jsx_runtime.JSX.Element;

interface TableRowProps extends React.ComponentProps<'tr'> {
    /** Fila seleccionada. Selected-hover es CSS (:hover). */
    selected?: boolean;
}
/**
 * Fila de tabla. Se compone de TableCell. Divider thickness 1 en el bottom.
 * Estados: default, hover, selected, selected-hover (CSS).
 */
declare function TableRow({ selected, className, children, ...props }: TableRowProps): react_jsx_runtime.JSX.Element;

interface TableProps extends Omit<React.ComponentProps<'table'>, 'children'> {
    /** Fila de TableHeaderCell. */
    header?: React.ReactNode;
    /** TableRow. */
    children?: React.ReactNode;
}
/**
 * Wrapper de TableHeaderCell y TableRow. Radius 16px, border 1px.
 */
declare function Table({ header, children, className, ...props }: TableProps): react_jsx_runtime.JSX.Element;

interface DataTableToolbarProps extends React.ComponentProps<'div'> {
    /** Search del toolbar. */
    search: React.ReactNode;
    /** FilterChip (o ChipGroup). */
    filters?: React.ReactNode;
    /** Button e IconButton. */
    actions?: React.ReactNode;
}
/**
 * Toolbar de Data Table: Search, y slots opcionales de FilterChip, Button e IconButton.
 */
declare function DataTableToolbar({ search, filters, actions, className, children, ...props }: DataTableToolbarProps): react_jsx_runtime.JSX.Element;

interface MenuItemProps extends Omit<React.ComponentProps<"button">, 'children'> {
    /** Label (string editable). */
    label: string;
}
/**
 * Ítem de menú. Default, hover, pressed, focus-visible y disabled son CSS nativos.
 */
declare function MenuItem({ label, className, disabled, type, ...props }: MenuItemProps): react_jsx_runtime.JSX.Element;

type NavigationItemContext = 'navigation-bar' | 'side-navigation';
interface NavigationItemProps extends Omit<React.ComponentProps<"button">, 'children'> {
    /** `navigation-bar` (sin superficie en current) · `side-navigation` (superficie current). */
    context?: NavigationItemContext;
    /** Destino o sección actual. Aplica `aria-current="page"`. Independiente de hover / pressed / focus-visible / disabled. */
    current?: boolean;
    /** Label (string editable). */
    label: string;
    /** Ícono leading opcional (16px). */
    icon?: React.ReactNode;
}
/**
 * Ítem de navegación para navigation-bar o side-navigation.
 * Current marca la sección activa; default, hover, pressed, focus-visible y disabled son CSS nativos.
 */
declare function NavigationItem({ context, current, label, icon, className, disabled, type, ...props }: NavigationItemProps): react_jsx_runtime.JSX.Element;

interface NavigationBarProps extends Omit<React.ComponentProps<'nav'>, 'children'> {
    /** SLOT nativo: instancias reales de NavigationItem. Current lo aporta cada ítem. */
    children: React.ReactNode;
}
/**
 * Barra de navegación horizontal. SLOT de NavigationItem (context=navigation-bar).
 * La exclusividad de current la garantiza el consumidor.
 */
declare function NavigationBar({ children, className, 'aria-label': ariaLabel, ...props }: NavigationBarProps): react_jsx_runtime.JSX.Element;

type BreadcrumbProps = React.ComponentProps<'nav'>;
declare function Breadcrumb({ className, children, 'aria-label': ariaLabel, ...props }: BreadcrumbProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbItemProps extends Omit<LinkProps, 'context' | 'tone' | 'external'> {
    /** Página actual del recorrido. Aplica estilos current y `aria-current="page"`. */
    current?: boolean;
}
/**
 * Ítem de un recorrido de navegación. Reutiliza Link (standalone / standard);
 * current expresa la ubicación actual y no cambia con hover, pressed ni visited.
 */
declare function BreadcrumbItem({ current, className, ...props }: BreadcrumbItemProps): react_jsx_runtime.JSX.Element;

interface FilterChipProps extends Omit<React.ComponentProps<"button">, 'onClick' | 'children'> {
    size?: 'sm' | 'md';
    selected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    /** Leading icon opcional (instance swap). */
    icon?: React.ReactNode;
    /** Label del filtro. */
    label?: React.ReactNode;
}
declare function FilterChip({ size, selected, onSelectedChange, icon, label, className, disabled, ...props }: FilterChipProps): react_jsx_runtime.JSX.Element;

type SelectAppearance = 'outlined' | 'underline';
type SelectTone = 'standard' | 'inverse';
interface SelectProps extends React.ComponentProps<typeof Select$1.Root> {
}
declare function Select({ ...props }: SelectProps): react_jsx_runtime.JSX.Element;
interface SelectGroupProps extends React.ComponentProps<typeof Select$1.Group> {
}
declare function SelectGroup({ ...props }: SelectGroupProps): react_jsx_runtime.JSX.Element;
interface SelectValueProps extends React.ComponentProps<typeof Select$1.Value> {
}
declare function SelectValue({ className, ...props }: SelectValueProps): react_jsx_runtime.JSX.Element;
interface SelectTriggerProps extends React.ComponentProps<typeof Select$1.Trigger> {
    appearance?: SelectAppearance;
    /** `standard` sobre superficies claras · `inverse` sobre oscuras / brand. */
    tone?: SelectTone;
    error?: boolean;
    /** Sin cromo propio; el contenedor compuesto pinta el borde. */
    embedded?: boolean;
}
declare function SelectTrigger({ appearance, tone, error, className, children, disabled, embedded, ...props }: SelectTriggerProps): react_jsx_runtime.JSX.Element;
interface SelectContentProps extends React.ComponentProps<typeof Select$1.Content> {
}
declare function SelectContent({ className, children, position, align, ...props }: SelectContentProps): react_jsx_runtime.JSX.Element;
interface SelectLabelProps extends React.ComponentProps<typeof Select$1.Label> {
}
declare function SelectLabel({ className, ...props }: SelectLabelProps): react_jsx_runtime.JSX.Element;
interface SelectItemProps extends React.ComponentProps<typeof Select$1.Item> {
    /** Texto extra en la lista; no aparece en el trigger. */
    suffix?: React.ReactNode;
}
declare function SelectItem({ className, children, suffix, ...props }: SelectItemProps): react_jsx_runtime.JSX.Element;
interface SelectSeparatorProps extends React.ComponentProps<typeof Select$1.Separator> {
}
declare function SelectSeparator({ className, ...props }: SelectSeparatorProps): react_jsx_runtime.JSX.Element;

type PhoneInputAppearance = SelectAppearance;
type PhoneInputTone = SelectTone;
type PhoneCountry = {
    value: string;
    dialCode: string;
    label: string;
};
declare const DEFAULT_PHONE_COUNTRIES: PhoneCountry[];
interface PhoneInputProps extends Omit<React.ComponentProps<'input'>, 'disabled' | 'type'> {
    appearance?: PhoneInputAppearance;
    /** `standard` sobre superficies claras · `inverse` sobre oscuras / brand. */
    tone?: PhoneInputTone;
    error?: boolean;
    disabled?: boolean;
    countries?: PhoneCountry[];
    country?: string;
    defaultCountry?: string;
    onCountryChange?: (country: string) => void;
    countryLabel?: string;
}
declare function PhoneInput({ appearance, tone, error, disabled, className, countries, country, defaultCountry, onCountryChange, countryLabel, id, placeholder, ...props }: PhoneInputProps): react_jsx_runtime.JSX.Element;

type TextInputAppearance = 'outlined' | 'underline';
type TextInputTone = 'standard' | 'inverse';

type FormFieldControl = 'input' | 'textarea' | 'select' | 'phone';
type FormFieldTone = TextInputTone;
type FormFieldOption = {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
};
interface FormFieldProps extends Omit<React.ComponentProps<"input">, 'disabled' | 'value'> {
    /** Label visible (Semantic/Label/Medium/Strong). */
    label: string;
    /** Texto de ayuda o error (Semantic/Label/Small). */
    supportingText?: string;
    /** Apariencia del control interno. */
    appearance?: TextInputAppearance;
    /** `standard` sobre superficies claras · `inverse` sobre oscuras / brand. */
    tone?: FormFieldTone;
    /** Control interno. `multiline` equivale a `textarea`. */
    control?: FormFieldControl;
    /** Usa TextArea en lugar de TextInput. */
    multiline?: boolean;
    /** Filas iniciales del TextArea. */
    rows?: number;
    /** Opciones cuando `control="select"`. */
    options?: FormFieldOption[];
    /** Valor del Select (controlado). */
    value?: string;
    /** Valor inicial del Select (no controlado). */
    defaultValue?: string;
    /** Cambio de valor del Select. */
    onValueChange?: (value: string) => void;
    /** País seleccionado cuando `control="phone"`. */
    country?: string;
    defaultCountry?: string;
    onCountryChange?: (country: string) => void;
    countries?: PhoneCountry[];
    /** Error: supporting text + control en estado error. */
    error?: boolean;
    /** Disabled: el input no recibe interacción; el supporting text usa color disabled. */
    disabled?: boolean;
}
/**
 * Campo de formulario: label, TextInput / TextArea / Select / PhoneInput y supporting text.
 * Appearances: outlined, underline. Tones: standard, inverse. Estados: default, error, disabled.
 */
declare function FormField({ label, supportingText, appearance, tone, control, multiline, rows, options, value, defaultValue, onValueChange, country, defaultCountry, onCountryChange, countries, error, id, className, disabled, type, placeholder, ...props }: FormFieldProps): react_jsx_runtime.JSX.Element;

type DateFieldAppearance = TextInputAppearance;
type DateFieldTone = TextInputTone;
interface DateFieldProps extends Omit<React.ComponentProps<'input'>, 'disabled' | 'type'> {
    label: string;
    supportingText?: string;
    appearance?: DateFieldAppearance;
    tone?: DateFieldTone;
    error?: boolean;
    disabled?: boolean;
    /** Label accesible del ícono de calendario. */
    calendarLabel?: string;
    /** Si se pasa, el ícono no abre el picker nativo. */
    onCalendarClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** `aria-expanded` del ícono cuando un popup controla la apertura. */
    calendarExpanded?: boolean;
    /** `false` evita el date picker nativo (lo usa DatePicker). */
    nativePicker?: boolean;
}
/**
 * Campo de fecha: FormField (label + supporting) y TextInput type="date"
 * outlined | underline × standard | inverse. CalendarIcon trailing.
 * Por defecto abre el picker nativo; DatePicker pasa onCalendarClick.
 */
declare function DateField({ label, supportingText, appearance, tone, error, disabled, calendarLabel, onCalendarClick, calendarExpanded, nativePicker, className, id, onClick, ...props }: DateFieldProps): react_jsx_runtime.JSX.Element;

type DatePickerAppearance = DateFieldAppearance;
type DatePickerTone = DateFieldTone;
interface DatePickerProps extends Omit<React.ComponentProps<'div'>, 'children' | 'defaultValue' | 'onChange'> {
    label: string;
    supportingText?: string;
    appearance?: DatePickerAppearance;
    tone?: DatePickerTone;
    error?: boolean;
    disabled?: boolean;
    value?: Date;
    defaultValue?: Date;
    onValueChange?: (date: Date | undefined) => void;
    minDate?: Date;
    maxDate?: Date;
    locale?: string;
    calendarLabel?: string;
    name?: string;
    id?: string;
}
/**
 * Date Picker: DateField + Calendar en Popover (Radix).
 * El ícono abre el calendario; elegir un día cierra y actualiza el campo.
 */
declare function DatePicker({ label, supportingText, appearance, tone, error, disabled, value, defaultValue, onValueChange, minDate, maxDate, locale, calendarLabel, name, id, className, ...props }: DatePickerProps): react_jsx_runtime.JSX.Element;

type TimeFieldAppearance = TextInputAppearance;
type TimeFieldTone = TextInputTone;
interface TimeFieldProps extends Omit<React.ComponentProps<'input'>, 'disabled' | 'type'> {
    label: string;
    supportingText?: string;
    appearance?: TimeFieldAppearance;
    tone?: TimeFieldTone;
    error?: boolean;
    disabled?: boolean;
    /** Label accesible del ícono de tiempo. */
    timeLabel?: string;
}
/**
 * Campo de hora: FormField (label + supporting) y TextInput type="time"
 * outlined | underline × standard | inverse. ClockIcon trailing.
 */
declare function TimeField({ label, supportingText, appearance, tone, error, disabled, timeLabel, className, id, ...props }: TimeFieldProps): react_jsx_runtime.JSX.Element;

type ComboboxAppearance = TextInputAppearance;
type ComboboxTone = TextInputTone;
type ComboboxOption = {
    value: string;
    label: string;
    disabled?: boolean;
};
interface ComboboxProps extends Omit<React.ComponentProps<'div'>, 'children' | 'defaultValue' | 'onChange'> {
    label: string;
    supportingText?: string;
    appearance?: ComboboxAppearance;
    tone?: ComboboxTone;
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    options: ComboboxOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    emptyText?: string;
    name?: string;
    id?: string;
}
/**
 * Combobox: FormField (label + TextInput + supporting) y lista de opciones
 * con los mismos estilos del Select. Filtra al escribir.
 */
declare function Combobox({ label, supportingText, appearance, tone, error, disabled, placeholder, options, value, defaultValue, onValueChange, emptyText, name, id, className, ...props }: ComboboxProps): react_jsx_runtime.JSX.Element;

interface InputChipProps {
    size?: 'sm' | 'md';
    /** Label (valor aplicado). */
    label: string;
    /** Leading icon opcional (instance swap). */
    icon?: React.ReactNode;
    onClose: () => void;
    /** Disabled: no recibe interacción ni emite remoción. Close sigue visible. */
    disabled?: boolean;
    /**
     * Nombre accesible del close. Por defecto: `Eliminar {label}`.
     */
    closeLabel?: string;
    className?: string;
}
declare function InputChip({ size, label, icon, onClose, disabled, closeLabel, className, }: InputChipProps): react_jsx_runtime.JSX.Element;

type StatusIntent = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
interface StatusProps extends Omit<React.ComponentProps<"span">, 'children' | 'onClick'> {
    size?: 'sm' | 'md';
    intent?: StatusIntent;
    /** Label breve y específico de la condición del sistema. */
    label: string;
    /** Leading icon opcional (instance swap). Complementario; no única fuente de significado. */
    icon?: React.ReactNode;
}
/**
 * Condición generada por el sistema. No interactivo: sin State, selected, dismiss, href ni onClick.
 */
declare function Status({ size, intent, label, icon, className, ...props }: StatusProps): react_jsx_runtime.JSX.Element;

interface TabItemProps extends Omit<React.ComponentProps<"button">, 'onClick' | 'children'> {
    /** Selected=true identifica el tab activo; la exclusividad la garantiza el grupo. */
    selected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    /** Label (string editable). */
    label: string;
}
/**
 * Ítem de un Tab. Selected / unselected son independientes de State
 * (default, hover, focus-visible, disabled). No administra exclusividad del grupo.
 */
declare function TabItem({ selected, onSelectedChange, label, className, disabled, ...props }: TabItemProps): react_jsx_runtime.JSX.Element;

interface TagProps extends Omit<React.ComponentProps<"span">, 'children' | 'onClick'> {
    size?: 'sm' | 'md';
    tone?: 'neutral' | 'brand';
    /** Label breve y específico de la clasificación. */
    label: string;
    /** Leading icon opcional (instance swap). Complementario; no única fuente de significado. */
    icon?: React.ReactNode;
}
/**
 * Clasificación o identificación de contenido. No interactivo: sin State, selected, dismiss, href ni onClick.
 */
declare function Tag({ size, tone, label, icon, className, ...props }: TagProps): react_jsx_runtime.JSX.Element;

type AlertIntent = 'info' | 'success' | 'warning' | 'danger';
interface AlertProps extends Omit<React.ComponentProps<'div'>, 'children' | 'title'> {
    intent?: AlertIntent;
    icon?: React.ReactNode;
    title: string;
    message: string;
    /** Link opcional. */
    link?: React.ReactNode;
    /** Muestra IconButton tertiary sm a la derecha. */
    onDismiss?: () => void;
    dismissLabel?: string;
}
declare function Alert({ intent, icon, title, message, link, onDismiss, dismissLabel, className, ...props }: AlertProps): react_jsx_runtime.JSX.Element;

type ToastIntent = AlertIntent;
interface ToastProps extends Omit<React.ComponentProps<'div'>, 'children' | 'title'> {
    intent?: ToastIntent;
    icon?: React.ReactNode;
    title: string;
    message: string;
    /** Link opcional (instancia de Link). */
    link?: React.ReactNode;
    onDismiss?: () => void;
    dismissLabel?: string;
}
declare function Toast({ intent, icon, title, message, link, onDismiss, dismissLabel, className, ...props }: ToastProps): react_jsx_runtime.JSX.Element;

interface BadgeProps extends Omit<React.ComponentProps<"span">, 'children'> {
    size?: 'sm' | 'md';
    tone?: 'neutral';
    label: string;
}
declare function Badge({ size, tone, label, className, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

type BannerIntent = AlertIntent;
interface BannerProps extends Omit<React.ComponentProps<'div'>, 'children' | 'title'> {
    intent?: BannerIntent;
    icon?: React.ReactNode;
    title: string;
    message: string;
    /** Link opcional (instancia de Link). */
    link?: React.ReactNode;
    /** Muestra IconButton tertiary sm a la derecha. */
    onDismiss?: () => void;
    dismissLabel?: string;
}
declare function Banner({ intent, icon, title, message, link, onDismiss, dismissLabel, className, ...props }: BannerProps): react_jsx_runtime.JSX.Element;

interface CounterBadgeProps extends Omit<React.ComponentProps<"span">, 'children'> {
    size?: 'sm' | 'md';
    emphasis?: 'neutral' | 'attention' | 'inverse';
    /** Texto breve ya resuelto por el consumidor: "1", "9", "24", "99+". */
    value: string;
}
declare function CounterBadge({ size, emphasis, value, className, ...props }: CounterBadgeProps): react_jsx_runtime.JSX.Element;

interface DividerProps extends React.ComponentProps<"div"> {
    orientation?: 'horizontal' | 'vertical';
    thickness?: 1 | 2;
}
declare function Divider({ orientation, thickness, className, ...props }: DividerProps): react_jsx_runtime.JSX.Element;

type EmptyStateType = 'empty' | 'error' | 'success';
interface EmptyStateProps extends Omit<React.ComponentProps<'div'>, 'children' | 'title'> {
    /** empty · error · success */
    type?: EmptyStateType;
    /** Visual de 32px (instance swap). */
    icon?: React.ReactNode;
    /** Título (Semantic/Label/Medium/Strong). */
    title: string;
    /** Supporting message (Semantic/Label/Medium). */
    message: string;
    /** Acción primaria opcional (Button hierarchy="primary"). */
    action?: React.ReactNode;
}
declare function EmptyState({ type, icon, title, message, action, className, ...props }: EmptyStateProps): react_jsx_runtime.JSX.Element;

type FileUploadItemStatus = 'selected' | 'uploading' | 'success' | 'error';
type FileUploadItemTone = 'standard' | 'inverse';
interface FileUploadItemProps extends Omit<React.ComponentProps<'div'>, 'children'> {
    status?: FileUploadItemStatus;
    tone?: FileUploadItemTone;
    /** Nombre o título del archivo. */
    primaryText: string;
    /** Supporting (peso, progreso, mensaje de éxito/error). */
    secondaryText: string;
    /** Label del Button sm. */
    actionLabel: string;
    onAction?: React.MouseEventHandler<HTMLButtonElement>;
    /** Progreso 0–100. Solo aplica en `uploading`. */
    progress?: number;
}
/**
 * Ítem de carga de archivo: selected | uploading | success | error × standard | inverse.
 * Button sm: secondary (standard) · secondary inverse (inverse).
 */
declare function FileUploadItem({ status, tone, primaryText, secondaryText, actionLabel, onAction, progress, className, ...props }: FileUploadItemProps): react_jsx_runtime.JSX.Element;

type FileUploadDropZoneTone = 'standard' | 'inverse';
interface FileUploadDropZoneProps extends Omit<React.ComponentProps<'div'>, 'children'> {
    tone?: FileUploadDropZoneTone;
    disabled?: boolean;
    primaryText: string;
    secondaryText: string;
    actionLabel: string;
    accept?: string;
    multiple?: boolean;
    onFilesChange?: (files: FileList) => void;
}
/**
 * Drop zone de carga: default | focus-visible/focus-within | disabled × standard | inverse.
 * Button: secondary (standard) · secondary inverse (inverse).
 */
declare function FileUploadDropZone({ tone, disabled, primaryText, secondaryText, actionLabel, accept, multiple, onFilesChange, className, onDragOver, onDrop, ...props }: FileUploadDropZoneProps): react_jsx_runtime.JSX.Element;

type FileUploadType = 'button' | 'drag-zone';
type FileUploadTone = 'standard' | 'inverse';
type FileUploadEntry = {
    id: string;
    primaryText: string;
    secondaryText: string;
    status?: FileUploadItemStatus;
    actionLabel?: string;
    progress?: number;
};
interface FileUploadProps extends Omit<React.ComponentProps<'div'>, 'children'> {
    type?: FileUploadType;
    tone?: FileUploadTone;
    disabled?: boolean;
    primaryText: string;
    secondaryText: string;
    actionLabel: string;
    /** Copy interno de FileUploadDropZone. Solo aplica en `drag-zone`. */
    dropZonePrimaryText?: string;
    dropZoneSecondaryText?: string;
    supportingText?: string;
    accept?: string;
    multiple?: boolean;
    /** Ítems controlados. Si no se pasa, se generan al elegir archivos. */
    items?: FileUploadEntry[];
    itemActionLabel?: string;
    onFilesChange?: (files: File[]) => void;
    onItemAction?: (id: string) => void;
}
/**
 * File Upload: type button | drag-zone × tone standard | inverse.
 * button: primary, secondary, Button secondary, supporting.
 * drag-zone: primary, secondary, FileUploadDropZone, supporting; FileUploadItem debajo al elegir.
 */
declare function FileUpload({ type, tone, disabled, primaryText, secondaryText, actionLabel, dropZonePrimaryText, dropZoneSecondaryText, supportingText, accept, multiple, items, itemActionLabel, onFilesChange, onItemAction, className, ...props }: FileUploadProps): react_jsx_runtime.JSX.Element;

interface CalendarDayProps extends Omit<React.ComponentProps<'button'>, 'children'> {
    /** Día seleccionado. Independiente de hover / disabled. */
    selected?: boolean;
    /** Número o contenido visible del día. */
    children: React.ReactNode;
}
/**
 * Día de calendario. Selected / unselected × default, hover y disabled (CSS nativo).
 */
declare function CalendarDay({ selected, children, className, disabled, type, ...props }: CalendarDayProps): react_jsx_runtime.JSX.Element;

interface CalendarProps extends Omit<React.ComponentProps<'div'>, 'children' | 'defaultValue'> {
    value?: Date | null;
    defaultValue?: Date;
    onValueChange?: (date: Date) => void;
    month?: Date;
    defaultMonth?: Date;
    onMonthChange?: (month: Date) => void;
    locale?: string;
    minDate?: Date;
    maxDate?: Date;
    previousLabel?: string;
    nextLabel?: string;
}
/**
 * Calendario mensual. Compone IconButton tertiary md y CalendarDay.
 * Radix no tiene primitivo de calendario; shadcn usa react-day-picker + Tailwind.
 */
declare function Calendar({ value, defaultValue, onValueChange, month: monthProp, defaultMonth, onMonthChange, locale, minDate, maxDate, previousLabel, nextLabel, className, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;

interface SegmentProps extends Omit<React.ComponentProps<"button">, 'onClick' | 'children'> {
    size?: 'sm' | 'md' | 'lg';
    /** Selected=true identifica la opción activa; la exclusividad la garantiza el grupo. */
    selected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    /** Leading icon (instance swap). A la izquierda si hay label. */
    icon?: React.ReactNode;
    /** Label (string editable). Opcional si hay icon (icon-only requiere aria-label). */
    label?: string;
}
/**
 * Subcomponente interno de Segmented Button.
 * Contenido: icon, label o ambos (icon a la izquierda).
 * No administra exclusividad del grupo ni debe consumirse como acción independiente.
 */
declare function Segment({ size, selected, onSelectedChange, icon, label, className, disabled, ...props }: SegmentProps): react_jsx_runtime.JSX.Element;

interface SideNavigationProps extends Omit<React.ComponentProps<'nav'>, 'children'> {
    /** Heading opcional de la sección. */
    heading?: string;
    /** SLOT nativo: instancias reales de NavigationItem. Current lo aporta cada ítem. */
    children: React.ReactNode;
}
/**
 * Navegación lateral. Compone heading opcional y SLOT de NavigationItem
 * (context=side-navigation). La exclusividad de current la garantiza el consumidor.
 */
declare function SideNavigation({ heading, children, className, 'aria-label': ariaLabel, ...props }: SideNavigationProps): react_jsx_runtime.JSX.Element;

type AvatarSize = 'sm' | 'md' | 'lg';
type AvatarContent = 'image' | 'initials' | 'fallback';
interface AvatarProps extends Omit<React.ComponentProps<typeof Avatar$1.Root>, 'children'> {
    size?: AvatarSize;
    src?: string;
    alt?: string;
    /** Hasta 2 caracteres. Si se pasa un nombre completo, se derivan las iniciales. */
    initials?: string;
}
declare function Avatar({ size, src, alt, initials, className, ...props }: AvatarProps): react_jsx_runtime.JSX.Element;

type FloatingActionButtonBase = Omit<React.ComponentProps<"button">, 'type' | 'children' | 'aria-label'> & {
    icon: React.ReactNode;
    /** Cuando es true, fija el botón en la esquina inferior derecha. */
    floating?: boolean;
};
type FloatingActionButtonStandardProps = FloatingActionButtonBase & {
    type?: 'standard';
    /** Obligatorio en standard (Accessible label vía Icon Button anidado). */
    'aria-label': string;
    label?: never;
    loading?: never;
};
type FloatingActionButtonExtendedProps = FloatingActionButtonBase & {
    type: 'extended';
    /** Label visible (Button primary lg anidado). */
    label: string;
    'aria-label'?: string;
    loading?: boolean;
};
type FloatingActionButtonProps = FloatingActionButtonStandardProps | FloatingActionButtonExtendedProps;
declare function FloatingActionButton(props: FloatingActionButtonProps): react_jsx_runtime.JSX.Element;

interface RadioGroupProps extends React.ComponentProps<typeof RadioGroup$1.Root> {
}
declare function RadioGroup({ className, ...props }: RadioGroupProps): react_jsx_runtime.JSX.Element;
interface RadioProps extends React.ComponentProps<typeof RadioGroup$1.Item> {
}
/** Control de selección exclusiva (20×20). Label y grupo = patrón consumidor / RadioGroup. */
declare function Radio({ className, ...props }: RadioProps): react_jsx_runtime.JSX.Element;

type SearchAppearance = TextInputAppearance;
type SearchTone = TextInputTone;
interface SearchProps extends Omit<React.ComponentProps<"input">, 'disabled' | 'type'> {
    appearance?: SearchAppearance;
    tone?: SearchTone;
    error?: boolean;
    disabled?: boolean;
    /** Label accesible del botón clear. */
    clearLabel?: string;
    onClear?: () => void;
}
declare function Search({ appearance, tone, error, disabled, className, value, defaultValue, onChange, onClear, clearLabel, placeholder, id, ...props }: SearchProps): react_jsx_runtime.JSX.Element;

interface PaginationItemProps extends Omit<React.ComponentProps<"button">, 'children'> {
    /** Página actual. Aplica `aria-current="page"`. Independiente de hover / pressed / focus-visible / disabled. */
    current?: boolean;
    /** Número o contenido visible del ítem. */
    children: React.ReactNode;
}
/**
 * Ítem de paginación. Current marca la página activa; los estados
 * default, hover, pressed, focus-visible y disabled son CSS nativos.
 * La exclusividad de current la garantiza el contenedor (Pagination).
 */
declare function PaginationItem({ current, children, className, disabled, type, ...props }: PaginationItemProps): react_jsx_runtime.JSX.Element;

interface PaginationProps extends Omit<React.ComponentProps<'nav'>, 'children'> {
    /** SLOT nativo: instancias reales de PaginationItem. Cantidad y rango no son ejes de variante. */
    children: React.ReactNode;
    onPrevious?: () => void;
    onNext?: () => void;
    previousDisabled?: boolean;
    nextDisabled?: boolean;
    previousLabel?: string;
    nextLabel?: string;
}
/**
 * Contenedor de paginación. Compone IconButton tertiary md (prev/next)
 * y un SLOT de PaginationItem. No define cantidad de páginas ni current.
 */
declare function Pagination({ children, onPrevious, onNext, previousDisabled, nextDisabled, previousLabel, nextLabel, className, 'aria-label': ariaLabel, ...props }: PaginationProps): react_jsx_runtime.JSX.Element;

type ProgressBarValueFormat = 'percent' | 'fraction';
interface ProgressBarProps extends Omit<React.ComponentProps<'div'>, 'children'> {
    /** Label visible (Semantic/Label/Medium/Strong). */
    label: string;
    /** Progreso actual. */
    value?: number;
    /** Valor máximo. */
    max?: number;
    /** Cómo se muestra el dato: porcentaje o fracción. */
    valueFormat?: ProgressBarValueFormat;
}
declare function ProgressBar({ label, value, max, valueFormat, className, ...props }: ProgressBarProps): react_jsx_runtime.JSX.Element;

type ProgressIndicatorProps = React.ComponentProps<'nav'>;
declare function ProgressIndicator({ className, children, 'aria-label': ariaLabel, ...props }: ProgressIndicatorProps): react_jsx_runtime.JSX.Element;

type ProgressStepState = 'completed' | 'current' | 'upcoming' | 'error' | 'disabled';
interface ProgressStepProps extends Omit<React.ComponentProps<'div'>, 'children'> {
    /** Estado visual del paso. */
    state?: ProgressStepState;
    /** Texto debajo del marker. */
    label: string;
    /** Contenido del marker: ícono o número. */
    icon?: React.ReactNode;
}
declare function ProgressStep({ state, label, icon, className, ...props }: ProgressStepProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps extends React.ComponentProps<typeof Checkbox$1.Root> {
}
declare function Checkbox({ className, ...props }: CheckboxProps): react_jsx_runtime.JSX.Element;

type ChipGroupProps = React.ComponentProps<'div'>;
/**
 * Pattern compartido para componer chips relacionados mediante instancias reales
 * de FilterChip o InputChip. No introduce una acción ni apariencia propias;
 * organiza wrap y gap. Alignment es responsabilidad del contenedor padre.
 */
declare function ChipGroup({ className, children, ...props }: ChipGroupProps): react_jsx_runtime.JSX.Element;

interface SwitchProps extends React.ComponentProps<typeof Switch$1.Root> {
}
/**
 * Control binario on/off. Label pertenece al patrón consumidor.
 * Tamaño visual único (track 40×24).
 */
declare function Switch({ className, ...props }: SwitchProps): react_jsx_runtime.JSX.Element;

type TooltipSide = 'top' | 'right' | 'bottom' | 'left';
interface TooltipProps {
    /** Texto visible del tooltip. */
    label: string;
    /** Trigger: un único elemento que acepte ref (Button, IconButton, etc.). */
    children: React.ReactElement;
    /** Posición relativa al trigger. No es variante visual. */
    side?: TooltipSide;
    delayDuration?: number;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}
/**
 * Tooltip. Sin variantes visuales. Hover y focus-visible abren el overlay (Radix).
 */
declare function Tooltip({ label, children, side, delayDuration, open, defaultOpen, onOpenChange, className, }: TooltipProps): react_jsx_runtime.JSX.Element;

declare const OTP_LENGTH = 6;
interface OtpInputProps extends Omit<React.ComponentProps<'div'>, 'children' | 'onChange' | 'defaultValue'> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    name?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    'aria-label'?: string;
}
/**
 * Código de un solo uso: 6 segmentos. Default y focus-visible (el anillo rodea el grupo).
 */
declare function OtpInput({ value, defaultValue, onValueChange, name, autoComplete, autoFocus, className, id, 'aria-label': ariaLabel, ...props }: OtpInputProps): react_jsx_runtime.JSX.Element;

type DialogSize = 'sm' | 'md' | 'lg';
interface DialogProps {
    size?: DialogSize;
    title: string;
    children: React.ReactNode;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    trigger?: React.ReactElement;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    dismissLabel?: string;
    className?: string;
}
/**
 * Dialog (overlay). Sizes sm 480 · md 640 · lg 800.
 * Cierre: IconButton tertiary sm. Acciones: Button secondary + primary, size md.
 */
declare function Dialog({ size, title, children, primaryAction, secondaryAction, trigger, open, defaultOpen, onOpenChange, dismissLabel, className, }: DialogProps): react_jsx_runtime.JSX.Element;

type DrawerSize = 'sm' | 'lg';
interface DrawerProps {
    size?: DrawerSize;
    /** SLOT header. Si no se pasa, se usa `title`. */
    header?: React.ReactNode;
    title?: string;
    /** SLOT content: título de sección. */
    contentTitle?: string;
    /** SLOT content. */
    children?: React.ReactNode;
    /** SLOT footer. Si no se pasa, se usan las actions. */
    footer?: React.ReactNode;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    trigger?: React.ReactElement;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    dismissLabel?: string;
    className?: string;
}
/**
 * Drawer: panel derecho anclado al bottom. Hug-content (máx. 100vh).
 * Sizes sm 400 · lg 640. Cierre: IconButton tertiary (sm o lg según size).
 */
declare function Drawer({ size, header, title, contentTitle, children, footer, primaryAction, secondaryAction, trigger, open, defaultOpen, onOpenChange, dismissLabel, className, }: DrawerProps): react_jsx_runtime.JSX.Element;

interface ChatMessageProps extends Omit<React.ComponentProps<'div'>, 'children' | 'role'> {
    /** Contenido del message body (Semantic/Body/Small). */
    children: React.ReactNode;
    /** assistant: avatar a la izquierda. user: avatar a la derecha. */
    role?: ChatMessageRole;
    avatarSrc?: string;
    avatarInitials?: string;
    /** alt de la imagen. Vacío si el nombre ya es visible en el hilo. */
    avatarAlt?: string;
}
type ChatMessageRole = 'assistant' | 'user';
/**
 * Chat Message: Avatar + message body. Assistant avatar izq.; user avatar der.
 */
declare function ChatMessage({ children, role, avatarSrc, avatarInitials, avatarAlt, className, ...props }: ChatMessageProps): react_jsx_runtime.JSX.Element;

interface ChatInputProps extends Omit<React.ComponentProps<'input'>, 'disabled' | 'type'> {
    error?: boolean;
    disabled?: boolean;
}
declare const ChatInput: React.ForwardRefExoticComponent<Omit<ChatInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;

type AiResponseStatusActivity = 'searching-sources' | 'generating' | 'streaming' | 'thinking';
interface AiResponseStatusProps extends Omit<React.ComponentProps<'div'>, 'children'> {
    activity?: AiResponseStatusActivity;
    /** Texto visible. Si no se pasa, se usa el copy de la activity. */
    label?: string;
}
/**
 * Indicador de actividad de una respuesta de IA. Ellipsis + Body Small.
 */
declare function AiResponseStatus({ activity, label, className, ...props }: AiResponseStatusProps): react_jsx_runtime.JSX.Element;

type AiComposerStatus = 'default' | 'submitting' | 'generating' | 'error' | 'disabled';
interface AiComposerProps extends Omit<React.ComponentProps<'textarea'>, 'disabled' | 'onSubmit'> {
    status?: AiComposerStatus;
    /** Acción izquierda (IconButton tertiary sm). */
    leadingAction?: React.ReactNode;
    /** Acción derecha (IconButton primary sm). */
    trailingAction?: React.ReactNode;
    onLeadingActionClick?: React.MouseEventHandler<HTMLButtonElement>;
    onTrailingActionClick?: React.MouseEventHandler<HTMLButtonElement>;
    onSubmit?: (value: string) => void;
}
/**
 * Composer de mensaje de IA. Status: default, submitting, generating, error, disabled.
 * Content: empty (placeholder) o value. Acciones sm: tertiary izquierda, primary derecha.
 */
declare const AiComposer: React.ForwardRefExoticComponent<Omit<AiComposerProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;

export { AccordionItem, type AccordionItemProps, type AccordionItemTreatment, AiComposer, type AiComposerProps, type AiComposerStatus, AiResponseStatus, type AiResponseStatusActivity, type AiResponseStatusProps, Alert, type AlertIntent, type AlertProps, Avatar, type AvatarContent, type AvatarProps, type AvatarSize, Badge, type BadgeProps, Banner, type BannerIntent, type BannerProps, Breadcrumb, BreadcrumbItem, type BreadcrumbItemProps, type BreadcrumbProps, Button, ButtonGroup, type ButtonGroupProps, Calendar, CalendarDay, type CalendarDayProps, type CalendarProps, ChatInput, type ChatInputProps, ChatMessage, type ChatMessageProps, type ChatMessageRole, Checkbox, type CheckboxProps, ChipGroup, type ChipGroupProps, Combobox, type ComboboxAppearance, type ComboboxOption, type ComboboxProps, type ComboboxTone, CounterBadge, type CounterBadgeProps, DEFAULT_PHONE_COUNTRIES, DataTableToolbar, type DataTableToolbarProps, DateField, type DateFieldAppearance, type DateFieldProps, type DateFieldTone, DatePicker, type DatePickerAppearance, type DatePickerProps, type DatePickerTone, Dialog, type DialogProps, type DialogSize, Divider, type DividerProps, Drawer, type DrawerProps, type DrawerSize, EmptyState, type EmptyStateProps, type EmptyStateType, FileUpload, FileUploadDropZone, type FileUploadDropZoneProps, type FileUploadDropZoneTone, type FileUploadEntry, FileUploadItem, type FileUploadItemProps, type FileUploadItemStatus, type FileUploadItemTone, type FileUploadProps, type FileUploadTone, type FileUploadType, FilterChip, type FilterChipProps, FloatingActionButton, type FloatingActionButtonExtendedProps, type FloatingActionButtonProps, type FloatingActionButtonStandardProps, FormField, type FormFieldControl, type FormFieldOption, type FormFieldProps, type FormFieldTone, IconButton, type IconButtonProps, InputChip, type InputChipProps, Link, type LinkProps, ListItem, type ListItemProps, MenuItem, type MenuItemProps, NavigationBar, type NavigationBarProps, NavigationItem, type NavigationItemContext, type NavigationItemProps, OTP_LENGTH, OtpInput, type OtpInputProps, Pagination, PaginationItem, type PaginationItemProps, type PaginationProps, type PhoneCountry, PhoneInput, type PhoneInputAppearance, type PhoneInputProps, type PhoneInputTone, ProgressBar, type ProgressBarProps, type ProgressBarValueFormat, ProgressIndicator, type ProgressIndicatorProps, ProgressStep, type ProgressStepProps, type ProgressStepState, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Search, type SearchAppearance, type SearchProps, type SearchTone, Segment, type SegmentProps, Select, type SelectAppearance, SelectContent, type SelectContentProps, SelectGroup, type SelectGroupProps, SelectItem, type SelectItemProps, SelectLabel, type SelectLabelProps, type SelectProps, SelectSeparator, type SelectSeparatorProps, type SelectTone, SelectTrigger, type SelectTriggerProps, SelectValue, type SelectValueProps, SideNavigation, type SideNavigationProps, SocialButton, type SocialButtonProps, Stat, type StatProps, Status, type StatusIntent, type StatusProps, Switch, type SwitchProps, TabItem, type TabItemProps, Table, TableCell, type TableCellProps, TableHeaderCell, type TableHeaderCellProps, type TableProps, TableRow, type TableRowProps, Tag, type TagProps, TimeField, type TimeFieldAppearance, type TimeFieldProps, type TimeFieldTone, Toast, type ToastIntent, type ToastProps, Tooltip, type TooltipProps, type TooltipSide };
