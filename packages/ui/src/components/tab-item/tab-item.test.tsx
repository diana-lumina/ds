import type { ReactElement } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { TabItem } from './tab-item'

function renderInTablist(ui: ReactElement) {
  return render(<div role="tablist">{ui}</div>)
}

describe('TabItem', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<TabItem label="Tab" />)
    })

    it('renderiza como button con role="tab"', () => {
      render(<TabItem label="Tab" />)
      const item = screen.getByRole('tab')
      expect(item.tagName).toBe('BUTTON')
    })

    it('tiene type="button" (no se comporta como submit por accidente dentro de un form)', () => {
      render(<TabItem label="Tab" />)
      expect(screen.getByRole('tab')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<TabItem label="Tab" />)
      expect(screen.getByRole('tab')).toHaveAttribute('data-slot', 'tab-item')
    })

    it('renderiza el label', () => {
      render(<TabItem label="Resumen" />)
      expect(screen.getByRole('tab', { name: 'Resumen' })).toBeInTheDocument()
    })
  })

  describe('Prop: selected', () => {
    it('no está seleccionado por defecto', () => {
      render(<TabItem label="Tab" />)
      const item = screen.getByRole('tab')
      expect(item).toHaveAttribute('data-selected', 'false')
      expect(item).toHaveAttribute('aria-selected', 'false')
    })

    it('refleja selected=true', () => {
      render(<TabItem selected label="Tab" />)
      const item = screen.getByRole('tab')
      expect(item).toHaveAttribute('data-selected', 'true')
      expect(item).toHaveAttribute('aria-selected', 'true')
    })

    it('llama a onSelectedChange con el valor invertido al hacer click', async () => {
      const handleChange = vi.fn()
      render(
        <TabItem selected={false} onSelectedChange={handleChange} label="Tab" />
      )
      await userEvent.click(screen.getByRole('tab'))
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('llama a onSelectedChange con false cuando ya estaba seleccionado', async () => {
      const handleChange = vi.fn()
      render(<TabItem selected onSelectedChange={handleChange} label="Tab" />)
      await userEvent.click(screen.getByRole('tab'))
      expect(handleChange).toHaveBeenCalledWith(false)
    })
  })

  describe('Comportamiento', () => {
    it('está deshabilitado cuando disabled es true', () => {
      render(<TabItem disabled label="Tab" />)
      expect(screen.getByRole('tab')).toBeDisabled()
    })

    it('no llama a onSelectedChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(<TabItem disabled onSelectedChange={handleChange} label="Tab" />)
      await userEvent.click(screen.getByRole('tab'))
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<TabItem onSelectedChange={handleChange} label="Tab" />)

      await user.tab()
      expect(screen.getByRole('tab')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it.each([false, true])('sin violaciones de accesibilidad — selected=%s', async (selected) => {
      const { container } = renderInTablist(<TabItem selected={selected} label="Tab" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = renderInTablist(<TabItem disabled label="Tab" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
