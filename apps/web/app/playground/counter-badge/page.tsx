import { CounterBadge } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function CounterBadgePlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="CounterBadge" storybookPath="counterbadge--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Emphasis neutral</h2>
        <div className="flex flex-wrap items-center gap-3">
          <CounterBadge size="sm" emphasis="neutral" value="2" />
          <CounterBadge size="md" emphasis="neutral" value="12" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Emphasis attention</h2>
        <div className="flex flex-wrap items-center gap-3">
          <CounterBadge size="sm" emphasis="attention" value="9" />
          <CounterBadge size="md" emphasis="attention" value="99+" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Emphasis inverse</h2>
        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-[var(--color-surface-brand-strong,#231f20)] p-4">
          <CounterBadge size="sm" emphasis="inverse" value="4" />
          <CounterBadge size="md" emphasis="inverse" value="24" />
        </div>
      </section>
    </div>
  )
}
