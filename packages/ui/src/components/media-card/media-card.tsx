import * as React from 'react'
import { Card } from '../card'
import { cn } from '../../lib/utils'
import { PlayIcon, MessageSquareIcon } from 'lucide-react'
import { Button } from '../button'

// ─── Props ───────────────────────────────────────────────
export type MediaCardProps = {
    type: 'testimonial' | 'testimonial-l' | 'testimonial-s'
    src?: string
    poster?: string
    imageAlt?: string
    name?: string
    description?: string
    badge?: {
        label: string
        icon?: React.ReactNode
    }
    isEmpty?: boolean
    emptyMessage?: string
    onClick?: () => void
}

// ─── Componente ──────────────────────────────────────────
export function MediaCard({
    type,
    src,
    imageAlt,
    poster,
    name,
    description,
    badge,
    isEmpty = false,
    emptyMessage = 'No se ha encontrado ningún testimonio',
    onClick,
}: MediaCardProps) {

    // ── Empty state ──
    if (isEmpty) {
        return (
            <Card
                className={cn(
                    'relative overflow-hidden cursor-pointer',
                    type === 'testimonial-s' && 'w-[331px] h-[303px]',
                )}
            >
                <div className="flex flex-col items-center justify-center h-full gap-2 p-4 text-center">
                    <MessageSquareIcon size={24} className="text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">{emptyMessage}</p>
                </div>
            </Card>
        )
    }

    // ── Testimonial (base) ──
    if (type === 'testimonial') {
        return (
            <Card
                className="relative overflow-hidden w-[324px] h-[344px] cursor-pointer group"
                onClick={onClick}
            >
                <div
                    className="absolute inset-0 transition-transform group-hover:scale-105"
                    style={{
                        background: `linear-gradient(180deg, rgba(0,0,0,0.00) 19.83%, rgba(0,0,0,0.08) 40.35%, rgba(0,0,0,0.45) 51.16%, rgba(0,0,0,0.72) 61.96%, rgba(0,0,0,0.88) 73.84%), url(${src}) lightgray 50% / cover no-repeat`,
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
                    <div>
                        <p className="text-white text-xs font-medium truncate">{name}</p>
                        {description && (
                            <p className="text-white/70 text-xs truncate">{description}</p>
                        )}
                    </div>

                    {badge && (
                        <Button>{badge.label}</Button>
                    )}
                </div>
            </Card>
        )
    }

    // ── Testimonial L ──
    if (type === 'testimonial-l') {
        return (
            <Card
                className="relative overflow-hidden w-[331px] h-[548px] cursor-pointer group p-0"
                onClick={onClick}
            >
                {/* Video de fondo */}
                <video
                    src={src}
                    poster={poster}
                    className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                    muted
                    loop
                    playsInline
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.00) 19.83%, rgba(0,0,0,0.08) 40.35%, rgba(0,0,0,0.45) 51.16%, rgba(0,0,0,0.72) 61.96%, rgba(0,0,0,0.88) 73.84%)',
                    }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-2 group-hover:bg-white transition-colors">
                        <PlayIcon size={24} className="text-foreground" />
                    </div>
                </div>

                {/* Nombre */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-xs font-medium truncate">{name}</p>
                </div>
            </Card>
        )
    }

    // ── Testimonial S ──
    if (type === 'testimonial-s') {
        return (
            <Card
                className="relative overflow-hidden w-[331px] h-[303px] cursor-pointer group p-0"
                onClick={onClick}
            >
                <img
                    src={src}
                    alt={imageAlt ?? name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-2 flex flex-col gap-1">
                    {name && (
                        <p className="text-white text-xs font-medium truncate">{name}</p>
                    )}
                    {description && (
                        <p className="text-white/80 text-xs line-clamp-2">{description}</p>
                    )}
                    {badge && (
                        <Button>{badge.label}</Button>
                    )}
                </div>
            </Card>
        )
    }
}