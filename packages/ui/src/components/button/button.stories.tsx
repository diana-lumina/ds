import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { BagIcon, ChevronIcon } from '@workspace/ui/icons'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'ghost', 'destructive'],
    },
    tone: {
      control: 'select',
      options: ['standard', 'inverse'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    variant: 'default',
    tone: 'standard',
    size: 'default',
    disabled: false,
    loading: false,
    children: 'Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {}

const SIZES = [
  { value: 'sm', label: 'Small' },
  { value: 'default', label: 'Medium' },
  { value: 'lg', label: 'Large' },
] as const

function labelStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 11, color: '#888', marginBottom: 6 }
}

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

function VariantSection({
  variant,
  title,
}: {
  variant: 'default' | 'secondary' | 'ghost' | 'destructive'
  title: string
}) {
  return (
    <div style={{ marginBottom: 40, paddingBottom: 28, borderBottom: '1px solid #eee' }}>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>{title}</h2>
     
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {SIZES.map(({ value, label }) => (
          <div key={value}>
            <div style={labelStyle()}>{label}</div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'center' }}>
                <Button variant={variant} size={value}>
                  Button
                </Button>
                <div style={captionStyle()}>Default</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Button variant={variant} size={value} disabled>
                  Button
                </Button>
                <div style={captionStyle()}>Disabled</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Button variant={variant} size={value} leftIcon={<BagIcon />} rightIcon={<ChevronIcon />}>
                  Button
                </Button>
                <div style={captionStyle()}>Con íconos</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Button
                  variant={variant}
                  size={value}
                  leftIcon={<BagIcon />}
                  rightIcon={<ChevronIcon />}
                  disabled
                >
                  Button
                </Button>
                <div style={captionStyle()}>Íconos + disabled</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ padding: 8 }}>
      <p style={{ fontFamily: 'sans-serif', color: '#666', marginBottom: 32 }}>
        Usa el selector "Marca" en la toolbar para comparar TEC 360 vs. TEC
        Educación Continua. Pasa el mouse, haz clic sostenido o usa Tab
        sobre cualquier botón para ver hover/pressed/focus-visible.
      </p>
      <VariantSection variant="default" title="Primary" />

      <div style={{ marginBottom: 40, paddingBottom: 28, borderBottom: '1px solid #eee' }}>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Primary — Tone Inverse</h2>
       
        <div
          style={{
            background: 'var(--color-neutral-50)',
            padding: 24,
            borderRadius: 8,
            display: 'flex',
            gap: 32,
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {SIZES.map(({ value, label }) => (
            <div key={value}>
              <div style={{ ...labelStyle(), color: '#666' }}>{label}</div>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ textAlign: 'center' }}>
                  <Button variant="default" tone="inverse" size={value}>
                    Button
                  </Button>
                  <div style={captionStyle()}>Default</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button variant="default" tone="inverse" size={value} disabled>
                    Button
                  </Button>
                  <div style={captionStyle()}>Disabled</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    variant="default"
                    tone="inverse"
                    size={value}
                    leftIcon={<BagIcon />}
                    rightIcon={<ChevronIcon />}
                  >
                    Button
                  </Button>
                  <div style={captionStyle()}>Con íconos</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    variant="default"
                    tone="inverse"
                    size={value}
                    leftIcon={<BagIcon />}
                    rightIcon={<ChevronIcon />}
                    disabled
                  >
                    Button
                  </Button>
                  <div style={captionStyle()}>Íconos + disabled</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VariantSection variant="secondary" title="Secondary" />

        <div style={{ marginBottom: 40, paddingBottom: 28, borderBottom: '1px solid #eee' }}>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Secondary — Tone Inverse</h2>
       
        <div
          style={{
            background: '#F5F5F5',
            padding: 24,
            borderRadius: 8,
            display: 'flex',
            gap: 32,
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {SIZES.map(({ value, label }) => (
            <div key={value}>
              <div style={{ ...labelStyle(), color: '#666' }}>{label}</div>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ textAlign: 'center' }}>
                  <Button variant="secondary" tone="inverse" size={value}>
                    Button
                  </Button>
                  <div style={captionStyle()}>Default</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button variant="secondary" tone="inverse" size={value} disabled>
                    Button
                  </Button>
                  <div style={captionStyle()}>Disabled</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    variant="secondary"
                    tone="inverse"
                    size={value}
                    leftIcon={<BagIcon />}
                    rightIcon={<ChevronIcon />}
                  >
                    Button
                  </Button>
                  <div style={captionStyle()}>Con íconos</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    variant="secondary"
                    tone="inverse"
                    size={value}
                    leftIcon={<BagIcon />}
                    rightIcon={<ChevronIcon />}
                    disabled
                  >
                    Button
                  </Button>
                  <div style={captionStyle()}>Íconos + disabled</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <VariantSection variant="ghost" title="Tertiary" />
      <VariantSection variant="destructive" title="Destructive" />

   
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Loading</h2>
       
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="default" loading>Button</Button>
          <Button variant="secondary" loading>Button</Button>
          <Button variant="ghost" loading>Button</Button>
          <Button variant="destructive" loading>Button</Button>
        </div>
      </div>
    </div>
  ),
}


export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button leftIcon={<BagIcon />}>Left icon</Button>
      <Button rightIcon={<ChevronIcon />}>Right icon</Button>
      <Button leftIcon={<BagIcon />} rightIcon={<ChevronIcon />}>
        Both
      </Button>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  render: () => (
    <div
      style={{
        fontFamily: 'sans-serif',
        maxWidth: 400,
        padding: 24,
        border: '1px solid #e5e5e5',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600 }}>Publicar cambios</h3>
        <p style={{ margin: 0, fontSize: 13, color: '#666', lineHeight: 1.4 }}>
          Los cambios serán visibles para todos los usuarios del curso.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <Button variant="ghost">Cancelar</Button>
        <Button variant="default">Publicar</Button>
      </div>
    </div>
  ),
}

// export const IconSizes: Story = {
//   render: () => (
//     <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//       {(['icon-xs', 'icon-sm', 'icon', 'icon-lg'] as const).map((size) => (
//         <Button key={size} size={size} aria-label={size}>
//           <BagIcon />
//         </Button>
//       ))}
//     </div>
//   ),
// }