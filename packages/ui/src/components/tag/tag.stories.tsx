import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './tag'
import { MapPinIcon } from '@workspace/ui/icons'

type TagStoryArgs = Omit<React.ComponentProps<typeof Tag>, 'icon'> & {
  /** Icon visible (opcional; instance swap vía prop icon) */
  showIcon: boolean
}

const meta = {
  title: 'Components/Labels & Status/Tag',
  component: Tag as unknown as React.ComponentType<TagStoryArgs>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Clasificación o identificación de contenido. No interactivo; la identidad se resuelve con Semantic modes. No comunica condiciones del sistema ni ejecuta acciones.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size: sm · md',
      table: { 
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' }
       },
    },
    tone: {
      control: 'select',
      options: ['neutral', 'brand'],
      description: 'neutral: baja prominencia · brand: mayor énfasis de marca',
      table: { 
        type: { summary: 'string' },
        defaultValue: { summary: 'neutral' }
       },
    },
    label: {
      control: 'text',
      description: 'Label breve (ej. Virtual, Posgrado, Campus Monterrey)',
    },
    showIcon: {
      control: 'boolean',
      description: 'Icon visible (opcional; instance swap vía prop icon)',
      table: { defaultValue: { summary: 'false' } },
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<TagStoryArgs>

export default meta
type Story = StoryObj<TagStoryArgs>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
] as const

export const Playground: Story = {
  args: {
    size: 'sm',
    tone: 'neutral',
    label: 'Virtual',
    showIcon: false,
  },
  render: ({ showIcon, ...args }) => (
    <Tag {...args} icon={showIcon ? <MapPinIcon /> : undefined} />
  ),
}

export const Neutral: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Tag tone="neutral" label="Posgrado" />`,
      },
    },
  },
  render: () => <Tag tone="neutral" label="Posgrado" />,
}

export const Brand: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Tag tone="brand" label="Ingeniería" />`,
      },
    },
  },
  render: () => <Tag tone="brand" label="Ingeniería" />,
}

export const WithIcon: Story = {
  name: 'With icon',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Tag tone="brand" label="Campus Monterrey" icon={<MapPinIcon />} />`,
      },
    },
  },
  render: () => (
    <Tag tone="brand" label="Campus Monterrey" icon={<MapPinIcon />} />
  ),
}

export const AllTones: Story = {
  name: 'Tone & size',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 16px 12px',
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
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
    }

    const rows = [
      {
        label: 'Neutral',
        render: (size: 'sm' | 'md') => (
          <Tag size={size} tone="neutral" label="Virtual" />
        ),
      },
      {
        label: 'Brand',
        render: (size: 'sm' | 'md') => (
          <Tag size={size} tone="brand" label="Posgrado" />
        ),
      },
      {
        label: 'Brand + icon',
        render: (size: 'sm' | 'md') => (
          <Tag size={size} tone="brand" label="Ingeniería" icon={<MapPinIcon />} />
        ),
      },
    ] as const

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Tone</th>
              {SIZES.map(({ value, sizeLabel }) => (
                <th key={value} style={th}>
                  {sizeLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, render }) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                {SIZES.map(({ value }) => (
                  <td key={value} style={td}>
                    {render(value)}
                  </td>
                ))}
              </tr>
            ))}
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
    <div
      style={{
        fontFamily: 'sans-serif',
        maxWidth: 360,
        padding: 16,
        border: '1px solid #e5e5e5',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Diseño de interfaces</h3>
      <p style={{ margin: 0, fontSize: 13, color: '#666', lineHeight: 1.4 }}>
        Fundamentos de UI para productos digitales educativos.
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Tag size="sm" tone="brand" label="Virtual" />
        <Tag size="sm" tone="neutral" label="Posgrado" />
        <Tag size="sm" tone="neutral" label="Campus Monterrey" />
      </div>
    </div>
  ),
}
