import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Calendar, Code } from "lucide-react"
import { notFound } from "next/navigation"

import PageLayout from "@/components/layout/PageLayout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getProjectBySlug, getRelatedProjects } from "@/data/projects"

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(params.slug)

  return (
    <PageLayout>
      {/* Project Header */}
      <section className="bg-muted/30">
        <div className="container py-8">
          <div className="flex flex-col gap-4">
            <Link
              href="/portafolio"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Portafolio
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="container py-8 md:py-12">
        <div className="mx-auto max-w-[980px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden mb-8">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="object-cover w-full"
                />
              </div>

              <div className="prose max-w-none">
                <h2>Descripción del Proyecto</h2>
                <p>{project.longDescription || project.description}</p>

                {project.features && (
                  <>
                    <h2>Características Principales</h2>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                <h2>Desafíos y Soluciones</h2>
                <p>
                  Uno de los principales desafíos fue desarrollar un sistema que pudiera manejar grandes volúmenes de
                  datos en tiempo real. Para solucionar esto, implementé una arquitectura optimizada con consultas SQL
                  eficientes y un sistema de caché para reducir la carga del servidor.
                </p>
                <p>
                  Otro desafío fue crear una interfaz de usuario intuitiva que pudiera ser utilizada por personas con
                  diferentes niveles de habilidad tecnológica. Realicé pruebas de usabilidad con diversos grupos de
                  usuarios para refinar la experiencia.
                </p>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Detalles del Proyecto</h3>

                <div className="space-y-4">
                  {project.date && (
                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        Fecha
                      </div>
                      <p className="text-sm">{project.date}</p>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Code className="mr-2 h-4 w-4" />
                      Tecnologías
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex flex-col gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href={project.githubUrl} className="flex items-center">
                          <Github className="mr-2 h-4 w-4" />
                          Ver código fuente
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href={project.liveUrl} className="flex items-center">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver demo en vivo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="bg-muted/30">
          <div className="container py-12">
            <div className="mx-auto max-w-[980px]">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Más Proyectos</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <div key={relatedProject.id} className="bg-background rounded-lg overflow-hidden shadow-sm">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={relatedProject.imageSrc || "/placeholder.svg"}
                        alt={relatedProject.title}
                        width={500}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{relatedProject.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {relatedProject.description.substring(0, 60)}...
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/portafolio/${relatedProject.slug}`}>Ver detalles</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}

