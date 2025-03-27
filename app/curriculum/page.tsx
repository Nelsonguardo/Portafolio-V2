import Image from "next/image"
import { Download, Briefcase, GraduationCap, Code, Award, FileText } from "lucide-react"
import PageLayout from "@/components/layout/PageLayout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExperienceTimeline from "@/components/curriculum/ExperienceTimeline"
import SkillsCard from "@/components/curriculum/SkillsCard"
import CTASection from "@/components/shared/CTASection"
import { workExperience, education, certifications } from "@/data/experience"
import { programmingLanguages, frontendSkills, toolsAndTechnologies, softSkills } from "@/data/skills"

export default function CurriculumPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-muted/30">
        <div className="container py-12 md:py-24">
          <div className="mx-auto max-w-[980px] flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Curriculum Vitae</h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Desarrollador Full Stack con experiencia en el diseño e implementación de soluciones web y aplicaciones
                empresariales.
              </p>
              <div className="mt-6">
                <Button className="gap-2" asChild>
                  <a href="/cv/CV_NELSON_GUARDO_ES.pdf" download>
                    <Download className="h-4 w-4" />
                    Descargar CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-background shadow-lg">
              <Image src="/images/profile.jpeg" alt="Nelson Guardo" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-[980px]">
          <Tabs defaultValue="experiencia" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="experiencia" className="gap-2">
                  <Briefcase className="h-4 w-4 hidden sm:inline" />
                  Experiencia
                </TabsTrigger>
                <TabsTrigger value="habilidades" className="gap-2">
                  <Code className="h-4 w-4 hidden sm:inline" />
                  Habilidades
                </TabsTrigger>
                <TabsTrigger value="educacion" className="gap-2">
                  <GraduationCap className="h-4 w-4 hidden sm:inline" />
                  Educación
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Experiencia Laboral */}
            <TabsContent value="experiencia" className="mt-0">
              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-black dark:text-white" />
                  <h2 className="text-2xl font-bold">Experiencia Laboral</h2>
                </div>

                <ExperienceTimeline experiences={workExperience} />
              </div>
            </TabsContent>

            {/* Habilidades */}
            <TabsContent value="habilidades" className="mt-0">
              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-black dark:text-white" />
                  <h2 className="text-2xl font-bold">Habilidades Técnicas</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <SkillsCard title="Lenguajes de Programación" skills={programmingLanguages} />

                  <SkillsCard title="Frontend" skills={frontendSkills} />

                  <SkillsCard title="Herramientas y Tecnologías" badges={toolsAndTechnologies} />

                  <SkillsCard title="Habilidades Blandas" badges={softSkills} />
                </div>
              </div>
            </TabsContent>

            {/* Educación */}
            <TabsContent value="educacion" className="mt-0">
              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-black dark:text-white" />
                  <h2 className="text-2xl font-bold">Educación</h2>
                </div>

                <ExperienceTimeline experiences={education} />

                {/* Certificaciones */}
                <div className="mt-12">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="h-5 w-5 text-black dark:text-white" />
                    <h2 className="text-2xl font-bold">Certificaciones</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <Card key={index} className="flex items-center p-4 gap-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          <FileText className="h-6 w-6 text-black dark:text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium">{cert.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer} - {cert.year}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Interesado en mi perfil?"
        description="Si mi experiencia y habilidades coinciden con lo que estás buscando, me encantaría conversar sobre cómo puedo contribuir a tu proyecto."
        primaryButtonText="Contáctame"
        primaryButtonLink="/contacto"
        secondaryButtonText="Ver mis proyectos"
        secondaryButtonLink="/portafolio"
      />
    </PageLayout>
  )
}

