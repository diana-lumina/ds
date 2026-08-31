import type { Meta, StoryObj } from '@storybook/react'
import { ChartBarIcon, UsersIcon } from '@workspace/ui/icons'
import { Stat } from './stat'

const meta: Meta<typeof Stat> = {
  title: 'Components/Data Display/Stat',
  component: Stat,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Dato destacado: ícono 32px a la izquierda; value (Heading Medium) y label (Body Medium) a la derecha.',
      },
    },
  },
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    icon: { control: false },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Stat>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    value: '1,248',
    label: 'Inscripciones',
  },
  render: (args) => <Stat {...args} icon={<UsersIcon />} />,
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Stat value="1,248" label="Inscripciones" icon={<UsersIcon />} />`,
      },
    },
  },
  render: () => (
    <Stat value="1,248" label="Inscripciones" icon={<UsersIcon />} />
  ),
}

export const Examples: Story = {
  name: 'Examples',
  parameters: hideCode,
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, padding: 8 }}>
      <Stat value="1,248" label="Inscripciones" icon={<UsersIcon />} />
      <Stat value="36" label="Programas activos" icon={<ChartBarIcon />} />
    </div>
  ),
}
