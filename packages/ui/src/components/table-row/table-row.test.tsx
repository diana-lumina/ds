import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { TableCell } from '../table-cell'
import { TableRow } from './table-row'

function renderRow(ui: React.ReactElement) {
  return render(
    <table>
      <tbody>{ui}</tbody>
    </table>,
  )
}

describe('TableRow', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      renderRow(
        <TableRow>
          <TableCell>Ana Beltrán</TableCell>
        </TableRow>,
      )
    })

    it('renderiza como tr', () => {
      renderRow(
        <TableRow>
          <TableCell>Ana Beltrán</TableCell>
        </TableRow>,
      )
      expect(screen.getByRole('row').tagName).toBe('TR')
    })

    it('tiene el data-slot correcto', () => {
      renderRow(
        <TableRow>
          <TableCell>Ana Beltrán</TableCell>
        </TableRow>,
      )
      expect(screen.getByRole('row')).toHaveAttribute('data-slot', 'table-row')
    })

    it('renderiza las TableCell', () => {
      renderRow(
        <TableRow>
          <TableCell>Ana Beltrán</TableCell>
          <TableCell>Diseño de interfaces</TableCell>
        </TableRow>,
      )
      expect(screen.getByText('Ana Beltrán')).toBeInTheDocument()
      expect(screen.getByText('Diseño de interfaces')).toBeInTheDocument()
    })
  })

  describe('Prop: selected', () => {
    it('no está selected por defecto', () => {
      renderRow(
        <TableRow>
          <TableCell>Ana Beltrán</TableCell>
        </TableRow>,
      )
      expect(screen.getByRole('row')).not.toHaveAttribute('data-selected')
    })

    it('aplica selected', () => {
      renderRow(
        <TableRow selected>
          <TableCell>Ana Beltrán</TableCell>
        </TableRow>,
      )
      expect(screen.getByRole('row')).toHaveAttribute('data-selected', 'true')
      expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'true')
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = renderRow(
        <TableRow>
          <TableCell>Ana Beltrán</TableCell>
        </TableRow>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — selected', async () => {
      const { container } = renderRow(
        <TableRow selected>
          <TableCell>Ana Beltrán</TableCell>
        </TableRow>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
