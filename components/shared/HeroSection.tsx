import type React from "react"
interface HeroSectionProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export default function HeroSection({ title, description, children }: HeroSectionProps) {
  return (
    <section className="bg-muted/30">
      <div className="container py-12 md:py-24">
        <div className="mx-auto max-w-[980px] text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{title}</h1>
          {description && <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">{description}</p>}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  )
}

