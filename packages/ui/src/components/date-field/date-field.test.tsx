import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { DateField } from './date-field'

describe('DateField', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<DateField label="Fecha de inicio" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<DateField label="Fecha de inicio" />)
      expect(document.querySelector('[data-slot="date-field"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="text-input"]')).toBeInTheDocument()
    })

    it('asocia el label con el input date', () => {
      render(<DateField label="Fecha de inicio" />)
      const input = screen.getByLabelText('Fecha de inicio')
      expect(input).toHaveAttribute('type', 'date')
    })

    it('muestra el ícono de calendario', () => {
      render(<DateField label="Fecha de inicio" />)
      expect(screen.getByRole('button', { name: 'Abrir calendario' })).toBeInTheDocument()
    })

    it('muestra supporting text cuando se pasa', () => {
      render(
        <DateField label="Fecha de inicio" supportingText="Formato aaaa-mm-dd" />,
      )
      expect(screen.getByText('Formato aaaa-mm-dd')).toBeInTheDocument()
    })
  })

  describe('Prop: appearance', () => {
    it('usa outlined por defecto', () => {
      render(<DateField label="Fecha de inicio" />)
      expect(document.querySelector('[data-slot="date-field"]')).toHaveAttribute(
        'data-appearance',
        'outlined',
      )
    })

    it('aplica underline', () => {
      render(<DateField label="Fecha de inicio" appearance="underline" />)
      expect(document.querySelector('[data-slot="date-field"]')).toHaveAttribute(
        'data-appearance',
        'underline',
      )
    })
  })

  describe('Prop: tone', () => {
    it('usa standard por defecto', () => {
      render(<DateField label="Fecha de inicio" />)
      expect(document.querySelector('[data-slot="date-field"]')).toHaveAttribute(
        'data-tone',
        'standard',
      )
    })

    it('aplica inverse', () => {
      render(<DateField label="Fecha de inicio" tone="inverse" />)
      expect(document.querySelector('[data-slot="date-field"]')).toHaveAttribute(
        'data-tone',
        'inverse',
      )
    })
  })

  describe('Comportamiento', () => {
    it('llama a onChange al elegir una fecha', () => {
      const handleChange = vi.fn()
      render(<DateField label="Fecha de inicio" onChange={handleChange} />)
      fireEvent.change(screen.getByLabelText('Fecha de inicio'), {
        target: { value: '2026-08-24' },
      })
      expect(handleChange).toHaveBeenCalled()
    })

    it('llama a onCalendarClick en lugar del picker nativo', async () => {
      const handleCalendar = vi.fn()
      render(
        <DateField
          label="Fecha de inicio"
          nativePicker={false}
          onCalendarClick={handleCalendar}
        />,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Abrir calendario' }))
      expect(handleCalendar).toHaveBeenCalledTimes(1)
    })

    it('deshabilita el input y el ícono', () => {
      render(<DateField label="Fecha de inicio" disabled />)
      expect(screen.getByLabelText('Fecha de inicio')).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Abrir calendario' })).toBeDisabled()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(
        <DateField label="Fecha de inicio" supportingText="Formato aaaa-mm-dd" />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — inverse', async () => {
      const { container } = render(<DateField label="Fecha de inicio" tone="inverse" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<DateField label="Fecha de inicio" disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
