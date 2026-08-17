import type { Meta, StoryObj } from '@storybook/react'
import { FloatingActionButton } from './floating-action-button'
import { ChatCircleIcon } from '@workspace/ui/icons'

type FloatingActionButtonStoryArgs = {
  type: 'standard' | 'extended'
  floating: boolean
  disabled: boolean
  loading: boolean
  /** Extended: label visible. Standard: Accessible label (aria-label). */
  label: string
  icon: React.ReactNode
}

const meta = {
  title: 'Components/Actions/FloatingActionButton',
  component: FloatingActionButton as unknown as React.ComponentType<FloatingActionButtonStoryArgs>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Acción primaria flotante y persistente de alta prominencia. Standard reutiliza Icon Button lg; Extended reutiliza Button primary lg. Speed Dial es un Pattern separado y no forma parte de la API del FAB. Contrato fijo: Size=lg · Hierarchy=primary · Tone=standard.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['standard', 'extended'],
      description: 'standard: icon + accessible label · extended: leading icon + label visible',
      table: { defaultValue: { summary: 'standard' } },
    },
    floating: {
      control: 'boolean',
      description: 'Fija el FAB a la esquina inferior derecha',
      table: { defaultValue: { summary: 'true' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      description: 'Solo extended (vía Button). Standard no expone loading en Icon Button.',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Extended: label visible. Standard: se usa como aria-label',
    },
    icon: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<FloatingActionButtonStoryArgs>

export default meta
type Story = StoryObj<FloatingActionButtonStoryArgs>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    type: 'extended',
    floating: false,
    disabled: false,
    loading: false,
    label: 'Agregar',
    icon: <ChatCircleIcon />,
  },
  render: ({ type, floating, disabled, loading, label, icon }) => {
    if (type === 'extended') {
      return (
        <FloatingActionButton
          type="extended"
          floating={floating}
          disabled={disabled}
          loading={loading}
          icon={icon}
          label={label}
        />
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

/** Casos individuales limpios — código visible para copiar. */
export const Standard: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Standard: Icon Button lg anidado. Requiere Accessible label (aria-label).',
      },
      source: {
        code: `<FloatingActionButton
  type="standard"
  floating={false}
  icon={<ChatCircleIcon />}
  aria-label="Agregar"
/>`,
      },
    },
  },
  render: () => (
    <FloatingActionButton
      type="standard"
      floating={false}
      icon={<ChatCircleIcon />}
      aria-label="Agregar"
    />
  ),
}

export const Extended: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Extended: Button primary lg anidado. El label visible es la fuente preferida del nombre accesible.',
      },
      source: {
        code: `<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
/>`,
      },
    },
  },
  render: () => (
    <FloatingActionButton
      type="extended"
      floating={false}
      icon={<ChatCircleIcon />}
      label="Agregar"
    />
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
  disabled
/>`,
      },
    },
  },
  render: () => (
    <FloatingActionButton
      type="extended"
      floating={false}
      icon={<ChatCircleIcon />}
      label="Agregar"
      disabled
    />
  ),
}

export const Loading: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story: 'Loading aplica al contrato extended (Button).',
      },
      source: {
        code: `<FloatingActionButton
  type="extended"
  floating={false}
  icon={<ChatCircleIcon />}
  label="Agregar"
  loading
/>`,
      },
    },
  },
  render: () => (
    <FloatingActionButton
      type="extended"
      floating={false}
      icon={<ChatCircleIcon />}
      label="Agregar"
      loading
    />
  ),
}


export const AllStates: Story = {
  name: 'Type & states',
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
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Type</th>
              <th style={th}>Default</th>
              <th style={th}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Standard</td>
              <td style={td}>
                <FloatingActionButton
                  type="standard"
                  floating={false}
                  icon={<ChatCircleIcon />}
                  aria-label="Agregar"
                />
              </td>
              <td style={td}>
                <FloatingActionButton
                  type="standard"
                  floating={false}
                  icon={<ChatCircleIcon />}
                  aria-label="Agregar"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Extended</td>
              <td style={td}>
                <FloatingActionButton
                  type="extended"
                  floating={false}
                  icon={<ChatCircleIcon />}
                  label="Agregar"
                />
              </td>
              <td style={td}>
                <FloatingActionButton
                  type="extended"
                  floating={false}
                  icon={<ChatCircleIcon />}
                  label="Agregar"
                  disabled
                />
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
  parameters: {
    ...hideCode,
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
      <FloatingActionButton
        type="extended"
        floating
        icon={<ChatCircleIcon />}
        label="Nuevo borrador"
      />
    </div>
  ),
}
