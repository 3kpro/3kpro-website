/* ==========================================================================
   GREEN AUTO TECHNOLOGY // 3KPRO "TOMORROW" SPATIAL MOTION & SCROLL ENGINE
   Smooth, subtle 3D scroll fly-ins on every box + high-impact showcase moments
   ========================================================================== */
(function () {
  if (window.__GAT_TOMORROW_MOTION__) return;
  window.__GAT_TOMORROW_MOTION__ = true;

  /* 1. IDENTIFY ACTIVE PREVIEW */
  const path = window.location.pathname || '';
  let previewId = 'hub';
  if (path.includes('preview-01')) previewId = '01';
  else if (path.includes('preview-02')) previewId = '02';
  else if (path.includes('preview-03')) previewId = '03';
  else if (path.includes('preview-04')) previewId = '04';
  else if (path.includes('preview-05')) previewId = '05';
  else if (path.includes('preview-06')) previewId = '06';
  document.body.setAttribute('data-gat-preview', previewId);

  // Ensure motion is LIVE by default so Windows OS reduced-motion flags don't silently freeze previews
  document.body.classList.remove('reduced', 'gat-motion-paused');
  let motionPaused = false;

  const isMobile = () => window.innerWidth <= 768;
  const finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* 2. INJECT TOP LASER SCROLL PROGRESS BEAM */
  const laserBar = document.createElement('div');
  laserBar.className = 'gat-scroll-laser';
  laserBar.setAttribute('aria-hidden', 'true');
  laserBar.innerHTML = '<div class="gat-scroll-laser-fill"></div>';
  document.body.appendChild(laserBar);

  /* 3. INJECT 3D HERO AMBIENT ATMOSPHERE */
  const heroTarget = document.querySelector(
    '.hero, .hero-atelier, .lab-hero, .wave-hero, .hero-vortex, .hero-heritage'
  );
  if (heroTarget && getComputedStyle(heroTarget).position === 'static') {
    heroTarget.style.position = 'relative';
  }
  if (heroTarget && !heroTarget.querySelector('.gat-hero-atmosphere')) {
    const atmos = document.createElement('div');
    atmos.className = 'gat-hero-atmosphere';
    atmos.setAttribute('aria-hidden', 'true');
    atmos.innerHTML = '<div class="gat-atmos-grid"></div><div class="gat-atmos-orb"></div>';
    heroTarget.insertBefore(atmos, heroTarget.firstChild);
  }

  /* 4. INJECT SECTION LASER HORIZON DIVIDERS */
  const laserSections = document.querySelectorAll(
    'section:not(.hero):not(.hero-atelier):not(.lab-hero):not(.wave-hero):not(.hero-vortex):not(.hero-heritage):not(.journey-3d):not(.intake-scroll-section)'
  );
  const sectionLasers = [];
  laserSections.forEach((sec) => {
    if (sec.querySelector('.gat-section-laser')) return;
    const line = document.createElement('div');
    line.className = 'gat-section-laser';
    line.setAttribute('aria-hidden', 'true');
    sec.insertBefore(line, sec.firstChild);
    sectionLasers.push(line);
  });

  /* 5. SCROLL PHYSICS & POINTER TRACKING */
  let lastScrollY = window.scrollY || 0;
  let smoothScrollY = lastScrollY;
  let scrollDir = 1; // 1 = scrolling down, -1 = scrolling up
  let rafPending = false;

  function updateScrollTelemetry() {
    rafPending = false;
    const currentY = window.scrollY || window.pageYOffset || 0;
    if (Math.abs(currentY - lastScrollY) > 2) {
      scrollDir = currentY >= lastScrollY ? 1 : -1;
      lastScrollY = currentY;
    }
    smoothScrollY += (currentY - smoothScrollY) * 0.22;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, currentY / maxScroll));
    document.documentElement.style.setProperty('--gat-scroll-progress', progress.toFixed(4));

    if (!motionPaused) {
      const heroShift = Math.min(120, currentY * 0.16);
      document.documentElement.style.setProperty('--gat-hero-shift', `${heroShift.toFixed(1)}px`);
    }

    if (Math.abs(currentY - smoothScrollY) > 0.5) {
      requestAnimationFrame(updateScrollTelemetry);
    }
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(updateScrollTelemetry);
      }
    },
    { passive: true }
  );
  updateScrollTelemetry();

  if (finePointer) {
    window.addEventListener(
      'pointermove',
      (e) => {
        if (motionPaused) return;
        const px = (e.clientX / Math.max(1, window.innerWidth)).toFixed(3);
        const py = (e.clientY / Math.max(1, window.innerHeight)).toFixed(3);
        document.documentElement.style.setProperty('--gat-pointer-x', px);
        document.documentElement.style.setProperty('--gat-pointer-y', py);
      },
      { passive: true }
    );
  }

  /* 6. SELECTOR REGISTRY: EVERY BOX & HEADER ACROSS HUB + PREVIEWS 01–06 */
  const SUBTLE_SELECTORS = [
    // Hub
    '.wrap > .eyebrow',
    '.wrap > h1',
    '.wrap > .lead',
    '.stats-bar .stat-cell',
    // Preview 01 (GAT-OS)
    '.hero-status',
    '.hero .h1',
    '.hero-sub',
    '.hero-pills span',
    '.hero-ctas .btn',
    '.hero-visual-bar > div',
    '.rack .mod',
    '.sec-head',
    '.stage-card',
    '.catalog-controls',
    '.prod-card',
    '.tribo-stat',
    '.dossier .row',
    '.video-card',
    '.plan-card',
    '.reward-pill',
    '#plans article',
    '.inquiry-grid > div:first-child',
    // Preview 02 (Apex Atelier)
    '.hero-atelier .eyebrow-pill',
    '.hero-title',
    '.hero-lede',
    '.hero-split > div:first-child .btn-aero',
    '.platform-pills .plat-btn',
    '.plat-rec-box',
    '.metric-strip .m-tile',
    '.section-top',
    '.sim-metric',
    '.trio-card',
    '.filter-bar',
    '.show-card',
    '.tribo-grid > div:first-child',
    '.f-bar-row',
    '.dosage-calc > div > div',
    '#plans > div > div',
    '.vid-card',
    // Preview 03 (Precision Lab)
    '.hero-left .spec-code-bar',
    '.lab-h1',
    '.hero-left > p',
    '.hero-left .btn-lab',
    '.quick-paths .q-path',
    '.lab-sec-head',
    '#how-wave-works .bp-card',
    '.slider-row',
    '.blueprint-grid .bp-card',
    '.lab-filters',
    '.m-card',
    '#mobile-alaska .bp-card',
    '.lv-card',
    // Preview 04 (WAVE Flagship)
    '.hero-kicker',
    '.hero-subtitle',
    '.hero-desc',
    '.hero-ctas > *',
    '.feature-pillar',
    '.science-grid > div:first-child',
    '.callout-tag',
    '.blue-band-item',
    '.section-header-center',
    '.result-story-card',
    '.product-card',
    '.step-card',
    '.blog-card',
    // Preview 05 (3D Vortex)
    '.hero-badges span',
    '.hero-cta-row .btn',
    '.hero-stat-strip > div',
    '.stage-hud-top',
    '.stage-hud-bottom',
    '#bench-copy-box',
    '.swatch',
    '.telemetry-cell',
    '.section-head',
    '.feature-box',
    '.slider-item',
    '.evidence-card',
    '.catalog-bar',
    '.step-box',
    // Preview 06 (Heritage Fleet)
    '.hero-ledger-top',
    '.hero-overline',
    '.hero-h1',
    '.hero-summary',
    '.trust-pill',
    '.showcase-metrics > div',
    '.haul-step-card',
    '.gauge-box',
    '.sec-header',
    '.preset-btn',
    '.slider-group-row',
    '.editorial-card',
    '.heritage-card',
    '.store-controls'
  ];

  // "Unless We Need to Impress" — Showcase, Hero Hardware, Simulators, Proof Charts & Flagship Cards
  const IMPRESS_SELECTORS = [
    // Hub 6 Preview Launch Cards
    '.grid .card',
    // Hero Hardware Showcases
    '.hero-visual',
    '.fitment-console',
    '.hero-right',
    '#hero-copy-box',
    '.hero-telemetry-card',
    '.hero-showcase-card',
    // Flagship Banners, Simulators & CFD Video Studios
    '.stack-banner',
    '.flow-diagram-box',
    '.sim-box',
    '#how-wave-works > div:last-child > div:last-child',
    '.roi-panel',
    '.roi-results',
    '.science-visual-box',
    '.solution-banner-card',
    '#console-panel',
    '.video-console',
    '.roi-output-card',
    '.haul-visualizer-panel',
    '.fleet-summary-box',
    '.mp4-console',
    // Empirical Lab Proof Cards (Dynojet, Oscilloscope, ASM)
    '.proof-card',
    '.bento-item',
    '.ev-card',
    '.lab-card',
    // High-Impact Conversion, Tribo-MAX & Inquiry Boxes
    '.tribo-panel',
    '.dosage-calc',
    '.svc-box',
    '#mobile-alaska > div:first-child > div',
    '#plans',
    '.loyalty-box',
    '#tribomax > div:first-child',
    '.gat-form',
    '.form-card',
    '.lab-form-wrap',
    '.fitment-form-card',
    '.form-panel'
  ];

  const activeAnimations = new WeakMap();
  const registeredBoxes = new Set();
  let batchQueue = [];
  let batchTimer = null;

  /* 7. COMPUTE PREVIEW-SPECIFIC 3D FLY-IN VECTOR */
  function getFlyInKeyframes(el, isImpress, siblingIdx) {
    const mobile = isMobile();
    const dir = scrollDir >= 0 ? 1 : -1;

    // Subtle vs Impress travel magnitudes
    const baseY = isImpress ? (mobile ? 32 : 46) : mobile ? 22 : 30;
    const dy = baseY * dir;

    // Alternating lateral slipstream on desktop multi-column items
    let dx = 0;
    if (!mobile) {
      const colMod = siblingIdx % 3;
      if (isImpress) {
        dx = siblingIdx % 2 === 0 ? -24 : 24;
      } else if (previewId === '02' || previewId === '05') {
        dx = colMod === 0 ? -18 : colMod === 2 ? 18 : 0;
      } else if (previewId === '01' || previewId === '04' || previewId === '06' || previewId === 'hub') {
        dx = colMod === 0 ? -12 : colMod === 2 ? 12 : 0;
      }
    }

    const dz = isImpress ? (mobile ? -35 : -72) : mobile ? -16 : -32;
    const rx = (isImpress ? 8.5 : 4.5) * dir;
    const ry = !mobile && dx !== 0 ? (dx < 0 ? 4 : -4) : 0;
    const scaleStart = isImpress ? 0.945 : 0.98;

    return [
      {
        opacity: 0,
        transform: `perspective(1150px) translate3d(${dx}px, ${dy}px, ${dz}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scaleStart})`,
        filter: isImpress ? 'blur(4px) brightness(1.25)' : 'blur(2px)'
      },
      {
        opacity: 1,
        transform: 'perspective(1150px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)',
        filter: 'blur(0px) brightness(1)'
      }
    ];
  }

  function triggerBoxFlyIn(el, staggerIndex = 0, forceImpress = false) {
    if (!el || motionPaused) {
      if (el) el.classList.remove('gat-pending');
      return;
    }

    const isImpress = forceImpress || el.classList.contains('gat-impress-box');
    const prevAnim = activeAnimations.get(el);
    if (prevAnim) {
      try {
        prevAnim.cancel();
      } catch (e) {}
    }

    el.classList.remove('gat-pending');
    el.classList.add('gat-revealed');

    if (isImpress) {
      el.classList.remove('gat-sheen-fire');
      void el.offsetWidth;
      el.classList.add('gat-sheen-fire');
    }

    if (typeof el.animate !== 'function') return;

    const delay = Math.min(staggerIndex * (isImpress ? 75 : 52), 280);
    const duration = isImpress ? 860 : 660;
    const easing = isImpress
      ? 'cubic-bezier(0.16, 1, 0.3, 1)'
      : 'cubic-bezier(0.22, 1, 0.36, 1)';

    // Lock element against observer reset while animating + cooldown buffer
    el._gatLockUntil = performance.now() + delay + duration + 400;

    const keyframes = getFlyInKeyframes(el, isImpress, staggerIndex);
    const anim = el.animate(keyframes, {
      duration,
      delay,
      easing,
      fill: 'backwards'
    });

    activeAnimations.set(el, anim);
    anim.onfinish = () => {
      activeAnimations.delete(el);
    };
  }

  function flushBatchQueue() {
    batchTimer = null;
    if (!batchQueue.length) return;
    // Sort top-to-bottom, left-to-right so stagger order matches visual reading order
    const items = batchQueue.splice(0, batchQueue.length);
    items.sort((a, b) => {
      const ra = a.getBoundingClientRect();
      const rb = b.getBoundingClientRect();
      if (Math.abs(ra.top - rb.top) > 28) return ra.top - rb.top;
      return ra.left - rb.left;
    });
    items.forEach((el, idx) => {
      triggerBoxFlyIn(el, idx);
    });
  }

  function enqueueFlyIn(el) {
    el._gatLockUntil = performance.now() + 1200;
    if (!batchQueue.includes(el)) {
      batchQueue.push(el);
    }
    if (!batchTimer) {
      batchTimer = requestAnimationFrame(flushBatchQueue);
    }
  }

  /* 8. INTERSECTION OBSERVER (BI-DIRECTIONAL SCROLL RE-ENTRY WITH EDGE HYSTERESIS) */
  const boxObserver =
    'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries) => {
            const now = performance.now();
            entries.forEach((entry) => {
              const el = entry.target;
              if (entry.isIntersecting) {
                if (!el.classList.contains('gat-revealed')) {
                  enqueueFlyIn(el);
                }
              } else {
                // Never reset while queued, animating, or within cooldown window
                // (prevents translateY(+46px) initial keyframe from self-cancelling at viewport bottom edge)
                if (
                  activeAnimations.has(el) ||
                  batchQueue.includes(el) ||
                  now < (el._gatLockUntil || 0)
                ) {
                  return;
                }
                // Only reset once element is well off-screen (>140px past viewport edge, far beyond 46px travel)
                const rect = entry.boundingClientRect;
                if (rect.top > window.innerHeight + 140 || rect.bottom < -140) {
                  el.classList.remove('gat-revealed', 'gat-sheen-fire');
                  if (!motionPaused) {
                    el.classList.add('gat-pending');
                  }
                }
              }
            });
          },
          {
            threshold: 0.04,
            rootMargin: '0px 0px -28px 0px'
          }
        )
      : null;

  // Section laser observer
  if ('IntersectionObserver' in window && sectionLasers.length) {
    const laserIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('gat-laser-active', entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    sectionLasers.forEach((line) => laserIo.observe(line));
  }

  /* 9. INTERACTIVE SPOTLIGHT & 3D TILT BINDING */
  function attachInteractiveSurface(el) {
    if (!finePointer || el.dataset.gatSurfaceBound === '1') return;
    el.dataset.gatSurfaceBound = '1';

    // Only apply 3D hover tilt to cards that don't house interactive forms/sliders/videos
    const hasFormOrVideo = Boolean(
      el.matches('form, .gat-form, .form-card, .lab-form-wrap, .fitment-form-card, .form-panel, .roi-panel') ||
        el.querySelector('input[type="range"], form, video, iframe')
    );
    if (!hasFormOrVideo) {
      el.classList.add('gat-tilt-card');
    }

    el.addEventListener(
      'pointermove',
      (e) => {
        if (motionPaused) return;
        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--spot-x', `${x.toFixed(0)}px`);
        el.style.setProperty('--spot-y', `${y.toFixed(0)}px`);

        if (!hasFormOrVideo) {
          const nx = x / rect.width - 0.5;
          const ny = y / rect.height - 0.5;
          const maxTilt = el.classList.contains('gat-impress-box') ? 3.8 : 2.6;
          el.style.setProperty('--tilt-x', `${(-ny * maxTilt).toFixed(2)}deg`);
          el.style.setProperty('--tilt-y', `${(nx * maxTilt).toFixed(2)}deg`);
        }
      },
      { passive: true }
    );

    el.addEventListener(
      'pointerleave',
      () => {
        el.style.setProperty('--tilt-x', '0deg');
        el.style.setProperty('--tilt-y', '0deg');
      },
      { passive: true }
    );
  }

  /* 10. REGISTER ALL BOXES & DYNAMICALLY RENDERED CATALOG / VIDEO CARDS */
  function registerElements( animateImmediatelyIfVisible = false ) {
    const impressSet = new Set();
    document.querySelectorAll(IMPRESS_SELECTORS.join(', ')).forEach((el) => {
      impressSet.add(el);
    });

    const allSelector = [...IMPRESS_SELECTORS, ...SUBTLE_SELECTORS].join(', ');
    const candidates = document.querySelectorAll(allSelector);

    const newlyVisible = [];

    candidates.forEach((el) => {
      // Neverhijack sticky 3D chapter cards in Preview 05 or hidden modals
      if (
        el.classList.contains('chapter-card') ||
        el.closest('.modal-box, .aero-modal, .lab-modal, .modal-backdrop, .op-drawer, .preview-ribbon')
      ) {
        return;
      }

      const isImpress = impressSet.has(el);
      el.classList.add('gat-box');
      if (isImpress) el.classList.add('gat-impress-box');

      attachInteractiveSurface(el);

      if (!registeredBoxes.has(el)) {
        registeredBoxes.add(el);
        const rect = el.getBoundingClientRect();
        const inInitialViewport = rect.top < window.innerHeight * 0.94 && rect.bottom > 0;

        if (inInitialViewport && animateImmediatelyIfVisible) {
          newlyVisible.push(el);
        } else if (!inInitialViewport && !motionPaused) {
          el.classList.add('gat-pending');
        }

        if (boxObserver) {
          boxObserver.observe(el);
        }
      }
    });

    if (newlyVisible.length) {
      newlyVisible.forEach((el, idx) => {
        triggerBoxFlyIn(el, idx);
      });
    }
  }

  registerElements(true);

  /* 11. LIVE NUMERICAL COUNTER ROLL-UP ENGINE ACROSS ALL 6 PREVIEWS + HUB */
  const counterElements = document.querySelectorAll(
    '.stat-val, .metric-strip .m-tile strong, .hero-right strong, .hero-stat-strip strong, .showcase-metrics strong, .tribo-stat strong'
  );
  if ('IntersectionObserver' in window && counterElements.length) {
    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || motionPaused) return;
          const el = entry.target;
          if (el.dataset.gatCounted === '1') return;
          el.dataset.gatCounted = '1';

          const rawText = (el.textContent || '').trim();
          // Match leading or signed number e.g. "10,000+", "+38% MPG", "0.06 μ", "+9.52 HP", "6 Designs"
          const m = rawText.match(/^([+]?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
          if (!m) return;
          const prefix = m[1] || '';
          const numStr = m[2].replace(/,/g, '');
          const suffix = m[3] || '';
          const targetVal = parseFloat(numStr);
          if (isNaN(targetVal) || targetVal <= 0) return;

          const hasComma = m[2].includes(',');
          const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
          const duration = 1150;
          const t0 = performance.now();

          function tick(now) {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const curr = targetVal * eased;
            let formatted = decimals > 0 ? curr.toFixed(decimals) : String(Math.round(curr));
            if (hasComma && decimals === 0) {
              formatted = Math.round(curr).toLocaleString();
            }
            el.textContent = `${prefix}${formatted}${suffix}`;
            if (p < 1) {
              requestAnimationFrame(tick);
            } else {
              el.textContent = rawText;
            }
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 }
    );
    counterElements.forEach((c) => counterIo.observe(c));
  }

  /* 12. PREVIEW 02 FRICTION BAR DYNAMIC WIDTH ANIMATION */
  if (previewId === '02' && 'IntersectionObserver' in window) {
    const fills = document.querySelectorAll('.friction-bars .f-fill');
    fills.forEach((f) => {
      const targetW = f.style.width || '50%';
      f.dataset.targetWidth = targetW;
      f.style.width = '0%';
    });
    const fillIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const f = entry.target;
            f.style.width = f.dataset.targetWidth || '50%';
          } else if (entry.boundingClientRect.top > window.innerHeight) {
            entry.target.style.width = '0%';
          }
        });
      },
      { threshold: 0.25 }
    );
    fills.forEach((f) => fillIo.observe(f));
  }

  /* 13. MUTATION OBSERVER FOR DYNAMICALLY FILTERED PRODUCT / VIDEO GRIDS */
  const dynamicContainers = document.querySelectorAll(
    '#catalog-grid, #video-grid, #showroom-grid, #vid-grid, #matrix-grid, #lab-video-grid, #catalogGrid, #videoCardsContainer, #blogArticlesGrid'
  );
  if ('MutationObserver' in window && dynamicContainers.length) {
    const mo = new MutationObserver((mutations) => {
      let addedNodes = [];
      mutations.forEach((m) => {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) addedNodes.push(n);
        });
      });
      if (addedNodes.length) {
        registerElements(false);
        // Animate the newly rendered cards in viewport with a sleek stagger
        addedNodes.slice(0, 12).forEach((node, idx) => {
          const rect = node.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            triggerBoxFlyIn(node, idx);
          }
        });
      }
    });
    dynamicContainers.forEach((c) => mo.observe(c, { childList: true }));
  }

  /* 14. INTERACTIVE TAB & SIMULATOR CHOREOGRAPHY HOOKS */
  document.addEventListener('click', (e) => {
    if (motionPaused) return;
    const btn = e.target.closest(
      '.plat-btn, .sim-btn, [data-wave-view], .sci-tab, .mp4-tab, .preset-btn, #swapHeroVisualBtn, #themeToggleBtn, #theme-toggle'
    );
    if (!btn) return;

    if (btn.matches('.plat-btn')) {
      const box = document.querySelector('.plat-rec-box');
      if (box) triggerBoxFlyIn(box, 0, true);
    } else if (btn.matches('.sim-btn')) {
      const simBox = document.querySelector('.sim-box');
      if (simBox) triggerBoxFlyIn(simBox, 0, true);
      document.querySelectorAll('.sim-metric').forEach((m, i) => triggerBoxFlyIn(m, i + 1));
    } else if (btn.matches('[data-wave-view]')) {
      const stage = document.getElementById('lab-wave-stage');
      if (stage) triggerBoxFlyIn(stage, 0, true);
    } else if (btn.matches('.sci-tab')) {
      const box = document.querySelector('.science-visual-box, .video-console');
      if (box) triggerBoxFlyIn(box, 0, true);
    } else if (btn.matches('.mp4-tab')) {
      const box = document.querySelector('.mp4-console');
      if (box) triggerBoxFlyIn(box, 0, true);
    } else if (btn.matches('.preset-btn')) {
      const summary = document.querySelector('.fleet-summary-box');
      if (summary) triggerBoxFlyIn(summary, 0, true);
    } else if (btn.matches('#swapHeroVisualBtn')) {
      const card = document.querySelector('.hero-showcase-card');
      if (card) triggerBoxFlyIn(card, 0, true);
    } else if (btn.matches('#themeToggleBtn, #theme-toggle')) {
      replayVisibleViewport();
    }
  });

  // Re-trigger hero choreography when Preview 01 ECU boot sequence finishes
  window.addEventListener('gat:boot-complete', () => {
    replayVisibleViewport();
  });

  /* 15. REPLAY VISIBLE VIEWPORT & MOTION HUD PILL */
  function replayVisibleViewport() {
    if (motionPaused) {
      setMotionPaused(false);
    }
    const visible = [];
    registeredBoxes.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.96 && rect.bottom > 20) {
        visible.push(el);
      } else if (rect.top >= window.innerHeight * 0.96) {
        el.classList.remove('gat-revealed', 'gat-sheen-fire');
        el.classList.add('gat-pending');
      }
    });
    visible.sort((a, b) => {
      const ra = a.getBoundingClientRect();
      const rb = b.getBoundingClientRect();
      if (Math.abs(ra.top - rb.top) > 28) return ra.top - rb.top;
      return ra.left - rb.left;
    });
    visible.forEach((el, idx) => {
      triggerBoxFlyIn(el, idx);
    });
  }

  function setMotionPaused(paused) {
    motionPaused = Boolean(paused);
    document.body.classList.toggle('gat-motion-paused', motionPaused);
    if (motionPaused) {
      registeredBoxes.forEach((el) => {
        el.classList.remove('gat-pending');
        const anim = activeAnimations.get(el);
        if (anim) {
          try {
            anim.cancel();
          } catch (e) {}
        }
      });
    }
    const toggleBtn = document.getElementById('gat-hud-toggle-btn');
    if (toggleBtn) {
      toggleBtn.textContent = motionPaused ? '▶ Resume' : '⏸ Pause';
      toggleBtn.setAttribute('aria-pressed', String(motionPaused));
    }
  }

  const hud = document.createElement('div');
  hud.className = 'gat-motion-hud';
  hud.setAttribute('role', 'region');
  hud.setAttribute('aria-label', 'Motion controls');
  hud.innerHTML = `
    <span class="gat-hud-dot" aria-hidden="true"></span>
    <button type="button" class="gat-hud-replay" id="gat-hud-replay-btn" title="Replay 3D fly-in animations in current view">↻ Replay Motion</button>
    <button type="button" id="gat-hud-toggle-btn" aria-pressed="false" title="Pause or resume scroll animations">⏸ Pause</button>
  `;
  document.body.appendChild(hud);

  const replayBtn = document.getElementById('gat-hud-replay-btn');
  const toggleBtn = document.getElementById('gat-hud-toggle-btn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      replayVisibleViewport();
    });
  }
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setMotionPaused(!motionPaused);
    });
  }

  // Sync with Preview 05 (#motion-toggle) & Preview 06 (#motionToggleBtn) header buttons if clicked
  const headerMotionBtn = document.getElementById('motion-toggle') || document.getElementById('motionToggleBtn');
  if (headerMotionBtn) {
    headerMotionBtn.addEventListener('click', () => {
      setTimeout(() => {
        const isReduced = document.body.classList.contains('reduced');
        setMotionPaused(isReduced);
      }, 10);
    });
  }
})();
