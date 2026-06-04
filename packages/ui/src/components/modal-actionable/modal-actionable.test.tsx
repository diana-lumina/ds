import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ModalActionable, ModalActionableProps } from './modal-actionable'

const defaultFields: ModalActionableProps['fields'] = [
    {
        type: 'input',
        id: 'titulo',
        label: 'Título de la reseña',
        placeholder: 'Ingresa un título',
        required: true,
    },
    {
        type: 'rating',
        id: 'calificacion',
        label: 'Calificación',
        required: true,
        maxStars: 5,
    },
    {
        type: 'textarea',
        id: 'resena',
        label: 'Reseña',
        placeholder: 'Escribe tu reseña',
        required: true,
        maxLength: 140,
    },
]

const defaultProps = {
    open: true,
    title: 'Añadir mi opinión',
    fields: defaultFields,
    submitLabel: 'Enviar',
}

describe('ModalActionable', () => {

    it('renderiza sin errores', () => {
        render(<ModalActionable {...defaultProps} />)
    })

    it('muestra el título', () => {
        render(<ModalActionable {...defaultProps} />)
        expect(screen.getByText('Añadir mi opinión')).toBeInTheDocument()
    })

    it('muestra el subheader cuando se proporciona', () => {
        render(
            <ModalActionable
                {...defaultProps}
                subheader="Deja tu reseña"
            />
        )
        expect(screen.getByText('Deja tu reseña')).toBeInTheDocument()
    })

    it('muestra la nota cuando se proporciona', () => {
        render(
            <ModalActionable
                {...defaultProps}
                note="Nota importante"
            />
        )
        expect(screen.getByText('Nota importante')).toBeInTheDocument()
    })

    it('no se muestra cuando open es false', () => {
        render(<ModalActionable {...defaultProps} open={false} />)
        expect(screen.queryByText('Añadir mi opinión')).not.toBeInTheDocument()
    })

    describe('Campo input', () => {
        it('renderiza el label del input', () => {
            render(<ModalActionable {...defaultProps} />)
            expect(screen.getByText('Título de la reseña')).toBeInTheDocument()
        })

        it('renderiza el input con placeholder', () => {
            render(<ModalActionable {...defaultProps} />)
            expect(
                screen.getByPlaceholderText('Ingresa un título')
            ).toBeInTheDocument()
        })

        it('permite escribir en el input', async () => {
            render(<ModalActionable {...defaultProps} />)
            const input = screen.getByPlaceholderText('Ingresa un título')
            await userEvent.type(input, 'Mi reseña')
            expect(input).toHaveValue('Mi reseña')
        })
    })

    describe('Campo rating', () => {
        it('renderiza el label del rating', () => {
            render(<ModalActionable {...defaultProps} />)
            expect(screen.getByText('Calificación')).toBeInTheDocument()
        })

        it('renderiza 5 estrellas por default', () => {
            render(<ModalActionable {...defaultProps} />)
            const stars = screen.getAllByRole('button', { name: /estrella/i })
            expect(stars).toHaveLength(5)
        })

        it('selecciona una estrella al hacer click', async () => {
            render(<ModalActionable {...defaultProps} />)
            const stars = screen.getAllByRole('button', { name: /estrella/i })
            const thirdStar = stars[2]
            expect(thirdStar).toBeDefined()
            await userEvent.click(thirdStar!)
            expect(thirdStar).toHaveAttribute('aria-label', '3 estrellas')
        })
    })

    describe('Campo textarea', () => {
        it('renderiza el label del textarea', () => {
            render(<ModalActionable {...defaultProps} />)
            expect(screen.getByText('Reseña')).toBeInTheDocument()
        })

        it('renderiza el textarea con placeholder', () => {
            render(<ModalActionable {...defaultProps} />)
            expect(
                screen.getByPlaceholderText('Escribe tu reseña')
            ).toBeInTheDocument()
        })

        it('muestra el contador de caracteres con maxLength', () => {
            render(<ModalActionable {...defaultProps} />)
            expect(screen.getByText('0/140')).toBeInTheDocument()
        })

        it('permite escribir en el textarea', async () => {
            render(<ModalActionable {...defaultProps} />)
            const textarea = screen.getByPlaceholderText('Escribe tu reseña')
            await userEvent.type(textarea, 'Excelente curso')
            expect(textarea).toHaveValue('Excelente curso')
        })
    })

    describe('Acciones', () => {
        it('muestra el botón de submit con el label correcto', () => {
            render(<ModalActionable {...defaultProps} />)
            expect(
                screen.getByRole('button', { name: 'Enviar' })
            ).toBeInTheDocument()
        })

        it('muestra el botón de cancelar', () => {
            render(<ModalActionable {...defaultProps} cancelLabel="Cancelar" />)
            expect(
                screen.getByRole('button', { name: 'Cancelar' })
            ).toBeInTheDocument()
        })

        it('llama a onSubmit con los valores del formulario', async () => {
            const handleSubmit = vi.fn()
            render(
                <ModalActionable
                    {...defaultProps}
                    onSubmit={handleSubmit}
                />
            )
            await userEvent.type(
                screen.getByPlaceholderText('Ingresa un título'),
                'Mi reseña'
            )
            await userEvent.click(screen.getByRole('button', { name: 'Enviar' }))
            expect(handleSubmit).toHaveBeenCalledWith(
                expect.objectContaining({ titulo: 'Mi reseña' })
            )
        })

        it('llama a onCancel al hacer click en cancelar', async () => {
            const handleCancel = vi.fn()
            render(
                <ModalActionable
                    {...defaultProps}
                    cancelLabel="Cancelar"
                    onCancel={handleCancel}
                />
            )
            await userEvent.click(screen.getByRole('button', { name: 'Cancelar' }))
            expect(handleCancel).toHaveBeenCalledTimes(1)
        })
    })
})