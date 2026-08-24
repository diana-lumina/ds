import type { Meta, StoryObj } from '@storybook/react'
import { FileUploadDropZone, type FileUploadDropZoneTone } from './file-upload-drop-zone'

type FileUploadDropZoneStoryArgs = {
  tone: FileUploadDropZoneTone
  disabled: boolean
  primaryText: string
  secondaryText: string
  actionLabel: string
}

const meta = {
  title: 'Components/Internal Building Blocks/FileUploadDropZone',
  component: FileUploadDropZone,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Drop zone de carga: default, focus (focus-visible / focus-within) y disabled × standard | inverse.',
      },
    },
  },
  argTypes: {
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
  },
} satisfies Meta<FileUploadDropZoneStoryArgs>

export default meta
type Story = StoryObj<FileUploadDropZoneStoryArgs>

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

function Specimen(args: Partial<FileUploadDropZoneStoryArgs>) {
  return (
    <FileUploadDropZone
      tone={args.tone}
      disabled={args.disabled}
      primaryText={args.primaryText ?? 'Arrastra el archivo aquí'}
      secondaryText={args.secondaryText ?? 'PDF, DOCX o JPG · máximo 10 MB'}
      actionLabel={args.actionLabel ?? 'Seleccionar archivo'}
    />
  )
}

export const Playground: Story = {
  args: {
    tone: 'standard',
    disabled: false,
    primaryText: 'Arrastra el archivo aquí',
    secondaryText: 'PDF, DOCX o JPG · máximo 10 MB',
    actionLabel: 'Seleccionar archivo',
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUploadDropZone
  primaryText="Arrastra el archivo aquí"
  secondaryText="PDF, DOCX o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>`,
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
        code: `<FileUploadDropZone
  tone="inverse"
  primaryText="Arrastra el archivo aquí"
  secondaryText="PDF, DOCX o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />,
}

export const Disabled: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUploadDropZone
  disabled
  primaryText="Arrastra el archivo aquí"
  secondaryText="PDF, DOCX o JPG · máximo 10 MB"
  actionLabel="Seleccionar archivo"
/>`,
      },
    },
  },
  render: () => <Specimen disabled />,
}

export const AllStates: Story = {
  name: 'States & tones',
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
              <th style={{ ...th, paddingLeft: 0 }}>State</th>
              <th style={th}>Standard</th>
              <th style={th}>Inverse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Default</td>
              <td style={td}>
                <Specimen />
              </td>
              <td style={tdInverse}>
                <Specimen tone="inverse" />
              </td>
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>Disabled</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <Specimen disabled />
              </td>
              <td style={{ ...tdInverse, borderBottom: 'none' }}>
                <Specimen tone="inverse" disabled />
              </td>
            </tr>
          </tbody>
        </table>
        <p
          style={{
            margin: '16px 0 0',
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#888',
          }}
        >
          Focus: Tab hasta el botón para ver borde dashed + focus ring.
        </p>
      </div>
    )
  },
}
