import { Button } from '@workspace/ui'
import { ArrowRightIcon, ShoppingBagIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function ButtonPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Button" storybookPath="button--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Hierarchy</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button hierarchy="primary" size="sm" label="Primary" />
          <Button hierarchy="secondary" size="sm" label="Secondary" />
          <Button hierarchy="tertiary" size="sm" label="Tertiary" />
          <Button hierarchy="destructive" size="sm" label="Destructive" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" label="Small" />
          <Button size="md" label="Medium" />
          <Button size="lg" label="Large" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Íconos / loading / disabled</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" leftIcon={<ShoppingBagIcon />} label="Left icon" />
          <Button size="sm" rightIcon={<ArrowRightIcon />} label="Right icon" />
          <Button
            size="sm"
            leftIcon={<ShoppingBagIcon />}
            rightIcon={<ArrowRightIcon />}
            label="Both"
          />
          <Button size="sm" loading label="Loading" />
          <Button size="sm" disabled label="Disabled" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Tone inverse (primary + secondary)</h2>
        <div className="flex flex-wrap items-center gap-2 rounded-lg bg-[var(--color-surface-brand-strong,#231f20)] p-4">
          <Button size="sm" hierarchy="primary" tone="inverse" label="Primary" />
          <Button size="sm" hierarchy="secondary" tone="inverse" label="Secondary" />
        </div>
      </section>
    </div>
  )
}
