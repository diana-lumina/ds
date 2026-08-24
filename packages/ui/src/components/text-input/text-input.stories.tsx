import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, type TextInputAppearance, type TextInputTone } from './text-input'

type TextInputStoryArgs = {
  appearance: TextInputAppearance
  tone: TextInputTone
  error: boolean
  disabled: boolean
  embedded: boolean
  placeholder: string
}

const meta = {
  title: 'Components/Internal Building Blocks/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Control de texto interno: outlined | underline × standard | inverse × default | error | disabled. `embedded` es la misma receta (outlined o underline, standard o inverse) sin background ni borde.',
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
    embedded: {
      control: 'boolean',
      description: 'Sin cromo propio; el contenedor compuesto pinta el borde.',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<TextInputStoryArgs>

export default meta
type Story = StoryObj<TextInputStoryArgs>

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
  embedded = false,
  placeholder = 'nombre@tec.mx',
}: Partial<TextInputStoryArgs>) {
  return (
    <div style={fieldFrame}>
      <TextInput
        appearance={appearance}
        tone={tone}
        error={error}
        disabled={disabled}
        embedded={embedded}
        placeholder={placeholder}
        aria-label="Correo"
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
    embedded: false,
    placeholder: 'nombre@tec.mx',
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TextInput aria-label="Correo" placeholder="nombre@tec.mx" />`,
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
        code: `<TextInput
  appearance="outlined"
  tone="inverse"
  aria-label="Correo"
  placeholder="nombre@tec.mx"
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
        code: `<TextInput
  appearance="underline"
  aria-label="Correo"
  placeholder="nombre@tec.mx"
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
        code: `<TextInput error aria-label="Correo" placeholder="nombre@tec.mx" />`,
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
        code: `<TextInput disabled aria-label="Correo" placeholder="nombre@tec.mx" />`,
      },
    },
  },
  render: () => <Specimen disabled />,
}

export const Embedded: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      description: {
        story:
          'Composition embedded: misma receta que outlined-default-standard, sin background ni borde. El contenedor compuesto pinta el cromo.',
      },
      source: {
        code: `<TextInput embedded aria-label="Correo" placeholder="nombre@tec.mx" />`,
      },
    },
  },
  render: () => <Specimen embedded />,
}

export const EmbeddedInverse: Story = {
  name: 'Embedded inverse',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      description: {
        story:
          'Composition embedded inverse: misma receta que outlined-default-inverse, sin background ni borde. Conserva color de value y placeholder inverse.',
      },
      source: {
        code: `<TextInput
  embedded
  tone="inverse"
  aria-label="Correo"
  placeholder="nombre@tec.mx"
/>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen embedded tone="inverse" />,
}

export const EmbeddedDisabled: Story = {
  name: 'Embedded disabled',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      description: {
        story:
          'Composition embedded disabled: sin background ni borde (el contenedor compuesto pinta el cromo). Conserva el color de value disabled.',
      },
      source: {
        code: `<TextInput
  embedded
  disabled
  aria-label="Correo"
  placeholder="nombre@tec.mx"
/>`,
      },
    },
  },
  render: () => <Specimen embedded disabled />,
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
    const section: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 12,
      color: '#111',
      fontWeight: 700,
      textAlign: 'left',
      padding: '24px 0 8px',
      borderBottom: '1px solid #ddd',
    }

    const states = [
      ['Default', { error: false, disabled: false }],
      ['Error', { error: true, disabled: false }],
      ['Disabled', { error: false, disabled: true }],
    ] as const

    const heading = (title: string) => (
      <tr>
        <td colSpan={5} style={section}>
          {title}
        </td>
      </tr>
    )

    const rows = (embedded: boolean) =>
      states.map(([label, state]) => (
        <tr key={`${embedded ? 'embedded' : 'chrome'}-${label}`}>
          <td style={rowLabel}>{label}</td>
          <td style={td}>
            <Specimen appearance="outlined" tone="standard" embedded={embedded} {...state} />
          </td>
          <td style={tdInverse}>
            <Specimen appearance="outlined" tone="inverse" embedded={embedded} {...state} />
          </td>
          <td style={td}>
            <Specimen appearance="underline" tone="standard" embedded={embedded} {...state} />
          </td>
          <td style={tdInverse}>
            <Specimen appearance="underline" tone="inverse" embedded={embedded} {...state} />
          </td>
        </tr>
      ))

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
            {heading('Default')}
            {rows(false)}
            {heading('Embedded')}
            {rows(true)}
          </tbody>
        </table>
      </div>
    )
  },
}
