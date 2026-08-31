import type { Meta, StoryObj } from '@storybook/react'
import { InfoIcon } from '@workspace/ui/icons'
import { Button } from '../button'
import { IconButton } from '../icon-button'
import { Tooltip } from './tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Texto breve de ayuda sobre un control. Sin variantes visuales. Se abre con hover o focus-visible.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto visible del tooltip',
    },
    side: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
      table: { defaultValue: { summary: 'top' } },
    },
    children: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Playground: Story = {
  args: {
    label: 'Descargar expediente',
    side: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button hierarchy="secondary" size="sm" label="Acciones" />
    </Tooltip>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Tooltip label="Descargar expediente">
  <Button hierarchy="secondary" size="sm" label="Acciones" />
</Tooltip>`,
      },
    },
  },
  render: () => (
    <Tooltip label="Descargar expediente" defaultOpen>
      <Button hierarchy="secondary" size="sm" label="Acciones" />
    </Tooltip>
  ),
}

export const IconTrigger: Story = {
  name: 'Con IconButton',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Tooltip label="Más información">
  <IconButton hierarchy="tertiary" size="sm" icon={<InfoIcon />} aria-label="Más información" />
</Tooltip>`,
      },
    },
  },
  render: () => (
    <Tooltip label="Más información" defaultOpen>
      <IconButton
        hierarchy="tertiary"
        size="sm"
        icon={<InfoIcon />}
        aria-label="Más información"
      />
    </Tooltip>
  ),
}
