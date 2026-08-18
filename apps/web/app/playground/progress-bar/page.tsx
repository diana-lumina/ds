import { ProgressBar } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function ProgressBarPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="ProgressBar" storybookPath="feedback-progressbar--docs" />

      <section className="flex flex-col gap-6 max-w-md">
        <h2 className="text-sm text-muted-foreground">Percent</h2>
        <ProgressBar label="Carga de documentos" value={0} />
        <ProgressBar label="Carga de documentos" value={40} />
        <ProgressBar label="Carga de documentos" value={100} />
      </section>

      <section className="flex flex-col gap-6 max-w-md">
        <h2 className="text-sm text-muted-foreground">Fraction</h2>
        <ProgressBar label="Carga de documentos" value={0} max={5} valueFormat="fraction" />
        <ProgressBar label="Carga de documentos" value={2} max={5} valueFormat="fraction" />
        <ProgressBar label="Carga de documentos" value={5} max={5} valueFormat="fraction" />
      </section>
    </div>
  )
}
