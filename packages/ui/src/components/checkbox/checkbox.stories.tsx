import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './checkbox'
import styles from './checkbox.module.css'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    checked: {
      control: 'select',
      options: [false, true, 'indeterminate'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    checked: true,
    disabled: false,
    'aria-label': 'Aceptar',
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 12 }}>Unchecked</h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <Checkbox aria-label="Unchecked" checked={false} />
            <div style={captionStyle()}>default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Checkbox aria-label="Unchecked disabled" checked={false} disabled />
            <div style={captionStyle()}>disabled</div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 12 }}>Checked</h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <Checkbox aria-label="Checked" checked />
            <div style={captionStyle()}>default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Checkbox aria-label="Checked disabled" checked disabled />
            <div style={captionStyle()}>disabled</div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 12 }}>Mixed</h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <Checkbox aria-label="Mixed" checked="indeterminate" />
            <div style={captionStyle()}>default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Checkbox aria-label="Mixed disabled" checked="indeterminate" disabled />
            <div style={captionStyle()}>disabled</div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
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
            Marca las opciones que quieres recibir. “Seleccionar todo” muestra el estado mixed.
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
            <span className={styles.label}>Seleccionar todo (mixed)</span>
          </label>
          <label className={styles.field} style={{ paddingLeft: 8 }}>
            <Checkbox
              id="cb-notifications"
              checked={notifications}
              onCheckedChange={(value) => setNotifications(value === true)}
            />
            <span className={styles.label}>Notificaciones del curso (checked)</span>
          </label>
          <label className={styles.field} style={{ paddingLeft: 8 }}>
            <Checkbox
              id="cb-marketing"
              checked={marketing}
              onCheckedChange={(value) => setMarketing(value === true)}
            />
            <span className={styles.label}>Novedades y marketing (unchecked)</span>
          </label>
        </div>
      </div>
    )
  },
}
