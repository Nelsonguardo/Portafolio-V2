import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Experience {
  title: string
  company: string
  period: string
  description: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative border-l border-muted pl-6 ml-3">
      {experiences.map((experience, index) => (
        <div key={index} className={`${index !== experiences.length - 1 ? "mb-10" : ""} relative`}>
          <div className="absolute -left-[31px] h-6 w-6 rounded-full border-4 border-background bg-black dark:bg-white"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <p className="text-black dark:text-white font-medium">{experience.company}</p>
            </div>
            <Badge variant="outline" className="w-fit">
              {experience.period}
            </Badge>
          </div>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

