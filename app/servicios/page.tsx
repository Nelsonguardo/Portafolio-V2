import {
  BarChart3,
  Cog,
  Code2,
  Database,
  Layers,
  LineChart,
  Lightbulb,
  Rocket,
  Server,
  Settings,
  Smartphone,
  Globe,
} from "lucide-react"
import PageLayout from "@/components/layout/PageLayout"
import HeroSection from "@/components/shared/HeroSection"
import ServiceCard from "@/components/services/ServiceCard"
import ServiceDetail from "@/components/services/ServiceDetail"
import CTASection from "@/components/shared/CTASection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeading from "@/components/shared/SectionHeading"
import { mainServices, webServices, mobileServices, dataServices, serviceDetails } from "@/data/services"

// Mapeo de nombres de iconos a componentes de iconos
const iconMap: Record<string, any> = {
  BarChart3,
  Cog,
  Code2,
  Database,
  Layers,
  LineChart,
  Lightbulb,
  Rocket,
  Server,
  Settings,
  Smartphone,
  Globe,
}

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Mis Servicios"
        description="Ofrezco soluciones tecnológicas personalizadas para ayudar a tu negocio a crecer y destacar en el entorno digital."
      />

      {/* Main Services Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={iconMap[service.icon]}
                link={service.detailId ? `#${service.detailId}` : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories Tabs */}
      <section className="bg-muted/30 py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title="Áreas de Especialización" centered className="mb-8" />

            <Tabs defaultValue="web" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="web">Sitios Web</TabsTrigger>
                  <TabsTrigger value="mobile">Apps Móviles</TabsTrigger>
                  <TabsTrigger value="data">Datos</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="web" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {webServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      icon={iconMap[service.icon]}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mobileServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      icon={iconMap[service.icon]}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="data" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dataServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      icon={iconMap[service.icon]}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-[980px]">
          <SectionHeading title="Servicios Detallados" centered className="mb-12" />

          <div className="space-y-12">
            {serviceDetails.map((service) => (
              <ServiceDetail
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                features={service.features}
                imagePosition={service.imagePosition}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para transformar tu negocio?"
        description="Conversemos sobre tus necesidades y cómo puedo ayudarte a alcanzar tus objetivos tecnológicos."
        primaryButtonText="Solicitar una consulta"
        primaryButtonLink="/contacto"
        secondaryButtonText="Ver mis proyectos"
        secondaryButtonLink="/portafolio"
      />
    </PageLayout>
  )
}

