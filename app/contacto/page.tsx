import Image from "next/image"
import PageLayout from "@/components/layout/PageLayout"
import HeroSection from "@/components/shared/HeroSection"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import SocialLinks from "@/components/contact/SocialLinks"
import SectionHeading from "@/components/shared/SectionHeading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Contacto"
        description="¿Tienes un proyecto en mente o alguna pregunta? Estoy aquí para ayudarte. Completa el formulario y me pondré en contacto contigo lo antes posible."
      />

      {/* Contact Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <ContactInfo />
              <SocialLinks />

              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-[200px] w-full relative">
                    <Image
                      src="/mapa.png"
                      alt="Mapa"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-12 md:py-24">
        <div className="container">
          <SectionHeading
            title="Preguntas frecuentes"
            description="Respuestas a algunas preguntas comunes que podrías tener."
            centered
            className="mb-12"
          />

          <div className="mx-auto max-w-[980px] grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">¿Cuál es tu proceso de trabajo?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mi proceso comienza con una consulta inicial para entender tus necesidades, seguido de una propuesta
                  detallada. Después de la aprobación, desarrollo el proyecto en fases con revisiones regulares para
                  asegurar que cumple con tus expectativas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">¿Cuánto tiempo toma completar un proyecto?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  El tiempo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-3 semanas,
                  mientras que aplicaciones más complejas pueden requerir 2-3 meses. Siempre proporciono un cronograma
                  detallado al inicio del proyecto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">¿Ofreces mantenimiento después del lanzamiento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sí, ofrezco servicios de mantenimiento y soporte continuo para asegurar que tu sitio o aplicación
                  funcione sin problemas. Puedo proporcionar actualizaciones, correcciones de errores y mejoras según
                  sea necesario.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">¿Trabajas con clientes internacionales?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutamente. He trabajado con clientes de diferentes países y puedo adaptarme a diferentes zonas
                  horarias para facilitar la comunicación. Utilizo herramientas de colaboración en línea para mantener
                  el proyecto en marcha sin problemas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

