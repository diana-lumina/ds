import { Breadcrumb, BreadcrumbItem } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function BreadcrumbPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Breadcrumb" storybookPath="navigation-breadcrumb--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Recorrido</h2>
        <Breadcrumb>
          <BreadcrumbItem href="/" label="Inicio" />
          <BreadcrumbItem href="/cursos" label="Cursos" />
          <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
        </Breadcrumb>
      </section>
    </div>
  )
}
