export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
}

export const workExperience: Experience[] = [
  {
    title: "Ingeniero Desarrollador",
    company: "Quantum Data System",
    period: "Agosto 2024 - Actualidad",
    description: [
      "Administración de bases de datos: Gestionar y mantener las bases de datos Progress OpenEdge, asegurando su disponibilidad y seguridad.",
      "Gestión de la seguridad: Implementar y mantener políticas de seguridad de la base de datos, incluyendo el control de acceso, la encriptación de datos y la auditoría de accesos.",
      "Soporte: Resolver problemas y errores de la base de datos, proporcionar soporte técnico y consultoría a otros departamentos y usuarios.",
      "Backup y recuperación: Diseñar e implementar estrategias de backup y recuperación para asegurar la integridad y disponibilidad de los datos en caso de fallos o pérdidas.",
      "Actualizaciones y mantenimiento: Planificar e implementar actualizaciones de software, parches y cambios en las configuraciones para mejorar la funcionalidad y la seguridad.",
      "Capacitación y documentación: Desarrollar documentación técnica y guías para usuarios y otros técnicos, así como capacitar a los usuarios en el uso efectivo de las bases de datos.",
    ],
  },
  {
    title: "Desarrollador Full Stack",
    company: "CY de Colombia",
    period: "Marzo 2023 - Junio 2024",
    description: [
      "Desarrollo y mantenimiento de portal web: Lidero el desarrollo y la gestión de un portal web integral, diseñado para optimizar la información y los servicios logísticos, asegurando una plataforma robusta y escalable que respalda operaciones críticas de negocio.",
      "Implantación de módulo de citas: He implementado un módulo de citas innovador, mejorando significativamente la eficiencia logística y la coordinación de la entrada de vehículos, lo que resulta en una reducción notable del tiempo de espera y un aumento en la satisfacción del cliente.",
      "Actualización y mejora continua: Me encargo de la actualización y la mejora continua de las funcionalidades del sistema, aplicando las mejores prácticas de desarrollo para incrementar la eficiencia operativa y la experiencia del usuario.",
      "Administración y optimización de bases de datos: Gestiono bases de datos críticas, asegurando su rendimiento óptimo y seguridad. Mis estrategias proactivas de optimización y mantenimiento soportan la alta disponibilidad y la integridad de los datos esenciales para la toma de decisiones estratégicas.",
    ],
  },
  {
    title: "Desarrollador Full Stack",
    company: "Atlantic Talent Services",
    period: "Agosto 2021 - Enero 2023",
    description: [
      "Estrecha colaboración con el equipo informático para la ejecución satisfactoria de los proyectos.",
      "Resolución eficaz de problemas relacionados con programas PHP.",
      "Garantizar el correcto funcionamiento de los procesos y la infraestructura web.",
      "Desarrollo de scripts para optimizar los sistemas y alcanzar los objetivos de rendimiento.",
      "Pruebas y desarrollo de software adaptado a las necesidades del cliente.",
      "Preparación de documentación detallada para los productos desarrollados.",
      "Uso de depuradores de código fuente y adaptación del software a requisitos específicos.",
      "Entrega puntual y eficaz de los productos en los plazos establecidos.",
    ],
  },
]

export const education: Experience[] = [
  {
    title: "Ingeniero de Sistemas",
    company: "Fundación Universitaria Tecnológico Comfenalco",
    period: "Enero 2016 - Noviembre 2022",
    description: [
      "Formación integral en ingeniería de sistemas con enfoque en desarrollo de software, bases de datos, redes y seguridad informática.",
      "Proyecto de grado enfocado en soluciones web para el sector logístico.",
    ],
  },
]

export interface Certification {
  title: string
  issuer: string
  year: string
}

export const certifications: Certification[] = [
  {
    title: "Desarrollo Web Full Stack",
    issuer: "Udemy",
    year: "2021",
  },
  {
    title: "React.js Avanzado",
    issuer: "Platzi",
    year: "2022",
  },
  {
    title: "Bases de Datos SQL",
    issuer: "Coursera",
    year: "2020",
  },
  {
    title: "Scrum Fundamentals",
    issuer: "Scrum.org",
    year: "2021",
  },
]

