import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Switch } from './switch'

describe('Switch', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Switch aria-label="Notificaciones" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Switch aria-label="Notificaciones" />)
      expect(screen.getByRole('switch')).toHaveAttribute('data-slot', 'switch')
    })

    it('acepta y aplica className adicional', () => {
      render(<Switch aria-label="Notificaciones" className="mi-clase" />)
      expect(screen.getByRole('switch')).toHaveClass('mi-clase')
    })
  })

  describe('Prop: checked', () => {
    it('está unchecked por defecto', () => {
      render(<Switch aria-label="Notificaciones" />)
      const control = screen.getByRole('switch')
      expect(control).toHaveAttribute('data-state', 'unchecked')
      expect(control).not.toBeChecked()
    })

    it('refleja checked=true', () => {
      render(<Switch aria-label="Notificaciones" checked />)
      const control = screen.getByRole('switch')
      expect(control).toHaveAttribute('data-state', 'checked')
      expect(control).toBeChecked()
    })
  })

  describe('Comportamiento', () => {
    it('llama a onCheckedChange al hacer click', async () => {
      const handleChange = vi.fn()
      render(<Switch aria-label="Notificaciones" onCheckedChange={handleChange} />)
      await userEvent.click(screen.getByRole('switch'))
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('no llama a onCheckedChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(
        <Switch aria-label="Notificaciones" onCheckedChange={handleChange} disabled />
      )
      await userEvent.click(screen.getByRole('switch'))
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<Switch aria-label="Notificaciones" disabled />)
      expect(screen.getByRole('switch')).toBeDisabled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Space)', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<Switch aria-label="Notificaciones" onCheckedChange={handleChange} />)

      await user.tab()
      expect(screen.getByRole('switch')).toHaveFocus()

      await user.keyboard(' ')
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it.each([false, true] as const)(
      'sin violaciones de accesibilidad — checked=%s',
      async (checked) => {
        const { container } = render(
          <Switch aria-label="Notificaciones" checked={checked} />
        )
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<Switch aria-label="Notificaciones" disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
