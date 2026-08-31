import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { ChatMessage } from './chat-message'

const body = 'Puedo orientarte sobre cupo, fechas y modalidad.'

describe('ChatMessage', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<ChatMessage avatarInitials="AB">{body}</ChatMessage>)
    })

    it('tiene el data-slot correcto', () => {
      render(<ChatMessage avatarInitials="AB">{body}</ChatMessage>)
      expect(document.querySelector('[data-slot="chat-message"]')).toBeInTheDocument()
    })

    it('renderiza Avatar y message body', () => {
      render(<ChatMessage avatarInitials="AB">{body}</ChatMessage>)
      expect(document.querySelector('[data-slot="chat-message-avatar"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="avatar"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="chat-message-body"]')).toBeInTheDocument()
      expect(screen.getByText(body)).toBeInTheDocument()
    })

    it('oculta el Avatar de AT cuando no hay alt', () => {
      render(<ChatMessage avatarInitials="AB">{body}</ChatMessage>)
      expect(document.querySelector('[data-slot="chat-message-avatar"]')).toHaveAttribute(
        'aria-hidden',
        'true',
      )
    })

    it('usa role assistant por defecto y coloca el avatar a la izquierda', () => {
      render(<ChatMessage avatarInitials="EC">{body}</ChatMessage>)
      const root = document.querySelector('[data-slot="chat-message"]')
      expect(root).toHaveAttribute('data-role', 'assistant')
    })

    it('coloca el avatar a la derecha cuando role es user', () => {
      render(
        <ChatMessage role="user" avatarInitials="AB">
          {body}
        </ChatMessage>,
      )
      expect(document.querySelector('[data-slot="chat-message"]')).toHaveAttribute(
        'data-role',
        'user',
      )
    })

    it('expone el Avatar cuando hay alt', () => {
      render(
        <ChatMessage avatarInitials="AB" avatarAlt="Asistente de Educación Continua">
          {body}
        </ChatMessage>,
      )
      expect(document.querySelector('[data-slot="chat-message-avatar"]')).not.toHaveAttribute(
        'aria-hidden',
      )
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(
        <ChatMessage avatarInitials="AB" avatarAlt="Asistente">
          {body}
        </ChatMessage>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
