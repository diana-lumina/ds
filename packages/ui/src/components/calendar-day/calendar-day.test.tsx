import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { CalendarDay } from './calendar-day'

describe('CalendarDay', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<CalendarDay>12</CalendarDay>)
    })

    it('renderiza como button', () => {
      render(<CalendarDay>12</CalendarDay>)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene type="button"', () => {
      render(<CalendarDay>12</CalendarDay>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<CalendarDay>12</CalendarDay>)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'calendar-day')
    })

    it('renderiza el contenido', () => {
      render(<CalendarDay>24</CalendarDay>)
      expect(screen.getByRole('button', { name: '24' })).toBeInTheDocument()
    })
  })

  describe('Prop: selected', () => {
    it('no marca selected por defecto', () => {
      render(<CalendarDay>12</CalendarDay>)
      const day = screen.getByRole('button')
      expect(day).not.toHaveAttribute('data-selected')
      expect(day).toHaveAttribute('aria-pressed', 'false')
    })

    it('marca el día seleccionado con data-selected y aria-pressed', () => {
      render(<CalendarDay selected>12</CalendarDay>)
      const day = screen.getByRole('button', { name: '12' })
      expect(day).toHaveAttribute('data-selected', 'true')
      expect(day).toHaveAttribute('aria-pressed', 'true')
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<CalendarDay onClick={handleClick}>12</CalendarDay>)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<CalendarDay disabled>12</CalendarDay>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(
        <CalendarDay disabled onClick={handleClick}>
          12
        </CalendarDay>,
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<CalendarDay onClick={handleClick}>12</CalendarDay>)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it.each([false, true])('sin violaciones de accesibilidad — selected=%s', async (selected) => {
      const { container } = render(<CalendarDay selected={selected}>12</CalendarDay>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<CalendarDay disabled>12</CalendarDay>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
