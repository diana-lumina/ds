import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { axe } from 'vitest-axe'
import { Avatar } from './avatar'

function createImageMock(mode: 'load' | 'error') {
  return class MockImage {
    naturalWidth = 0
    complete = false
    referrerPolicy = ''
    crossOrigin: string | null = null
    private _src = ''
    private listeners = new Map<string, Set<EventListener>>()

    addEventListener(type: string, listener: EventListener) {
      if (!this.listeners.has(type)) this.listeners.set(type, new Set())
      this.listeners.get(type)!.add(listener)
    }

    removeEventListener(type: string, listener: EventListener) {
      this.listeners.get(type)?.delete(listener)
    }

    private emit(type: string) {
      this.listeners.get(type)?.forEach((listener) => listener(new Event(type)))
    }

    get src() {
      return this._src
    }

    set src(value: string) {
      this._src = value
      queueMicrotask(() => {
        if (mode === 'load') {
          this.naturalWidth = 100
          this.complete = true
          this.emit('load')
        } else {
          this.emit('error')
        }
      })
    }
  }
}

describe('Avatar', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Avatar initials="AB" />)
    })

    it('tiene el data-slot correcto', () => {
      const { container } = render(<Avatar initials="AB" />)
      expect(container.querySelector('[data-slot="avatar"]')).toBeInTheDocument()
    })

    it('acepta y aplica className adicional', () => {
      const { container } = render(<Avatar initials="AB" className="mi-clase" />)
      expect(container.querySelector('[data-slot="avatar"]')).toHaveClass('mi-clase')
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      const { container } = render(<Avatar initials="AB" />)
      expect(container.querySelector('[data-slot="avatar"]')).toHaveAttribute('data-size', 'sm')
    })

    it.each(['sm', 'md', 'lg'] as const)('aplica el tamaño %s', (size) => {
      const { container } = render(<Avatar size={size} initials="AB" />)
      expect(container.querySelector('[data-slot="avatar"]')).toHaveAttribute('data-size', size)
    })
  })

  describe('Prop: initials', () => {
    it('muestra hasta 2 iniciales', () => {
      render(<Avatar initials="AB" />)
      expect(screen.getByText('AB')).toBeInTheDocument()
    })

    it('deriva iniciales desde un nombre completo', () => {
      render(<Avatar initials="Juan Pérez" />)
      expect(screen.getByText('JP')).toBeInTheDocument()
    })

    it('marca data-content=initials cuando hay iniciales y no hay src', () => {
      const { container } = render(<Avatar initials="AB" />)
      expect(container.querySelector('[data-slot="avatar"]')).toHaveAttribute(
        'data-content',
        'initials'
      )
    })
  })

  describe('Prop: src', () => {
    beforeEach(() => {
      vi.stubGlobal('Image', createImageMock('load'))
    })

    afterEach(() => {
      vi.unstubAllGlobals()
    })

    it('marca data-content=image cuando la imagen carga', async () => {
      const { container } = render(
        <Avatar src="https://example.com/avatar.png" alt="Usuario" />
      )

      await waitFor(() => {
        expect(container.querySelector('[data-slot="avatar"]')).toHaveAttribute(
          'data-content',
          'image'
        )
      })
    })

    it('renderiza el elemento de imagen cuando carga', async () => {
      render(<Avatar src="https://example.com/avatar.png" alt="Usuario" />)

      await waitFor(() => {
        expect(screen.getByRole('img', { name: 'Usuario' })).toBeInTheDocument()
      })
    })
  })

  describe('Comportamiento', () => {
    it('usa fallback de ícono cuando no hay src ni initials', () => {
      const { container } = render(<Avatar alt="Usuario" />)
      const root = container.querySelector('[data-slot="avatar"]')
      expect(root).toHaveAttribute('data-content', 'fallback')
      expect(container.querySelector('svg')).toBeInTheDocument()
      expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    })

    it('muestra iniciales cuando la imagen falla', async () => {
      vi.stubGlobal('Image', createImageMock('error'))

      render(
        <Avatar
          src="https://broken.example/avatar.png"
          initials="JD"
          alt="Jane Doe"
        />
      )

      await waitFor(() => {
        expect(screen.getByText('JD')).toBeInTheDocument()
      })

      vi.unstubAllGlobals()
    })
  })

  describe('Accesibilidad', () => {
    it.each([
      { initials: 'AB' },
      {},
    ])('sin violaciones de accesibilidad — %#', async (props) => {
      const { container } = render(<Avatar {...props} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
