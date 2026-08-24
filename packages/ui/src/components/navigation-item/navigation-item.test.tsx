import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { NavigationItem } from './navigation-item'

function DummyIcon() {
  return (
    <svg viewBox="0 0 16 16" data-testid="leading-icon">
      <circle cx="8" cy="8" r="4" />
    </svg>
  )
}

describe('NavigationItem', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<NavigationItem label="Inicio" />)
    })

    it('renderiza como button', () => {
      render(<NavigationItem label="Inicio" />)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene type="button"', () => {
      render(<NavigationItem label="Inicio" />)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<NavigationItem label="Inicio" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'navigation-item')
    })

    it('renderiza el label', () => {
      render(<NavigationItem label="Cursos" />)
      expect(screen.getByRole('button', { name: 'Cursos' })).toBeInTheDocument()
    })

    it('no renderiza ícono por defecto', () => {
      render(<NavigationItem label="Inicio" />)
      expect(screen.queryByTestId('leading-icon')).not.toBeInTheDocument()
      expect(screen.getByRole('button')).not.toHaveAttribute('data-icon')
    })

    it('renderiza el ícono leading cuando se pasa', () => {
      render(<NavigationItem label="Inicio" icon={<DummyIcon />} />)
      expect(screen.getByTestId('leading-icon')).toBeInTheDocument()
      expect(screen.getByRole('button')).toHaveAttribute('data-icon', 'true')
    })
  })

  describe('Prop: current', () => {
    it('no marca current por defecto', () => {
      render(<NavigationItem label="Inicio" />)
      const item = screen.getByRole('button')
      expect(item).not.toHaveAttribute('data-current')
      expect(item).not.toHaveAttribute('aria-current')
    })

    it('marca current con data-current y aria-current', () => {
      render(<NavigationItem label="Inicio" current />)
      const item = screen.getByRole('button', { name: 'Inicio' })
      expect(item).toHaveAttribute('data-current', 'true')
      expect(item).toHaveAttribute('aria-current', 'page')
    })
  })

  describe('Prop: context', () => {
    it('usa navigation-bar por defecto', () => {
      render(<NavigationItem label="Inicio" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-context', 'navigation-bar')
    })

    it('aplica side-navigation', () => {
      render(<NavigationItem label="Inicio" context="side-navigation" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-context', 'side-navigation')
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<NavigationItem label="Inicio" onClick={handleClick} />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<NavigationItem label="Inicio" disabled />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(<NavigationItem label="Inicio" disabled onClick={handleClick} />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<NavigationItem label="Inicio" onClick={handleClick} />)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it.each([false, true])('sin violaciones de accesibilidad — current=%s', async (current) => {
      const { container } = render(
        <nav aria-label="Principal">
          <NavigationItem label="Inicio" current={current} />
        </nav>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(
        <nav aria-label="Principal">
          <NavigationItem label="Inicio" disabled />
        </nav>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
