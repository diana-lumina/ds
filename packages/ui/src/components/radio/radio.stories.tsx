import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Radio, RadioGroup } from './radio'
import styles from './radio.module.css'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

function PlaygroundRadios({ disabled = false }: { disabled?: boolean }) {
  const [value, setValue] = useState('a')
  return (
    <RadioGroup value={value} onValueChange={setValue} aria-label="Opciones">
      <label className={styles.field}>
        <Radio value="a" id="radio-a" disabled={disabled} />
        <span className={styles.label}>Opción A</span>
      </label>
      <label className={styles.field}>
        <Radio value="b" id="radio-b" disabled={disabled} />
        <span className={styles.label}>Opción B</span>
      </label>
      <label className={styles.field}>
        <Radio value="c" id="radio-c" disabled={disabled} />
        <span className={styles.label}>Opción C</span>
      </label>
    </RadioGroup>
  )
}

export const Playground: Story = {
  args: {
    disabled: false,
  },
  render: ({ disabled }) => <PlaygroundRadios disabled={disabled} />,
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 12 }}>Unselected</h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <RadioGroup aria-label="Unselected default">
              <Radio value="u1" />
            </RadioGroup>
            <div style={captionStyle()}>default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <RadioGroup aria-label="Unselected disabled">
              <Radio value="u2" disabled />
            </RadioGroup>
            <div style={captionStyle()}>disabled</div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 12 }}>Selected</h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <RadioGroup value="s1" aria-label="Selected default">
              <Radio value="s1" />
            </RadioGroup>
            <div style={captionStyle()}>default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <RadioGroup value="s2" aria-label="Selected disabled">
              <Radio value="s2" disabled />
            </RadioGroup>
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
            ¿Cómo prefieres que te contactemos?
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
