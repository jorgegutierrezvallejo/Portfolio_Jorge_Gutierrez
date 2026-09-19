/*
 * ZHAW TV — base de datos de proyectos
 * ------------------------------------------------------------
 * Para agregar un proyecto, copia un bloque y cambia los datos.
 *
 * category  "web" | "design" | "video"  (define en qué filtro aparece)
 *           Si el proyecto aplica a varios filtros, usa una lista:
 *           category: ["web", "video", "design"]  → se sube una sola vez y aparece
 *           en cada filtro. El número de canal (CH.01…) depende del filtro.
 *
 * views     (opcional) cambios que solo aplican dentro de un filtro. Cualquier campo
 *           del proyecto se puede sobrescribir (cover, coverVideo, description, tags, metric…):
 *             views: {
 *               video:  { coverVideo: "assets/video/projects/xx.mp4", description: { es, en } },
 *               design: { cover: "assets/images/projects/covers/xx-design.webp" },
 *             }
 * title     main: primera línea (blanca) · highlight: línea resaltada en lima
 * cover     ruta de la portada que se ve dentro del televisor
 *           (recomendado: WebP 1600×1000 px, 16:10, en assets/images/projects/covers/)
 *           Si está vacío, el televisor muestra barras de color "sin señal".
 * url       enlace a "Ver sitio / Ver proyecto" (vacío = se oculta el botón)
 *           En el filtro Video el botón pasa a ser "Ver video" y abre el reproductor
 *           grande con el primer video de caseStudy.media (o el de "video", si lo pones).
 * screen    (opcional) captura de página completa que hace scroll en el computador
 *           del filtro Web. Si no se pone, se usa la primera pieza "page" de media.
 * tags      etiquetas cortas
 * description / metric  textos en ES y EN (metric es opcional)
 *
 * coverVideo  (opcional) video MP4 que se reproduce en silencio y en bucle dentro
 *             del televisor, encima de la portada. Ej: "assets/video/projects/xx.mp4"
 *
 * caseStudy contenido del modal "Caso de estudio" (todo es opcional):
 *   logo      logo del cliente (WebP/PNG con fondo transparente, se ve sobre negro)
 *   year      "2024"
 *   client    "Nombre del cliente"
 *   role      { es, en }   ej. "Diseño y desarrollo web"
 *   headline  { es, en }   titular del caso
 *   story     { es: ["párrafo 1", "párrafo 2", …], en: [...] }   texto largo del caso
 *   (si no hay story se usan overview / challenge / solution / results, cada uno { es, en })
 *   media     lista de piezas para la galería, en orden:
 *     { type: "video", src: "….mp4", poster: "….webp", title: { es, en } }
 *         el primer video se muestra grande arriba, junto al título
 *     { type: "page",  src: "….webp", title: { es, en } }
 *         captura de página completa: en la galería se ve en un marco de navegador
 *         (se desplaza al pasar el mouse) y en el visor se lee con scroll
 *     { type: "image", src: "….webp", title: { es, en }, alt: { es, en } }
 *   Cada pieza puede llevar category: "web" | "design" | "video". Al abrir el caso
 *   desde un filtro, sus piezas salen primero y la destacada de arriba es la primera
 *   que no sea una página (en Video → el video, en Diseño → el primer render/foto).
 *   Rutas: assets/images/projects/case/<id>/ y assets/video/projects/
 *   Si un campo está vacío no se muestra; si no hay media, la galería muestra
 *   marcos "Próximamente". (El campo antiguo "gallery" con fotos sigue funcionando.)
 *
 * El orden del arreglo es el orden de los canales (CH.01, CH.02…).
 */
window.ZHAW_PROJECTS = [
  {
    id: "banos-brasilia",
    category: ["web", "video"], // agrega "design" cuando subamos los renders
    title: { main: "Baños", highlight: "Brasilia" },
    cover: "assets/images/projects/covers/banos-brasilia.webp",
    views: {
      // en el filtro Video el televisor reproduce la animación
      video: { coverVideo: "assets/video/projects/banos-brasilia.mp4" },
    },
    url: "https://www.banosbrasilia.co/",
    caseStudy: {
      logo: "assets/images/projects/case/banos-brasilia/logo.webp",
      year: "2026",
      client: "Baños Brasilia",
      role: { es: "", en: "" },
      headline: {
        es: "Baños Brasilia — Evolución de marca y expansión hacia Brasil",
        en: "Baños Brasilia — Brand evolution and expansion into Brazil",
      },
      story: {
        es: [
          "Baños Brasilia nació en 2012 y, con el paso de los años, se ha consolidado como una marca reconocida en Colombia, llevando sus productos a diferentes mercados de Latinoamérica, incluido México.",
          "Como parte de su proceso de crecimiento, la compañía comenzó a proyectar su expansión hacia Brasil. El cliente llegó a nosotros con un objetivo claro: preparar la marca para competir y posicionarse en el mercado brasileño.",
          "El primer reto consistía en desarrollar una presencia digital moderna, capaz de representar la calidad de sus productos y adaptarse a una nueva audiencia. Para ello, diseñamos una nueva página web con una experiencia más actual, visual y funcional, preparada para incorporar el portugués como idioma y facilitar la entrada de la marca a Brasil.",
          "Durante el proceso identificamos una oportunidad adicional: la identidad visual existente no reflejaba completamente la calidad, sofisticación y elegancia de sus productos. Por esta razón, desarrollamos también un rediseño de marca, construyendo una imagen más sólida, contemporánea y alineada con el posicionamiento que Baños Brasilia buscaba alcanzar.",
          "Para elevar aún más la percepción de la marca, trabajamos en la producción de renders y fotografías de producto, creando una dirección visual que destacara los materiales, acabados y detalles de cada referencia. Además, desarrollamos piezas audiovisuales y animaciones de sus productos para comunicar de una manera más atractiva la elegancia, funcionalidad y calidad de la marca.",
          "El resultado fue una transformación integral de su presencia digital y visual. Tras el lanzamiento, el sitio web registró un crecimiento general en visitas y, especialmente, un incremento del 500 % en el tráfico proveniente de Brasil.",
          "Esta nueva presencia digital contribuyó a fortalecer el posicionamiento de Baños Brasilia y a respaldar su proceso de expansión hacia uno de los mercados más importantes de la región.",
        ],
        en: [
          "Baños Brasilia was founded in 2012 and, over the years, has become a well-known brand in Colombia, taking its products to several Latin American markets, including Mexico.",
          "As part of its growth, the company began planning its expansion into Brazil. The client came to us with a clear goal: get the brand ready to compete and position itself in the Brazilian market.",
          "The first challenge was to build a modern digital presence, able to convey the quality of its products and connect with a new audience. We designed a new website with a more current, visual and functional experience, ready to add Portuguese as a language and ease the brand's entry into Brazil.",
          "Along the way we spotted an additional opportunity: the existing visual identity didn't fully reflect the quality, sophistication and elegance of its products. So we also redesigned the brand, building a stronger, contemporary image aligned with the positioning Baños Brasilia wanted to reach.",
          "To further elevate how the brand is perceived, we produced product renders and photography, with an art direction that highlights the materials, finishes and details of each model. We also created videos and product animations to communicate the brand's elegance, functionality and quality in a more engaging way.",
          "The result was a complete transformation of its digital and visual presence. After launch, the website saw overall growth in visits and, above all, a 500% increase in traffic from Brazil.",
          "This new digital presence helped strengthen Baños Brasilia's positioning and supported its expansion into one of the most important markets in the region.",
        ],
      },
      media: [
        {
          type: "video",
          category: "video",
          src: "assets/video/projects/banos-brasilia.mp4",
          poster: "assets/video/projects/banos-brasilia-poster.webp",
          title: { es: "Animación de producto", en: "Product animation" },
        },
        {
          type: "page",
          category: "web",
          src: "assets/images/projects/case/banos-brasilia/home.webp",
          title: { es: "Home", en: "Home" },
        },
        {
          type: "page",
          category: "web",
          src: "assets/images/projects/case/banos-brasilia/productos.webp",
          title: { es: "Productos", en: "Products" },
        },
        {
          type: "page",
          category: "web",
          src: "assets/images/projects/case/banos-brasilia/empresa.webp",
          title: { es: "La empresa", en: "About the company" },
        },
      ],
    },
    tags: ["Web Design", "Branding", "WordPress", "Brizy", "IA Content"],
    description: {
      es: "Rediseño de identidad de marca, creación de contenido con IA y desarrollo de un nuevo sitio web multilenguaje, enfocados en mejorar el posicionamiento y aumentar las visitas.",
      en: "Brand identity redesign, AI-powered content creation and development of a new multilingual website, focused on improving search positioning and growing traffic.",
    },
    metric: { es: "+500% de visitas", en: "+500% website visits" },
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
  {
    id: "davicashtitud",
    category: "video",
    title: { main: "", highlight: "Davicashtitud" },
    cover: "assets/images/projects/covers/davicashtitud.webp",
    coverVideo: "assets/video/projects/davicashtitud-tv.mp4",
    url: "",
    caseStudy: {
      year: "2022",
      client: "Davivienda Corredores",
      role: { es: "", en: "" },
      media: [
        {
          type: "video",
          category: "video",
          src: "assets/video/projects/davicashtitud.mp4",
          poster: "assets/video/projects/davicashtitud-poster.webp",
          title: { es: "Davicashtitud", en: "Davicashtitud" },
        },
      ],
    },
    tags: [],
    description: { es: "Proyecto de video para Davivienda Corredores.", en: "Video project for Davivienda Corredores." },
  },
];
