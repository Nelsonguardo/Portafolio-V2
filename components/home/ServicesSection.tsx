import type React from "react"
import { Code2, Database, Cog, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeading from "@/components/shared/SectionHeading"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4">
        <SectionHeading
          title="Mis Servicios"
          description="Ofrezco soluciones tecnológicas personalizadas para ayudar a tu negocio a crecer y destacar en el entorno digital."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <ServiceCard
            icon={<Code2 className="h-10 w-10 text-black dark:text-white mb-2" />}
            title="Desarrollo Web Full Stack"
            description="Aplicaciones web completas con PHP, Laravel, Node.js, React y bases de datos SQL/NoSQL."
          />
          <ServiceCard
            icon={<Database className="h-10 w-10 ttext-black dark:text-white mb-2" />}
            title="Gestión de Bases de Datos"
            description="Administración y optimización de MySQL, MongoDB y Progress OpenEdge."
          />
          <ServiceCard
            icon={<Cog className="h-10 w-10 text-black dark:text-white mb-2" />}
            title="Automatización de Procesos"
            description="Soluciones que automatizan tareas repetitivas y mejoran la eficiencia operativa."
          />
          <ServiceCard
            icon={<Lightbulb className="h-10 w-10 text-black dark:text-white mb-2" />}
            title="Consultoría Tecnológica"
            description="Asesoramiento experto para optimizar tus proyectos digitales y estrategias tecnológicas."
          />
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-background h-full">
      <CardHeader className="pb-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

