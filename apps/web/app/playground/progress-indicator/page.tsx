import { ProgressIndicator, ProgressStep } from '@workspace/ui'
import { CheckIcon, WarningIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function ProgressIndicatorPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader
        title="ProgressIndicator"
        storybookPath="feedback-progressindicator--docs"
      />

      <section className="flex flex-col gap-3 overflow-x-auto">
        <h2 className="text-sm text-muted-foreground">Current</h2>
        <ProgressIndicator>
          <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
          <ProgressStep state="current" label="Pago" icon={2} />
          <ProgressStep state="upcoming" label="Confirmación" icon={3} />
        </ProgressIndicator>
      </section>

      <section className="flex flex-col gap-3 overflow-x-auto">
        <h2 className="text-sm text-muted-foreground">Error</h2>
        <ProgressIndicator>
          <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
          <ProgressStep state="error" label="Pago" icon={<WarningIcon />} />
          <ProgressStep state="upcoming" label="Confirmación" icon={3} />
        </ProgressIndicator>
      </section>

      <section className="flex flex-col gap-3 overflow-x-auto">
        <h2 className="text-sm text-muted-foreground">Completed</h2>
        <ProgressIndicator>
          <ProgressStep state="completed" label="Datos personales" icon={<CheckIcon />} />
          <ProgressStep state="completed" label="Pago" icon={<CheckIcon />} />
          <ProgressStep state="completed" label="Confirmación" icon={<CheckIcon />} />
        </ProgressIndicator>
      </section>
    </div>
  )
}
