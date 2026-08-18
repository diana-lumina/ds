import { Link, Toast } from '@workspace/ui'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function ToastPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Toast" storybookPath="feedback-toast--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Intents</h2>
        <Toast
          intent="info"
          title="Nueva actualización"
          message="Hay una versión disponible del expediente."
          icon={<InfoIcon />}
        />
        <Toast
          intent="success"
          title="Cambios guardados"
          message="Tu información se actualizó correctamente."
          icon={<CheckCircleIcon />}
        />
        <Toast
          intent="warning"
          title="Sesión por expirar"
          message="Guarda tu progreso para no perder los cambios."
          icon={<WarningIcon />}
        />
        <Toast
          intent="danger"
          title="No se pudo enviar"
          message="Ocurrió un error al procesar la solicitud."
          icon={<XCircleIcon />}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">With link</h2>
        <Toast
          intent="success"
          title="Cambios guardados"
          message="Tu información se actualizó correctamente."
          icon={<CheckCircleIcon />}
          link={<Link href="/detalle" label="Ver detalle" />}
        />
      </section>
    </div>
  )
}
