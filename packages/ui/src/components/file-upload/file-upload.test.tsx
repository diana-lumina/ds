import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { FileUpload } from './file-upload'

const defaultProps = {
  primaryText: 'Sube tu comprobante',
  secondaryText: 'PDF o JPG · máximo 10 MB',
  actionLabel: 'Seleccionar archivo',
  supportingText: 'Puedes adjuntar más de un archivo',
}

describe('FileUpload', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<FileUpload {...defaultProps} />)
    })

    it('tiene el data-slot correcto', () => {
      render(<FileUpload {...defaultProps} />)
      expect(document.querySelector('[data-slot="file-upload"]')).toBeInTheDocument()
    })

    it('usa type button y tone standard por defecto', () => {
      render(<FileUpload {...defaultProps} />)
      const root = document.querySelector('[data-slot="file-upload"]')
      expect(root).toHaveAttribute('data-type', 'button')
      expect(root).toHaveAttribute('data-tone', 'standard')
    })

    it('muestra primary, secondary, botón y supporting', () => {
      render(<FileUpload {...defaultProps} />)
      expect(screen.getByText('Sube tu comprobante')).toBeInTheDocument()
      expect(screen.getByText('PDF o JPG · máximo 10 MB')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Seleccionar archivo' })).toBeInTheDocument()
      expect(screen.getByText('Puedes adjuntar más de un archivo')).toBeInTheDocument()
    })
  })

  describe('Prop: type', () => {
    it('compone primary, secondary y FileUploadDropZone en drag-zone', () => {
      render(<FileUpload {...defaultProps} type="drag-zone" />)
      expect(document.querySelector('[data-slot="file-upload"]')).toHaveAttribute(
        'data-type',
        'drag-zone',
      )
      expect(screen.getByText('Sube tu comprobante')).toBeInTheDocument()
      expect(screen.getByText('PDF o JPG · máximo 10 MB')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="file-upload-drop-zone"]')).toBeInTheDocument()
      expect(screen.getByText('Arrastra el archivo aquí')).toBeInTheDocument()
    })
  })

  describe('Prop: tone', () => {
    it('aplica inverse', () => {
      render(<FileUpload {...defaultProps} tone="inverse" />)
      expect(document.querySelector('[data-slot="file-upload"]')).toHaveAttribute(
        'data-tone',
        'inverse',
      )
    })
  })

  describe('Ítems', () => {
    it('muestra FileUploadItem cuando hay items', () => {
      render(
        <FileUpload
          {...defaultProps}
          items={[
            {
              id: '1',
              primaryText: 'syllabus.pdf',
              secondaryText: '1.2 MB',
            },
          ]}
        />,
      )
      expect(screen.getByText('syllabus.pdf')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="file-upload-item"]')).toBeInTheDocument()
    })

    it('agrega un ítem al elegir un archivo', async () => {
      const onFilesChange = vi.fn()
      const file = new File(['hola'], 'acta.pdf', { type: 'application/pdf' })
      render(<FileUpload {...defaultProps} onFilesChange={onFilesChange} />)

      const input = document.querySelector('input[type="file"]') as HTMLInputElement
      await userEvent.upload(input, file)

      expect(onFilesChange).toHaveBeenCalledTimes(1)
      expect(screen.getByText('acta.pdf')).toBeInTheDocument()
    })

    it('llama a onItemAction al eliminar un ítem controlado', async () => {
      const onItemAction = vi.fn()
      render(
        <FileUpload
          {...defaultProps}
          items={[
            {
              id: 'file-1',
              primaryText: 'syllabus.pdf',
              secondaryText: '1.2 MB',
            },
          ]}
          onItemAction={onItemAction}
        />,
      )

      await userEvent.click(screen.getByRole('button', { name: 'Eliminar' }))
      expect(onItemAction).toHaveBeenCalledWith('file-1')
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — button', async () => {
      const { container } = render(<FileUpload {...defaultProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — drag-zone', async () => {
      const { container } = render(<FileUpload {...defaultProps} type="drag-zone" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
