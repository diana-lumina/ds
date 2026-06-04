import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const userImageVariants = cva("", {
  variants: {
    size: {
      sm: "[&>img]:h-8 [&>img]:w-8 h-8 w-8",
      md: "[&>img]:h-10 [&>img]:w-10 h-10 w-10",
      lg: "[&>img]:h-14 [&>img]:w-14 h-14 w-14",
      xl: "[&>img]:h-20 [&>img]:w-20 h-20 w-20",
    },
  },
  defaultVariants: {
    size: "md",
  },
})


export type UserImageProps = VariantProps<typeof userImageVariants> & {
  image?: string
  //Texto, pueden ser las inicialesd del Usuario
  fallback?: string
  alt?: string
  className?: string
}

export function UserImage({
  image,
  fallback,
  alt = "Avatar de usuario",
  size,
  className,
}: UserImageProps) {
  return (
    <Avatar className={cn(userImageVariants({ size }), className)}>
      <AvatarImage src={image} alt={alt} />
      <AvatarFallback>
        {fallback ?? <DefaultFallback />}
      </AvatarFallback>
    </Avatar>
  )
}

function DefaultFallback() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[60%] w-[60%] text-muted-foreground"
      aria-hidden="true"
    >
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  )
}
