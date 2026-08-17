import { Button, ButtonGroup } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function ButtonGroupPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="ButtonGroup" storybookPath="buttongroup--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Horizontal</h2>
        <ButtonGroup orientation="horizontal">
          <Button hierarchy="secondary" label="Cancelar" />
          <Button hierarchy="primary" label="Guardar" />
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Vertical</h2>
        <ButtonGroup orientation="vertical">
          <Button hierarchy="secondary" label="Cancelar" />
          <Button hierarchy="primary" label="Guardar" />
        </ButtonGroup>
      </section>
    </div>
  )
}
