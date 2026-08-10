"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from '../../lib/utils'
import styles from './button.module.css'



const buttonVariants = cva(

  "group/button inline-flex shrink-0 items-center justify-center gap-2 border border-transparent whitespace-nowrap transition-all outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none  aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "",
        ghost: "",
        destructive: "",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {


  asChild?: boolean

  tone?: "standard" | "inverse"
 
  leftIcon?: React.ReactNode

  rightIcon?: React.ReactNode

  loading?: boolean
}

function LoadingSpinner({ maskId }: { maskId: string }) {
  return (
    <svg
      data-slot="loading-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <mask id={maskId} fill="white">
        <path d="M20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8079C6.10929 19.422 4.32746 18.4696 2.92893 17.0711C1.53041 15.6725 0.577999 13.8907 0.192147 11.9509C-0.193705 10.0111 0.00432836 8.00043 0.761205 6.17317C1.51808 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.58649 8.02219 -2.35852e-08 10 0V2.2C8.45731 2.2 6.94926 2.65746 5.66655 3.51454C4.38385 4.37161 3.3841 5.58981 2.79374 7.01507C2.20338 8.44033 2.04891 10.0087 2.34987 11.5217C2.65084 13.0348 3.39372 14.4246 4.48457 15.5154C5.57542 16.6063 6.96524 17.3492 8.4783 17.6501C9.99135 17.9511 11.5597 17.7966 12.9849 17.2063C14.4102 16.6159 15.6284 15.6162 16.4855 14.3334C17.3425 13.0507 17.8 11.5427 17.8 10H20Z" />
      </mask>
      <path
        d="M20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8079C6.10929 19.422 4.32746 18.4696 2.92893 17.0711C1.53041 15.6725 0.577999 13.8907 0.192147 11.9509C-0.193705 10.0111 0.00432836 8.00043 0.761205 6.17317C1.51808 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.58649 8.02219 -2.35852e-08 10 0V2.2C8.45731 2.2 6.94926 2.65746 5.66655 3.51454C4.38385 4.37161 3.3841 5.58981 2.79374 7.01507C2.20338 8.44033 2.04891 10.0087 2.34987 11.5217C2.65084 13.0348 3.39372 14.4246 4.48457 15.5154C5.57542 16.6063 6.96524 17.3492 8.4783 17.6501C9.99135 17.9511 11.5597 17.7966 12.9849 17.2063C14.4102 16.6159 15.6284 15.6162 16.4855 14.3334C17.3425 13.0507 17.8 11.5427 17.8 10H20Z"
        stroke="currentColor"
        strokeWidth="4"
        mask={`url(#${maskId})`}
      />
    </svg>
  )
}

function Button({
  className,
  variant = "default",
  size = "default",
  tone = "standard",
  asChild = false,
  leftIcon,
  rightIcon,
  loading = false,
  children,
  ...props
}: ButtonProps) {

  const Comp = asChild ? Slot : "button"

  const maskId = React.useId()

  const effectiveLeftIcon = loading ? <LoadingSpinner maskId={maskId} /> : leftIcon

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

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-tone={tone}
      data-icon={iconState}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      className={cn(styles.root, buttonVariants({ variant, size, className }))}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {effectiveLeftIcon && (
            <span className="flex shrink-0 items-center justify-center">{effectiveLeftIcon}</span>
          )}
          {children && <span>{children}</span>}
          {effectiveRightIcon && (
            <span className="flex shrink-0 items-center justify-center">{effectiveRightIcon}</span>
          )}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }