import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from '../breadcrumb/breadcrumb'
import { BreadcrumbItem } from './breadcrumb-item'

const meta: Meta<typeof BreadcrumbItem> = {
  title: 'Components/Navigation/BreadcrumbItem',
  component: BreadcrumbItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Ítem de un recorrido de navegación. Reutiliza Link (standalone / standard). Default, hover, pressed y focus-visible los aporta Link; current marca la página actual con color de texto default y no cambia con la interacción.',
      },
    },
  },
  argTypes: {
    current: {
      control: 'boolean',
      description: 'Página actual del recorrido (`aria-current="page"`)',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Label (string editable). Debe describir el destino.',
    },
    href: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof BreadcrumbItem>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    href: '/cursos',
    label: 'Cursos',
    current: false,
  },
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<BreadcrumbItem href="/cursos" label="Cursos" />`,
      },
    },
  },
  render: () => <BreadcrumbItem href="/cursos" label="Cursos" />,
}

export const Current: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Current usa `aria-current="page"` y color de texto default. No cambia en hover, pressed ni visited; el anillo de focus-visible se conserva.',
      },
      source: {
        code: `<BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />`,
      },
    },
  },
  render: () => (
    <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
  ),
}

export const AllStates: Story = {
  name: 'States',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 20px 12px',
      borderBottom: '1px solid #eee',
    }
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 20px',
      borderBottom: '1px solid #f0f0f0',
    }

    return (
      <div style={{ padding: 8 }}>

        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Default</th>
              <th style={th}>Current</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>
                <BreadcrumbItem href="/cursos" label="Cursos" />
              </td>
              <td style={td}>
                <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="/" label="Inicio" />
      <BreadcrumbItem href="/cursos" label="Cursos" />
      <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
    </Breadcrumb>
  ),
}
