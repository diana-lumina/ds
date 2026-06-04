import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { AccordionModule } from './accordion-module'
import { PlusIcon } from 'lucide-react'

const defaultItems = [
  {
    id: 'modulo-1',
    icon: <PlusIcon size={16} />,
    title: 'Módulo 1',
    subtitle: 'Fundamentos de ML',
    content: {
      title: 'Title Home',
      description: 'Descripción del módulo 1',
      link: { label: 'Ver más', href: '/modulo-1' },
    },
  },
  {
    id: 'modulo-2',
    title: 'Módulo 2',
    content: {
      description: 'Descripción del módulo 2',
    },
  },
]

describe('AccordionModule', () => {

  it('renderiza sin errores', () => {
    render(<AccordionModule items={defaultItems} />)
  })

  it('muestra los títulos de los módulos', () => {
    render(<AccordionModule items={defaultItems} />)
    expect(screen.getByText('Módulo 1')).toBeInTheDocument()
    expect(screen.getByText('Módulo 2')).toBeInTheDocument()
  })

  it('muestra el subtítulo cuando se proporciona', () => {
    render(<AccordionModule items={defaultItems} />)
    expect(screen.getByText('Fundamentos de ML')).toBeInTheDocument()
  })

  it('no muestra el contenido antes de abrir', () => {
    render(<AccordionModule items={defaultItems} />)
    expect(screen.queryByText('Descripción del módulo 1')).not.toBeVisible()
  })

  it('muestra el contenido al abrir un módulo', async () => {
    render(<AccordionModule items={defaultItems} />)
    await userEvent.click(screen.getByText('Módulo 1'))
    expect(screen.getByText('Descripción del módulo 1')).toBeVisible()
  })

  it('muestra el título del contenido cuando se proporciona', async () => {
    render(<AccordionModule items={defaultItems} />)
    await userEvent.click(screen.getByText('Módulo 1'))
    expect(screen.getByText('Title Home')).toBeVisible()
  })

  it('muestra el link cuando se proporciona', async () => {
    render(<AccordionModule items={defaultItems} />)
    await userEvent.click(screen.getByText('Módulo 1'))
    const link = screen.getByRole('link', { name: /ver más/i })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', '/modulo-1')
  })

  it('no muestra link cuando no se proporciona', async () => {
    render(<AccordionModule items={defaultItems} />)
    await userEvent.click(screen.getByText('Módulo 2'))
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  describe('Tipo single', () => {
    it('cierra el módulo anterior al abrir uno nuevo', async () => {
      render(<AccordionModule items={defaultItems} type="single" />)
      await userEvent.click(screen.getByText('Módulo 1'))
      expect(screen.getByText('Descripción del módulo 1')).toBeVisible()
      await userEvent.click(screen.getByText('Módulo 2'))
      expect(screen.queryByText('Descripción del módulo 1')).not.toBeVisible()
      expect(screen.getByText('Descripción del módulo 2')).toBeVisible()
    })
  })

  describe('Tipo multiple', () => {
    it('permite abrir varios módulos simultáneamente', async () => {
      render(<AccordionModule items={defaultItems} type="multiple" />)
      await userEvent.click(screen.getByText('Módulo 1'))
      await userEvent.click(screen.getByText('Módulo 2'))
      expect(screen.getByText('Descripción del módulo 1')).toBeVisible()
      expect(screen.getByText('Descripción del módulo 2')).toBeVisible()
    })
  })

  it('renderiza una lista vacía sin errores', () => {
    render(<AccordionModule items={[]} />)
  })

})