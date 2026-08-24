import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { PaginationItem } from '../pagination-item'
import { Pagination } from './pagination'

const specimen = (
  <Pagination>
    <PaginationItem>1</PaginationItem>
    <PaginationItem current>2</PaginationItem>
    <PaginationItem>3</PaginationItem>
  </Pagination>
)

describe('Pagination', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(specimen)
    })

    it('tiene el data-slot correcto', () => {
      render(specimen)
      expect(screen.getByRole('navigation')).toHaveAttribute('data-slot', 'pagination')
    })

    it('expone el landmark con aria-label por defecto', () => {
      render(specimen)
      expect(screen.getByRole('navigation', { name: 'Paginación' })).toBeInTheDocument()
    })

    it('renderiza los PaginationItem del SLOT', () => {
      render(specimen)
      expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: '2' })).toHaveAttribute('aria-current', 'page')
      expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument()
    })

    it('compone IconButton tertiary md para anterior y siguiente', () => {
      render(specimen)
      const previous = screen.getByRole('button', { name: 'Página anterior' })
      const next = screen.getByRole('button', { name: 'Página siguiente' })
      expect(previous).toHaveAttribute('data-slot', 'icon-button')
      expect(previous).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(previous).toHaveAttribute('data-size', 'md')
      expect(next).toHaveAttribute('data-slot', 'icon-button')
      expect(next).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(next).toHaveAttribute('data-size', 'md')
    })
  })

  describe('Navegación', () => {
    it('llama a onPrevious y onNext', async () => {
      const onPrevious = vi.fn()
      const onNext = vi.fn()
      render(
        <Pagination onPrevious={onPrevious} onNext={onNext}>
          <PaginationItem current>1</PaginationItem>
        </Pagination>,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Página anterior' }))
      await userEvent.click(screen.getByRole('button', { name: 'Página siguiente' }))
      expect(onPrevious).toHaveBeenCalledTimes(1)
      expect(onNext).toHaveBeenCalledTimes(1)
    })

    it('deshabilita anterior y siguiente', () => {
      render(
        <Pagination previousDisabled nextDisabled>
          <PaginationItem current>1</PaginationItem>
        </Pagination>,
      )
      expect(screen.getByRole('button', { name: 'Página anterior' })).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Página siguiente' })).toBeDisabled()
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
