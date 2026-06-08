'use client'
import { AccordionFilter, AccordionModule } from "@workspace/ui"
import React from "react"
import { PlusSquare } from 'lucide-react'
import { PlaygroundHeader } from '../playground-header'

export default function AccordionPlayground() {
  const handleSelectionChange = (itemId: string, optionId: string, checked: boolean) => {
    setSelected((prev) => {
      const current = prev[itemId] ?? []
      return {
        ...prev,
        [itemId]: checked
          ? [...current, optionId]
          : current.filter((id) => id !== optionId),
      }
    })
  }
  const [selected, setSelected] = React.useState<Record<string, string[]>>({})
  return (
    <div className="p-6 flex flex-col gap-8">
      <PlaygroundHeader
        title="Accordion"
        storybookPath="accordionfilter--docs"
      />

      <section className="flex flex-col gap-2">

        <h2 className="text-sm text-muted-foreground">Simple</h2>
        <AccordionFilter
          items={[
            {
              id: 'edad',
              label: 'Edad',
              options: [
                { id: 'jovenes', label: 'Adultos jóvenes (18 a 29 años)' },
                { id: 'adultos', label: 'Adultos (30 a 54 años)' },
                { id: 'senior', label: 'Adulto Senior (55+ años)' },
              ],
            },
            {
              id: 'modalidad',
              label: 'Modalidad',
              options: [
                { id: 'presencial', label: 'Presencial' },
                { id: 'online', label: 'Online' },
                { id: 'hibrido', label: 'Híbrido' },
              ],
            },
          ]}
          selected={selected}
          onSelectionChange={handleSelectionChange}
        />
      </section>

      {/* ── Accordion Module ── */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Module — con ícono y link</h2>
        <div className="w-full max-w-lg">
          <AccordionModule
            items={[
              {
                id: 'modulo-1',
                icon: <PlusSquare size={16} />,
                title: 'Módulo 1',
                subtitle: 'Fundamentos de aprendizaje automático',
                content: {
                  title: 'Title Home',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus. In quisque justo senectus in sed adipiscing. Arcu neque feugiat aenean nam accumsan justo ut. Pulvinar urna amet proin sit sed tellus ipsum.',
                  link: {
                    label: 'Aumentar créditos',
                    href: '#',
                  },
                },
              },
              {
                id: 'modulo-2',
                icon: <PlusSquare size={16} />,
                title: 'Módulo 2',
                subtitle: 'Redes neuronales y deep learning',
                content: {
                  title: 'Title Home',
                  description:
                    'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
                  link: {
                    label: 'Aumentar créditos',
                    href: '#',
                  },
                },
              },
            ]}
          />
        </div>
      </section>
    </div>

  )

}