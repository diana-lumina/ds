import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { TableCell } from './table-cell'

function renderCell(ui: React.ReactElement) {
  return render(
    <table>
      <tbody>
        <tr>{ui}</tr>
      </tbody>
    </table>,
  )
}

describe('TableCell', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      renderCell(<TableCell>Ana Beltrán</TableCell>)
    })

    it('renderiza como td', () => {
      renderCell(<TableCell>Ana Beltrán</TableCell>)
      expect(screen.getByText('Ana Beltrán').tagName).toBe('TD')
    })

    it('tiene el data-slot correcto', () => {
      renderCell(<TableCell>Ana Beltrán</TableCell>)
      expect(screen.getByText('Ana Beltrán')).toHaveAttribute('data-slot', 'table-cell')
    })

    it('muestra el contenido', () => {
      renderCell(<TableCell>Ana Beltrán</TableCell>)
      expect(screen.getByText('Ana Beltrán')).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = renderCell(<TableCell>Ana Beltrán</TableCell>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
