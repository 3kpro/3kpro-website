'use client'

/**
 * Shared OPERATOR design-system CSS (amber mission-control theme).
 * Extracted from the homepage redesign (app/page.tsx, 2026-07-06) so
 * every sub-page can render the same look without copy-pasting the
 * full style block. Render this once per page (inside a nav/footer
 * component is fine — a <style> tag applies globally regardless of
 * where it sits in the DOM).
 *
 * All rules are scoped under .op so they can never leak onto pages
 * that don't opt in.
 */
export default function OperatorStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62.5..125,400..900&family=JetBrains+Mono:wght@400;500;700&display=swap');

      .op{
        --bg:#0c0b09; --panel:#12110e; --panel2:#171512; --ink:#f3efe6; --dim:rgba(243,239,230,.56);
        --faint:rgba(243,239,230,.3); --line:rgba(243,239,230,.1); --line2:rgba(243,239,230,.06);
        --amber:#ffab2e; --amber-hot:#ff7a1a; --amber-dim:rgba(255,171,46,.12); --ok:#57d97c;
        --disp:'Archivo',system-ui,sans-serif; --sans:'Archivo',system-ui,sans-serif; --mono:'JetBrains Mono',monospace;
        background:var(--bg); color:var(--ink); font-family:var(--sans);
        min-height:100vh; overflow-x:hidden; -webkit-font-smoothing:antialiased;
      }
      .op ::selection{background:var(--amber);color:#0c0b09}
      .op .disp{font-family:var(--disp);font-stretch:118%}

      /* ---- nav ---- */
      .op .topnav{position:sticky;top:0;left:0;right:0;z-index:60;display:grid;grid-template-columns:auto 1fr auto auto;gap:26px;align-items:center;padding:0 clamp(18px,3.5vw,40px);height:66px;background:rgba(12,11,9,.86);backdrop-filter:blur(16px);border-bottom:1px solid var(--line)}
      .op .logo{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:16px;letter-spacing:.08em;color:var(--ink);text-decoration:none;display:flex;align-items:center;gap:12px}
      .op .logo .sq{width:12px;height:12px;background:var(--amber);box-shadow:0 0 16px rgba(255,171,46,.7);animation:opBlinkSq 2.4s ease-in-out infinite}
      @keyframes opBlinkSq{0%,100%{opacity:1}50%{opacity:.45}}
      .op .nav-links{display:flex;gap:30px;justify-content:center}
      .op .nav-links a{color:var(--dim);text-decoration:none;font-family:var(--mono);font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;transition:.25s}
      .op .nav-links a:hover,.op .nav-links a.active{color:var(--amber)}
      .op .nav-clock{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;color:var(--faint);white-space:nowrap}
      .op .nav-clock b{color:var(--amber);font-weight:500}
      .op .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--amber);color:#0c0b09;font-family:var(--mono);font-weight:700;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;padding:14px 26px;text-decoration:none;border:1px solid var(--amber);cursor:pointer;transition:.3s;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}
      .op .btn:hover{background:var(--amber-hot);border-color:var(--amber-hot);box-shadow:0 0 34px rgba(255,122,26,.4)}
      .op .btn.ghost{background:transparent;color:var(--ink);border-color:rgba(243,239,230,.24)}
      .op .btn.ghost:hover{border-color:var(--amber);color:var(--amber);box-shadow:0 0 24px rgba(255,171,46,.15);background:transparent}
      .op .nav-cta{padding:10px 18px;font-size:10.5px}
      @media(max-width:960px){.op .nav-links,.op .nav-clock{display:none}.op .topnav{grid-template-columns:1fr auto}}

      /* ---- page header (sub-page hero, lighter than the homepage boot hero) ---- */
      .op .pghead{position:relative;padding:78px clamp(18px,4.5vw,56px) 54px;max-width:1360px;margin:0 auto}
      .op .pghead .back{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim);text-decoration:none;border:1px solid var(--line);padding:9px 16px;margin-bottom:30px;transition:.25s}
      .op .pghead .back:hover{color:var(--amber);border-color:rgba(255,171,46,.4)}
      .op .pghead .eyebrow{font-family:var(--mono);font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--amber);display:flex;align-items:center;gap:10px}
      .op .pghead .eyebrow::before{content:"";width:8px;height:8px;background:var(--ok);border-radius:99px;box-shadow:0 0 12px var(--ok)}
      .op .pghead h1{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:clamp(2.4rem,7vw,5.6rem);line-height:.98;letter-spacing:-.01em;text-transform:uppercase;margin:26px 0 0}
      .op .pghead h1 .out{color:transparent;-webkit-text-stroke:1.5px rgba(243,239,230,.85)}
      .op .pghead h1 .amb{color:var(--amber);text-shadow:0 0 60px rgba(255,171,46,.35)}
      .op .pghead p{color:var(--dim);font-size:clamp(14.5px,1.4vw,17px);line-height:1.8;max-width:640px;margin-top:26px}
      .op .pghead .stat{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:clamp(2.4rem,4.2vw,4rem);color:var(--ink);letter-spacing:-.02em}
      .op .pghead .stat .u{color:var(--amber)}

      /* ---- generic sections ---- */
      .op .wrap{max-width:1360px;margin:0 auto;padding:clamp(56px,8vh,110px) clamp(18px,4.5vw,56px)}
      .op .wrap.tight{padding-top:0}
      .op .sec-head{display:flex;align-items:center;gap:22px;margin-bottom:56px;flex-wrap:wrap}
      .op .tagchip{font-family:var(--mono);font-size:10px;letter-spacing:.26em;text-transform:uppercase;color:#0c0b09;background:var(--amber);padding:7px 14px;font-weight:700}
      .op .h2{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:clamp(1.9rem,4.6vw,3.6rem);letter-spacing:-.005em;text-transform:uppercase;line-height:1.02;margin:0}
      .op .h2 .out{color:transparent;-webkit-text-stroke:1.2px rgba(243,239,230,.7)}
      .op .h2 .amb{color:var(--amber)}
      .op .lede{color:var(--dim);font-size:15.5px;line-height:1.8;max-width:560px}
      .op .rev{opacity:0;transform:translateY(30px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}
      .op .rev.in{opacity:1;transform:none}

      /* ---- dossier rows (used for "problem / approach / fit" style copy) ---- */
      .op .dossier{border:1px solid var(--line)}
      .op .dossier .row{display:grid;grid-template-columns:120px 1fr 1.3fr;gap:30px;padding:38px clamp(20px,3vw,40px);border-bottom:1px solid var(--line);transition:.3s;background:var(--panel)}
      .op .dossier .row:last-child{border-bottom:none}
      .op .dossier .row:hover{background:var(--panel2)}
      .op .dossier .id{font-family:var(--mono);font-size:11px;color:var(--amber);letter-spacing:.16em}
      .op .dossier h3{font-family:var(--sans);font-weight:700;font-size:clamp(1.1rem,2vw,1.4rem);letter-spacing:.01em;margin:0}
      .op .dossier p{color:var(--dim);font-size:14px;line-height:1.75;margin:0}
      @media(max-width:820px){.op .dossier .row{grid-template-columns:1fr;gap:12px}}

      /* ---- service / feature card grid ---- */
      .op .svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
      .op .svc-grid.cols-3{grid-template-columns:repeat(3,1fr)}
      .op .svc{border:1px solid var(--line);background:var(--bg);padding:38px 34px;text-decoration:none;color:inherit;position:relative;transition:.35s;overflow:hidden;display:block;clip-path:polygon(0 0,calc(100% - 22px) 0,100% 22px,100% 100%,22px 100%,0 calc(100% - 22px))}
      .op .svc::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,var(--amber-dim),transparent 55%);opacity:0;transition:.4s}
      .op .svc:hover::after{opacity:1}
      .op .svc:hover{border-color:rgba(255,171,46,.4)}
      .op .svc .top{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:1}
      .op .svc .num{font-family:var(--mono);font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--amber)}
      .op .svc .st{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;color:var(--ok);display:flex;align-items:center;gap:8px}
      .op .svc .st::before{content:"";width:6px;height:6px;background:var(--ok);border-radius:99px;box-shadow:0 0 8px var(--ok)}
      .op .svc h3{font-family:var(--disp);font-stretch:118%;font-weight:700;font-size:clamp(1.2rem,2.2vw,1.6rem);margin:24px 0 14px;text-transform:uppercase;letter-spacing:.01em;position:relative;z-index:1}
      .op .svc p{color:var(--dim);font-size:14px;line-height:1.75;position:relative;z-index:1;margin:0}
      .op .svc .pts{display:flex;gap:8px;margin-top:22px;flex-wrap:wrap;position:relative;z-index:1}
      .op .svc .pts i{font-style:normal;font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--dim);border:1px solid var(--line);padding:6px 12px;background:rgba(0,0,0,.25)}
      .op .svc .go{margin-top:26px;display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--ink);position:relative;z-index:1}
      .op .svc .go::after{content:"↗";color:var(--amber);transition:.3s}
      .op .svc:hover .go::after{transform:translate(4px,-4px)}
      @media(max-width:860px){.op .svc-grid,.op .svc-grid.cols-3{grid-template-columns:1fr}}

      /* ---- product / marketplace card grid ---- */
      .op .prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
      .op .prod{border:1px solid var(--line);background:var(--panel);text-decoration:none;color:inherit;transition:.35s;position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%}
      .op .prod .scr{height:110px;border-bottom:1px solid var(--line);position:relative;background:
        radial-gradient(circle at 30% 60%,rgba(255,171,46,.16),transparent 55%),
        repeating-linear-gradient(90deg,transparent 0 19px,var(--line2) 19px 20px),
        repeating-linear-gradient(0deg,transparent 0 19px,var(--line2) 19px 20px)}
      .op .prod .scr b{position:absolute;left:22px;bottom:16px;font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:32px;color:var(--amber);text-shadow:0 0 30px rgba(255,171,46,.5)}
      .op .prod .badge{position:absolute;top:14px;right:14px;font-family:var(--mono);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--amber);border:1px solid rgba(255,171,46,.35);padding:5px 10px;background:rgba(12,11,9,.7)}
      .op .prod .body{padding:26px 26px 30px;flex:1;display:flex;flex-direction:column}
      .op .prod h3{font-family:var(--sans);font-weight:700;font-size:1.25rem;margin:0}
      .op .prod .tag{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint);margin-top:6px}
      .op .prod p{color:var(--dim);font-size:13.5px;line-height:1.75;margin:12px 0 0;flex:1}
      .op .prod .feat-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}
      .op .prod .feat-list span{font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;color:var(--dim);display:flex;align-items:center;gap:8px}
      .op .prod .feat-list span::before{content:"";width:4px;height:4px;background:var(--amber);flex:none}
      .op .prod .price-row{margin-top:22px;padding-top:18px;border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-between}
      .op .prod .price-row .pv{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:1.15rem;color:var(--ink)}
      .op .prod .go{margin-top:22px;font-family:var(--mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--ink)}
      .op .prod:hover{transform:translateY(-5px);border-color:rgba(255,171,46,.4);box-shadow:0 24px 50px -24px rgba(0,0,0,.8)}
      @media(max-width:860px){.op .prod-grid{grid-template-columns:1fr}}

      /* ---- pricing / payment card grid ---- */
      .op .price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
      .op .price{border:1px solid var(--line);background:var(--bg);padding:38px 32px;position:relative;transition:.35s;display:flex;flex-direction:column}
      .op .price:hover{border-color:rgba(243,239,230,.3);transform:translateY(-4px)}
      .op .price.feat{border-color:rgba(255,171,46,.5);background:linear-gradient(170deg,rgba(255,171,46,.07),var(--bg) 55%)}
      .op .price.feat::before{content:"RECOMMENDED ENTRY";position:absolute;top:-1px;right:-1px;font-family:var(--mono);font-size:8.5px;letter-spacing:.2em;background:var(--amber);color:#0c0b09;padding:6px 12px;font-weight:700}
      .op .price .lbl{font-family:var(--mono);font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:var(--faint)}
      .op .price .amt{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:clamp(1.7rem,3vw,2.4rem);margin:16px 0 8px}
      .op .price .amt small{font-size:.45em;color:var(--dim);font-weight:600}
      .op .price p{color:var(--dim);font-size:13px;line-height:1.7;margin:0}
      .op .price .field{margin-top:18px;display:flex;align-items:center;border:1px solid var(--line);background:rgba(0,0,0,.25)}
      .op .price .field span{font-family:var(--mono);font-size:12px;color:var(--amber);padding:12px 14px;border-right:1px solid var(--line)}
      .op .price .field input{flex:1;min-width:0;background:transparent;border:none;outline:none;color:var(--ink);font-family:var(--mono);font-size:13px;padding:12px 14px}
      .op .price .fixed{margin-top:18px;border:1px solid var(--line);background:rgba(0,0,0,.2);color:var(--dim);font-family:var(--mono);font-size:13px;padding:12px 14px}
      .op .price .btn{margin-top:24px;width:100%}
      @media(max-width:860px){.op .price-grid{grid-template-columns:1fr}}

      /* ---- side panel (used for QR / stat card on utility pages) ---- */
      .op .panel-card{border:1px solid var(--line);background:var(--panel);padding:34px}
      .op .panel-card .lbl{font-family:var(--mono);font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--faint);margin-bottom:20px}
      .op .panel-card .qr{display:flex;justify-content:center;padding:20px;background:#fff;margin-bottom:24px;border:1px solid var(--line)}
      .op .panel-card .rows{display:flex;flex-direction:column;gap:16px;font-family:var(--mono);font-size:12px;letter-spacing:.06em}
      .op .panel-card .rows a{color:var(--ink);text-decoration:none;transition:.25s}
      .op .panel-card .rows a:hover{color:var(--amber)}
      .op .panel-card .rows span.k{display:block;color:var(--faint);font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;margin-bottom:6px}

      /* ---- CTA / contact band ---- */
      .op .cta-band{border-top:1px solid var(--line);position:relative;overflow:hidden}
      .op .cta-band::before{content:"";position:absolute;inset:0;background:radial-gradient(600px circle at 50% 110%,rgba(255,171,46,.14),transparent 60%);pointer-events:none}
      .op .cta-band .contact-line{margin-top:36px;display:flex;gap:28px;flex-wrap:wrap;font-family:var(--mono);font-size:12px;letter-spacing:.06em}
      .op .cta-band .contact-line a{color:var(--dim);text-decoration:none;transition:.25s}
      .op .cta-band .contact-line a:hover{color:var(--amber)}
      .op .contact-frame{background:#fff;color:#000;padding:24px;border:1px solid var(--line)}

      /* ---- footer ---- */
      .op .foot{border-top:1px solid var(--line);padding:28px clamp(18px,3.5vw,40px);display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--faint)}
      .op .foot a{color:var(--faint);text-decoration:none;transition:.25s}
      .op .foot a:hover{color:var(--amber)}
      .op .foot .links{display:flex;gap:24px;flex-wrap:wrap}
    `}</style>
  )
}
