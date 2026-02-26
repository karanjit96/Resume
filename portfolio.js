(function () {
  const state = {
    lang: localStorage.getItem("portfolio-lang") || "en"
  };

  const data = window.resumeData;
  const yearEl = document.getElementById("year");
  const expCards = document.getElementById("experienceCards");
  const projectCards = document.getElementById("projectCards");
  const galleryGrid = document.getElementById("galleryGrid");
  const tileModal = document.getElementById("tileModal");
  const tileModalClose = document.getElementById("tileModalClose");
  const tileModalCloseBtn = document.getElementById("tileModalCloseBtn");
  const tileModalImage = document.getElementById("tileModalImage");
  const tileModalTitle = document.getElementById("tileModalTitle");
  const tileModalMeta = document.getElementById("tileModalMeta");
  const tileModalList = document.getElementById("tileModalList");

  function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function mergedData() {
    return deepClone(data);
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem("portfolio-lang", lang);
    document.querySelectorAll(".chip").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    render();
  }

  function card(item) {
    const meta = item.meta || `${item.company} | ${item.period}`;
    const imageSrc = item.image || "";
    return `<article class="card card-tile">
      <button class="tile-toggle" type="button" data-title="${item.title.replace(/"/g, "&quot;")}" data-meta="${meta.replace(/"/g, "&quot;")}" data-image="${imageSrc.replace(/"/g, "&quot;")}" data-bullets="${item.bullets.map((b) => b.replace(/\|/g, "/")).join("|")}">
        <div class="tile-head">
          <h3>${item.title}</h3>
          <p class="meta">${meta}</p>
        </div>
        <span class="tile-plus" aria-hidden="true">+</span>
      </button>
    </article>`;
  }

  function bindTileToggles() {
    document.querySelectorAll(".tile-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const bullets = (btn.dataset.bullets || "").split("|").filter(Boolean);
        tileModalTitle.textContent = btn.dataset.title || "";
        tileModalMeta.textContent = btn.dataset.meta || "";
        if (btn.dataset.image) {
          tileModalImage.removeAttribute("hidden");
          tileModalImage.src = btn.dataset.image;
          tileModalImage.alt = btn.dataset.title || "Details";
        } else {
          tileModalImage.setAttribute("hidden", "hidden");
          tileModalImage.removeAttribute("src");
        }
        tileModalList.innerHTML = bullets.map((b) => `<li>${b}</li>`).join("");
        tileModal.removeAttribute("hidden");
      });
    });
  }

  function bindModalClose() {
    const close = () => tileModal.setAttribute("hidden", "hidden");
    tileModalClose.addEventListener("click", close);
    tileModalCloseBtn.addEventListener("click", close);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  function bindAnchorScroll() {
    document.querySelectorAll(".top-nav a[href^='#']").forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function photoCard(item) {
    return `<figure class="photo"><img src="${item.src}" alt="${item.caption}" loading="lazy" onerror="this.onerror=null;this.src='New1.jpg';" /><p>${item.caption}</p></figure>`;
  }

  function render() {
    const merged = mergedData();
    const t = merged[state.lang];

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (t.ui[key]) node.textContent = t.ui[key];
    });

    const heroTitle = document.querySelector("[data-i18n='heroTitle']");
    if (heroTitle) heroTitle.textContent = merged.base.name;

    const eyebrow = document.querySelector("[data-i18n='eyebrow']");
    if (eyebrow) eyebrow.textContent = merged.base.role;

    const heroText = document.querySelector("[data-i18n='heroText']");
    if (heroText) heroText.textContent = t.summary;

    expCards.innerHTML = t.experience.map((item) => card(item)).join("");
    projectCards.innerHTML = t.projects.map((item) => card(item)).join("");

    const photos = [...merged.base.gallery];
    galleryGrid.innerHTML = photos.map(photoCard).join("");
    yearEl.textContent = new Date().getFullYear();
    bindTileToggles();
  }

  document.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  bindAnchorScroll();
  bindModalClose();
  window.addEventListener("storage", render);
  setLang(state.lang);
})();
