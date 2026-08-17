'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function RadioPlayground() {
  const [value, setValue] = useState('email')

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Radio" storybookPath="radio--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Selected / disabled</h2>
        <div className="flex flex-wrap items-center gap-6">
          <RadioGroup aria-label="Unselected">
            <Radio value="u" aria-label="Unselected" />
          </RadioGroup>
          <RadioGroup value="s" aria-label="Selected">
            <Radio value="s" aria-label="Selected" />
          </RadioGroup>
          <RadioGroup value="d" aria-label="Disabled">
            <Radio value="d" aria-label="Disabled" disabled />
          </RadioGroup>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Grupo (label en patrón consumidor)</h2>
        <RadioGroup
          value={value}
          onValueChange={setValue}
          aria-label="Canal de contacto"
          className="flex flex-col gap-3 max-w-sm"
        >
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Radio value="email" id="radio-email" />
            Correo electrónico
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Radio value="phone" id="radio-phone" />
            Teléfono
          </label>
          <label className="flex items-center gap-2 text-sm cursor-not-allowed opacity-70">
            <Radio value="none" id="radio-none" disabled />
            No contactar
          </label>
        </RadioGroup>
      </section>
    </div>
  )
}
