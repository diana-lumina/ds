import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './checkbox'
import styles from './checkbox.module.css'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form Controls/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Control de selección binaria o tri-state (indeterminate) para opciones independientes entre sí. Expone únicamente los estados visuales del checkbox; el label y el texto de ayuda pertenecen al patrón consumidor, no al componente. Tamaño visual único: 20px',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'select',
      options: [false, true, 'indeterminate'],
      description:
        'Value: unchecked (false) · checked (true) · mixed (indeterminate). Mixed solo para grupo parcialmente seleccionado.',
      table: {
        type: { summary: 'boolean | "indeterminate"' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled no recibe interacción',
      table: { defaultValue: { summary: 'false' } },
    },
    'aria-label': {
      control: 'text',
      description: 'Nombre accesible cuando el label visible está en el patrón consumidor',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

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

export const Playground: Story = {
  args: { checked: false, 'aria-label': 'Opción' },
}

export const Unchecked: Story = {
  parameters: showCode,
  args: { checked: false, 'aria-label': 'Opción' },
}

export const Checked: Story = {
  parameters: showCode,
  args: { checked: true, 'aria-label': 'Opción' },
}

export const Mixed: Story = {
  name: 'Mixed',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Usar mixed solo cuando representa un grupo parcialmente seleccionado. Se expone como aria-checked="mixed" (checked="indeterminate").',
      },
    },
  },
  args: { checked: 'indeterminate', 'aria-label': 'Seleccionar todo' },
}

export const Disabled: Story = {
  parameters: showCode,
  args: { checked: true, disabled: true, 'aria-label': 'Opción' },
}


export const AllStates: Story = {
  name: 'Value & states',
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
      {
        label: 'Unchecked',
        value: false as const,
      },
      {
        label: 'Checked',
        value: true as const,
      },
      {
        label: 'Mixed',
        value: 'indeterminate' as const,
      },
    ]

    return (
      <div style={{ padding: 8 }}>
     
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Value</th>
              <th style={th}>Default</th>
              <th style={th}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, value }) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                <td style={td}>
                  <Checkbox aria-label={label} checked={value} />
                </td>
                <td style={td}>
                  <Checkbox aria-label={`${label} disabled`} checked={value} disabled />
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
 * Uso mínimo: opciones independientes + mixed en grupo parcialmente seleccionado.
 * Label pertenece al patrón consumidor.
 */
export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [notifications, setNotifications] = useState(true)
    const [marketing, setMarketing] = useState(false)

    const allChecked =
      notifications && marketing
        ? true
        : !notifications && !marketing
          ? false
          : 'indeterminate'

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
          <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600 }}>Preferencias de correo</h3>
          <p style={{ margin: 0, fontSize: 13, color: '#666' }}>
            Opciones independientes. “Seleccionar todo” usa mixed cuando el grupo está parcial.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label className={styles.field}>
            <Checkbox
              id="cb-all"
              checked={allChecked}
              onCheckedChange={(value) => {
                const next = value === true
                setNotifications(next)
                setMarketing(next)
              }}
            />
            <span className={styles.label}>Seleccionar todo</span>
          </label>
          <label className={styles.field} style={{ paddingLeft: 8 }}>
            <Checkbox
              id="cb-notifications"
              checked={notifications}
              onCheckedChange={(value) => setNotifications(value === true)}
            />
            <span className={styles.label}>Notificaciones del curso</span>
          </label>
          <label className={styles.field} style={{ paddingLeft: 8 }}>
            <Checkbox
              id="cb-marketing"
              checked={marketing}
              onCheckedChange={(value) => setMarketing(value === true)}
            />
            <span className={styles.label}>Novedades y marketing</span>
          </label>
        </div>
      </div>
    )
  },
}
