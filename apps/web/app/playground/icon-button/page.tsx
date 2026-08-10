import { IconButton } from '@workspace/ui'
import { BagIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function IconButtonPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="IconButton" storybookPath="iconbutton--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size — default</h2>
        <div className="flex flex-wrap items-center gap-3">
          <IconButton size="sm" variant="default" icon={<BagIcon />} aria-label="Small" />
          <IconButton size="md" variant="default" icon={<BagIcon />} aria-label="Medium" />
          <IconButton size="lg" variant="default" icon={<BagIcon />} aria-label="Large" />
          <IconButton size="md" variant="default" icon={<BagIcon />} aria-label="Disabled" disabled />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Variant — inverse</h2>
        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-[var(--color-surface-brand-strong,#231f20)] p-4">
          <IconButton size="sm" variant="inverse" icon={<BagIcon />} aria-label="Small inverse" />
          <IconButton size="md" variant="inverse" icon={<BagIcon />} aria-label="Medium inverse" />
          <IconButton size="lg" variant="inverse" icon={<BagIcon />} aria-label="Large inverse" />
          <IconButton size="md" variant="inverse" icon={<BagIcon />} aria-label="Disabled inverse" disabled />
        </div>
      </section>
    </div>
  )
}
