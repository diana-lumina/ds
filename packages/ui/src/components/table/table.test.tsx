import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { TableCell } from '../table-cell'
import { TableHeaderCell } from '../table-header-cell'
import { TableRow } from '../table-row'
import { Table } from './table'

describe('Table', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <Table header={<TableHeaderCell label="Nombre" />}>
          <TableRow>
            <TableCell>Ana Beltrán</TableCell>
          </TableRow>
        </Table>,
      )
    })

    it('tiene el data-slot correcto', () => {
      render(
        <Table header={<TableHeaderCell label="Nombre" />}>
          <TableRow>
            <TableCell>Ana Beltrán</TableCell>
          </TableRow>
        </Table>,
      )
      expect(document.querySelector('[data-slot="table"]')).toBeInTheDocument()
    })

    it('renderiza TableHeaderCell y TableRow', () => {
      render(
        <Table header={<TableHeaderCell label="Nombre" />}>
          <TableRow>
            <TableCell>Ana Beltrán</TableCell>
          </TableRow>
        </Table>,
      )
      expect(screen.getByRole('columnheader', { name: 'Nombre' })).toBeInTheDocument()
      expect(screen.getByRole('row', { name: 'Ana Beltrán' })).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(
        <Table header={<TableHeaderCell label="Nombre" />}>
          <TableRow>
            <TableCell>Ana Beltrán</TableCell>
          </TableRow>
        </Table>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
