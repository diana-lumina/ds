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
          'Campo de formulario: label, TextInput / TextArea / Select / PhoneInput y supporting text. Appearances outlined y underline; estados default, error y disabled.',
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
    appearance: {
      control: 'radio',
      options: ['outlined', 'underline'],
      description: 'Apariencia del control: outlined o underline',
      table: { defaultValue: { summary: 'outlined' } },
    },
    control: {
      control: 'radio',
      options: ['input', 'textarea', 'select', 'phone'],
      description: 'Control interno: input, textarea, select o phone',
      table: { defaultValue: { summary: 'input' } },
    },
    multiline: {
      control: 'boolean',
      description: 'Usa TextArea en lugar de TextInput',
      table: { defaultValue: { summary: 'false' } },
    },
    error: {
      control: 'boolean',
      description: 'Error: supporting text + control en estado error',
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

const campusOptions = [
  { value: 'mty', label: 'Monterrey' },
  { value: 'cdmx', label: 'Ciudad de México' },
  { value: 'gdl', label: 'Guadalajara' },
]

export const Playground: Story = {
  args: {
    label: 'Correo',
    supportingText: 'Usa tu correo institucional',
    placeholder: 'nombre@tec.mx',
    appearance: 'outlined',
    control: 'input',
    multiline: false,
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

export const Underline: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FormField
  appearance="underline"
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
        appearance="underline"
        label="Correo"
        supportingText="Usa tu correo institucional"
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

export const TextArea: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FormField
  multiline
  label="Comentario"
  supportingText="Máximo 500 caracteres"
  placeholder="Escribe tu comentario"
/>`,
      },
    },
  },
  render: () => (
    <div style={fieldFrame}>
      <FormField
        multiline
        label="Comentario"
        supportingText="Máximo 500 caracteres"
        placeholder="Escribe tu comentario"
      />
    </div>
  ),
}

export const Select: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FormField
  control="select"
  label="Campus"
  supportingText="Lo define tu expediente"
  placeholder="Elige un campus"
  options={[
    { value: 'mty', label: 'Monterrey' },
    { value: 'cdmx', label: 'Ciudad de México' },
  ]}
/>`,
      },
    },
  },
  render: () => (
    <div style={fieldFrame}>
      <FormField
        control="select"
        label="Campus"
        supportingText="Lo define tu expediente"
        placeholder="Elige un campus"
        options={campusOptions}
      />
    </div>
  ),
}

export const Phone: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FormField
  control="phone"
  label="Teléfono"
  supportingText="Incluye lada"
  placeholder="Número telefónico"
/>`,
      },
    },
  },
  render: () => (
    <div style={fieldFrame}>
      <FormField
        control="phone"
        label="Teléfono"
        supportingText="Incluye lada"
        placeholder="Número telefónico"
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
    const section: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 12,
      color: '#111',
      fontWeight: 700,
      textAlign: 'left',
      padding: '24px 0 8px',
      borderBottom: '1px solid #ddd',
    }

    const pair = (
      label: string,
      outlined: React.ReactNode,
      underline: React.ReactNode,
    ) => (
      <tr>
        <td style={rowLabel}>{label}</td>
        <td style={td}>{outlined}</td>
        <td style={td}>{underline}</td>
      </tr>
    )

    const heading = (title: string) => (
      <tr>
        <td colSpan={3} style={section}>
          {title}
        </td>
      </tr>
    )

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>State</th>
              <th style={th}>Outlined</th>
              <th style={th}>Underline</th>
            </tr>
          </thead>
          <tbody>
            {heading('Text Input')}
            {pair(
              'Default',
              <FormField
                label="Correo"
                supportingText="Usa tu correo institucional"
                placeholder="nombre@tec.mx"
              />,
              <FormField
                appearance="underline"
                label="Correo"
                supportingText="Usa tu correo institucional"
                placeholder="nombre@tec.mx"
              />,
            )}
            {pair(
              'Error',
              <FormField
                label="Correo"
                error
                supportingText="Formato inválido"
                placeholder="nombre@tec.mx"
              />,
              <FormField
                appearance="underline"
                label="Correo"
                error
                supportingText="Formato inválido"
                placeholder="nombre@tec.mx"
              />,
            )}
            {pair(
              'Disabled',
              <FormField
                label="Correo"
                disabled
                supportingText="Usa tu correo institucional"
                placeholder="nombre@tec.mx"
              />,
              <FormField
                appearance="underline"
                label="Correo"
                disabled
                supportingText="Usa tu correo institucional"
                placeholder="nombre@tec.mx"
              />,
            )}

            {heading('Phone Input')}
            {pair(
              'Default',
              <FormField
                control="phone"
                label="Teléfono"
                supportingText="Incluye lada"
                placeholder="Número telefónico"
              />,
              <FormField
                control="phone"
                appearance="underline"
                label="Teléfono"
                supportingText="Incluye lada"
                placeholder="Número telefónico"
              />,
            )}
            {pair(
              'Error',
              <FormField
                control="phone"
                label="Teléfono"
                error
                supportingText="Ingresa un número válido"
                placeholder="Número telefónico"
              />,
              <FormField
                control="phone"
                appearance="underline"
                label="Teléfono"
                error
                supportingText="Ingresa un número válido"
                placeholder="Número telefónico"
              />,
            )}
            {pair(
              'Disabled',
              <FormField
                control="phone"
                label="Teléfono"
                disabled
                supportingText="Incluye lada"
                placeholder="Número telefónico"
              />,
              <FormField
                control="phone"
                appearance="underline"
                label="Teléfono"
                disabled
                supportingText="Incluye lada"
                placeholder="Número telefónico"
              />,
            )}

            {heading('Text Area')}
            {pair(
              'Default',
              <FormField
                multiline
                label="Comentario"
                supportingText="Máximo 500 caracteres"
                placeholder="Escribe tu comentario"
              />,
              <FormField
                multiline
                appearance="underline"
                label="Comentario"
                supportingText="Máximo 500 caracteres"
                placeholder="Escribe tu comentario"
              />,
            )}
            {pair(
              'Error',
              <FormField
                multiline
                label="Comentario"
                error
                supportingText="El comentario es obligatorio"
                placeholder="Escribe tu comentario"
              />,
              <FormField
                multiline
                appearance="underline"
                label="Comentario"
                error
                supportingText="El comentario es obligatorio"
                placeholder="Escribe tu comentario"
              />,
            )}
            {pair(
              'Disabled',
              <FormField
                multiline
                label="Comentario"
                disabled
                supportingText="Máximo 500 caracteres"
                placeholder="Escribe tu comentario"
              />,
              <FormField
                multiline
                appearance="underline"
                label="Comentario"
                disabled
                supportingText="Máximo 500 caracteres"
                placeholder="Escribe tu comentario"
              />,
            )}

            {heading('Select')}
            {pair(
              'Default',
              <FormField
                control="select"
                label="Campus"
                supportingText="Lo define tu expediente"
                placeholder="Elige un campus"
                options={campusOptions}
              />,
              <FormField
                control="select"
                appearance="underline"
                label="Campus"
                supportingText="Lo define tu expediente"
                placeholder="Elige un campus"
                options={campusOptions}
              />,
            )}
            {pair(
              'Error',
              <FormField
                control="select"
                label="Campus"
                error
                supportingText="Selecciona un campus"
                placeholder="Elige un campus"
                options={campusOptions}
              />,
              <FormField
                control="select"
                appearance="underline"
                label="Campus"
                error
                supportingText="Selecciona un campus"
                placeholder="Elige un campus"
                options={campusOptions}
              />,
            )}
            {pair(
              'Disabled',
              <FormField
                control="select"
                label="Campus"
                disabled
                supportingText="Lo define tu expediente"
                placeholder="Elige un campus"
                options={campusOptions}
              />,
              <FormField
                control="select"
                appearance="underline"
                label="Campus"
                disabled
                supportingText="Lo define tu expediente"
                placeholder="Elige un campus"
                options={campusOptions}
              />,
            )}
          </tbody>
        </table>
      </div>
    )
  },
}
