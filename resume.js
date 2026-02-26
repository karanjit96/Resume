(function () {
  const data = window.resumeData;
  const root = document.getElementById("resumeRoot");
  const langSelect = document.getElementById("resumeLang");
  const templateSelect = document.getElementById("resumeTemplate");
  const printLayoutSelect = document.getElementById("printLayout");
  const downloadPdfBtn = document.getElementById("downloadPdfBtn");

  const state = {
    lang: localStorage.getItem("resume-lang") || "en",
    template: localStorage.getItem("resume-template") || "modern",
    printLayout: localStorage.getItem("resume-print-layout") || "standard"
  };

  const templateConfig = {
    modern: {
      sideBlocks: ["profile", "contact", "skills", "languages", "personal"],
      mainBlocks: ["experience", "projects", "education"],
      showAvatar: true
    },
    classic: {
      sideBlocks: ["contact", "skills", "languages"],
      mainBlocks: ["profile", "experience", "education", "projects"],
      showAvatar: true
    },
    compact: {
      sideBlocks: ["contact", "skills"],
      mainBlocks: ["profile", "experience", "projects", "education"],
      showAvatar: true
    },
    minimal: {
      sideBlocks: ["contact", "languages"],
      mainBlocks: ["profile", "experience", "education", "projects"],
      showAvatar: true
    },
    executive: {
      sideBlocks: ["profile", "contact", "skills", "languages"],
      mainBlocks: ["experience", "projects", "education"],
      showAvatar: true
    },
    ats: {
      sideBlocks: ["contact", "skills", "languages"],
      mainBlocks: ["profile", "experience", "education"],
      showAvatar: false
    }
  };

  function list(items) {
    return `<ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  }

  function experience(items) {
    return items.map((item) => {
      const place = item.place ? `, ${item.place}` : "";
      const period = item.period ? ` | ${item.period}` : "";
      return `<article class="resume-item"><h4>${item.title}</h4><p class="meta">${item.company}${place}${period}</p>${list(item.bullets)}</article>`;
    }).join("");
  }

  function sideBlock(type, t, b) {
    if (type === "contact") {
      return `<div class="resume-block contact-block">
        <h3>Contact</h3>
        <p>${b.contact.phone}<br/>${b.contact.email}</p>
        <p>${b.contact.address.join("<br/>")}</p>
        <p>${b.links.map((x) => `<a href="${x.href}" target="_blank">${x.label}</a>`).join("<br/>")}</p>
      </div>`;
    }

    if (type === "skills") {
      return `<div class="resume-block skills-block"><h3>${t.ui.skills}</h3>${list(t.skills)}</div>`;
    }

    if (type === "languages") {
      return `<div class="resume-block languages-block"><h3>${t.ui.languages}</h3>${list(t.languages)}</div>`;
    }

    if (type === "personal") {
      return `<div class="resume-block personal-block"><h3>${t.ui.personal}</h3>${list(t.personal)}</div>`;
    }

    if (type === "profile") {
      return `<div class="resume-block profile-block"><h3>${t.ui.profile}</h3><p>${t.summary}</p></div>`;
    }

    return "";
  }

  function mainBlock(type, t) {
    if (type === "profile") {
      return `<section class="resume-block profile-block"><h2>${t.ui.profile}</h2><p>${t.summary}</p></section>`;
    }

    if (type === "experience") {
      return `<section class="resume-block exp-block"><h2>${t.ui.experience}</h2>${experience(t.experience)}</section>`;
    }

    if (type === "projects") {
      const mapped = t.projects.map((p) => ({
        title: p.title,
        company: p.meta,
        place: "",
        period: "",
        bullets: p.bullets
      }));
      return `<section class="resume-block projects-block"><h2>Projects</h2>${experience(mapped)}</section>`;
    }

    if (type === "education") {
      return `<section class="resume-block education-block"><h2>${t.ui.education}</h2>${list(t.education)}</section>`;
    }

    return "";
  }

  function render() {
    const t = data[state.lang];
    const b = data.base;
    const cfg = templateConfig[state.template] || templateConfig.modern;

    const identity = `
      <div class="resume-identity">
        ${cfg.showAvatar ? `<img src="${b.photo}" alt="${b.name}" class="resume-avatar" />` : ""}
        <div>
          <h1 class="resume-name">${b.name}</h1>
          <p class="resume-role">${b.role}</p>
        </div>
      </div>`;

    const sideHtml = cfg.sideBlocks.map((x) => sideBlock(x, t, b)).join("");
    const mainHtml = cfg.mainBlocks.map((x) => mainBlock(x, t)).join("");

    root.innerHTML = `
      <section class="resume-layout">
        <aside class="resume-side">
          ${identity}
          ${sideHtml}
        </aside>

        <article class="resume-main">
          ${mainHtml}
        </article>
      </section>`;
  }

  function applyTemplate(value) {
    document.body.classList.remove("theme-modern", "theme-classic", "theme-compact", "theme-minimal", "theme-executive", "theme-ats");
    document.body.classList.add(`theme-${value}`);
  }

  function applyPrintLayout(value) {
    document.body.classList.remove("print-layout-standard", "print-layout-balanced", "print-layout-dense");
    document.body.classList.add(`print-layout-${value}`);
  }

  langSelect.value = state.lang;
  templateSelect.value = state.template;
  printLayoutSelect.value = state.printLayout;

  langSelect.addEventListener("change", () => {
    state.lang = langSelect.value;
    localStorage.setItem("resume-lang", state.lang);
    render();
  });

  templateSelect.addEventListener("change", () => {
    state.template = templateSelect.value;
    localStorage.setItem("resume-template", state.template);
    applyTemplate(state.template);
    render();
  });

  printLayoutSelect.addEventListener("change", () => {
    state.printLayout = printLayoutSelect.value;
    localStorage.setItem("resume-print-layout", state.printLayout);
    applyPrintLayout(state.printLayout);
  });

  downloadPdfBtn.addEventListener("click", () => {
    applyPrintLayout(state.printLayout);
    window.print();
  });

  applyTemplate(state.template);
  applyPrintLayout(state.printLayout);
  render();
})();
