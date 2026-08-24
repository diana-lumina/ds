import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { FileUploadDropZone } from './file-upload-drop-zone'

const defaultProps = {
  primaryText: 'Arrastra el archivo aquí',
  secondaryText: 'PDF, DOCX o JPG · máximo 10 MB',
  actionLabel: 'Seleccionar archivo',
}

describe('FileUploadDropZone', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<FileUploadDropZone {...defaultProps} />)
    })

    it('tiene el data-slot correcto', () => {
      render(<FileUploadDropZone {...defaultProps} />)
      expect(document.querySelector('[data-slot="file-upload-drop-zone"]')).toBeInTheDocument()
    })

    it('muestra primary, secondary y el botón', () => {
      render(<FileUploadDropZone {...defaultProps} />)
      expect(screen.getByText('Arrastra el archivo aquí')).toBeInTheDocument()
      expect(screen.getByText('PDF, DOCX o JPG · máximo 10 MB')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Seleccionar archivo' })).toBeInTheDocument()
    })
  })

  describe('Prop: tone', () => {
    it('usa standard por defecto', () => {
      render(<FileUploadDropZone {...defaultProps} />)
      expect(document.querySelector('[data-slot="file-upload-drop-zone"]')).toHaveAttribute(
        'data-tone',
        'standard',
      )
    })

    it('aplica inverse', () => {
      render(<FileUploadDropZone {...defaultProps} tone="inverse" />)
      expect(document.querySelector('[data-slot="file-upload-drop-zone"]')).toHaveAttribute(
        'data-tone',
        'inverse',
      )
    })
  })

  describe('Prop: disabled', () => {
    it('marca disabled y deshabilita el botón', () => {
      render(<FileUploadDropZone {...defaultProps} disabled />)
      expect(document.querySelector('[data-slot="file-upload-drop-zone"]')).toHaveAttribute(
        'data-disabled',
        'true',
      )
      expect(screen.getByRole('button', { name: 'Seleccionar archivo' })).toBeDisabled()
    })
  })

  describe('Comportamiento', () => {
    it('llama a onFilesChange al elegir un archivo', async () => {
      const handleFiles = vi.fn()
      const file = new File(['hola'], 'syllabus.pdf', { type: 'application/pdf' })
      render(<FileUploadDropZone {...defaultProps} onFilesChange={handleFiles} />)

      const input = document.querySelector('input[type="file"]') as HTMLInputElement
      await userEvent.upload(input, file)
      expect(handleFiles).toHaveBeenCalledTimes(1)
    })

    it('no llama a onFilesChange cuando está disabled', async () => {
      const handleFiles = vi.fn()
      const file = new File(['hola'], 'syllabus.pdf', { type: 'application/pdf' })
      render(<FileUploadDropZone {...defaultProps} disabled onFilesChange={handleFiles} />)

      const input = document.querySelector('input[type="file"]') as HTMLInputElement
      await userEvent.upload(input, file)
      expect(handleFiles).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(<FileUploadDropZone {...defaultProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<FileUploadDropZone {...defaultProps} disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
