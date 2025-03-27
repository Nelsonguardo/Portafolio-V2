import PageLayout from "@/components/layout/PageLayout"
import HeroSection from "@/components/shared/HeroSection"
import ProjectFilter from "@/components/portfolio/ProjectFilter"
import ProjectCard from "@/components/portfolio/ProjectCard"
import CTASection from "@/components/shared/CTASection"
import { getProjectsByCategory } from "@/data/projects"

export default function PortfolioPage() {
  const allProjects = getProjectsByCategory("todos")
  const webProjects = getProjectsByCategory("web")
  const appProjects = getProjectsByCategory("app")
  const otherProjects = getProjectsByCategory("otros")

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "web", label: "Web" },
    { id: "app", label: "Apps" },
    { id: "otros", label: "Otros" },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Mi Portafolio"
        description="Una colección de proyectos que demuestran mis habilidades y experiencia como desarrollador Full Stack."
      />

      {/* Portfolio Tabs Section */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <ProjectFilter categories={categories} defaultCategory="todos">
            {{
              todos: (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      imageSrc={project.imageSrc}
                      imageAlt={project.title}
                      technologies={project.technologies}
                      slug={project.slug}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                    />
                  ))}
                </div>
              ),
              web: (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {webProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      imageSrc={project.imageSrc}
                      imageAlt={project.title}
                      technologies={project.technologies}
                      slug={project.slug}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                    />
                  ))}
                </div>
              ),
              app: (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {appProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      imageSrc={project.imageSrc}
                      imageAlt={project.title}
                      technologies={project.technologies}
                      slug={project.slug}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                    />
                  ))}
                </div>
              ),
              otros: (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      imageSrc={project.imageSrc}
                      imageAlt={project.title}
                      technologies={project.technologies}
                      slug={project.slug}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                    />
                  ))}
                </div>
              ),
            }}
          </ProjectFilter>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Tienes un proyecto en mente?"
        description="Estoy disponible para nuevos proyectos. Conversemos sobre cómo puedo ayudarte."
        primaryButtonText="Contáctame"
        primaryButtonLink="/contacto"
      />
    </PageLayout>
  )
}

