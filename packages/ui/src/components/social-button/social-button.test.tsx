import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { SocialButton } from './social-button'

function DummyIcon() {
  return (
    <svg viewBox="0 0 16 16" data-testid="social-icon">
      <circle cx="8" cy="8" r="4" />
    </svg>
  )
}

describe('SocialButton', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} />)
    })

    it('renderiza como button', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} />)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene type="button"', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} />)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} />)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'social-button')
    })

    it('renderiza el label', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} />)
      expect(
        screen.getByRole('button', { name: 'Continuar con Google' }),
      ).toBeInTheDocument()
    })

    it('renderiza el ícono', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} />)
      expect(screen.getByTestId('social-icon')).toBeInTheDocument()
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño md por defecto', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} />)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'md')
    })

    it.each(['sm', 'md', 'lg'] as const)('aplica el tamaño %s', (size) => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} size={size} />)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', size)
    })
  })

  describe('Prop: loading', () => {
    it('deshabilita el botón y marca aria-busy', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} loading />)
      const button = screen.getByRole('button', { name: 'Continuar con Google' })
      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('aria-busy', 'true')
      expect(button).toHaveAttribute('data-loading', 'true')
      expect(document.querySelector('[data-slot="loading-icon"]')).toBeInTheDocument()
    })

    it('no llama a onClick cuando loading', async () => {
      const handleClick = vi.fn()
      render(
        <SocialButton
          label="Continuar con Google"
          icon={<DummyIcon />}
          loading
          onClick={handleClick}
        />,
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(
        <SocialButton
          label="Continuar con Google"
          icon={<DummyIcon />}
          onClick={handleClick}
        />,
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} disabled />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(
        <SocialButton
          label="Continuar con Google"
          icon={<DummyIcon />}
          disabled
          onClick={handleClick}
        />,
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('el wrapper del ícono está aria-hidden', () => {
      render(<SocialButton label="Continuar con Google" icon={<DummyIcon />} />)
      const hiddenWrapper = screen.getByRole('button').querySelector('[aria-hidden="true"]')
      expect(hiddenWrapper).toBeInTheDocument()
    })

    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(
        <SocialButton
          label="Continuar con Google"
          icon={<DummyIcon />}
          onClick={handleClick}
        />,
      )

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(
        <SocialButton label="Continuar con Google" icon={<DummyIcon />} />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(
        <SocialButton label="Continuar con Google" icon={<DummyIcon />} disabled />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — loading', async () => {
      const { container } = render(
        <SocialButton label="Continuar con Google" icon={<DummyIcon />} loading />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
