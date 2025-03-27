export interface SkillWithLevel {
  name: string
  level: number
}

export interface SkillBadge {
  name: string
}

export const programmingLanguages: SkillWithLevel[] = [
  { name: "PHP", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "NodeJS", level: 80 },
  { name: "SQL", level: 85 },
]

export const frontendSkills: SkillWithLevel[] = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Bootstrap", level: 85 },
  { name: "ReactJS", level: 80 },
  { name: "jQuery", level: 85 },
]

export const toolsAndTechnologies: SkillBadge[] = [
  { name: "Laravel" },
  { name: "Git" },
  { name: "JIRA" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "Progress OpenEdge" },
  { name: "Metodologías Ágiles" },
  { name: "REST API" },
  { name: "JSON" },
  { name: "Express" },
]

export const softSkills: SkillBadge[] = [
  { name: "Trabajo en equipo" },
  { name: "Comunicación efectiva" },
  { name: "Resolución de problemas" },
  { name: "Gestión del tiempo" },
  { name: "Adaptabilidad" },
  { name: "Pensamiento analítico" },
  { name: "Atención al detalle" },
  { name: "Proactividad" },
]

