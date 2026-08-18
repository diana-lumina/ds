import { Banner, Link } from '@workspace/ui'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function BannerPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Banner" storybookPath="feedback-banner--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Intents</h2>
        <Banner
          intent="info"
          title="Mantenimiento programado"
          message="El servicio se reanudará el martes a las 18:00."
          icon={<InfoIcon />}
        />
        <Banner
          intent="success"
          title="Cambios publicados"
          message="Tu información ya está visible en el portal."
          icon={<CheckCircleIcon />}
        />
        <Banner
          intent="warning"
          title="Acción requerida"
          message="Hay documentos pendientes por cargar en tu solicitud."
          icon={<WarningIcon />}
        />
        <Banner
          intent="danger"
          title="Servicio interrumpido"
          message="No pudimos completar la operación. Inténtalo más tarde."
          icon={<XCircleIcon />}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">With link + dismiss</h2>
        <Banner
          intent="info"
          title="Mantenimiento programado"
          message="El servicio se reanudará el martes a las 18:00."
          icon={<InfoIcon />}
          link={<Link href="/estatus" label="Ver estatus" />}
          onDismiss={() => {}}
        />
      </section>
    </div>
  )
}
