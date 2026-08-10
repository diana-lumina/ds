import { Divider } from '@workspace/ui'

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
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-medium text-lg">{title}</h1>
          <span className="text-xs text-muted-foreground">
            {status} · {version}
          </span>
        </div>
        <a
          href={`https://6a220ebba6dfcae102b4cb59-dovnudtdzu.chromatic.com/?path=/docs/components-${storybookPath}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary underline"
        >
          Ver en Storybook →
        </a>
      </div>
      <Divider orientation="horizontal" thickness={1} />
    </div>
  )
}
