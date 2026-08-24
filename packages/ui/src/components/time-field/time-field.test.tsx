import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { TimeField } from './time-field'

describe('TimeField', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<TimeField label="Hora de inicio" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<TimeField label="Hora de inicio" />)
      expect(document.querySelector('[data-slot="time-field"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="text-input"]')).toBeInTheDocument()
    })

    it('asocia el label con el input time', () => {
      render(<TimeField label="Hora de inicio" />)
      const input = screen.getByLabelText('Hora de inicio')
      expect(input).toHaveAttribute('type', 'time')
    })

    it('muestra el ícono de tiempo', () => {
      render(<TimeField label="Hora de inicio" />)
      expect(screen.getByRole('button', { name: 'Abrir selector de hora' })).toBeInTheDocument()
    })

    it('muestra supporting text cuando se pasa', () => {
      render(<TimeField label="Hora de inicio" supportingText="Formato 24 h" />)
      expect(screen.getByText('Formato 24 h')).toBeInTheDocument()
    })
  })

  describe('Prop: appearance', () => {
    it('usa outlined por defecto', () => {
      render(<TimeField label="Hora de inicio" />)
      expect(document.querySelector('[data-slot="time-field"]')).toHaveAttribute(
        'data-appearance',
        'outlined',
      )
    })

    it('aplica underline', () => {
      render(<TimeField label="Hora de inicio" appearance="underline" />)
      expect(document.querySelector('[data-slot="time-field"]')).toHaveAttribute(
        'data-appearance',
        'underline',
      )
    })
  })

  describe('Prop: tone', () => {
    it('usa standard por defecto', () => {
      render(<TimeField label="Hora de inicio" />)
      expect(document.querySelector('[data-slot="time-field"]')).toHaveAttribute(
        'data-tone',
        'standard',
      )
    })

    it('aplica inverse', () => {
      render(<TimeField label="Hora de inicio" tone="inverse" />)
      expect(document.querySelector('[data-slot="time-field"]')).toHaveAttribute(
        'data-tone',
        'inverse',
      )
    })
  })

  describe('Comportamiento', () => {
    it('llama a onChange al elegir una hora', () => {
      const handleChange = vi.fn()
      render(<TimeField label="Hora de inicio" onChange={handleChange} />)
      fireEvent.change(screen.getByLabelText('Hora de inicio'), {
        target: { value: '09:30' },
      })
      expect(handleChange).toHaveBeenCalled()
    })

    it('deshabilita el input y el ícono', () => {
      render(<TimeField label="Hora de inicio" disabled />)
      expect(screen.getByLabelText('Hora de inicio')).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Abrir selector de hora' })).toBeDisabled()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(
        <TimeField label="Hora de inicio" supportingText="Formato 24 h" />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — inverse', async () => {
      const { container } = render(<TimeField label="Hora de inicio" tone="inverse" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<TimeField label="Hora de inicio" disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
