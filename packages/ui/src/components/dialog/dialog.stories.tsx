import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Dialog } from './dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Overlays/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Overlay modal. Sizes sm (480), md (640) y lg (800). Cierre con IconButton tertiary sm. Acciones: Button secondary + primary, size md.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    title: { control: 'text' },
    children: { control: 'text' },
    trigger: { control: false, table: { disable: true } },
    primaryAction: { control: false, table: { disable: true } },
    secondaryAction: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const body =
  'Al confirmar, se enviará la solicitud a coordinación. Puedes cancelar en cualquier momento antes de enviar.'

function actions() {
  return {
    secondaryAction: <Button hierarchy="secondary" size="md" label="Cancelar" />,
    primaryAction: <Button hierarchy="primary" size="md" label="Confirmar" />,
  }
}

function specimen(size: 'sm' | 'md' | 'lg', triggerLabel: string) {
  return (
    <Dialog
      size={size}
      title="Confirmar solicitud"
      trigger={<Button hierarchy="secondary" size="sm" label={triggerLabel} />}
      {...actions()}
    >
      {body}
    </Dialog>
  )
}

export const Playground: Story = {
  args: {
    size: 'md',
    title: 'Confirmar solicitud',
    children: body,
  },
  render: (args) => (
    <Dialog
      {...args}
      {...actions()}
      trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
    />
  ),
}

export const Small: Story = {
  name: 'Size sm',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Dialog
  size="sm"
  title="Confirmar solicitud"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${body}
</Dialog>`,
      },
    },
  },
  render: () => specimen('sm', 'Abrir sm'),
}

export const Medium: Story = {
  name: 'Size md',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Dialog
  size="md"
  title="Confirmar solicitud"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${body}
</Dialog>`,
      },
    },
  },
  render: () => specimen('md', 'Abrir md'),
}

export const Large: Story = {
  name: 'Size lg',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Dialog
  size="lg"
  title="Confirmar solicitud"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir dialog" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${body}
</Dialog>`,
      },
    },
  },
  render: () => specimen('lg', 'Abrir lg'),
}

export const AllSizes: Story = {
  name: 'Sizes',
  parameters: hideCode,
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Dialog
        size="sm"
        title="Small"
        trigger={<Button hierarchy="secondary" size="sm" label="Abrir sm" />}
        {...actions()}
      >
        {body}
      </Dialog>
      <Dialog
        size="md"
        title="Medium"
        trigger={<Button hierarchy="secondary" size="sm" label="Abrir md" />}
        {...actions()}
      >
        {body}
      </Dialog>
      <Dialog
        size="lg"
        title="Large"
        trigger={<Button hierarchy="secondary" size="sm" label="Abrir lg" />}
        {...actions()}
      >
        {body}
      </Dialog>
    </div>
  ),
}
