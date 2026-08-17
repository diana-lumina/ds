'use client'

import { useState } from 'react'
import { InputChip } from '@workspace/ui'
import { ShoppingBagIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function InputChipPlayground() {
  const [tags, setTags] = useState(['UX Research', 'Producto', 'Figma'])

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="InputChip" storybookPath="inputchip--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size / icon / disabled</h2>
        <div className="flex flex-wrap items-center gap-2">
          <InputChip size="sm" label="Small" onClose={() => {}} />
          <InputChip size="md" label="Medium" onClose={() => {}} />
          <InputChip size="sm" label="Con ícono" icon={<ShoppingBagIcon />} onClose={() => {}} />
          <InputChip size="md" label="Medium + ícono" icon={<ShoppingBagIcon />} onClose={() => {}} />
          <InputChip size="sm" label="Disabled" onClose={() => {}} disabled />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Interactivo</h2>
        <div className="flex flex-wrap items-center gap-2 rounded-lg border p-3 min-h-12">
          {tags.map((tag) => (
            <InputChip
              key={tag}
              size="sm"
              label={tag}
              onClose={() => setTags((prev) => prev.filter((t) => t !== tag))}
            />
          ))}
          {tags.length === 0 && (
            <span className="text-sm text-muted-foreground">Sin etiquetas</span>
          )}
        </div>
      </section>
    </div>
  )
}
