import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './tag'
import { BagIcon } from '@workspace/ui/icons'

type TagStoryArgs = Omit<React.ComponentProps<typeof Tag>, 'icon'> & {
  showIcon: boolean
}

const meta: Meta<TagStoryArgs> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    tone: {
      control: 'select',
      options: ['neutral', 'brand'],
    },
    showIcon: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<TagStoryArgs>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    size: 'sm',
    tone: 'neutral',
    children: 'Nuevo',
    showIcon: false,
  },
  render: ({ showIcon, ...args }) => (
    <Tag {...args} icon={showIcon ? <BagIcon /> : undefined} />
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Small</h2>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <Tag size="sm" tone="neutral">
              Neutral
            </Tag>
            <div style={captionStyle()}>Neutral</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Tag size="sm" tone="brand">
              Brand
            </Tag>
            <div style={captionStyle()}>Brand</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Tag size="sm" tone="brand" icon={<BagIcon />}>
              Con ícono
            </Tag>
            <div style={captionStyle()}>Con ícono</div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Medium</h2>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Tag size="md" tone="neutral">
            Neutral
          </Tag>
          <Tag size="md" tone="brand">
            Brand
          </Tag>
        </div>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
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
        <Tag size="sm" tone="brand">
          En línea
        </Tag>
        <Tag size="sm" tone="neutral">
          8 semanas
        </Tag>
        <Tag size="sm" tone="neutral" icon={<BagIcon />}>
          Incluye materiales
        </Tag>
      </div>
    </div>
  ),
}
