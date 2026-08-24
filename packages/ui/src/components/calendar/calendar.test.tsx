import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Calendar } from './calendar'

const august = new Date(2026, 7, 1)

describe('Calendar', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Calendar month={august} />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Calendar month={august} />)
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument()
    })

    it('muestra el mes y año', () => {
      render(<Calendar month={august} />)
      expect(screen.getByRole('heading', { name: /agosto de 2026/i })).toBeInTheDocument()
    })

    it('compone IconButton tertiary md para anterior y siguiente', () => {
      render(<Calendar month={august} />)
      const previous = screen.getByRole('button', { name: 'Mes anterior' })
      const next = screen.getByRole('button', { name: 'Mes siguiente' })
      expect(previous).toHaveAttribute('data-slot', 'icon-button')
      expect(previous).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(previous).toHaveAttribute('data-size', 'md')
      expect(next).toHaveAttribute('data-slot', 'icon-button')
      expect(next).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(next).toHaveAttribute('data-size', 'md')
    })

    it('renderiza CalendarDay para los días del mes', () => {
      render(<Calendar month={august} value={new Date(2026, 7, 12)} />)
      const day = screen.getByRole('button', { name: /12 de agosto de 2026/i })
      expect(day).toHaveAttribute('data-slot', 'calendar-day')
      expect(day).toHaveAttribute('data-selected', 'true')
    })
  })

  describe('Navegación', () => {
    it('cambia de mes con anterior y siguiente', async () => {
      const onMonthChange = vi.fn()
      render(<Calendar defaultMonth={august} onMonthChange={onMonthChange} />)

      await userEvent.click(screen.getByRole('button', { name: 'Mes siguiente' }))
      expect(screen.getByRole('heading', { name: /septiembre de 2026/i })).toBeInTheDocument()
      expect(onMonthChange).toHaveBeenCalledTimes(1)

      await userEvent.click(screen.getByRole('button', { name: 'Mes anterior' }))
      expect(screen.getByRole('heading', { name: /agosto de 2026/i })).toBeInTheDocument()
    })
  })

  describe('Selección', () => {
    it('llama a onValueChange al elegir un día', async () => {
      const onValueChange = vi.fn()
      render(<Calendar month={august} onValueChange={onValueChange} />)

      await userEvent.click(screen.getByRole('button', { name: /12 de agosto de 2026/i }))
      expect(onValueChange).toHaveBeenCalledTimes(1)
      const selected = onValueChange.mock.calls[0][0] as Date
      expect(selected.getFullYear()).toBe(2026)
      expect(selected.getMonth()).toBe(7)
      expect(selected.getDate()).toBe(12)
    })

    it('deshabilita días fuera de minDate y maxDate', () => {
      render(
        <Calendar
          month={august}
          minDate={new Date(2026, 7, 10)}
          maxDate={new Date(2026, 7, 20)}
        />,
      )
      expect(screen.getByRole('button', { name: /9 de agosto de 2026/i })).toBeDisabled()
      expect(screen.getByRole('button', { name: /10 de agosto de 2026/i })).toBeEnabled()
      expect(screen.getByRole('button', { name: /21 de agosto de 2026/i })).toBeDisabled()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(
        <Calendar month={august} value={new Date(2026, 7, 12)} />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
