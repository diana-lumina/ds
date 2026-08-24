import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { MenuItem } from './menu-item'

describe('MenuItem', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<MenuItem label="Editar" />)
    })

    it('renderiza como button', () => {
      render(<MenuItem label="Editar" />)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene type="button"', () => {
      render(<MenuItem label="Editar" />)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<MenuItem label="Editar" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'menu-item')
    })

    it('renderiza el label', () => {
      render(<MenuItem label="Eliminar" />)
      expect(screen.getByRole('button', { name: 'Eliminar' })).toBeInTheDocument()
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<MenuItem label="Editar" onClick={handleClick} />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<MenuItem label="Editar" disabled />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(<MenuItem label="Editar" disabled onClick={handleClick} />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<MenuItem label="Editar" onClick={handleClick} />)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<MenuItem label="Editar" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<MenuItem label="Editar" disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
