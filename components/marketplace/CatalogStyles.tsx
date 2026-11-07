export default function CatalogStyles() {
  return <style>{`
    .op.catalog-pages main{min-height:65vh}
    .op.catalog-pages :is(a,button,input):focus-visible{outline:2px solid var(--amber);outline-offset:5px}
    .op.catalog-pages .catalog-meta{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px;font-family:var(--mono);font-size:11px;color:var(--dim)}
    .op.catalog-pages .catalog-meta span{border:1px solid var(--line);padding:10px 14px}
    .op.catalog-pages .catalog-filters{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:30px}
    .op.catalog-pages .catalog-filter{border:1px solid var(--line);background:var(--panel);color:var(--dim);padding:10px 15px;font-family:var(--mono);font-size:11px;cursor:pointer}
    .op.catalog-pages .catalog-filter[aria-pressed="true"]{border-color:var(--amber);background:var(--amber-dim);color:var(--amber)}
    .op.catalog-pages .catalog-filters button:hover{color:var(--ink);border-color:var(--amber)}
    .op.catalog-pages .catalog-empty{padding:40px;border:1px solid var(--line);color:var(--dim)}
    .op.catalog-pages .prod .availability{font-size:12px;color:var(--amber);margin-top:16px;line-height:1.6}
    .op.catalog-pages .prod .price-row{gap:16px;flex-wrap:wrap}
    .op.catalog-pages .prod .price-row .go{margin-top:0}
    .op.catalog-pages .catalog-detail h1{font-family:var(--disp);font-stretch:118%;font-size:clamp(2.2rem,7vw,4.5rem);overflow-wrap:anywhere}
    .op.catalog-pages .catalog-detail :is(p,span,div){min-width:0}
    .op.catalog-pages .catalog-detail .catalog-status{color:var(--amber);font-family:var(--mono);letter-spacing:.16em}
    .op.catalog-pages .catalog-detail .catalog-price{color:var(--amber)}
    .op.catalog-pages .catalog-detail .btn{max-width:100%;min-width:0;white-space:normal;text-align:center}
    .op.catalog-pages .catalog-detail a:not(.btn):hover{color:var(--amber)}
    .op.catalog-pages .catalog-detail .catalog-side{box-shadow:none}
    .op.catalog-pages .catalog-beta-banner{background:var(--amber-dim);border-bottom:1px solid var(--line);color:var(--ink)}
    @media(max-width:600px){.op.catalog-pages .catalog-detail section{padding-top:48px;padding-bottom:48px}.op.catalog-pages .catalog-detail .catalog-side{padding:24px}.op.catalog-pages .catalog-detail .catalog-actions{flex-direction:column}.op.catalog-pages .catalog-detail .catalog-actions .btn{width:100%}}
    @media(prefers-reduced-motion:reduce){.op.catalog-pages *{animation:none!important;transition:none!important;scroll-behavior:auto!important}.op.catalog-pages .prod:hover{transform:none}}
  `}</style>
}
