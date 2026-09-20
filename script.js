document.documentElement.classList.remove("no-js");
document.querySelectorAll("[data-year]").forEach((element) => (element.textContent = String(new Date().getFullYear())));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* =========================================================
   Menu (mobile)
   ========================================================= */

const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

menuButton?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Abrir menú");
  });
});

/* =========================================================
   i18n
   ========================================================= */

const copy = {
  es: {
    navHome: "Inicio",
    navAbout: "Acerca de mí",
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navEducation: "Educación",
    navContact: "Contacto",
    role: "Creative Developer",
    statement:
      "<strong>Súbele el volumen a tu proyecto.</strong> De la estrategia a la ejecución de productos digitales que impactan.",
    viewProjects: "Ver proyectos",
    letsTalk: "Hablemos",
    downloadCv: "Descargar CV",

    projectsTitle: "Proyectos",
    filtersLabel: "Filtrar proyectos",
    filterDesign: "03 Diseño",
    filterVideo: "02 Video",
    prevChannel: "Canal anterior",
    nextChannel: "Canal siguiente",
    prevProject: "Proyecto anterior",
    nextProject: "Proyecto siguiente",
    viewSite: "Ver sitio",
    viewProject: "Ver proyecto",
    caseStudy: "Caso de estudio",
    close: "Cerrar",
    caseSoon: "Próximamente",
    prevPhoto: "Anterior",
    nextPhoto: "Siguiente",
    photo: "Foto",
    caseClient: "Cliente",
    caseYear: "Año",
    caseRole: "Rol",
    caseOverview: "El proyecto",
    caseChallenge: "El reto",
    caseSolution: "La solución",
    caseResults: "Resultados",
    caseResultsLabel: "Resultados",
    viewVideo: "Ver video",
    watchOnYoutube: "Ver en YouTube",
    volUp: "Subir volumen",
    volDown: "Bajar volumen",
    rotateHint: "Gira tu teléfono para ver el video en grande",
    rotateOk: "Verlo así",
    caseGallery: "Galería",
    caseResultLabel: "Resultado",
    caseOpen: "ver en grande",
    scrollHint: "Scroll para cambiar de canal",
    comingSoonTitle: "Próximamente",
    comingSoonText: "Este canal está en producción. Muy pronto habrá proyectos al aire.",
    comingSoonCard: "Muy pronto al aire",
    channel: "Canal",

    aboutKicker: "Creatividad + Estrategia + Tecnología",
    aboutCopy:
      "<p>Soy Jorge, pero puedes llamarme Zhaw, un Creative Developer que entiende que un buen código necesita un gran diseño.</p><p>Mi camino empezó en la publicidad y evolucionó de forma natural hacia lo digital: desde el branding y el formato audiovisual, hasta la creación de interfaces y el desarrollo de software puro.</p><p>Hoy mezclo estrategia, diseño y tecnología para dar vida a productos digitales con carácter y resultados reales.</p>",
    aboutCta: "Conoce más",
    aboutScribble: "Ideas<br />Diseño<br />Código<br />Resultados",
    aboutStatsLabel: "Datos clave",
    statDesign: "Años diseñando",
    statWeb: "Años en web",
    statSites: "Sitios web",
    statVision: "Visión digital",

    skillsTitleTop: "Tecnologías",
    skillsTitleBottom: "&amp; Habilidades",
    skillFrontTitle: "Frontend",
    skillBackTitle: "Backend",
    skillCmsTitle: "CMS y builders",
    skillDesignTitle: "Diseño UI y gráfico",
    skillGitTitle: "Control de versiones",
    skillAiTitle: "IA generativa",
    chipResponsive: "Diseño responsive",
    chipLayout: "Maquetación web",
    chipUi: "Diseño de interfaces",
    chipContent: "Arquitectura de contenidos",
    chipAi: "Aplicada a contenidos y desarrollo",

    educationTitle: "Educación",
    educationKicker: "Aprender también<br />es parte del viaje.",
    edu1Degree: "Desarrollador Web Full Stack / Java",
    edu1Dates: "Junio 2026 — Septiembre 2026",
    edu2Degree: "Profesional en Publicidad y Marketing Creativo",
    edu2Dates: "Julio 2012 — Octubre 2017",
    edu3Degree: "Técnico en Medios Impresos",
    edu3Dates: "Julio 2010 — Julio 2011",

    contactTitle: "Contacto",
    contactCopy: "¿Tienes un proyecto en mente? Hablemos y exploremos cómo podemos hacerlo realidad.",
    contactEmail: "Escríbeme",

    footerNav: "Pie de página",
    footerTagline: "Súbele el volumen a tu proyecto.",
    footerRights: "Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navEducation: "Education",
    navContact: "Contact",
    role: "Creative Developer",
    statement:
      "<strong>Turn up the volume on your project.</strong> From strategy to execution, I build digital products that make an impact.",
    viewProjects: "View projects",
    letsTalk: "Let's talk",
    downloadCv: "Download CV",

    projectsTitle: "Projects",
    filtersLabel: "Filter projects",
    filterDesign: "03 Design",
    filterVideo: "02 Video",
    prevChannel: "Previous channel",
    nextChannel: "Next channel",
    prevProject: "Previous project",
    nextProject: "Next project",
    viewSite: "View site",
    viewProject: "View project",
    caseStudy: "Case study",
    close: "Close",
    caseSoon: "Coming soon",
    prevPhoto: "Previous",
    nextPhoto: "Next",
    photo: "Photo",
    caseClient: "Client",
    caseYear: "Year",
    caseRole: "Role",
    caseOverview: "The project",
    caseChallenge: "The challenge",
    caseSolution: "The solution",
    caseResults: "Results",
    caseResultsLabel: "Results",
    viewVideo: "Watch video",
    watchOnYoutube: "Watch on YouTube",
    volUp: "Volume up",
    volDown: "Volume down",
    rotateHint: "Turn your phone to watch the video full size",
    rotateOk: "Watch like this",
    caseGallery: "Gallery",
    caseResultLabel: "Result",
    caseOpen: "view larger",
    scrollHint: "Scroll to switch channels",
    comingSoonTitle: "Coming soon",
    comingSoonText: "This channel is in production. New projects will be on air very soon.",
    comingSoonCard: "On air soon",
    channel: "Channel",

    aboutKicker: "Creativity + Strategy + Technology",
    aboutCopy:
      "<p>I'm Jorge, but you can call me Zhaw — a Creative Developer who knows that good code needs great design.</p><p>My path started in advertising and evolved naturally into digital: from branding and audiovisual formats to building interfaces and pure software development.</p><p>Today I blend strategy, design and technology to bring digital products to life with character and real results.</p>",
    aboutCta: "Learn more",
    aboutScribble: "Ideas<br />Design<br />Code<br />Results",
    aboutStatsLabel: "Key facts",
    statDesign: "Years designing",
    statWeb: "Years in web",
    statSites: "Websites",
    statVision: "Digital vision",

    skillsTitleTop: "Technologies",
    skillsTitleBottom: "&amp; Skills",
    skillFrontTitle: "Frontend",
    skillBackTitle: "Backend",
    skillCmsTitle: "CMS &amp; builders",
    skillDesignTitle: "UI &amp; graphic design",
    skillGitTitle: "Version control",
    skillAiTitle: "Generative AI",
    chipResponsive: "Responsive design",
    chipLayout: "Web layout",
    chipUi: "Interface design",
    chipContent: "Content architecture",
    chipAi: "Applied to content and development",

    educationTitle: "Education",
    educationKicker: "Learning is also<br />part of the journey.",
    edu1Degree: "Full Stack Web Developer / Java",
    edu1Dates: "June 2026 — September 2026",
    edu2Degree: "Professional degree in Advertising and Creative Marketing",
    edu2Dates: "July 2012 — October 2017",
    edu3Degree: "Print Media Technician",
    edu3Dates: "July 2010 — July 2011",

    contactTitle: "Contact",
    contactCopy: "Have a project in mind? Let's explore how we can bring it to life.",
    contactEmail: "Write to me",

    footerNav: "Footer",
    footerTagline: "Turn up the volume on your project.",
    footerRights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

let currentLanguage = "es";
const t = (key) => copy[currentLanguage][key] ?? key;

function setLanguage(language) {
  if (!copy[language]) return;
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  try {
    localStorage.setItem("zhaw-language", language);
  } catch (error) {
    /* storage unavailable */
  }

  document.dispatchEvent(new CustomEvent("zhaw:language", { detail: { language } }));
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

/* =========================================================
   Active nav link (scroll spy)
   ========================================================= */

const navLinks = [...document.querySelectorAll(".main-nav a")];
const spyTargets = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter((target) => target && target.offsetHeight > 10);

if ("IntersectionObserver" in window && spyTargets.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  spyTargets.forEach((target) => spy.observe(target));
}

/* =========================================================
   Reveal on scroll
   ========================================================= */

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !prefersReducedMotion.matches) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((element) => revealObserver.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

/* =========================================================
   ZHAW TV — Projects
   ========================================================= */

(function initProjects() {
  const section = document.querySelector("[data-projects]");
  if (!section) return;

  const allProjects = Array.isArray(window.ZHAW_PROJECTS) ? window.ZHAW_PROJECTS : [];

  const tv = section.querySelector("[data-tv]");
  const cover = section.querySelector("[data-tv-cover]");
  const tvVideo = section.querySelector("[data-tv-video]");
  const tvOsd = section.querySelector("[data-tv-osd]");
  const volButtons = section.querySelectorAll("[data-tv-vol]");
  const tvSite = section.querySelector("[data-tv-site]");
  const tvSiteImg = section.querySelector("[data-tv-site-img]");
  const bars = section.querySelector("[data-tv-bars]");
  const barsLabel = section.querySelector("[data-tv-bars-label]");
  const channelLabel = section.querySelector("[data-tv-channel]");
  const panelIndex = section.querySelector("[data-panel-index]");
  const panelTotal = section.querySelector("[data-panel-total]");
  const titleMain = section.querySelector("[data-panel-title-main]");
  const titleHighlight = section.querySelector("[data-panel-title-highlight]");
  const tagsList = section.querySelector("[data-panel-tags]");
  const description = section.querySelector("[data-panel-description]");
  const metric = section.querySelector("[data-panel-metric]");
  const urlButton = section.querySelector("[data-panel-url]");
  const caseButton = section.querySelector("[data-panel-case]");
  const rail = section.querySelector("[data-rail]");
  const track = section.querySelector("[data-rail-track]");
  const railProgress = section.querySelector("[data-rail-progress]");
  const filterButtons = [...section.querySelectorAll("[data-filter]")];
  const prevButtons = section.querySelectorAll("[data-project-prev]");
  const nextButtons = section.querySelectorAll("[data-project-next]");

  const pinQuery = window.matchMedia("(min-width: 1024px) and (min-height: 640px)");
  const STEP_VH = 0.7; // cuánto scroll vertical consume cada canal

  let filter = "web";
  let list = [];
  let active = 0;
  let isPinned = false;
  let switchTimer;

  const pad = (number) => String(number).padStart(2, "0");
  const localized = (value) => (value && typeof value === "object" ? value[currentLanguage] ?? value.es : value ?? "");
  /* un proyecto puede estar en varios filtros: category: "web" o ["web", "video", "design"] */
  const categoriesOf = (project) => [].concat(project.category ?? []);
  /* views.<filtro> sobrescribe campos (cover, coverVideo, description, tags, metric…) solo en ese filtro */
  const viewFor = (project) => (project.views?.[filter] ? { ...project, ...project.views[filter] } : project);
  const siteLabel = () => (filter === "web" ? t("viewSite") : t("viewProject"));
  /* video principal del proyecto: project.video, o el primero de caseStudy.media */
  const videoOf = (project) => {
    if (project.video) return typeof project.video === "string" ? { src: project.video } : project.video;
    return (
      (project.caseStudy?.media ?? []).find(
        (item) => (item?.type === "video" && item.src) || (item?.type === "youtube" && item.id)
      ) ?? null
    );
  };
  /* botón principal: en el filtro Video abre el reproductor; si no, enlaza al sitio */
  function setupMainButton(button, project) {
    /* primaryLink: el botón principal lleva siempre al enlace del proyecto (url + urlLabel) */
    const video = filter === "video" && !project.primaryLink ? videoOf(project) : null;
    const label = button.querySelector("[data-i18n]");
    if (video?.type === "youtube") {
      /* video de YouTube: se abre en YouTube */
      button.hidden = false;
      button.dataset.mode = "youtube";
      button.href = `https://www.youtube.com/watch?v=${video.id}`;
      button.target = "_blank";
      label.textContent = t("viewVideo");
      button._video = null;
      return;
    }
    if (video) {
      button.hidden = false;
      button.dataset.mode = "video";
      button.href = video.src;
      button.removeAttribute("target");
      label.textContent = t("viewVideo");
      button._video = video;
      return;
    }
    delete button.dataset.mode;
    button._video = null;
    button.target = "_blank";
    button.hidden = !project.url;
    if (project.url) {
      button.href = project.url;
      label.textContent = (project.primaryLink && localized(project.urlLabel)) || siteLabel();
    }
  }
  function onMainButton(event) {
    const button = event.currentTarget;
    if (button.dataset.mode !== "video" || !button._video) return;
    event.preventDefault();
    window.ZHAWVideoPlayer?.open(button._video);
  }

  /* ---------- Render ---------- */

  function renderRail() {
    track.innerHTML = "";

    if (!list.length) {
      const empty = document.createElement("li");
      empty.className = "channel-card channel-card--empty";
      empty.textContent = t("comingSoonCard");
      track.append(empty);
      return;
    }

    list.forEach((project, index) => {
      const item = document.createElement("li");
      item.className = "channel-card";
      item.style.setProperty("--tilt", `${[-1.2, 0.8, -0.4, 1.1, -0.9, 0.5][index % 6]}deg`);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "channel-card__button";
      button.dataset.index = String(index);
      button.dataset.cursor = "Play";

      const thumb = document.createElement("span");
      thumb.className = "channel-card__thumb";
      if (project.cover) {
        const image = document.createElement("img");
        image.src = project.cover;
        image.alt = "";
        image.loading = "lazy";
        thumb.append(image);
      } else {
        thumb.classList.add("channel-card__thumb--empty");
      }

      const label = document.createElement("span");
      label.className = "channel-card__label";
      const number = document.createElement("span");
      number.className = "channel-card__number";
      number.textContent = pad(index + 1);
      const name = document.createElement("span");
      name.className = "channel-card__name";
      name.textContent = [project.title?.main, project.title?.highlight].filter(Boolean).join(" ");
      label.append(number, name);

      button.append(thumb, label);
      button.setAttribute("aria-label", `${t("channel")} ${pad(index + 1)}: ${name.textContent}`);
      button.addEventListener("click", () => goTo(index));

      const crown = document.createElement("img");
      crown.className = "channel-card__crown";
      crown.src = "assets/images/stickers/crown-lime.webp";
      crown.alt = "";
      crown.setAttribute("aria-hidden", "true");

      item.append(button, crown);
      track.append(item);
    });
  }

  function renderPanel() {
    const project = list[active];
    const total = list.length;

    panelIndex.textContent = pad(total ? active + 1 : 0);
    panelTotal.textContent = pad(total);
    channelLabel.innerHTML = `CH.<b>${pad(total ? active + 1 : 0)}</b>`;

    prevButtons.forEach((button) => (button.disabled = total < 2));
    nextButtons.forEach((button) => (button.disabled = total < 2));

    if (!project) {
      titleMain.textContent = "";
      titleHighlight.textContent = t("comingSoonTitle");
      tagsList.innerHTML = "";
      description.textContent = t("comingSoonText");
      metric.hidden = true;
      urlButton.hidden = true;
      caseButton.hidden = true;
      cover.hidden = true;
      bars.hidden = false;
      barsLabel.textContent = "NO SIGNAL";
      setTvVideo(null);
      setTvSite(null);
      return;
    }

    titleMain.textContent = project.title?.main ?? "";
    titleHighlight.textContent = project.title?.highlight ?? "";

    tagsList.innerHTML = "";
    (project.tags ?? []).forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = localized(tag);
      tagsList.append(li);
    });

    description.textContent = localized(project.description);

    const metricText = localized(project.metric);
    metric.hidden = !metricText;
    metric.textContent = metricText;

    setupMainButton(urlButton, project);

    caseButton.hidden = false;

    const projectName = [project.title?.main, project.title?.highlight].filter(Boolean).join(" ");
    if (project.cover) {
      cover.src = project.cover;
      cover.alt = projectName;
      cover.hidden = false;
      bars.hidden = true;
    } else {
      cover.hidden = true;
      cover.removeAttribute("src");
      bars.hidden = false;
      barsLabel.textContent = projectName;
    }
    setTvVideo(project.coverVideo);
    setTvSite(project);

    track.querySelectorAll(".channel-card").forEach((card, index) => {
      const isActive = index === active;
      card.classList.toggle("is-active", isActive);
      card.querySelector("button")?.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  /* ---------- Volumen del TV (VOL− / VOL+) ---------- */
  const VOL_STEPS = 10;
  let tvVolume = 0; // 0 = silencio (arranca muteado)
  let otherModalOpen = false;
  let osdTimer;

  function applyTvVolume() {
    if (!tvVideo) return;
    tvVideo.volume = tvVolume / VOL_STEPS;
    tvVideo.muted = tvVolume === 0 || otherModalOpen;
  }

  function showOsd(text) {
    tvOsd.textContent = text;
    tvOsd.hidden = false;
    clearTimeout(osdTimer);
    osdTimer = setTimeout(() => (tvOsd.hidden = true), 1400);
  }

  function changeVolume(delta) {
    tvVolume = Math.max(0, Math.min(VOL_STEPS, tvVolume + delta));
    applyTvVolume();
    if (!tvVideo.hidden && tvVideo.paused) tvVideo.play().catch(() => {});
    const bars = "▮".repeat(tvVolume) + "▯".repeat(VOL_STEPS - tvVolume);
    showOsd(tvVolume === 0 ? "MUTE" : `VOL ${bars}`);
  }

  volButtons.forEach((button) => button.addEventListener("click", () => changeVolume(Number(button.dataset.tvVol))));

  /* si se abre el modal o el reproductor, el TV se silencia */
  document.addEventListener("zhaw:modal", (event) => {
    otherModalOpen = Boolean(event.detail.open);
    applyTvVolume();
  });

  /* Web: computador con la página completa haciendo scroll */
  /* si el proyecto tiene coverVideo, en el computador se ve el video en vez de la captura */
  const siteOf = (project) =>
    project.coverVideo && !project.screen
      ? ""
      : project.screen || (project.caseStudy?.media ?? []).find((item) => item?.type === "page" && item.src)?.src || "";

  function measureSite() {
    if (tvSite.hidden || !tvSiteImg.naturalWidth) return;
    const distance = Math.max(0, tvSiteImg.offsetHeight - tvSite.clientHeight);
    tvSite.style.setProperty("--site-dist", `${distance}px`);
    tvSite.style.setProperty("--site-dur", `${Math.max(10, Math.round(distance / 70))}s`);
  }

  function setTvSite(project) {
    const isPc = filter === "web";
    tv.classList.toggle("is-pc", isPc);
    const src = isPc && project ? siteOf(project) : "";
    tvSite.hidden = !src;
    if (!src) {
      tvSiteImg.removeAttribute("src");
      return;
    }
    cover.hidden = true;
    bars.hidden = true;
    if (tvSiteImg.getAttribute("src") !== src) {
      tvSite.style.setProperty("--site-dist", "0px");
      tvSiteImg.src = src;
    }
    tvSiteImg.style.animation = "none";
    void tvSiteImg.offsetWidth;
    tvSiteImg.style.animation = "";
    if (tvSiteImg.complete) measureSite();
  }

  tvSiteImg.addEventListener("load", measureSite);
  if ("ResizeObserver" in window) new ResizeObserver(measureSite).observe(tvSite);

  /* video en el televisor (muted + loop); con "reducir movimiento" se queda la portada */
  function setTvVideo(src) {
    if (!tvVideo) return;
    const useVideo = Boolean(src) && !prefersReducedMotion.matches;
    if (!useVideo) {
      tvVideo.pause();
      tvVideo.hidden = true;
      tvVideo.removeAttribute("src");
      tvVideo.load();
      return;
    }
    if (tvVideo.getAttribute("src") !== src) {
      tvVideo.src = src;
      tvVideo.preload = "auto";
    }
    applyTvVolume();
    tvVideo.hidden = false;
    tvVideo.play().catch(() => {});
  }

  function playSwitch() {
    if (prefersReducedMotion.matches) return;
    tv.classList.remove("is-switching");
    void tv.offsetWidth;
    tv.classList.add("is-switching");
    clearTimeout(switchTimer);
    switchTimer = setTimeout(() => tv.classList.remove("is-switching"), 450);
  }

  function setActive(index, { animate = true } = {}) {
    if (!list.length) {
      active = 0;
      renderPanel();
      return;
    }
    const next = Math.max(0, Math.min(list.length - 1, index));
    if (next === active && track.querySelector(".is-active")) return;
    active = next;
    if (animate) playSwitch();
    renderPanel();
    if (!isPinned) scrollCardIntoView();
  }

  function scrollCardIntoView() {
    const card = track.children[active];
    if (!card) return;
    const left = card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2;
    rail.scrollTo({ left, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
  }

  /* ---------- Case study modal ---------- */

  const modal = document.querySelector("[data-case-modal]");
  const caseEls = modal && {
    channel: modal.querySelector("[data-case-channel]"),
    scroll: modal.querySelector("[data-case-scroll]"),
    cats: modal.querySelector("[data-case-cats]"),
    logo: modal.querySelector("[data-case-logo]"),
    titleMain: modal.querySelector("[data-case-title-main]"),
    titleHighlight: modal.querySelector("[data-case-title-highlight]"),
    tags: modal.querySelector("[data-case-tags]"),
    summary: modal.querySelector("[data-case-summary]"),
    url: modal.querySelector("[data-case-url]"),
    link: modal.querySelector("[data-case-link]"),
    linkLabel: modal.querySelector("[data-case-link-label]"),
    feature: modal.querySelector("[data-case-feature]"),
    text: modal.querySelector("[data-case-text]"),
    aside: modal.querySelector("[data-case-aside]"),
    metrics: modal.querySelector("[data-case-metrics]"),
    meta: modal.querySelector("[data-case-meta]"),
    gallerySection: modal.querySelector("[data-case-gallery-section]"),
    grid: modal.querySelector("[data-case-grid]"),
    viewer: modal.querySelector("[data-case-viewer]"),
    viewerStage: modal.querySelector("[data-viewer-stage]"),
    viewerCount: modal.querySelector("[data-viewer-count]"),
    viewerCaption: modal.querySelector("[data-viewer-caption]"),
    viewerPrev: modal.querySelector("[data-viewer-prev]"),
    viewerNext: modal.querySelector("[data-viewer-next]"),
    viewerClose: modal.querySelector("[data-viewer-close]"),
  };
  const EMPTY_SLOTS = 3;
  let caseProject = null;
  let caseChannel = 0;
  let caseMedia = [];
  let viewerIndex = -1;

  const projectName = (project) => [project.title?.main, project.title?.highlight].filter(Boolean).join(" ");

  /* media: [{ type: "video" | "page" | "image", src, poster?, title? }]; "gallery" (solo fotos) sigue funcionando */
  function mediaOf(project) {
    const study = project.caseStudy ?? {};
    const media = Array.isArray(study.media) ? study.media : [];
    const legacy = (study.gallery ?? []).map((photo) => ({ type: "image", ...photo }));
    const all = [...media, ...legacy].filter((item) => item && (item.src || (item.type === "youtube" && item.id)));
    const matches = (item) => [].concat(item.category ?? []).includes(filter);
    return [...all.filter(matches), ...all.filter((item) => !matches(item))];
  }

  /* pieza destacada arriba: la primera que no sea una página web (video, render, foto) */
  /* caseStudy.feature: "cover" → arriba va la portada y todas las piezas quedan en la galería */
  const featureIndex = () =>
    caseProject?.caseStudy?.feature === "cover"
      ? -1
      : caseMedia.findIndex((item) => item.type !== "page" && item.type !== "youtube");

  function makeVideo(item, { autoplay = false } = {}) {
    const video = document.createElement("video");
    video.src = item.src;
    if (item.poster) video.poster = item.poster;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    if (autoplay && !prefersReducedMotion.matches) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
    }
    return video;
  }

  function renderFeature(project) {
    const feature = caseEls.feature;
    feature.innerHTML = "";
    feature.className = "case-hero__media";
    const featured = caseMedia[featureIndex()];
    if (featured?.type === "video") {
      feature.append(makeVideo(featured, { autoplay: true }));
      return;
    }
    /* sin pieza destacada pero con video de portada: se muestra en loop */
    if (!featured && project.coverVideo) {
      feature.append(makeVideo({ src: project.coverVideo, poster: project.cover }, { autoplay: true }));
      return;
    }
    const still = featured?.src || project.cover;
    if (still) {
      const img = document.createElement("img");
      img.src = still;
      img.alt = projectName(project);
      feature.append(img);
      return;
    }
    feature.classList.add("is-empty");
    const span = document.createElement("span");
    span.textContent = t("caseSoon");
    feature.append(span);
  }

  function renderStory(project) {
    const study = project.caseStudy ?? {};
    caseEls.text.innerHTML = "";
    const headline = localized(study.headline);
    if (headline) {
      const h = document.createElement("h3");
      h.className = "case-story__headline";
      h.textContent = headline;
      caseEls.text.append(h);
    }
    const story = localized(study.story);
    /* story: lista de párrafos; un elemento { heading, text } agrega un subtítulo */
    const paragraphs = Array.isArray(story) ? story : story ? [story] : [];
    if (paragraphs.length) {
      paragraphs.forEach((item) => {
        if (item && typeof item === "object") {
          if (item.heading) {
            const h = document.createElement("h4");
            h.textContent = item.heading;
            caseEls.text.append(h);
          }
          if (item.text) {
            const p = document.createElement("p");
            p.textContent = item.text;
            caseEls.text.append(p);
          }
          return;
        }
        const p = document.createElement("p");
        p.textContent = item;
        caseEls.text.append(p);
      });
      return;
    }
    [
      ["caseOverview", localized(study.overview) || localized(project.description)],
      ["caseChallenge", localized(study.challenge)],
      ["caseSolution", localized(study.solution)],
      ["caseResults", localized(study.results)],
    ].forEach(([key, value]) => {
      if (!value) return;
      const h = document.createElement("h4");
      const p = document.createElement("p");
      h.textContent = t(key);
      p.textContent = value;
      caseEls.text.append(h, p);
    });
  }

  function renderAside(project) {
    const study = project.caseStudy ?? {};
    /* métricas: caseStudy.metrics [{ value, text }] o, si no hay, el metric del proyecto */
    let metrics = (study.metrics ?? []).map((m) => ({ value: m.value, text: localized(m.text) })).filter((m) => m.value);
    if (!metrics.length) {
      const metricText = localized(project.metric);
      const match = metricText && metricText.match(/^([+\-−]?\s?[\d.,]+\s?%?x?)\s*(.*)$/);
      if (metricText) metrics = [{ value: match ? match[1].replace(/\s/g, "") : metricText, text: match ? match[2] : "" }];
    }
    caseEls.metrics.innerHTML = "";
    metrics.forEach((m, i) => {
      const card = document.createElement("div");
      card.className = "case-kpi";
      if (i === 0) {
        const label = document.createElement("span");
        label.className = "case-kpi__label";
        label.textContent = t(metrics.length > 1 ? "caseResultsLabel" : "caseResultLabel");
        card.append(label);
      }
      const value = document.createElement("strong");
      value.className = "case-kpi__value";
      value.textContent = m.value;
      const text = document.createElement("span");
      text.className = "case-kpi__text";
      text.textContent = m.text || "";
      card.append(value, text);
      caseEls.metrics.append(card);
    });
    const note = localized(study.metricsNote);
    if (metrics.length && note) {
      const p = document.createElement("p");
      p.className = "case-kpis__note";
      p.textContent = note;
      caseEls.metrics.append(p);
    }
    /* logros sin cifra: caseStudy.highlights { es: ["…"], en: ["…"] } */
    const highlights = localized(study.highlights);
    if (Array.isArray(highlights) && highlights.length) {
      const card = document.createElement("div");
      card.className = "case-kpi case-kpi--list";
      const label = document.createElement("span");
      label.className = "case-kpi__label";
      label.textContent = t("caseResultsLabel");
      const ul = document.createElement("ul");
      highlights.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.append(li);
      });
      card.append(label, ul);
      caseEls.metrics.append(card);
    }
    caseEls.metrics.hidden = !caseEls.metrics.children.length;

    /* ficha: cliente, créditos extra (agencia, colaboradores…), año y rol */
    caseEls.meta.innerHTML = "";
    const rows = [["caseClient", study.client]];
    (study.credits ?? []).forEach((c) => rows.push([localized(c.label), localized(c.value), true]));
    rows.push(["caseYear", study.year], ["caseRole", localized(study.role)]);
    rows.forEach(([key, value, literal]) => {
      if (!value) return;
      const wrap = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = literal ? key : t(key);
      dd.textContent = value;
      wrap.append(dt, dd);
      caseEls.meta.append(wrap);
    });
    caseEls.meta.hidden = !caseEls.meta.children.length;
    caseEls.aside.hidden = caseEls.metrics.hidden && caseEls.meta.hidden;
  }

  function renderGrid(project) {
    caseEls.grid.innerHTML = "";
    const skip = featureIndex();
    caseMedia.forEach((item, index) => {
      if (index === skip) return;
      const li = document.createElement("li");
      li.className = `case-card case-card--${item.type}`;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "case-card__button";
      const caption = localized(item.title) || `${t("photo")} ${pad(index + 1)}`;
      button.setAttribute("aria-label", `${caption} — ${t("caseOpen")}`);
      button.dataset.cursor = "Open";

      const screen = document.createElement("span");
      screen.className = "case-card__screen";
      if (item.type === "page") {
        const chrome = document.createElement("span");
        chrome.className = "case-card__chrome";
        chrome.innerHTML = "<i></i><i></i><i></i>";
        const url = document.createElement("span");
        url.textContent = (project.url || "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
        chrome.append(url);
        button.append(chrome);
      }
      if (item.type === "video" || item.type === "youtube") {
        const img = document.createElement("img");
        img.src = item.type === "youtube" ? `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg` : item.poster || project.cover || "";
        img.alt = "";
        img.loading = "lazy";
        const play = document.createElement("span");
        play.className = "case-card__play";
        play.setAttribute("aria-hidden", "true");
        screen.append(img, play);
      } else {
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = "";
        img.loading = "lazy";
        screen.append(img);
      }
      const label = document.createElement("span");
      label.className = "case-card__label";
      label.textContent = caption;
      button.append(screen, label);
      button.addEventListener("click", () => openViewer(index));
      li.append(button);
      caseEls.grid.append(li);
    });

    /* si todo el material ya está arriba (p. ej. un solo video), no mostramos la galería */
    caseEls.gallerySection.hidden = Boolean(caseMedia.length) && !caseEls.grid.children.length;
    if (!caseMedia.length) {
      for (let i = 0; i < EMPTY_SLOTS; i += 1) {
        const li = document.createElement("li");
        li.className = "case-card case-card--empty";
        li.setAttribute("aria-hidden", "true");
        li.innerHTML = `<span class="case-card__screen"><span>${t("caseSoon")}</span></span>`;
        caseEls.grid.append(li);
      }
    }
  }

  function renderCase() {
    if (!caseProject) return;
    const project = caseProject;
    const study = project.caseStudy ?? {};
    caseMedia = mediaOf(project);

    caseEls.channel.innerHTML = `CH.<b>${pad(caseChannel + 1)}</b>`;
    const catLabels = { web: "01 Web", design: t("filterDesign"), video: t("filterVideo") };
    caseEls.cats.innerHTML = "";
    const cats = categoriesOf(project);
    if (cats.length > 1) {
      ["web", "video", "design"].filter((cat) => cats.includes(cat)).forEach((cat) => {
        const li = document.createElement("li");
        li.textContent = catLabels[cat];
        li.classList.toggle("is-active", cat === filter);
        caseEls.cats.append(li);
      });
    }
    caseEls.logo.hidden = !study.logo;
    if (study.logo) {
      caseEls.logo.src = study.logo;
      caseEls.logo.alt = study.client || projectName(project);
    } else {
      caseEls.logo.removeAttribute("src");
    }
    caseEls.titleMain.textContent = project.title?.main ?? "";
    caseEls.titleHighlight.textContent = project.title?.highlight ?? "";

    caseEls.tags.innerHTML = "";
    (project.tags ?? []).forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = localized(tag);
      caseEls.tags.append(li);
    });

    const summary = localized(project.description);
    caseEls.summary.textContent = summary;
    caseEls.summary.hidden = !summary;

    setupMainButton(caseEls.url, project);
    /* si el botón principal abre un video, el enlace del proyecto va como segundo botón */
    const showLink = ["video", "youtube"].includes(caseEls.url.dataset.mode) && Boolean(project.url);
    caseEls.link.hidden = !showLink;
    if (showLink) {
      caseEls.link.href = project.url;
      caseEls.linkLabel.textContent = localized(project.urlLabel) || t("viewProject");
    }

    renderFeature(project);
    renderStory(project);
    renderAside(project);
    renderGrid(project);
    if (viewerIndex >= 0) renderViewer();
  }

  /* ---------- Visor ---------- */

  function renderViewer() {
    const item = caseMedia[viewerIndex];
    if (!item) return;
    const stage = caseEls.viewerStage;
    stage.querySelector("video")?.pause();
    stage.innerHTML = "";
    stage.className = `case-viewer__stage case-viewer__stage--${item.type}`;
    if (item.type === "video") {
      const video = makeVideo(item);
      video.autoplay = true;
      stage.append(video);
    } else if (item.type === "youtube" && location.protocol === "file:") {
      /* YouTube no permite incrustar videos en páginas abiertas como archivo (error 153):
         en local mostramos la miniatura con enlace; publicado en un servidor se ve el reproductor */
      const link = document.createElement("a");
      link.className = "case-viewer__yt-thumb";
      link.href = `https://www.youtube.com/watch?v=${item.id}`;
      link.target = "_blank";
      link.rel = "noopener";
      link.innerHTML = `<img src="https://i.ytimg.com/vi/${item.id}/hqdefault.jpg" alt=""><span>${t("watchOnYoutube")} ↗</span>`;
      stage.append(link);
    } else if (item.type === "youtube") {
      const frame = document.createElement("iframe");
      frame.src = `https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0`;
      frame.title = localized(item.title) || "YouTube";
      frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      const link = document.createElement("a");
      link.className = "case-viewer__yt-link";
      link.href = `https://www.youtube.com/watch?v=${item.id}`;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = `${t("watchOnYoutube")} ↗`;
      stage.append(frame, link);
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = localized(item.alt) || localized(item.title) || projectName(caseProject);
      stage.append(img);
    }
    stage.scrollTop = 0;
    caseEls.viewerCount.textContent = `${pad(viewerIndex + 1)} / ${pad(caseMedia.length)}`;
    caseEls.viewerCaption.textContent = localized(item.title) || "";
    caseEls.viewerPrev.hidden = caseMedia.length < 2;
    caseEls.viewerNext.hidden = caseMedia.length < 2;
  }

  function openViewer(index) {
    if (!caseMedia.length) return;
    viewerIndex = (index + caseMedia.length) % caseMedia.length;
    caseEls.feature.querySelector("video")?.pause();
    renderViewer();
    caseEls.viewer.hidden = false;
    modal.classList.add("has-viewer");
    caseEls.viewerStage.focus({ preventScroll: true });
  }

  function closeViewer() {
    if (viewerIndex < 0) return false;
    caseEls.viewerStage.querySelector("video")?.pause();
    caseEls.viewerStage.innerHTML = "";
    caseEls.viewer.hidden = true;
    modal.classList.remove("has-viewer");
    const opener = caseEls.grid.querySelectorAll(".case-card__button")[0];
    viewerIndex = -1;
    opener?.focus?.({ preventScroll: true });
    return true;
  }

  let lastFocus = null;
  function openCase() {
    if (!modal || !list[active]) return;
    caseProject = list[active];
    caseChannel = active;
    viewerIndex = -1;
    caseEls.viewer.hidden = true;
    modal.classList.remove("has-viewer");
    renderCase();
    lastFocus = document.activeElement;
    document.documentElement.classList.add("modal-open");
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    caseEls.scroll.scrollTop = 0;
    document.dispatchEvent(new CustomEvent("zhaw:modal", { detail: { open: true, host: modal } }));
  }

  function closeCase() {
    if (!modal?.open) return;
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  }

  if (modal) {
    caseButton.addEventListener("click", openCase);
    caseEls.url.addEventListener("click", (event) => {
      if (caseEls.url.dataset.mode === "video") caseEls.feature.querySelector("video")?.pause();
      onMainButton(event);
    });
    modal.querySelector("[data-case-close]").addEventListener("click", (event) => {
      event.stopPropagation();
      closeCase();
    });
    caseEls.viewerClose.addEventListener("click", closeViewer);
    caseEls.viewerPrev.addEventListener("click", () => openViewer(viewerIndex - 1));
    caseEls.viewerNext.addEventListener("click", () => openViewer(viewerIndex + 1));
    caseEls.viewer.addEventListener("click", (event) => {
      if (event.target === caseEls.viewer || event.target === caseEls.viewerStage) closeViewer();
    });
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeCase(); // click on backdrop
    });
    modal.addEventListener("cancel", (event) => {
      if (closeViewer()) event.preventDefault(); // Esc cierra primero el visor
    });
    modal.addEventListener("keydown", (event) => {
      if (viewerIndex < 0) return;
      if (event.key === "ArrowRight") openViewer(viewerIndex + 1);
      if (event.key === "ArrowLeft") openViewer(viewerIndex - 1);
    });
    modal.addEventListener("close", () => {
      closeViewer();
      caseEls.feature.querySelector("video")?.pause();
      document.documentElement.classList.remove("modal-open");
      document.dispatchEvent(new CustomEvent("zhaw:modal", { detail: { open: false } }));
      lastFocus?.focus?.({ preventScroll: true });
    });
  }

  urlButton.addEventListener("click", onMainButton);

  /* ---------- Pinned horizontal scroll (desktop) ---------- */

  function scrollableDistance() {
    return Math.max(0, section.offsetHeight - (window.innerHeight - headerHeight()));
  }

  function headerHeight() {
    return document.querySelector("[data-header]")?.offsetHeight ?? 0;
  }

  function setupPin() {
    isPinned = pinQuery.matches && list.length > 1;
    section.classList.toggle("is-pinned", isPinned);
    if (isPinned) {
      const viewport = window.innerHeight - headerHeight();
      const height = viewport + (list.length - 1) * window.innerHeight * STEP_VH;
      section.style.setProperty("--projects-height", `${Math.round(height)}px`);
    } else {
      section.style.removeProperty("--projects-height");
      track.style.transform = "";
      railProgress.style.setProperty("--p", "0");
      requestAnimationFrame(scrollCardIntoView);
    }
    onScroll();
  }

  function progress() {
    const distance = scrollableDistance();
    if (!distance) return 0;
    const top = section.getBoundingClientRect().top - headerHeight();
    return Math.min(1, Math.max(0, -top / distance));
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      if (!isPinned) return;
      const p = progress();
      const maxShift = Math.max(0, track.scrollWidth - rail.clientWidth + parseFloat(getComputedStyle(rail).paddingLeft) * 2);
      track.style.transform = `translate3d(${-p * maxShift}px, 0, 0)`;
      railProgress.parentElement.style.setProperty("--p", p.toFixed(4));
      railProgress.style.setProperty("--p", p.toFixed(4));
      setActive(Math.round(p * (list.length - 1)));
    });
  }

  function goTo(index) {
    if (!list.length) return;
    const target = (index + list.length) % list.length;
    if (isPinned) {
      const sectionTop = window.scrollY + section.getBoundingClientRect().top - headerHeight();
      const y = sectionTop + (target / (list.length - 1)) * scrollableDistance();
      window.scrollTo({ top: Math.round(y) + 1, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
    } else {
      setActive(target);
    }
  }

  /* ---------- Filters ---------- */

  function applyFilter(nextFilter, { scroll = true } = {}) {
    filter = nextFilter;
    list = allProjects.filter((project) => categoriesOf(project).includes(filter)).map(viewFor);
    active = 0;

    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const sectionTop = window.scrollY + section.getBoundingClientRect().top - headerHeight();
    const wasInside = window.scrollY > sectionTop + 2;

    renderRail();
    renderPanel();
    playSwitch();
    setupPin();

    // Al cambiar de filtro, volver al CH.01 manteniendo la sección en pantalla
    if (scroll && wasInside) window.scrollTo({ top: sectionTop + 1 });
    rail.scrollLeft = 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.filter !== filter) applyFilter(button.dataset.filter);
    });
  });

  prevButtons.forEach((button) => button.addEventListener("click", () => goTo(active - 1)));
  nextButtons.forEach((button) => button.addEventListener("click", () => goTo(active + 1)));

  /* Keyboard: ← → inside the section */
  section.addEventListener("keydown", (event) => {
    if (event.target.closest("input, textarea")) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    }
  });

  /* Trackpad horizontal swipe → acts like vertical scroll while pinned */
  section.addEventListener(
    "wheel",
    (event) => {
      if (!isPinned) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 2) {
        event.preventDefault();
        window.scrollBy(0, event.deltaX);
      }
    },
    { passive: false }
  );

  /* Mobile / tablet: swipe on the TV, rail follows scroll-snap */
  let touchStartX = 0;
  let touchStartY = 0;
  tv.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    },
    { passive: true }
  );
  tv.addEventListener(
    "touchend",
    (event) => {
      const dx = event.changedTouches[0].clientX - touchStartX;
      const dy = event.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) goTo(active + (dx < 0 ? 1 : -1));
    },
    { passive: true }
  );

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", setupPin);
  pinQuery.addEventListener?.("change", setupPin);

  document.addEventListener("zhaw:language", () => {
    renderRail();
    renderPanel();
    if (modal?.open) renderCase();
  });

  applyFilter("web", { scroll: false });
})();

/* =========================================================
   Hero — mouse parallax on floating stickers
   ========================================================= */

/* =========================================================
   Reproductor de video (casi pantalla completa)
   ========================================================= */

(function initVideoPlayer() {
  const player = document.querySelector("[data-video-player]");
  if (!player) return;
  const video = player.querySelector("[data-video-el]");
  const rotate = player.querySelector("[data-video-rotate]");
  const portraitPhone = window.matchMedia("(max-width: 820px) and (orientation: portrait)");
  let dismissed = false;
  let lastFocus = null;

  const isLandscapeVideo = () => video.videoWidth > video.videoHeight;

  function updateRotateHint() {
    const show = player.open && !dismissed && portraitPhone.matches && isLandscapeVideo();
    rotate.hidden = !show;
    if (show) video.pause();
  }

  function play() {
    video.play().catch(() => {});
  }

  function open(item) {
    if (!item?.src) return;
    lastFocus = document.activeElement;
    dismissed = false;
    rotate.hidden = true;
    video.src = item.src;
    if (item.poster) video.poster = item.poster;
    else video.removeAttribute("poster");
    if (typeof player.showModal === "function") player.showModal();
    else player.setAttribute("open", "");
    document.documentElement.classList.add("modal-open");
    document.dispatchEvent(new CustomEvent("zhaw:modal", { detail: { open: true, host: player } }));
    play();
  }

  function close() {
    if (!player.open) return;
    if (typeof player.close === "function") player.close();
    else player.removeAttribute("open");
  }

  video.addEventListener("loadedmetadata", () => {
    if (video.videoWidth && video.videoHeight) video.style.setProperty("--ar", String(video.videoWidth / video.videoHeight));
    updateRotateHint();
  });
  portraitPhone.addEventListener("change", () => {
    const wasShown = !rotate.hidden;
    updateRotateHint();
    if (wasShown && rotate.hidden && player.open) play();
  });
  player.querySelector("[data-video-rotate-ok]").addEventListener("click", () => {
    dismissed = true;
    rotate.hidden = true;
    play();
  });
  player.querySelector("[data-video-close]").addEventListener("click", close);
  player.addEventListener("click", (event) => {
    if (event.target === player) close();
  });
  player.addEventListener("close", () => {
    video.pause();
    video.removeAttribute("src");
    video.load();
    const caseModal = document.querySelector("[data-case-modal]");
    const caseOpen = Boolean(caseModal?.open);
    if (!caseOpen) document.documentElement.classList.remove("modal-open");
    document.dispatchEvent(new CustomEvent("zhaw:modal", { detail: { open: caseOpen, host: caseModal } }));
    lastFocus?.focus?.({ preventScroll: true });
  });

  window.ZHAWVideoPlayer = { open, close };
})();

(function initHeroParallax() {
  const hero = document.querySelector(".hero");
  if (!hero || prefersReducedMotion.matches || !window.matchMedia("(pointer: fine)").matches) return;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    hero.style.setProperty("--my", ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  });
  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--mx", "0");
    hero.style.setProperty("--my", "0");
  });
})();

/* =========================================================
   Custom cursor — lime dot + graffiti ring + spray splat on click
   ========================================================= */

(function initCursor() {
  if (prefersReducedMotion.matches || !window.matchMedia("(pointer: fine)").matches) return;

  const cursor = document.createElement("div");
  cursor.className = "cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = '<span class="cursor__ring"><span class="cursor__label"></span></span><span class="cursor__dot"></span>';
  document.body.append(cursor);
  document.documentElement.classList.add("has-cursor");

  const dot = cursor.querySelector(".cursor__dot");
  const ring = cursor.querySelector(".cursor__ring");
  const label = cursor.querySelector(".cursor__label");

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let ringX = x;
  let ringY = y;

  const interactive = "a, button, [role='button'], label, .channel-card__button";

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      cursor.classList.add("is-visible");
    },
    { passive: true }
  );

  (function loop() {
    ringX += (x - ringX) * 0.2;
    ringY += (y - ringY) * 0.2;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(loop);
  })();

  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest(interactive);
    const labelled = event.target.closest("[data-cursor]");
    cursor.classList.toggle("is-hover", Boolean(target) && !labelled);
    cursor.classList.toggle("has-label", Boolean(labelled));
    label.textContent = labelled ? labelled.dataset.cursor : "";
  });

  document.addEventListener("pointerdown", (event) => {
    cursor.classList.add("is-down");
    splat(event.clientX, event.clientY);
  });
  document.addEventListener("pointerup", () => cursor.classList.remove("is-down"));
  document.documentElement.addEventListener("pointerleave", () => cursor.classList.remove("is-visible"));

  document.addEventListener("zhaw:modal", (event) => {
    const host = event.detail.open ? event.detail.host : document.body;
    host.append(cursor);
  });

  function splat(px, py) {
    const colors = ["var(--lime)", "var(--lime)", "var(--violet)", "#fff"];
    for (let i = 0; i < 12; i += 1) {
      const drop = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const distance = 26 + Math.random() * 40;
      drop.className = "cursor-splat";
      drop.style.left = `${px}px`;
      drop.style.top = `${py}px`;
      drop.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      drop.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
      drop.style.setProperty("--s", `${5 + Math.random() * 8}px`);
      drop.style.setProperty("--c", colors[i % colors.length]);
      cursor.parentElement.append(drop);
      drop.addEventListener("animationend", () => drop.remove());
    }
  }
})();

/* =========================================================
   Saved language
   ========================================================= */

let savedLanguage = null;
try {
  savedLanguage = localStorage.getItem("zhaw-language");
} catch (error) {
  /* storage unavailable */
}
if (savedLanguage === "en") setLanguage("en");
