import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { FileUploadItem } from './file-upload-item'

describe('FileUploadItem', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <FileUploadItem
          primaryText="syllabus.pdf"
          secondaryText="240 KB"
          actionLabel="Eliminar"
        />,
      )
    })

    it('tiene el data-slot correcto', () => {
      render(
        <FileUploadItem
          primaryText="syllabus.pdf"
          secondaryText="240 KB"
          actionLabel="Eliminar"
        />,
      )
      expect(document.querySelector('[data-slot="file-upload-item"]')).toBeInTheDocument()
    })

    it('muestra primary, secondary y el botón', () => {
      render(
        <FileUploadItem
          primaryText="syllabus.pdf"
          secondaryText="240 KB"
          actionLabel="Eliminar"
        />,
      )
      expect(screen.getByText('syllabus.pdf')).toBeInTheDocument()
      expect(screen.getByText('240 KB')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Eliminar' })).toBeInTheDocument()
    })
  })

  describe('Prop: status', () => {
    it('usa selected por defecto', () => {
      render(
        <FileUploadItem
          primaryText="syllabus.pdf"
          secondaryText="240 KB"
          actionLabel="Eliminar"
        />,
      )
      expect(document.querySelector('[data-slot="file-upload-item"]')).toHaveAttribute(
        'data-status',
        'selected',
      )
    })

    it.each(['selected', 'uploading', 'success', 'error'] as const)(
      'aplica status %s',
      (status) => {
        render(
          <FileUploadItem
            status={status}
            primaryText="syllabus.pdf"
            secondaryText="240 KB"
            actionLabel="Eliminar"
          />,
        )
        expect(document.querySelector('[data-slot="file-upload-item"]')).toHaveAttribute(
          'data-status',
          status,
        )
      },
    )

    it('marca aria-busy en uploading', () => {
      render(
        <FileUploadItem
          status="uploading"
          primaryText="syllabus.pdf"
          secondaryText="Subiendo · 50%"
          actionLabel="Cancelar"
        />,
      )
      expect(document.querySelector('[data-slot="file-upload-item"]')).toHaveAttribute(
        'aria-busy',
        'true',
      )
    })

    it('muestra el Bar con el progreso en uploading', () => {
      render(
        <FileUploadItem
          status="uploading"
          progress={50}
          primaryText="syllabus.pdf"
          secondaryText="Subiendo · 50%"
          actionLabel="Cancelar"
        />,
      )
      const bar = document.querySelector('[data-slot="bar"]')
      expect(bar).toBeInTheDocument()
      expect(bar).toHaveAttribute('aria-valuenow', '50')
    })

    it('no muestra el Bar fuera de uploading', () => {
      render(
        <FileUploadItem
          primaryText="syllabus.pdf"
          secondaryText="240 KB"
          actionLabel="Eliminar"
        />,
      )
      expect(document.querySelector('[data-slot="bar"]')).not.toBeInTheDocument()
    })
  })

  describe('Prop: tone', () => {
    it('usa standard por defecto', () => {
      render(
        <FileUploadItem
          primaryText="syllabus.pdf"
          secondaryText="240 KB"
          actionLabel="Eliminar"
        />,
      )
      expect(document.querySelector('[data-slot="file-upload-item"]')).toHaveAttribute(
        'data-tone',
        'standard',
      )
    })

    it('aplica inverse', () => {
      render(
        <FileUploadItem
          tone="inverse"
          primaryText="syllabus.pdf"
          secondaryText="240 KB"
          actionLabel="Eliminar"
        />,
      )
      expect(document.querySelector('[data-slot="file-upload-item"]')).toHaveAttribute(
        'data-tone',
        'inverse',
      )
    })
  })

  describe('Comportamiento', () => {
    it('llama a onAction al hacer click en el botón', async () => {
      const handleAction = vi.fn()
      render(
        <FileUploadItem
          primaryText="syllabus.pdf"
          secondaryText="240 KB"
          actionLabel="Eliminar"
          onAction={handleAction}
        />,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Eliminar' }))
      expect(handleAction).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — selected', async () => {
      const { container } = render(
        <FileUploadItem
          primaryText="syllabus.pdf"
          secondaryText="240 KB"
          actionLabel="Eliminar"
        />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — error', async () => {
      const { container } = render(
        <FileUploadItem
          status="error"
          primaryText="syllabus.pdf"
          secondaryText="No se pudo cargar"
          actionLabel="Reintentar"
        />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
