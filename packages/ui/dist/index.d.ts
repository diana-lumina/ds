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
    error?: boolean;
    /** Sin cromo propio; el contenedor compuesto pinta el borde. */
    embedded?: boolean;
}
declare function SelectTrigger({ appearance, error, className, children, disabled, embedded, ...props }: SelectTriggerProps): react_jsx_runtime.JSX.Element;
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
type PhoneCountry = {
    value: string;
    dialCode: string;
    label: string;
};
declare const DEFAULT_PHONE_COUNTRIES: PhoneCountry[];
interface PhoneInputProps extends Omit<React.ComponentProps<'input'>, 'disabled' | 'type'> {
    appearance?: PhoneInputAppearance;
    error?: boolean;
    disabled?: boolean;
    countries?: PhoneCountry[];
    country?: string;
    defaultCountry?: string;
    onCountryChange?: (country: string) => void;
    countryLabel?: string;
}
declare function PhoneInput({ appearance, error, disabled, className, countries, country, defaultCountry, onCountryChange, countryLabel, id, placeholder, ...props }: PhoneInputProps): react_jsx_runtime.JSX.Element;

type TextInputAppearance = 'outlined' | 'underline';

type FormFieldControl = 'input' | 'textarea' | 'select' | 'phone';
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
 * Appearances: outlined, underline. Estados: default, error, disabled.
 */
declare function FormField({ label, supportingText, appearance, control, multiline, rows, options, value, defaultValue, onValueChange, country, defaultCountry, onCountryChange, countries, error, id, className, disabled, type, placeholder, ...props }: FormFieldProps): react_jsx_runtime.JSX.Element;

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
    /** Link opcional (instancia de Link). */
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

export { Alert, type AlertIntent, type AlertProps, Avatar, type AvatarContent, type AvatarProps, type AvatarSize, Badge, type BadgeProps, Banner, type BannerIntent, type BannerProps, Breadcrumb, BreadcrumbItem, type BreadcrumbItemProps, type BreadcrumbProps, Button, ButtonGroup, type ButtonGroupProps, Checkbox, type CheckboxProps, ChipGroup, type ChipGroupProps, CounterBadge, type CounterBadgeProps, DEFAULT_PHONE_COUNTRIES, Divider, type DividerProps, EmptyState, type EmptyStateProps, type EmptyStateType, FilterChip, type FilterChipProps, FloatingActionButton, type FloatingActionButtonExtendedProps, type FloatingActionButtonProps, type FloatingActionButtonStandardProps, FormField, type FormFieldControl, type FormFieldOption, type FormFieldProps, IconButton, type IconButtonProps, InputChip, type InputChipProps, Link, type LinkProps, ListItem, type ListItemProps, type PhoneCountry, PhoneInput, type PhoneInputAppearance, type PhoneInputProps, ProgressBar, type ProgressBarProps, type ProgressBarValueFormat, ProgressIndicator, type ProgressIndicatorProps, ProgressStep, type ProgressStepProps, type ProgressStepState, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Segment, type SegmentProps, Select, type SelectAppearance, SelectContent, type SelectContentProps, SelectGroup, type SelectGroupProps, SelectItem, type SelectItemProps, SelectLabel, type SelectLabelProps, type SelectProps, SelectSeparator, type SelectSeparatorProps, SelectTrigger, type SelectTriggerProps, SelectValue, type SelectValueProps, Status, type StatusIntent, type StatusProps, Switch, type SwitchProps, TabItem, type TabItemProps, Tag, type TagProps, Toast, type ToastIntent, type ToastProps };
