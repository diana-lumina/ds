'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function RadioPlayground() {
  const [value, setValue] = useState('a')

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Radio" storybookPath="radio--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Estados</h2>
        <RadioGroup
          value={value}
          onValueChange={setValue}
          aria-label="Opciones"
          className="flex flex-col gap-3 max-w-sm"
        >
          <label className="flex items-center gap-2 text-sm">
            <Radio value="a" id="radio-a" />
            Selected
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio value="b" id="radio-b" />
            Unselected
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio value="c" id="radio-c" disabled />
            Disabled
          </label>
        </RadioGroup>
      </section>
    </div>
  )
}
