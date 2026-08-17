import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { FloatingActionButton } from './floating-action-button'

function DummyIcon() {
  return (
    <svg viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="4" />
    </svg>
  )
}

describe('FloatingActionButton', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <FloatingActionButton
          floating={false}
          icon={<DummyIcon />}
          aria-label="Agregar"
        />
      )
    })

    it('renderiza como button', () => {
      render(
        <FloatingActionButton
          floating={false}
          icon={<DummyIcon />}
          aria-label="Agregar"
        />
      )
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene el data-slot correcto', () => {
      render(
        <FloatingActionButton
          floating={false}
          icon={<DummyIcon />}
          aria-label="Agregar"
        />
      )
      expect(screen.getByRole('button')).toHaveAttribute(
        'data-slot',
        'floating-action-button'
      )
    })
  })

  describe('Prop: type', () => {
    it('usa standard por defecto (IconButton lg)', () => {
      render(
        <FloatingActionButton
          floating={false}
          icon={<DummyIcon />}
          aria-label="Agregar"
        />
      )
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('data-type', 'standard')
      expect(button).toHaveAttribute('data-size', 'lg')
      expect(button).toHaveAttribute('data-tone', 'standard')
    })

    it('usa Button primary lg en extended', () => {
      render(
        <FloatingActionButton
          type="extended"
          floating={false}
          icon={<DummyIcon />}
          label="Agregar"
        />
      )
      const button = screen.getByRole('button', { name: 'Agregar' })
      expect(button).toHaveAttribute('data-type', 'extended')
      expect(button).toHaveAttribute('data-size', 'lg')
      expect(button).toHaveAttribute('data-hierarchy', 'primary')
      expect(button).toHaveAttribute('data-tone', 'standard')
      expect(button).toHaveAttribute('data-icon', 'inline-start')
    })
  })

  describe('Prop: floating', () => {
    it('activa floating por defecto', () => {
      render(
        <FloatingActionButton icon={<DummyIcon />} aria-label="Agregar" />
      )
      expect(screen.getByRole('button')).toHaveAttribute('data-floating', 'true')
    })

    it('permite desactivar floating', () => {
      render(
        <FloatingActionButton
          floating={false}
          icon={<DummyIcon />}
          aria-label="Agregar"
        />
      )
      expect(screen.getByRole('button')).toHaveAttribute('data-floating', 'false')
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(
        <FloatingActionButton
          floating={false}
          icon={<DummyIcon />}
          aria-label="Agregar"
          onClick={handleClick}
        />
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(
        <FloatingActionButton
          floating={false}
          icon={<DummyIcon />}
          aria-label="Agregar"
          onClick={handleClick}
          disabled
        />
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('exige nombre accesible en standard vía aria-label', () => {
      render(
        <FloatingActionButton
          floating={false}
          icon={<DummyIcon />}
          aria-label="Crear"
        />
      )
      expect(screen.getByRole('button', { name: 'Crear' })).toBeInTheDocument()
    })

    it('usa el label visible como nombre en extended', () => {
      render(
        <FloatingActionButton
          type="extended"
          floating={false}
          icon={<DummyIcon />}
          label="Crear"
        />
      )
      expect(screen.getByRole('button', { name: 'Crear' })).toBeInTheDocument()
    })

    it.each(['standard', 'extended'] as const)(
      'sin violaciones de accesibilidad — type %s',
      async (type) => {
        const { container } = render(
          type === 'extended' ? (
            <FloatingActionButton
              type="extended"
              floating={false}
              icon={<DummyIcon />}
              label="Agregar"
            />
          ) : (
            <FloatingActionButton
              type="standard"
              floating={false}
              icon={<DummyIcon />}
              aria-label="Agregar"
            />
          )
        )
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )
  })
})
