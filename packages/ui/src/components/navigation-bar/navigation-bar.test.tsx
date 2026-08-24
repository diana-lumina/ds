import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { NavigationItem } from '../navigation-item'
import { NavigationBar } from './navigation-bar'

const specimen = (
  <NavigationBar>
    <NavigationItem label="Inicio" current />
    <NavigationItem label="Cursos" />
    <NavigationItem label="Perfil" />
  </NavigationBar>
)

describe('NavigationBar', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(specimen)
    })

    it('tiene el data-slot correcto', () => {
      render(specimen)
      expect(screen.getByRole('navigation')).toHaveAttribute('data-slot', 'navigation-bar')
    })

    it('expone el landmark con aria-label por defecto', () => {
      render(specimen)
      expect(screen.getByRole('navigation', { name: 'Navegación' })).toBeInTheDocument()
    })

    it('renderiza los NavigationItem del SLOT', () => {
      render(specimen)
      expect(screen.getByRole('button', { name: 'Inicio' })).toHaveAttribute(
        'aria-current',
        'page',
      )
      expect(screen.getByRole('button', { name: 'Cursos' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Perfil' })).toBeInTheDocument()
    })

    it('inyecta context=navigation-bar en los ítems', () => {
      render(specimen)
      expect(screen.getByRole('button', { name: 'Inicio' })).toHaveAttribute(
        'data-context',
        'navigation-bar',
      )
    })
  })

  describe('Comportamiento', () => {
    it('delega el click a cada NavigationItem', async () => {
      const handleClick = vi.fn()
      render(
        <NavigationBar>
          <NavigationItem label="Cursos" onClick={handleClick} />
        </NavigationBar>,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Cursos' }))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(specimen)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
