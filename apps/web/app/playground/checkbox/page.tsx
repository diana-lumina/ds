'use client'

import { useState } from 'react'
import { Checkbox } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function CheckboxPlayground() {
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  const [mixedChildren, setMixedChildren] = useState({ one: true, two: false })

  const allChecked =
    mixedChildren.one && mixedChildren.two
      ? true
      : !mixedChildren.one && !mixedChildren.two
        ? false
        : 'indeterminate'

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Checkbox" storybookPath="checkbox--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Estados</h2>
        <div className="flex flex-col gap-3 max-w-sm">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={a}
              onCheckedChange={(value) => setA(value === true)}
              aria-label="Checked"
            />
            Checked
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={b}
              onCheckedChange={(value) => setB(value === true)}
              aria-label="Unchecked"
            />
            Unchecked
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={allChecked}
              onCheckedChange={(value) => {
                const next = value === true
                setMixedChildren({ one: next, two: next })
              }}
              aria-label="Mixed"
            />
            Mixed (seleccionar todo)
          </label>
          <label className="flex items-center gap-2 text-sm pl-6">
            <Checkbox
              checked={mixedChildren.one}
              onCheckedChange={(value) =>
                setMixedChildren((prev) => ({ ...prev, one: value === true }))
              }
            />
            Opción A
          </label>
          <label className="flex items-center gap-2 text-sm pl-6">
            <Checkbox
              checked={mixedChildren.two}
              onCheckedChange={(value) =>
                setMixedChildren((prev) => ({ ...prev, two: value === true }))
              }
            />
            Opción B
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox checked disabled aria-label="Disabled checked" />
            Disabled checked
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox checked={false} disabled aria-label="Disabled unchecked" />
            Disabled unchecked
          </label>
        </div>
      </section>
    </div>
  )
}
