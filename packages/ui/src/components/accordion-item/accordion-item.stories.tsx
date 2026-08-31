import type { Meta, StoryObj } from '@storybook/react'
import { FileTextIcon } from '@workspace/ui/icons'
import { AccordionItem } from './accordion-item'

const meta: Meta<typeof AccordionItem> = {
  title: 'Components/Data Display/AccordionItem',
  component: AccordionItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Ítem de acordeón. Treatments: plain y contained. Estados: collapsed, hover, expanded y focus-visible (CSS). En plain el anillo rodea solo el trigger; en contained el anillo es rectangular, inset al padding interno (título, supporting e íconos), sin envolver el contenido desplegado.',
      },
    },
  },
  argTypes: {
    treatment: {
      control: 'radio',
      options: ['plain', 'contained'],
      table: { defaultValue: { summary: 'plain' } },
    },
    title: { control: 'text' },
    supportingText: { control: 'text' },
    icon: { control: false },
    children: { control: 'text' },
    defaultOpen: { control: 'boolean' },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof AccordionItem>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const body =
  'La inscripción queda sujeta a disponibilidad de cupo. Coordinación te contactará si hay un cambio de estatus.'

export const Playground: Story = {
  args: {
    treatment: 'plain',
    title: 'Datos del programa',
    supportingText: 'Opcional',
    defaultOpen: false,
    children: body,
  },
  render: (args) => <AccordionItem {...args} />,
}

export const Plain: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AccordionItem
  treatment="plain"
  title="Datos del programa"
  supportingText="Opcional"
>
  …
</AccordionItem>`,
      },
    },
  },
  render: () => (
    <AccordionItem
      treatment="plain"
      title="Datos del programa"
      supportingText="Opcional"
    >
      {body}
    </AccordionItem>
  ),
}

export const Contained: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AccordionItem
  treatment="contained"
  title="Datos del programa"
  supportingText="Opcional"
>
  …
</AccordionItem>`,
      },
    },
  },
  render: () => (
    <AccordionItem
      treatment="contained"
      title="Datos del programa"
      supportingText="Opcional"
    >
      {body}
    </AccordionItem>
  ),
}

export const WithLeadingIcon: Story = {
  name: 'Leading icon',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AccordionItem
  title="Datos del programa"
  supportingText="Opcional"
  icon={<FileTextIcon />}
>
  …
</AccordionItem>`,
      },
    },
  },
  render: () => (
    <AccordionItem
      title="Datos del programa"
      supportingText="Opcional"
      icon={<FileTextIcon />}
    >
      {body}
    </AccordionItem>
  ),
}

export const Expanded: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AccordionItem title="Datos del programa" defaultOpen>
  …
</AccordionItem>`,
      },
    },
  },
  render: () => (
    <AccordionItem title="Datos del programa" supportingText="Opcional" defaultOpen>
      {body}
    </AccordionItem>
  ),
}

export const TreatmentsAndStates: Story = {
  name: 'Treatments & states',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 16px 12px',
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
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 280,
    }

    const rows = [
      { label: 'plain · icon off', treatment: 'plain' as const, icon: false },
      { label: 'plain · icon on', treatment: 'plain' as const, icon: true },
      { label: 'contained · icon off', treatment: 'contained' as const, icon: false },
      { label: 'contained · icon on', treatment: 'contained' as const, icon: true },
    ]

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Variant</th>
              <th style={th}>Collapsed</th>
              <th style={th}>Expanded</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, treatment, icon }) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                <td style={td}>
                  <AccordionItem
                    treatment={treatment}
                    title="Datos del programa"
                    supportingText="Opcional"
                    icon={icon ? <FileTextIcon /> : undefined}
                  >
                    {body}
                  </AccordionItem>
                </td>
                <td style={td}>
                  <AccordionItem
                    treatment={treatment}
                    title="Datos del programa"
                    supportingText="Opcional"
                    icon={icon ? <FileTextIcon /> : undefined}
                    defaultOpen
                  >
                    {body}
                  </AccordionItem>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}
