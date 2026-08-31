import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Button } from '../button'
import { Dialog } from './dialog'

const body = 'Al confirmar, se enviará la solicitud a coordinación.'

describe('Dialog', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <Dialog title="Confirmar solicitud" defaultOpen>
          {body}
        </Dialog>,
      )
    })

    it('tiene el data-slot correcto', () => {
      render(
        <Dialog title="Confirmar solicitud" defaultOpen>
          {body}
        </Dialog>,
      )
      expect(document.querySelector('[data-slot="dialog"]')).toBeInTheDocument()
    })

    it('usa md por defecto', () => {
      render(
        <Dialog title="Confirmar solicitud" defaultOpen>
          {body}
        </Dialog>,
      )
      expect(document.querySelector('[data-slot="dialog"]')).toHaveAttribute(
        'data-size',
        'md',
      )
    })

    it('aplica size sm', () => {
      render(
        <Dialog size="sm" title="Confirmar solicitud" defaultOpen>
          {body}
        </Dialog>,
      )
      expect(document.querySelector('[data-slot="dialog"]')).toHaveAttribute(
        'data-size',
        'sm',
      )
    })

    it('renderiza título y contenido', () => {
      render(
        <Dialog title="Confirmar solicitud" defaultOpen>
          {body}
        </Dialog>,
      )
      expect(screen.getByText('Confirmar solicitud')).toBeInTheDocument()
      expect(screen.getByText(body)).toBeInTheDocument()
    })

    it('renderiza IconButton tertiary sm para cerrar', () => {
      render(
        <Dialog title="Confirmar solicitud" defaultOpen>
          {body}
        </Dialog>,
      )
      const close = screen.getByRole('button', { name: 'Cerrar' })
      expect(close).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(close).toHaveAttribute('data-size', 'sm')
    })
  })

  describe('Comportamiento', () => {
    it('cierra al pulsar el icon button', async () => {
      const onOpenChange = vi.fn()
      render(
        <Dialog title="Confirmar solicitud" defaultOpen onOpenChange={onOpenChange}>
          {body}
        </Dialog>,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Cerrar' }))
      expect(onOpenChange).toHaveBeenCalledWith(false)
    })

    it('abre desde el trigger', async () => {
      render(
        <Dialog
          title="Confirmar solicitud"
          trigger={<Button label="Abrir dialog" />}
        >
          {body}
        </Dialog>,
      )
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: 'Abrir dialog' }))
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — abierto', async () => {
      const { container } = render(
        <Dialog
          title="Confirmar solicitud"
          defaultOpen
          secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
          primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
        >
          {body}
        </Dialog>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
