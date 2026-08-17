import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './link'

const meta: Meta<typeof Link> = {
  title: 'Components/Actions/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Navegación a otra ubicación, recurso o documento. No ejecuta acciones de interfaz (usar Button). External icon solo para destinos externos. Nota abierta: el contrato Figma pide subrayado permanente; el diseño actual no lo incluye — pendiente de revisión con diseñador.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['inline', 'standalone'],
      description: 'inline en flujo de texto · standalone como enlace autónomo',
      table: {
        type: { summary: 'string' }, 
        defaultValue: { summary: 'standalone' }
       },
    },
    tone: {
      control: 'select',
      options: ['standard', 'inverse'],
      description: 'standard · inverse',
      table: {
        type: { summary: 'string' },
         defaultValue: { summary: 'standard' } 
        },
    },
    label: {
      control: 'text',
      description: 'Label (string editable). Debe describir el destino.',
    },
    external: {
      control: 'boolean',
      description: 'Muestra el glyph Sales y abre fuera del producto',
      table: { defaultValue: { summary: 'false' } },
    },
    href: {
      control: 'text',
      description: 'URL del destino',
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    href: '/programa',
    label: 'Ver programa',
  },
}

export const Standalone: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Link href="/programa" label="Ver programa" />`,
      },
    },
  },
  render: () => <Link href="/programa" label="Ver programa" />,
}

export const Inline: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Link context="inline" href="/programa" label="descarga el programa" />`,
      },
    },
  },
  render: () => (
    <p style={{ fontFamily: 'sans-serif', fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 420 }}>
      Consulta el calendario o{' '}
      <Link context="inline" href="/programa" label="descarga el programa" /> del curso.
    </p>
  ),
}

export const External: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'External muestra el glyph Sales. Si el texto ya comunica que abre fuera, el ícono no requiere anuncio adicional.',
      },
      source: {
        code: `<Link
  href="https://example.com"
  label="Sitio del Tec (abre en sitio externo)"
  external
/>`,
      },
    },
  },
  render: () => (
    <Link
      href="https://example.com"
      label="Sitio del Tec (abre en sitio externo)"
      external
    />
  ),
}

export const Inverse: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Link href="/aviso" tone="inverse" label="Aviso de privacidad" />`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'var(--color-surface-brand-strong, #231f20)',
          padding: 24,
          borderRadius: 8,
          display: 'inline-flex',
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: () => <Link href="/aviso" tone="inverse" label="Aviso de privacidad" />,
}

export const ContextAndTone: Story = {
  name: 'Context & tone',
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
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Tone</th>
              <th style={th}>Standalone</th>
              <th style={th}>Inline</th>
              <th style={th}>External</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Standard</td>
              <td style={td}>
                <Link href="/programa" label="Ver programa" />
              </td>
              <td style={{ ...td, fontSize: 14, fontFamily: 'sans-serif' }}>
                Texto con <Link context="inline" href="/programa" label="enlace" /> aquí.
              </td>
              <td style={td}>
                <Link href="https://example.com" label="Externo" external />
              </td>
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>Inverse</td>
              <td
                style={{
                  ...td,
                  borderBottom: 'none',
                  background: 'var(--color-surface-brand-strong, #231f20)',
                }}
              >
                <Link href="/aviso" tone="inverse" label="Aviso" />
              </td>
              <td
                style={{
                  ...td,
                  borderBottom: 'none',
                  background: 'var(--color-surface-brand-strong, #231f20)',
                  fontSize: 14,
                  fontFamily: 'sans-serif',
                  color: '#fff',
                }}
              >
                Texto con{' '}
                <Link context="inline" tone="inverse" href="/aviso" label="enlace" /> aquí.
              </td>
              <td
                style={{
                  ...td,
                  borderBottom: 'none',
                  background: 'var(--color-surface-brand-strong, #231f20)',
                }}
              >
                <Link href="https://example.com" tone="inverse" label="Externo" external />
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
  render: () => (
    <div
      style={{
        fontFamily: 'sans-serif',
        maxWidth: 480,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <p style={{ fontSize: 14, lineHeight: 1.6, color: '#333', margin: 0 }}>
        Consulta el calendario académico o{' '}
        <Link context="inline" href="/programa" label="descarga el programa" /> del curso antes
        de inscribirte.
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Link href="/catalogo" label="Ver catálogo" />
        <Link
          href="https://tec.mx"
          label="Sitio institucional (abre en sitio externo)"
          external
        />
      </div>
    </div>
  ),
}
