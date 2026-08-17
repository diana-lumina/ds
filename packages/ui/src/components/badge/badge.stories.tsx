import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Labels & Status/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Metadata compacta, neutral y no interactiva, siempre adjunta a otro elemento. Badge no comunica estado, severidad, selección ni identidad de marca.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size scale: sm · md.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    label: {
      control: 'text',
      description: 'Label (texto editable). Metadata breve: New, Beta u otra cualidad aprobada.',
      table: { type: { summary: 'string' } },
    },
    tone: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
] as const

const showCode = {
  docs: {
    canvas: { sourceState: 'shown' as const },
  },
}

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: { size: 'sm', label: 'New' },
}

export const SizeSm: Story = {
  name: 'Size sm',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Badge size="sm" label="New" />`,
      },
    },
  },
  args: { size: 'sm', label: 'New' },
}

export const SizeMd: Story = {
  name: 'Size md',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Badge size="md" label="New" />`,
      },
    },
  },
  args: { size: 'md', label: 'New' },
}

export const LabelBeta: Story = {
  name: 'Label Beta',
  parameters: showCode,
  args: { size: 'sm', label: 'Beta' },
}

export const AllSizes: Story = {
  name: 'Size',
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
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap',
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
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }} />
              {SIZES.map(({ value, sizeLabel }) => (
                <th key={value} style={th}>
                  {sizeLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Neutral</td>
              {SIZES.map(({ value }) => (
                <td key={value} style={td}>
                  <Badge size={value} label="New" />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}

/** Uso mínimo: metadata breve adjunta a otro elemento. */
export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontFamily: 'sans-serif',
        maxWidth: 360,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Curso de UX Research</h3>
        <Badge size="sm" label="New" />
      </div>
      <p style={{ margin: 0, fontSize: 13, color: '#666', lineHeight: 1.4 }}>
        Aprende métodos de investigación para validar hipótesis de producto.
      </p>
    </div>
  ),
}
