import { Avatar } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function AvatarPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Avatar" storybookPath="avatar--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size — imagen</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar size="sm" src="https://i.pravatar.cc/96?img=5" alt="Small" />
          <Avatar size="md" src="https://i.pravatar.cc/96?img=15" alt="Medium" />
          <Avatar size="lg" src="https://i.pravatar.cc/96?img=25" alt="Large" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Content — initials / fallback</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar size="sm" initials="AB" alt="Iniciales sm" />
          <Avatar size="md" initials="JD" alt="Iniciales md" />
          <Avatar size="lg" initials="MX" alt="Iniciales lg" />
          <Avatar size="sm" alt="Fallback sm" />
          <Avatar size="md" alt="Fallback md" />
          <Avatar size="lg" alt="Fallback lg" />
        </div>
      </section>
    </div>
  )
}
