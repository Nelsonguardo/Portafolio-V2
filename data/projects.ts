export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription?: string
  imageSrc: string
  technologies: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
  features?: string[]
  date?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "TransCaribe",
    slug: "transcaribe",
    description:
      "Aplicación web desarrollada como proyecto universitario para la gestión de buses, rutas y estaciones del servicio de transporte masivo integrado, Transcaribe.",
    longDescription:
      "TransCaribe es una aplicación web desarrollada como proyecto universitario para la gestión de buses, rutas y estaciones del servicio de transporte masivo integrado, Transcaribe. Este proyecto fue realizado por estudiantes como parte de su formación académica. El sistema permite a los administradores gestionar la flota de buses, crear y modificar rutas, y monitorear las estaciones en tiempo real.",
    imageSrc: "/images/transcaribe.jpeg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "web",
    features: [
      "Panel de administración para gestión de flota",
      "Sistema de creación y modificación de rutas",
      "Monitoreo en tiempo real de estaciones",
      "Interfaz de usuario para consulta de horarios",
    ],
    date: "Enero 2022 - Mayo 2022",
  },
  {
    id: "2",
    title: "Sistema de Citas",
    slug: "citas",
    description: "Implementación de módulos de citas para la administración eficiente del ingreso de vehículos.",
    longDescription:
      "Sistema de gestión de citas desarrollado para optimizar el proceso de ingreso de vehículos a instalaciones logísticas. La aplicación permite a los usuarios programar citas, seleccionar horarios disponibles y recibir confirmaciones automáticas.",
    imageSrc: "/images/citas.jpeg",
    technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    category: "web",
    features: [
      "Calendario interactivo para selección de fechas",
      "Sistema de notificaciones por email",
      "Panel de administración para gestión de citas",
      "Reportes estadísticos de uso",
    ],
    date: "Junio 2022 - Agosto 2022",
  },
  {
    id: "3",
    title: "Películas",
    slug: "peliculas",
    description:
      "Página para discutir y comentar sobre películas, desarrollada como un proyecto para practicar y aprender las tecnologías utilizadas. Desarrollada con ReactJS para una experiencia de usuario fluida.",
    longDescription:
      "Plataforma de discusión de películas que permite a los usuarios compartir opiniones, calificar películas y descubrir nuevos títulos basados en sus preferencias. Este proyecto fue realizado como parte de un ejercicio práctico para aprender y aplicar tecnologías como React, MongoDB, CSS, JavaScript, NodeJS y Express, ofreciendo una experiencia de usuario fluida y dinámica.",
    imageSrc: "/images/peliculas.jpeg",
    technologies: ["ReactJS", "MongoDB", "CSS", "JavaScript", "NodeJS", "Express"],
    category: "otros",
    features: [
      "Sistema de calificación de películas",
      "Comentarios y discusiones en tiempo real",
      "Recomendaciones personalizadas",
      "Búsqueda avanzada de títulos",
    ],
    date: "Septiembre 2022 - Noviembre 2022",
  },
  {
    id: "4",
    title: "SignUp",
    slug: "signup",
    description: "Implementación de módulo de registro para la administración eficiente del ingreso de usuarios.",
    longDescription:
      "Sistema de registro y autenticación de usuarios con múltiples niveles de acceso y verificación en dos pasos. Diseñado para garantizar la seguridad y facilidad de uso en aplicaciones empresariales.",
    imageSrc: "/images/signup.jpeg",
    technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    category: "app",
    features: [
      "Autenticación de dos factores",
      "Gestión de roles y permisos",
      "Recuperación de contraseñas segura",
      "Integración con servicios de OAuth",
    ],
    date: "Diciembre 2022 - Febrero 2023",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "todos") {
    return projects
  }
  return projects.filter((project) => project.category === category)
}

export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject) return []

  return projects
    .filter((project) => project.slug !== currentSlug && project.category === currentProject.category)
    .slice(0, limit)
}

