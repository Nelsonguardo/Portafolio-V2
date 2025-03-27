import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface SkillWithLevel {
  name: string
  level: number
}

interface SkillBadge {
  name: string
}

interface SkillsCardProps {
  title: string
  skills?: SkillWithLevel[]
  badges?: SkillBadge[]
}

export default function SkillsCard({ title, skills, badges }: SkillsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className={skills ? "space-y-4" : ""}>
        {skills &&
          skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}

        {badges && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant={skills ? "default" : "outline"}>
                {badge.name}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

