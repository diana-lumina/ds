import type { Meta, StoryObj } from '@storybook/react'
import { BreadcrumbItem } from '../breadcrumb-item/breadcrumb-item'
import { Breadcrumb } from './breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Recorrido de navegación compuesto por instancias reales de BreadcrumbItem. No introduce una acción ni apariencia propias; organiza el trail, el gap y el ícono separador. Current, jerarquía visual y labels los aporta cada BreadcrumbItem. El wrapper es un landmark `nav`; el separador es decorativo (aria-hidden). Tab recorre cada ítem en orden DOM.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description:
        'SLOT nativo compartido: instancias reales de BreadcrumbItem. Cantidad y current los aporta la composición.',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem href="/" label="Inicio" />
      <BreadcrumbItem href="/cursos" label="Cursos" />
      <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
    </Breadcrumb>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'El último ítem marca la página actual (`current`). El separador no recibe focus.',
      },
      source: {
        code: `<Breadcrumb>
  <BreadcrumbItem href="/" label="Inicio" />
  <BreadcrumbItem href="/cursos" label="Cursos" />
  <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
</Breadcrumb>`,
      },
    },
  },
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="/" label="Inicio" />
      <BreadcrumbItem href="/cursos" label="Cursos" />
      <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
    </Breadcrumb>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story:
          'La alineación del trail respecto a la página la resuelve el padre. El grupo no centra su contenido.',
      },
    },
  },
  render: () => (
    <header
      style={{
        padding: '16px 24px',
        borderBottom: '1px solid #eee',
        fontFamily: 'sans-serif',
      }}
    >
      <Breadcrumb>
        <BreadcrumbItem href="/" label="Inicio" />
        <BreadcrumbItem href="/cursos" label="Cursos" />
        <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
      </Breadcrumb>
    </header>
  ),
}
