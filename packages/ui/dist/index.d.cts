import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { Avatar as Avatar$1, RadioGroup as RadioGroup$1, Checkbox as Checkbox$1 } from 'radix-ui';

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    tone?: "standard" | "inverse";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loading?: boolean;
}
declare function Button({ className, variant, size, tone, asChild, leftIcon, rightIcon, loading, children, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface IconButtonProps extends React.ComponentProps<"button"> {
    icon?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'inverse';
    asChild?: boolean;
    'aria-label': string;
}
declare function IconButton({ icon, size, variant, asChild, className, children, ...props }: IconButtonProps): react_jsx_runtime.JSX.Element;

interface LinkProps extends React.ComponentProps<"a"> {
    tone?: 'standard' | 'inverse';
    external?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}
declare function Link({ tone, href, children, external, icon, iconPosition, className, ...props }: LinkProps): react_jsx_runtime.JSX.Element;

interface FilterChipProps extends Omit<React.ComponentProps<"button">, 'onClick'> {
    size?: 'sm' | 'md';
    selected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    icon?: React.ReactNode;
}
declare function FilterChip({ size, selected, onSelectedChange, icon, children, className, disabled, ...props }: FilterChipProps): react_jsx_runtime.JSX.Element;

interface InputChipProps {
    size?: 'sm' | 'md';
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClose: () => void;
    closeDisabled?: boolean;
    closeLabel?: string;
    className?: string;
}
declare function InputChip({ size, icon, children, onClose, closeDisabled, closeLabel, className, }: InputChipProps): react_jsx_runtime.JSX.Element;

type StatusIntent = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
interface StatusProps extends React.ComponentProps<"span"> {
    size?: 'sm' | 'md';
    intent?: StatusIntent;
    icon?: React.ReactNode;
}
declare function Status({ size, intent, icon, children, className, ...props }: StatusProps): react_jsx_runtime.JSX.Element;

interface TagProps extends React.ComponentProps<"span"> {
    size?: 'sm' | 'md';
    tone?: 'neutral' | 'brand';
    icon?: React.ReactNode;
}
declare function Tag({ size, tone, icon, children, className, ...props }: TagProps): react_jsx_runtime.JSX.Element;

interface BadgeProps extends React.ComponentProps<"span"> {
    size?: 'sm' | 'md';
    tone?: 'neutral';
}
declare function Badge({ size, tone, children, className, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

interface CounterBadgeProps extends Omit<React.ComponentProps<"span">, 'children'> {
    size?: 'sm' | 'md';
    emphasis?: 'neutral' | 'attention' | 'inverse';
    count: number;
    max?: number;
}
declare function CounterBadge({ size, emphasis, count, max, className, ...props }: CounterBadgeProps): react_jsx_runtime.JSX.Element;

interface DividerProps extends React.ComponentProps<"div"> {
    orientation?: 'horizontal' | 'vertical';
    thickness?: 1 | 2;
}
declare function Divider({ orientation, thickness, className, ...props }: DividerProps): react_jsx_runtime.JSX.Element;

interface SegmentProps extends Omit<React.ComponentProps<"button">, 'onClick'> {
    size?: 'sm' | 'md' | 'lg';
    selected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
}
declare function Segment({ size, selected, onSelectedChange, children, className, disabled, ...props }: SegmentProps): react_jsx_runtime.JSX.Element;

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
    /** Obligatorio en standard (solo ícono). */
    'aria-label': string;
    children?: never;
};
type FloatingActionButtonExtendedProps = FloatingActionButtonBase & {
    type: 'extended';
    /** Etiqueta visible del botón extendido. */
    children: React.ReactNode;
    'aria-label'?: string;
};
type FloatingActionButtonProps = FloatingActionButtonStandardProps | FloatingActionButtonExtendedProps;
declare function FloatingActionButton(props: FloatingActionButtonProps): react_jsx_runtime.JSX.Element;

interface RadioGroupProps extends React.ComponentProps<typeof RadioGroup$1.Root> {
}
declare function RadioGroup({ className, ...props }: RadioGroupProps): react_jsx_runtime.JSX.Element;
interface RadioProps extends React.ComponentProps<typeof RadioGroup$1.Item> {
}
declare function Radio({ className, ...props }: RadioProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps extends React.ComponentProps<typeof Checkbox$1.Root> {
}
declare function Checkbox({ className, ...props }: CheckboxProps): react_jsx_runtime.JSX.Element;

export { Avatar, type AvatarContent, type AvatarProps, type AvatarSize, Badge, type BadgeProps, Button, Checkbox, type CheckboxProps, CounterBadge, type CounterBadgeProps, Divider, type DividerProps, FilterChip, type FilterChipProps, FloatingActionButton, type FloatingActionButtonExtendedProps, type FloatingActionButtonProps, type FloatingActionButtonStandardProps, IconButton, InputChip, type InputChipProps, Link, type LinkProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Segment, type SegmentProps, Status, type StatusIntent, type StatusProps, Tag, type TagProps };
