import { Button } from '@workspace/ui'
import { BagIcon, ChevronIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function ButtonPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Button" storybookPath="button--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Variant</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="default" size="sm">Default</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="destructive" size="sm">Destructive</Button>
          <Button variant="link" size="sm">Link</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Íconos / loading / disabled</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" leftIcon={<BagIcon />}>Left icon</Button>
          <Button size="sm" rightIcon={<ChevronIcon />}>Right icon</Button>
          <Button size="sm" leftIcon={<BagIcon />} rightIcon={<ChevronIcon />}>
            Both
          </Button>
          <Button size="sm" loading>Loading</Button>
          <Button size="sm" disabled>Disabled</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Tone inverse</h2>
        <div className="flex flex-wrap items-center gap-2 rounded-lg bg-[var(--color-surface-brand-strong,#231f20)] p-4">
          <Button size="sm" variant="default" tone="inverse">Default</Button>
          <Button size="sm" variant="secondary" tone="inverse">Secondary</Button>
          <Button size="sm" variant="ghost" tone="inverse">Ghost</Button>
        </div>
      </section>
    </div>
  )
}
