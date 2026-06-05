import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { Checkbox as Checkbox$1, RadioGroup as RadioGroup$1, Switch as Switch$1, Progress as Progress$1 } from 'radix-ui';

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

type CardCourseProps = {
    type: 'evaluative' | 'transactional';
    title: string;
    category?: string;
    price: number;
    rating: number;
    image: string;
    institution?: string;
    metadata?: Array<{
        icon?: React.ReactNode;
        label: string;
    }>;
    badge?: string;
    iconBadge?: React.ReactNode;
    description?: string;
    isFavorite?: boolean;
    isAuthenticated?: boolean;
    cta?: string;
    onAddToCart?: () => void;
    onFavoriteToggle?: () => void;
    onAuthRequired?: () => void;
};
declare function CardCourse({ type, title, category, price, rating, image, institution, metadata, badge, iconBadge, description, isFavorite, isAuthenticated, cta, onAddToCart, onFavoriteToggle, onAuthRequired, }: CardCourseProps): react_jsx_runtime.JSX.Element;

type ModalInfoProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    icon?: React.ReactNode;
    title: string;
    subheader?: string;
    image?: string;
    imageAlt?: string;
    body: string | string[];
    note?: string;
    footer?: {
        icon?: React.ReactNode;
        title: string;
        description: string;
    };
    cancelLabel?: string;
    submitLabel?: string;
    onCancel?: () => void;
    onSubmit?: () => void;
};
declare function ModalInfo({ open, onOpenChange, icon, title, subheader, image, imageAlt, body, note, footer, cancelLabel, submitLabel, onCancel, onSubmit, }: ModalInfoProps): react_jsx_runtime.JSX.Element;

type ModalBaseProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    icon?: React.ReactNode;
    title: string;
    subheader?: string;
    children: React.ReactNode;
    cancelLabel?: string;
    submitLabel?: string;
    showFooter?: boolean;
    onCancel?: () => void;
    onSubmit?: () => void;
    maxWidth?: string;
};
declare function ModalBase({ open, onOpenChange, icon, title, subheader, children, cancelLabel, submitLabel, onCancel, onSubmit, maxWidth, showFooter, }: ModalBaseProps): react_jsx_runtime.JSX.Element;

type ModalActionableProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    icon?: React.ReactNode;
    title: string;
    subheader?: string;
    fields: Array<{
        type: 'input';
        id: string;
        label: string;
        placeholder?: string;
        required?: boolean;
        hint?: React.ReactNode;
    } | {
        type: 'rating';
        id: string;
        label: string;
        required?: boolean;
        maxStars?: number;
    } | {
        type: 'textarea';
        id: string;
        label: string;
        placeholder?: string;
        required?: boolean;
        maxLength?: number;
    }>;
    note?: string;
    cancelLabel?: string;
    submitLabel?: string;
    onCancel?: () => void;
    onSubmit?: (values: Record<string, string | number>) => void;
};
declare function ModalActionable({ open, onOpenChange, icon, title, subheader, fields, note, cancelLabel, submitLabel, onCancel, onSubmit, }: ModalActionableProps): react_jsx_runtime.JSX.Element;

type AccordionFilterOption = {
    id: string;
    label: string;
};
type AccordionFilterItem = {
    id: string;
    label: string;
    options: AccordionFilterOption[];
};
type AccordionFilterProps = {
    items: AccordionFilterItem[];
    selected?: Record<string, string[]>;
    onSelectionChange?: (itemId: string, optionId: string, checked: boolean) => void;
};
declare function AccordionFilter({ items, selected, onSelectionChange, }: AccordionFilterProps): react_jsx_runtime.JSX.Element;

type AccordionModuleItem = {
    id: string;
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    content: {
        title?: string;
        description: string;
        link?: {
            label: string;
            href: string;
        };
    };
};
type AccordionModuleProps = {
    items: AccordionModuleItem[];
    type?: 'single' | 'multiple';
};
declare function AccordionModule({ items, type, }: AccordionModuleProps): react_jsx_runtime.JSX.Element;

type TextInputProps = {
    id?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    label?: string;
    required?: boolean;
};
declare function TextInput({ id, placeholder, value, onChange, icon, disabled, error, errorMessage, label, required, }: TextInputProps): react_jsx_runtime.JSX.Element;

type TextAreaProps = {
    id?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    label?: string;
    required?: boolean;
    maxLength?: number;
    rows?: number;
    autoFocus?: boolean;
};
declare function TextArea({ id, placeholder, value, onChange, disabled, error, errorMessage, label, required, maxLength, rows, autoFocus, }: TextAreaProps): react_jsx_runtime.JSX.Element;

declare function Checkbox({ className, ...props }: React.ComponentProps<typeof Checkbox$1.Root>): react_jsx_runtime.JSX.Element;

declare function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroup$1.Root>): react_jsx_runtime.JSX.Element;
declare function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroup$1.Item>): react_jsx_runtime.JSX.Element;

declare function Switch({ className, size, ...props }: React.ComponentProps<typeof Switch$1.Root> & {
    size?: "sm" | "default";
}): react_jsx_runtime.JSX.Element;

declare function Progress({ className, value, ...props }: React.ComponentProps<typeof Progress$1.Root>): react_jsx_runtime.JSX.Element;

type MediaCardProps = {
    type: 'testimonial' | 'testimonial-l' | 'testimonial-s';
    src?: string;
    poster?: string;
    imageAlt?: string;
    name?: string;
    description?: string;
    badge?: {
        label: string;
        icon?: React.ReactNode;
    };
    isEmpty?: boolean;
    emptyMessage?: string;
    onClick?: () => void;
};
declare function MediaCard({ type, src, imageAlt, poster, name, description, badge, isEmpty, emptyMessage, onClick, }: MediaCardProps): react_jsx_runtime.JSX.Element | undefined;

type CategoryCardProps = {
    title: string;
    description?: string;
    src: string;
    poster?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
    className?: string;
};
declare function CategoryCard({ title, description, src, poster, ctaLabel, onCtaClick, className, }: CategoryCardProps): react_jsx_runtime.JSX.Element;

type LinkProps = {
    variant?: 'text' | 'button';
    href?: string;
    children: React.ReactNode;
    disabled?: boolean;
    external?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    className?: string;
};
declare function Link({ variant, href, children, disabled, external, icon, iconPosition, onClick, className, }: LinkProps): react_jsx_runtime.JSX.Element | undefined;

type ChatButtonProps = {
    label?: string;
    badge?: number;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
};
declare function ChatButton({ label, badge, onClick, className, icon, }: ChatButtonProps): react_jsx_runtime.JSX.Element;

type IconButtonProps = {
    icon: React.ReactNode;
    size?: 's' | 'm';
    disabled?: boolean;
    onClick?: () => void;
    'aria-label': string;
    className?: string;
};
declare function IconButton({ icon, size, disabled, onClick, 'aria-label': ariaLabel, className, }: IconButtonProps): react_jsx_runtime.JSX.Element;

type TopbarUser = {
    name?: string;
    avatarUrl?: string;
    role?: string;
};
type TopbarAlert = {
    message: string;
    onClose?: () => void;
};
type TopbarNavItem = {
    label: string;
    href?: string;
    onClick?: () => void;
    children?: TopbarNavItem[];
};
type TopbarProps = {
    variant?: 'default' | 'search' | 'logged-in';
    logo?: React.ReactNode;
    appName?: string;
    appImage?: string;
    navItems?: TopbarNavItem[];
    nav?: React.ReactNode;
    actions?: React.ReactNode;
    onLogin?: () => void;
    onRegister?: () => void;
    loginLabel?: string;
    registerLabel?: string;
    user?: TopbarUser;
    onUserMenuClick?: () => void;
    showCartButton?: boolean;
    onCartClick?: () => void;
    cartCount?: number;
    showNotificationsButton?: boolean;
    onNotificationsClick?: () => void;
    notificationsCount?: number;
    searchPlaceholder?: string;
    onSearch?: (value: string) => void;
    onSearchClose?: () => void;
    announcement?: TopbarAlert;
    allowSidebarForMobile?: boolean;
    onMobileMenuClick?: () => void;
    lang?: string;
    className?: string;
};
declare function Topbar({ variant, logo, appName, appImage, navItems, nav, actions, onLogin, onRegister, loginLabel, registerLabel, user, onUserMenuClick, showCartButton, onCartClick, cartCount, showNotificationsButton, onNotificationsClick, notificationsCount, searchPlaceholder, onSearch, onSearchClose, announcement, allowSidebarForMobile, onMobileMenuClick, lang, className, }: TopbarProps): react_jsx_runtime.JSX.Element;

type UserImageProps = {
    image?: string;
    fallback?: string;
};
declare function UserImage({ image, fallback }: UserImageProps): react_jsx_runtime.JSX.Element;

export { AccordionFilter, AccordionModule, Button, CardCourse, CategoryCard, ChatButton, Checkbox, IconButton, Link, type LinkProps, MediaCard, ModalActionable, ModalBase, ModalInfo, Progress, RadioGroup, RadioGroupItem, Switch, TextArea, TextInput, Topbar, UserImage, buttonVariants };
