import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { NavigationItem } from '../navigation-item'
import { SideNavigation } from './side-navigation'

const specimen = (
  <SideNavigation heading="Cursos">
    <NavigationItem label="Inicio" current />
    <NavigationItem label="Temario" />
    <NavigationItem label="Recursos" />
  </SideNavigation>
)

describe('SideNavigation', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(specimen)
    })

    it('tiene el data-slot correcto', () => {
      render(specimen)
      expect(screen.getByRole('navigation')).toHaveAttribute('data-slot', 'side-navigation')
    })

    it('renderiza el heading opcional', () => {
      render(specimen)
      expect(screen.getByRole('heading', { name: 'Cursos' })).toBeInTheDocument()
    })

    it('no renderiza heading si no se pasa', () => {
      render(
        <SideNavigation>
          <NavigationItem label="Inicio" />
        </SideNavigation>,
      )
      expect(screen.queryByRole('heading')).not.toBeInTheDocument()
      expect(screen.getByRole('navigation', { name: 'Navegación' })).toBeInTheDocument()
    })

    it('renderiza los NavigationItem del SLOT', () => {
      render(specimen)
      expect(screen.getByRole('button', { name: 'Inicio' })).toHaveAttribute(
        'aria-current',
        'page',
      )
      expect(screen.getByRole('button', { name: 'Temario' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Recursos' })).toBeInTheDocument()
    })

    it('inyecta context=side-navigation en los ítems', () => {
      render(specimen)
      expect(screen.getByRole('button', { name: 'Inicio' })).toHaveAttribute(
        'data-context',
        'side-navigation',
      )
    })
  })

  describe('Comportamiento', () => {
    it('delega el click a cada NavigationItem', async () => {
      const handleClick = vi.fn()
      render(
        <SideNavigation>
          <NavigationItem label="Temario" onClick={handleClick} />
        </SideNavigation>,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Temario' }))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accesibilidad', () => {
    it('asocia el landmark al heading cuando existe', () => {
      render(specimen)
      expect(screen.getByRole('navigation', { name: 'Cursos' })).toBeInTheDocument()
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(specimen)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
