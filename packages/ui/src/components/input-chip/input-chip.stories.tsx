import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { InputChip } from './input-chip'
import { BagIcon } from '@workspace/ui/icons'

type InputChipStoryArgs = Omit<React.ComponentProps<typeof InputChip>, 'icon' | 'onClose'> & {
  showIcon: boolean
}

const meta = {
  title: 'Components/InputChip',
  // Cast: story args omiten `icon`/`onClose` y usan `showIcon` + render.
  component: InputChip as unknown as React.ComponentType<InputChipStoryArgs>,
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
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    closeDisabled: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
      description: 'Muestra el ícono a la izquierda',
    },
    children: {
      control: 'text',
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<InputChipStoryArgs>

export default meta
type Story = StoryObj<InputChipStoryArgs>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    size: 'sm',
    children: 'Etiqueta',
    closeLabel: 'Quitar etiqueta',
    closeDisabled: false,
    showIcon: false,
  },
  render: ({ showIcon, ...args }) => (
    <InputChip
      {...args}
      icon={showIcon ? <BagIcon /> : undefined}
      onClose={() => {}}
    />
  ),
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Small</h2>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <InputChip size="sm" onClose={() => {}} closeLabel="Quitar etiqueta">
              Etiqueta
            </InputChip>
            <div style={captionStyle()}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <InputChip size="sm" icon={<BagIcon />} onClose={() => {}} closeLabel="Quitar etiqueta">
              Etiqueta
            </InputChip>
            <div style={captionStyle()}>Con ícono</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <InputChip size="sm" onClose={() => {}} closeDisabled closeLabel="Quitar etiqueta">
              Etiqueta
            </InputChip>
            <div style={captionStyle()}>Cerrar deshabilitado</div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Medium</h2>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <InputChip size="md" onClose={() => {}} closeLabel="Quitar etiqueta">
            Etiqueta
          </InputChip>
          <InputChip size="md" icon={<BagIcon />} onClose={() => {}} closeLabel="Quitar etiqueta">
            Etiqueta
          </InputChip>
        </div>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  render: () => {
    const [tags, setTags] = React.useState(['UX Research', 'Producto', 'Figma'])

    return (
      <div
        style={{
          fontFamily: 'sans-serif',
          maxWidth: 420,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <label style={{ fontSize: 13, color: '#666' }}>Etiquetas del curso</label>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            padding: 12,
            border: '1px solid #e5e5e5',
            borderRadius: 8,
            minHeight: 48,
            alignItems: 'center',
          }}
        >
          {tags.map((tag) => (
            <InputChip
              key={tag}
              size="sm"
              closeLabel={`Quitar ${tag}`}
              onClose={() => setTags((prev) => prev.filter((t) => t !== tag))}
            >
              {tag}
            </InputChip>
          ))}
          {tags.length === 0 && (
            <span style={{ fontSize: 13, color: '#999' }}>Sin etiquetas</span>
          )}
        </div>
      </div>
    )
  },
}
