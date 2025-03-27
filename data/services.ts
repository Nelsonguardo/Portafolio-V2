export interface Service {
  id: string
  title: string
  description: string
  icon: string
  detailId?: string
  category?: string
}

export interface ServiceDetail {
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

export const mainServices: Service[] = [
  {
    id: "web-development",
    title: "Desarrollo Web Full Stack",
    description:
      "Desarrollo de aplicaciones web completas utilizando tecnologías modernas como PHP, Laravel, Node.js, React y bases de datos SQL/NoSQL.",
    icon: "Code2",
    detailId: "web-development",
  },
  {
    id: "database-management",
    title: "Gestión de Bases de Datos",
    description:
      "Administración, optimización y mantenimiento de bases de datos MySQL, MongoDB y Progress OpenEdge para garantizar rendimiento y seguridad.",
    icon: "Database",
    detailId: "database-management",
  },
  {
    id: "process-automation",
    title: "Automatización de Procesos",
    description:
      "Implementación de soluciones para automatizar tareas repetitivas y mejorar la eficiencia operativa de tu negocio.",
    icon: "Cog",
    detailId: "process-automation",
  },
  {
    id: "tech-consulting",
    title: "Consultoría Tecnológica",
    description:
      "Asesoramiento experto sobre tecnologías y arquitecturas adecuadas para proyectos web, ayudándote a tomar decisiones informadas.",
    icon: "Lightbulb",
    detailId: "tech-consulting",
  },
]

export const webServices: Service[] = [
  {
    id: "corporate-websites",
    title: "Sitios Web Corporativos",
    description:
      "Desarrollo de sitios web profesionales y responsivos que representan la identidad de tu marca y mejoran tu presencia digital.",
    icon: "Globe",
    category: "web",
  },
  {
    id: "web-apps",
    title: "Aplicaciones Web",
    description:
      "Creación de aplicaciones web dinámicas y escalables con PHP, Laravel, Node.js y React que automatizan procesos y mejoran la eficiencia operativa.",
    icon: "Layers",
    category: "web",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Implementación de tiendas online seguras y optimizadas para convertir visitantes en clientes y aumentar tus ventas.",
    icon: "Server",
    category: "web",
  },
]

export const mobileServices: Service[] = [
  {
    id: "hybrid-apps",
    title: "Apps Híbridas",
    description:
      "Desarrollo de aplicaciones móviles multiplataforma con React Native que funcionan tanto en iOS como en Android, reduciendo costos y tiempo de desarrollo.",
    icon: "Smartphone",
    category: "mobile",
  },
  {
    id: "api-integration",
    title: "Integración con APIs",
    description:
      "Conexión de tus aplicaciones con servicios externos y sistemas internos para una experiencia de usuario fluida y funcional.",
    icon: "Settings",
    category: "mobile",
  },
  {
    id: "pwa",
    title: "PWA",
    description:
      "Creación de Progressive Web Apps que combinan lo mejor de la web y las aplicaciones móviles, con funcionalidad offline y rendimiento optimizado.",
    icon: "Rocket",
    category: "mobile",
  },
]

export const dataServices: Service[] = [
  {
    id: "databases",
    title: "Bases de Datos",
    description:
      "Diseño e implementación de bases de datos MySQL, MongoDB y Progress OpenEdge optimizadas para el rendimiento y la escalabilidad.",
    icon: "Database",
    category: "data",
  },
  {
    id: "data-visualization",
    title: "Visualización de Datos",
    description:
      "Creación de dashboards interactivos y reportes visuales que transforman datos complejos en información accionable para tu negocio.",
    icon: "LineChart",
    category: "data",
  },
  {
    id: "data-migration",
    title: "Migración de Datos",
    description:
      "Servicios de migración de datos entre diferentes sistemas y plataformas, garantizando la integridad y seguridad de la información.",
    icon: "BarChart3",
    category: "data",
  },
]

export const serviceDetails: ServiceDetail[] = [
  {
    id: "web-development",
    title: "Desarrollo Web Full Stack",
    description:
      "Desarrollo aplicaciones web completas y robustas utilizando las tecnologías más demandadas del mercado como PHP, Laravel, Node.js, React y bases de datos SQL/NoSQL. Mi enfoque integral abarca tanto el frontend como el backend para crear soluciones digitales que impulsan el crecimiento de tu negocio.",
    imageSrc: "/images/services/web-development.png",
    imageAlt: "Desarrollo Web Full Stack",
    features: [
      {
        title: "Desarrollo Frontend",
        description:
          "Creación de interfaces de usuario modernas, responsivas y atractivas utilizando HTML5, CSS3, Bootstrap, JavaScript, jQuery y React que ofrecen una experiencia de usuario excepcional.",
      },
      {
        title: "Desarrollo Backend",
        description:
          "Implementación de lógica de negocio robusta y escalable con PHP, Laravel, Node.js y Express, garantizando un rendimiento óptimo y seguridad en tus aplicaciones.",
      },
      {
        title: "Integración de APIs",
        description:
          "Desarrollo e integración de APIs RESTful para conectar tu aplicación con servicios externos y sistemas internos, facilitando la interoperabilidad y la expansión de funcionalidades.",
      },
    ],
  },
  {
    id: "database-management",
    title: "Gestión de Bases de Datos",
    description:
      "Administro y optimizo bases de datos MySQL, MongoDB y Progress OpenEdge para garantizar su rendimiento, seguridad y disponibilidad. Mi experiencia en gestión de datos te ayuda a mantener la integridad de tu información y a tomar decisiones basadas en datos confiables.",
    imageSrc: "/images/services/database-management.png",
    imageAlt: "Gestión de Bases de Datos",
    features: [
      {
        title: "Administración de Bases de Datos",
        description:
          "Gestión integral de bases de datos relacionales (MySQL) y NoSQL (MongoDB), incluyendo configuración, mantenimiento, monitoreo y optimización para un rendimiento óptimo.",
      },
      {
        title: "Seguridad y Respaldo",
        description:
          "Implementación de políticas de seguridad robustas, control de acceso y estrategias de backup y recuperación para proteger tus datos críticos contra pérdidas y accesos no autorizados.",
      },
      {
        title: "Optimización de Consultas",
        description:
          "Análisis y optimización de consultas SQL para mejorar el rendimiento de tus aplicaciones, reducir tiempos de respuesta y minimizar la carga del servidor.",
      },
    ],
    imagePosition: "left",
  },
  {
    id: "process-automation",
    title: "Automatización de Procesos",
    description:
      "Libero tu tiempo y recursos automatizando tareas repetitivas y flujos de trabajo. Mis soluciones de automatización te permiten enfocarte en lo que realmente importa: hacer crecer tu negocio.",
    imageSrc: "/images/services/process-automation.png",
    imageAlt: "Automatización de Procesos",
    features: [
      {
        title: "Flujos de Trabajo Automatizados",
        description:
          "Diseño e implementación de flujos de trabajo que automatizan procesos manuales, reduciendo errores y aumentando la eficiencia operativa.",
      },
      {
        title: "Integración de Sistemas",
        description:
          "Conexión de diferentes plataformas y herramientas para crear un ecosistema digital cohesivo que funciona sin problemas.",
      },
      {
        title: "Scripts y Bots Personalizados",
        description:
          "Desarrollo de scripts y bots a medida para automatizar tareas específicas según las necesidades únicas de tu negocio.",
      },
    ],
    imagePosition: "right",
  },
  {
    id: "tech-consulting",
    title: "Consultoría Tecnológica",
    description:
      "Te guío a través del complejo panorama tecnológico con asesoramiento experto y estratégico. Mi enfoque personalizado te ayuda a tomar decisiones informadas que impulsan el éxito de tus proyectos digitales.",
    imageSrc: "/images/services/tech-consulting.png",
    imageAlt: "Consultoría Tecnológica",
    features: [
      {
        title: "Evaluación de Arquitectura",
        description:
          "Análisis detallado de tu infraestructura tecnológica actual, identificando fortalezas, debilidades y oportunidades de mejora.",
      },
      {
        title: "Selección de Tecnologías",
        description:
          "Recomendaciones imparciales sobre las mejores tecnologías y herramientas para tus proyectos específicos, considerando factores como escalabilidad, mantenibilidad y costo.",
      },
      {
        title: "Planificación Estratégica",
        description:
          "Desarrollo de hojas de ruta tecnológicas que alinean tus inversiones en tecnología con tus objetivos de negocio a corto y largo plazo.",
      },
    ],
    imagePosition: "left",
  },
]

