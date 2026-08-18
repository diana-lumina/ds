import type { Meta, StoryObj } from '@storybook/react'
import { CheckIcon, WarningIcon } from '@workspace/ui/icons'
import { ProgressStep } from '../progress-step'
import { ProgressIndicator } from './progress-indicator'

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Components/Feedback/ProgressIndicator',
  component: ProgressIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Secuencia de ProgressStep con conector de 72px entre cada paso. El conector es completed si el paso anterior está completed; si no, upcoming.',
      },
    },
  },
  argTypes: {
    children: { control: false },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof ProgressIndicator>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  render: () => (
    <ProgressIndicator>
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
      <ProgressStep state="current" label="Pago" icon={2} />
      <ProgressStep state="upcoming" label="Confirmación" icon={3} />
    </ProgressIndicator>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ProgressIndicator>
  <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
  <ProgressStep state="current" label="Pago" icon={2} />
  <ProgressStep state="upcoming" label="Confirmación" icon={3} />
</ProgressIndicator>`,
      },
    },
  },
  render: () => (
    <ProgressIndicator>
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
      <ProgressStep state="current" label="Pago" icon={2} />
      <ProgressStep state="upcoming" label="Confirmación" icon={3} />
    </ProgressIndicator>
  ),
}

export const Error: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ProgressIndicator>
  <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
  <ProgressStep state="error" label="Pago" icon={<WarningIcon />} />
  <ProgressStep state="upcoming" label="Confirmación" icon={3} />
</ProgressIndicator>`,
      },
    },
  },
  render: () => (
    <ProgressIndicator>
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
      <ProgressStep state="error" label="Pago" icon={<WarningIcon />} />
      <ProgressStep state="upcoming" label="Confirmación" icon={3} />
    </ProgressIndicator>
  ),
}

export const AllCompleted: Story = {
  name: 'All completed',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ProgressIndicator>
  <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
  <ProgressStep state="completed" label="Pago" icon={<CheckIcon />} />
  <ProgressStep state="completed" label="Confirmación" icon={<CheckIcon />} />
</ProgressIndicator>`,
      },
    },
  },
  render: () => (
    <ProgressIndicator>
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
      <ProgressStep state="completed" label="Pago" icon={<CheckIcon />} />
      <ProgressStep state="completed" label="Confirmación" icon={<CheckIcon />} />
    </ProgressIndicator>
  ),
}

export const WithDisabled: Story = {
  name: 'With disabled',
  parameters: hideCode,
  render: () => (
    <ProgressIndicator>
      <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
      <ProgressStep state="current" label="Pago" icon={2} />
      <ProgressStep state="disabled" label="Envío" icon={3} />
    </ProgressIndicator>
  ),
}
