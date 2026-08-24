import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, type TextAreaAppearance, type TextAreaTone } from './text-area'

type TextAreaStoryArgs = {
  appearance: TextAreaAppearance
  tone: TextAreaTone
  error: boolean
  disabled: boolean
  placeholder: string
}

const meta = {
  title: 'Components/Internal Building Blocks/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Control de área de texto interno: outlined | underline × standard | inverse × default | error | disabled.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['outlined', 'underline'],
      description: 'outlined (caja) o underline',
      table: { defaultValue: { summary: 'outlined' } },
    },
    tone: {
      control: 'radio',
      options: ['standard', 'inverse'],
      description: 'standard sobre superficies claras · inverse sobre oscuras / brand.',
      table: { defaultValue: { summary: 'standard' } },
    },
    error: {
      control: 'boolean',
      description: 'Error: borde danger. Disabled gana sobre error.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled: valor muted; no recibe interacción.',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<TextAreaStoryArgs>

export default meta
type Story = StoryObj<TextAreaStoryArgs>

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

const fieldFrame: React.CSSProperties = { maxWidth: 360 }

function Specimen({
  appearance = 'outlined',
  tone = 'standard',
  error = false,
  disabled = false,
  placeholder = 'Escribe un comentario',
}: Partial<TextAreaStoryArgs>) {
  return (
    <div style={fieldFrame}>
      <TextArea
        appearance={appearance}
        tone={tone}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        aria-label="Comentario"
      />
    </div>
  )
}

const inverseDecorator: Story['decorators'] = [
  (Story) => (
    <div
      style={{
        background: 'var(--color-surface-brand-strong, #231f20)',
        padding: 24,
        borderRadius: 8,
        display: 'inline-block',
        minWidth: 360,
      }}
    >
      <Story />
    </div>
  ),
]

export const Playground: Story = {
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    placeholder: 'Escribe un comentario',
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TextArea aria-label="Comentario" placeholder="Escribe un comentario" />`,
      },
    },
  },
  render: () => <Specimen />,
}

export const Inverse: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TextArea
  tone="inverse"
  aria-label="Comentario"
  placeholder="Escribe un comentario"
/>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />,
}

export const Underline: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TextArea
  appearance="underline"
  aria-label="Comentario"
  placeholder="Escribe un comentario"
/>`,
      },
    },
  },
  render: () => <Specimen appearance="underline" />,
}

export const Error: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TextArea error aria-label="Comentario" placeholder="Escribe un comentario" />`,
      },
    },
  },
  render: () => <Specimen error />,
}

export const Disabled: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TextArea disabled aria-label="Comentario" placeholder="Escribe un comentario" />`,
      },
    },
  },
  render: () => <Specimen disabled />,
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
      textAlign: 'left',
      padding: '0 16px 12px',
      borderBottom: '1px solid #eee',
    }
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'top',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap',
    }
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 240,
    }
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)',
    }

    const states = [
      ['Default', { error: false, disabled: false }],
      ['Error', { error: true, disabled: false }],
      ['Disabled', { error: false, disabled: true }],
    ] as const

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>State</th>
              <th style={th}>Outlined standard</th>
              <th style={th}>Outlined inverse</th>
              <th style={th}>Underline standard</th>
              <th style={th}>Underline inverse</th>
            </tr>
          </thead>
          <tbody>
            {states.map(([label, state]) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                <td style={td}>
                  <Specimen appearance="outlined" tone="standard" {...state} />
                </td>
                <td style={tdInverse}>
                  <Specimen appearance="outlined" tone="inverse" {...state} />
                </td>
                <td style={td}>
                  <Specimen appearance="underline" tone="standard" {...state} />
                </td>
                <td style={tdInverse}>
                  <Specimen appearance="underline" tone="inverse" {...state} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}
