import { HeartIcon } from "lucide-react"
import { cn } from '../../lib/utils'

interface FavoriteButtonProps {
  isAuthenticated: boolean
  isFavorite?: boolean
  disabled?: boolean
  onFavoriteToggle?: () => void
  onAuthRequired?: () => void
}

export function FavoriteButton({
  isAuthenticated = false,
  isFavorite = false,
  disabled = false,
  onFavoriteToggle,
  onAuthRequired,
}: FavoriteButtonProps) {
  function handleClick() {
    if (!isAuthenticated) {
      onAuthRequired?.()
    } else {
      onFavoriteToggle?.()
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      className={cn(
        "flex items-center justify-center transition-colors",
        disabled && "opacity-40 cursor-not-allowed"
      )}
    >
      <HeartIcon
        size={24}
        className={isFavorite ? "text-red-500 fill-red-500" : "text-white fill-white"}
      />
    </button>
  )
}