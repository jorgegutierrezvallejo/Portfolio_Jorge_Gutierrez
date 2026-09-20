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
 * primaryLink (opcional) true = el botón principal abre la url aunque esté en el filtro Video
 * urlLabel  (opcional) texto del botón del enlace cuando el principal es "Ver video", ej. "Ver El Libro"
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
 *   feature   "cover" = arriba del caso va la portada (si no, la primera pieza que no sea página)
 *   logo      logo del cliente (WebP/PNG con fondo transparente, se ve sobre negro)
 *   year      "2024"
 *   client    "Nombre del cliente"
 *   role      { es, en }   ej. "Diseño y desarrollo web"
 *   headline  { es, en }   titular del caso
 *   story     { es: ["párrafo 1", "párrafo 2", …], en: [...] }   texto largo del caso
 *             un elemento { heading: "El reto", text: "…" } agrega un subtítulo antes del párrafo
 *   highlights { es: ["logro 1", …], en: [...] }   resultados sin cifra (tarjeta con lista)
 *   { type: "youtube", id: "ID_DEL_VIDEO", title: { es, en } }   video de YouTube
 *         (miniatura en la galería; se reproduce dentro del visor)
 *   credits   [{ label: { es, en }, value: "Duit Media" }]   filas extra de la ficha (agencia, colaboradores…)
 *   metrics   [{ value: "+500%", text: { es, en } }]   una o varias métricas (si no hay, se usa "metric")
 *   metricsNote { es, en }   nota bajo las métricas, ej. "Primer mes tras el lanzamiento"
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
    id: "davivienda-libro-2021",
    category: "video",
    title: { main: "Davivienda Corredores", highlight: "El Libro 2021" },
    cover: "assets/images/projects/covers/davivienda-libro-2021.webp",
    coverVideo: "assets/video/projects/davivienda-libro-2021-cover.mp4",
    url: "https://libro.daviviendacorredores.com/2021",
    urlLabel: { es: "Ver El Libro", en: "See El Libro" },
    primaryLink: true, // el botón principal abre El Libro, no el video
    caseStudy: {
      year: "2021",
      client: "Davivienda Corredores",
      role: { es: "Cámara, edición, colorización y producción audiovisual", en: "Camera, editing, color grading and video production" },
      credits: [
        { label: { es: "País", en: "Country" }, value: "Colombia" },
        { label: { es: "Agencia", en: "Agency" }, value: "Moodlines Studio" },
        { label: { es: "Dirección creativa", en: "Creative direction" }, value: "Ingrith Buchelli" },
        { label: { es: "Cámara adicional", en: "Additional camera" }, value: "Diego Suárez (Kraft Media)" },
      ],
      metrics: [
        { value: "+20", text: { es: "cápsulas de video producidas, editadas y colorizadas", en: "video capsules produced, edited and color graded" } },
        { value: "+8.000", text: { es: "personas conectadas al streaming del lanzamiento", en: "people tuned in to the launch livestream" } },
        { value: "+16.800", text: { es: "reproducciones de las cápsulas en YouTube", en: "YouTube views across the capsules" } },
      ],
      highlights: {
        es: ["Un ecosistema audiovisual completo que enriqueció la versión web de la publicación."],
        en: ["A complete video ecosystem that enriched the web version of the publication."],
      },
      headline: {
        es: "Producción audiovisual para El Libro 2021",
        en: "Video production for El Libro 2021",
      },
      story: {
        es: [
          {
            heading: "El contexto",
            text: "Cada año, Davivienda Corredores lanza «El Libro», una prestigiosa publicación de análisis económico y financiero que detalla las perspectivas, proyecciones y estrategias de inversión para el año siguiente, en Colombia y en el mundo. Para la edición 2021, la firma quiso ir más allá del formato editorial tradicional: digitalizar la experiencia en una página web acompañada de piezas de video de alta calidad que presentaran su análisis de forma más cercana y digerible.",
          },
          {
            heading: "El reto",
            text: "El desafío era traducir un contenido denso y muy técnico (estrategias de inversión y macroeconomía) a un formato audiovisual atractivo y dinámico, que proyectara máxima autoridad. Para lograrlo, el cliente acudió a la agencia Moodlines Studio con el objetivo de producir todo el ecosistema de video que acompañaría la publicación en su nueva plataforma digital.",
          },
          {
            heading: "Estrategia y ejecución",
            text: "Abordamos el proyecto entendiendo que el material audiovisual debía ser el complemento natural de la lectura del informe. Diseñamos e implementamos una ambiciosa estrategia de contenido y produjimos más de 20 cápsulas de video que se integraron directamente en la página web de la publicación. Estas piezas también fueron protagonistas de la comunicación: se presentaron oficialmente en un gran evento por livestreaming dirigido a los clientes e inversionistas más importantes de la firma.",
          },
          {
            heading: "Dirección de arte y contenido",
            text: "Para garantizar un estándar visual corporativo, sobrio y de primer nivel, el proyecto contó con la dirección creativa de Ingrith Buchelli. El registro visual, la operación de cámara y el minucioso trabajo de edición y colorización estuvieron a cargo de Jorge Gutiérrez, con la colaboración en cámara de Diego Suárez (Kraft Media). La postproducción se hizo de manera 100 % tradicional, justo antes del auge de la inteligencia artificial en la edición, lo que le da al trabajo un valor técnico y artesanal especial. Esta sinergia permitió entregar un material impecable que elevó el prestigio de la publicación.",
          },
          {
            heading: "El impacto",
            text: "El respaldo audiovisual de «El Libro 2021» marcó un hito en la forma en que Davivienda Corredores presenta sus proyecciones anuales. Las más de 20 cápsulas enriquecieron de forma permanente el sitio web y fueron clave para mantener la atención durante el evento de lanzamiento, un éxito de convocatoria que conectó a más de 8.000 personas al streaming en tiempo real.",
          },
        ],
        en: [
          {
            heading: "Context",
            text: "Every year, Davivienda Corredores publishes “El Libro”, a prestigious economic and financial analysis report detailing the outlook, forecasts and investment strategies for the coming year, in Colombia and worldwide. For the 2021 edition, the firm wanted to go beyond the traditional editorial format: bring the experience online on a website with high-quality videos that presented its analysis in a closer, easier-to-digest way.",
          },
          {
            heading: "The challenge",
            text: "The challenge was to turn dense, highly technical content (investment strategy and macroeconomics) into engaging, dynamic video that projected maximum authority. The client turned to the agency Moodlines Studio to produce the entire video ecosystem accompanying the publication on its new digital platform.",
          },
          {
            heading: "Strategy and execution",
            text: "We approached the project knowing the videos had to be the natural companion to reading the report. We designed and executed an ambitious content strategy, producing more than 20 video capsules embedded directly in the publication's website. These pieces were also central to the communication: they premiered at a major livestream event for the firm's most important clients and investors.",
          },
          {
            heading: "Art direction and content",
            text: "To ensure a sober, top-tier corporate look, the project had creative direction by Ingrith Buchelli. Filming, camera operation and the meticulous editing and color grading were handled by Jorge Gutiérrez, with additional camera by Diego Suárez (Kraft Media). Post-production was done 100% traditionally, right before AI took over editing, which gives the work a special technical and handcrafted value. This synergy delivered flawless material that raised the publication's prestige.",
          },
          {
            heading: "Impact",
            text: "The video support for “El Libro 2021” set a milestone in how Davivienda Corredores presents its annual outlook. The 20+ capsules permanently enriched the website and were key to holding attention during the launch event, a turnout success that brought more than 8,000 people to the live stream.",
          },
        ],
      },
      media: [
        {
          type: "youtube",
          category: "video",
          id: "PuEYqqnoSLI",
          title: { es: "Colombia, frente al reto de la transformación", en: "Colombia, facing the transformation challenge" },
        },
        { type: "youtube", category: "video", id: "p7MxE2X3cn0", title: { es: "Análisis: Nutresa", en: "Analysis: Nutresa" } },
        { type: "youtube", category: "video", id: "9Ekd7EkKn_M", title: { es: "Análisis: Cementos Argos", en: "Analysis: Cementos Argos" } },
        { type: "youtube", category: "video", id: "f1ny8H3y_UQ", title: { es: "Análisis: Terpel", en: "Analysis: Terpel" } },
        { type: "youtube", category: "video", id: "SCq8u98Bbvw", title: { es: "Análisis: El Cóndor", en: "Analysis: El Cóndor" } },
        { type: "youtube", category: "video", id: "1thN2Yg-M50", title: { es: "Análisis: Conconcreto", en: "Analysis: Conconcreto" } },
        { type: "youtube", category: "video", id: "BIiQLE1o9_s", title: { es: "Análisis: Promigas", en: "Analysis: Promigas" } },
        { type: "youtube", category: "video", id: "mydeoSmopP8", title: { es: "Análisis: ISA", en: "Analysis: ISA" } },
        { type: "youtube", category: "video", id: "2WyuU16eV3Y", title: { es: "Análisis: GEB", en: "Analysis: GEB" } },
        { type: "youtube", category: "video", id: "bWlUufZ35v0", title: { es: "Análisis: Celsia", en: "Analysis: Celsia" } },
        { type: "youtube", category: "video", id: "ieCwM4prQE4", title: { es: "Análisis: Mineros", en: "Analysis: Mineros" } },
        { type: "youtube", category: "video", id: "Ha7JLHlArkM", title: { es: "Análisis: Ecopetrol", en: "Analysis: Ecopetrol" } },
        { type: "youtube", category: "video", id: "61wfzLvBbHQ", title: { es: "Análisis: PEI", en: "Analysis: PEI" } },
        { type: "youtube", category: "video", id: "w8sisY0nzuM", title: { es: "Análisis: Grupo SURA", en: "Analysis: Grupo SURA" } },
        { type: "youtube", category: "video", id: "5Gu98K8uukA", title: { es: "Análisis: Grupo Aval", en: "Analysis: Grupo Aval" } },
        { type: "youtube", category: "video", id: "TDX1aV97A8s", title: { es: "Análisis: Corficolombiana", en: "Analysis: Corficolombiana" } },
        { type: "youtube", category: "video", id: "HksWHwUb62A", title: { es: "Análisis: Bancolombia", en: "Analysis: Bancolombia" } },
        { type: "youtube", category: "video", id: "VMZHLgaepRo", title: { es: "Análisis: Banco de Bogotá", en: "Analysis: Banco de Bogotá" } },
        { type: "youtube", category: "video", id: "eaoM6GOdJc4", title: { es: "Análisis: Grupo Argos", en: "Analysis: Grupo Argos" } },
      ],
    },
    tags: ["Producción Audiovisual", "Corporate Video", "Edición", "Colorización"],
    description: {
      es: "Producción de más de 20 cápsulas de video para «El Libro 2021», enriqueciendo la experiencia web y acompañando el exitoso evento en vivo de la firma.",
      en: "Production of 20+ video capsules for “El Libro 2021”, enriching the web experience and supporting the firm's successful live event.",
    },
    metric: { es: "+20 cápsulas de video", en: "20+ video capsules" },
  },
  {
    id: "la-haus-impacto-social",
    category: "video",
    title: { main: "", highlight: "La Haus" },
    cover: "assets/images/projects/covers/la-haus-impacto-social.webp",
    coverVideo: "assets/video/projects/la-haus-impacto-social-cover.mp4",
    url: "https://www.youtube.com/watch?v=U_CuGLPM8jY",
    caseStudy: {
      year: "2023",
      client: "La Haus",
      role: {
        es: "Cámara, edición de video y colorización",
        en: "Camera, video editing and color grading",
      },
      credits: [
        { label: { es: "País", en: "Country" }, value: "Colombia" },
        { label: { es: "Agencia", en: "Agency" }, value: "Duit Media" },
      ],
      headline: {
        es: "Registro audiovisual de impacto social para La Haus",
        en: "Documenting La Haus's social impact through film",
      },
      story: {
        es: [
          {
            heading: "El contexto",
            text: "Como parte de sus iniciativas de responsabilidad social corporativa, La Haus organizó una jornada muy especial para los niños de la Fundación Hermanas Misioneras de Cristo Rey, ubicada en el barrio El Codito, en Bogotá. El objetivo no era únicamente donar kits escolares, sino regalarles un día inolvidable lleno de actividades recreativas, juegos y acompañamiento humano.",
          },
          {
            heading: "El reto",
            text: "La marca necesitaba documentar esta valiosa jornada, pero el registro no podía sentirse como un simple recuento corporativo: debía transmitir genuinamente la alegría, la empatía y la magia del momento. La Haus acudió a Duit Media con el desafío de producir una pieza audiovisual que capturara los mejores instantes del evento de una forma profundamente emotiva y humana.",
          },
          {
            heading: "Estrategia y ejecución",
            text: "Desde Duit Media asumimos el proyecto con un enfoque documental. Estuvimos presentes durante toda la jornada, realizando un trabajo de cámara cercano pero no invasivo. Esta estrategia nos permitió capturar las reacciones espontáneas de los niños, las sonrisas durante los juegos y el momento de la entrega de los kits escolares, construyendo la narrativa a partir de emociones reales.",
          },
          {
            heading: "Dirección de arte y contenido",
            text: "La grabación, edición y colorización estuvieron a cargo de Jorge Gutiérrez. Durante la postproducción, el montaje se centró en el ritmo emocional de la jornada, mientras que la colorización le otorgó a la pieza una atmósfera cálida, vibrante y cinematográfica, resaltando la energía de los niños y la belleza del entorno.",
          },
          {
            heading: "El impacto",
            text: "El resultado fue una pieza audiovisual conmovedora que inmortalizó el lado más humano de la marca. El video le permitió a La Haus comunicar sus acciones de impacto social con transparencia y sensibilidad, dotando a su programa de responsabilidad social de un material que conecta directamente con su audiencia e inversionistas.",
          },
        ],
        en: [
          {
            heading: "Context",
            text: "As part of its corporate social responsibility initiatives, La Haus organized a special day for the children of the Hermanas Misioneras de Cristo Rey Foundation in Bogotá's El Codito neighborhood. The goal was not only to donate school supply kits, but also to give the children an unforgettable day filled with recreational activities, games and human connection.",
          },
          {
            heading: "The challenge",
            text: "The brand needed to document this meaningful initiative without making it feel like a conventional corporate recap. The film had to convey the joy, empathy and magic of the moment with complete authenticity. La Haus turned to Duit Media to create a deeply emotional and human piece that captured the event's most memorable moments.",
          },
          {
            heading: "Strategy and execution",
            text: "Duit Media approached the project with a documentary mindset. We covered the entire day with an intimate yet unobtrusive camera style. This allowed us to capture the children's spontaneous reactions, their smiles during the games and the delivery of the school kits, building the narrative around real emotions.",
          },
          {
            heading: "Art direction and content",
            text: "Jorge Gutiérrez handled filming, editing and color grading. In post-production, the edit followed the emotional rhythm of the day, while the color grade gave the film a warm, vibrant and cinematic atmosphere that highlighted the children's energy and the beauty of the setting.",
          },
          {
            heading: "Impact",
            text: "The result was a moving film that preserved the brand's most human side. It gave La Haus a transparent and sensitive way to communicate its social impact initiatives, providing its corporate responsibility program with valuable material that connects directly with audiences and investors.",
          },
        ],
      },
      highlights: {
        es: [
          "Registro audiovisual emotivo para fortalecer las comunicaciones de responsabilidad social corporativa de la marca.",
          "Documentación de la entrega de kits escolares y de las actividades recreativas para la Fundación Hermanas Misioneras de Cristo Rey.",
        ],
        en: [
          "An emotional film created to strengthen the brand's corporate social responsibility communications.",
          "Coverage of the school kit donation and recreational activities for the Hermanas Misioneras de Cristo Rey Foundation.",
        ],
      },
      media: [
        {
          type: "youtube",
          category: "video",
          id: "U_CuGLPM8jY",
          title: {
            es: "La Haus — Fundación Hermanas Misioneras de Cristo Rey",
            en: "La Haus — Hermanas Misioneras de Cristo Rey Foundation",
          },
        },
      ],
    },
    tags: [
      { es: "Edición de video", en: "Video editing" },
      { es: "Grabación", en: "Filming" },
      { es: "Colorización", en: "Color grading" },
    ],
    description: {
      es: "Producción audiovisual emotiva para documentar las iniciativas de impacto social de La Haus en Bogotá, capturando la entrega de kits escolares y un día de integración con la comunidad.",
      en: "An emotional film documenting La Haus's social impact initiatives in Bogotá, from the delivery of school kits to a day of community activities and connection.",
    },
  },
  {
    id: "305800pain",
    category: "web",
    title: { main: "", highlight: "305800PAIN" },
    cover: "assets/images/projects/covers/305800pain.webp",
    coverVideo: "assets/video/projects/305800pain-cover.mp4",
    url: "https://305800pain.com/",
    caseStudy: {
      year: "2026",
      client: "305 800 Pain",
      role: {
        es: "Diseño web, copywriting, SEO, GEO, UX/UI, contenido con IA",
        en: "Web design, copywriting, SEO, GEO, UX/UI, AI content",
      },
      credits: [
        { label: { es: "País", en: "Country" }, value: { es: "Estados Unidos", en: "United States" } },
        { label: { es: "Agencia", en: "Agency" }, value: "Duit Media" },
      ],
      metrics: [
        { value: "+500%", text: { es: "de tráfico web", en: "web traffic" } },
        { value: "+240%", text: { es: "en conversión de leads con la calculadora", en: "lead conversion with the calculator" } },
      ],
      highlights: {
        es: [
          "Primer lugar en Google para búsquedas clave de su nicho (SEO).",
          "Presencia en las respuestas de herramientas de IA generativa (GEO).",
        ],
        en: [
          "#1 on Google for key searches in its niche (SEO).",
          "Featured in answers from generative AI tools (GEO).",
        ],
      },
      headline: {
        es: "Rediseño integral y estrategia de conversión para 305 800 Pain",
        en: "A full redesign and conversion strategy for 305 800 Pain",
      },
      story: {
        es: [
          {
            heading: "El contexto",
            text: "Ubicado en Miami, Florida, 305-800-PAIN es un reconocido servicio de referencia legal y médica. Su misión es conectar a víctimas de accidentes con abogados especialistas en lesiones personales y clínicas afiliadas, garantizando tratamiento y asesoría legal sin costo inicial. Dada la fuerte diversidad demográfica de Miami, donde la población se mueve entre el inglés y el español, la organización atiende un volumen crítico de usuarios hispanohablantes y angloparlantes en situación de vulnerabilidad que necesitan asistencia rápida, empática y en su propio idioma.",
          },
          {
            heading: "El reto",
            text: "A pesar de su peso en el mercado, el cliente llegó con un problema crítico: su sitio web lucía anticuado y no reflejaba la autoridad de su marca. Era un ecosistema masivo de 45 páginas internas que dificultaba la navegación. Para renovar su imagen, ordenar esa gran cantidad de información y multiplicar la captación de prospectos en ambos idiomas, el cliente acudió a nuestra agencia, Duit Media, con el objetivo de ejecutar un rediseño profundo, moderno y centrado en la eficacia comercial.",
          },
          {
            heading: "Estrategia y ejecución",
            text: "Por la magnitud del desafío, este es uno de nuestros proyectos estrella. Empezamos con un trabajo exhaustivo de UX/UI: reorganizamos por completo el árbol de navegación de las 45 páginas para crear un recorrido lógico e intuitivo. Además, estructuramos y desarrollamos el sitio de forma 100 % bilingüe (inglés y español), para que ninguna barrera de idioma limitara la captación de clientes en la ciudad.",
          },
          "En posicionamiento, redactamos todo el contenido desde cero con una estrategia que combina SEO tradicional y GEO (optimización para motores generativos). Así, el contenido se adaptó a las búsquedas locales hipersegmentadas en Florida y a las recomendaciones de las nuevas inteligencias artificiales.",
          "El gran diferenciador fue la captación de leads. Reemplazamos los formularios de contacto tradicionales por una Calculadora de Compensación interactiva: desde el primer paso, el usuario puede estimar cuánto dinero podría recibir por su accidente. Un proceso tedioso se convirtió en un imán infalible de registros.",
          {
            heading: "Dirección de arte y contenido",
            text: "Para elevar la estética del sitio sin perder el rigor y el profesionalismo que exige el sector médico-legal, implementamos un proceso de creación visual con inteligencia artificial. Generamos un banco de imágenes exclusivo, moderno y de alta calidad que le dio a la plataforma un aspecto limpio, corporativo y persuasivo, y que transmite seguridad inmediata a usuarios de cualquier origen.",
          },
          {
            heading: "El impacto",
            text: "La transformación de 305 800 Pain fue enorme. La suma de una arquitectura de información depurada, accesibilidad bilingüe, textos estratégicos (SEO/GEO), una dirección visual de vanguardia y el gancho interactivo de la calculadora convirtió el sitio en una verdadera máquina de rendimiento digital.",
          },
        ],
        en: [
          {
            heading: "Context",
            text: "Based in Miami, Florida, 305-800-PAIN is a well-known legal and medical referral service. Its mission is to connect accident victims with personal injury attorneys and affiliated clinics, ensuring treatment and legal advice at no upfront cost. Given Miami's strong demographic diversity, where people move between English and Spanish, the organization serves a critical volume of Spanish- and English-speaking people in vulnerable situations who need fast, empathetic help in their own language.",
          },
          {
            heading: "The challenge",
            text: "Despite its weight in the market, the client came to us with a critical problem: its website looked outdated and didn't reflect the brand's authority. It was a massive ecosystem of 45 internal pages that made navigation hard. To refresh its image, organize all that information and multiply lead capture in both languages, the client turned to our agency, Duit Media, for a deep, modern redesign focused on business results.",
          },
          {
            heading: "Strategy and execution",
            text: "Given the scale of the challenge, this is one of our flagship projects. We started with in-depth UX/UI work, completely reorganizing the navigation tree of all 45 pages into a logical, intuitive journey. We also structured and built the site to be 100% bilingual (English and Spanish), so no language barrier would limit client acquisition in the city.",
          },
          "For positioning, we wrote all the content from scratch with a strategy combining traditional SEO and GEO (generative engine optimization). The content was tailored to hyper-targeted local searches in Florida and to recommendations from new AI tools.",
          "The big differentiator was lead capture. We replaced traditional contact forms with an interactive Compensation Calculator: from the very first step, users can estimate how much they could receive for their accident. A tedious process became a high-value magnet for sign-ups.",
          {
            heading: "Art direction and content",
            text: "To raise the site's aesthetics without losing the rigor and professionalism the medical-legal sector demands, we used an AI-driven visual creation process. We generated an exclusive, modern, high-quality image bank that gave the platform a clean, corporate and persuasive look that builds instant trust with users from any background.",
          },
          {
            heading: "Impact",
            text: "The transformation of 305 800 Pain was huge. A streamlined information architecture, bilingual accessibility, strategic copy (SEO/GEO), cutting-edge art direction and the interactive calculator hook turned the site into a true digital performance engine.",
          },
        ],
      },
      media: [
        {
          type: "video",
          category: "web",
          src: "assets/video/projects/305800pain.mp4",
          poster: "assets/video/projects/305800pain-poster.webp",
          title: { es: "Recorrido por el sitio", en: "Site walkthrough" },
        },
        { type: "page", category: "web", src: "assets/images/projects/case/305800pain/home.webp", title: { es: "Home", en: "Home" } },
        { type: "page", category: "web", src: "assets/images/projects/case/305800pain/car-accident.webp", title: { es: "Car Accident Attorney", en: "Car Accident Attorney" } },
        { type: "page", category: "web", src: "assets/images/projects/case/305800pain/legal-medical.webp", title: { es: "Legal & Medical Support", en: "Legal & Medical Support" } },
      ],
    },
    tags: ["Web Design", "Copywriting", "SEO", "GEO", "UX/UI", "IA Content"],
    description: {
      es: "Rediseño integral de un portal bilingüe de 45 páginas para una red legal y médica en Florida, con estrategia SEO/GEO, imágenes con IA y una calculadora de compensación para maximizar conversiones.",
      en: "A full redesign of a bilingual 45-page portal for a legal and medical network in Florida, with an SEO/GEO strategy, AI imagery and a compensation calculator to maximize conversions.",
    },
    metric: { es: "+500% de tráfico web", en: "+500% web traffic" },
  },
  {
    id: "banos-brasilia",
    category: ["web", "video"], // agrega "design" cuando subamos los renders
    title: { main: "Baños", highlight: "Brasilia" },
    cover: "assets/images/projects/covers/banos-brasilia.webp",
    views: {
      // Web: el computador muestra el recorrido por el sitio · Video: el TV reproduce la animación
      web: { coverVideo: "assets/video/projects/banos-brasilia-web-cover.mp4" },
      video: { coverVideo: "assets/video/projects/banos-brasilia.mp4" },
    },
    url: "https://www.banosbrasilia.co/",
    caseStudy: {
      logo: "assets/images/projects/case/banos-brasilia/logo.webp",
      year: "2026",
      client: "Baños Brasilia",
      role: { es: "", en: "" },
      credits: [
        { label: { es: "Agencia", en: "Agency" }, value: "Duit Media" },
        { label: { es: "Branding en colaboración con", en: "Branding in collaboration with" }, value: "José Pérez (Nébula Studio)" },
      ],
      metrics: [
        { value: "+500%", text: { es: "de tráfico web desde Brasil", en: "web traffic from Brazil" } },
        { value: "+300%", text: { es: "de visitas desde otros destinos internacionales", en: "visits from other international markets" } },
      ],
      metricsNote: { es: "Primer mes tras el lanzamiento", en: "First month after launch" },
      headline: {
        es: "Expansión y transformación digital de Baños Brasilia",
        en: "Baños Brasilia's expansion and digital transformation",
      },
      story: {
        es: [
          {
            heading: "El contexto",
            text: "Fundada en 2012, Baños Brasilia se ha consolidado como una marca de referencia en Colombia y ha llevado con éxito sus productos a diversos mercados de Latinoamérica, incluido México. Como parte de su evolución corporativa, la compañía trazó su plan de expansión más ambicioso: la entrada al mercado brasileño.",
          },
          {
            heading: "El reto",
            text: "Para asegurar el éxito de este salto internacional, el cliente acudió a nuestra agencia, Duit Media, con un objetivo claro y exigente: preparar, modernizar y potenciar la marca para competir al más alto nivel y posicionarse con autoridad en Brasil.",
          },
          {
            heading: "Estrategia y ejecución",
            text: "El primer paso fue construir una presencia digital a la altura de esa visión. Diseñamos y desarrollamos una nueva plataforma web centrada en una experiencia de usuario (UX/UI) actual, altamente visual y funcional. La arquitectura del sitio se preparó para incorporar el portugués como idioma nativo y allanar así la entrada a Brasil.",
          },
          "Durante la inmersión en el proyecto identificamos una oportunidad crítica: la identidad visual de ese momento no le hacía justicia a la sofisticación, la elegancia y la calidad técnica de sus productos. Por eso propusimos un rediseño integral de marca, que ejecutamos en estrecha colaboración con José Pérez, de Nébula Studio. Juntos construimos un branding más sólido, contemporáneo y alineado con el nuevo posicionamiento global que Baños Brasilia necesitaba proyectar.",
          {
            heading: "Dirección de arte y contenido",
            text: "Para elevar aún más el estándar estético y la percepción de valor, lideramos una nueva dirección visual. Produjimos renders de alta fidelidad y fotografía de producto que destacan la nobleza de los materiales, los acabados y los detalles de cada referencia. Este trabajo se complementó con piezas audiovisuales y animaciones que comunican la funcionalidad, el diseño y la elegancia de la marca de una forma más inmersiva y atractiva.",
          },
          {
            heading: "El impacto",
            text: "El resultado fue una transformación digital y visual completa. La nueva plataforma fortaleció el prestigio de Baños Brasilia, respaldó su expansión hacia uno de los mercados más competitivos de la región y detonó un crecimiento inmediato en sus métricas de adquisición: en el primer mes tras el lanzamiento, el tráfico web desde Brasil creció un 500 % y las visitas desde los demás destinos internacionales, un 300 %.",
          },
        ],
        en: [
          {
            heading: "Context",
            text: "Founded in 2012, Baños Brasilia has become a benchmark brand in Colombia and has successfully taken its products to several Latin American markets, including Mexico. As part of its corporate growth, the company drew up its most ambitious expansion plan yet: entering the Brazilian market.",
          },
          {
            heading: "The challenge",
            text: "To make this international leap a success, the client came to our agency, Duit Media, with a clear and demanding goal: to prepare, modernize and strengthen the brand so it could compete at the highest level and position itself with authority in Brazil.",
          },
          {
            heading: "Strategy and execution",
            text: "The first step was building a digital presence that matched that vision. We designed and developed a new web platform focused on a current, highly visual and functional user experience (UX/UI). The site architecture was built to add Portuguese as a native language, paving the way into Brazil.",
          },
          "While immersed in the project, we spotted a critical opportunity: the visual identity at the time didn't do justice to the sophistication, elegance and technical quality of the products. So we proposed a full brand redesign, carried out in close collaboration with José Pérez of Nébula Studio. Together we built a stronger, contemporary brand, aligned with the new global positioning Baños Brasilia needed to project.",
          {
            heading: "Art direction and content",
            text: "To raise the aesthetic standard and perceived value even further, we led a new visual direction. We produced high-fidelity renders and product photography that highlight the quality of the materials, finishes and details of each model. This work was complemented with videos and animations that convey the brand's functionality, design and elegance in a more immersive and engaging way.",
          },
          {
            heading: "Impact",
            text: "The result was a complete digital and visual transformation. The new platform strengthened Baños Brasilia's prestige, supported its expansion into one of the most competitive markets in the region and sparked immediate growth in its acquisition metrics: in the first month after launch, web traffic from Brazil grew 500% and visits from other international markets grew 300%.",
          },
        ],
      },
      media: [
        {
          type: "video",
          category: "web",
          src: "assets/video/projects/banos-brasilia-web.mp4",
          poster: "assets/video/projects/banos-brasilia-web-poster.webp",
          title: { es: "Recorrido por el sitio", en: "Site walkthrough" },
        },
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
    metric: { es: "+500% de tráfico desde Brasil", en: "+500% traffic from Brazil" },
  },
  {
    id: "armando-butron",
    category: "web",
    title: { main: "Armando", highlight: "Butrón" },
    cover: "assets/images/projects/covers/armando-butron.webp",
    coverVideo: "assets/video/projects/armando-butron-cover.mp4",
    url: "https://www.armandobutron.com/",
    caseStudy: {
      year: "2026",
      client: "Armando Butrón",
      role: { es: "Diseño web", en: "Web design" },
      credits: [
        { label: { es: "Agencia", en: "Agency" }, value: "Duit Media" },
        { label: { es: "Fotografía", en: "Photography" }, value: "José Pérez (Nébula Studio)" },
      ],
      highlights: {
        es: [
          "Plataforma centralizada para impulsar la venta del libro y las reproducciones del podcast.",
          "Prólogo interactivo como principal imán para captar lectores.",
        ],
        en: [
          "A central platform driving book sales and podcast plays.",
          "An interactive prologue as the main hook for new readers.",
        ],
      },
      headline: {
        es: "Plataforma de promoción y ventas para Armando Butrón",
        en: "A promotion and sales platform for Armando Butrón",
      },
      story: {
        es: [
          {
            heading: "El contexto",
            text: "Biólogo marino de formación, terapeuta respiratorio con experiencia en cuidados intensivos y neonatología, Master Coach en PNL y promotor cultural: la historia de Armando Butrón une la ciencia, el servicio, la comunicación y una profunda búsqueda de sentido. A sus 82 años decidió dar un paso extraordinario y aventurarse en el mundo digital para lanzar su primer libro, «Consideraciones», una obra que se expande también en formato de podcast. Con este debut necesitaba un espacio en internet que reflejara su trayectoria y presentara su mensaje al mundo.",
          },
          {
            heading: "El reto",
            text: "El objetivo era construir una herramienta digital que impulsara de forma activa la venta del libro y el consumo de los episodios del podcast, sin perder la esencia humana y profunda de su autor. Para materializar esta visión, el cliente acudió a nuestra agencia, Duit Media, con el desafío de crear un sitio web estratégico que sedujera al visitante y lo guiara de manera intuitiva hacia los distintos canales de compra y plataformas de audio.",
          },
          {
            heading: "Estrategia y ejecución",
            text: "Asumimos el proyecto combinando un desarrollo en WordPress con un sólido trabajo de copywriting persuasivo. Estructuramos el sitio destacando con claridad todos los canales de venta disponibles. Como principal atractivo de conversión, ideamos y desarrollamos un libro interactivo dentro de la página, que permite a los visitantes hojear y leer el prólogo de la obra. Esta táctica funciona como un abrebocas diseñado para enganchar al futuro lector antes de su decisión de compra.",
          },
          {
            heading: "Dirección de arte y contenido",
            text: "El componente visual fue fundamental para transmitir la calidez y la experiencia de Armando. Para darle vida y carácter a la página aprovechamos las fotografías realizadas por José Pérez, de Nébula Studio. Su integración elevó el estándar estético del sitio y le dio a la marca personal del autor una imagen elegante, profesional y cercana.",
          },
          {
            heading: "El impacto",
            text: "El resultado es un sitio que funciona como el epicentro del universo de «Consideraciones». La sinergia entre una dirección de arte cuidada, textos persuasivos y la funcionalidad del prólogo interactivo le ha dado a Armando Butrón un canal sólido para escalar sus ventas, conectar con nuevos lectores y hacer crecer la audiencia de su podcast en esta audaz incursión digital.",
          },
        ],
        en: [
          {
            heading: "Context",
            text: "A marine biologist by training, respiratory therapist with experience in intensive care and neonatology, NLP Master Coach and cultural promoter: Armando Butrón's story brings together science, service, communication and a deep search for meaning. At 82, he took an extraordinary step into the digital world to launch his first book, “Consideraciones”, which also expands into a podcast. For this debut he needed an online space that reflected his career and shared his message with the world.",
          },
          {
            heading: "The challenge",
            text: "The goal was to build a digital tool that actively drove book sales and podcast listening without losing the author's human, profound essence. The client came to our agency, Duit Media, with the challenge of creating a strategic website that would win visitors over and guide them intuitively to the different sales channels and audio platforms.",
          },
          {
            heading: "Strategy and execution",
            text: "We combined WordPress development with solid persuasive copywriting. We structured the site to clearly highlight every available sales channel. As the main conversion hook, we designed and built an interactive book inside the page that lets visitors flip through and read the book's prologue. It works as a teaser designed to hook future readers before they decide to buy.",
          },
          {
            heading: "Art direction and content",
            text: "The visuals were key to conveying Armando's warmth and experience. To give the site life and character, we used the photographs taken by José Pérez of Nébula Studio. They raised the site's aesthetic standard and gave the author's personal brand an elegant, professional and approachable image.",
          },
          {
            heading: "Impact",
            text: "The result is a website that works as the hub of the “Consideraciones” universe. The combination of careful art direction, persuasive copy and the interactive prologue has given Armando Butrón a solid channel to grow his sales, connect with new readers and build his podcast audience in this bold digital venture.",
          },
        ],
      },
      media: [
        {
          type: "video",
          category: "web",
          src: "assets/video/projects/armando-butron.mp4",
          poster: "assets/video/projects/armando-butron-poster.webp",
          title: { es: "Recorrido por el sitio", en: "Site walkthrough" },
        },
        { type: "page", category: "web", src: "assets/images/projects/case/armando-butron/home.webp", title: { es: "Página completa", en: "Full page" } },
      ],
    },
    tags: ["Web Design", "Copywriting", "WordPress"],
    description: {
      es: "Desarrollo de una plataforma web para el lanzamiento literario y digital de Armando Butrón, con un prólogo interactivo, canales de venta y una cuidada dirección de arte.",
      en: "A web platform for Armando Butrón's literary and digital launch, with an interactive prologue, sales channels and careful art direction.",
    },
  },
  {
    id: "distropik",
    category: "web",
    title: { main: "", highlight: "Distropik" },
    cover: "assets/images/projects/covers/distropik.webp",
    coverVideo: "assets/video/projects/distropik-cover.mp4",
    url: "https://distropik.com/",
    caseStudy: {
      year: "2025",
      client: "Distropik",
      role: { es: "Desarrollo y diseño web", en: "Web development and design" },
      credits: [
        { label: { es: "País", en: "Country" }, value: { es: "Estados Unidos", en: "United States" } },
        { label: { es: "Agencia", en: "Agency" }, value: "Duit Media" },
      ],
      highlights: {
        es: [
          "Plataforma autoadministrable para exhibir de forma continua sus proyectos audiovisuales.",
          "Nuevo canal digital optimizado para captar clientes en el mercado de Florida.",
        ],
        en: [
          "A self-managed platform to continuously showcase its video projects.",
          "A new digital channel optimized to win clients in the Florida market.",
        ],
      },
      headline: {
        es: "Portafolio digital y captación de clientes para Distropik",
        en: "A digital portfolio and lead channel for Distropik",
      },
      story: {
        es: [
          {
            heading: "El contexto",
            text: "Distropik es una destacada agencia audiovisual ubicada en Miami, Florida, especializada en contenido de alto impacto. Aunque contaba con una excelente capacidad de producción y un talento visual innegable, enfrentaba un obstáculo comercial importante: no tenía una página web propia para exhibir su trabajo de forma profesional ante el mercado norteamericano.",
          },
          {
            heading: "El reto",
            text: "El desafío principal era digitalizar la presentación de su talento y crear un canal de ventas propio. Para resolver esa falta de presencia online, el cliente acudió a nuestra agencia, Duit Media, con un objetivo claro: desarrollar un sitio que funcionara como un portafolio de alto nivel y, al mismo tiempo, como una herramienta efectiva para captar nuevos clientes en la ciudad.",
          },
          {
            heading: "Estrategia y ejecución",
            text: "Planteamos una plataforma centrada en la autonomía y la usabilidad. Entendiendo el flujo de trabajo de una productora, construimos un sitio 100 % autoadministrable. Así, la agencia puede subir contenido, actualizar su portafolio y añadir nuevos proyectos audiovisuales de forma constante y sencilla, sin conocimientos avanzados de programación.",
          },
          {
            heading: "Dirección de arte y contenido",
            text: "La estética debía estar a la altura de una productora de contenido. Creamos una interfaz moderna, fresca y muy visual, conectada con la identidad de marca de Distropik. El diseño le da todo el protagonismo a sus producciones con un layout limpio que deja que los videos y las fotografías hablen por sí solos y transmitan creatividad y profesionalismo desde el primer segundo.",
          },
          {
            heading: "El impacto",
            text: "La nueva web le dio a Distropik la vitrina digital que necesitaba para validar su autoridad en la competitiva industria audiovisual de Miami. El sitio consolidó su presencia en internet y se convirtió en un portafolio dinámico que exhibe la calidad de su trabajo y facilita el contacto directo y la conversión de nuevos prospectos.",
          },
        ],
        en: [
          {
            heading: "Context",
            text: "Distropik is a leading video production agency in Miami, Florida, specialized in high-impact content. Despite its strong production capacity and undeniable visual talent, it faced a major commercial obstacle: it had no website of its own to professionally showcase its work to the US market.",
          },
          {
            heading: "The challenge",
            text: "The main challenge was to bring its talent online and create its own sales channel. To fix this lack of presence, the client came to our agency, Duit Media, with a clear goal: a website that would work as a high-end portfolio and, at the same time, as an effective tool to win new clients in the city.",
          },
          {
            heading: "Strategy and execution",
            text: "We designed a platform focused on autonomy and usability. Understanding how a production company works, we built a fully self-managed site, so the agency can upload content, update its portfolio and add new video projects regularly and easily, with no advanced coding knowledge.",
          },
          {
            heading: "Art direction and content",
            text: "The look had to live up to a content production company. We created a modern, fresh and highly visual interface connected to Distropik's brand identity. The design puts its productions center stage with a clean layout that lets the videos and photos speak for themselves, conveying creativity and professionalism from the first second.",
          },
          {
            heading: "Impact",
            text: "The new website gave Distropik the digital showcase it needed to establish its authority in Miami's competitive video industry. The site strengthened its online presence and became a dynamic portfolio that shows the quality of its work and makes direct contact and lead conversion easy.",
          },
        ],
      },
      media: [
        {
          type: "video",
          category: "web",
          src: "assets/video/projects/distropik.mp4",
          poster: "assets/video/projects/distropik-poster.webp",
          title: { es: "Recorrido por el sitio", en: "Site walkthrough" },
        },
        { type: "page", category: "web", src: "assets/images/projects/case/distropik/home.webp", title: { es: "Home", en: "Home" } },
        { type: "page", category: "web", src: "assets/images/projects/case/distropik/case-studies.webp", title: { es: "Case Studies", en: "Case Studies" } },
        { type: "page", category: "web", src: "assets/images/projects/case/distropik/contact.webp", title: { es: "Contacto", en: "Contact" } },
      ],
    },
    tags: ["Web Design", "CMS", "Portfolio"],
    description: {
      es: "Desarrollo de un portafolio digital moderno, fresco y 100 % autoadministrable para una agencia audiovisual en Miami, enfocado en exhibir sus producciones y captar nuevos clientes.",
      en: "A modern, fresh and fully self-managed digital portfolio for a Miami video production agency, built to showcase its work and win new clients.",
    },
  },
  {
    id: "fish-colombia",
    category: "web",
    title: { main: "Fish", highlight: "Colombia" },
    cover: "assets/images/projects/covers/fish-colombia.webp",
    url: "https://www.fishcolombia.com/",
    caseStudy: {
      feature: "cover",
      year: "2023",
      client: "Fish Colombia",
      role: { es: "Desarrollo web", en: "Web development" },
      credits: [
        { label: { es: "País", en: "Country" }, value: { es: "Colombia", en: "Colombia" } },
        { label: { es: "Agencia", en: "Agency" }, value: "Duit Media" },
      ],
      metrics: [{ value: "+1.000", text: { es: "prospectos captados a través de formularios", en: "leads captured through forms" } }],
      metricsNote: { es: "Primeros 6 meses", en: "First 6 months" },
      headline: {
        es: "Plataforma digital y fotográfica para Fish Colombia",
        en: "A digital photo platform for Fish Colombia",
      },
      story: {
        es: [
          {
            heading: "El contexto",
            text: "Fish Colombia es una empresa de turismo de pesca deportiva en el país, cuyo público objetivo son principalmente clientes extranjeros. Aunque contaban con un catálogo fotográfico de altísima calidad, que mostraba la majestuosidad de sus expediciones, paisajes y grandes ejemplares, no tenían una página web que les diera presencia digital.",
          },
          {
            heading: "El reto",
            text: "El objetivo principal era construir una vitrina digital capaz de atraer al público internacional. Para esto, el cliente acudió a nuestra agencia, Duit Media, con la necesidad de crear un sitio web bilingüe (inglés y español) que funcionara como una galería fotográfica inmersiva y, a la vez, integrara formularios para captar clientes de forma efectiva.",
          },
          {
            heading: "Estrategia y ejecución",
            text: "Asumimos el desarrollo web buscando un equilibrio entre estética y funcionalidad. Elegimos WordPress y Brizy porque el cliente necesitaba una plataforma 100 % autoadministrable, que le permitiera actualizar el contenido y las temporadas de pesca con total autonomía. Sobre esa base construimos un sitio cuya navegación simula la experiencia de recorrer una galería fotográfica. Además, todo el contenido se planificó y estructuró para potenciar el posicionamiento SEO y asegurar visibilidad en buscadores ante clientes extranjeros.",
          },
          {
            heading: "Dirección de arte y contenido",
            text: "El diseño visual se construyó alrededor de su excelente material fotográfico. Resaltamos de manera inmersiva la belleza de los destinos de Colombia y la imponencia de los ejemplares de pesca, creando un entorno visual atractivo y persuasivo para los visitantes del sitio.",
          },
          {
            heading: "El impacto",
            text: "La nueva presencia digital transformó la forma en que Fish Colombia conecta con el mundo. La combinación de un diseño tipo galería, una sólida optimización SEO y formularios de contacto bien ubicados convirtió el sitio en una máquina de generación de oportunidades de negocio a nivel internacional.",
          },
        ],
        en: [
          {
            heading: "Context",
            text: "Fish Colombia is a sport fishing tourism company in Colombia whose audience is mainly international travelers. They had a top-quality photo catalog showing the majesty of their expeditions, landscapes and trophy fish, but no website to give them a digital presence.",
          },
          {
            heading: "The challenge",
            text: "The main goal was to build a digital showcase that could attract an international audience. The client came to our agency, Duit Media, needing a bilingual website (English and Spanish) that worked as an immersive photo gallery while integrating forms to capture leads effectively.",
          },
          {
            heading: "Strategy and execution",
            text: "We took on the web development balancing aesthetics and functionality. We chose WordPress and Brizy because the client needed a fully self-managed platform to update content and fishing seasons on their own. On that base we built a site whose navigation feels like walking through a photo gallery. All content was also planned and structured to boost SEO and ensure search visibility for international clients.",
          },
          {
            heading: "Art direction and content",
            text: "The visual design was built around their excellent photography. We immersively highlighted the beauty of Colombia's destinations and the size of the fish, creating an attractive, persuasive visual experience for visitors.",
          },
          {
            heading: "Impact",
            text: "The new digital presence changed the way Fish Colombia connects with the world. The mix of a gallery-style design, solid SEO and well-placed contact forms turned the site into an engine for international business opportunities.",
          },
        ],
      },
      media: [
        { type: "page", category: "web", src: "assets/images/projects/case/fish-colombia/home.webp", title: { es: "Home", en: "Home" } },
        { type: "page", category: "web", src: "assets/images/projects/case/fish-colombia/mapiri.webp", title: { es: "Expedición Mapiri Lodge", en: "Mapiri Lodge expedition" } },
        { type: "page", category: "web", src: "assets/images/projects/case/fish-colombia/darien-lodge.webp", title: { es: "Expedición Darien Lodge", en: "Darien Lodge expedition" } },
        { type: "page", category: "web", src: "assets/images/projects/case/fish-colombia/galeria.webp", title: { es: "Actividades y galería", en: "Activities and gallery" } },
      ],
    },
    tags: ["Web Design", "SEO", "WordPress", "Brizy"],
    description: {
      es: "Desarrollo de un sitio web bilingüe optimizado para SEO y diseñado como galería fotográfica, enfocado en captar clientes internacionales y resaltar la belleza de los destinos de pesca.",
      en: "A bilingual, SEO-optimized website designed as a photo gallery, focused on attracting international clients and showcasing the beauty of the fishing destinations.",
    },
    metric: { es: "+1.000 prospectos en 6 meses", en: "+1,000 leads in 6 months" },
  },
  {
    id: "colombian-safaris",
    category: "web",
    title: { main: "Colombian", highlight: "Safaris" },
    cover: "assets/images/projects/covers/colombian-safaris.webp",
    url: "https://www.colombiansafaris.com/",
    caseStudy: {
      feature: "cover",
      year: "2023",
      client: "Colombian Safaris",
      role: { es: "Desarrollo web", en: "Web development" },
      credits: [
        { label: { es: "País", en: "Country" }, value: "Colombia" },
        { label: { es: "Agencia", en: "Agency" }, value: "Duit Media" },
      ],
      metrics: [{ value: "+400%", text: { es: "en captación de clientes", en: "in client acquisition" } }],
      headline: {
        es: "Plataforma de ecoturismo y exploración para Colombian Safaris",
        en: "An ecotourism and exploration platform for Colombian Safaris",
      },
      story: {
        es: [
          {
            heading: "El contexto",
            text: "Colombian Safaris es una empresa especializada en experiencias únicas y personalizadas de ecoturismo, safaris y avistamiento de aves en algunos de los ecosistemas más prístinos y remotos de Colombia, como la Orinoquía y el Tapón del Darién. Con un enfoque dirigido a fotógrafos de vida silvestre y amantes de la naturaleza, la marca necesitaba una vitrina digital a la altura de sus exclusivos lodges y de su majestuoso catálogo fotográfico.",
          },
          {
            heading: "El reto",
            text: "El desafío era transmitir digitalmente la esencia salvaje y la exclusividad de sus expediciones a una audiencia global. Para lograrlo, el cliente acudió a nuestra agencia, Duit Media, con la necesidad de desarrollar una página web bilingüe que no solo exhibiera la biodiversidad del país, sino que también funcionara como un motor eficaz para generar oportunidades de negocio y cotizaciones de viajes internacionales.",
          },
          {
            heading: "Estrategia y ejecución",
            text: "Abordamos el proyecto con un enfoque centrado en la usabilidad y la conversión. Construimos la plataforma con WordPress y Brizy para que el cliente contara con un entorno autoadministrable y pudiera actualizar fácilmente sus ofertas de safaris marinos y terrestres, así como las temporadas de avistamiento. En paralelo, estructuramos una sólida optimización SEO desde la raíz del sitio, para que exploradores de todo el mundo encontraran fácilmente sus destinos en los motores de búsqueda.",
          },
          {
            heading: "Dirección de arte y contenido",
            text: "El diseño visual se construyó para que el usuario sienta la aventura desde el primer clic. Le dimos todo el protagonismo a la riqueza visual de la flora y la fauna colombianas, destacando las fotografías de sus locaciones (Darien Lodge y Orinoco Lodge) y de las especies exóticas de la región. La interfaz, limpia y evocadora, transporta al visitante al corazón de la selva o la sabana y despierta el deseo de vivir la experiencia en persona.",
          },
          {
            heading: "El impacto",
            text: "El nuevo sitio consolidó a Colombian Safaris como un referente del turismo de naturaleza premium. Gracias a su navegación intuitiva, su diseño inmersivo y sus formularios de contacto optimizados, la plataforma facilita una reserva fluida y se ha convertido en una pieza fundamental para la captación recurrente de viajeros internacionales apasionados por la biodiversidad de Colombia.",
          },
        ],
        en: [
          {
            heading: "Context",
            text: "Colombian Safaris specializes in unique, personalized ecotourism, safari and birdwatching experiences in some of Colombia's most pristine and remote ecosystems, such as the Orinoquía and the Darién Gap. Focused on wildlife photographers and nature lovers, the brand needed a digital showcase worthy of its exclusive lodges and its stunning photo catalog.",
          },
          {
            heading: "The challenge",
            text: "The challenge was to convey the wild essence and exclusivity of its expeditions to a global audience. The client came to our agency, Duit Media, needing a bilingual website that would not only showcase the country's biodiversity but also work as an effective engine for business opportunities and international trip quotes.",
          },
          {
            heading: "Strategy and execution",
            text: "We approached the project with a focus on usability and conversion. We built the platform with WordPress and Brizy so the client could manage it on their own and easily update its marine and land safaris and the birdwatching seasons. At the same time, we built solid SEO into the site's foundations so explorers worldwide could easily find its destinations on search engines.",
          },
          {
            heading: "Art direction and content",
            text: "The visual design was built so users feel the adventure from the first click. We put Colombia's rich flora and fauna center stage, highlighting photos of its lodges (Darien Lodge and Orinoco Lodge) and the region's exotic species. The clean, evocative interface takes visitors straight into the heart of the jungle or the savanna and sparks the desire to live the experience in person.",
          },
          {
            heading: "Impact",
            text: "The new site established Colombian Safaris as a benchmark for premium nature tourism. With intuitive navigation, immersive design and optimized contact forms, the platform makes booking smooth and has become key to steadily attracting international travelers passionate about Colombia's biodiversity.",
          },
        ],
      },
      media: [
        { type: "page", category: "web", src: "assets/images/projects/case/colombian-safaris/home.webp", title: { es: "Home", en: "Home" } },
        { type: "page", category: "web", src: "assets/images/projects/case/colombian-safaris/orinoco.webp", title: { es: "Orinoco Safari Trip", en: "Orinoco Safari Trip" } },
        { type: "page", category: "web", src: "assets/images/projects/case/colombian-safaris/darien.webp", title: { es: "Darien Birding Trip", en: "Darien Birding Trip" } },
      ],
    },
    tags: ["Web Design", "SEO", "WordPress", "Brizy"],
    description: {
      es: "Desarrollo de un sitio web bilingüe e inmersivo para promover expediciones de naturaleza, safaris y avistamiento de aves en Colombia, atrayendo a ecoturistas internacionales con diseño visual y optimización SEO.",
      en: "A bilingual, immersive website promoting nature expeditions, safaris and birdwatching in Colombia, attracting international ecotourists through visual design and SEO.",
    },
    metric: { es: "+400% en captación de clientes", en: "+400% client acquisition" },
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
    title: { main: "Davivienda Corredores", highlight: "DaviCashtitud" },
    cover: "assets/images/projects/covers/davicashtitud.webp",
    coverVideo: "assets/video/projects/davicashtitud-tv.mp4",
    url: "https://www.youtube.com/watch?v=fcXHFBiHh80",
    caseStudy: {
      year: "2021",
      client: "Davivienda Corredores",
      role: {
        es: "Edición de video y motion graphics",
        en: "Video editing and motion graphics",
      },
      credits: [
        { label: { es: "País", en: "Country" }, value: "Colombia" },
        { label: { es: "Agencia", en: "Agency" }, value: "Moodlines Studio" },
        { label: { es: "Dirección creativa", en: "Creative direction" }, value: "Ingrith Buchelli" },
        { label: { es: "Cámara", en: "Camera" }, value: "Diego Suárez" },
      ],
      headline: {
        es: "Campaña de comunicación interna «DaviCashtitud»",
        en: "“DaviCashtitud” internal communications campaign",
      },
      story: {
        es: [
          {
            heading: "El contexto",
            text: "Davivienda Corredores buscaba impulsar la adopción de DaviCash 4.0 entre sus empleados. Aunque la herramienta ahorraba muchísimo tiempo en gestiones financieras y operativas, no todos los colaboradores la utilizaban, por lo que era necesario un impulso de comunicación interna fresco que la visibilizara y fomentara su uso.",
          },
          {
            heading: "El reto",
            text: "El cliente necesitaba comunicar los beneficios de la plataforma de una forma atractiva, pero enfrentaba dos grandes limitantes: requería una producción rápida y contaba con un presupuesto reducido. Para resolverlo, acudió a Moodlines Studio con el objetivo de crear una pieza audiovisual de comunicación interna capaz de captar la atención del equipo corporativo y explicar el valor de la herramienta de manera eficiente.",
          },
          {
            heading: "Estrategia y ejecución",
            text: "Entendiendo las restricciones de tiempo y presupuesto, apostamos por la creatividad. En lugar de producir un tutorial corporativo denso, desarrollamos un comercial interno dinámico, ágil y divertido. Centramos el mensaje en la sensación de libertad y alivio que experimenta el empleado al ahorrar trabajo, una actitud que bautizamos estratégicamente como «DaviCashtitud».",
          },
          {
            heading: "Dirección de arte y contenido",
            text: "El proyecto fue liderado bajo la dirección creativa de Ingrith Buchelli, con Diego Suárez a cargo de la cámara. Jorge Gutiérrez realizó la edición de video y los motion graphics. Los cortes rápidos acompañan el recorrido del protagonista y se intercalan con gráficas animadas que explican características como los más de 20.000 corresponsales y el acceso directo a DaviPlata. Ejecutado en 2021, el proyecto exigió un trabajo artesanal y gran recursividad técnica para conseguir un acabado profesional con recursos limitados.",
          },
          {
            heading: "El impacto",
            text: "La campaña interna «DaviCashtitud» se consolidó como uno de los trabajos favoritos del equipo. La pieza respondió a las necesidades de Davivienda Corredores con un comercial fresco que comunicó la practicidad de la herramienta y conectó emocionalmente con los empleados, motivándolos a adoptar una plataforma que en ese momento ya representaba más de $6.141 millones de COP en ingresos para la firma.",
          },
        ],
        en: [
          {
            heading: "Context",
            text: "Davivienda Corredores wanted to increase employee adoption of DaviCash 4.0. Although the tool saved a great deal of time in financial and operational tasks, not every team member was using it. The company needed a fresh internal communications push to raise awareness and encourage adoption.",
          },
          {
            heading: "The challenge",
            text: "The client needed to communicate the platform's benefits in an engaging way while facing two major constraints: a short production timeline and a limited budget. It turned to Moodlines Studio to create an internal video that could capture the corporate team's attention and explain the tool's value efficiently.",
          },
          {
            heading: "Strategy and execution",
            text: "With the time and budget constraints in mind, we relied on pure creativity. Instead of producing a dense corporate tutorial, we developed a dynamic, fast-paced and playful internal commercial. The message focused on the freedom and relief employees experience when they save time, an attitude we strategically named “DaviCashtitud.”",
          },
          {
            heading: "Art direction and content",
            text: "The project was led by creative director Ingrith Buchelli, with Diego Suárez behind the camera. Jorge Gutiérrez handled video editing and motion graphics. Fast cuts follow the protagonist's journey, interspersed with animated graphics explaining features such as access to more than 20,000 banking correspondents and direct integration with DaviPlata. Produced in 2021, the project required a handcrafted approach and considerable technical resourcefulness to achieve a professional finish with limited resources.",
          },
          {
            heading: "Impact",
            text: "The “DaviCashtitud” internal campaign became one of the team's favorite projects. The fresh commercial met Davivienda Corredores' needs by communicating the tool's practicality and connecting emotionally with employees, encouraging adoption of a platform that already represented more than COP 6.141 billion in revenue for the firm at the time.",
          },
        ],
      },
      highlights: {
        es: [
          "Producción y lanzamiento de una pieza comercial interna creativa, ejecutada con agilidad y bajo presupuesto.",
          "Creación del concepto «DaviCashtitud» para incentivar la adopción tecnológica entre los colaboradores de la firma.",
        ],
        en: [
          "Production and launch of a creative internal commercial delivered quickly on a limited budget.",
          "Creation of the “DaviCashtitud” concept to encourage technology adoption across the firm.",
        ],
      },
      media: [
        {
          type: "youtube",
          category: "video",
          id: "fcXHFBiHh80",
          title: { es: "DaviCashtitud", en: "DaviCashtitud" },
        },
      ],
    },
    tags: [
      { es: "Edición de video", en: "Video editing" },
      { es: "Motion", en: "Motion" },
    ],
    description: {
      es: "Edición ágil y creativa para una campaña de comunicación interna. Una pieza dinámica de bajo presupuesto que acuñó el concepto «DaviCashtitud» para impulsar el uso de DaviCash 4.0 entre los empleados de la firma.",
      en: "Fast, creative editing for an internal communications campaign. A dynamic, low-budget piece that coined the “DaviCashtitud” concept to promote DaviCash 4.0 among the firm's employees.",
    },
  },
];
