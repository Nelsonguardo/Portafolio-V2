import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroHome() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Hola, soy Nelson Guardo
        </h1>
        <div className="flex flex-col gap-3 text-xl text-muted-foreground md:text-2xl/relaxed lg:text-3xl/relaxed">
          <p className="text-base md:text-xl lg:text-2xl">
            Desarrollador <span className="text-primary font-semibold">Full Stack</span> especializado en crear
            <span className="text-primary font-semibold"> soluciones digitales</span> que transforman ideas en
            experiencias excepcionales.
          </p>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
            <Link href="/contacto">
              Contáctame
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/portafolio">Ver proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

