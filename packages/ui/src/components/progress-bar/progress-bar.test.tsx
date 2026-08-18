import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { ProgressBar } from './progress-bar'

describe('ProgressBar', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<ProgressBar label="Carga de documentos" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<ProgressBar label="Carga de documentos" />)
      expect(
        screen.getByText('Carga de documentos').closest('[data-slot="progress-bar"]'),
      ).toHaveAttribute('data-slot', 'progress-bar')
    })

    it('renderiza el label', () => {
      render(<ProgressBar label="Carga de documentos" />)
      expect(screen.getByText('Carga de documentos')).toBeInTheDocument()
    })

    it('compone el Bar interno', () => {
      render(<ProgressBar label="Carga de documentos" value={40} />)
      expect(screen.getByRole('progressbar')).toHaveAttribute('data-slot', 'bar')
    })
  })

  describe('Prop: valueFormat', () => {
    it('muestra porcentaje por defecto', () => {
      render(<ProgressBar label="Carga de documentos" value={40} />)
      expect(screen.getByText('40%')).toBeInTheDocument()
    })

    it('muestra fracción cuando valueFormat es fraction', () => {
      render(
        <ProgressBar label="Carga de documentos" value={2} max={5} valueFormat="fraction" />,
      )
      expect(screen.getByText('2/5')).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('asocia el progressbar con el label', () => {
      render(<ProgressBar label="Carga de documentos" value={40} />)
      expect(screen.getByRole('progressbar', { name: 'Carga de documentos' })).toBeInTheDocument()
    })

    it('expone aria-valuetext en porcentaje', () => {
      render(<ProgressBar label="Carga de documentos" value={40} />)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuetext', '40%')
    })

    it('expone aria-valuetext en fracción', () => {
      render(
        <ProgressBar label="Carga de documentos" value={2} max={5} valueFormat="fraction" />,
      )
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuetext', '2 de 5')
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<ProgressBar label="Carga de documentos" value={40} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
