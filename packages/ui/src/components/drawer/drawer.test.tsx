import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Button } from '../button'
import { Drawer } from './drawer'

const body = 'Revisa los datos de la solicitud antes de enviarla.'

describe('Drawer', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <Drawer title="Detalle de la solicitud" defaultOpen>
          {body}
        </Drawer>,
      )
    })

    it('tiene el data-slot correcto', () => {
      render(
        <Drawer title="Detalle de la solicitud" defaultOpen>
          {body}
        </Drawer>,
      )
      expect(document.querySelector('[data-slot="drawer"]')).toBeInTheDocument()
    })

    it('usa sm por defecto', () => {
      render(
        <Drawer title="Detalle de la solicitud" defaultOpen>
          {body}
        </Drawer>,
      )
      expect(document.querySelector('[data-slot="drawer"]')).toHaveAttribute(
        'data-size',
        'sm',
      )
    })

    it('aplica size lg', () => {
      render(
        <Drawer size="lg" title="Detalle de la solicitud" defaultOpen>
          {body}
        </Drawer>,
      )
      expect(document.querySelector('[data-slot="drawer"]')).toHaveAttribute(
        'data-size',
        'lg',
      )
    })

    it('renderiza header, content y footer', () => {
      render(
        <Drawer
          title="Detalle de la solicitud"
          contentTitle="Resumen"
          defaultOpen
          secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
          primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
        >
          {body}
        </Drawer>,
      )
      expect(document.querySelector('[data-slot="drawer-header"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="drawer-content"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="drawer-footer"]')).toBeInTheDocument()
      expect(screen.getByText('Detalle de la solicitud')).toBeInTheDocument()
      expect(screen.getByText('Resumen')).toBeInTheDocument()
      expect(screen.getByText(body)).toBeInTheDocument()
    })

    it('cierra con IconButton tertiary sm en size sm', () => {
      render(
        <Drawer title="Detalle de la solicitud" defaultOpen>
          {body}
        </Drawer>,
      )
      const close = screen.getByRole('button', { name: 'Cerrar' })
      expect(close).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(close).toHaveAttribute('data-size', 'sm')
    })

    it('cierra con IconButton tertiary lg en size lg', () => {
      render(
        <Drawer size="lg" title="Detalle de la solicitud" defaultOpen>
          {body}
        </Drawer>,
      )
      expect(screen.getByRole('button', { name: 'Cerrar' })).toHaveAttribute(
        'data-size',
        'lg',
      )
    })
  })

  describe('Comportamiento', () => {
    it('cierra al pulsar el icon button', async () => {
      const onOpenChange = vi.fn()
      render(
        <Drawer title="Detalle de la solicitud" defaultOpen onOpenChange={onOpenChange}>
          {body}
        </Drawer>,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Cerrar' }))
      expect(onOpenChange).toHaveBeenCalledWith(false)
    })

    it('abre desde el trigger', async () => {
      render(
        <Drawer
          title="Detalle de la solicitud"
          trigger={<Button label="Abrir drawer" />}
        >
          {body}
        </Drawer>,
      )
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: 'Abrir drawer' }))
      expect(screen.getByRole('dialog', { name: 'Detalle de la solicitud' })).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('expone DialogTitle para el nombre accesible del panel', () => {
      const error = vi.spyOn(console, 'error').mockImplementation(() => {})
      render(
        <Drawer title="Detalle de la solicitud" defaultOpen>
          {body}
        </Drawer>,
      )
      expect(screen.getByRole('dialog', { name: 'Detalle de la solicitud' })).toBeInTheDocument()
      expect(
        error.mock.calls.some((call) =>
          String(call[0]).includes('requires a `DialogTitle`'),
        ),
      ).toBe(false)
      error.mockRestore()
    })

    it('sin violaciones de accesibilidad — abierto', async () => {
      const { container } = render(
        <Drawer
          title="Detalle de la solicitud"
          contentTitle="Resumen"
          defaultOpen
          secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
          primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
        >
          {body}
        </Drawer>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
