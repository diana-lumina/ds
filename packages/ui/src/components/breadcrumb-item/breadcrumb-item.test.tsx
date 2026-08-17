import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { BreadcrumbItem } from './breadcrumb-item'

describe('BreadcrumbItem', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<BreadcrumbItem href="/cursos" label="Cursos" />)
    })

    it('renderiza como <a> (reutiliza Link)', () => {
      render(<BreadcrumbItem href="/cursos" label="Cursos" />)
      expect(screen.getByRole('link').tagName).toBe('A')
    })

    it('tiene el data-slot correcto', () => {
      render(<BreadcrumbItem href="/cursos" label="Cursos" />)
      expect(screen.getByRole('link')).toHaveAttribute('data-slot', 'breadcrumb-item')
    })

    it('aplica el contrato de Link: standalone / standard', () => {
      render(<BreadcrumbItem href="/cursos" label="Cursos" />)
      const item = screen.getByRole('link')
      expect(item).toHaveAttribute('data-context', 'standalone')
      expect(item).toHaveAttribute('data-tone', 'standard')
    })

    it('aplica el href correctamente', () => {
      render(<BreadcrumbItem href="/cursos" label="Cursos" />)
      expect(screen.getByRole('link')).toHaveAttribute('href', '/cursos')
    })

    it('usa el label visible como nombre accesible', () => {
      render(<BreadcrumbItem href="/cursos" label="Cursos" />)
      expect(screen.getByRole('link', { name: 'Cursos' })).toBeInTheDocument()
    })
  })

  describe('Prop: current', () => {
    it('no marca current por defecto', () => {
      render(<BreadcrumbItem href="/cursos" label="Cursos" />)
      const item = screen.getByRole('link')
      expect(item).not.toHaveAttribute('data-current')
      expect(item).not.toHaveAttribute('aria-current')
    })

    it('marca la página actual con data-current y aria-current', () => {
      render(<BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />)
      const item = screen.getByRole('link', { name: 'UX Research' })
      expect(item).toHaveAttribute('data-current', 'true')
      expect(item).toHaveAttribute('aria-current', 'page')
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<BreadcrumbItem href="/cursos" label="Cursos" onClick={handleClick} />)
      await userEvent.click(screen.getByRole('link'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<BreadcrumbItem href="/cursos" label="Cursos" onClick={handleClick} />)

      await user.tab()
      expect(screen.getByRole('link')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<BreadcrumbItem href="/cursos" label="Cursos" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — current', async () => {
      const { container } = render(
        <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
