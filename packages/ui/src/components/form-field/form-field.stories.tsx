import type { Meta, StoryObj } from '@storybook/react'
import { FormField } from './form-field'

const meta: Meta<typeof FormField> = {
  title: 'Components/Form Controls/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Campo de formulario: label, control y supporting text opcional. Estados default, error y disabled: error/disabled sólo cambian el color del supporting text. El control es un input nativo provisional (aún no hay Text Field / input como componente).',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label visible',
    },
    supportingText: {
      control: 'text',
      description: 'Texto de ayuda o error',
    },
    placeholder: {
      control: 'text',
    },
    error: {
      control: 'boolean',
      description: 'Error: sólo cambia el color del supporting text',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled no recibe interacción',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof FormField>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const fieldFrame: React.CSSProperties = { maxWidth: 360 }

export const Playground: Story = {
  args: {
    label: 'Correo',
    supportingText: 'Usa tu correo institucional',
    placeholder: 'nombre@tec.mx',
    error: false,
    disabled: false,
  },
  render: (args) => (
    <div style={fieldFrame}>
      <FormField {...args} />
    </div>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FormField
  label="Correo"
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`,
      },
    },
  },
  render: () => (
    <div style={fieldFrame}>
      <FormField
        label="Correo"
        supportingText="Usa tu correo institucional"
        placeholder="nombre@tec.mx"
      />
    </div>
  ),
}

export const Error: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FormField
  label="Correo"
  error
  supportingText="Formato inválido"
  placeholder="nombre@tec.mx"
/>`,
      },
    },
  },
  render: () => (
    <div style={fieldFrame}>
      <FormField
        label="Correo"
        error
        supportingText="Formato inválido"
        placeholder="nombre@tec.mx"
      />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FormField
  label="Correo"
  disabled
  supportingText="Usa tu correo institucional"
  placeholder="nombre@tec.mx"
/>`,
      },
    },
  },
  render: () => (
    <div style={fieldFrame}>
      <FormField
        label="Correo"
        disabled
        supportingText="Usa tu correo institucional"
        placeholder="nombre@tec.mx"
      />
    </div>
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
      minWidth: 280,
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>State</th>
              <th style={th}>FormField</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Default</td>
              <td style={td}>
                <FormField
                  label="Correo"
                  supportingText="Usa tu correo institucional"
                  placeholder="nombre@tec.mx"
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Error</td>
              <td style={td}>
                <FormField
                  label="Correo"
                  error
                  supportingText="Formato inválido"
                  placeholder="nombre@tec.mx"
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Disabled</td>
              <td style={td}>
                <FormField
                  label="Correo"
                  disabled
                  supportingText="Usa tu correo institucional"
                  placeholder="nombre@tec.mx"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
