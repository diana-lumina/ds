"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../../lib/utils'
import { LoadingIcon } from '@workspace/ui/icons'
import styles from './button.module.css'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 border border-transparent whitespace-nowrap transition-all outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      hierarchy: {
        primary: "",
        secondary: "",
        tertiary: "",
        destructive: "",
      },
      size: {
        sm: "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        md: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      hierarchy: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  /** `inverse` aplica a primary y secondary. */
  tone?: "standard" | "inverse"
  /** Texto / label del botón. */
  label?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
}

function Button({
  className,
  hierarchy = "primary",
  size = "md",
  tone = "standard",
  label,
  leftIcon,
  rightIcon,
  loading = false,
  ...props
}: ButtonProps) {
  const effectiveLeftIcon = loading ? <LoadingIcon /> : leftIcon
  const effectiveRightIcon =
    rightIcon ?? (loading ? <span style={{ visibility: 'hidden' }}>{effectiveLeftIcon}</span> : undefined)

  const iconState = loading
    ? "both"
    : effectiveLeftIcon && rightIcon
      ? "both"
      : effectiveLeftIcon
        ? "inline-start"
        : rightIcon
          ? "inline-end"
          : undefined

  // inverse solo aplica a primary y secondary
  const effectiveTone =
    tone === "inverse" && (hierarchy === "primary" || hierarchy === "secondary")
      ? "inverse"
      : "standard"

  return (
    <button
      data-slot="button"
      data-hierarchy={hierarchy}
      data-size={size}
      data-tone={effectiveTone}
      data-icon={iconState}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      className={cn(styles.root, buttonVariants({ hierarchy, size, className }))}
      {...props}
    >
      {effectiveLeftIcon && (
        <span className="flex shrink-0 items-center justify-center">{effectiveLeftIcon}</span>
      )}
      {label != null && <span>{label}</span>}
      {effectiveRightIcon && (
        <span className="flex shrink-0 items-center justify-center">{effectiveRightIcon}</span>
      )}
    </button>
  )
}

export { Button, buttonVariants }
