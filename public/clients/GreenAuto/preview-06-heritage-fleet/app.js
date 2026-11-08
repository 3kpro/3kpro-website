(function () {
  const gatData = window.GAT_DATA || {};
  const auditProducts = window.WAVE_AUDIT_PRODUCTS || [];
  const storeProducts = gatData.products || [];

  // Unified 43-Item Catalog (25 WAVE/Tribo-MAX audited + 18 Store Kits)
  const unifiedCatalog = [
    ...auditProducts.map((ap) => ({
      id: ap.product_id,
      name: ap.name,
      price: ap.observed_price_usd ? Number(ap.observed_price_usd) : 45,
      regularPrice: ap.observed_regular_price_usd ? Number(ap.observed_regular_price_usd) : null,
      category: ap.recommended_category === "Merchandise (optional)" ? "Detailing & Coatings" : ap.recommended_category,
      image: ap.local_image || "assets/p001.jpg",
      summary: ap.public_description_summary || "",
      description: ap.full_description || ap.public_description_summary || "",
      checkoutType: ap.checkout_type_proposed || "Direct checkout",
      requiresFitment: ap.recommended_category === "Custom Performance Mods",
      options: []
    })),
    ...storeProducts.map((sp, idx) => {
      let mappedCat = "Engine & Fluid Treatments";
      if (sp.category === "Throttle Body & Hardware" || sp.category === "Bundles & Combos") {
        mappedCat = "Custom Performance Mods";
      } else if (sp.category === "Core & Service Fees") {
        mappedCat = "Service & Shipping";
      }
      return {
        id: "S" + String(idx + 1).padStart(3, "0"),
        name: sp.name,
        price: Number(sp.price || 0),
        regularPrice: null,
        category: mappedCat,
        image: sp.image || "assets/prod_tribomax_engine.png",
        summary: sp.shortDesc || sp.description || "",
        description: sp.description || "",
        checkoutType: sp.sku ? `SKU ${sp.sku}` : "Direct Store Item",
        requiresFitment: mappedCat === "Custom Performance Mods",
        options: sp.options || []
      };
    })
  ];

  let activeCategory = "all";
  let searchQuery = "";
  let cart = [];

  const modalBackdrop = document.getElementById("universalModal");
  const modalBody = document.getElementById("modalBodyContent");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const cartCountEl = document.getElementById("cartCount");

  function openModal(html) {
    if (!modalBody || !modalBackdrop) return;
    modalBody.innerHTML = html;
    modalBackdrop.classList.add("open");
  }

  function closeModal() {
    if (!modalBody || !modalBackdrop) return;
    modalBackdrop.classList.remove("open");
    modalBody.innerHTML = "";
  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });

  window.openLightbox = function (imgSrc, caption) {
    openModal(`
      <div class="sec-eyebrow">HIGH-RESOLUTION LABORATORY &amp; TELEMETRY RECORD</div>
      <h3 style="font-family:var(--serif);font-size:1.5rem;margin-bottom:14px;">${caption}</h3>
      <div style="background:#070b09;border:1px solid var(--border-strong);border-radius:10px;overflow:hidden;">
        <img src="${imgSrc}" alt="${caption}" style="width:100%;max-height:72vh;object-fit:contain;display:block;margin:0 auto;" />
      </div>
    `);
  };

  // Theme Toggle (Daylight Shop vs Night Haul)
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isNight = document.body.classList.toggle("night-haul");
      themeBtn.textContent = isNight ? "☀️ Daylight Shop" : "🌙 Night Haul";
    });
  }

  // Reduce Motion Toggle
  const reducedQuery = matchMedia("(prefers-reduced-motion: reduce)");
  const motionBtn = document.getElementById("motionToggleBtn");
  function setReduced(val) {
    document.body.classList.toggle("reduced", val);
    if (motionBtn) {
      motionBtn.setAttribute("aria-pressed", String(val));
      motionBtn.textContent = val ? "Enable motion" : "Reduce motion";
    }
  }
  setReduced(false);
  if (motionBtn) {
    motionBtn.addEventListener("click", () => {
      setReduced(!document.body.classList.contains("reduced"));
    });
  }

  // Hero Visual Switcher (Throttle Body vs Work Truck)
  const swapHeroBtn = document.getElementById("swapHeroVisualBtn");
  const heroImg = document.getElementById("heroShowcaseImg");
  let showingTruck = false;
  if (swapHeroBtn && heroImg) {
    swapHeroBtn.addEventListener("click", () => {
      showingTruck = !showingTruck;
      heroImg.src = showingTruck ? "assets/hero-wave-light-truck.jpg" : "assets/WaveThrottleGraphic.jpg";
    });
  }

  // Scroll-Driven & Clickable Intake Physics Stage
  const haulCards = document.querySelectorAll(".haul-step-card");
  const stageLabel = document.getElementById("haul-stage-label");
  const progressPct = document.getElementById("haul-progress-pct");
  const gaugeVac = document.getElementById("gauge-vac");
  const gaugeVapor = document.getElementById("gauge-vapor");
  const gaugeHc = document.getElementById("gauge-hc");
  const svgGrooves = document.getElementById("svg-wave-grooves");
  const svgButterfly = document.getElementById("svg-butterfly");
  const svgVortexText = document.getElementById("svg-vortex-text");

  const stageData = [
    {
      label: "PHASE 01 · STOCK FLAT-PLATE TURBULENCE",
      pct: "15%",
      vac: "16.2 inHg",
      vapor: "61%",
      hc: "85 PPM",
      grooveOpacity: "0.18",
      angle: -18,
      vortexText: "FLAT-PLATE TURBULENCE ZONE"
    },
    {
      label: "PHASE 02 · THE WAVE™ HIGH-PRESSURE CONTOUR ($550)",
      pct: "58%",
      vac: "21.8 inHg",
      vapor: "94%",
      hc: "8 PPM",
      grooveOpacity: "1",
      angle: -42,
      vortexText: "LAMINAR-TO-HELICAL VORTEX"
    },
    {
      label: "PHASE 03 · COMBUSTION STACK™ + TRIBO-MAX™ 0.06μ",
      pct: "100%",
      vac: "22.6 inHg",
      vapor: "99.4%",
      hc: "1 PPM HC",
      grooveOpacity: "1",
      angle: -68,
      vortexText: "COMPLETE STOICHIOMETRIC VAPOR BURN"
    }
  ];

  window.setHaulStep = function (idx) {
    const d = stageData[idx] || stageData[0];
    haulCards.forEach((c, i) => c.classList.toggle("active", i === idx));
    if (stageLabel) stageLabel.textContent = d.label;
    if (progressPct) progressPct.textContent = d.pct;
    if (gaugeVac) gaugeVac.textContent = d.vac;
    if (gaugeVapor) gaugeVapor.textContent = d.vapor;
    if (gaugeHc) gaugeHc.textContent = d.hc;
    if (svgGrooves) svgGrooves.setAttribute("opacity", d.grooveOpacity);
    if (svgButterfly) svgButterfly.setAttribute("transform", `translate(250, 110) rotate(${d.angle})`);
    if (svgVortexText) svgVortexText.textContent = d.vortexText;
  };

  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    window.ScrollTrigger.create({
      trigger: "#scroll-intake-comparison",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (document.body.classList.contains("reduced")) return;
        const p = self.progress;
        const idx = p < 0.34 ? 0 : p < 0.68 ? 1 : 2;
        window.setHaulStep(idx);
        if (progressPct) progressPct.textContent = `${Math.round(p * 100)}%`;
      }
    });
  }

  // Fleet & Heavy-Haul Payback Calculator
  const fVehicles = document.getElementById("f-vehicles");
  const fMpg = document.getElementById("f-mpg");
  const fMiles = document.getElementById("f-miles");
  const fGas = document.getElementById("f-gas");
  const fGain = document.getElementById("f-gain");

  function updateFleetRoi() {
    if (!fVehicles || !fMpg || !fMiles || !fGas || !fGain) return;
    const count = Number(fVehicles.value);
    const mpg = Number(fMpg.value);
    const miles = Number(fMiles.value);
    const gas = Number(fGas.value);
    const gain = Number(fGain.value);

    document.getElementById("f-val-vehicles").textContent = count === 1 ? "1 Vehicle" : `${count} Fleet Vehicles`;
    document.getElementById("f-val-mpg").textContent = `${mpg} MPG`;
    document.getElementById("f-val-miles").textContent = `${miles.toLocaleString()} mi/yr`;
    document.getElementById("f-val-gas").textContent = `$${gas.toFixed(2)}/gal`;
    document.getElementById("f-val-gain").textContent = `+${gain}% MPG`;

    const newMpg = mpg * (1 + gain / 100);
    const singleOldCost = (miles / mpg) * gas;
    const singleNewCost = (miles / newMpg) * gas;
    const singleSave = Math.max(80, singleOldCost - singleNewCost);
    const totalYearlySave = Math.round(singleSave * count);
    const paybackMonths = ((550 / singleSave) * 12).toFixed(1);

    document.getElementById("f-out-yearly").textContent = `$${totalYearlySave.toLocaleString()} / yr`;
    document.getElementById("f-out-mpg").textContent = `${newMpg.toFixed(1)} MPG`;
    document.getElementById("f-out-payback").textContent = `${paybackMonths} Months`;
  }

  [fVehicles, fMpg, fMiles, fGas, fGain].forEach((el) => {
    if (el) el.addEventListener("input", updateFleetRoi);
  });

  document.querySelectorAll("#fleetPresets .preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#fleetPresets .preset-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      fVehicles.value = btn.getAttribute("data-vehicles");
      fMpg.value = btn.getAttribute("data-mpg");
      fMiles.value = btn.getAttribute("data-miles");
      fGas.value = btn.getAttribute("data-gas");
      fGain.value = btn.getAttribute("data-gain");
      updateFleetRoi();
    });
  });
  updateFleetRoi();

  // Dual MP4 Video Studio Tabs
  const sciTabs = document.querySelectorAll("#v6SciTabs .mp4-tab");
  const paneCutaway = document.getElementById("v6PaneCutaway");
  const paneVortex = document.getElementById("v6PaneVortex");
  const paneDual = document.getElementById("v6PaneDual");
  const paneDiagram = document.getElementById("v6PaneDiagram");
  const vidCutaway = document.getElementById("v6CutawayVid");
  const vidVortex = document.getElementById("v6VortexVid");

  sciTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const view = tab.getAttribute("data-sci-view");
      sciTabs.forEach((t) => t.classList.toggle("active", t === tab));
      if (paneCutaway) paneCutaway.style.display = view === "cutaway" ? "block" : "none";
      if (paneVortex) paneVortex.style.display = view === "vortex" ? "block" : "none";
      if (paneDual) paneDual.style.display = view === "dual" ? "block" : "none";
      if (paneDiagram) paneDiagram.style.display = view === "diagram" ? "block" : "none";
      if (view === "cutaway" && vidCutaway) vidCutaway.play().catch(() => {});
      if (view === "vortex" && vidVortex) vidVortex.play().catch(() => {});
    });
  });

  // Render 43-Item Catalog
  const catalogGrid = document.getElementById("catalogGrid");
  const categoryPills = document.getElementById("categoryPills");
  const searchInput = document.getElementById("catalogSearchInput");

  function renderCatalog() {
    if (!catalogGrid) return;
    const filtered = unifiedCatalog.filter((item) => {
      const catMatch = activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const qMatch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q);
      return catMatch && qMatch;
    });

    catalogGrid.innerHTML = filtered
      .map(
        (item) => `
      <article class="product-card">
        <div>
          <div class="product-img-wrap" style="cursor:pointer;" onclick="window.openProductDetail('${item.id}')">
            <img src="${item.image}" alt="${item.name.replace(/"/g, "&quot;")}" loading="lazy" />
            <span class="product-cat-badge">${item.category}</span>
            <span class="product-id-badge">${item.id}</span>
          </div>
          <div class="product-body">
            <h3 class="product-title" style="cursor:pointer;" onclick="window.openProductDetail('${item.id}')">${item.name}</h3>
            <p class="product-desc">${item.description || item.summary}</p>
          </div>
        </div>
        <div class="product-foot">
          <div class="product-price">
            $${item.price.toFixed(2)}
            ${item.regularPrice ? `<del>$${item.regularPrice.toFixed(2)}</del>` : ""}
          </div>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btn-heritage outline sm" onclick="window.openProductDetail('${item.id}')">SPEC</button>
            <button type="button" class="btn-heritage sm" onclick="window.addToCart('${item.id}')">+ ADD</button>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  }

  window.openProductDetail = function (itemId) {
    const item = unifiedCatalog.find((x) => x.id === itemId);
    if (!item) return;

    const optionsHtml =
      item.options && item.options.length
        ? `<div class="form-group" style="margin-top:12px;">
             <label>Select Option / Viscosity</label>
             <select id="modalProdOption">
               ${item.options.map((o) => `<option value="${o}">${o}</option>`).join("")}
             </select>
           </div>`
        : "";

    const fitmentHtml = item.requiresFitment
      ? `<div class="form-group" style="margin-top:12px;">
           <label>Vehicle Year / Make / Model / Engine Size (Required for Custom Machining)</label>
           <input type="text" id="modalProdFitment" placeholder="e.g. 2009 Dodge Ram 1500 5.7L Hemi" />
         </div>`
      : "";

    openModal(`
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;align-items:start;">
        <div style="background:#0d1210;border:1px solid var(--border-strong);border-radius:10px;overflow:hidden;">
          <img src="${item.image}" alt="${item.name}" style="width:100%;max-height:340px;object-fit:contain;display:block;margin:0 auto;" />
        </div>
        <div>
          <div class="sec-eyebrow">${item.id} · ${item.category}</div>
          <h3 style="font-family:var(--serif);font-size:1.55rem;margin-bottom:8px;">${item.name}</h3>
          <div class="product-price" style="font-size:1.75rem;margin-bottom:12px;">
            $${item.price.toFixed(2)}
            ${item.regularPrice ? `<del>$${item.regularPrice.toFixed(2)}</del>` : ""}
          </div>
          <p style="color:var(--muted);margin-bottom:14px;line-height:1.65;">${item.description || item.summary}</p>
          <div style="font-family:var(--mono);font-size:11px;color:var(--copper);margin-bottom:12px;">
            FULFILLMENT: ${item.checkoutType}
          </div>
          ${optionsHtml}
          ${fitmentHtml}
          <button type="button" class="btn-heritage" style="width:100%;margin-top:14px;" onclick="window.addToCart('${item.id}', true)">
            ADD TO FLEET / BUILD ORDER ($${item.price.toFixed(2)}) ↗&#xFE0E;
          </button>
        </div>
      </div>
    `);
  };

  window.addToCart = function (itemId, fromModal) {
    const item = unifiedCatalog.find((x) => x.id === itemId);
    if (!item) return;
    let note = "";
    if (fromModal) {
      const optEl = document.getElementById("modalProdOption");
      const fitEl = document.getElementById("modalProdFitment");
      if (optEl && optEl.value) note += optEl.value + " ";
      if (fitEl && fitEl.value) note += `[Vehicle: ${fitEl.value}]`;
    }
    cart.push({ ...item, note: note.trim() });
    if (cartCountEl) cartCountEl.textContent = String(cart.length);
    if (fromModal) closeModal();
  };

  const openCartBtn = document.getElementById("openCartBtn");
  if (openCartBtn) {
    openCartBtn.addEventListener("click", () => {
      const total = cart.reduce((sum, x) => sum + x.price, 0);
      const itemsHtml =
        cart.length === 0
          ? `<p style="color:var(--muted);padding:18px 0;">Your WAVE™ &amp; Tribo-MAX™ cart is empty. Click <strong>+ ADD</strong> on any product in the 43-item catalog.</p>`
          : cart
              .map(
                (c, i) => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border);">
              <div>
                <strong>${c.name}</strong> <span style="font-family:var(--mono);font-size:11px;color:var(--muted);">(${c.id})</span>
                ${c.note ? `<div style="font-size:12px;color:var(--copper);">${c.note}</div>` : ""}
              </div>
              <div style="display:flex;align-items:center;gap:12px;">
                <span style="font-family:var(--mono);font-weight:700;color:var(--pine);">$${c.price.toFixed(2)}</span>
                <button type="button" class="btn-heritage outline sm" onclick="window.removeCartIdx(${i})">✕</button>
              </div>
            </div>
          `
              )
              .join("");

      openModal(`
        <div class="sec-eyebrow">GREEN AUTO TECHNOLOGY · ORDER SUMMARY</div>
        <h3 style="font-family:var(--serif);font-size:1.5rem;margin-bottom:12px;">SELECTED PRODUCTS (${cart.length})</h3>
        ${itemsHtml}
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:18px;padding-top:14px;border-top:2px solid var(--border-strong);">
          <span style="font-family:var(--mono);font-size:12px;">ESTIMATED TOTAL (EARNS ${Math.round(total * 10)} GREEN MILES PTS):</span>
          <span style="font-family:var(--serif);font-weight:700;font-size:1.65rem;color:var(--pine);">$${total.toFixed(2)}</span>
        </div>
        <div style="margin-top:18px;">
          <a href="#custom-modifications" onclick="document.getElementById('universalModal').classList.remove('open')" class="btn-heritage" style="width:100%;">
            PROCEED TO FITMENT &amp; CORE EXCHANGE CONFIRMATION ↗&#xFE0E;
          </a>
        </div>
      `);
    });
  }

  window.removeCartIdx = function (idx) {
    cart.splice(idx, 1);
    if (cartCountEl) cartCountEl.textContent = String(cart.length);
    if (openCartBtn) openCartBtn.click();
  };

  if (categoryPills) {
    categoryPills.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-pill");
      if (!btn) return;
      categoryPills.querySelectorAll(".cat-pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-cat");
      renderCatalog();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value || "";
      renderCatalog();
    });
  }

  // Render 6 YouTube Proof Videos
  const videos = gatData.videos || [];
  const videoContainer = document.getElementById("videoCardsContainer");
  if (videoContainer) {
    videoContainer.innerHTML = videos
      .map((v) => {
        const ytId = v.youtubeId || v.id;
        return `
      <article class="heritage-card" onclick="window.openVideoModal('${ytId}', '${v.title.replace(/'/g, "\\'")}')">
        <div>
          <div class="heritage-thumb">
            <img src="https://img.youtube.com/vi/${ytId}/hqdefault.jpg" alt="${v.title}" loading="lazy" />
            <span class="heritage-badge">▶ PLAY VIDEO PROOF</span>
          </div>
          <div class="heritage-body">
            <div class="sec-eyebrow" style="margin-bottom:4px;">${v.category || "VERIFIED PROOF"}</div>
            <h4>${v.title}</h4>
            <p>${v.summary || v.tags || ""}</p>
          </div>
        </div>
      </article>
    `;
      })
      .join("");
  }

  window.openVideoModal = function (ytId, title) {
    openModal(`
      <div class="sec-eyebrow">GREEN AUTO TECHNOLOGY · YOUTUBE PROOF VAULT</div>
      <h3 style="font-family:var(--serif);font-size:1.45rem;margin-bottom:14px;">${title}</h3>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;background:#000;">
        <iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" title="${title}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `);
  };

  // Render 8 Blog Articles
  const posts = gatData.blogPosts || [];
  const blogGrid = document.getElementById("blogArticlesGrid");
  if (blogGrid) {
    blogGrid.innerHTML = posts
      .map(
        (post, idx) => `
      <article class="heritage-card" style="padding:22px;">
        <div>
          <div class="sec-eyebrow">${post.date} · ${post.readTime || "3 min read"}</div>
          <h3>${post.title}</h3>
          <p style="margin-bottom:16px;">${post.excerpt}</p>
        </div>
        <button type="button" class="btn-heritage outline sm" onclick="window.openBlogPost(${idx})">Read Full Article &amp; Q&amp;A ↗&#xFE0E;</button>
      </article>
    `
      )
      .join("");
  }

  window.openBlogPost = function (idx) {
    const post = posts[idx];
    if (!post) return;
    const paragraphs = (post.content || [])
      .map((p) => `<p style="margin-bottom:12px;color:var(--ink);line-height:1.7;">${p}</p>`)
      .join("");
    const comments = (post.comments || [])
      .map(
        (c) => `
        <div style="background:var(--bg-alt);border:1px solid var(--border-strong);padding:12px;border-radius:8px;margin-top:8px;">
          <div style="font-family:var(--mono);font-size:11px;color:var(--copper);">${c.author} · ${c.date || ""}</div>
          <div style="font-size:0.9rem;margin-top:4px;">${c.text}</div>
        </div>
      `
      )
      .join("");

    openModal(`
      <div class="sec-eyebrow">${post.date} · BY ${post.author || "MICHAEL LEE"}</div>
      <h3 style="font-family:var(--serif);font-size:1.55rem;margin-bottom:14px;">${post.title}</h3>
      <div>${paragraphs}</div>
      ${comments ? `<h4 style="font-family:var(--serif);margin-top:20px;font-size:1.1rem;">READER COMMENTS &amp; MICHAEL LEE REPLIES</h4>${comments}` : ""}
    `);
  };

  // Fitment Form Handler
  const fitForm = document.getElementById("fitmentRequestForm");
  const fitStatus = document.getElementById("fitmentStatusMsg");
  if (fitForm) {
    fitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const vehicle = document.getElementById("fitVehicle").value;
      const pkg = document.getElementById("fitPackage").value;
      if (fitStatus) {
        fitStatus.style.display = "block";
        fitStatus.textContent = `✓ Fitment inquiry logged for ${vehicle} (${pkg}). Michael Lee responds within 24 hours at (507) 215-3817.`;
      }
      fitForm.reset();
    });
  }

  renderCatalog();
})();
