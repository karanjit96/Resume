(function () {
  "use strict";

  const data = window.resumeData;
  const site = window.site;
  const esc = site.esc;
  const store = site.store;

  const root = document.getElementById("resumeRoot");
  const templateSelect = document.getElementById("resumeTemplate");
  const layoutSelect = document.getElementById("printLayout");
  const printBtn = document.getElementById("downloadPdfBtn");

  const templates = {
    modern:    { side: ["contact", "skills", "languages", "personal"], main: ["profile", "experience", "projects", "education"], avatar: true },
    classic:   { side: ["contact", "skills", "languages"], main: ["profile", "experience", "education", "projects"], avatar: true },
    compact:   { side: ["contact", "skills", "languages"], main: ["profile", "experience", "projects", "education"], avatar: true },
    minimal:   { side: ["contact", "languages"], main: ["profile", "experience", "education", "projects"], avatar: false },
    executive: { side: ["profile", "contact", "skills", "languages"], main: ["experience", "projects", "education"], avatar: true },
    ats:       { side: ["contact", "skills", "languages"], main: ["profile", "experience", "education"], avatar: false }
  };
  const layouts = ["standard", "balanced", "dense"];

  const state = {
    template: templates[store.get("resume-template")] ? store.get("resume-template") : "modern",
    layout: layouts.includes(store.get("resume-print-layout")) ? store.get("resume-print-layout") : "standard"
  };

  const list = (items) => `<ul>${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;

  function entries(items) {
    return items
      .map((item) => {
        const meta = [item.company, item.place].filter(Boolean).map(esc).join(", ");
        return `<article class="r-item">
          <div class="r-item-head"><h4>${esc(item.title)}</h4>${item.period ? `<span class="r-period">${esc(item.period)}</span>` : ""}</div>
          ${meta ? `<p class="r-meta">${meta}</p>` : ""}
          ${list(item.bullets)}
        </article>`;
      })
      .join("");
  }

  function block(type, t, b, inSide) {
    const H = inSide ? "h3" : "h2";
    const wrap = (cls, title, body) => `<section class="r-block ${cls}"><${H}>${esc(title)}</${H}>${body}</section>`;

    switch (type) {
      case "contact":
        return wrap("r-contact", t.ui.contact, `
          <p><a href="mailto:${esc(b.contact.email)}">${esc(b.contact.email)}</a><br/>${esc(b.contact.phone)}</p>
          <p>${b.contact.address.map(esc).join("<br/>")}</p>
          <p>${b.links.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`).join("<br/>")}</p>`);
      case "skills":
        return wrap("r-skills", t.ui.skills, t.skillGroups
          .map((g) => `<p class="r-skill-group"><strong>${esc(g.name)}</strong>${g.items.map(esc).join(", ")}</p>`)
          .join(""));
      case "languages":
        return wrap("r-languages", t.ui.languages, list(t.languages.map((l) => `${l.name} (${l.level})`)));
      case "personal":
        return wrap("r-personal", t.ui.personal, list(t.personal));
      case "profile":
        return wrap("r-profile", t.ui.profile, `<p>${esc(t.summary)}</p>`);
      case "experience":
        return wrap("r-experience", t.ui.experience, entries(t.experience));
      case "projects":
        return wrap("r-projects", t.ui.projects, entries(t.projects.map((p) => ({ title: p.title, company: p.meta, bullets: p.bullets }))));
      case "education":
        return wrap("r-education", t.ui.education, t.education
          .map((e) => `<article class="r-item">
            <div class="r-item-head"><h4>${esc(e.degree)}</h4>${e.period ? `<span class="r-period">${esc(e.period)}</span>` : ""}</div>
            <p class="r-meta">${esc(e.school)}${e.grade ? ` · ${esc(e.grade)}` : ""}</p>
          </article>`)
          .join(""));
      default:
        return "";
    }
  }

  function fillSelects(t) {
    templateSelect.innerHTML = Object.keys(templates)
      .map((k) => `<option value="${k}">${esc(t.ui.templates[k])}</option>`)
      .join("");
    layoutSelect.innerHTML = layouts.map((k) => `<option value="${k}">${esc(t.ui.densities[k])}</option>`).join("");
    templateSelect.value = state.template;
    layoutSelect.value = state.layout;
  }

  function applyClasses() {
    root.className = `resume-shell tpl-${state.template}`;
    document.body.classList.remove(...layouts.map((l) => `print-${l}`));
    document.body.classList.add(`print-${state.layout}`);
  }

  function render() {
    const t = data[site.lang];
    const b = data.base;
    const cfg = templates[state.template];

    fillSelects(t);
    applyClasses();

    const identity = `<header class="r-identity">
      ${cfg.avatar ? `<img class="r-avatar" src="${esc(b.photo)}" alt="" />` : ""}
      <div><h1 class="r-name">${esc(b.name)}</h1><p class="r-role">${esc(t.role)}</p></div>
    </header>`;

    root.innerHTML = `<div class="r-layout">
      <aside class="r-side">${identity}${cfg.side.map((x) => block(x, t, b, true)).join("")}</aside>
      <div class="r-main">${cfg.main.map((x) => block(x, t, b, false)).join("")}</div>
    </div>`;
  }

  templateSelect.addEventListener("change", () => {
    state.template = templateSelect.value;
    store.set("resume-template", state.template);
    render();
  });

  layoutSelect.addEventListener("change", () => {
    state.layout = layoutSelect.value;
    store.set("resume-print-layout", state.layout);
    applyClasses();
  });

  printBtn.addEventListener("click", () => window.print());
  document.addEventListener("langchange", render);

  render();
})();
