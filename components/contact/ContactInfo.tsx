import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de contacto</CardTitle>
        <CardDescription>Otras formas de ponerte en contacto conmigo.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-black dark:text-white mt-0.5" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-sm text-muted-foreground">guardonei4@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-black dark:text-white mt-0.5" />
          <div>
            <h3 className="font-medium">Teléfono</h3>
            <p className="text-sm text-muted-foreground">+57 3134702824</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-black dark:text-white mt-0.5" />
          <div>
            <h3 className="font-medium">Ubicación</h3>
            <p className="text-sm text-muted-foreground">Colombia</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

