import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Alert } from './alert'

describe('Alert', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Alert title="Información" message="Revisa los datos de tu expediente." />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Alert title="Información" message="Revisa los datos de tu expediente." />)
      expect(screen.getByText('Información').closest('[data-slot="alert"]')).toHaveAttribute(
        'data-slot',
        'alert',
      )
    })

    it('renderiza título y mensaje', () => {
      render(<Alert title="Información" message="Revisa los datos de tu expediente." />)
      expect(screen.getByText('Información')).toBeInTheDocument()
      expect(screen.getByText('Revisa los datos de tu expediente.')).toBeInTheDocument()
    })

    it('no renderiza ícono por defecto', () => {
      render(<Alert title="Información" message="Revisa los datos de tu expediente." />)
      expect(document.querySelector('svg')).not.toBeInTheDocument()
    })

    it('renderiza el ícono cuando se pasa', () => {
      render(
        <Alert
          title="Información"
          message="Revisa los datos de tu expediente."
          icon={<svg data-testid="icono" />}
        />,
      )
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('el ícono es decorativo (aria-hidden)', () => {
      render(
        <Alert
          title="Información"
          message="Revisa los datos de tu expediente."
          icon={<svg data-testid="icono" />}
        />,
      )
      expect(screen.getByTestId('icono').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })

    it('no renderiza dismiss por defecto', () => {
      render(<Alert title="Información" message="Revisa los datos de tu expediente." />)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('renderiza IconButton tertiary sm cuando hay onDismiss', () => {
      render(
        <Alert
          title="Información"
          message="Revisa los datos de tu expediente."
          onDismiss={() => {}}
        />,
      )
      const dismiss = screen.getByRole('button', { name: 'Cerrar' })
      expect(dismiss).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(dismiss).toHaveAttribute('data-size', 'sm')
    })

    it('renderiza el link cuando se pasa', () => {
      render(
        <Alert
          title="Información"
          message="Revisa los datos de tu expediente."
          link={<a href="/ayuda">Más información</a>}
        />,
      )
      expect(screen.getByRole('link', { name: 'Más información' })).toBeInTheDocument()
    })
  })

  describe('Prop: intent', () => {
    it('aplica info por defecto', () => {
      render(<Alert title="Información" message="Revisa los datos de tu expediente." />)
      expect(screen.getByText('Información').closest('[data-slot="alert"]')).toHaveAttribute(
        'data-intent',
        'info',
      )
    })

    it.each(['info', 'success', 'warning', 'danger'] as const)('aplica intent %s', (intent) => {
      render(<Alert intent={intent} title="Título" message="Mensaje" />)
      expect(screen.getByText('Título').closest('[data-slot="alert"]')).toHaveAttribute(
        'data-intent',
        intent,
      )
    })

    it('usa role status en info y success', () => {
      render(<Alert intent="info" title="Información" message="Mensaje" />)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('usa role alert en warning y danger', () => {
      render(<Alert intent="danger" title="Error" message="Mensaje" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it.each(['info', 'success', 'warning', 'danger'] as const)(
      'sin violaciones de accesibilidad — intent %s',
      async (intent) => {
        const { container } = render(
          <Alert
            intent={intent}
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
