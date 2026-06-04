'use client'

import * as React from 'react'
import { Checkbox } from '@workspace/ui'
import { RadioGroup, RadioGroupItem } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function SelectionPage() {
  const [checked, setChecked] = React.useState(false)
  const [radio, setRadio] = React.useState('option-1')

  return (
    <div className="p-6 flex flex-col gap-8">
      <PlaygroundHeader
        title="Checkbox"
        storybookPath="checkbox"
      />

      {/* ── Checkbox ── */}
      <section className="flex flex-col gap-4">
        <h2 className="text-sm text-muted-foreground">Checkbox</h2>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Inactive</span>
            <Checkbox />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Selected</span>
            <Checkbox checked />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Disabled</span>
            <Checkbox disabled />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Disabled selected</span>
            <Checkbox checked disabled />
          </div>
        </div>

        {/* Interactivo */}
        <div className="flex items-center gap-2">
          <Checkbox
            id="interactivo"
            checked={checked}
            onCheckedChange={(val) => setChecked(val as boolean)}
          />
          <label htmlFor="interactivo" className="text-sm cursor-pointer">
            Acepto los términos y condiciones
          </label>
        </div>
      </section>

      {/* ── Radio ── */}
      <section className="flex flex-col gap-4">
        <h2 className="text-sm text-muted-foreground">Radio</h2>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Inactive</span>
            <RadioGroup>
              <RadioGroupItem value="inactive" disabled />
            </RadioGroup>

          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Active</span>
            <RadioGroup>
              <RadioGroupItem value="active" checked />
            </RadioGroup>
          </div>
        </div>

        {/* Interactivo */}
        <RadioGroup value={radio} onValueChange={setRadio} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem id="op1" value="option-1" />
            <label htmlFor="op1" className="text-sm cursor-pointer">Opción 1</label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="op2" value="option-2" />
            <label htmlFor="op2" className="text-sm cursor-pointer">Opción 2</label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="op3" value="option-3" />
            <label htmlFor="op3" className="text-sm cursor-pointer">Opción 3</label>
          </div>
        </RadioGroup>
      </section>
    </div>
  )
}