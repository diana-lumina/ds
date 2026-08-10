import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Segment } from './segment'

describe('Segment', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Segment>Opción</Segment>)
    })

    it('renderiza como button', () => {
      render(<Segment>Opción</Segment>)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene type="button" (no se comporta como submit por accidente dentro de un form)', () => {
      render(<Segment>Opción</Segment>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<Segment>Opción</Segment>)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'segment')
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<Segment>Opción</Segment>)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'sm')
    })

    it.each(['sm', 'md', 'lg'] as const)('aplica el tamaño %s', (size) => {
      render(<Segment size={size}>Opción</Segment>)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', size)
    })
  })

  describe('Prop: selected', () => {
    it('no está seleccionado por defecto', () => {
      render(<Segment>Opción</Segment>)
      const segment = screen.getByRole('button')
      expect(segment).toHaveAttribute('data-selected', 'false')
      expect(segment).toHaveAttribute('aria-pressed', 'false')
    })

    it('refleja selected=true', () => {
      render(<Segment selected>Opción</Segment>)
      const segment = screen.getByRole('button')
      expect(segment).toHaveAttribute('data-selected', 'true')
      expect(segment).toHaveAttribute('aria-pressed', 'true')
    })

    it('llama a onSelectedChange con el valor invertido al hacer click', async () => {
      const handleChange = vi.fn()
      render(
        <Segment selected={false} onSelectedChange={handleChange}>
          Opción
        </Segment>
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('llama a onSelectedChange con false cuando ya estaba seleccionado', async () => {
      const handleChange = vi.fn()
      render(
        <Segment selected onSelectedChange={handleChange}>
          Opción
        </Segment>
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleChange).toHaveBeenCalledWith(false)
    })
  })

  describe('Comportamiento', () => {
    it('está deshabilitado cuando disabled es true', () => {
      render(<Segment disabled>Opción</Segment>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no llama a onSelectedChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(
        <Segment disabled onSelectedChange={handleChange}>
          Opción
        </Segment>
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<Segment onSelectedChange={handleChange}>Opción</Segment>)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it.each([false, true])('sin violaciones de accesibilidad — selected=%s', async (selected) => {
      const { container } = render(<Segment selected={selected}>Opción</Segment>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<Segment disabled>Opción</Segment>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
