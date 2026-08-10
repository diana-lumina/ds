import "../../../packages/ui/src/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BrandProvider } from "@/components/brand-provider"
import { cn } from "@workspace/ui/lib/utils"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      data-brand="tec-360"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans")}
    >
      <body>
        <ThemeProvider>
          <BrandProvider>{children}</BrandProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
