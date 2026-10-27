(function () {
  const DATA = window.GAT_DATA;
  if (!DATA) return;

  /* 1. BOOT SEQUENCE (3KPRO.SERVICES INSPIRED ECU BOOT) */
  const BOOT_LINES = [
    ['dim', 'GAT·OS // DYNO & COMBUSTION TELEMETRY BIOS v2026.10'],
    ['', 'initializing intake-vacuum & tribology console .....'],
    ['ok', '[ OK ]  STAGE 01: THE WAVE™ CNC VORTEX MACHINING ...... ONLINE'],
    ['ok', '[ OK ]  STAGE 02: THE CYCLONE™ HELICAL CHARGE ......... ONLINE'],
    ['ok', '[ OK ]  STAGE 03: MIRROR PORT & POLISH BORE ........... ONLINE'],
    ['ok', '[ OK ]  TRIBO-MAX™ BORON CERAMIC (0.06 COEFF) ......... ARMED'],
    ['amb', '[ !! ]  UNBURNED FUEL & INTERNAL FRICTION ............. ELIMINATED'],
    ['ok', '[ OK ]  MAGNUSON-MOSS WARRANTY PROTECTION ............. VERIFIED'],
    ['', '10,000+ custom builds // 38% avg MPG gain // 24h response'],
    ['amb', 'launching GAT·OS MISSION CONTROL ▸▸▸']
  ];

  const introEl = document.getElementById('boot-intro');
  const termBody = document.getElementById('boot-lines');
  const skipBtn = document.getElementById('boot-skip');
  let bootDone = false;

  function finishBoot() {
    if (bootDone) return;
    bootDone = true;
    try { sessionStorage.setItem('gat-os-boot-seen', '1'); } catch (e) {}
    if (introEl) introEl.classList.add('gone');
  }

  if (skipBtn) skipBtn.addEventListener('click', finishBoot);

  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let seen = false;
  try { seen = sessionStorage.getItem('gat-os-boot-seen') === '1'; } catch (e) {}

  if (seen || reducedMotion) {
    finishBoot();
  } else if (termBody) {
    let idx = 0;
    function nextLine() {
      if (bootDone || idx >= BOOT_LINES.length) {
        setTimeout(finishBoot, 420);
        return;
      }
      const [cls, text] = BOOT_LINES[idx++];
      const div = document.createElement('div');
      if (cls) div.className = cls;
      div.textContent = text;
      termBody.insertBefore(div, termBody.querySelector('.cursor'));
      setTimeout(nextLine, 150);
    }
    nextLine();
    setTimeout(finishBoot, 3600);
  }

  /* 2. LIVE EASTERN CLOCK */
  const clockEl = document.getElementById('live-clock');
  function updateClock() {
    if (!clockEl) return;
    try {
      clockEl.textContent = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false, timeZone: 'America/New_York'
      }).format(new Date());
    } catch (e) {
      clockEl.textContent = new Date().toLocaleTimeString();
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* 3. ANIMATED COUNTERS */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const target = parseFloat(el.getAttribute('data-count') || '0');
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        const dur = 1200;
        const t0 = performance.now();
        function step(now) {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => io.observe(c));
  }

  /* 4. RENDER 17 PRODUCTS + FILTER & SEARCH */
  const prodGrid = document.getElementById('catalog-grid');
  const searchInput = document.getElementById('catalog-search');
  const filterBtns = document.querySelectorAll('[data-filter]');
  let activeCategory = 'all';
  let searchQuery = '';

  function renderProducts() {
    if (!prodGrid) return;
    const filtered = DATA.products.filter((p) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchQ = !q || p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q) || p.badge.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    prodGrid.innerHTML = filtered.map((p) => `
      <article class="prod-card" data-id="${p.id}">
        <div class="prod-thumb" onclick="window.openProductModal('${p.id}')" style="cursor:pointer">
          <span class="prod-badge">${p.badge}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="prod-cat-tag">${p.categoryLabel}</span>
        </div>
        <div class="prod-content">
          <h3>${p.name}</h3>
          <p>${p.shortDesc}</p>
          <div class="prod-price-row">
            <div class="prod-price">
              ${p.regularPrice ? `<del>$${p.regularPrice.toFixed(2)}</del>` : ''}
              $${p.price.toLocaleString()}.00
            </div>
            <span class="prod-ship">${p.shippingPromo}</span>
          </div>
          <div class="prod-actions">
            <button type="button" class="btn sm" onclick="window.selectProductForInquiry('${p.name.replace(/'/g, "\\'")} ($${p.price})')">Inquire / Order ↗</button>
            <button type="button" class="btn ghost sm" onclick="window.openProductModal('${p.id}')">Specs</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value || '';
      renderProducts();
    });
  }

  renderProducts();

  /* 5. RENDER VIDEO TESTIMONIAL GALLERY */
  const videoGrid = document.getElementById('video-grid');
  if (videoGrid) {
    videoGrid.innerHTML = DATA.videos.map((v) => `
      <article class="video-card" onclick="window.openVideoModal('${v.id}', '${v.title.replace(/'/g, "\\'")}')">
        <div class="video-thumb">
          <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}" loading="lazy">
          <div class="play-badge"><span>▶</span></div>
          <span class="video-dur">${v.duration}</span>
        </div>
        <div class="video-info">
          <small>${v.category}</small>
          <h4>${v.title}</h4>
          <p>${v.tags}</p>
        </div>
      </article>
    `).join('');
  }

  /* 6. DRAWER & MODAL LOGIC */
  const backdrop = document.getElementById('global-backdrop');
  const drawer = document.getElementById('inquiry-drawer');
  const modalBox = document.getElementById('detail-modal');
  const modalContent = document.getElementById('modal-content');

  function closeAllOverlays() {
    if (backdrop) backdrop.classList.remove('open');
    if (drawer) drawer.classList.remove('open');
    if (modalBox) {
      modalBox.classList.remove('open');
      if (modalContent) modalContent.innerHTML = '';
    }
  }

  if (backdrop) backdrop.addEventListener('click', closeAllOverlays);
  document.querySelectorAll('[data-close-overlay]').forEach((b) => b.addEventListener('click', closeAllOverlays));
  document.querySelectorAll('[data-open-drawer]').forEach((b) => {
    b.addEventListener('click', () => {
      if (backdrop) backdrop.classList.add('open');
      if (drawer) drawer.classList.add('open');
    });
  });

  window.selectProductForInquiry = function (prodLabel) {
    const drawerProdInput = document.getElementById('drawer-product-input');
    const inlineProdInput = document.getElementById('inline-product-input');
    if (drawerProdInput) drawerProdInput.value = prodLabel;
    if (inlineProdInput) inlineProdInput.value = prodLabel;
    closeAllOverlays();
    if (backdrop) backdrop.classList.add('open');
    if (drawer) drawer.classList.add('open');
  };

  window.openProductModal = function (prodId) {
    const p = DATA.products.find((item) => item.id === prodId);
    if (!p || !modalBox || !modalContent) return;
    modalContent.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line-soft);padding-bottom:14px;margin-bottom:20px">
        <span class="tagchip">${p.categoryLabel}</span>
        <button type="button" class="drawer-close" onclick="document.getElementById('global-backdrop').click()">×</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;align-items:center">
        <div style="background:#050705;border:1px solid var(--line-soft);padding:18px;text-align:center">
          <img src="${p.image}" alt="${p.name}" style="max-width:100%;max-height:320px;object-fit:contain">
        </div>
        <div>
          <div style="font-family:var(--mono);font-size:10.5px;color:var(--amber);letter-spacing:.16em;text-transform:uppercase">${p.badge}</div>
          <h2 style="font-family:var(--disp);font-stretch:118%;font-size:1.75rem;margin:8px 0 12px;text-transform:uppercase">${p.name}</h2>
          <div style="font-family:var(--disp);font-stretch:118%;font-size:2rem;color:var(--lime);font-weight:900;margin-bottom:6px">
            ${p.regularPrice ? `<del style="font-size:1rem;color:var(--faint);margin-right:8px">$${p.regularPrice}.00</del>` : ''}
            $${p.price.toLocaleString()}.00
          </div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--amber);margin-bottom:14px">${p.shippingPromo}</div>
          <p style="color:var(--dim);font-size:14px;line-height:1.7">${p.shortDesc}</p>
          <ul class="check-list">
            ${p.details.map((d) => `<li>${d}</li>`).join('')}
          </ul>
          <div style="font-family:var(--mono);font-size:10.5px;color:var(--faint);margin-bottom:18px">PROCESSING / DELIVERY: ${p.turnaround}</div>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <button type="button" class="btn" onclick="window.selectProductForInquiry('${p.name.replace(/'/g, "\\'")} ($${p.price})')">Inquire / Order This Item ↗</button>
            <a class="btn ghost" href="tel:+15072153817">Call (507) 215-3817</a>
          </div>
        </div>
      </div>
    `;
    if (backdrop) backdrop.classList.add('open');
    modalBox.classList.add('open');
  };

  window.openProofModal = function (proofId) {
    const pr = DATA.labProofs.find((item) => item.id === proofId);
    if (!pr || !modalBox || !modalContent) return;
    modalContent.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line-soft);padding-bottom:14px;margin-bottom:18px">
        <span class="tagchip amber">${pr.tag}</span>
        <button type="button" class="drawer-close" onclick="document.getElementById('global-backdrop').click()">×</button>
      </div>
      <h3 style="font-family:var(--disp);font-stretch:118%;font-size:1.6rem;margin:0 0 12px;text-transform:uppercase">${pr.title}</h3>
      <p style="color:var(--dim);font-size:14px;line-height:1.7;margin:0 0 16px">${pr.summary}</p>
      <div style="background:#050705;border:1px solid var(--line);padding:12px;text-align:center;margin-bottom:16px">
        <img src="${pr.image}" alt="${pr.title}" style="max-width:100%;max-height:480px;object-fit:contain">
      </div>
      <p style="font-family:var(--mono);font-size:12px;color:var(--lime);margin:0">${pr.takeaway}</p>
    `;
    if (backdrop) backdrop.classList.add('open');
    modalBox.classList.add('open');
  };

  window.openVideoModal = function (ytId, title) {
    if (!modalBox || !modalContent) return;
    modalContent.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line-soft);padding-bottom:14px;margin-bottom:18px">
        <span class="tagchip">VIDEO PROOF // ${title}</span>
        <button type="button" class="drawer-close" onclick="document.getElementById('global-backdrop').click()">×</button>
      </div>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;background:#000;border:1px solid var(--line)">
        <iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" title="${title}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
    if (backdrop) backdrop.classList.add('open');
    modalBox.classList.add('open');
  };

  /* 7. FORM SUBMISSION HANDLER (OPENS PREFILLED EMAIL TO GREENAUTOTECHNOLOGY@GMAIL.COM + CONFIRMATION) */
  document.querySelectorAll('.js-gat-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name') || '';
      const vehicle = fd.get('vehicle') || '';
      const products = fd.get('products') || '';
      const phone = fd.get('phone') || '';
      const email = fd.get('email') || '';
      const notes = fd.get('notes') || '';
      const subject = encodeURIComponent(`GAT Product / Build Inquiry — ${vehicle} (${name})`);
      const body = encodeURIComponent(
        `Hey Michael!\n\nName: ${name}\nVehicle (Year/Make/Model/Engine): ${vehicle}\nProducts Interested In: ${products}\nPhone: ${phone}\nEmail: ${email}\nNotes: ${notes}\n`
      );
      const statusEl = form.querySelector('.form-status');
      if (statusEl) {
        statusEl.textContent = '✓ Inquiry prepared! Opening mail client to GreenAutoTechnology@gmail.com (or call 507-215-3817 for immediate service).';
        statusEl.style.color = 'var(--lime)';
      }
      window.location.href = `mailto:GreenAutoTechnology@gmail.com?subject=${subject}&body=${body}`;
    });
  });
})();
