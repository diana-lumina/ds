'use client'

import { ListItem } from '@workspace/ui'
import { CaretRightIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function ListItemPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="ListItem" storybookPath="content-listitem--docs" />

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">One line</h2>
        <ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Two lines</h2>
        <ListItem
          primaryText="Ana Beltrán"
          secondaryText="Diseño de interfaces"
          avatarInitials="AB"
          icon={<CaretRightIcon />}
        />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Three lines</h2>
        <ListItem
          primaryText="Ana Beltrán"
          secondaryText="Diseño de interfaces"
          tertiaryText="TEC 360"
          avatarSrc="https://i.pravatar.cc/96?img=5"
          icon={<CaretRightIcon />}
        />
      </section>

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Disabled</h2>
        <ListItem
          primaryText="Ana Beltrán"
          secondaryText="Diseño de interfaces"
          avatarInitials="AB"
          icon={<CaretRightIcon />}
          disabled
        />
      </section>
    </div>
  )
}
