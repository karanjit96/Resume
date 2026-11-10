(function () {
  "use strict";

  const data = window.resumeData;
  const root = document.documentElement;
  root.classList.add("js");

  /* ---------- helpers ---------- */
  const $ = (sel) => document.querySelector(sel);
  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ } }
  };

  const icons = {
    LinkedIn: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    GitHub: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M7 17a1 1 0 0 1 0-1.41L14.59 8H9a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9.41L8.41 17A1 1 0 0 1 7 17Z"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 15.5a1 1 0 0 1-.7-.3l-5-5a1 1 0 1 1 1.4-1.4l4.3 4.29 4.3-4.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29Z"/></svg>'
  };

  /* ---------- language (shared with resume.js) ---------- */
  const preferred = (navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en";
  const saved = store.get("site-lang");
  const site = (window.site = { lang: saved === "de" || saved === "en" ? saved : preferred, icons, esc, store });

  function setLang(lang) {
    site.lang = lang;
    store.set("site-lang", lang);
    root.lang = lang;
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
    render();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  /* ---------- render ---------- */
  function socialLinks(links) {
    return links
      .map((l) => `<a class="icon-btn" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(l.label)}">${icons[l.label] || esc(l.label)}</a>`)
      .join("");
  }

  function timelineItem(item, index, t) {
    const tags = (item.tags || []).map((tag) => `<li>${esc(tag)}</li>`).join("");
    const image = item.image ? `<img class="tl-image" src="${esc(item.image)}" alt="" loading="lazy" />` : "";
    return `<li class="tl-item reveal">
      <span class="tl-dot" aria-hidden="true"></span>
      <details class="tl-card"${index === 0 ? " open" : ""}>
        <summary>
          <div class="tl-head">
            <p class="tl-period">${esc(item.period)}</p>
            <h3>${esc(item.title)}</h3>
            <p class="tl-company">${esc(item.company)}<span> · ${esc(item.place)}</span></p>
            ${tags ? `<ul class="tags">${tags}</ul>` : ""}
          </div>
          <span class="tl-toggle" aria-hidden="true">${icons.chevron}</span>
          <span class="sr-only">${esc(t.ui.showDetails)}</span>
        </summary>
        <div class="tl-body">
          ${image}
          <ul>${item.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        </div>
      </details>
    </li>`;
  }

  function projectCard(item, index, t) {
    const number = String(index + 1).padStart(2, "0");
    const link = item.link
      ? `<a class="project-link" href="${esc(item.link)}" target="_blank" rel="noopener noreferrer">${esc(t.ui.visit)} ${icons.arrow}</a>`
      : "";
    return `<article class="project reveal${index === 0 ? " project-feature" : ""}">
      <span class="project-num" aria-hidden="true">${number}</span>
      <h3>${esc(item.title)}</h3>
      <p class="project-meta">${esc(item.meta)}</p>
      <p>${item.bullets.map(esc).join(" ")}</p>
      ${link}
    </article>`;
  }

  function render() {
    const t = data[site.lang];
    const b = data.base;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = t.ui[node.dataset.i18n];
      if (typeof value === "string") node.textContent = value;
    });

    $("#menuBtn").setAttribute("aria-label", t.ui.menu);
    $("#heroName").textContent = b.name;
    $("#heroRole").textContent = t.role;
    $("#heroText").textContent = t.summary;
    $("#heroMail").href = `mailto:${b.contact.email}`;
    $("#ctaMail").href = `mailto:${b.contact.email}`;
    $("#ctaMail").textContent = b.contact.email;
    $("#heroLinks").innerHTML = socialLinks(b.links);
    $("#ctaLinks").innerHTML = socialLinks(b.links);

    $("#heroStats").innerHTML = t.highlights
      .map((h) => `<div><dt>${esc(h.label)}</dt><dd>${esc(h.value)}</dd></div>`)
      .join("");

    $("#timeline").innerHTML = t.experience.map((item, i) => timelineItem(item, i, t)).join("");
    $("#projectGrid").innerHTML = t.projects.map((item, i) => projectCard(item, i, t)).join("");

    $("#skillsGrid").innerHTML = t.skillGroups
      .map((g) => `<div class="panel reveal"><h3>${esc(g.name)}</h3><ul class="chips">${g.items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`)
      .join("");

    $("#langList").innerHTML = t.languages
      .map((l) => `<li><span>${esc(l.name)}</span><span class="badge">${esc(l.level)}</span></li>`)
      .join("");

    $("#eduList").innerHTML = t.education
      .map((e) => `<li><strong>${esc(e.degree)}</strong><span>${esc(e.school)}</span><span class="muted">${[e.period, e.grade].filter(Boolean).map(esc).join(" · ")}</span></li>`)
      .join("");

    $("#galleryGrid").innerHTML = b.gallery
      .map((g) => {
        const caption = (t.ui.gallery && t.ui.gallery[g.key]) || "";
        return `<button type="button" class="shot reveal${g.wide ? " shot-wide" : ""}" data-src="${esc(g.src)}" data-caption="${esc(caption)}">
          <img src="${esc(g.src)}" alt="${esc(caption)}" loading="lazy" decoding="async" />
          <span>${esc(caption)}</span>
        </button>`;
      })
      .join("");

    $("#year").textContent = new Date().getFullYear();
    observeReveals();
  }

  /* ---------- reveal on scroll ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealObserver =
    "IntersectionObserver" in window && !reduceMotion
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in");
                revealObserver.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        )
      : null;

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add("in");
    });
  }

  /* ---------- header, nav, menu ---------- */
  const header = $("#siteHeader");
  const menuBtn = $("#menuBtn");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    document.body.classList.toggle("nav-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("nav-open")));
  document.querySelectorAll("#siteNav a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  if ("IntersectionObserver" in window) {
    const links = [...document.querySelectorAll("#siteNav a")];
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["experience", "projects", "skills", "gallery", "resume"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  /* ---------- lightbox ---------- */
  const lightbox = $("#lightbox");
  $("#galleryGrid").addEventListener("click", (e) => {
    const shot = e.target.closest(".shot");
    if (!shot) return;
    $("#lightboxImg").src = shot.dataset.src;
    $("#lightboxImg").alt = shot.dataset.caption;
    $("#lightboxCaption").textContent = shot.dataset.caption;
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else window.open(shot.dataset.src, "_blank", "noopener");
  });
  $("#lightboxClose").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });

  /* ---------- language buttons ---------- */
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  setLang(site.lang);
})();
