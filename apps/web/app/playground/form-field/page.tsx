'use client'

import { FormField } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function FormFieldPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="FormField" storybookPath="form-controls-formfield--docs" />

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Default</h2>
        <FormField
          label="Correo"
          supportingText="Usa tu correo institucional"
          placeholder="nombre@tec.mx"
        />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Error</h2>
        <FormField
          label="Correo"
          error
          supportingText="Formato inválido"
          placeholder="nombre@tec.mx"
        />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Underline</h2>
        <FormField
          appearance="underline"
          label="Correo"
          supportingText="Usa tu correo institucional"
          placeholder="nombre@tec.mx"
        />
        <FormField
          appearance="underline"
          label="Correo"
          error
          supportingText="Formato inválido"
          placeholder="nombre@tec.mx"
        />
        <FormField
          appearance="underline"
          label="Correo"
          disabled
          supportingText="Usa tu correo institucional"
          placeholder="nombre@tec.mx"
        />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">TextArea</h2>
        <FormField
          multiline
          label="Comentario"
          supportingText="Máximo 500 caracteres"
          placeholder="Escribe tu comentario"
        />
        <FormField
          multiline
          appearance="underline"
          label="Comentario"
          error
          supportingText="El comentario es obligatorio"
          placeholder="Escribe tu comentario"
        />
        <FormField
          multiline
          label="Comentario"
          disabled
          supportingText="Máximo 500 caracteres"
          placeholder="Escribe tu comentario"
        />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Select</h2>
        <FormField
          control="select"
          label="Campus"
          supportingText="Lo define tu expediente"
          placeholder="Elige un campus"
          options={[
            { value: 'mty', label: 'Monterrey' },
            { value: 'cdmx', label: 'Ciudad de México' },
            { value: 'gdl', label: 'Guadalajara' },
          ]}
        />
        <FormField
          control="select"
          appearance="underline"
          label="Campus"
          error
          supportingText="Selecciona un campus"
          placeholder="Elige un campus"
          options={[
            { value: 'mty', label: 'Monterrey' },
            { value: 'cdmx', label: 'Ciudad de México' },
          ]}
        />
        <FormField
          control="select"
          label="Campus"
          disabled
          supportingText="Lo define tu expediente"
          placeholder="Elige un campus"
          options={[{ value: 'mty', label: 'Monterrey' }]}
        />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Phone</h2>
        <FormField
          control="phone"
          label="Teléfono"
          supportingText="Incluye lada"
          placeholder="Número telefónico"
        />
        <FormField
          control="phone"
          appearance="underline"
          label="Teléfono"
          error
          supportingText="Ingresa un número válido"
          placeholder="Número telefónico"
        />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Disabled</h2>
        <FormField
          label="Correo"
          disabled
          supportingText="Usa tu correo institucional"
          placeholder="nombre@tec.mx"
        />
      </section>
    </div>
  )
}
