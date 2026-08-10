"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"
import { cn } from '../../lib/utils'
import styles from './avatar.module.css'

export type AvatarSize = 'sm' | 'md' | 'lg'
export type AvatarContent = 'image' | 'initials' | 'fallback'

export interface AvatarProps
  extends Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, 'children'> {
  size?: AvatarSize
  src?: string
  alt?: string
  /** Hasta 2 caracteres. Si se pasa un nombre completo, se derivan las iniciales. */
  initials?: string
}

function resolveInitials(value: string): string {
  const parts = value.trim().split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0]![0] ?? ''}${parts[1]![0] ?? ''}`.toUpperCase()
  }
  return value.trim().slice(0, 2).toUpperCase()
}

function UserFallbackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle className={styles.fallbackCircle} cx="16" cy="16" r="15.5" />
      <circle className={styles.fallbackPerson} cx="16" cy="10.88" r="4.48" />
      <ellipse
        className={styles.fallbackPerson}
        cx="16"
        cy="25.28"
        rx="9.28"
        ry="6.72"
      />
    </svg>
  )
}

function resolveContent(
  src: string | undefined,
  imageStatus: 'idle' | 'loading' | 'loaded' | 'error',
  hasInitials: boolean
): AvatarContent {
  if (src && imageStatus === 'loaded') return 'image'
  if (hasInitials) return 'initials'
  return 'fallback'
}

export function Avatar({
  size = 'sm',
  src,
  alt = '',
  initials,
  className,
  ...props
}: AvatarProps) {
  const resolvedInitials = initials ? resolveInitials(initials) : undefined
  const [imageStatus, setImageStatus] = React.useState<
    'idle' | 'loading' | 'loaded' | 'error'
  >(src ? 'loading' : 'idle')

  React.useEffect(() => {
    setImageStatus(src ? 'loading' : 'idle')
  }, [src])

  const content = resolveContent(src, imageStatus, Boolean(resolvedInitials))

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      data-content={content}
      className={cn(styles.root, className)}
      {...props}
    >
      {src ? (
        <AvatarPrimitive.Image
          data-slot="avatar-image"
          src={src}
          alt={alt}
          className={styles.image}
          onLoadingStatusChange={setImageStatus}
        />
      ) : null}

      <AvatarPrimitive.Fallback
        data-slot="avatar-fallback"
        delayMs={src ? 600 : undefined}
      >
        {resolvedInitials ? (
          <span className={styles.initials}>{resolvedInitials}</span>
        ) : (
          <UserFallbackIcon className={styles.fallbackIcon} />
        )}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
