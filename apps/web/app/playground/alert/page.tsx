import { Alert, Link } from '@workspace/ui'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function AlertPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Alert" storybookPath="feedback-alert--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Intents</h2>
        <Alert
          intent="info"
          title="Información importante"
          message="Revisa los datos de tu expediente antes de continuar."
          icon={<InfoIcon />}
        />
        <Alert
          intent="success"
          title="Cambios guardados"
          message="Tu información se actualizó correctamente."
          icon={<CheckCircleIcon />}
        />
        <Alert
          intent="warning"
          title="Acción requerida"
          message="Hay documentos pendientes por cargar en tu solicitud."
          icon={<WarningIcon />}
        />
        <Alert
          intent="danger"
          title="No se pudo completar"
          message="Ocurrió un error al enviar la solicitud. Inténtalo de nuevo."
          icon={<XCircleIcon />}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">With link + dismiss</h2>
        <Alert
          intent="info"
          title="Información importante"
          message="Revisa los datos de tu expediente antes de continuar."
          icon={<InfoIcon />}
          link={<Link href="/expediente" label="Ver expediente" />}
          onDismiss={() => {}}
        />
      </section>
    </div>
  )
}
