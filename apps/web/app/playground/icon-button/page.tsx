import { IconButton } from '@workspace/ui'
import { ShoppingBagIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function IconButtonPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="IconButton" storybookPath="iconbutton--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size — standard</h2>
        <div className="flex flex-wrap items-center gap-3">
          <IconButton size="sm" tone="standard" icon={<ShoppingBagIcon />} aria-label="Small" />
          <IconButton size="md" tone="standard" icon={<ShoppingBagIcon />} aria-label="Medium" />
          <IconButton size="lg" tone="standard" icon={<ShoppingBagIcon />} aria-label="Large" />
          <IconButton size="md" tone="standard" icon={<ShoppingBagIcon />} aria-label="Disabled" disabled />
          <IconButton size="md" tone="standard" icon={<ShoppingBagIcon />} aria-label="Loading" loading />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Tone — inverse</h2>
        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-[var(--color-surface-brand-strong,#231f20)] p-4">
          <IconButton size="sm" tone="inverse" icon={<ShoppingBagIcon />} aria-label="Small inverse" />
          <IconButton size="md" tone="inverse" icon={<ShoppingBagIcon />} aria-label="Medium inverse" />
          <IconButton size="lg" tone="inverse" icon={<ShoppingBagIcon />} aria-label="Large inverse" />
          <IconButton size="md" tone="inverse" icon={<ShoppingBagIcon />} aria-label="Disabled inverse" disabled />
        </div>
      </section>
    </div>
  )
}
