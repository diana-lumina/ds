'use client'

import * as React from 'react'
import { ModalBase } from '@workspace/ui'
import { ModalInfo } from '@workspace/ui'
import { ModalActionable } from '@workspace/ui'
import { Button } from '@workspace/ui'
import { InfoIcon, StarIcon, HomeIcon } from 'lucide-react'
import { PlaygroundHeader } from '../playground-header'

export default function ModalPage() {
  const [openBase, setOpenBase] = React.useState(false)
  const [openInfo, setOpenInfo] = React.useState(false)
  const [openActionable, setOpenActionable] = React.useState(false)

  return (
    <div className="p-6 flex flex-col gap-8">
      <PlaygroundHeader
        title="Modal"
        storybookPath="mediacard--docs"
      />

      {/* ── Modal Base ── */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Base — con slot libre</h2>
        <Button className="w-[200px]" onClick={() => setOpenBase(true)}>
          Abrir Modal Base
        </Button>
        <ModalBase
          open={openBase}
          onOpenChange={setOpenBase}
          icon={<InfoIcon size={24} />}
          title="Header"
          subheader="subheader (opcional)"
          submitLabel="Añadir mi opinión"
          onSubmit={() => setOpenBase(false)}
        >
          <div className="flex items-center justify-center rounded-lg bg-muted p-6 text-sm text-muted-foreground">
            <div className="text-center">
              <p className="font-medium">Slot</p>
              <p>Change me for a component</p>
            </div>
          </div>
        </ModalBase>
      </section>

      {/* ── Modal Info ── */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Info — imagen + texto</h2>
        <Button className="w-[200px]"  onClick={() => setOpenInfo(true)}>
          Abrir Modal Info
        </Button>
        <ModalInfo
          open={openInfo}
          onOpenChange={setOpenInfo}
          title="Aprendizaje"
          subheader="Lorem ipsum dolor sit amet (opcional)"
          image="https://picsum.photos/seed/modal/344/276"
          imageAlt="Campus"
          body={[
            'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
            'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
          ]}
          note="Lorem ipsum dolor sit amet aconsectetur."
          footer={{
            icon: <HomeIcon size={20} />,
            title: 'Title Home',
            description: 'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
          }}
        />
      </section>

      {/* ── Modal Actionable ── */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Actionable — formulario</h2>
        <Button className="w-[200px]"  onClick={() => setOpenActionable(true)}>
          Abrir Modal Actionable
        </Button>
        <ModalActionable
          open={openActionable}
          onOpenChange={setOpenActionable}
          icon={<StarIcon size={24} />}
          title="Añadir mi opinión"
          subheader="Deja tu reseña sobre este programa para ayudar a otros a tomar una decisión"
          fields={[
            {
              type: 'input',
              id: 'titulo',
              label: 'Añade un título a tu reseña',
              placeholder: 'Ingresa algún título a tu opinión',
              required: true,
            },
            {
              type: 'rating',
              id: 'calificacion',
              label: 'Califica con estrella este programa',
              required: true,
              maxStars: 5,
            },
            {
              type: 'textarea',
              id: 'resena',
              label: 'Ingresa tu reseña',
              placeholder: 'Añade tu reseña aquí sobre este programa',
              required: true,
              maxLength: 140,
            },
          ]}
          note="Tu opinión será revisado antes de publicarse por temas de seguridad. Te recomendamos no utilizar lenguaje inapropiado para que tu reseña pueda ser publicado sin inconvenientes."
          cancelLabel="Cancelar"
          submitLabel="Añadir mi opinión"
          onSubmit={(values) => {
            console.log(values)
            setOpenActionable(false)
          }}
        />
      </section>
    </div>
  )
}