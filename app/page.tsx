import PageLayout from "@/components/layout/PageLayout"
import ServicesSection from "@/components/home/ServicesSection"
import ProjectsSection from "@/components/home/ProjectsSection"
import CTASection from "@/components/shared/CTASection"
import Image from "next/image"

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Hola, soy Nelson Guardo
            </h1>
            <div className="mt-4 flex flex-col gap-3 text-xl text-muted-foreground md:text-2xl/relaxed">
              <p className="text-base md:text-xl">
                Desarrollador <span className="text-black dark:text-white font-semibold">Full Stack</span> especializado en crear
                <span className="text-black dark:text-white font-semibold"> soluciones digitales</span> que transforman ideas en
                experiencias excepcionales.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/contacto"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 px-4 py-2 rounded-md text-center sm:text-left"
              >
                Contáctame
              </a>
              <a
                href="/portafolio"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md text-center sm:text-left"
              >
                Ver proyectos
              </a>
            </div>
          </div>
          <div className="w-40 h-40 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-background shadow-lg order-first md:order-last mb-6 md:mb-0">
            <Image src="/images/profile.jpeg" alt="Nelson Guardo" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* CTA Section */}
      <CTASection
        title="¿Listo para impulsar tu proyecto?"
        description="Conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales."
        primaryButtonText="Iniciar conversación"
        primaryButtonLink="/contacto"
      />
    </PageLayout>
  )
}

