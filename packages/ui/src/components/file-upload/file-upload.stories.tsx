import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FileUpload, type FileUploadEntry, type FileUploadTone, type FileUploadType } from './file-upload'

type FileUploadStoryArgs = {
  type: FileUploadType
  tone: FileUploadTone
  disabled: boolean
  primaryText: string
  secondaryText: string
  actionLabel: string
  supportingText: string
}

const meta = {
  title: 'Components/Inputs/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Carga de archivos: type `button` | `drag-zone` × tone standard | inverse. Button: primary, secondary, Button secondary y supporting. Drag-zone: primary, secondary y FileUploadDropZone.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['button', 'drag-zone'],
      table: { defaultValue: { summary: 'button' } },
    },
    tone: {
      control: 'radio',
      options: ['standard', 'inverse'],
      table: { defaultValue: { summary: 'standard' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    primaryText: { control: 'text' },
    secondaryText: { control: 'text' },
    actionLabel: { control: 'text' },
    supportingText: { control: 'text' },
  },
} satisfies Meta<FileUploadStoryArgs>

export default meta
type Story = StoryObj<FileUploadStoryArgs>

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

const inverseDecorator: Story['decorators'] = [
  (Story) => (
    <div
      style={{
        background: 'var(--color-surface-brand-strong, #231f20)',
        padding: 24,
        borderRadius: 8,
        display: 'inline-block',
      }}
    >
      <Story />
    </div>
  ),
]

const specimenItems: FileUploadEntry[] = [
  {
    id: '1',
    primaryText: 'syllabus.pdf',
    secondaryText: '1.2 MB',
    status: 'selected',
  },
]

function Specimen(args: Partial<FileUploadStoryArgs> & { items?: FileUploadEntry[] }) {
  return (
    <FileUpload
      type={args.type}
      tone={args.tone}
      disabled={args.disabled}
      primaryText={args.primaryText ?? 'Sube tu comprobante'}
      secondaryText={args.secondaryText ?? 'PDF o JPG · máximo 10 MB'}
      actionLabel={args.actionLabel ?? 'Seleccionar archivo'}
      supportingText={args.supportingText ?? 'Puedes adjuntar más de un archivo'}
      items={args.items}
    />
  )
}

export const Playground: Story = {
  args: {
    type: 'button',
    tone: 'standard',
    disabled: false,
    primaryText: 'Sube tu comprobante',
    secondaryText: 'PDF o JPG · máximo 10 MB',
    actionLabel: 'Seleccionar archivo',
    supportingText: 'Puedes adjuntar más de un archivo',
  },
  render: (args) => <Specimen {...args} />,
}

export const Button: Story = {
  name: 'Type: button',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUpload
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
  supportingText="Puedes adjuntar más de un archivo"
/>`,
      },
    },
  },
  render: () => <Specimen type="button" />,
}

export const DragZone: Story = {
  name: 'Type: drag-zone',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUpload
  type="drag-zone"
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>`,
      },
    },
  },
  render: () => <Specimen type="drag-zone" items={specimenItems} />,
}

export const Inverse: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUpload
  tone="inverse"
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
  supportingText="Puedes adjuntar más de un archivo"
/>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />,
}

export const WithItems: Story = {
  name: 'Con FileUploadItem',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUpload
  primaryText="Sube tu comprobante"
  secondaryText="PDF o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
  supportingText="Puedes adjuntar más de un archivo"
  items={[{ id: '1', primaryText: 'syllabus.pdf', secondaryText: '1.2 MB' }]}
/>`,
      },
    },
  },
  render: () => <Specimen items={specimenItems} />,
}

export const AllTypes: Story = {
  name: 'Types & tones',
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
      verticalAlign: 'top',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
    }
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>Type</th>
              <th style={th}>Standard</th>
              <th style={th}>Inverse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>button</td>
              <td style={td}>
                <Specimen type="button" items={specimenItems} />
              </td>
              <td style={tdInverse}>
                <Specimen type="button" tone="inverse" items={specimenItems} />
              </td>
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>drag-zone</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <Specimen type="drag-zone" items={specimenItems} />
              </td>
              <td style={{ ...tdInverse, borderBottom: 'none' }}>
                <Specimen type="drag-zone" tone="inverse" items={specimenItems} />
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
  parameters: {
    docs: {
      canvas: { sourceState: 'none' },
      description: {
        story: 'Elige un archivo para ver FileUploadItem debajo. Eliminar lo quita de la lista.',
      },
    },
  },
  render: function InContextStory() {
    const [count, setCount] = useState(0)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <FileUpload
          primaryText="Sube tu comprobante"
          secondaryText="PDF o JPG · máximo 10 MB"
          actionLabel="Seleccionar archivo"
          supportingText="Puedes adjuntar más de un archivo"
          onFilesChange={(next) => setCount(next.length)}
        />
        <p
          style={{
            margin: 0,
            fontFamily: 'monospace',
            fontSize: 12,
            color: '#888',
          }}
        >
          Archivos: {count}
        </p>
      </div>
    )
  },
}
