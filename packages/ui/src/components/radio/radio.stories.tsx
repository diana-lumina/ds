import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Radio, RadioGroup } from './radio'
import styles from './radio.module.css'

type RadioStoryArgs = {
  selected: boolean
  disabled: boolean
}

const meta = {
  title: 'Components/Form Controls/Radio',
  component: Radio as unknown as React.ComponentType<RadioStoryArgs>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Selección exclusiva de una opción dentro de un conjunto. Expone estados visuales; el label y la estructura del grupo pertenecen al patrón consumidor. Tamaño visual único: 20px. Usar siempre dentro de RadioGroup.',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Selected: false · true (controlado por el value del grupo)',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled no recibe interacción',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<RadioStoryArgs>

export default meta
type Story = StoryObj<RadioStoryArgs>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

function Specimen({ selected = false, disabled = false }: RadioStoryArgs) {
  return (
    <RadioGroup value={selected ? 'opt' : undefined} aria-label="Opción">
      <Radio value="opt" aria-label="Opción" disabled={disabled} />
    </RadioGroup>
  )
}

export const Playground: Story = {
  args: {
    selected: false,
    disabled: false,
  },
  render: (args) => <Specimen {...args} />,
}

export const Unselected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<RadioGroup aria-label="Opción">
  <Radio value="opt" aria-label="Opción" />
</RadioGroup>`,
      },
    },
  },
  render: () => (
    <RadioGroup aria-label="Opción">
      <Radio value="opt" aria-label="Opción" />
    </RadioGroup>
  ),
}

export const Selected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<RadioGroup value="opt" aria-label="Opción">
  <Radio value="opt" aria-label="Opción" />
</RadioGroup>`,
      },
    },
  },
  render: () => (
    <RadioGroup value="opt" aria-label="Opción">
      <Radio value="opt" aria-label="Opción" />
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<RadioGroup value="opt" aria-label="Opción">
  <Radio value="opt" aria-label="Opción" disabled />
</RadioGroup>`,
      },
    },
  },
  render: () => (
    <RadioGroup value="opt" aria-label="Opción">
      <Radio value="opt" aria-label="Opción" disabled />
    </RadioGroup>
  ),
}

export const AllStates: Story = {
  name: 'Selected & states',
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

    const rows = [
      { label: 'Unselected', selected: false },
      { label: 'Selected', selected: true },
    ] as const

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Selected</th>
              <th style={th}>Default</th>
              <th style={th}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, selected }) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                <td style={td}>
                  <Specimen selected={selected} disabled={false} />
                </td>
                <td style={td}>
                  <Specimen selected={selected} disabled />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}

/**
 * Uso mínimo: una opción exclusiva dentro de un grupo.
 * Label y estructura del grupo = patrón consumidor.
 */
export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [value, setValue] = useState('email')

    return (
      <div
        style={{
          fontFamily: 'sans-serif',
          maxWidth: 360,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600 }}>Canal de contacto</h3>
          <p style={{ margin: 0, fontSize: 13, color: '#666' }}>
            Elige exactamente una opción. El label está fuera del control base.
          </p>
        </div>
        <RadioGroup value={value} onValueChange={setValue} aria-label="Canal de contacto">
          <label className={styles.field}>
            <Radio value="email" id="contact-email" />
            <span className={styles.label}>Correo electrónico</span>
          </label>
          <label className={styles.field}>
            <Radio value="phone" id="contact-phone" />
            <span className={styles.label}>Teléfono</span>
          </label>
          <label className={styles.field}>
            <Radio value="none" id="contact-none" disabled />
            <span className={styles.label}>No contactar</span>
          </label>
        </RadioGroup>
      </div>
    )
  },
}
