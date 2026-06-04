"use client"

import * as React from 'react'
import {
  Card,
  CardContent,
} from '../card'
import { BrandButton } from '../brand-button/brand-button'
import { FavoriteButton } from '../favorite-button/favorite-button'
import { RatingBadge } from '../rating-badge/rating-badge'
import { Badge } from '../badge/badge'
import { Button } from '../button/button'

// ─── Props ───────────────────────────────────────────────
export type CardCourseProps = {
  type: 'evaluative' | 'transactional'
  title: string
  category?: string
  price: number
  rating: number
  image: string
  institution?: string
  metadata?: Array<{
    icon?: React.ReactNode
    label: string
  }>
  // Solo transaccional
  badge?: string
  iconBadge?: React.ReactNode
  description?: string
  isFavorite?: boolean
  isAuthenticated?: boolean
  cta?: string
  onAddToCart?: () => void
  onFavoriteToggle?: () => void
  onAuthRequired?: () => void
}

// ─── Componente ──────────────────────────────────────────
export function CardCourse({
  type,
  title,
  category,
  price,
  rating,
  image,
  institution,
  metadata,
  badge,
  iconBadge,
  description,
  isFavorite = false,
  isAuthenticated = false,
  cta,
  onAddToCart,
  onFavoriteToggle,
  onAuthRequired,
}: CardCourseProps) {
  const handleFavorite = () => {
    if (isAuthenticated) {
      onFavoriteToggle?.()
    } else {
      onAuthRequired?.()
    }
  }

  return (
    <Card className="p-0 overflow-hidden max-w-[325px]">
      {/* Imagen hero */}
      <div className="relative ">
        {type === 'transactional' && (
          <img src={image} alt={title} className="w-full object-cover h-[140px]" />
        )}

        {type === 'evaluative' && (
          <img src={image} alt={title} className="w-full object-cover" />
        )}

        {/* Badge descuento — solo transaccional */}
        {type === 'transactional' && badge && (
          <div className="absolute bottom-0 left-0">
            <Badge icon={iconBadge} label={badge} variant="discount" />
          </div>
        )}

        {/* Favorito — solo transaccional */}
        {type === 'transactional' && (
          <div className="absolute top-3 right-3">
            <FavoriteButton
              isAuthenticated={isAuthenticated}
              isFavorite={isFavorite}
              onFavoriteToggle={onFavoriteToggle}
              onAuthRequired={onAuthRequired}
            />
          </div>
        )}

        {/* Rating — solo evaluativa */}
        {type === 'evaluative' && (
          <RatingBadge rating={rating} />
        )}

        {/* Logo institución */}
        {institution && (
          <BrandButton src={institution} alt="Institución" />
        )}
      </div>

      <CardContent className="flex flex-col gap-3 pb-4 pr-4 pl-4">
        {/* Título */}
        <h3 className="font-medium text-md py-4">{title}</h3>

        {/* Categoría */}
        <span className="text-xs text-muted-foreground">{category}</span>

        {/* Rating con estrella — solo transaccional */}
        {type === 'transactional' && (
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">★ {rating}</span>
          </div>
        )}

        {/* Descripción — solo transaccional */}
        {type === 'transactional' && description && (
          <p className="text-xs text-muted-foreground line-clamp-3">
            {description}
          </p>
        )}

        {/* Metainfo + precio — evaluativa */}
        {type === 'evaluative' && (
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
            {metadata?.map((item, index) => (
              <span key={index} className="flex items-center gap-1">
                {item.icon}
                {item.label}
              </span>
            ))}
            <span className="flex items-center justify-end font-semibold text-foreground text-base col-span-1">
              ${price.toLocaleString('es-MX')} MXN
            </span>
          </div>
        )}

        {/* Metainfo + precio + CTA — transaccional */}
        {type === 'transactional' && (
          <>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {metadata?.map((item, index) => (
                <span key={index} className="flex items-center gap-1">
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="font-semibold text-base">
                ${price.toLocaleString('es-MX')} MXN
              </span>
              <Button size="sm" onClick={onAddToCart}>
                {cta}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}