import { Separator } from "@workspace/ui/components/separator"
interface PlaygroundHeaderProps {
  title: string
  storybookPath: string
  status?: string
  version?: string
}

export function PlaygroundHeader({
  title,
  storybookPath,
  status = 'Stable',
  version = 'v1.0',
}: PlaygroundHeaderProps) {
  return (
    <>
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-medium text-lg">{title}</h1>
        <span className="text-xs text-muted-foreground">
          {status} · {version}
        </span>
      </div>
      <a
        href={`https://tu-storybook.chromatic.com/?path=/story/components-${storybookPath}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-primary underline"
      >
        Ver en Storybook →
      </a>
    </div>
    <Separator className="-mt-6" />
    </>
  )
}