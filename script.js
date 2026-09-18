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
    filterDesign: "02 Diseño",
    filterVideo: "03 Video",
    prevChannel: "Canal anterior",
    nextChannel: "Canal siguiente",
    prevProject: "Proyecto anterior",
    nextProject: "Proyecto siguiente",
    viewSite: "Ver sitio",
    viewProject: "Ver proyecto",
    caseStudy: "Caso de estudio",
    close: "Cerrar",
    caseSoon: "Fotos próximamente",
    prevPhoto: "Foto anterior",
    nextPhoto: "Foto siguiente",
    photo: "Foto",
    caseClient: "Cliente",
    caseYear: "Año",
    caseRole: "Rol",
    caseOverview: "El proyecto",
    caseChallenge: "El reto",
    caseSolution: "La solución",
    caseResults: "Resultados",
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
    filterDesign: "02 Design",
    filterVideo: "03 Video",
    prevChannel: "Previous channel",
    nextChannel: "Next channel",
    prevProject: "Previous project",
    nextProject: "Next project",
    viewSite: "View site",
    viewProject: "View project",
    caseStudy: "Case study",
    close: "Close",
    caseSoon: "Photos coming soon",
    prevPhoto: "Previous photo",
    nextPhoto: "Next photo",
    photo: "Photo",
    caseClient: "Client",
    caseYear: "Year",
    caseRole: "Role",
    caseOverview: "The project",
    caseChallenge: "The challenge",
    caseSolution: "The solution",
    caseResults: "Results",
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
      return;
    }

    titleMain.textContent = project.title?.main ?? "";
    titleHighlight.textContent = project.title?.highlight ?? "";

    tagsList.innerHTML = "";
    (project.tags ?? []).forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      tagsList.append(li);
    });

    description.textContent = localized(project.description);

    const metricText = localized(project.metric);
    metric.hidden = !metricText;
    metric.textContent = metricText;

    urlButton.hidden = !project.url;
    if (project.url) {
      urlButton.href = project.url;
      urlButton.querySelector("[data-i18n]").textContent = project.category === "web" ? t("viewSite") : t("viewProject");
    }

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

    track.querySelectorAll(".channel-card").forEach((card, index) => {
      const isActive = index === active;
      card.classList.toggle("is-active", isActive);
      card.querySelector("button")?.setAttribute("aria-current", isActive ? "true" : "false");
    });
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
    image: modal.querySelector("[data-case-image]"),
    empty: modal.querySelector("[data-case-empty]"),
    count: modal.querySelector("[data-case-count]"),
    thumbs: modal.querySelector("[data-case-thumbs]"),
    prev: modal.querySelector("[data-case-prev]"),
    next: modal.querySelector("[data-case-next]"),
    titleMain: modal.querySelector("[data-case-title-main]"),
    titleHighlight: modal.querySelector("[data-case-title-highlight]"),
    tags: modal.querySelector("[data-case-tags]"),
    meta: modal.querySelector("[data-case-meta]"),
    text: modal.querySelector("[data-case-text]"),
    metric: modal.querySelector("[data-case-metric]"),
    url: modal.querySelector("[data-case-url]"),
  };
  const GALLERY_SLOTS = 6;
  let caseProject = null;
  let caseChannel = 0;
  let photoIndex = 0;

  function caseGallery() {
    return (caseProject?.caseStudy?.gallery ?? []).filter((photo) => photo && photo.src).slice(0, GALLERY_SLOTS);
  }

  function showPhoto(index) {
    const gallery = caseGallery();
    if (!gallery.length) return;
    photoIndex = (index + gallery.length) % gallery.length;
    const photo = gallery[photoIndex];
    caseEls.image.src = photo.src;
    caseEls.image.alt = localized(photo.alt) || [caseProject.title?.main, caseProject.title?.highlight].filter(Boolean).join(" ");
    caseEls.count.textContent = `${pad(photoIndex + 1)} / ${pad(gallery.length)}`;
    caseEls.thumbs.querySelectorAll("button").forEach((button, i) => button.setAttribute("aria-current", String(i === photoIndex)));
  }

  function renderCase() {
    if (!caseProject) return;
    const project = caseProject;
    const study = project.caseStudy ?? {};
    const gallery = caseGallery();

    caseEls.channel.innerHTML = `CH.<b>${pad(caseChannel + 1)}</b>`;
    caseEls.titleMain.textContent = project.title?.main ?? "";
    caseEls.titleHighlight.textContent = project.title?.highlight ?? "";

    caseEls.tags.innerHTML = "";
    (project.tags ?? []).forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      caseEls.tags.append(li);
    });

    caseEls.meta.innerHTML = "";
    [
      ["caseClient", study.client],
      ["caseYear", study.year],
      ["caseRole", localized(study.role)],
    ].forEach(([key, value]) => {
      if (!value) return;
      const wrap = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = t(key);
      dd.textContent = value;
      wrap.append(dt, dd);
      caseEls.meta.append(wrap);
    });
    caseEls.meta.hidden = !caseEls.meta.children.length;

    caseEls.text.innerHTML = "";
    const blocks = [
      ["caseOverview", localized(study.overview) || localized(project.description)],
      ["caseChallenge", localized(study.challenge)],
      ["caseSolution", localized(study.solution)],
      ["caseResults", localized(study.results)],
    ];
    blocks.forEach(([key, value]) => {
      if (!value) return;
      const h = document.createElement("h3");
      const p = document.createElement("p");
      h.textContent = t(key);
      p.textContent = value;
      caseEls.text.append(h, p);
    });

    const metricText = localized(project.metric);
    caseEls.metric.hidden = !metricText;
    caseEls.metric.textContent = metricText;

    caseEls.url.hidden = !project.url;
    if (project.url) {
      caseEls.url.href = project.url;
      caseEls.url.querySelector("[data-i18n]").textContent = project.category === "web" ? t("viewSite") : t("viewProject");
    }

    /* gallery: 6 slots, real photos first, "coming soon" frames for the rest */
    caseEls.thumbs.innerHTML = "";
    for (let i = 0; i < GALLERY_SLOTS; i += 1) {
      const li = document.createElement("li");
      const photo = gallery[i];
      if (photo) {
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", `${t("photo")} ${i + 1}`);
        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = "";
        img.loading = "lazy";
        button.append(img);
        button.addEventListener("click", () => showPhoto(i));
        li.append(button);
      } else {
        li.className = "is-empty";
        li.setAttribute("aria-hidden", "true");
        li.textContent = pad(i + 1);
      }
      caseEls.thumbs.append(li);
    }

    const hasPhotos = gallery.length > 0;
    caseEls.image.hidden = !hasPhotos;
    caseEls.empty.hidden = hasPhotos;
    caseEls.prev.hidden = gallery.length < 2;
    caseEls.next.hidden = gallery.length < 2;
    caseEls.count.hidden = !hasPhotos;
    if (hasPhotos) showPhoto(Math.min(photoIndex, gallery.length - 1));
  }

  let lastFocus = null;
  function openCase() {
    if (!modal || !list[active]) return;
    caseProject = list[active];
    caseChannel = active;
    photoIndex = 0;
    renderCase();
    lastFocus = document.activeElement;
    document.documentElement.classList.add("modal-open");
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    document.dispatchEvent(new CustomEvent("zhaw:modal", { detail: { open: true, host: modal } }));
  }

  function closeCase() {
    if (!modal?.open) return;
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  }

  if (modal) {
    caseButton.addEventListener("click", openCase);
    modal.querySelector("[data-case-close]").addEventListener("click", closeCase);
    caseEls.prev.addEventListener("click", () => showPhoto(photoIndex - 1));
    caseEls.next.addEventListener("click", () => showPhoto(photoIndex + 1));
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeCase(); // click on backdrop
    });
    modal.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") showPhoto(photoIndex + 1);
      if (event.key === "ArrowLeft") showPhoto(photoIndex - 1);
    });
    modal.addEventListener("close", () => {
      document.documentElement.classList.remove("modal-open");
      document.dispatchEvent(new CustomEvent("zhaw:modal", { detail: { open: false } }));
      lastFocus?.focus?.({ preventScroll: true });
    });
  }

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
    list = allProjects.filter((project) => project.category === filter);
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
