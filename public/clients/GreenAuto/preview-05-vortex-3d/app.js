import * as THREE from './vendor/three.module.min.js';

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
    category: ap.recommended_category === 'Merchandise (optional)' ? 'Detailing & Coatings' : ap.recommended_category,
    image: ap.local_image || 'assets/p001.jpg',
    summary: ap.public_description_summary || '',
    description: ap.full_description || ap.public_description_summary || '',
    checkoutType: ap.checkout_type_proposed || 'Direct checkout',
    requiresFitment: ap.recommended_category === 'Custom Performance Mods',
    options: []
  })),
  ...storeProducts.map((sp, idx) => {
    let mappedCat = 'Engine & Fluid Treatments';
    if (sp.category === 'Throttle Body & Hardware' || sp.category === 'Bundles & Combos') {
      mappedCat = 'Custom Performance Mods';
    } else if (sp.category === 'Core & Service Fees') {
      mappedCat = 'Service & Shipping';
    }
    return {
      id: 'S' + String(idx + 1).padStart(3, '0'),
      name: sp.name,
      price: Number(sp.price || 0),
      regularPrice: null,
      category: mappedCat,
      image: sp.image || 'assets/prod_tribomax_engine.png',
      summary: sp.shortDesc || sp.description || '',
      description: sp.description || '',
      checkoutType: sp.sku ? `SKU ${sp.sku}` : 'Direct Store Item',
      requiresFitment: mappedCat === 'Custom Performance Mods',
      options: sp.options || []
    };
  })
];

let activeCategory = 'all';
let searchQuery = '';
let cart = [];

// Modal & Lightbox Controls
const modalBackdrop = document.getElementById('universalModal');
const modalBody = document.getElementById('modalBodyContent');
const closeModalBtn = document.getElementById('closeModalBtn');
const cartCountEl = document.getElementById('cartCount');

function openModal(html) {
  if (!modalBody || !modalBackdrop) return;
  modalBody.innerHTML = html;
  modalBackdrop.classList.add('open');
}

function closeModal() {
  if (!modalBody || !modalBackdrop) return;
  modalBackdrop.classList.remove('open');
  modalBody.innerHTML = '';
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modalBackdrop) {
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
}
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
    closeModal();
  }
});

window.openLightbox = function (imgSrc, caption) {
  openModal(`
    <div class="section-eyebrow">HIGH-RESOLUTION LABORATORY &amp; TELEMETRY RECORD</div>
    <h3 style="font-family:var(--display);font-size:1.45rem;margin-bottom:14px;">${caption}</h3>
    <div style="background:#030605;border:1px solid var(--border);border-radius:10px;overflow:hidden;">
      <img src="${imgSrc}" alt="${caption}" style="width:100%;max-height:72vh;object-fit:contain;display:block;margin:0 auto;" />
    </div>
  `);
};

// Render 43-Item Catalog
const catalogGrid = document.getElementById('catalogGrid');
const categoryPills = document.getElementById('categoryPills');
const searchInput = document.getElementById('catalogSearchInput');

function renderCatalog() {
  if (!catalogGrid) return;
  const filtered = unifiedCatalog.filter((item) => {
    const catMatch = activeCategory === 'all' || item.category === activeCategory;
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
            ${item.regularPrice ? `<del>$${item.regularPrice.toFixed(2)}</del>` : ''}
          </div>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btn ghost sm" onclick="window.openProductDetail('${item.id}')">SPEC</button>
            <button type="button" class="btn sm" onclick="window.addToCart('${item.id}')">+ ADD</button>
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

window.openProductDetail = function (itemId) {
  const item = unifiedCatalog.find((x) => x.id === itemId);
  if (!item) return;

  const optionsHtml =
    item.options && item.options.length
      ? `<div class="form-group" style="margin-top:12px;">
           <label>Select Option / Viscosity</label>
           <select id="modalProdOption">
             ${item.options.map((o) => `<option value="${o}">${o}</option>`).join('')}
           </select>
         </div>`
      : '';

  const fitmentHtml = item.requiresFitment
    ? `<div class="form-group" style="margin-top:12px;">
         <label>Vehicle Year / Make / Model / Engine Size (Required for Custom Machining)</label>
         <input type="text" id="modalProdFitment" placeholder="e.g. 2014 Chevy Silverado 5.3L V8" />
       </div>`
    : '';

  openModal(`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;align-items:start;">
      <div style="background:#040807;border:1px solid var(--border);border-radius:10px;overflow:hidden;">
        <img src="${item.image}" alt="${item.name}" style="width:100%;max-height:340px;object-fit:contain;display:block;margin:0 auto;" />
      </div>
      <div>
        <div class="section-eyebrow">${item.id} · ${item.category}</div>
        <h3 style="font-family:var(--display);font-size:1.55rem;margin-bottom:8px;">${item.name}</h3>
        <div class="product-price" style="font-size:1.75rem;margin-bottom:12px;">
          $${item.price.toFixed(2)}
          ${item.regularPrice ? `<del>$${item.regularPrice.toFixed(2)}</del>` : ''}
        </div>
        <p style="color:var(--muted);margin-bottom:14px;line-height:1.65;">${item.description || item.summary}</p>
        <div style="font-family:var(--mono);font-size:11px;color:var(--accent);margin-bottom:12px;">
          FULFILLMENT: ${item.checkoutType}
        </div>
        ${optionsHtml}
        ${fitmentHtml}
        <button type="button" class="btn" style="width:100%;margin-top:14px;" onclick="window.addToCart('${item.id}', true)">
          ADD TO BUILD ORDER ($${item.price.toFixed(2)}) ↗&#xFE0E;
        </button>
      </div>
    </div>
  `);
};

window.addToCart = function (itemId, fromModal) {
  const item = unifiedCatalog.find((x) => x.id === itemId);
  if (!item) return;
  let note = '';
  if (fromModal) {
    const optEl = document.getElementById('modalProdOption');
    const fitEl = document.getElementById('modalProdFitment');
    if (optEl && optEl.value) note += optEl.value + ' ';
    if (fitEl && fitEl.value) note += `[Vehicle: ${fitEl.value}]`;
  }
  cart.push({ ...item, note: note.trim() });
  if (cartCountEl) cartCountEl.textContent = String(cart.length);
  if (fromModal) closeModal();
};

const openCartBtn = document.getElementById('openCartBtn');
if (openCartBtn) {
  openCartBtn.addEventListener('click', () => {
    const total = cart.reduce((sum, x) => sum + x.price, 0);
    const itemsHtml =
      cart.length === 0
        ? `<p style="color:var(--muted);padding:18px 0;">Your WAVE™ &amp; Tribo-MAX™ build cart is empty. Click <strong>+ ADD</strong> on any item in the 43-item catalog.</p>`
        : cart
            .map(
              (c, i) => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
            <div>
              <strong>${c.name}</strong> <span style="font-family:var(--mono);font-size:11px;color:var(--muted);">(${c.id})</span>
              ${c.note ? `<div style="font-size:12px;color:var(--accent);">${c.note}</div>` : ''}
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="font-family:var(--mono);font-weight:700;color:var(--accent);">$${c.price.toFixed(2)}</span>
              <button type="button" class="btn ghost sm" onclick="window.removeCartIdx(${i})">✕</button>
            </div>
          </div>
        `
            )
            .join('');

    openModal(`
      <div class="section-eyebrow">GREEN AUTO TECHNOLOGY · BUILD &amp; ORDER SUMMARY</div>
      <h3 style="font-family:var(--display);font-size:1.5rem;margin-bottom:12px;">SELECTED ITEMS (${cart.length})</h3>
      ${itemsHtml}
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:18px;padding-top:14px;border-top:2px solid var(--border);">
        <span style="font-family:var(--mono);font-size:12px;">ESTIMATED TOTAL (EARNS ${Math.round(total * 10)} GREEN MILES PTS):</span>
        <span style="font-family:var(--display);font-weight:800;font-size:1.65rem;color:var(--accent);">$${total.toFixed(2)}</span>
      </div>
      <div style="margin-top:18px;">
        <a href="#custom-modifications" onclick="document.getElementById('universalModal').classList.remove('open')" class="btn" style="width:100%;">
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
  categoryPills.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-pill');
    if (!btn) return;
    categoryPills.querySelectorAll('.cat-pill').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-cat');
    renderCatalog();
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value || '';
    renderCatalog();
  });
}

// Render 6 YouTube Proof Videos
const videos = gatData.videos || [];
const videoContainer = document.getElementById('videoCardsContainer');
if (videoContainer) {
  videoContainer.innerHTML = videos
    .map(
      (v) => `
      <article class="evidence-card" onclick="window.openVideoModal('${v.youtubeId}', '${v.title.replace(/'/g, "\\'")}')">
        <div>
          <div class="evidence-thumb">
            <img src="https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg" alt="${v.title}" loading="lazy" />
            <span class="thumb-badge">▶ PLAY YOUTUBE PROOF</span>
          </div>
          <div class="evidence-body">
            <div class="section-eyebrow" style="margin-bottom:4px;">${v.category || 'VERIFIED PROOF'}</div>
            <h4>${v.title}</h4>
            <p>${v.summary || ''}</p>
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

window.openVideoModal = function (ytId, title) {
  openModal(`
    <div class="section-eyebrow">GREEN AUTO TECHNOLOGY · YOUTUBE PROOF VAULT</div>
    <h3 style="font-family:var(--display);font-size:1.45rem;margin-bottom:14px;">${title}</h3>
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;background:#000;">
      <iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" title="${title}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `);
};

// Render 8 Blog Articles
const posts = gatData.blogPosts || [];
const blogGrid = document.getElementById('blogArticlesGrid');
if (blogGrid) {
  blogGrid.innerHTML = posts
    .map(
      (post, idx) => `
      <article class="evidence-card" style="padding:22px;">
        <div>
          <div class="section-eyebrow">${post.date} · ${post.readTime || '3 min read'}</div>
          <h3 style="font-family:var(--display);font-size:1.18rem;margin-bottom:8px;">${post.title}</h3>
          <p style="color:var(--muted);font-size:0.9rem;margin-bottom:16px;">${post.excerpt}</p>
        </div>
        <button type="button" class="btn ghost sm" onclick="window.openBlogPost(${idx})">Read Full Article &amp; Q&amp;A ↗&#xFE0E;</button>
      </article>
    `
    )
    .join('');
}

window.openBlogPost = function (idx) {
  const post = posts[idx];
  if (!post) return;
  const paragraphs = (post.content || [])
    .map((p) => `<p style="margin-bottom:12px;color:var(--ink);line-height:1.7;">${p}</p>`)
    .join('');
  const comments = (post.comments || [])
    .map(
      (c) => `
      <div style="background:#050908;border:1px solid var(--border-subtle);padding:12px;border-radius:8px;margin-top:8px;">
        <div style="font-family:var(--mono);font-size:11px;color:var(--accent);">${c.author} · ${c.date || ''}</div>
        <div style="font-size:0.9rem;margin-top:4px;">${c.text}</div>
      </div>
    `
    )
    .join('');

  openModal(`
    <div class="section-eyebrow">${post.date} · BY ${post.author || 'MICHAEL LEE'}</div>
    <h3 style="font-family:var(--display);font-size:1.55rem;margin-bottom:14px;">${post.title}</h3>
    <div>${paragraphs}</div>
    ${comments ? `<h4 style="font-family:var(--display);margin-top:20px;font-size:1.1rem;">READER COMMENTS &amp; MICHAEL LEE REPLIES</h4>${comments}` : ''}
  `);
};

// Dual MP4 Video Tabs
const sciTabs = document.querySelectorAll('#v5SciTabs .sci-tab');
const paneCutaway = document.getElementById('v5PaneCutaway');
const paneVortex = document.getElementById('v5PaneVortex');
const paneDual = document.getElementById('v5PaneDual');
const paneDiagram = document.getElementById('v5PaneDiagram');
const vidCutaway = document.getElementById('v5CutawayVid');
const vidVortex = document.getElementById('v5VortexVid');

sciTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const view = tab.getAttribute('data-sci-view');
    sciTabs.forEach((t) => t.classList.toggle('active', t === tab));
    if (paneCutaway) paneCutaway.style.display = view === 'cutaway' ? 'block' : 'none';
    if (paneVortex) paneVortex.style.display = view === 'vortex' ? 'block' : 'none';
    if (paneDual) paneDual.style.display = view === 'dual' ? 'block' : 'none';
    if (paneDiagram) paneDiagram.style.display = view === 'diagram' ? 'block' : 'none';
    if (view === 'cutaway' && vidCutaway) vidCutaway.play().catch(() => {});
    if (view === 'vortex' && vidVortex) vidVortex.play().catch(() => {});
  });
});

// Interactive MPG & Payback Calculator
const calcMpg = document.getElementById('calc-mpg');
const calcMiles = document.getElementById('calc-miles');
const calcGas = document.getElementById('calc-gas');
const calcGain = document.getElementById('calc-gain');

function updateRoi() {
  if (!calcMpg || !calcMiles || !calcGas || !calcGain) return;
  const mpg = Number(calcMpg.value);
  const miles = Number(calcMiles.value);
  const gas = Number(calcGas.value);
  const gainPct = Number(calcGain.value);

  document.getElementById('val-mpg').textContent = `${mpg} MPG`;
  document.getElementById('val-miles').textContent = `${miles.toLocaleString()} mi/yr`;
  document.getElementById('val-gas').textContent = `$${gas.toFixed(2)}/gal`;
  document.getElementById('val-gain').textContent = `+${gainPct}% MPG`;

  const newMpg = mpg * (1 + gainPct / 100);
  const oldCost = (miles / mpg) * gas;
  const newCost = (miles / newMpg) * gas;
  const yearlySave = Math.max(80, Math.round(oldCost - newCost));
  const paybackMonths = ((550 / yearlySave) * 12).toFixed(1);

  document.getElementById('out-yearly-save').textContent = `$${yearlySave.toLocaleString()} / yr`;
  document.getElementById('out-new-mpg').textContent = `${newMpg.toFixed(1)} MPG`;
  document.getElementById('out-payback').textContent = `${paybackMonths} Months`;
}

[calcMpg, calcMiles, calcGas, calcGain].forEach((el) => {
  if (el) el.addEventListener('input', updateRoi);
});
updateRoi();

// Fitment Form Handler
const fitForm = document.getElementById('fitmentRequestForm');
const fitStatus = document.getElementById('fitmentStatusMsg');
if (fitForm) {
  fitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const vehicle = document.getElementById('fitVehicle').value;
    const pkg = document.getElementById('fitPackage').value;
    if (fitStatus) {
      fitStatus.style.display = 'block';
      fitStatus.textContent = `✓ Fitment inquiry logged for ${vehicle} (${pkg}). Michael Lee responds within 24 hours at (507) 215-3817.`;
    }
    fitForm.reset();
  });
}

renderCatalog();

// ============================================================================
// REAL-TIME 3D WEBGL THROTTLE BODY & 3-STAGE COMBUSTION STACK ENGINE
// ============================================================================
const reducedQuery = matchMedia('(prefers-reduced-motion: reduce)');
let reduced = reducedQuery.matches;
let manualMotion = false;
let running = true;
let renderer, scene, camera, stackGroup, butterflyValve, coreLattice, coreLight, vortexParticles;
const pieces = [];
const rotors = [];
const state = {
  story: 0,
  hero: 0,
  bench: 0,
  throttleDeg: 38,
  ignition: 0,
  pointerX: 0,
  pointerY: 0
};
const smooth = { story: 0, throttleDeg: 38, ignition: 0 };
const palettes = {
  emerald: 0x00f58a,
  cyan: 0x38bdf8,
  amber: 0xffb800
};
const fieldColor = new THREE.Color(palettes.emerald);
const colorTarget = new THREE.Color(palettes.emerald);

const statusEl = document.getElementById('assembly-status');
const phaseEl = document.getElementById('phase-name');
const pctEl = document.getElementById('phase-percent');
const phaseBarEl = document.getElementById('phase-bar');
const chapterCopies = [...document.querySelectorAll('.chapter-card')];
const fitPoint = new THREE.Vector3();

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const range = (v, a, b) => {
  const x = clamp((v - a) / (b - a));
  return x * x * (3 - 2 * x);
};

function phoneComposition(open) {
  if (!stackGroup || !camera) return;
  let top = 88;
  let bottom = innerHeight - 64;
  for (const ch of chapterCopies) {
    if (Number(ch.style.opacity || getComputedStyle(ch).opacity) < 0.1) continue;
    const r = ch.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) {
      top = Math.max(top, r.bottom + 20);
    }
  }
  top = Math.min(top, bottom - 110);
  const available = Math.max(110, bottom - top);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  stackGroup.updateMatrixWorld(true);
  camera.updateMatrixWorld();
  for (let p = 0; p < pieces.length; p++) {
    const part = pieces[p];
    const radius = 1.45;
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      fitPoint.set(Math.cos(angle) * radius, Math.sin(angle) * radius, part.g.position.z);
      stackGroup.localToWorld(fitPoint);
      fitPoint.project(camera);
      const x = ((fitPoint.x + 1) * innerWidth) / 2;
      const y = ((1 - fitPoint.y) * innerHeight) / 2;
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }
  const fit = Math.min(1, available / Math.max(1, maxY - minY), (innerWidth * 0.92) / Math.max(1, maxX - minX));
  stackGroup.scale.multiplyScalar(fit);
  const centerY = (minY + maxY) / 2;
  const targetY = (top + bottom) / 2;
  const viewHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - stackGroup.position.z);
  stackGroup.position.y -= ((targetY - centerY) / innerHeight) * viewHeight;
}

function init3DScene() {
  const canvas = document.getElementById('vortex-canvas');
  if (!canvas) return;
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 768 ? 1.5 : 1.75));
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050908, 0.032);
  camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 9.2);

  scene.add(new THREE.HemisphereLight(0xd4fff0, 0x0b1612, 2.2));
  const key = new THREE.DirectionalLight(0xffffff, 4.5);
  key.position.set(-3, 5, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x00f58a, 3.8);
  rim.position.set(4, -2, -3);
  scene.add(rim);

  coreLight = new THREE.PointLight(palettes.emerald, 14, 9, 2);
  scene.add(coreLight);

  stackGroup = new THREE.Group();
  scene.add(stackGroup);

  const billetAlum = new THREE.MeshStandardMaterial({ color: 0xc8d4ce, roughness: 0.22, metalness: 0.92 });
  const darkAnodized = new THREE.MeshStandardMaterial({ color: 0x1a2622, roughness: 0.34, metalness: 0.88 });
  const brassButterfly = new THREE.MeshStandardMaterial({ color: 0xd99b4e, roughness: 0.26, metalness: 0.9 });
  const glowingWave = new THREE.MeshStandardMaterial({
    color: 0x00f58a,
    emissive: palettes.emerald,
    emissiveIntensity: 2.4,
    roughness: 0.25,
    metalness: 0.3
  });

  function addSection(z, spread, twist = 0) {
    const g = new THREE.Group();
    g.position.z = z;
    stackGroup.add(g);
    pieces.push({ g, z, spread, twist });
    return g;
  }

  // Stage 01: Front WAVE High-Pressure Bellmouth & V-Groove Contour Ring
  const stage1 = addSection(1.35, 2.9, 0.35);
  stage1.add(new THREE.Mesh(new THREE.TorusGeometry(1.32, 0.16, 18, 96), billetAlum));
  const waveRing = new THREE.Mesh(new THREE.TorusGeometry(1.12, 0.04, 14, 96), glowingWave);
  waveRing.position.z = 0.08;
  stage1.add(waveRing);

  // Machined WAVE V-groove fins around front bore
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.32), darkAnodized);
    fin.position.set(Math.cos(a) * 1.18, Math.sin(a) * 1.18, 0);
    fin.rotation.z = a + 0.25;
    stage1.add(fin);
  }

  // Butterfly Valve Assembly (Rotates with scroll & live slider)
  const valveSection = addSection(0.45, 1.15, -0.2);
  valveSection.add(new THREE.Mesh(new THREE.TorusGeometry(1.24, 0.09, 16, 84), darkAnodized));
  butterflyValve = new THREE.Group();
  valveSection.add(butterflyValve);

  const bladeDisk = new THREE.Mesh(new THREE.CylinderGeometry(1.08, 1.08, 0.05, 64), brassButterfly);
  bladeDisk.rotation.x = Math.PI / 2;
  butterflyValve.add(bladeDisk);

  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.5, 16), billetAlum);
  shaft.rotation.z = Math.PI / 2;
  butterflyValve.add(shaft);

  // V-Grooves on the Butterfly Trailing Edge
  for (let i = -3; i <= 3; i++) {
    const groove = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.26, 0.07), glowingWave);
    groove.position.set(i * 0.22, 0.68, 0);
    butterflyValve.add(groove);
  }

  // Stage 02: The Cyclone Helical Vortex Stator
  for (let s = 0; s < 3; s++) {
    const z = -0.2 - s * 0.48;
    const g = addSection(z, (s - 1) * -1.35, s % 2 === 0 ? 0.45 : -0.45);
    g.add(new THREE.Mesh(new THREE.TorusGeometry(1.28, 0.08, 14, 84), s % 2 ? darkAnodized : billetAlum));
    const rotor = new THREE.Group();
    g.add(rotor);
    rotors.push(rotor);
    for (let j = 0; j < 18; j++) {
      const a = (j / 18) * Math.PI * 2;
      const vane = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.34, 0.14), billetAlum);
      vane.position.set(Math.cos(a) * 0.95, Math.sin(a) * 0.95, 0);
      vane.rotation.z = a + 0.42;
      vane.rotation.x = 0.28;
      rotor.add(vane);
    }
  }

  // Stage 03: Mirror Port & Polish Venturi + Tribo-MAX Boron Lattice
  const stage3 = addSection(-1.55, -3.1, -0.4);
  stage3.add(new THREE.Mesh(new THREE.TorusGeometry(1.18, 0.15, 18, 96), billetAlum));
  const coreGroup = addSection(-0.35, 0, 0);
  coreLattice = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.48, 2),
    new THREE.MeshStandardMaterial({
      color: palettes.emerald,
      emissive: palettes.emerald,
      emissiveIntensity: 1.8,
      wireframe: true
    })
  );
  coreGroup.add(coreLattice);

  // Helical Airflow Vortex Particle Stream
  const count = innerWidth < 768 ? 360 : 720;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 24;
    const r = 0.35 + (i % 7) * 0.12;
    positions[i * 3] = Math.cos(angle) * r;
    positions[i * 3 + 1] = Math.sin(angle) * r;
    positions[i * 3 + 2] = ((i / count) - 0.5) * 6.5;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  vortexParticles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ color: palettes.emerald, size: 0.045, transparent: true, opacity: 0.78 })
  );
  stackGroup.add(vortexParticles);
}

function setupScrollTriggers() {
  if (!window.gsap || !window.ScrollTrigger) return;
  window.gsap.registerPlugin(window.ScrollTrigger);

  window.gsap.to(state, {
    hero: 1,
    ease: 'none',
    scrollTrigger: { trigger: '.hero-vortex', start: 'top top', end: 'bottom top', scrub: true }
  });

  window.gsap.to(state, {
    story: 1,
    ease: 'none',
    scrollTrigger: { trigger: '#combustion-3d-stage', start: 'top top', end: 'bottom bottom', scrub: 0.5 }
  });

  window.gsap.to(state, {
    bench: 1,
    ease: 'none',
    scrollTrigger: { trigger: '#vortex-bench', start: 'top bottom', end: 'top top', scrub: 0.6 }
  });

  const tl = window.gsap.timeline({
    scrollTrigger: { trigger: '#combustion-3d-stage', start: 'top top', end: 'bottom bottom', scrub: 0.5 }
  });
  tl.to('.chapter-one', { autoAlpha: 0, y: -45, duration: 0.1 }, 0.26)
    .fromTo('.chapter-two', { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 0.1 }, 0.31)
    .to('.chapter-two', { autoAlpha: 0, y: -45, duration: 0.1 }, 0.62)
    .fromTo('.chapter-three', { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 0.1 }, 0.67)
    .to({}, { duration: 0.22 }, 0.78);
}

function setupBenchControls() {
  document.querySelectorAll('.swatch').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach((b) => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      const cKey = btn.getAttribute('data-color');
      if (palettes[cKey]) {
        colorTarget.set(palettes[cKey]);
      }
    });
  });

  const slider = document.getElementById('throttle-slider');
  const angleOut = document.getElementById('throttle-angle-val');
  const vacOut = document.getElementById('readout-vacuum');
  const swirlOut = document.getElementById('readout-swirl');
  const hcOut = document.getElementById('readout-hc');

  if (slider) {
    slider.addEventListener('input', (e) => {
      const deg = Number(e.target.value);
      state.throttleDeg = deg;
      const mode = deg < 25 ? 'IDLE / LOW CRUISE' : deg < 65 ? 'PART-THROTTLE VORTEX' : 'WIDE-OPEN THROTTLE';
      if (angleOut) angleOut.textContent = `${deg}° (${mode})`;
      const vac = (22.8 - (deg / 90) * 6.4).toFixed(1);
      const swirl = (38 + (deg / 90) * 58).toFixed(1);
      if (vacOut) vacOut.textContent = `${vac} inHg`;
      if (swirlOut) swirlOut.textContent = `${swirl} m/s`;
      if (hcOut) hcOut.textContent = '1 PPM';
    });
  }

  const igniteBtn = document.getElementById('ignite-btn');
  const igniteStatus = document.getElementById('ignition-status');
  if (igniteBtn) {
    igniteBtn.addEventListener('click', () => {
      state.ignition = 1;
      if (igniteStatus) {
        igniteStatus.textContent = '⚡ Stoichiometric Vapor Flash Active — Complete Combustion Verified (1 PPM HC).';
      }
    });
  }

  const motionToggle = document.getElementById('motion-toggle');
  function setReducedState(val) {
    reduced = val;
    document.body.classList.toggle('reduced', reduced);
    if (motionToggle) {
      motionToggle.setAttribute('aria-pressed', String(reduced));
      motionToggle.textContent = reduced ? 'Enable motion' : 'Reduce motion';
    }
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }

  if (motionToggle) {
    motionToggle.addEventListener('click', () => {
      manualMotion = true;
      setReducedState(!reduced);
    });
  }
  reducedQuery.addEventListener('change', (e) => {
    if (!manualMotion) setReducedState(e.matches);
  });
  setReducedState(reduced);

  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType === 'mouse') {
        state.pointerX = e.clientX / innerWidth - 0.5;
        state.pointerY = e.clientY / innerHeight - 0.5;
      }
    },
    { passive: true }
  );

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(renderLoop);
  });

  window.addEventListener('resize', () => {
    if (!renderer || !camera) return;
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
}

let lastTime = 0;
function renderLoop(now) {
  if (!running || !renderer) return;
  const dt = Math.min((now - lastTime) / 1000 || 0.016, 0.05);
  lastTime = now;
  const t = now / 1000;
  const mobile = innerWidth < 768;

  const blend = 1 - Math.exp(-dt * 7);
  smooth.story += (state.story - smooth.story) * blend;
  smooth.throttleDeg += (state.throttleDeg - smooth.throttleDeg) * blend;
  smooth.ignition += (state.ignition - smooth.ignition) * blend;
  state.ignition = Math.max(0, state.ignition - dt * 0.6);
  fieldColor.lerp(colorTarget, blend);

  const p = smooth.story;
  const open = reduced ? 0.38 : range(p, 0.03, 0.44) * (1 - range(p, 0.68, 0.98));

  const baseScale = mobile ? 0.68 : 0.94;
  stackGroup.scale.setScalar(baseScale * (1 - open * 0.18));
  stackGroup.position.x = mobile ? 0 : 1.55 * (1 - state.bench * 0.6);
  stackGroup.position.y = mobile ? -1.1 : 0.08;
  stackGroup.position.z = -open * 1.4;

  stackGroup.rotation.x = 0.24 + open * 0.3;
  stackGroup.rotation.y = -0.52 + open * 0.85 + (reduced ? 0 : state.pointerX * 0.14);
  stackGroup.rotation.z = -0.18 + open * 0.35;

  for (let i = 0; i < pieces.length; i++) {
    const part = pieces[i];
    part.g.position.z = part.z + part.spread * open;
    part.g.rotation.z = part.twist * open;
  }

  if (butterflyValve) {
    const rad = (smooth.throttleDeg * Math.PI) / 180;
    butterflyValve.rotation.y = rad + open * 0.4;
  }

  if (mobile && !reduced) {
    phoneComposition(open);
  }

  const spinSpeed = reduced ? 0 : (0.35 + (smooth.throttleDeg / 90) * 1.4 + smooth.ignition * 2.5) * dt;
  for (let i = 0; i < rotors.length; i++) {
    rotors[i].rotation.z += spinSpeed * (i % 2 === 0 ? 1 : -1);
  }
  if (coreLattice) {
    coreLattice.rotation.y += spinSpeed * 0.8;
    coreLattice.material.color.copy(fieldColor);
    coreLattice.material.emissive.copy(fieldColor);
  }
  if (vortexParticles) {
    vortexParticles.rotation.z -= spinSpeed * 1.2;
    vortexParticles.material.color.copy(fieldColor);
  }
  if (coreLight) {
    coreLight.color.copy(fieldColor);
    coreLight.intensity = 10 + (smooth.throttleDeg / 90) * 10 + smooth.ignition * 28;
    coreLight.position.copy(stackGroup.position);
  }

  const pct = Math.round(p * 100);
  if (pctEl) pctEl.textContent = `${pct}%`;
  if (phaseBarEl) phaseBarEl.style.width = `${pct}%`;
  if (statusEl) {
    statusEl.textContent =
      p < 0.3 ? 'STAGE 01 · WAVE CONTOUR SEPARATING' : p < 0.66 ? 'STAGE 02 · CYCLONE VORTEX EXPOSED' : 'STAGE 03 · STOICHIOMETRIC CONVERGENCE';
  }
  if (phaseEl) {
    phaseEl.textContent = p < 0.3 ? 'STAGE 01 · THE WAVE™' : p < 0.66 ? 'STAGE 02 · THE CYCLONE™' : 'STAGE 03 · TRIBO-MAX™ STACK';
  }

  renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
}

try {
  init3DScene();
  setupScrollTriggers();
  setupBenchControls();
  requestAnimationFrame(renderLoop);
} catch (err) {
  document.body.classList.add('reduced');
  console.warn('WebGL fallback activated:', err);
}
