'use client'

import { useState } from 'react'
import { PhoneInput } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function PhoneInputPlayground() {
  const [country, setCountry] = useState('mx')
  const [number, setNumber] = useState('')

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="PhoneInput" storybookPath="form-controls-phoneinput--docs" />

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Outlined</h2>
        <PhoneInput
          country={country}
          onCountryChange={setCountry}
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          aria-label="Teléfono"
        />
        <PhoneInput appearance="outlined" error aria-label="Teléfono con error" />
        <PhoneInput appearance="outlined" disabled aria-label="Teléfono deshabilitado" />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Underline</h2>
        <PhoneInput appearance="underline" aria-label="Teléfono underline" />
        <PhoneInput appearance="underline" error aria-label="Teléfono underline error" />
        <PhoneInput appearance="underline" disabled aria-label="Teléfono underline disabled" />
      </section>
    </div>
  )
}
