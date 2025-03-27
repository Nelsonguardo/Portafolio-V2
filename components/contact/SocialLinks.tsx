import { Linkedin, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sígueme en redes sociales</CardTitle>
        <CardDescription>Conéctate conmigo en las siguientes plataformas.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <a
            href="https://www.linkedin.com/in/nelson-javier-guardo-camacho-a92b28191/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5 text-black dark:text-white" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Nelsonguardo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5 text-black dark:text-white" />
            <span>GitHub</span>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

