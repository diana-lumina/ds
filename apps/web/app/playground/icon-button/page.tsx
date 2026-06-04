import { IconButton } from '@workspace/ui'
import { ShoppingCartIcon, ArrowUp } from 'lucide-react'
import { PlaygroundHeader } from '../playground-header'

export default function IconButtonPage() {
  return (
     <div className="p-6 flex flex-col gap-8">
        <PlaygroundHeader
          title="Icon button"
          storybookPath="icon-button"
        />

      <section className="flex flex-col gap-6">

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Enabled / S</h2>
          <IconButton
            size="s"
            icon={<ShoppingCartIcon size={12} />}
            aria-label="Favorito"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Enabled / M</h2>
          <IconButton
            size="m"
            icon={<ShoppingCartIcon size={16} />}
            aria-label="Carrito"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Disabled / M</h2>
          <IconButton
            size="m"
            icon={<ShoppingCartIcon size={16} />}
            aria-label="Carrito"
            disabled
          />
        </div>

         <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Outline</h2>
          <IconButton
            size="m"
            icon={<ArrowUp size={16} />}
            aria-label="Flecha"
          />
        </div>

      </section>
    </div>
  )
}