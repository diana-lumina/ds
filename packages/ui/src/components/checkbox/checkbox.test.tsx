import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Checkbox } from './checkbox'

describe('Checkbox', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Checkbox aria-label="Aceptar" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Checkbox aria-label="Aceptar" />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('data-slot', 'checkbox')
    })

    it('acepta y aplica className adicional', () => {
      render(<Checkbox aria-label="Aceptar" className="mi-clase" />)
      expect(screen.getByRole('checkbox')).toHaveClass('mi-clase')
    })
  })

  describe('Prop: checked', () => {
    it('está unchecked por defecto', () => {
      render(<Checkbox aria-label="Aceptar" />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveAttribute('data-state', 'unchecked')
      expect(checkbox).not.toBeChecked()
    })

    it('refleja checked=true', () => {
      render(<Checkbox aria-label="Aceptar" checked />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveAttribute('data-state', 'checked')
      expect(checkbox).toBeChecked()
    })

    it('refleja mixed (indeterminate)', () => {
      render(<Checkbox aria-label="Aceptar" checked="indeterminate" />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'indeterminate')
    })
  })

  describe('Comportamiento', () => {
    it('llama a onCheckedChange al hacer click', async () => {
      const handleChange = vi.fn()
      render(<Checkbox aria-label="Aceptar" onCheckedChange={handleChange} />)
      await userEvent.click(screen.getByRole('checkbox'))
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('no llama a onCheckedChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(<Checkbox aria-label="Aceptar" onCheckedChange={handleChange} disabled />)
      await userEvent.click(screen.getByRole('checkbox'))
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<Checkbox aria-label="Aceptar" disabled />)
      expect(screen.getByRole('checkbox')).toBeDisabled()
    })

    it('marca los íconos con aria-hidden', () => {
      const { container } = render(<Checkbox aria-label="Aceptar" checked />)
      const icons = container.querySelectorAll('svg[aria-hidden="true"]')
      expect(icons.length).toBeGreaterThan(0)
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Space)', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<Checkbox aria-label="Aceptar" onCheckedChange={handleChange} />)

      await user.tab()
      expect(screen.getByRole('checkbox')).toHaveFocus()

      await user.keyboard(' ')
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it.each([false, true, 'indeterminate'] as const)(
      'sin violaciones de accesibilidad — checked=%s',
      async (checked) => {
        const { container } = render(
          <Checkbox aria-label="Aceptar" checked={checked} />
        )
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<Checkbox aria-label="Aceptar" disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
