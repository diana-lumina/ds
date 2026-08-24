import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { PaginationItem } from './pagination-item'

describe('PaginationItem', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<PaginationItem>1</PaginationItem>)
    })

    it('renderiza como button', () => {
      render(<PaginationItem>1</PaginationItem>)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene type="button"', () => {
      render(<PaginationItem>1</PaginationItem>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<PaginationItem>1</PaginationItem>)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'pagination-item')
    })

    it('renderiza el contenido', () => {
      render(<PaginationItem>3</PaginationItem>)
      expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument()
    })
  })

  describe('Prop: current', () => {
    it('no marca current por defecto', () => {
      render(<PaginationItem>1</PaginationItem>)
      const item = screen.getByRole('button')
      expect(item).not.toHaveAttribute('data-current')
      expect(item).not.toHaveAttribute('aria-current')
    })

    it('marca la página actual con data-current y aria-current', () => {
      render(<PaginationItem current>2</PaginationItem>)
      const item = screen.getByRole('button', { name: '2' })
      expect(item).toHaveAttribute('data-current', 'true')
      expect(item).toHaveAttribute('aria-current', 'page')
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<PaginationItem onClick={handleClick}>1</PaginationItem>)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<PaginationItem disabled>1</PaginationItem>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(
        <PaginationItem disabled onClick={handleClick}>
          1
        </PaginationItem>,
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<PaginationItem onClick={handleClick}>1</PaginationItem>)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it.each([false, true])('sin violaciones de accesibilidad — current=%s', async (current) => {
      const { container } = render(
        <nav aria-label="Paginación">
          <PaginationItem current={current}>1</PaginationItem>
        </nav>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(
        <nav aria-label="Paginación">
          <PaginationItem disabled>1</PaginationItem>
        </nav>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
