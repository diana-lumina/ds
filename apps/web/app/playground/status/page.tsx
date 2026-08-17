import { Status } from '@workspace/ui'
import { CheckCircleIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function StatusPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Status" storybookPath="status--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Intent — sm</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Status size="sm" intent="neutral" label="Pendiente" />
          <Status size="sm" intent="info" label="En revisión" />
          <Status size="sm" intent="success" label="Completado" />
          <Status size="sm" intent="warning" label="Requiere atención" />
          <Status size="sm" intent="danger" label="Error" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Intent — md + icon</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Status size="md" intent="neutral" label="Pendiente" icon={<CheckCircleIcon />} />
          <Status size="md" intent="info" label="En revisión" icon={<CheckCircleIcon />} />
          <Status size="md" intent="success" label="Completado" icon={<CheckCircleIcon />} />
          <Status size="md" intent="warning" label="Requiere atención" icon={<CheckCircleIcon />} />
          <Status size="md" intent="danger" label="Error" icon={<CheckCircleIcon />} />
        </div>
      </section>
    </div>
  )
}
