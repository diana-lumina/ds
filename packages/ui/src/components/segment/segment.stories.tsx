import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { Segment } from './segment'

const meta: Meta<typeof Segment> = {
  title: 'Components/Segment',
  component: Segment,
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
      options: ['sm', 'md', 'lg'],
    },
    selected: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Segment>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

function PlaygroundSegment(args: React.ComponentProps<typeof Segment>) {
  const { selected: selectedArg = false, ...rest } = args
  const [selected, setSelected] = useState(selectedArg)

  useEffect(() => {
    setSelected(selectedArg)
  }, [selectedArg])

  return <Segment {...rest} selected={selected} onSelectedChange={setSelected} />
}

export const Playground: Story = {
  render: (args) => <PlaygroundSegment {...args} />,
  args: {
    size: 'sm',
    selected: false,
    children: 'Opción',
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>
            {size === 'sm' ? 'Small' : size === 'md' ? 'Medium' : 'Large'}
          </h2>

          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <Segment size={size} selected={false}>
                Opción
              </Segment>
              <div style={captionStyle()}>Unselected</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Segment size={size} selected>
                Opción
              </Segment>
              <div style={captionStyle()}>Selected</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Segment size={size} disabled>
                Opción
              </Segment>
              <div style={captionStyle()}>Disabled (unselected)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Segment size={size} selected disabled>
                Opción
              </Segment>
              <div style={captionStyle()}>Disabled (selected)</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  render: () => {
    const [view, setView] = useState<'lista' | 'cuadricula'>('lista')

    return (
      <div
        style={{
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 420,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Mis cursos</span>
          <div style={{ display: 'flex', gap: 4 }}>
            <Segment
              size="sm"
              selected={view === 'lista'}
              onSelectedChange={(selected) => selected && setView('lista')}
            >
              Lista
            </Segment>
            <Segment
              size="sm"
              selected={view === 'cuadricula'}
              onSelectedChange={(selected) => selected && setView('cuadricula')}
            >
              Cuadrícula
            </Segment>
          </div>
        </div>
        <div style={{ fontSize: 13, color: '#666' }}>
          Vista actual: {view === 'lista' ? 'Lista' : 'Cuadrícula'}
        </div>
      </div>
    )
  },
}