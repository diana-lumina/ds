import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button/button'
import { ButtonGroup } from './button-group'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Actions/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Pattern compartido para componer acciones relacionadas mediante instancias reales de Button. No introduce una acción ni apariencia propias; organiza orientación, prioridad y respuesta al espacio disponible. Los botones se alinean a la izquierda del grupo. El wrapper no es focusable ni asume role=toolbar: Tab recorre cada Button en orden DOM; no hay navegación con flechas. Una acción primaria máxima por grupo.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description:
        'horizontal: acciones en una fila · vertical: acciones apiladas cuando el ancho no permite lectura clara',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    children: {
      control: false,
      description:
        'SLOT nativo compartido: instancias reales de Button. Cantidad, jerarquía y labels los aporta cada Button.',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button hierarchy="secondary" label="Cancelar" />
      <Button hierarchy="primary" label="Guardar" />
    </ButtonGroup>
  ),
}

export const Horizontal: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Acciones relacionadas en una fila, alineadas a la izquierda. Secondary acompaña sin competir con Primary.',
      },
      source: {
        code: `<ButtonGroup orientation="horizontal">
  <Button hierarchy="secondary" label="Cancelar" />
  <Button hierarchy="primary" label="Guardar" />
</ButtonGroup>`,
      },
    },
  },
  args: { orientation: 'horizontal' },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button hierarchy="secondary" label="Cancelar" />
      <Button hierarchy="primary" label="Guardar" />
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Acciones apiladas para espacio estrecho. El orden de lectura y de foco es el mismo que en horizontal (orden DOM). Tab recorre cada Button; no se usan flechas.',
      },
      source: {
        code: `<ButtonGroup orientation="vertical">
  <Button hierarchy="secondary" label="Cancelar" />
  <Button hierarchy="primary" label="Guardar" />
</ButtonGroup>`,
      },
    },
  },
  args: { orientation: 'vertical' },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button hierarchy="secondary" label="Cancelar" />
      <Button hierarchy="primary" label="Guardar" />
    </ButtonGroup>
  ),
}

export const AllOrientations: Story = {
  name: 'Orientation',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story:
          'Únicas variantes: horizontal y vertical. No existen variantes por cantidad. Jerarquía y labels viven en cada Button.',
      },
    },
  },
  render: () => (
    <div style={{ padding: 8 }}>
      <p style={{ fontFamily: 'sans-serif', color: '#666', marginBottom: 24 }}>
        Tab recorre cada Button en orden DOM. El wrapper no recibe focus ni role=toolbar.
      </p>
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <div>
          <p style={{ fontFamily: 'monospace', fontSize: 11, color: '#888', fontWeight: 600 }}>
            Horizontal
          </p>
          <ButtonGroup orientation="horizontal">
            <Button hierarchy="secondary" label="Cancelar" />
            <Button hierarchy="primary" label="Guardar" />
          </ButtonGroup>
        </div>
        <div>
          <p style={{ fontFamily: 'monospace', fontSize: 11, color: '#888', fontWeight: 600 }}>
            Vertical
          </p>
          <ButtonGroup orientation="vertical">
            <Button hierarchy="secondary" label="Cancelar" />
            <Button hierarchy="primary" label="Guardar" />
          </ButtonGroup>
        </div>
      </div>
    </div>
  ),
}

export const Composition: Story = {
  name: 'Composición',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story:
          'Una acción primaria máxima por grupo. Secondary acompaña sin competir. Destructive se separa visualmente o requiere confirmación según riesgo. No duplicar estados ni tokens de Button.',
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        padding: 8,
        fontFamily: 'sans-serif',
      }}
    >
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: '#888', fontWeight: 600 }}>
          Primary + Secondary
        </p>
        <ButtonGroup>
          <Button hierarchy="secondary" label="Cancelar" />
          <Button hierarchy="primary" label="Guardar" />
        </ButtonGroup>
      </div>
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: '#888', fontWeight: 600 }}>
          Destructive separado
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <ButtonGroup>
            <Button hierarchy="destructive" label="Eliminar" />
          </ButtonGroup>
          <ButtonGroup>
            <Button hierarchy="secondary" label="Cancelar" />
            <Button hierarchy="primary" label="Guardar" />
          </ButtonGroup>
        </div>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story:
          'La alineación del grupo es a la izquierda. Cambiar a vertical cuando el ancho no permita lectura clara.',
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        fontFamily: 'sans-serif',
        maxWidth: 480,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: 16,
          border: '1px solid #eee',
          borderRadius: 8,
        }}
      >
        <ButtonGroup>
          <Button hierarchy="secondary" label="Cancelar" />
          <Button hierarchy="primary" label="Publicar" />
        </ButtonGroup>
      </div>
      <div
        style={{
          width: 160,
          padding: 16,
          border: '1px solid #eee',
          borderRadius: 8,
        }}
      >
        <ButtonGroup orientation="vertical">
          <Button hierarchy="secondary" label="Cancelar" />
          <Button hierarchy="primary" label="Publicar" />
        </ButtonGroup>
      </div>
    </div>
  ),
}
