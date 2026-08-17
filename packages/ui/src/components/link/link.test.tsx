import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Link } from './link'

describe('Link', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Link href="/destino" label="Ir a destino" />)
    })

    it('renderiza como <a>', () => {
      render(<Link href="/destino" label="Ir a destino" />)
      expect(screen.getByRole('link').tagName).toBe('A')
    })

    it('tiene el data-slot correcto', () => {
      render(<Link href="/destino" label="Ir a destino" />)
      expect(screen.getByRole('link')).toHaveAttribute('data-slot', 'link')
    })

    it('aplica el href correctamente', () => {
      render(<Link href="/destino" label="Ir a destino" />)
      expect(screen.getByRole('link')).toHaveAttribute('href', '/destino')
    })

    it('usa el label visible como nombre accesible', () => {
      render(<Link href="/destino" label="Ir a destino" />)
      expect(screen.getByRole('link', { name: 'Ir a destino' })).toBeInTheDocument()
    })
  })

  describe('Prop: context', () => {
    it('aplica context standalone por defecto', () => {
      render(<Link href="/destino" label="Ir" />)
      expect(screen.getByRole('link')).toHaveAttribute('data-context', 'standalone')
    })

    it('aplica context inline', () => {
      render(<Link href="/destino" label="Ir" context="inline" />)
      expect(screen.getByRole('link')).toHaveAttribute('data-context', 'inline')
    })
  })

  describe('Prop: tone', () => {
    it('aplica tone standard por defecto', () => {
      render(<Link href="/destino" label="Ir" />)
      expect(screen.getByRole('link')).toHaveAttribute('data-tone', 'standard')
    })

    it('aplica tone inverse', () => {
      render(<Link href="/destino" label="Ir" tone="inverse" />)
      expect(screen.getByRole('link')).toHaveAttribute('data-tone', 'inverse')
    })
  })

  describe('Prop: external', () => {
    it('sin external, no tiene target ni rel ni ícono', () => {
      render(<Link href="/destino" label="Ir" />)
      const link = screen.getByRole('link')
      expect(link).not.toHaveAttribute('target')
      expect(link).not.toHaveAttribute('rel')
      expect(link).not.toHaveAttribute('data-external')
      expect(link.querySelector('[aria-hidden="true"]')).not.toBeInTheDocument()
    })

    it('con external, abre en pestaña nueva de forma segura y muestra el ícono Sales', () => {
      render(<Link href="https://externo.com" label="Sitio externo" external />)
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      expect(link).toHaveAttribute('data-external', 'true')
      expect(link.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
    })

    it('el ícono external es decorativo (aria-hidden)', () => {
      render(<Link href="https://externo.com" label="Sitio externo" external />)
      expect(
        screen.getByRole('link', { name: 'Sitio externo' }).querySelector('[aria-hidden="true"]')
      ).toBeInTheDocument()
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<Link href="/destino" label="Ir" onClick={handleClick} />)
      await userEvent.click(screen.getByRole('link'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<Link href="/destino" label="Ir a destino" onClick={handleClick} />)

      await user.tab()
      expect(screen.getByRole('link')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<Link href="/destino" label="Ir a destino" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — external', async () => {
      const { container } = render(
        <Link href="https://externo.com" label="Sitio externo" external />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
