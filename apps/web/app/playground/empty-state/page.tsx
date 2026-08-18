import { Button, EmptyState } from '@workspace/ui'
import {
  CheckCircleIcon,
  FolderSimpleIcon,
  WarningCircleIcon,
} from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function EmptyStatePlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="EmptyState" storybookPath="feedback-emptystate--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Empty</h2>
        <EmptyState
          type="empty"
          title="Sin resultados"
          message="Intenta con otra búsqueda o limpia los filtros."
          icon={<FolderSimpleIcon />}
          action={<Button hierarchy="primary" size="md" label="Nueva búsqueda" />}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Error</h2>
        <EmptyState
          type="error"
          title="No se pudo cargar"
          message="Ocurrió un problema al obtener la información. Inténtalo de nuevo."
          icon={<WarningCircleIcon />}
          action={<Button hierarchy="primary" size="md" label="Reintentar" />}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Success</h2>
        <EmptyState
          type="success"
          title="Solicitud enviada"
          message="Recibirás una confirmación cuando el proceso termine."
          icon={<CheckCircleIcon />}
        />
      </section>
    </div>
  )
}
