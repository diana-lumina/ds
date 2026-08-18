import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { EmptyState } from './empty-state'

describe('EmptyState', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <EmptyState title="Sin resultados" message="Intenta con otra búsqueda" />,
      )
    })

    it('tiene el data-slot correcto', () => {
      render(
        <EmptyState title="Sin resultados" message="Intenta con otra búsqueda" />,
      )
      expect(screen.getByText('Sin resultados').closest('[data-slot="empty-state"]')).toHaveAttribute(
        'data-slot',
        'empty-state',
      )
    })

    it('renderiza título y mensaje', () => {
      render(
        <EmptyState title="Sin resultados" message="Intenta con otra búsqueda" />,
      )
      expect(screen.getByText('Sin resultados')).toBeInTheDocument()
      expect(screen.getByText('Intenta con otra búsqueda')).toBeInTheDocument()
    })

    it('no renderiza ícono por defecto', () => {
      render(
        <EmptyState title="Sin resultados" message="Intenta con otra búsqueda" />,
      )
      expect(document.querySelector('svg')).not.toBeInTheDocument()
    })

    it('renderiza el ícono cuando se pasa', () => {
      render(
        <EmptyState
          title="Sin resultados"
          message="Intenta con otra búsqueda"
          icon={<svg data-testid="icono" />}
        />,
      )
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('el ícono es decorativo (aria-hidden)', () => {
      render(
        <EmptyState
          title="Sin resultados"
          message="Intenta con otra búsqueda"
          icon={<svg data-testid="icono" />}
        />,
      )
      expect(screen.getByTestId('icono').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })

    it('no renderiza acción por defecto', () => {
      render(
        <EmptyState title="Sin resultados" message="Intenta con otra búsqueda" />,
      )
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('renderiza la acción primaria cuando se pasa', () => {
      render(
        <EmptyState
          title="Sin resultados"
          message="Intenta con otra búsqueda"
          action={<button type="button">Nueva búsqueda</button>}
        />,
      )
      expect(screen.getByRole('button', { name: 'Nueva búsqueda' })).toBeInTheDocument()
    })
  })

  describe('Prop: type', () => {
    it('aplica empty por defecto', () => {
      render(
        <EmptyState title="Sin resultados" message="Intenta con otra búsqueda" />,
      )
      expect(screen.getByText('Sin resultados').closest('[data-slot="empty-state"]')).toHaveAttribute(
        'data-type',
        'empty',
      )
    })

    it.each(['empty', 'error', 'success'] as const)('aplica type %s', (type) => {
      render(
        <EmptyState type={type} title="Título" message="Mensaje" />,
      )
      expect(screen.getByText('Título').closest('[data-slot="empty-state"]')).toHaveAttribute(
        'data-type',
        type,
      )
    })

    it('usa role alert en error', () => {
      render(<EmptyState type="error" title="Error" message="No se pudo cargar" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('usa role status en success', () => {
      render(<EmptyState type="success" title="Listo" message="La acción se completó" />)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it.each(['empty', 'error', 'success'] as const)(
      'sin violaciones de accesibilidad — type %s',
      async (type) => {
        const { container } = render(
          <EmptyState
            type={type}
            title="Título"
            message="Mensaje"
            icon={<svg aria-hidden="true" />}
          />,
        )
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      },
    )
  })
})
