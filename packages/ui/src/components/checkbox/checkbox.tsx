"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { cn } from '../../lib/utils'
import styles from './checkbox.module.css'

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 4.5L4.5 8L11 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MixedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      viewBox="0 0 10 2"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 1H9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(styles.root, className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={styles.indicator}
      >
        <span className={styles.checkIcon}>
          <CheckIcon />
        </span>
        <span className={styles.mixedIcon}>
          <MixedIcon />
        </span>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
