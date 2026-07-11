'use client'

import ContactForm from '@/components/ContactForm'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

/* ============================================================
   3KPRO — OPERATOR homepage (approved V3, 2026-07-06)
   Terminal boot intro → amber mission-control deck.
   ============================================================ */

type BootLine = { cls: string; text: string }

const BOOT: ReadonlyArray<readonly [string, string]> = [
  ['dim', '3KPRO SYSTEMS BIOS v2026.7 — TULSA CONTROL'],
  ['', 'initializing operator console .....'],
  ['ok', '[ OK ]  web systems ............... online'],
  ['ok', '[ OK ]  workflow automation ....... online'],
  ['ok', '[ OK ]  ai workspace layer ........ online'],
  ['ok', '[ OK ]  cloud architecture ........ online'],
  ['amb', '[ !! ]  duct-tape processes ....... deprecated'],
  ['ok', '[ OK ]  documentation ............. owner-readable'],
  ['', 'response target: 24h — operator: direct'],
  ['amb', 'launching 3KPRO·OS ▸▸▸'],
]

const services = [
  {
    num: 'SYS-01 / WEB',
    title: 'Website Systems',
    copy: 'Premium business sites, landing pages, local SEO foundations, conversion paths, and handoff docs.',
    points: ['Positioning', 'Responsive build', 'Launch handoff'],
    href: '/services/website-systems',
  },
  {
    num: 'SYS-02 / AUTO',
    title: 'Workflow Systems',
    copy: 'Automation, internal tools, reporting paths, and cleanup for teams losing time to repeatable work.',
    points: ['Process map', 'Integration build', 'Owner-ready docs'],
    href: '/services/workflow-systems',
  },
  {
    num: 'SYS-03 / AI',
    title: 'AI Workspace Systems',
    copy: 'Configured AI workspaces for owners, sales teams, operators, and staff who need repeatable work handled with context.',
    points: ['Role setup', 'Workflow library', 'Team handoff'],
    href: '/services/ai-workspace-implementation',
  },
  {
    num: 'SYS-04 / ADVISORY',
    title: 'Operating Systems',
    copy: 'Technical strategy, cloud architecture, and software planning for practical operators.',
    points: ['Systems audit', 'Architecture plan', 'Build roadmap'],
    href: '/services/operating-systems',
  },
]

const products = [
  {
    mono: 'X',
    name: 'Xelora',
    copy: 'Predictive content intelligence for creators and operators who need stronger launch momentum.',
    href: 'https://getxelora.com',
    label: 'Live platform',
    go: 'Open Xelora ↗',
    external: true,
  },
  {
    mono: 'C',
    name: 'Cloud Ledger',
    copy: 'Self-service Azure waste audit for finding idle resources, cost leaks, and practical savings.',
    href: '/cloud-ledger',
    label: 'Available',
    go: 'Run an audit ↗',
    external: false,
  },
  {
    mono: 'M',
    name: 'Marketplace',
    copy: 'A growing catalog of software assets, audits, and operating tools from the 3KPRO ecosystem.',
    href: '/marketplace',
    label: 'Explore',
    go: 'Browse catalog ↗',
    external: false,
  },
]

const credibility = [
  {
    id: 'REC-01',
    title: 'Tulsa operator, not a faceless agency',
    copy: 'Built for local owners who need clear systems, direct communication, and practical execution without a bloated handoff maze.',
  },
  {
    id: 'REC-02',
    title: 'Enterprise-shaped judgment',
    copy: 'Two decades around serious Tulsa-area operating environments, including ONEOK, PSO, and Enerflex.',
  },
  {
    id: 'REC-03',
    title: 'Small first, useful fast',
    copy: 'Projects start with a narrow blueprint, a working first version, and documentation the owner can actually use after launch.',
  },
]

const marqueeItems = [
  'WEBSITE SYSTEMS',
  'WORKFLOW AUTOMATION',
  'AI WORKSPACES',
  'CLOUD ARCHITECTURE',
  'EST. 2010',
  '24H RESPONSE',
  'TULSA · REMOTE',
]

function sleep(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms))
}

/* ---------- boot intro ---------- */
function BootIntro({ stage, onSkip, lines }: { stage: string; onSkip: () => void; lines: BootLine[] }) {
  if (stage === 'gone') return null
  return (
    <div className={`op-intro${stage === 'flash' ? ' flash' : ''}`} role="presentation" aria-hidden="true">
      <div className="term">
        <div className="term-bar">
          <span>3KPRO / SYSTEM CONSOLE</span>
          <span className="dots"><i /><i /><i /></span>
        </div>
        <div className="term-body">
          {lines.map((l, i) => (
            <div key={i} className={l.cls || undefined}>{l.text}</div>
          ))}
          <span className="cursor" />
        </div>
      </div>
      <button type="button" className="skip" onClick={onSkip}>Skip boot ▸</button>
    </div>
  )
}

/* ---------- animated counter ---------- */
function Count({ end, className }: { end: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          io.unobserve(entry.target)
          const dur = 1300
          const t0 = performance.now()
          const tick = (t: number) => {
            const k = Math.min(1, (t - t0) / dur)
            const eased = 1 - Math.pow(1 - k, 3)
            el.textContent = String(Math.round(end * eased))
            if (k < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end])
  return <span ref={ref} className={className}>0</span>
}

/* ---------- project drawer (real contact form) ---------- */
function ProjectDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ease = [0.22, 1, 0.36, 1] as const
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close project drawer"
            className="fixed inset-0 z-[70] cursor-default bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            onClick={onClose}
          />
          <motion.aside
            className="op-drawer fixed right-0 top-0 z-[80] h-screen w-full max-w-[620px] overflow-y-auto"
            initial={{ x: '104%', opacity: 0.7 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '104%', opacity: 0.7 }}
            transition={{ duration: 0.6, ease }}
            role="dialog"
            aria-modal="true"
            aria-label="Start a project"
          >
            <button type="button" onClick={onClose} className="op-drawer-close" aria-label="Close">
              ×
            </button>
            <div className="op-drawer-kicker">PROJECT INTAKE / TULSA CONTROL</div>
            <h2 className="op-drawer-title">
              Initiate<span> a Project</span>
            </h2>
            <p className="op-drawer-copy">
              Describe the system you need. Response target: 24 hours, direct from the operator.
            </p>
            <div className="op-drawer-form">
              <ContactForm />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Home() {
  const reduceMotion = useReducedMotion()
  const [introStage, setIntroStage] = useState<'pending' | 'boot' | 'flash' | 'gone'>('pending')
  const [bootLines, setBootLines] = useState<BootLine[]>([])
  const [ready, setReady] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [clock, setClock] = useState('--:--:--')
  const doneRef = useRef(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const finishIntro = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    try { sessionStorage.setItem('3k-boot-seen', '1') } catch { /* private mode */ }
    setIntroStage('flash')
    setReady(true)
    setTimeout(() => setIntroStage('gone'), 650)
  }, [])

  /* decide whether to boot */
  useEffect(() => {
    let seen = false
    try { seen = sessionStorage.getItem('3k-boot-seen') === '1' } catch { /* private mode */ }
    if (seen || reduceMotion) {
      doneRef.current = true
      setIntroStage('gone')
      setReady(true)
    } else {
      setIntroStage('boot')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* boot typing sequence */
  useEffect(() => {
    if (introStage !== 'boot') return
    let cancelled = false
    const shown: BootLine[] = []
    const run = async () => {
      for (const [cls, text] of BOOT) {
        if (cancelled || doneRef.current) return
        shown.push({ cls, text: '' })
        const speed = text.startsWith('[') ? 6 : 16
        for (let i = 1; i <= text.length; i++) {
          if (cancelled || doneRef.current) return
          shown[shown.length - 1] = { cls, text: text.slice(0, i) }
          setBootLines([...shown])
          await sleep(speed)
        }
        await sleep(text.startsWith('[') ? 120 : 300)
      }
      await sleep(650)
      if (!cancelled) finishIntro()
    }
    run()
    const cap = setTimeout(finishIntro, 12000)
    return () => { cancelled = true; clearTimeout(cap) }
  }, [introStage, finishIntro])

  /* Tulsa clock */
  useEffect(() => {
    const tick = () => {
      try {
        setClock(new Intl.DateTimeFormat('en-US', {
          hour: '2-digit', minute: '2-digit', second: '2-digit',
          hour12: false, timeZone: 'America/Chicago',
        }).format(new Date()))
      } catch {
        setClock(new Date().toLocaleTimeString())
      }
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  /* scroll reveals */
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const els = root.querySelectorAll('.rev')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div ref={rootRef} className={`op${ready ? ' ready' : ''}`}>
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
        .op .scan{position:fixed;inset:0;pointer-events:none;z-index:90;opacity:.05;
          background:repeating-linear-gradient(0deg,transparent 0 2px,rgba(0,0,0,.9) 2px 3px)}
        .op .disp{font-family:var(--disp);font-stretch:118%}

        /* ---- intro ---- */
        .op-intro{position:fixed;inset:0;z-index:100;background:#070604;display:flex;align-items:center;justify-content:center;padding:24px}
        .op-intro.flash{animation:opCrt .55s steps(2) forwards}
        @keyframes opCrt{0%{opacity:1;filter:brightness(1)}30%{filter:brightness(3.4) saturate(0)}60%{transform:scaleY(.004);filter:brightness(6)}100%{opacity:0;transform:scaleY(.002);visibility:hidden}}
        .op-intro .term{width:min(720px,94vw);border:1px solid rgba(255,171,46,.24);background:rgba(12,11,9,.9);box-shadow:0 0 90px rgba(255,171,46,.09),inset 0 0 60px rgba(0,0,0,.6)}
        .op-intro .term-bar{display:flex;align-items:center;justify-content:space-between;padding:12px 18px;border-bottom:1px solid rgba(255,171,46,.18);font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#ffab2e}
        .op-intro .dots{display:flex;gap:7px}
        .op-intro .dots i{width:9px;height:9px;border-radius:99px;border:1px solid rgba(255,171,46,.45)}
        .op-intro .term-body{padding:22px 22px 26px;font-family:'JetBrains Mono',monospace;font-size:clamp(11px,1.5vw,13.5px);line-height:2.05;color:rgba(243,239,230,.82);min-height:320px}
        .op-intro .ok{color:#57d97c}
        .op-intro .amb{color:#ffab2e}
        .op-intro .dim{color:rgba(243,239,230,.3)}
        .op-intro .cursor{display:inline-block;width:.6em;height:1.1em;background:#ffab2e;vertical-align:text-bottom;animation:opBlink .85s steps(1) infinite}
        @keyframes opBlink{50%{opacity:0}}
        .op-intro .skip{position:absolute;bottom:30px;right:34px;background:none;border:1px solid rgba(255,171,46,.3);color:#ffab2e;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;padding:11px 20px;cursor:pointer;transition:.3s}
        .op-intro .skip:hover{background:#ffab2e;color:#0c0b09}

        /* ---- nav ---- */
        .op .topnav{position:fixed;top:0;left:0;right:0;z-index:60;display:grid;grid-template-columns:auto 1fr auto auto;gap:26px;align-items:center;padding:0 clamp(18px,3.5vw,40px);height:66px;background:rgba(12,11,9,.86);backdrop-filter:blur(16px);border-bottom:1px solid var(--line);opacity:0;transform:translateY(-10px);transition:.6s .15s}
        .op.ready .topnav{opacity:1;transform:none}
        .op .logo{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:16px;letter-spacing:.08em;color:var(--ink);text-decoration:none;display:flex;align-items:center;gap:12px}
        .op .logo .sq{width:12px;height:12px;background:var(--amber);box-shadow:0 0 16px rgba(255,171,46,.7);animation:opBlinkSq 2.4s ease-in-out infinite}
        @keyframes opBlinkSq{0%,100%{opacity:1}50%{opacity:.45}}
        .op .nav-links{display:flex;gap:30px;justify-content:center}
        .op .nav-links a{color:var(--dim);text-decoration:none;font-family:var(--mono);font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;transition:.25s}
        .op .nav-links a:hover{color:var(--amber)}
        .op .nav-clock{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;color:var(--faint);white-space:nowrap}
        .op .nav-clock b{color:var(--amber);font-weight:500}
        .op .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--amber);color:#0c0b09;font-family:var(--mono);font-weight:700;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;padding:14px 26px;text-decoration:none;border:1px solid var(--amber);cursor:pointer;transition:.3s;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}
        .op .btn:hover{background:var(--amber-hot);border-color:var(--amber-hot);box-shadow:0 0 34px rgba(255,122,26,.4)}
        .op .btn.ghost{background:transparent;color:var(--ink);border-color:rgba(243,239,230,.24)}
        .op .btn.ghost:hover{border-color:var(--amber);color:var(--amber);box-shadow:0 0 24px rgba(255,171,46,.15);background:transparent}
        .op .nav-cta{padding:10px 18px;font-size:10.5px}
        @media(max-width:960px){.op .nav-links,.op .nav-clock{display:none}.op .topnav{grid-template-columns:1fr auto}}

        /* ---- hero ---- */
        .op .hero{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:120px clamp(18px,4.5vw,56px) 40px;max-width:1360px;margin:0 auto}
        .op .hero-status{display:inline-flex;align-items:center;gap:12px;font-family:var(--mono);font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--dim);border:1px solid var(--line);padding:10px 18px;background:var(--panel);width:fit-content}
        .op .hero-status .led{width:8px;height:8px;background:var(--ok);border-radius:99px;box-shadow:0 0 12px var(--ok);animation:opBlinkSq 1.8s infinite}
        .op .h1{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:clamp(2.7rem,8.4vw,7.6rem);line-height:.95;letter-spacing:-.01em;text-transform:uppercase;margin:34px 0 0}
        .op .h1 .out{color:transparent;-webkit-text-stroke:1.5px rgba(243,239,230,.85)}
        .op .h1 .amb{color:var(--amber);text-shadow:0 0 60px rgba(255,171,46,.35)}
        .op .hero-sub{display:grid;grid-template-columns:auto 1fr;gap:22px;margin-top:38px;max-width:720px;align-items:start}
        .op .hero-sub .tick{font-family:var(--mono);color:var(--amber);font-size:13px;padding-top:4px}
        .op .hero-sub p{color:var(--dim);font-size:clamp(14.5px,1.5vw,17px);line-height:1.8}
        .op .hero-ctas{display:flex;gap:16px;margin-top:44px;flex-wrap:wrap}
        .op .stagger{opacity:0;transform:translateY(24px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)}
        .op.ready .stagger{opacity:1;transform:none}
        .op.ready .d1{transition-delay:.2s}.op.ready .d2{transition-delay:.38s}.op.ready .d3{transition-delay:.56s}.op.ready .d4{transition-delay:.74s}

        .op .rack{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);margin-top:70px}
        .op .rack .mod{background:var(--panel);padding:22px 24px;position:relative;overflow:hidden}
        .op .rack .mod::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),transparent);opacity:0;transition:.35s}
        .op .rack .mod:hover::before{opacity:1}
        .op .rack .k{font-family:var(--mono);font-size:9.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--faint)}
        .op .rack .v{font-family:var(--disp);font-stretch:118%;font-weight:700;font-size:clamp(1.4rem,2.6vw,2rem);margin-top:10px;letter-spacing:.01em}
        .op .rack .v .u{color:var(--amber)}
        .op .rack .s{font-family:var(--mono);font-size:9.5px;color:var(--ok);margin-top:8px;letter-spacing:.1em}
        @media(max-width:860px){.op .rack{grid-template-columns:repeat(2,1fr)}}

        /* ---- sections ---- */
        .op .wrap{max-width:1360px;margin:0 auto;padding:clamp(76px,10vh,130px) clamp(18px,4.5vw,56px)}
        .op .sec-head{display:flex;align-items:center;gap:22px;margin-bottom:56px;flex-wrap:wrap}
        .op .tagchip{font-family:var(--mono);font-size:10px;letter-spacing:.26em;text-transform:uppercase;color:#0c0b09;background:var(--amber);padding:7px 14px;font-weight:700}
        .op .h2{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:clamp(1.9rem,4.6vw,3.6rem);letter-spacing:-.005em;text-transform:uppercase;line-height:1.02;margin:0}
        .op .h2 .out{color:transparent;-webkit-text-stroke:1.2px rgba(243,239,230,.7)}
        .op .h2 .amb{color:var(--amber)}
        .op .rev{opacity:0;transform:translateY(30px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}
        .op .rev.in{opacity:1;transform:none}

        .op .marq{border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden;white-space:nowrap;padding:15px 0;background:var(--panel)}
        .op .marq-track{display:inline-flex;gap:52px;animation:opTick 26s linear infinite;font-family:var(--mono);font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:var(--dim)}
        .op .marq-track b{color:var(--amber);font-weight:500;margin-left:52px}
        @keyframes opTick{from{transform:translateX(0)}to{transform:translateX(-50%)}}

        .op .dossier{border:1px solid var(--line)}
        .op .dossier .row{display:grid;grid-template-columns:120px 1fr 1.3fr;gap:30px;padding:38px clamp(20px,3vw,40px);border-bottom:1px solid var(--line);transition:.3s;background:var(--panel)}
        .op .dossier .row:last-child{border-bottom:none}
        .op .dossier .row:hover{background:var(--panel2)}
        .op .dossier .id{font-family:var(--mono);font-size:11px;color:var(--amber);letter-spacing:.16em}
        .op .dossier h3{font-family:var(--sans);font-weight:700;font-size:clamp(1.1rem,2vw,1.4rem);letter-spacing:.01em;margin:0}
        .op .dossier p{color:var(--dim);font-size:14px;line-height:1.75;margin:0}
        @media(max-width:820px){.op .dossier .row{grid-template-columns:1fr;gap:12px}}

        .op .svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
        .op .svc{border:1px solid var(--line);background:var(--bg);padding:38px 34px;text-decoration:none;color:inherit;position:relative;transition:.35s;overflow:hidden;display:block;clip-path:polygon(0 0,calc(100% - 22px) 0,100% 22px,100% 100%,22px 100%,0 calc(100% - 22px))}
        .op .svc::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,var(--amber-dim),transparent 55%);opacity:0;transition:.4s}
        .op .svc:hover::after{opacity:1}
        .op .svc:hover{border-color:rgba(255,171,46,.4)}
        .op .svc .top{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:1}
        .op .svc .num{font-family:var(--mono);font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--amber)}
        .op .svc .st{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;color:var(--ok);display:flex;align-items:center;gap:8px}
        .op .svc .st::before{content:"";width:6px;height:6px;background:var(--ok);border-radius:99px;box-shadow:0 0 8px var(--ok)}
        .op .svc h3{font-family:var(--disp);font-stretch:118%;font-weight:700;font-size:clamp(1.3rem,2.4vw,1.8rem);margin:24px 0 14px;text-transform:uppercase;letter-spacing:.01em;position:relative;z-index:1}
        .op .svc p{color:var(--dim);font-size:14.5px;line-height:1.75;position:relative;z-index:1;margin:0}
        .op .svc .pts{display:flex;gap:8px;margin-top:22px;flex-wrap:wrap;position:relative;z-index:1}
        .op .svc .pts i{font-style:normal;font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--dim);border:1px solid var(--line);padding:6px 12px;background:rgba(0,0,0,.25)}
        .op .svc .go{margin-top:26px;display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--ink);position:relative;z-index:1}
        .op .svc .go::after{content:"↗";color:var(--amber);transition:.3s}
        .op .svc:hover .go::after{transform:translate(4px,-4px)}
        @media(max-width:860px){.op .svc-grid{grid-template-columns:1fr}}

        .op .prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .op .prod{border:1px solid var(--line);background:var(--panel);text-decoration:none;color:inherit;transition:.35s;position:relative;display:flex;flex-direction:column;overflow:hidden}
        .op .prod .scr{height:120px;border-bottom:1px solid var(--line);position:relative;background:
          radial-gradient(circle at 30% 60%,rgba(255,171,46,.16),transparent 55%),
          repeating-linear-gradient(90deg,transparent 0 19px,var(--line2) 19px 20px),
          repeating-linear-gradient(0deg,transparent 0 19px,var(--line2) 19px 20px)}
        .op .prod .scr b{position:absolute;left:22px;bottom:16px;font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:34px;color:var(--amber);text-shadow:0 0 30px rgba(255,171,46,.5)}
        .op .prod .badge{position:absolute;top:14px;right:14px;font-family:var(--mono);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--amber);border:1px solid rgba(255,171,46,.35);padding:5px 10px;background:rgba(12,11,9,.7)}
        .op .prod .body{padding:26px 26px 30px;flex:1;display:flex;flex-direction:column}
        .op .prod h3{font-family:var(--sans);font-weight:700;font-size:1.3rem;margin:0}
        .op .prod p{color:var(--dim);font-size:13.5px;line-height:1.75;margin:12px 0 0;flex:1}
        .op .prod .go{margin-top:22px;font-family:var(--mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--ink)}
        .op .prod:hover{transform:translateY(-5px);border-color:rgba(255,171,46,.4);box-shadow:0 24px 50px -24px rgba(0,0,0,.8)}
        @media(max-width:860px){.op .prod-grid{grid-template-columns:1fr}}

        .op .price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .op .price{border:1px solid var(--line);background:var(--bg);padding:40px 34px;position:relative;transition:.35s;display:flex;flex-direction:column}
        .op .price:hover{border-color:rgba(243,239,230,.3);transform:translateY(-4px)}
        .op .price.feat{border-color:rgba(255,171,46,.5);background:linear-gradient(170deg,rgba(255,171,46,.07),var(--bg) 55%)}
        .op .price.feat::before{content:"RECOMMENDED ENTRY";position:absolute;top:-1px;right:-1px;font-family:var(--mono);font-size:8.5px;letter-spacing:.2em;background:var(--amber);color:#0c0b09;padding:6px 12px;font-weight:700}
        .op .price .lbl{font-family:var(--mono);font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:var(--faint)}
        .op .price .amt{font-family:var(--disp);font-stretch:118%;font-weight:800;font-size:clamp(1.9rem,3.2vw,2.7rem);margin:18px 0 10px}
        .op .price .amt small{font-size:.45em;color:var(--dim);font-weight:600}
        .op .price p{color:var(--dim);font-size:13.5px;line-height:1.7;flex:1;margin:0}
        .op .price .btn{margin-top:28px;width:100%}
        @media(max-width:860px){.op .price-grid{grid-template-columns:1fr}}

        .op .cta{border-top:1px solid var(--line);position:relative;overflow:hidden}
        .op .cta::before{content:"";position:absolute;inset:0;background:radial-gradient(600px circle at 50% 110%,rgba(255,171,46,.14),transparent 60%);pointer-events:none}
        .op .cta .wrap{text-align:center}
        .op .cta .h2{max-width:900px;margin:26px auto 0}
        .op .cta .lead{color:var(--dim);font-size:15.5px;line-height:1.8;max-width:520px;margin:22px auto 0}
        .op .cta .hero-ctas{justify-content:center;margin-top:42px}
        .op .cta .contact-line{margin-top:44px;display:flex;gap:32px;justify-content:center;flex-wrap:wrap;font-family:var(--mono);font-size:12px;letter-spacing:.06em}
        .op .cta .contact-line a{color:var(--dim);text-decoration:none;transition:.25s}
        .op .cta .contact-line a:hover{color:var(--amber)}

        .op .foot{border-top:1px solid var(--line);padding:28px clamp(18px,3.5vw,40px);display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--faint)}
        .op .foot a{color:var(--faint);text-decoration:none;transition:.25s}
        .op .foot a:hover{color:var(--amber)}
        .op .foot .links{display:flex;gap:24px;flex-wrap:wrap}

        /* ---- drawer ---- */
        .op-drawer{border-left:1px solid rgba(255,171,46,.3);background:#12110e;padding:32px clamp(24px,4vw,44px) 44px;color:#f3efe6;box-shadow:0 0 120px rgba(0,0,0,.7)}
        .op-drawer-close{margin-left:auto;display:grid;place-items:center;width:42px;height:42px;border:1px solid rgba(243,239,230,.18);background:none;color:rgba(243,239,230,.7);font-size:22px;line-height:1;cursor:pointer;transition:.3s}
        .op-drawer-close:hover{border-color:#ffab2e;color:#ffab2e}
        .op-drawer-kicker{margin-top:28px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.26em;text-transform:uppercase;color:#ffab2e}
        .op-drawer-title{font-family:'Archivo',system-ui,sans-serif;font-stretch:118%;font-weight:800;font-size:clamp(2.4rem,5vw,3.6rem);text-transform:uppercase;line-height:.98;margin:22px 0 0}
        .op-drawer-title span{display:block;color:transparent;-webkit-text-stroke:1.2px rgba(243,239,230,.7)}
        .op-drawer-copy{margin-top:18px;max-width:420px;font-size:14px;line-height:1.75;color:rgba(243,239,230,.56)}
        .op-drawer-form{margin-top:32px;background:#fff;color:#000;padding:24px}

        @media (prefers-reduced-motion: reduce){
          .op *,.op *::before,.op *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
        }
      `}</style>

      <div className="scan" aria-hidden="true" />

      <BootIntro stage={introStage} onSkip={finishIntro} lines={bootLines} />
      <ProjectDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* ===== NAV ===== */}
      <nav className="topnav">
        <Link href="/" className="logo"><span className="sq" />3KPRO<span style={{ color: 'var(--faint)', fontWeight: 600 }}>·OS</span></Link>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <Link href="/pay" style={{ color: 'var(--amb, #f5b942)' }}>Quick Pay</Link>
        </div>
        <div className="nav-clock">TULSA <b suppressHydrationWarning>{clock}</b> CST</div>
        <button type="button" className="btn nav-cta" onClick={() => setDrawerOpen(true)}>Initiate</button>
      </nav>

      {/* ===== HERO ===== */}
      <header className="hero" id="top">
        <div className="hero-status stagger"><span className="led" />All systems operational — accepting new projects</div>
        <h1 className="h1 stagger d1">
          Your business.<br />
          <span className="out">Running like</span><br />
          <span className="amb">an operating system.</span>
        </h1>
        <div className="hero-sub stagger d2">
          <span className="tick">&gt;_</span>
          <p>Websites, automation, and AI workspaces engineered in Tulsa with precision and restraint. Fewer moving parts. Clear documentation. A system your business actually runs on.</p>
        </div>
        <div className="hero-ctas stagger d3">
          <button type="button" className="btn" onClick={() => setDrawerOpen(true)}>Start a Project</button>
          <a className="btn ghost" href="#services">View Systems</a>
        </div>
        <div className="rack stagger d4">
          <div className="mod"><div className="k">Operating since</div><div className="v"><Count end={2010} /></div><div className="s">● STABLE</div></div>
          <div className="mod"><div className="k">Build lanes</div><div className="v"><Count end={4} /><span className="u"> ACTIVE</span></div><div className="s">● ONLINE</div></div>
          <div className="mod"><div className="k">Response target</div><div className="v"><Count end={24} /><span className="u">H</span></div><div className="s">● MONITORED</div></div>
          <div className="mod"><div className="k">Coverage</div><div className="v">TULSA<span className="u">+</span></div><div className="s">● REMOTE CAPABLE</div></div>
        </div>
      </header>

      {/* ===== MARQUEE ===== */}
      <div className="marq" aria-hidden="true">
        <div className="marq-track">
          {[0, 1].map((dup) => (
            <span key={dup}>
              {marqueeItems.map((item) => (
                <span key={item}>{item}<b>{' // '}</b></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ===== CREDIBILITY ===== */}
      <section>
        <div className="wrap">
          <div className="sec-head rev">
            <span className="tagchip">00 / Credibility</span>
            <h2 className="h2">Local trust. <span className="out">Real systems.</span></h2>
          </div>
          <div className="dossier rev">
            {credibility.map((item) => (
              <div className="row" key={item.id}>
                <span className="id">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" style={{ background: 'var(--panel)' }}>
        <div className="wrap">
          <div className="sec-head rev">
            <span className="tagchip">01 / Services</span>
            <h2 className="h2">Four systems. <span className="out">One console.</span></h2>
          </div>
          <div className="svc-grid rev">
            {services.map((s) => (
              <Link className="svc" href={s.href} key={s.num}>
                <div className="top"><span className="num">{s.num}</span><span className="st">ONLINE</span></div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <div className="pts">{s.points.map((p) => <i key={p}>{p}</i>)}</div>
                <span className="go">Open module</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products">
        <div className="wrap">
          <div className="sec-head rev">
            <span className="tagchip">02 / Product ecosystem</span>
            <h2 className="h2">Useful tools. <span className="out">Not shelfware.</span></h2>
          </div>
          <div className="prod-grid rev">
            {products.map((p) => (
              <Link
                className="prod"
                href={p.href}
                key={p.name}
                target={p.external ? '_blank' : undefined}
                rel={p.external ? 'noreferrer' : undefined}
              >
                <div className="scr"><b>{p.mono}</b><span className="badge">{p.label}</span></div>
                <div className="body">
                  <h3>{p.name}</h3>
                  <p>{p.copy}</p>
                  <span className="go">{p.go}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" style={{ background: 'var(--panel)' }}>
        <div className="wrap">
          <div className="sec-head rev">
            <span className="tagchip">03 / Entry points</span>
            <h2 className="h2">Clear ways <span className="out">to start.</span></h2>
          </div>
          <div className="price-grid rev">
            <div className="price feat">
              <div className="lbl">Website rebuild</div>
              <div className="amt">$899<small>+</small></div>
              <p>A focused business site with launch basics — positioning, build, and handoff.</p>
              <Link className="btn" href="/sitepreview">Request free preview</Link>
            </div>
            <div className="price">
              <div className="lbl">Automation sprint</div>
              <div className="amt">SCOPED</div>
              <p>One workflow mapped, built, and handed over — documented so it survives you.</p>
              <button type="button" className="btn ghost" onClick={() => setDrawerOpen(true)}>Scope my workflow</button>
            </div>
            <div className="price">
              <div className="lbl">AI workspace</div>
              <div className="amt">BLUEPRINT</div>
              <p>Private knowledge and assistant setup for teams that want AI doing real work.</p>
              <button type="button" className="btn ghost" onClick={() => setDrawerOpen(true)}>Get the blueprint</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta" id="contact">
        <div className="wrap rev">
          <span className="tagchip">04 / Contact</span>
          <h2 className="h2">Ready to put your business <span className="amb">on rails?</span></h2>
          <p className="lead">One conversation. A narrow blueprint. A working first version — fast.</p>
          <div className="hero-ctas">
            <button type="button" className="btn" onClick={() => setDrawerOpen(true)}>Start a Project</button>
            <a className="btn ghost" href="tel:+19188168832">Call 918-816-8832</a>
          </div>
          <div className="contact-line">
            <a href="mailto:james@3kpro.services">james@3kpro.services</a>
            <a href="tel:+19188168832">918-816-8832</a>
            <span style={{ color: 'var(--faint)' }}>Tulsa, Oklahoma / Remote capable</span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="foot">
        <span>© 2026 3KPRO SYSTEMS {'//'} TULSA CONTROL</span>
        <div className="links">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/pay">Quick Pay</Link>
          <a href="#top">Return to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
