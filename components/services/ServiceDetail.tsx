import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ServiceDetailProps {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  features: {
    title: string
    description: string
  }[]
  imagePosition?: "left" | "right"
}

export default function ServiceDetail({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  features,
  imagePosition = "right",
}: ServiceDetailProps) {
  return (
    <div id={id} className="scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {imagePosition === "left" && (
          <div className="order-2 md:order-1 relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
            <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
          </div>
        )}

        <div className={imagePosition === "left" ? "order-1 md:order-2" : ""}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Accordion type="single" collapsible className="w-full">
            {features.map((feature, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{feature.title}</AccordionTrigger>
                <AccordionContent>{feature.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {imagePosition === "right" && (
          <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
            <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
          </div>
        )}
      </div>
    </div>
  )
}

