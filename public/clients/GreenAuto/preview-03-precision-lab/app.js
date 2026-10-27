(function () {
  const DATA = window.GAT_DATA;
  if (!DATA) return;

  /* 1. DUAL-MODE THEME TOGGLE (DAYLIGHT BLUEPRINT vs DARK LAB) */
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
      themeBtn.textContent = isDark ? '◐ Dark Lab' : '☀ Light Lab';
    });
  }

  /* 1B. HOW WAVE TECHNOLOGY WORKS — DUAL ANIMATION SWITCHER */
  const waveTabs = document.querySelectorAll('[data-wave-view]');
  const cutawayVid = document.getElementById('lab-wave-cutaway-video');
  const vortexVid = document.getElementById('lab-wave-vortex-video');
  const dualBox = document.getElementById('lab-wave-dual-box');
  const diagramImg = document.getElementById('lab-wave-diagram-img');
  const waveCaption = document.getElementById('lab-wave-caption');

  window.setLabWaveView = function (mode) {
    waveTabs.forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-wave-view') === mode);
    });
    if (cutawayVid) cutawayVid.style.display = mode === 'cutaway' ? 'block' : 'none';
    if (vortexVid) vortexVid.style.display = mode === 'vortex' ? 'block' : 'none';
    if (dualBox) dualBox.style.display = mode === 'dual' ? 'grid' : 'none';
    if (diagramImg) diagramImg.style.display = mode === 'diagram' ? 'block' : 'none';

    if (mode === 'cutaway' && cutawayVid) {
      cutawayVid.play().catch(() => {});
      if (waveCaption) {
        waveCaption.textContent = 'SIMULATION 01 // 3D THROTTLE BODY CUTAWAY: High-pressure wave contour channels incoming air into a laminar-to-helical high-vacuum vortex stream.';
      }
    } else if (mode === 'vortex' && vortexVid) {
      vortexVid.play().catch(() => {});
      if (waveCaption) {
        waveCaption.textContent = 'SIMULATION 02 // BUTTERFLY VALVE INTAKE STROKE: Machined V-grooves eliminate flat-plate boundary turbulence and accelerate air-fuel atomization.';
      }
    } else if (mode === 'dual') {
      if (waveCaption) {
        waveCaption.textContent = 'DUAL SIMULATION // Side-by-side comparison of 3D Throttle Body Cutaway (Cam A) and Butterfly Valve Intake Vortex (Cam B).';
      }
    } else if (mode === 'diagram') {
      if (waveCaption) {
        waveCaption.textContent = 'SCHEMATIC // WAVE™ V-Groove & Wave-Form Butterfly Contour Blueprint.';
      }
    }
  };

  waveTabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.setLabWaveView(btn.getAttribute('data-wave-view') || 'cutaway');
    });
  });

  /* 2. INTERACTIVE MPG & ROI FUEL SAVINGS CALCULATOR */
  const mpgSlider = document.getElementById('calc-mpg');
  const milesSlider = document.getElementById('calc-miles');
  const gasSlider = document.getElementById('calc-gas');
  const gainSlider = document.getElementById('calc-gain');

  const mpgVal = document.getElementById('val-mpg');
  const milesVal = document.getElementById('val-miles');
  const gasVal = document.getElementById('val-gas');
  const gainVal = document.getElementById('val-gain');

  const outNewMpg = document.getElementById('out-new-mpg');
  const outYearlySave = document.getElementById('out-yearly-save');
  const outPayback = document.getElementById('out-payback');

  function updateROI() {
    if (!mpgSlider || !milesSlider || !gasSlider || !gainSlider) return;
    const mpg = parseFloat(mpgSlider.value);
    const miles = parseFloat(milesSlider.value);
    const gas = parseFloat(gasSlider.value);
    const gainPct = parseFloat(gainSlider.value);

    if (mpgVal) mpgVal.textContent = `${mpg} MPG`;
    if (milesVal) milesVal.textContent = `${miles.toLocaleString()} mi/yr`;
    if (gasVal) gasVal.textContent = `$${gas.toFixed(2)}/gal`;
    if (gainVal) gainVal.textContent = `+${gainPct}% MPG`;

    const newMpg = mpg * (1 + gainPct / 100);
    const oldAnnualCost = (miles / mpg) * gas;
    const newAnnualCost = (miles / newMpg) * gas;
    const annualSavings = Math.max(0, oldAnnualCost - newAnnualCost);
    const monthsPayback = annualSavings > 0 ? Math.max(0.5, (550 / (annualSavings / 12))) : 0;

    if (outNewMpg) outNewMpg.textContent = `${newMpg.toFixed(1)} MPG`;
    if (outYearlySave) outYearlySave.textContent = `$${Math.round(annualSavings).toLocaleString()} / yr`;
    if (outPayback) outPayback.textContent = `${monthsPayback.toFixed(1)} Months`;
  }

  [mpgSlider, milesSlider, gasSlider, gainSlider].forEach((s) => {
    if (s) s.addEventListener('input', updateROI);
  });
  updateROI();

  /* 3. RENDER 17-PRODUCT SPEC MATRIX */
  const grid = document.getElementById('matrix-grid');
  const searchEl = document.getElementById('lab-search');
  const tabs = document.querySelectorAll('[data-lab-cat]');
  let activeCat = 'all';
  let qText = '';

  function renderMatrix() {
    if (!grid) return;
    const items = DATA.products.filter((p) => {
      const cMatch = activeCat === 'all' || p.category === activeCat;
      const q = qText.trim().toLowerCase();
      const qMatch = !q || p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q) || p.badge.toLowerCase().includes(q);
      return cMatch && qMatch;
    });

    grid.innerHTML = items.map((p, i) => `
      <article class="m-card">
        <div class="m-thumb" onclick="window.openLabProduct('${p.id}')">
          <span class="m-badge">${p.badge}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="m-body">
          <div style="font-family:var(--mono);font-size:10px;color:var(--accent);font-weight:700">SPEC-${String(i + 1).padStart(2, '0')} // ${p.categoryLabel.toUpperCase()}</div>
          <h3>${p.name}</h3>
          <p>${p.shortDesc}</p>
          <div class="m-price-bar">
            <div class="m-price">${p.regularPrice ? `<del>$${p.regularPrice}</del>` : ''}$${p.price.toLocaleString()}.00</div>
            <span style="font-family:var(--mono);font-size:10px;color:var(--amber);font-weight:700">${p.shippingPromo}</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr auto;gap:8px">
            <button type="button" class="btn-lab sm" onclick="window.selectLabItem('${p.name.replace(/'/g, "\\'")} ($${p.price})')">Select For Build ↗</button>
            <button type="button" class="btn-lab secondary sm" onclick="window.openLabProduct('${p.id}')">Sheet</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  tabs.forEach((t) => {
    t.addEventListener('click', () => {
      tabs.forEach((x) => x.classList.remove('active'));
      t.classList.add('active');
      activeCat = t.getAttribute('data-lab-cat') || 'all';
      renderMatrix();
    });
  });

  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      qText = e.target.value || '';
      renderMatrix();
    });
  }
  renderMatrix();

  /* 4. RENDER 8 VIDEO PROOFS */
  const vGrid = document.getElementById('lab-video-grid');
  if (vGrid) {
    vGrid.innerHTML = DATA.videos.map((v) => `
      <article class="lv-card" onclick="window.openLabVideo('${v.id}', '${v.title.replace(/'/g, "\\'")}')">
        <div class="lv-thumb">
          <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}" loading="lazy">
          <div class="lv-play"><span>▶ PLAY (${v.duration})</span></div>
        </div>
        <div style="padding:16px">
          <div style="font-family:var(--mono);font-size:10px;color:var(--accent);font-weight:700">${v.category}</div>
          <h4 style="font-family:var(--disp);margin:6px 0;font-size:15px">${v.title}</h4>
          <div style="font-family:var(--mono);font-size:10px;color:var(--faint)">${v.tags}</div>
        </div>
      </article>
    `).join('');
  }

  /* 5. MODALS & FORM */
  const bg = document.getElementById('lab-backdrop');
  const modal = document.getElementById('lab-modal');
  const modalBody = document.getElementById('lab-modal-body');

  function closeLabModal() {
    if (bg) bg.classList.remove('open');
    if (modal) modal.classList.remove('open');
    if (modalBody) modalBody.innerHTML = '';
  }
  if (bg) bg.addEventListener('click', closeLabModal);

  window.selectLabItem = function (label) {
    closeLabModal();
    const inp = document.getElementById('lab-form-products');
    if (inp) inp.value = label;
    const sec = document.getElementById('inquiry');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  };

  window.openLabProduct = function (id) {
    const p = DATA.products.find((x) => x.id === id);
    if (!p || !modal || !modalBody) return;
    modalBody.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--border);padding-bottom:12px;margin-bottom:20px">
        <span class="spec-code-bar">${p.categoryLabel}</span>
        <button type="button" class="btn-lab secondary sm" onclick="document.getElementById('lab-backdrop').click()">CLOSE ×</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:24px;align-items:center">
        <div style="background:#0b110d;border:2px solid var(--border);padding:16px;text-align:center">
          <img src="${p.image}" alt="${p.name}" style="max-width:100%;max-height:310px;object-fit:contain">
        </div>
        <div>
          <div style="font-family:var(--mono);font-size:11px;font-weight:700;color:var(--accent)">${p.badge} // ${p.shippingPromo}</div>
          <h2 style="font-family:var(--disp);font-size:1.75rem;margin:8px 0">${p.name}</h2>
          <div style="font-family:var(--disp);font-size:2rem;font-weight:700;margin-bottom:10px">
            ${p.regularPrice ? `<del style="font-size:1rem;color:var(--faint);margin-right:8px">$${p.regularPrice}.00</del>` : ''}$${p.price.toLocaleString()}.00
          </div>
          <p style="color:var(--dim);font-size:14px;line-height:1.68">${p.shortDesc}</p>
          <ul style="padding-left:18px;font-size:13.5px;line-height:1.75;margin:14px 0">
            ${p.details.map((d) => `<li>${d}</li>`).join('')}
          </ul>
          <div style="font-family:var(--mono);font-size:10.5px;color:var(--faint);margin-bottom:16px">PROCESSING: ${p.turnaround}</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button type="button" class="btn-lab" onclick="window.selectLabItem('${p.name.replace(/'/g, "\\'")} ($${p.price})')">Select For Build Inquiry ↗</button>
            <a href="tel:+15072153817" class="btn-lab secondary">Call (507) 215-3817</a>
          </div>
        </div>
      </div>
    `;
    if (bg) bg.classList.add('open');
    modal.classList.add('open');
  };

  window.openLabProof = function (id) {
    const pr = DATA.labProofs.find((x) => x.id === id);
    if (!pr || !modal || !modalBody) return;
    modalBody.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--border);padding-bottom:12px;margin-bottom:16px">
        <span class="spec-code-bar">${pr.tag}</span>
        <button type="button" class="btn-lab secondary sm" onclick="document.getElementById('lab-backdrop').click()">CLOSE ×</button>
      </div>
      <h3 style="font-family:var(--disp);font-size:1.6rem;margin:0 0 8px">${pr.title}</h3>
      <p style="color:var(--dim);font-size:14px;line-height:1.68;margin:0 0 14px">${pr.summary}</p>
      <div style="background:#0b110d;border:2px solid var(--border);padding:12px;text-align:center">
        <img src="${pr.image}" alt="${pr.title}" style="max-width:100%;max-height:480px;object-fit:contain">
      </div>
      <p style="font-family:var(--mono);font-size:12px;font-weight:700;margin:14px 0 0">${pr.takeaway}</p>
    `;
    if (bg) bg.classList.add('open');
    modal.classList.add('open');
  };

  window.openLabVideo = function (ytId, title) {
    if (!modal || !modalBody) return;
    modalBody.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--border);padding-bottom:12px;margin-bottom:16px">
        <span class="spec-code-bar">${title}</span>
        <button type="button" class="btn-lab secondary sm" onclick="document.getElementById('lab-backdrop').click()">CLOSE ×</button>
      </div>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border:2px solid var(--border);background:#000">
        <iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" title="${title}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
    if (bg) bg.classList.add('open');
    modal.classList.add('open');
  };

  const form = document.getElementById('lab-inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const subject = encodeURIComponent(`GAT Technical Inquiry — ${fd.get('vehicle')} (${fd.get('name')})`);
      const body = encodeURIComponent(
        `Hey Michael!\n\nName: ${fd.get('name')}\nVehicle: ${fd.get('vehicle')}\nProducts: ${fd.get('products')}\nPhone: ${fd.get('phone')}\nEmail: ${fd.get('email')}\nNotes: ${fd.get('notes')}\n`
      );
      const st = document.getElementById('lab-form-status');
      if (st) st.textContent = '✓ Inquiry formatted! Opening mail client to GreenAutoTechnology@gmail.com...';
      window.location.href = `mailto:GreenAutoTechnology@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
