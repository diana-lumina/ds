'use client'
import { CardCourse } from '@workspace/ui'
import { Clock, MapPin, BarChart2 } from 'lucide-react'
import { useState } from 'react'
import { PlaygroundHeader } from '../playground-header'

export default function CardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <div className="p-6 flex flex-col gap-8">
      <PlaygroundHeader
        title="Card course"
        storybookPath="cardcourse--docs"
      />

      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Cursos - Evaluativos</h2>
        <CardCourse
          type="evaluative"
          title="Introducción al Machine Learning"
          category="Inteligencia artificial"
          price={22000}
          rating={4.5}
          institution='https://picsum.photos/320/180'
          image="https://picsum.photos/320/180"
          metadata={[
            { icon: <Clock size={12} />, label: '100 horas' },
            { icon: <MapPin size={12} />, label: 'Presencial' },
            { icon: <BarChart2 size={12} />, label: 'Avanzado' },
          ]}
        />
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Cursos - TLG</h2>
        <CardCourse
          type="evaluative"
          title="Introducción al Machine Learning"
          price={22000}
          rating={4.5}
          institution='https://picsum.photos/320/180'
          image="https://picsum.photos/320/180"
          metadata={[
            { icon: <Clock size={12} />, label: '100 horas' },
          ]}
          cta="Agregar al carrito"
        />
      </section>


      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Cursos - Transaccionales</h2>
        <CardCourse
          type="transactional"
          title="Introducción al Machine Learning"
          category="Inteligencia artificial"
          price={22000}
          rating={4.5}
          iconBadge={<Clock size={12} />}
          badge="15 %"
          description="Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus. In quisque justo senectus in sed adipiscing. "
          institution='https://picsum.photos/320/180'
          image="https://picsum.photos/320/180"
          isAuthenticated={isAuthenticated}
          metadata={[
            { icon: <Clock size={12} />, label: '100 horas' },
            { icon: <MapPin size={12} />, label: 'Presencial' },
            { icon: <BarChart2 size={12} />, label: 'Avanzado' },
          ]}
          cta="Agregar al carrito"
        />
      </section>
    </div>
  )
}