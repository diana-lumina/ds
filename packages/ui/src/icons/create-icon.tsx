import * as React from "react"

export interface IconProps extends Omit<
  React.SVGProps<SVGSVGElement>,
  "children"
> {
  /** Tamaño standalone. Dentro de un componente del DS lo overridea el CSS del host. */
  size?: number | string
  /** Si se pasa, el ícono deja de ser decorativo y se anuncia el título. */
  title?: string
}

export function createIcon(
  displayName: string,
  paths: React.ReactNode,
  viewBox = "0 0 24 24"
) {
  function Icon({ size = 24, title, className, ...props }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        aria-hidden={title ? undefined : true}
        focusable="false"
        className={className}
        {...props}
      >
        {title ? <title>{title}</title> : null}
        {paths}
      </svg>
    )
  }

  Icon.displayName = displayName
  return Icon
}
