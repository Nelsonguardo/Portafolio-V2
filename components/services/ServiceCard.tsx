import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  link?: string
}

export default function ServiceCard({ title, description, icon: Icon, link }: ServiceCardProps) {
  return (
    <Card className="bg-background transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4 flex items-center justify-center">
          <Icon className="h-6 w-6 text-black dark:text-white" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
      {link && (
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href={link}>Más información</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

