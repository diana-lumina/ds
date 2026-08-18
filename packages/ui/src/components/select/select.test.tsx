import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

function CampusSelect({
  appearance,
  error,
  disabled,
  onValueChange,
}: {
  appearance?: 'outlined' | 'underline'
  error?: boolean
  disabled?: boolean
  onValueChange?: (value: string) => void
}) {
  return (
    <Select onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger appearance={appearance} error={error} aria-label="Campus">
        <SelectValue placeholder="Elige un campus" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="mty">Monterrey</SelectItem>
        <SelectItem value="cdmx">Ciudad de México</SelectItem>
      </SelectContent>
    </Select>
  )
}

describe('Select', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<CampusSelect />)
    })

    it('tiene el data-slot correcto', () => {
      render(<CampusSelect />)
      expect(screen.getByRole('combobox')).toHaveAttribute('data-slot', 'select-trigger')
    })
  })

  describe('Prop: appearance', () => {
    it('usa outlined por defecto', () => {
      render(<CampusSelect />)
      expect(screen.getByRole('combobox')).toHaveAttribute('data-appearance', 'outlined')
    })

    it('aplica underline', () => {
      render(<CampusSelect appearance="underline" />)
      expect(screen.getByRole('combobox')).toHaveAttribute('data-appearance', 'underline')
    })
  })

  describe('Prop: error', () => {
    it('no marca error por defecto', () => {
      render(<CampusSelect />)
      const trigger = screen.getByRole('combobox')
      expect(trigger).not.toHaveAttribute('data-error')
      expect(trigger).not.toHaveAttribute('aria-invalid')
    })

    it('marca error y aria-invalid', () => {
      render(<CampusSelect error />)
      const trigger = screen.getByRole('combobox')
      expect(trigger).toHaveAttribute('data-error', 'true')
      expect(trigger).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Comportamiento: disabled', () => {
    it('deshabilita el trigger', () => {
      render(<CampusSelect disabled />)
      expect(screen.getByRole('combobox')).toBeDisabled()
    })

    it('error no se aplica cuando está disabled', () => {
      render(<CampusSelect error disabled />)
      const trigger = screen.getByRole('combobox')
      expect(trigger).not.toHaveAttribute('data-error')
      expect(trigger).not.toHaveAttribute('aria-invalid')
    })

    it('no llama a onValueChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(<CampusSelect disabled onValueChange={handleChange} />)
      await userEvent.click(screen.getByRole('combobox'))
      expect(handleChange).not.toHaveBeenCalled()
      expect(screen.queryByRole('option')).not.toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado', async () => {
      const user = userEvent.setup()
      render(<CampusSelect />)

      await user.tab()
      expect(screen.getByRole('combobox')).toHaveFocus()
    })

    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(<CampusSelect />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — error', async () => {
      const { container } = render(<CampusSelect error />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<CampusSelect disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
