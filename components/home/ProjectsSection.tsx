import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/shared/SectionHeading"

export default function ProjectsSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-4">
        <SectionHeading
          title="Proyectos Destacados"
          description="Una selección de mis trabajos más recientes y relevantes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
          <ProjectCard
            title="TransCaribe"
            description="Aplicación web para la gestión de buses, rutas y estaciones del servicio de transporte masivo integrado, Transcaribe."
            imageSrc="/images/transcaribe.jpeg"
            imageAlt="TransCaribe"
            technologies={["PHP", "MySQL", "HTML", "CSS", "JavaScript"]}
            link="/portafolio/transcaribe"
          />

          <ProjectCard
            title="Sistema de Citas"
            description="Implementación de módulos de citas para la administración eficiente del ingreso de vehículos."
            imageSrc="/images/citas.jpeg"
            imageAlt="Sistema de Citas"
            technologies={["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"]}
            link="/portafolio/citas"
          />
        </div>
        <div className="mt-8 flex justify-center w-full">
          <Button asChild variant="outline">
            <Link href="/portafolio">Ver todos los proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  technologies: string[]
  link: string
}

function ProjectCard({ title, description, imageSrc, imageAlt, technologies, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-0 bg-background shadow-md h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={800}
            height={400}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="mb-2">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 mt-auto">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={link}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

