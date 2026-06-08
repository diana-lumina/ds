'use client'

import * as React from 'react'
import { TextInput, TextArea } from '@workspace/ui'
import { TagIcon } from 'lucide-react'
import { PlaygroundHeader } from '../playground-header'

export default function InputPage() {
  const [value, setValue] = React.useState('')
  const [valueText, setValueText] = React.useState('')

  return (
     <div className="p-6 flex flex-col gap-8">
        <PlaygroundHeader
          title="Text input"
          storybookPath="textinput--docs"
        />

      <section className="flex flex-col gap-6 max-w-xs">

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Enabled</h2>
          <TextInput
            id="enabled"
            placeholder="Ingresa tu código"
            icon={<TagIcon size={16} />}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Disabled</h2>
          <TextInput
            id="disabled"
            placeholder="Ingresa tu código"
            icon={<TagIcon size={16} />}
            disabled
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Error</h2>
          <TextInput
            id="error"
            placeholder="Ingresa tu código"
            icon={<TagIcon size={16} />}
            error
            errorMessage="Este campo es requerido"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Con label</h2>
          <TextInput
            id="label"
            label="Código de descuento"
            placeholder="Ingresa tu código"
            icon={<TagIcon size={16} />}
            required
          />
        </div>

      </section>

        <h1 className="font-medium text-lg">Text Area</h1>

        <section className="flex flex-col gap-6 max-w-xs">

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Enabled</h2>
          <TextArea
            id="enabled"
            placeholder="Ingresa tu código"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Disabled</h2>
          <TextArea
            id="disabled"
            placeholder="Ingresa tu código"
            disabled
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Focus</h2>
          <TextArea
            id="focus"
            placeholder="Ingresa tu código"
            autoFocus={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Error</h2>
          <TextArea
            id="error"
            placeholder="Ingresa tu código"
            error
            errorMessage="Este campo es requerido"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Con contador</h2>
          <TextArea
            id="contador"
            placeholder="Ingresa tu reseña"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={140}
            label="Reseña"
            required
          />
        </div>

      </section>
    </div>
  )
}