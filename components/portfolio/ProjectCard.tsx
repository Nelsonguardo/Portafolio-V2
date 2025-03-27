import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  technologies: string[]
  slug: string
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  technologies,
  slug,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border bg-background transition-all hover:shadow-md h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={800}
            height={400}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <Button size="sm" variant="secondary" className="h-9 rounded-full" asChild>
              <Link href={`/portafolio/${slug}`}>
                <Eye className="mr-2 h-4 w-4" />
                Ver detalles
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl line-clamp-1">{title}</CardTitle>
          <div className="flex gap-2">
            {githubUrl && (
              <Link
                href={githubUrl}
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Sitio web</span>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">{description}</CardDescription>
        <div className="mt-auto pt-4">
          <Button variant="outline" size="sm" className="w-full mt-2" asChild>
            <Link href={`/portafolio/${slug}`}>Ver detalles</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

