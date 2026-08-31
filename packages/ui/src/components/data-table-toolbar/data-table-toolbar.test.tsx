import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Button } from '../button'
import { FilterChip } from '../filter-chip'
import { IconButton } from '../icon-button'
import { Search } from '../search'
import { DataTableToolbar } from './data-table-toolbar'

describe('DataTableToolbar', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<DataTableToolbar search={<Search placeholder="Buscar" />} />)
    })

    it('tiene el data-slot correcto', () => {
      render(<DataTableToolbar search={<Search placeholder="Buscar" />} />)
      expect(document.querySelector('[data-slot="data-table-toolbar"]')).toBeInTheDocument()
    })

    it('renderiza el Search', () => {
      render(<DataTableToolbar search={<Search placeholder="Buscar programas" />} />)
      expect(screen.getByPlaceholderText('Buscar programas')).toBeInTheDocument()
    })

    it('no renderiza filters ni actions por defecto', () => {
      render(<DataTableToolbar search={<Search placeholder="Buscar" />} />)
      expect(
        document.querySelector('[data-slot="data-table-toolbar-filters"]'),
      ).not.toBeInTheDocument()
      expect(
        document.querySelector('[data-slot="data-table-toolbar-actions"]'),
      ).not.toBeInTheDocument()
    })

    it('renderiza FilterChip cuando se pasa filters', () => {
      render(
        <DataTableToolbar
          search={<Search placeholder="Buscar" />}
          filters={<FilterChip label="En línea" />}
        />,
      )
      expect(screen.getByRole('button', { name: 'En línea' })).toBeInTheDocument()
    })

    it('renderiza Button e IconButton cuando se pasa actions', () => {
      render(
        <DataTableToolbar
          search={<Search placeholder="Buscar" />}
          actions={
            <>
              <Button label="Exportar" />
              <IconButton icon={<svg data-testid="icono" />} aria-label="Descargar" />
            </>
          }
        />,
      )
      expect(screen.getByRole('button', { name: 'Exportar' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Descargar' })).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(
        <DataTableToolbar
          search={<Search placeholder="Buscar programas" />}
          filters={<FilterChip label="En línea" />}
          actions={<Button label="Exportar" />}
        />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
