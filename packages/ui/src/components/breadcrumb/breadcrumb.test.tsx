import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { BreadcrumbItem } from '../breadcrumb-item/breadcrumb-item'
import { Breadcrumb } from './breadcrumb'

const trail = (
  <Breadcrumb>
    <BreadcrumbItem href="/" label="Inicio" />
    <BreadcrumbItem href="/cursos" label="Cursos" />
    <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
  </Breadcrumb>
)

describe('Breadcrumb', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(trail)
    })

    it('tiene el data-slot correcto', () => {
      render(trail)
      expect(screen.getByRole('navigation')).toHaveAttribute('data-slot', 'breadcrumb')
    })

    it('expone el landmark con aria-label por defecto', () => {
      render(trail)
      expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
    })

    it('renderiza los BreadcrumbItem', () => {
      render(trail)
      expect(screen.getByRole('link', { name: 'Inicio' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Cursos' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'UX Research' })).toBeInTheDocument()
    })

    it('inserta separadores no accesibles entre ítems', () => {
      const { container } = render(trail)
      const separators = container.querySelectorAll('[data-slot="breadcrumb"] [aria-hidden="true"]')
      expect(separators).toHaveLength(2)
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(trail)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
