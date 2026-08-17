import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Radio, RadioGroup } from './radio'

describe('Radio', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <RadioGroup aria-label="Opciones">
          <Radio value="a" aria-label="A" />
        </RadioGroup>
      )
    })

    it('tiene el data-slot correcto', () => {
      render(
        <RadioGroup aria-label="Opciones">
          <Radio value="a" aria-label="A" />
        </RadioGroup>
      )
      expect(screen.getByRole('radio')).toHaveAttribute('data-slot', 'radio')
    })

    it('RadioGroup tiene el data-slot correcto', () => {
      const { container } = render(
        <RadioGroup aria-label="Opciones">
          <Radio value="a" aria-label="A" />
        </RadioGroup>
      )
      expect(container.querySelector('[data-slot="radio-group"]')).toBeInTheDocument()
    })
  })

  describe('Prop: value / selected', () => {
    it('está unselected por defecto', () => {
      render(
        <RadioGroup aria-label="Opciones">
          <Radio value="a" aria-label="A" />
        </RadioGroup>
      )
      expect(screen.getByRole('radio')).toHaveAttribute('data-state', 'unchecked')
      expect(screen.getByRole('radio')).not.toBeChecked()
    })

    it('refleja selected cuando el value del grupo coincide', () => {
      render(
        <RadioGroup value="a" aria-label="Opciones">
          <Radio value="a" aria-label="A" />
        </RadioGroup>
      )
      expect(screen.getByRole('radio')).toHaveAttribute('data-state', 'checked')
      expect(screen.getByRole('radio')).toBeChecked()
    })
  })

  describe('Comportamiento', () => {
    it('cambia la selección al hacer click', async () => {
      const handleChange = vi.fn()
      render(
        <RadioGroup onValueChange={handleChange} aria-label="Opciones">
          <Radio value="a" aria-label="A" />
          <Radio value="b" aria-label="B" />
        </RadioGroup>
      )

      await userEvent.click(screen.getByRole('radio', { name: 'B' }))
      expect(handleChange).toHaveBeenCalledWith('b')
    })

    it('no cambia cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(
        <RadioGroup onValueChange={handleChange} aria-label="Opciones">
          <Radio value="a" aria-label="A" disabled />
        </RadioGroup>
      )

      await userEvent.click(screen.getByRole('radio', { name: 'A' }))
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(
        <RadioGroup aria-label="Opciones">
          <Radio value="a" aria-label="A" disabled />
        </RadioGroup>
      )
      expect(screen.getByRole('radio')).toBeDisabled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Space)', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(
        <RadioGroup onValueChange={handleChange} aria-label="Opciones">
          <Radio value="a" aria-label="A" />
          <Radio value="b" aria-label="B" />
        </RadioGroup>
      )

      await user.tab()
      expect(screen.getByRole('radio', { name: 'A' })).toHaveFocus()

      await user.keyboard(' ')
      expect(handleChange).toHaveBeenCalledWith('a')
    })

    it('mueve focus y selección con Arrow keys', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(
        <RadioGroup value="a" onValueChange={handleChange} aria-label="Opciones">
          <Radio value="a" aria-label="A" />
          <Radio value="b" aria-label="B" />
          <Radio value="c" aria-label="C" />
        </RadioGroup>
      )

      await user.tab()
      expect(screen.getByRole('radio', { name: 'A' })).toHaveFocus()

      await user.keyboard('{ArrowDown}')
      expect(handleChange).toHaveBeenCalledWith('b')
      expect(screen.getByRole('radio', { name: 'B' })).toHaveFocus()
    })

    it('Tab enfoca la opción seleccionada cuando hay una', async () => {
      const user = userEvent.setup()
      render(
        <RadioGroup value="b" aria-label="Opciones">
          <Radio value="a" aria-label="A" />
          <Radio value="b" aria-label="B" />
        </RadioGroup>
      )

      await user.tab()
      expect(screen.getByRole('radio', { name: 'B' })).toHaveFocus()
    })

    it('sin violaciones de accesibilidad — unselected', async () => {
      const { container } = render(
        <RadioGroup aria-label="Opciones">
          <Radio value="a" aria-label="A" />
          <Radio value="b" aria-label="B" />
        </RadioGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — selected', async () => {
      const { container } = render(
        <RadioGroup value="a" aria-label="Opciones">
          <Radio value="a" aria-label="A" />
          <Radio value="b" aria-label="B" />
        </RadioGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(
        <RadioGroup aria-label="Opciones">
          <Radio value="a" aria-label="A" disabled />
        </RadioGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
