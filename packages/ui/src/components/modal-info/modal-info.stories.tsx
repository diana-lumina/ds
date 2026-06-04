import type { Meta, StoryObj } from '@storybook/react'
import { ModalInfo } from './modal-info'
import { InfoIcon, HomeIcon } from 'lucide-react'

const meta: Meta<typeof ModalInfo> = {
  title: 'Components/ModalInfo',
  component: ModalInfo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Modal informativo con imagen, texto y footer opcional. No tiene botones de acción — solo muestra información. Construido sobre ModalBase.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    open: {
      description: 'Controla si el modal está abierto',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    title: {
      description: 'Título del modal',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    subheader: {
      description: 'Subtítulo opcional',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    image: {
      description: 'URL de la imagen',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    imageAlt: {
      description: 'Texto alternativo de la imagen',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    body: {
      description: 'Texto del cuerpo — string o array de párrafos',
      control: 'text',
      table: { type: { summary: 'string | string[]' } },
    },
    note: {
      description: 'Nota al pie del contenido',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof ModalInfo>

export const Default: Story = {
  name: 'ModalInfo — Default',
  args: {
    open: true,
    icon: <InfoIcon size={24} />,
    title: 'Título',
    subheader: 'Subheader (opcional)',
    image: 'https://picsum.photos/seed/modal/192/160',
    imageAlt: 'Imagen informativa',
    body: [
      'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
      'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
    ],
    note: 'Lorem ipsum dolor sit amet aconsectetur.',
  },
}

export const ConFooter: Story = {
  name: 'ModalInfo — Con footer',
  args: {
    open: true,
    icon: <InfoIcon size={24} />,
    title: 'Título',
    subheader: 'Subheader (opcional)',
    image: 'https://picsum.photos/seed/modal/192/160',
    body: [
      'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
    ],
    footer: {
      icon: <HomeIcon size={20} />,
      title: 'Title Home',
      description: 'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
    },
  },
}

export const SinImagen: Story = {
  name: 'ModalInfo — Sin imagen',
  args: {
    open: true,
    title: 'Título',
    body: 'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
  },
}

export const BodySimple: Story = {
  name: 'ModalInfo — Body como string',
  args: {
    open: true,
    title: 'Título',
    body: 'Lorem ipsum dolor sit amet consectetur.',
  },
}

export const Playground: Story = {
  name: 'ModalInfo — Playground',
  args: {
    open: true,
    icon: <InfoIcon size={24} />,
    title: 'Título',
    subheader: 'Subheader',
    image: 'https://picsum.photos/seed/modal/192/160',
    body: [
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
    ],
    note: 'Nota',
    footer: {
      icon: <HomeIcon size={20} />,
      title: 'Title Home',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
  },
}