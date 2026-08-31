"use client"

import * as React from 'react'
import { cn } from '../../lib/utils'
import { Avatar } from '../avatar/avatar'
import styles from './chat-message.module.css'

export interface ChatMessageProps extends Omit<React.ComponentProps<'div'>, 'children' | 'role'> {
  /** Contenido del message body (Semantic/Body/Small). */
  children: React.ReactNode
  /** assistant: avatar a la izquierda. user: avatar a la derecha. */
  role?: ChatMessageRole
  avatarSrc?: string
  avatarInitials?: string
  /** alt de la imagen. Vacío si el nombre ya es visible en el hilo. */
  avatarAlt?: string
}

export type ChatMessageRole = 'assistant' | 'user'

/**
 * Chat Message: Avatar + message body. Assistant avatar izq.; user avatar der.
 */
export function ChatMessage({
  children,
  role = 'assistant',
  avatarSrc,
  avatarInitials,
  avatarAlt = '',
  className,
  ...props
}: ChatMessageProps) {
  return (
    <div
      data-slot="chat-message"
      data-role={role}
      className={cn(styles.root, className)}
      {...props}
    >
      <span
        data-slot="chat-message-avatar"
        className={styles.avatar}
        aria-hidden={avatarAlt ? undefined : true}
      >
        <Avatar size="sm" src={avatarSrc} initials={avatarInitials} alt={avatarAlt} />
      </span>
      <div data-slot="chat-message-body" className={styles.body}>
        {typeof children === 'string' || typeof children === 'number' ? (
          <p>{children}</p>
        ) : (
          children
        )}
      </div>
    </div>
  )
}
