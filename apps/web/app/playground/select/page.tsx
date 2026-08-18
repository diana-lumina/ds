'use client'

import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

function CampusSelect({
  appearance,
  error,
  disabled,
}: {
  appearance?: 'outlined' | 'underline'
  error?: boolean
  disabled?: boolean
}) {
  const [value, setValue] = useState<string>()

  return (
    <Select value={value} onValueChange={setValue} disabled={disabled}>
      <SelectTrigger appearance={appearance} error={error} aria-label="Campus">
        <SelectValue placeholder="Elige un campus" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="mty">Monterrey</SelectItem>
        <SelectItem value="cdmx">Ciudad de México</SelectItem>
        <SelectItem value="gdl">Guadalajara</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default function SelectPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Select" storybookPath="form-controls-select--docs" />

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Outlined</h2>
        <CampusSelect />
        <CampusSelect error />
        <CampusSelect disabled />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Underline</h2>
        <CampusSelect appearance="underline" />
        <CampusSelect appearance="underline" error />
        <CampusSelect appearance="underline" disabled />
      </section>
    </div>
  )
}
