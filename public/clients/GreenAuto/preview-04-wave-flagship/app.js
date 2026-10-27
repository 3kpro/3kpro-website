(function () {
  const gatData = window.GAT_DATA || {};
  const auditProducts = window.WAVE_AUDIT_PRODUCTS || [];
  const storeProducts = gatData.products || [];

  // Normalize all 25 WAVE/Tribo-MAX audited products + 18 store products into one unified 43-item catalog
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
      sourceUrl: ap.source_url || "",
      requiresFitment: (ap.recommended_category === "Custom Performance Mods"),
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
        sourceUrl: sp.url || "",
        requiresFitment: mappedCat === "Custom Performance Mods",
        options: sp.options || []
      };
    })
  ];

  let activeCategory = "all";
  let searchQuery = "";
  let cart = [];

  const catalogGrid = document.getElementById("catalogGrid");
  const categoryPills = document.getElementById("categoryPills");
  const searchInput = document.getElementById("catalogSearchInput");
  const cartCountEl = document.getElementById("cartCount");
  const modalBackdrop = document.getElementById("universalModal");
  const modalBody = document.getElementById("modalBodyContent");
  const closeModalBtn = document.getElementById("closeModalBtn");

  function openModal(html) {
    modalBody.innerHTML = html;
    modalBackdrop.classList.add("open");
  }

  function closeModal() {
    modalBackdrop.classList.remove("open");
    modalBody.innerHTML = "";
  }

  closeModalBtn.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  window.openLightbox = function (imgSrc, caption) {
    openModal(`
      <div class="section-eyebrow">HIGH-RESOLUTION LABORATORY &amp; TELEMETRY RECORD</div>
      <h3 class="result-story-title" style="font-size:1.5rem;margin-bottom:14px;">${caption}</h3>
      <div style="background:#05080a;border:1px solid var(--border);border-radius:8px;overflow:hidden;">
        <img src="${imgSrc}" alt="${caption}" style="width:100%;max-height:72vh;object-fit:contain;margin:0 auto;" />
      </div>
    `);
  };

  // Render Catalog
  function renderCatalog() {
    const filtered = unifiedCatalog.filter((item) => {
      const catMatch = activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const qMatch = !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q);
      return catMatch && qMatch;
    });

    catalogGrid.innerHTML = filtered.map((item) => `
      <article class="product-card">
        <div>
          <div class="product-img-wrap" style="cursor:pointer;" onclick="window.openProductDetail('${item.id}')">
            <img src="${item.image}" alt="${item.name.replace(/"/g, '&quot;')}" loading="lazy" />
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
            <button type="button" class="icon-btn" onclick="window.openProductDetail('${item.id}')">SPEC</button>
            <button type="button" class="btn-wave" style="padding:8px 14px;font-size:0.82rem;" onclick="window.addToCart('${item.id}')">+ ADD</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  window.openProductDetail = function (itemId) {
    const item = unifiedCatalog.find((x) => x.id === itemId);
    if (!item) return;

    const optionsHtml = item.options && item.options.length
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
           <input type="text" id="modalProdFitment" placeholder="e.g. 2014 Chevy Silverado 5.3L V8" />
         </div>`
      : "";

    openModal(`
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;align-items:start;">
        <div style="background:#05080a;border:1px solid var(--border);border-radius:8px;overflow:hidden;">
          <img src="${item.image}" alt="${item.name}" style="width:100%;max-height:360px;object-fit:contain;" />
        </div>
        <div>
          <div class="section-eyebrow">${item.id} · ${item.category}</div>
          <h3 class="result-story-title" style="font-size:1.65rem;margin-bottom:8px;">${item.name}</h3>
          <div class="product-price" style="font-size:1.85rem;margin-bottom:12px;">
            $${item.price.toFixed(2)}
            ${item.regularPrice ? `<del>$${item.regularPrice.toFixed(2)}</del>` : ""}
          </div>
          <p class="result-story-desc" style="margin-bottom:14px;line-height:1.65;">${item.description || item.summary}</p>
          <div style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:var(--wave-green);margin-bottom:12px;">
            FULFILLMENT: ${item.checkoutType}
          </div>
          ${optionsHtml}
          ${fitmentHtml}
          <div style="display:flex;gap:10px;margin-top:18px;">
            <button type="button" class="btn-wave" style="flex:1;" onclick="window.addToCart('${item.id}', true)">ADD TO ORDER ($${item.price.toFixed(2)}) →</button>
          </div>
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
    cartCountEl.textContent = String(cart.length);
    if (fromModal) closeModal();
  };

  document.getElementById("openCartBtn").addEventListener("click", () => {
    const total = cart.reduce((sum, x) => sum + x.price, 0);
    const itemsHtml = cart.length === 0
      ? `<p class="result-story-desc" style="padding:20px 0;">Your WAVE™ &amp; Tribo-MAX™ cart is currently empty. Click <strong>+ ADD</strong> on any product in the store.</p>`
      : cart.map((c, i) => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border);">
            <div>
              <strong>${c.name}</strong> <span style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:var(--muted);">(${c.id})</span>
              ${c.note ? `<div style="font-size:0.78rem;color:var(--wave-green);">${c.note}</div>` : ""}
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="font-family:'Rajdhani',sans-serif;font-weight:800;font-size:1.15rem;color:var(--wave-green);">$${c.price.toFixed(2)}</span>
              <button type="button" class="icon-btn" onclick="window.removeCartIdx(${i})">✕</button>
            </div>
          </div>
        `).join("");

    openModal(`
      <div class="section-eyebrow">GREEN AUTO TECHNOLOGY · ORDER SUMMARY</div>
      <h3 class="result-story-title" style="font-size:1.6rem;margin-bottom:12px;">YOUR SELECTED BUILD &amp; PRODUCTS (${cart.length})</h3>
      ${itemsHtml}
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:18px;padding-top:14px;border-top:2px solid var(--border);">
        <span style="font-family:'Rajdhani',sans-serif;font-weight:800;font-size:1.3rem;">ESTIMATED TOTAL (EARNS ${Math.round(total * 10)} GREEN MILES PTS):</span>
        <span style="font-family:'Rajdhani',sans-serif;font-weight:800;font-size:1.8rem;color:var(--wave-green);">$${total.toFixed(2)}</span>
      </div>
      <div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap;">
        <a href="#custom-modifications" onclick="document.getElementById('universalModal').classList.remove('open')" class="btn-wave" style="flex:1;">PROCEED TO CHECKOUT / FITMENT CONFIRMATION →</a>
      </div>
    `);
  });

  window.removeCartIdx = function (idx) {
    cart.splice(idx, 1);
    cartCountEl.textContent = String(cart.length);
    document.getElementById("openCartBtn").click();
  };

  categoryPills.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-pill");
    if (!btn) return;
    categoryPills.querySelectorAll(".cat-pill").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.getAttribute("data-cat");
    renderCatalog();
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value || "";
    renderCatalog();
  });

  // Render 6 YouTube Proof Videos
  const videos = gatData.videos || [];
  const videoContainer = document.getElementById("videoCardsContainer");
  if (videoContainer) {
    videoContainer.innerHTML = videos.map((v) => `
      <article class="result-story-card" onclick="window.openVideoModal('${v.youtubeId}', '${v.title.replace(/'/g, "\\'")}')">
        <div class="result-story-thumb">
          <img src="https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg" alt="${v.title}" loading="lazy" />
          <span class="play-overlay-pill">▶ PLAY VIDEO</span>
        </div>
        <div class="result-story-body">
          <div class="section-eyebrow" style="margin-bottom:4px;">${v.category || "VERIFIED PROOF"}</div>
          <h4 class="result-story-title" style="font-size:1.1rem;">${v.title}</h4>
          <p class="result-story-desc">${v.summary || ""}</p>
        </div>
      </article>
    `).join("");
  }

  window.openVideoModal = function (ytId, title) {
    openModal(`
      <div class="section-eyebrow">GREEN AUTO TECHNOLOGY · YOUTUBE PROOF VAULT</div>
      <h3 class="result-story-title" style="font-size:1.5rem;margin-bottom:14px;">${title}</h3>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;background:#000;">
        <iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" title="${title}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `);
  };

  // Render 8 Blog Articles
  const posts = gatData.blogPosts || [];
  const blogGrid = document.getElementById("blogArticlesGrid");
  if (blogGrid) {
    blogGrid.innerHTML = posts.map((post, idx) => `
      <article class="blog-card">
        <div>
          <div class="section-eyebrow">${post.date} · ${post.readTime || "3 min read"}</div>
          <h3 class="result-story-title" style="font-size:1.22rem;margin-bottom:8px;">${post.title}</h3>
          <p class="result-story-desc" style="margin-bottom:16px;">${post.excerpt}</p>
        </div>
        <button type="button" class="btn-outline" onclick="window.openBlogPost(${idx})">READ FULL ARTICLE &amp; Q&amp;A →</button>
      </article>
    `).join("");
  }

  window.openBlogPost = function (idx) {
    const post = posts[idx];
    if (!post) return;
    const paragraphs = (post.content || []).map((p) => `<p style="margin-bottom:12px;color:var(--text);line-height:1.7;">${p}</p>`).join("");
    const comments = (post.comments || []).map((c) => `
      <div style="background:var(--bg-alt);border:1px solid var(--border);padding:12px;border-radius:6px;margin-top:8px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.74rem;color:var(--wave-green);">${c.author} · ${c.date || ""}</div>
        <div style="font-size:0.9rem;margin-top:4px;">${c.text}</div>
      </div>
    `).join("");

    openModal(`
      <div class="section-eyebrow">${post.date} · BY ${post.author || "MICHAEL LEE"}</div>
      <h3 class="result-story-title" style="font-size:1.65rem;margin-bottom:16px;">${post.title}</h3>
      <div>${paragraphs}</div>
      ${comments ? `<h4 class="result-story-title" style="margin-top:20px;font-size:1.15rem;">READER COMMENTS &amp; MICHAEL LEE REPLIES</h4>${comments}` : ""}
    `);
  };

  // Science Tabs (3D Cutaway MP4 vs Butterfly Valve Vortex MP4 vs Dual View vs V-Groove Diagram)
  const sciTabs = document.querySelectorAll(".sci-tab");
  const paneCutaway = document.getElementById("sciCutawayPane");
  const paneVideo = document.getElementById("sciVideoPane");
  const paneDual = document.getElementById("sciDualPane");
  const paneDiagram = document.getElementById("sciDiagramPane");
  const cutawayVideo = document.getElementById("cutawayVideo");
  const vortexVideo = document.getElementById("waveVortexVideo");

  function setSciView(view) {
    sciTabs.forEach((t) => t.classList.toggle("active", t.getAttribute("data-sci-view") === view));
    if (paneCutaway) paneCutaway.style.display = view === "cutaway" ? "block" : "none";
    if (paneVideo) paneVideo.style.display = view === "video" ? "block" : "none";
    if (paneDual) paneDual.style.display = view === "dual" ? "block" : "none";
    if (paneDiagram) paneDiagram.style.display = view === "diagram" ? "block" : "none";
    if (view === "cutaway" && cutawayVideo) {
      cutawayVideo.play().catch(() => {});
    }
    if (view === "video" && vortexVideo) {
      vortexVideo.play().catch(() => {});
    }
  }

  sciTabs.forEach((tab) => {
    tab.addEventListener("click", () => setSciView(tab.getAttribute("data-sci-view")));
  });

  document.getElementById("toggleVideoViewBtn").addEventListener("click", () => {
    setSciView("dual");
  });

  document.getElementById("watchVortexBtn").addEventListener("click", () => {
    document.getElementById("technology").scrollIntoView({ behavior: "smooth" });
    setSciView("dual");
  });

  // Dark / Light WAVE Layout Switcher (switches between the left and right panels of Example of Layout.png)
  const themeBtn = document.getElementById("themeToggleBtn");
  const themeLabel = document.getElementById("themeToggleLabel");
  const heroImg = document.getElementById("heroBannerImg");
  const heroSubhead = document.getElementById("heroSubhead");

  themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");
    if (isLight) {
      themeLabel.textContent = "🌙 DARK LAYOUT";
      heroImg.src = "assets/hero-wave-light-truck.jpg";
      heroSubhead.textContent = "CLEANER ENGINES. STRONGER PERFORMANCE. A BRIGHTER TOMORROW.";
    } else {
      themeLabel.textContent = "☀️ LIGHT LAYOUT";
      heroImg.src = "assets/hero-wave-dark-car.jpg";
      heroSubhead.textContent = "A CLEANER, MORE EFFICIENT WAY TO POWER YOUR VEHICLE";
    }
  });

  // Fitment Form submission handler
  const fitForm = document.getElementById("fitmentRequestForm");
  const fitStatus = document.getElementById("fitmentStatusMsg");
  fitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const vehicle = document.getElementById("fitVehicle").value;
    const pkg = document.getElementById("fitPackage").value;
    fitStatus.style.display = "block";
    fitStatus.textContent = `✓ Fitment inquiry logged for ${vehicle} (${pkg}). Michael Lee responds within 24 hours at (507) 215-3817.`;
    fitForm.reset();
  });

  renderCatalog();
})();
