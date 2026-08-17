import { Breadcrumb, BreadcrumbItem } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function BreadcrumbItemPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="BreadcrumbItem" storybookPath="navigation-breadcrumbitem--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">States</h2>
        <div className="flex flex-wrap items-center gap-4">
          <BreadcrumbItem href="/cursos" label="Default" />
          <BreadcrumbItem href="/cursos/ux-research" label="Current" current />
        </div>
        <p className="text-xs text-muted-foreground">
          Hover, press y Tab = focus-visible (heredados de Link).
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">En recorrido</h2>
        <Breadcrumb>
          <BreadcrumbItem href="/" label="Inicio" />
          <BreadcrumbItem href="/cursos" label="Cursos" />
          <BreadcrumbItem href="/cursos/ux-research" label="UX Research" current />
        </Breadcrumb>
      </section>
    </div>
  )
}
