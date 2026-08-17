import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from './switch'
import styles from './switch.module.css'

const meta: Meta<typeof Switch> = {
  title: 'Components/Form Controls/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Descripción pendiente.',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'unchecked (false) · checked (true)',
      table: { defaultValue: { summary: 'false' } },
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
type Story = StoryObj<typeof Switch>

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

export const Disabled: Story = {
  parameters: showCode,
  args: { checked: false, disabled: true, 'aria-label': 'Opción' },
}

export const AllStates: Story = {
  name: 'Checked & states',
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
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Value</th>
              <th style={th}>Default</th>
              <th style={th}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Unchecked</td>
              <td style={td}>
                <Switch aria-label="Unchecked" checked={false} />
              </td>
              <td style={td}>
                <Switch aria-label="Unchecked disabled" checked={false} disabled />
              </td>
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>Checked</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <Switch aria-label="Checked" checked />
              </td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <Switch aria-label="Checked disabled" checked disabled />
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
  parameters: hideCode,
  render: () => {
    const [notifications, setNotifications] = useState(true)
    const [marketing, setMarketing] = useState(false)

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
          <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600 }}>Preferencias</h3>
          <p style={{ margin: 0, fontSize: 13, color: '#666' }}>
            El label vive en el patrón consumidor; Switch solo expone on/off.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label className={styles.field}>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
              aria-label="Notificaciones del curso"
            />
            <span className={styles.label}>Notificaciones del curso</span>
          </label>
          <label className={styles.field}>
            <Switch
              checked={marketing}
              onCheckedChange={setMarketing}
              aria-label="Novedades y marketing"
            />
            <span className={styles.label}>Novedades y marketing</span>
          </label>
          <label className={styles.field}>
            <Switch checked disabled aria-label="Sincronización automática" />
            <span className={styles.label}>Sincronización automática</span>
          </label>
        </div>
      </div>
    )
  },
}
