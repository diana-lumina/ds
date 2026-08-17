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
