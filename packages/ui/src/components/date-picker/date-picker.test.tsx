import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { DatePicker } from './date-picker'

const august = new Date(2026, 7, 12)

describe('DatePicker', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<DatePicker label="Fecha de inicio" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<DatePicker label="Fecha de inicio" />)
      expect(document.querySelector('[data-slot="date-picker"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="date-field"]')).toBeInTheDocument()
    })

    it('no muestra el Calendar hasta abrir', () => {
      render(<DatePicker label="Fecha de inicio" defaultValue={august} />)
      expect(document.querySelector('[data-slot="calendar"]')).not.toBeInTheDocument()
    })
  })

  describe('Calendario', () => {
    it('abre el Calendar al pulsar el ícono', async () => {
      render(<DatePicker label="Fecha de inicio" defaultValue={august} />)
      await userEvent.click(screen.getByRole('button', { name: 'Abrir calendario' }))
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /agosto de 2026/i })).toBeInTheDocument()
    })

    it('elige un día, actualiza el campo y cierra', async () => {
      const onValueChange = vi.fn()
      render(
        <DatePicker
          label="Fecha de inicio"
          defaultValue={august}
          onValueChange={onValueChange}
        />,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Abrir calendario' }))
      await userEvent.click(screen.getByRole('button', { name: /24 de agosto de 2026/i }))

      expect(onValueChange).toHaveBeenCalledTimes(1)
      const selected = onValueChange.mock.calls[0][0] as Date
      expect(selected.getFullYear()).toBe(2026)
      expect(selected.getMonth()).toBe(7)
      expect(selected.getDate()).toBe(24)
      expect(screen.getByLabelText('Fecha de inicio')).toHaveValue('2026-08-24')
      expect(document.querySelector('[data-slot="calendar"]')).not.toBeInTheDocument()
    })

    it('no abre cuando está disabled', async () => {
      render(<DatePicker label="Fecha de inicio" disabled defaultValue={august} />)
      await userEvent.click(screen.getByRole('button', { name: 'Abrir calendario' }))
      expect(document.querySelector('[data-slot="calendar"]')).not.toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — cerrado', async () => {
      const { container } = render(
        <DatePicker label="Fecha de inicio" supportingText="Selecciona el día" />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
