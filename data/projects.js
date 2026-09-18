/*
 * ZHAW TV — base de datos de proyectos
 * ------------------------------------------------------------
 * Para agregar un proyecto, copia un bloque y cambia los datos.
 *
 * category  "web" | "design" | "video"  (define en qué filtro aparece)
 * title     main: primera línea (blanca) · highlight: línea resaltada en lima
 * cover     ruta de la portada que se ve dentro del televisor
 *           (recomendado: WebP 1600×1000 px, 16:10, en assets/images/projects/covers/)
 *           Si está vacío, el televisor muestra barras de color "sin señal".
 * url       enlace a "Ver sitio / Ver proyecto" (vacío = se oculta el botón)
 * tags      etiquetas cortas
 * description / metric  textos en ES y EN (metric es opcional)
 *
 * caseStudy contenido del modal "Caso de estudio" (todo es opcional):
 *   year      "2024"
 *   client    "Nombre del cliente"
 *   role      { es, en }   ej. "Diseño y desarrollo web"
 *   overview  { es, en }   resumen ampliado del proyecto
 *   challenge { es, en }   el reto
 *   solution  { es, en }   lo que se hizo
 *   results   { es, en }   resultados
 *   gallery   hasta 6 fotos: [{ src: "assets/images/projects/case/xx-01.webp", alt: { es, en } }, …]
 *             (recomendado: WebP 1600 px de ancho, en assets/images/projects/case/)
 *   Si un campo está vacío no se muestra; si no hay fotos, el modal muestra
 *   marcos "Próximamente".
 *
 * El orden del arreglo es el orden de los canales (CH.01, CH.02…).
 */
window.ZHAW_PROJECTS = [
  {
    id: "banos-brasilia",
    category: "web",
    title: { main: "Baños", highlight: "Brasilia" },
    cover: "",
    url: "https://www.banosbrasilia.co/",
    caseStudy: {
      year: "",
      client: "",
      role: { es: "", en: "" },
      overview: { es: "", en: "" },
      challenge: { es: "", en: "" },
      solution: { es: "", en: "" },
      results: { es: "", en: "" },
      gallery: [
        // { src: "assets/images/projects/case/ID-01.webp", alt: { es: "", en: "" } },
      ],
    },
    tags: ["Web Design", "Branding", "WordPress", "SEO", "UX/UI"],
    description: {
      es: "Rediseño de identidad y sitio web, reorganizando navegación y contenidos para mejorar su posicionamiento y aumentar las visitas.",
      en: "Identity and website redesign, restructuring navigation and content to improve search positioning and grow traffic.",
    },
    metric: { es: "+300% de visitas", en: "+300% website visits" },
  },
  {
    id: "fish-colombia",
    category: "web",
    title: { main: "Fish", highlight: "Colombia" },
    cover: "",
    url: "https://www.fishcolombia.com/es/",
    caseStudy: {
      year: "",
      client: "",
      role: { es: "", en: "" },
      overview: { es: "", en: "" },
      challenge: { es: "", en: "" },
      solution: { es: "", en: "" },
      results: { es: "", en: "" },
      gallery: [
        // { src: "assets/images/projects/case/ID-01.webp", alt: { es: "", en: "" } },
      ],
    },
    tags: ["Web Design", "WordPress"],
    description: {
      es: "Diseño y desarrollo de sitio corporativo en WordPress, estructurando contenido, navegación e identidad visual.",
      en: "Design and development of a corporate WordPress website, structuring content, navigation and visual identity.",
    },
  },
  {
    id: "colombian-safaris",
    category: "web",
    title: { main: "Colombian", highlight: "Safaris" },
    cover: "",
    url: "https://www.colombiansafaris.com/es",
    caseStudy: {
      year: "",
      client: "",
      role: { es: "", en: "" },
      overview: { es: "", en: "" },
      challenge: { es: "", en: "" },
      solution: { es: "", en: "" },
      results: { es: "", en: "" },
      gallery: [
        // { src: "assets/images/projects/case/ID-01.webp", alt: { es: "", en: "" } },
      ],
    },
    tags: ["Web Design", "WordPress"],
    description: {
      es: "Diseño y adaptación del sitio en WordPress, organizando información, diseño visual y navegación para presentar los servicios de forma clara y profesional.",
      en: "WordPress website design and adaptation, organizing information, visuals and navigation to present the services clearly and professionally.",
    },
    metric: {
      es: "+400% en reservas después del primer mes del lanzamiento",
      en: "+400% bookings after the first month post-launch",
    },
  },
  {
    id: "armando-butron",
    category: "web",
    title: { main: "Armando", highlight: "Butrón" },
    cover: "",
    url: "https://www.armandobutron.com/",
    caseStudy: {
      year: "",
      client: "",
      role: { es: "", en: "" },
      overview: { es: "", en: "" },
      challenge: { es: "", en: "" },
      solution: { es: "", en: "" },
      results: { es: "", en: "" },
      gallery: [
        // { src: "assets/images/projects/case/ID-01.webp", alt: { es: "", en: "" } },
      ],
    },
    tags: [],
    description: { es: "Proyecto web", en: "Web project" },
  },
  {
    id: "305800pain",
    category: "web",
    title: { main: "", highlight: "305800PAIN" },
    cover: "",
    url: "https://305800pain.com/",
    caseStudy: {
      year: "",
      client: "",
      role: { es: "", en: "" },
      overview: { es: "", en: "" },
      challenge: { es: "", en: "" },
      solution: { es: "", en: "" },
      results: { es: "", en: "" },
      gallery: [
        // { src: "assets/images/projects/case/ID-01.webp", alt: { es: "", en: "" } },
      ],
    },
    tags: [],
    description: { es: "Proyecto web", en: "Web project" },
  },
  {
    id: "davivienda-libro-2021",
    category: "web",
    title: { main: "Davivienda Corredores", highlight: "Libro 2021" },
    cover: "",
    url: "https://libro.daviviendacorredores.com/2021/",
    caseStudy: {
      year: "",
      client: "",
      role: { es: "", en: "" },
      overview: { es: "", en: "" },
      challenge: { es: "", en: "" },
      solution: { es: "", en: "" },
      results: { es: "", en: "" },
      gallery: [
        // { src: "assets/images/projects/case/ID-01.webp", alt: { es: "", en: "" } },
      ],
    },
    tags: [],
    description: { es: "Proyecto web / experiencia digital", en: "Web project / digital experience" },
  },

  /* ---------- DESIGN (listo para agregar) ----------
  {
    id: "mi-proyecto-de-diseno",
    category: "design",
    title: { main: "Nombre", highlight: "Proyecto" },
    cover: "assets/images/projects/covers/mi-proyecto.webp",
    url: "https://www.behance.net/...",
    caseStudy: {
      year: "",
      client: "",
      role: { es: "", en: "" },
      overview: { es: "", en: "" },
      challenge: { es: "", en: "" },
      solution: { es: "", en: "" },
      results: { es: "", en: "" },
      gallery: [
        // { src: "assets/images/projects/case/ID-01.webp", alt: { es: "", en: "" } },
      ],
    },
    tags: ["Branding"],
    description: { es: "…", en: "…" },
  },
  ---------------------------------------------------- */

  /* ---------- VIDEO (listo para agregar) ----------
  {
    id: "mi-video",
    category: "video",
    title: { main: "Nombre", highlight: "Video" },
    cover: "assets/images/projects/covers/mi-video.webp",
    url: "https://vimeo.com/...",
    caseStudy: {
      year: "",
      client: "",
      role: { es: "", en: "" },
      overview: { es: "", en: "" },
      challenge: { es: "", en: "" },
      solution: { es: "", en: "" },
      results: { es: "", en: "" },
      gallery: [
        // { src: "assets/images/projects/case/ID-01.webp", alt: { es: "", en: "" } },
      ],
    },
    tags: ["Motion", "Edición"],
    description: { es: "…", en: "…" },
  },
  --------------------------------------------------------- */
];
