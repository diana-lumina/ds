import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { TableHeaderCell } from './table-header-cell'

function renderHeader(ui: React.ReactElement) {
  return render(
    <table>
      <thead>
        <tr>{ui}</tr>
      </thead>
    </table>,
  )
}

describe('TableHeaderCell', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      renderHeader(<TableHeaderCell label="Nombre" />)
    })

    it('renderiza como th', () => {
      renderHeader(<TableHeaderCell label="Nombre" />)
      expect(screen.getByRole('columnheader').tagName).toBe('TH')
    })

    it('tiene el data-slot correcto', () => {
      renderHeader(<TableHeaderCell label="Nombre" />)
      expect(screen.getByRole('columnheader')).toHaveAttribute(
        'data-slot',
        'table-header-cell',
      )
    })

    it('muestra el texto', () => {
      renderHeader(<TableHeaderCell label="Nombre" />)
      expect(screen.getByRole('button', { name: 'Nombre' })).toBeInTheDocument()
    })

    it('no renderiza ícono por defecto', () => {
      renderHeader(<TableHeaderCell label="Nombre" />)
      expect(
        document.querySelector('[data-slot="table-header-cell-icon"]'),
      ).not.toBeInTheDocument()
    })

    it('renderiza el ícono a la derecha cuando se pasa', () => {
      renderHeader(
        <TableHeaderCell label="Nombre" icon={<svg data-testid="icono" />} />,
      )
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('el ícono es decorativo (aria-hidden)', () => {
      renderHeader(
        <TableHeaderCell label="Nombre" icon={<svg data-testid="icono" />} />,
      )
      expect(screen.getByTestId('icono').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al pulsar', async () => {
      const onClick = vi.fn()
      renderHeader(<TableHeaderCell label="Nombre" onClick={onClick} />)
      await userEvent.click(screen.getByRole('button', { name: 'Nombre' }))
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado', async () => {
      const onClick = vi.fn()
      const user = userEvent.setup()
      renderHeader(<TableHeaderCell label="Nombre" onClick={onClick} />)
      await user.tab()
      expect(screen.getByRole('button', { name: 'Nombre' })).toHaveFocus()
      await user.keyboard('{Enter}')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = renderHeader(
        <TableHeaderCell label="Nombre" icon={<svg />} />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
