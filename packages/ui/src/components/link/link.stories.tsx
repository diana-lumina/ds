import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './link'
import { ChevronIcon } from '@workspace/ui/icons'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
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
    tone: {
      control: 'select',
      options: ['standard', 'inverse'],
    },
    external: {
      control: 'boolean',
    },
    icon: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    tone: 'standard',
    href: '#',
    children: 'Ver más',
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Standard</h2>

        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <Link href="#" tone="standard">
              Ver más
            </Link>
            <div style={captionStyle()}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="#" tone="standard" icon={<ChevronIcon />}>
              Ver más
            </Link>
            <div style={captionStyle()}>Con ícono</div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Inverse</h2>

        <div
          style={{
            background: 'var(--color-surface-brand-strong, #333)',
            padding: 24,
            borderRadius: 8,
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Link href="#" tone="inverse">
              Ver más
            </Link>
            <div style={{ ...captionStyle(), color: 'rgba(255,255,255,0.6)' }}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="#" tone="inverse" icon={<ChevronIcon />}>
              Ver más
            </Link>
            <div style={{ ...captionStyle(), color: 'rgba(255,255,255,0.6)' }}>Con ícono</div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  render: () => (
    <p
      style={{
        fontFamily: 'sans-serif',
        fontSize: 14,
        lineHeight: 1.6,
        color: '#333',
        maxWidth: 420,
        margin: 0,
      }}
    >
      Consulta el calendario académico o{' '}
      <Link href="#" tone="standard" icon={<ChevronIcon />}>
        descarga el programa
      </Link>{' '}
      del curso antes de inscribirte.
    </p>
  ),
}
