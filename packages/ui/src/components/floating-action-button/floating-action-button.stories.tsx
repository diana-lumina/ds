import type { Meta, StoryObj } from '@storybook/react'
import { FloatingActionButton } from './floating-action-button'
import { BagIcon } from '@workspace/ui/icons'

type FloatingActionButtonStoryArgs = {
  type: 'standard' | 'extended'
  floating: boolean
  disabled: boolean
  /** Texto visible del botón (type=extended). En standard se usa como aria-label. */
  label: string
  icon: React.ReactNode
}

const meta = {
  title: 'Components/FloatingActionButton',
  // Cast: story args usan `label` (no `children`) para mapear standard vs extended.
  component: FloatingActionButton as unknown as React.ComponentType<FloatingActionButtonStoryArgs>,
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
    type: {
      control: 'select',
      options: ['standard', 'extended'],
    },
    floating: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    icon: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<FloatingActionButtonStoryArgs>

export default meta
type Story = StoryObj<FloatingActionButtonStoryArgs>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    type: 'extended',
    floating: false,
    disabled: false,
    label: 'Agregar',
    icon: <BagIcon />,
  },
  render: ({ type, floating, disabled, label, icon }) => {
    if (type === 'extended') {
      return (
        <FloatingActionButton
          type="extended"
          floating={floating}
          disabled={disabled}
          icon={icon}
        >
          {label}
        </FloatingActionButton>
      )
    }

    return (
      <FloatingActionButton
        type="standard"
        floating={floating}
        disabled={disabled}
        icon={icon}
        aria-label={label}
      />
    )
  },
}

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <FloatingActionButton
          type="standard"
          floating={false}
          icon={<BagIcon />}
          aria-label="Agregar"
        />
        <div style={captionStyle()}>standard</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FloatingActionButton
          type="extended"
          floating={false}
          icon={<BagIcon />}
        >
          Agregar
        </FloatingActionButton>
        <div style={captionStyle()}>extended</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FloatingActionButton
          type="standard"
          floating={false}
          icon={<BagIcon />}
          aria-label="Agregar"
          disabled
        />
        <div style={captionStyle()}>standard disabled</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FloatingActionButton
          type="extended"
          floating={false}
          icon={<BagIcon />}
          disabled
        >
          Agregar
        </FloatingActionButton>
        <div style={captionStyle()}>extended disabled</div>
      </div>
    </div>
  ),
}

export const Floating: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div style={{ position: 'relative', minHeight: 320, background: '#f5f5f5' }}>
      <p style={{ fontFamily: 'sans-serif', padding: 24, color: '#666' }}>
        Vista con posición flotante: standard y extended apilados en la esquina
        inferior derecha.
      </p>
      <FloatingActionButton
        type="standard"
        floating
        icon={<BagIcon />}
        aria-label="Agregar"
        style={{ bottom: 96 }}
      />
      <FloatingActionButton type="extended" floating icon={<BagIcon />}>
        Agregar
      </FloatingActionButton>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div
      style={{
        position: 'relative',
        minHeight: 360,
        background: '#f8f8f8',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ padding: 24, maxWidth: 480 }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 600 }}>Mis borradores</h3>
        {['Guía de onboarding', 'Syllabus Q3', 'Checklist de accesibilidad'].map((item) => (
          <div
            key={item}
            style={{
              padding: '12px 0',
              borderBottom: '1px solid #e5e5e5',
              fontSize: 14,
              color: '#333',
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <FloatingActionButton type="extended" floating icon={<BagIcon />}>
        Nuevo borrador
      </FloatingActionButton>
    </div>
  ),
}
