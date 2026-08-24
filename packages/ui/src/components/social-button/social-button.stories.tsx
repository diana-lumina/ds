import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FacebookIcon } from '@workspace/ui/icons'
import { SocialButton } from './social-button'

const meta: Meta<typeof SocialButton> = {
  title: 'Components/Actions/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Botón de autenticación social. El ícono leading es obligatorio.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'sm · md · lg',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: 'Label visible',
    },
    loading: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof SocialButton>

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
  { value: 'lg', sizeLabel: 'Large' },
] as const

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    size: 'md',
    label: 'Continuar con Facebook',
    icon: <FacebookIcon />,
    disabled: false,
    loading: false,
  },
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<SocialButton
  label="Continuar con Facebook"
  icon={<FacebookIcon />}
/>`,
      },
    },
  },
  render: () => (
    <SocialButton label="Continuar con Facebook" icon={<FacebookIcon />} />
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<SocialButton
  label="Continuar con Facebook"
  icon={<FacebookIcon />}
  disabled
/>`,
      },
    },
  },
  render: () => (
    <SocialButton label="Continuar con Facebook" icon={<FacebookIcon />} disabled />
  ),
}

export const Loading: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<SocialButton
  label="Continuar con Facebook"
  icon={<FacebookIcon />}
  loading
/>`,
      },
    },
  },
  render: () => (
    <SocialButton label="Continuar con Facebook" icon={<FacebookIcon />} loading />
  ),
}

export const Sizes: Story = {
  name: 'Sizes',
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
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 20px',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {SIZES.map(({ value, sizeLabel }) => (
                <th key={value} style={th}>
                  {sizeLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {SIZES.map(({ value }) => (
                <td key={value} style={td}>
                  <SocialButton
                    size={value}
                    label="Continuar con Facebook"
                    icon={<FacebookIcon />}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
