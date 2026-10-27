(function () {
  const DATA = window.GAT_DATA;
  if (!DATA) return;

  /* 1. INTERACTIVE VEHICLE PLATFORM FITMENT RECOMMENDER */
  const PLATFORMS = {
    gas: {
      title: 'Recommended: The Combustion Stack™ ($1,000) or The WAVE™ Mod ($550) + Tribo-MAX Engine ($100)',
      desc: 'Ideal for daily drivers, V8/V6/I4 street builds, Mustangs, Camaros, Challengers & imports. Zero-downtime Core Exchange, no ECU tuning needed, 38% avg MPG gain, protected under Magnuson-Moss Warranty Act.',
      product: 'The WAVE Throttle Body Mod ($550) + Tribo-MAX Engine ($100)'
    },
    diesel: {
      title: 'Recommended: Diesel Air Stream — WAVE 🌊 Modification ($1,000 + FREE 10ml Tribo-MAX)',
      desc: 'Machined on ANY SIZE diesel intake air tube, Turbo, Turbo resonator, or throttle body (Cummins, Duramax, Powerstroke, EcoDiesel). Order now and receive a FREE 10ml Tribo-MAX Engine Treatment!',
      product: 'Diesel Air Stream WAVE Modification ($1,000 + Free 10ml Tribo-MAX)'
    },
    ls: {
      title: 'Recommended: “BIG GULP” 102mm (Gen-3 LS Motor) WAVE-Mod Throttle ($600)',
      desc: 'Built specifically for cable-driven Gen-3 LS Motors (LS1, LS2, LS3, LS6, LS7 & LSX). Delivers massive 102mm airflow with high-vacuum wave geometry for complete combustion.',
      product: '“BIG GULP” 102mm Gen-3 LS WAVE-Mod Throttle ($600)'
    },
    truck: {
      title: 'Recommended: The WAVE™ Throttle Body ($550) + Tribo-MAX ALL-6 Full Vehicle Bundle ($560)',
      desc: 'Proven on our 2009 Ram 1500 5.7L Hemi (+30% MPG, 62% power-back feel, 1 ppm HC wasted gas) and 2004 Nissan Armada 5.6L V8 (+2.4 MPG even with repairs needed). Available with Mobile Install ($600)!',
      product: 'Truck/SUV Package: The WAVE Mod ($550) + Tribo-MAX All-6 Bundle ($560)'
    }
  };

  const platBtns = document.querySelectorAll('[data-plat]');
  const recTitle = document.getElementById('plat-rec-title');
  const recDesc = document.getElementById('plat-rec-desc');
  const fitVehicleInput = document.getElementById('fitment-vehicle-input');
  const fitLaunchBtn = document.getElementById('fitment-launch-btn');
  let currentPlatKey = 'gas';

  platBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      platBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentPlatKey = btn.getAttribute('data-plat') || 'gas';
      const info = PLATFORMS[currentPlatKey];
      if (info && recTitle && recDesc) {
        recTitle.textContent = info.title;
        recDesc.textContent = info.desc;
      }
    });
  });

  if (fitLaunchBtn) {
    fitLaunchBtn.addEventListener('click', () => {
      const veh = fitVehicleInput && fitVehicleInput.value ? fitVehicleInput.value : '';
      const info = PLATFORMS[currentPlatKey];
      const vInput = document.getElementById('form-vehicle');
      const pInput = document.getElementById('form-products');
      if (vInput && veh) vInput.value = veh;
      if (pInput && info) pInput.value = info.product;
      const inq = document.getElementById('inquiry');
      if (inq) inq.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* 2. FLUID-DYNAMICS SIMULATOR TOGGLE */
  const simBtns = document.querySelectorAll('[data-sim-mode]');
  const simTitle = document.getElementById('sim-state-title');
  const simCopy = document.getElementById('sim-state-copy');
  const simM1 = document.getElementById('sim-m1');
  const simM2 = document.getElementById('sim-m2');
  const simM3 = document.getElementById('sim-m3');
  const simM4 = document.getElementById('sim-m4');
  const simImg = document.getElementById('sim-diagram-img');

  const SIM_STATES = {
    wave: {
      title: 'THE COMBUSTION STACK™ & WAVE™ VORTEX STATE // ACTIVE',
      copy: 'As incoming air crosses the butterfly valve and hits the precision-machined WAVE groove + Cyclone helical channels + Mirror Port & Polish bore, intake vacuum rises sharply. Atomized fuel droplets flash into vapor, burning completely on every stroke.',
      m1: 'HIGH PEAK VACUUM (+KNEE)',
      m2: '100% VAPORIZED CHARGE',
      m3: '1 PPM HC (RAM 5.7L TEST)',
      m4: '+38% AVG MPG / +9.52 HP DYNO',
      img: 'assets/home_5_ride_wave.png'
    },
    stock: {
      title: 'FACTORY STOCK THROTTLE BODY // UNMODIFIED BASELINE',
      copy: 'Standard flat-bore factory casting creates dead-zone pressure stalls behind the butterfly plate. Lower manifold vacuum leaves fuel in heavy liquid droplets that fail to burn completely—wasting fuel out the tailpipe as unburned hydrocarbons (HC).',
      m1: 'LOW / STALLED VACUUM',
      m2: 'LIQUID DROPLET PUDDLING',
      m3: 'UP TO 1,000 PPM INDUSTRY HC',
      m4: 'BASELINE FACTORY OUTPUT',
      img: 'assets/prod_port_polish.png'
    }
  };

  simBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      simBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-sim-mode') || 'wave';
      const st = SIM_STATES[mode];
      if (!st) return;
      if (simTitle) simTitle.textContent = st.title;
      if (simCopy) simCopy.textContent = st.copy;
      if (simM1) simM1.textContent = st.m1;
      if (simM2) simM2.textContent = st.m2;
      if (simM3) simM3.textContent = st.m3;
      if (simM4) simM4.textContent = st.m4;
      if (simImg) simImg.src = st.img;
    });
  });

  /* 3. RENDER ALL 17 PRODUCTS IN SHOWROOM */
  const grid = document.getElementById('showroom-grid');
  const searchEl = document.getElementById('showroom-search');
  const catBtns = document.querySelectorAll('[data-cat]');
  let activeCat = 'all';
  let query = '';

  function renderShowroom() {
    if (!grid) return;
    const list = DATA.products.filter((p) => {
      const cOk = activeCat === 'all' || p.category === activeCat;
      const q = query.trim().toLowerCase();
      const qOk = !q || p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q) || p.badge.toLowerCase().includes(q);
      return cOk && qOk;
    });
    grid.innerHTML = list.map((p) => `
      <article class="show-card">
        <div class="show-img" onclick="window.openAeroProduct('${p.id}')">
          <span class="show-badge">${p.badge}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="show-body">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--cyan);letter-spacing:.14em;text-transform:uppercase;margin-bottom:4px">${p.categoryLabel}</div>
          <h3>${p.name}</h3>
          <p>${p.shortDesc}</p>
          <div class="show-footer">
            <div class="show-price">
              ${p.regularPrice ? `<del>$${p.regularPrice}</del>` : ''}$${p.price.toLocaleString()}.00
            </div>
            <span style="font-family:var(--mono);font-size:9.5px;color:var(--gold)">${p.shippingPromo}</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr auto;gap:8px">
            <button type="button" class="btn-aero sm" onclick="window.prefillInquiry('${p.name.replace(/'/g, "\\'")} ($${p.price})')">Select Item ↗</button>
            <button type="button" class="btn-aero outline sm" onclick="window.openAeroProduct('${p.id}')">Details</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  catBtns.forEach((b) => {
    b.addEventListener('click', () => {
      catBtns.forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      activeCat = b.getAttribute('data-cat') || 'all';
      renderShowroom();
    });
  });

  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      query = e.target.value || '';
      renderShowroom();
    });
  }
  renderShowroom();

  /* 4. RENDER 8 VIDEO PROOFS */
  const vidGrid = document.getElementById('vid-grid');
  if (vidGrid) {
    vidGrid.innerHTML = DATA.videos.map((v) => `
      <article class="vid-card" onclick="window.openAeroVideo('${v.id}', '${v.title.replace(/'/g, "\\'")}')">
        <div class="vid-thumb">
          <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}" loading="lazy">
          <div class="vid-play"><b>▶</b></div>
          <span style="position:absolute;bottom:8px;right:8px;background:rgba(0,0,0,.85);color:var(--cyan);font-family:var(--mono);font-size:10px;padding:3px 7px;border-radius:4px">${v.duration}</span>
        </div>
        <div style="padding:16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--emerald);text-transform:uppercase">${v.category}</div>
          <h4 style="margin:6px 0;font-size:14.5px;line-height:1.35">${v.title}</h4>
          <div style="font-family:var(--mono);font-size:10px;color:var(--faint)">${v.tags}</div>
        </div>
      </article>
    `).join('');
  }

  /* 5. MODAL & INQUIRY HELPERS */
  const bg = document.getElementById('aero-backdrop');
  const modal = document.getElementById('aero-modal');
  const modalInner = document.getElementById('aero-modal-inner');

  function closeModal() {
    if (bg) bg.classList.remove('open');
    if (modal) modal.classList.remove('open');
    if (modalInner) modalInner.innerHTML = '';
  }
  if (bg) bg.addEventListener('click', closeModal);

  window.prefillInquiry = function (prodName) {
    closeModal();
    const pInput = document.getElementById('form-products');
    if (pInput) pInput.value = prodName;
    const inq = document.getElementById('inquiry');
    if (inq) inq.scrollIntoView({ behavior: 'smooth' });
  };

  window.openAeroProduct = function (id) {
    const p = DATA.products.find((x) => x.id === id);
    if (!p || !modal || !modalInner) return;
    modalInner.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line-soft);padding-bottom:14px;margin-bottom:20px">
        <span class="eyebrow-pill"><i></i> ${p.categoryLabel}</span>
        <button type="button" class="btn-aero outline sm" onclick="document.getElementById('aero-backdrop').click()">Close ×</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;align-items:center">
        <div style="background:#03060d;border:1px solid var(--line-soft);border-radius:10px;padding:18px;text-align:center">
          <img src="${p.image}" alt="${p.name}" style="max-width:100%;max-height:310px;object-fit:contain">
        </div>
        <div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">${p.badge} · ${p.shippingPromo}</div>
          <h2 style="font-family:var(--disp);font-size:1.75rem;margin:8px 0">${p.name}</h2>
          <div style="font-family:var(--disp);font-size:2rem;color:var(--emerald);font-weight:700;margin-bottom:12px">
            ${p.regularPrice ? `<del style="font-size:1rem;color:var(--faint);margin-right:8px">$${p.regularPrice}.00</del>` : ''}$${p.price.toLocaleString()}.00
          </div>
          <p style="color:var(--dim);font-size:14px;line-height:1.7">${p.shortDesc}</p>
          <ul style="padding-left:18px;color:var(--ink);font-size:13.5px;line-height:1.75;margin:14px 0">
            ${p.details.map((d) => `<li>${d}</li>`).join('')}
          </ul>
          <div style="font-family:var(--mono);font-size:10.5px;color:var(--faint);margin-bottom:16px">TURNAROUND: ${p.turnaround}</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button type="button" class="btn-aero" onclick="window.prefillInquiry('${p.name.replace(/'/g, "\\'")} ($${p.price})')">Inquire / Order Now ↗</button>
            <a href="tel:+15072153817" class="btn-aero outline">Call (507) 215-3817</a>
          </div>
        </div>
      </div>
    `;
    if (bg) bg.classList.add('open');
    modal.classList.add('open');
  };

  window.openAeroProof = function (id) {
    const pr = DATA.labProofs.find((x) => x.id === id);
    if (!pr || !modal || !modalInner) return;
    modalInner.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line-soft);padding-bottom:14px;margin-bottom:16px">
        <span class="eyebrow-pill"><i></i> ${pr.tag}</span>
        <button type="button" class="btn-aero outline sm" onclick="document.getElementById('aero-backdrop').click()">Close ×</button>
      </div>
      <h3 style="font-family:var(--disp);font-size:1.6rem;margin:0 0 10px">${pr.title}</h3>
      <p style="color:var(--dim);font-size:14px;line-height:1.7;margin:0 0 16px">${pr.summary}</p>
      <div style="background:#020409;border:1px solid var(--line);border-radius:10px;padding:12px;text-align:center">
        <img src="${pr.image}" alt="${pr.title}" style="max-width:100%;max-height:480px;object-fit:contain">
      </div>
      <p style="font-family:var(--mono);font-size:12px;color:var(--emerald);margin:14px 0 0">${pr.takeaway}</p>
    `;
    if (bg) bg.classList.add('open');
    modal.classList.add('open');
  };

  window.openAeroVideo = function (ytId, title) {
    if (!modal || !modalInner) return;
    modalInner.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line-soft);padding-bottom:14px;margin-bottom:16px">
        <span class="eyebrow-pill"><i></i> ${title}</span>
        <button type="button" class="btn-aero outline sm" onclick="document.getElementById('aero-backdrop').click()">Close ×</button>
      </div>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;background:#000">
        <iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" title="${title}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
    if (bg) bg.classList.add('open');
    modal.classList.add('open');
  };

  /* 6. FORM SUBMIT */
  const form = document.getElementById('aero-inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const subject = encodeURIComponent(`GAT Inquiry — ${fd.get('vehicle')} (${fd.get('name')})`);
      const body = encodeURIComponent(
        `Hey Michael!\n\nName: ${fd.get('name')}\nVehicle: ${fd.get('vehicle')}\nProducts: ${fd.get('products')}\nPhone: ${fd.get('phone')}\nEmail: ${fd.get('email')}\nNotes: ${fd.get('notes')}\n`
      );
      const st = document.getElementById('aero-form-status');
      if (st) st.textContent = '✓ Request ready! Opening email to GreenAutoTechnology@gmail.com...';
      window.location.href = `mailto:GreenAutoTechnology@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
