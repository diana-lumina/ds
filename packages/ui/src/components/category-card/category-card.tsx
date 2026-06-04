import * as React from 'react'
import { Card } from '../card'
import { Button } from '../button'

export type CategoryCardProps = {
    title: string
    description?: string
    src: string
    poster?: string
    ctaLabel?: string
    onCtaClick?: () => void
    className?: string
}

export function CategoryCard({
    title,
    description,
    src,
    poster,
    ctaLabel = 'Explorar ofertas',
    onCtaClick,
    className,
}: CategoryCardProps) {
    return (
        <Card className="relative overflow-hidden cursor-pointer group p-0 w-[680px] h-[433px]">
            <video
                src={src}
                poster={poster}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                muted
                loop
                playsInline
            />

            {/* Overlay con gradiente izquierda */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.00) 100%)',
                }}
            />

            {/* Contenido */}
            <div className="relative h-full flex flex-col justify-center p-6 gap-2">
                <h3 className="text-white font-bold text-2xl leading-tight">
                    {title}
                </h3>
                {description && (
                    <p className="text-white/80 text-sm">
                        {description}
                    </p>
                )}
                {ctaLabel && (
                    <div className="mt-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={onCtaClick}
                            className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm"
                        >
                            {ctaLabel} →
                        </Button>
                    </div>
                )}
            </div>
        </Card>
    )
}