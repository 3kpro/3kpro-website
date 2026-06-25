'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import type { PreviewConcept as PreviewConceptType } from './concepts'
import { concepts } from './concepts'

type Props = {
  concept: PreviewConceptType
}

function conceptStyle(concept: PreviewConceptType) {
  return {
    '--preview-bg': concept.palette.bg,
    '--preview-surface': concept.palette.surface,
    '--preview-surface-alt': concept.palette.surfaceAlt,
    '--preview-text': concept.palette.text,
    '--preview-muted': concept.palette.muted,
    '--preview-line': concept.palette.line,
    '--preview-accent': concept.palette.accent,
    '--preview-accent-text': concept.palette.accentText,
  } as CSSProperties
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`grid shrink-0 place-items-center border font-bold tracking-tight ${
        compact ? 'h-9 w-9 text-xs' : 'h-12 w-12 text-base'
      }`}
      style={{
        color: 'var(--preview-accent-text)',
        backgroundColor: 'var(--preview-accent)',
        borderColor: 'var(--preview-accent)',
      }}
      aria-label="3KPRO monogram"
    >
      3K
    </div>
  )
}

function StudioAuthorityV4({ concept }: Props) {
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [introVisible, setIntroVisible] = useState(false)
  const otherConcepts = useMemo(() => concepts.filter((item) => item.id !== concept.id), [concept.id])
  const shouldReduceMotion = mounted && Boolean(reduceMotion)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || reduceMotion) return
    setIntroVisible(true)
    const timer = window.setTimeout(() => setIntroVisible(false), 1650)
    return () => window.clearTimeout(timer)
  }, [mounted, reduceMotion])

  const ease = [0.22, 1, 0.36, 1] as const
  const lanes = [
    { label: '01', title: 'Revenue front door', copy: 'Positioning, service pages, lead capture, and local trust signals without template sludge.' },
    { label: '02', title: 'Workflow infrastructure', copy: 'Automation, internal tools, and handoff docs that make the business quieter to run.' },
    { label: '03', title: 'Productized systems', copy: 'Small software assets, payment paths, and support surfaces built like real operating pieces.' },
  ]
  const proof = [
    ['Positioning', 'Before layout'],
    ['Scope', 'Before proposal'],
    ['Handoff', 'Before dependency'],
    ['Support', 'After launch'],
  ]

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#0c0b09] text-[#f4efe7]"
      style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif', letterSpacing: 0 }}
    >
      <style>{`
        @media (max-width: 700px), (max-device-width: 500px) {
          .studio-v4-copy,
          .studio-v4-actions,
          .studio-v4-stage {
            width: min(350px, calc(100vw - 40px)) !important;
            max-width: min(350px, calc(100vw - 40px)) !important;
          }

          .studio-v4-title {
            width: min(350px, calc(100vw - 40px)) !important;
            max-width: min(350px, calc(100vw - 40px)) !important;
            font-size: clamp(2.2rem, 10vw, 3rem) !important;
          }

          .studio-v4-stage-copy {
            display: none;
          }
        }
      `}</style>
      <AnimatePresence>
        {introVisible && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-[#f4efe7] text-[#0c0b09]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease }}
          >
            <motion.div
              className="relative flex items-center gap-5"
              initial={{ opacity: 0, y: 18, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.72, ease }}
            >
              <motion.div
                className="grid h-16 w-16 place-items-center rounded-[18px] bg-[#0c0b09] text-xl font-bold text-[#f4efe7]"
                initial={{ scale: 0.88, borderRadius: 36 }}
                animate={{ scale: 1, borderRadius: 18 }}
                transition={{ duration: 0.8, ease }}
              >
                3K
              </motion.div>
              <div className="overflow-hidden">
                <motion.div
                  className="text-2xl font-semibold tracking-normal"
                  initial={{ y: 34 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.74, delay: 0.18, ease }}
                >
                  3kpro.services
                </motion.div>
                <motion.div
                  className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#756f66]"
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.68, delay: 0.34, ease }}
                >
                  Systems studio
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative min-h-screen"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[820px] bg-[linear-gradient(180deg,#17130f_0%,#0c0b09_62%,#0c0b09_100%)]" />
          <div className="absolute left-1/2 top-24 h-[680px] w-[min(980px,80vw)] -translate-x-1/2 rounded-[48px] border border-[#322b22] bg-[#18140f]/55 shadow-[0_80px_180px_rgba(0,0,0,0.5)]" />
          <div className="absolute left-1/2 top-44 h-[520px] w-[min(760px,68vw)] -translate-x-1/2 rounded-[36px] border border-[#40382c] bg-[#211b14]/45 shadow-[0_60px_130px_rgba(0,0,0,0.42)]" />
        </div>

        <header className="relative z-30">
          <div className="mx-auto flex h-24 w-full max-w-[100vw] items-center justify-between px-5 sm:px-6 lg:max-w-7xl lg:px-8">
            <Link href="/preview" className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#f4efe7] text-sm font-bold text-[#0c0b09]">
                3K
              </div>
              <div>
                <div className="text-sm font-semibold tracking-normal">3kpro.services</div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#91887b]">
                  Studio Authority
                </div>
              </div>
            </Link>
            <nav className="hidden items-center gap-8 rounded-full border border-[#332d25] bg-[#11100e]/72 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b7aea1] shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl md:flex">
              <a href="#work">Work</a>
              <a href="#method">Method</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-[100vw] items-center gap-12 overflow-hidden px-5 pb-20 pt-8 sm:px-6 lg:max-w-7xl lg:grid-cols-[1.02fr_.98fr] lg:px-8">
            <div className="studio-v4-copy min-w-0" style={{ width: 'min(calc(100vw - 40px), 650px)' }}>
              <motion.div
                className="mb-8 inline-flex max-w-full rounded-full border border-[#373026] bg-[#15120f]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#bdb4a7] shadow-[0_22px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:text-[11px] sm:tracking-[0.14em]"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: 1.38, ease }}
              >
                <span className="truncate sm:whitespace-normal">Premium systems studio / Tulsa to remote teams</span>
              </motion.div>
              <motion.h1
                className="studio-v4-title w-full text-[clamp(2.35rem,10.5vw,6.7rem)] font-semibold leading-[0.98] tracking-normal text-[#f4efe7]"
                style={{ letterSpacing: 0 }}
                initial={false}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 1.48, ease }}
              >
                Systems work with taste, restraint, and teeth.
              </motion.h1>
              <motion.p
                className="mt-8 text-base leading-8 text-[#beb4a5] sm:text-lg"
                style={{ width: 'min(calc(100vw - 60px), 540px)' }}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.64, ease }}
              >
                Calmer and more expensive-feeling. No random motion. No fake props. Proof, scope, momentum.
              </motion.p>
              <motion.div
                className="studio-v4-actions mt-10 flex flex-col gap-3 sm:flex-row"
                style={{ width: 'min(calc(100vw - 40px), 560px)' }}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.66, delay: 1.78, ease }}
              >
                <a href="#contact" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#f4efe7] px-7 text-sm font-semibold text-[#0c0b09] shadow-[0_18px_60px_rgba(244,239,231,0.16)] sm:w-auto">
                  Start a serious brief
                </a>
                <a href="#work" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#3b342a] bg-[#14110e] px-7 text-sm font-semibold text-[#f4efe7] sm:w-auto">
                  View service lanes
                </a>
              </motion.div>
            </div>

            <motion.div
              className="studio-v4-stage relative min-h-[520px] min-w-0 overflow-hidden rounded-[34px] sm:min-h-[560px]"
              style={{ width: 'min(calc(100vw - 40px), 620px)' }}
              initial={false}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 1.56, ease }}
            >
              <div className="absolute left-4 top-8 h-[390px] w-[72%] rounded-[34px] border border-[#3b3329] bg-[#18140f] shadow-[0_60px_130px_rgba(0,0,0,0.48)] sm:left-6 sm:h-[420px]" />
              <div className="absolute right-0 top-0 h-[450px] w-[84%] rounded-[38px] border border-[#463d31] bg-[#211a13] p-6 shadow-[0_80px_170px_rgba(0,0,0,0.52)] sm:h-[470px] sm:w-[82%] sm:p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9d9385]">Operating layer</div>
                    <div className="mt-4 text-3xl font-semibold leading-none tracking-normal sm:text-4xl">Audit<br />Build<br />Handoff</div>
                  </div>
                  <div className="rounded-full bg-[#f4efe7] px-4 py-2 text-xs font-bold text-[#0c0b09]">3K</div>
                </div>
                <div className="mt-12 space-y-3">
                  {proof.map(([title, label], index) => (
                    <motion.div
                      key={title}
                      className="flex items-center justify-between rounded-2xl border border-[#40382d] bg-[#15120f] px-4 py-4"
                      initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.07, ease }}
                    >
                      <span className="text-sm font-semibold">{title}</span>
                      <span className="studio-v4-stage-copy text-xs text-[#92887a]">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-[88%] rounded-[30px] border border-[#4b4133] bg-[#f4efe7] p-6 text-[#0c0b09] shadow-[0_60px_130px_rgba(0,0,0,0.42)] sm:w-[70%]">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#74695d]">Intro motion</div>
                <div className="mt-4 text-2xl font-semibold leading-tight tracking-normal">Soft reveal. No scan line. No glitch theater.</div>
              </div>
            </motion.div>
          </section>

          <section id="work" className="relative mx-auto w-full max-w-[100vw] px-5 py-20 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mb-12 grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#91887b]">Service architecture</div>
              <h2 className="text-4xl font-semibold leading-tight tracking-normal text-[#f4efe7] md:text-6xl" style={{ letterSpacing: 0 }}>
                Three lanes. One operating standard.
              </h2>
            </div>
            <div className="space-y-5">
              {lanes.map((lane, index) => (
                <motion.article
                  key={lane.title}
                  className="group grid gap-6 rounded-[30px] border border-[#332d25] bg-[#14110e]/86 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-colors hover:border-[#6b5f50] md:grid-cols-[120px_1fr_.9fr] md:p-8"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.62, delay: index * 0.08, ease }}
                >
                  <div className="text-sm font-semibold text-[#91887b]">{lane.label}</div>
                  <h3 className="text-3xl font-semibold tracking-normal text-[#f4efe7]" style={{ letterSpacing: 0 }}>
                    {lane.title}
                  </h3>
                  <p className="max-w-xl text-base leading-7 text-[#b9afa1]">{lane.copy}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="method" className="mx-auto grid w-full max-w-[100vw] gap-6 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_.8fr] lg:max-w-7xl lg:px-8">
            <div className="rounded-[36px] border border-[#3b3329] bg-[#1b1611] p-8 shadow-[0_50px_120px_rgba(0,0,0,0.3)] md:p-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#91887b]">Depth without noise</div>
              <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-normal md:text-6xl" style={{ letterSpacing: 0 }}>
                The page should feel calm because the business feels handled.
              </h2>
            </div>
            <div className="rounded-[36px] border border-[#d6cfc3] bg-[#f4efe7] p-8 text-[#0c0b09] shadow-[0_50px_120px_rgba(0,0,0,0.26)] md:p-10">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#74695d]">Design rules</div>
              <div className="mt-8 space-y-5 text-lg font-semibold leading-7">
                <p>No floating lines.</p>
                <p>No generic AI shapes.</p>
                <p>No 2003 box parade.</p>
                <p>Motion earns its keep or it leaves.</p>
              </div>
            </div>
          </section>

          <section id="contact" className="mx-auto w-full max-w-[100vw] px-5 py-20 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="rounded-[40px] border border-[#3b3329] bg-[#14110e] p-8 shadow-[0_60px_150px_rgba(0,0,0,0.34)] md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#91887b]">Verdict</div>
                  <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-normal md:text-6xl" style={{ letterSpacing: 0 }}>
                    This is the first V4 worth judging.
                  </h2>
                </div>
                <a href="mailto:james@3kpro.services" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f4efe7] px-7 text-sm font-semibold text-[#0c0b09]">
                  james@3kpro.services
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="relative z-10 px-5 pb-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-[100vw] flex-col gap-5 border-t border-[#2b261f] pt-8 md:flex-row md:items-center md:justify-between lg:max-w-7xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7f766b]">
              Rebuilt V4: no scan line, no generic card wall, smoother intro.
            </div>
            <div className="flex flex-wrap gap-2">
              {otherConcepts.map((item) => (
                <Link
                  key={item.id}
                  href={item.route}
                  className="rounded-full border border-[#332d25] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a79d91]"
                >
                  {item.id.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}

function OrbitSeal({ compact = false }: { compact?: boolean }) {
  const ticks = Array.from({ length: 24 }, (_, index) => index * 15)

  return (
    <div
      className={`relative grid shrink-0 place-items-center rounded-full border border-white/18 bg-white/[0.035] text-white shadow-[0_0_34px_rgba(255,255,255,0.055)] backdrop-blur-md ${
        compact ? 'h-20 w-20' : 'h-32 w-32 md:h-40 md:w-40'
      }`}
      aria-label="Strategy, build, systems circular seal"
    >
      <svg viewBox="0 0 160 160" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1" />
        <circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" strokeOpacity="0.11" strokeWidth="1" strokeDasharray="5 7" />
        <circle cx="80" cy="80" r="28" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
        <path d="M80 10V150M10 80H150" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M31 31L129 129M129 31L31 129" stroke="currentColor" strokeOpacity="0.055" strokeWidth="1" />
        {ticks.map((angle) => (
          <line
            key={angle}
            x1="80"
            y1="14"
            x2="80"
            y2={angle % 45 === 0 ? '22' : '18'}
            stroke="currentColor"
            strokeOpacity={angle % 45 === 0 ? '0.34' : '0.16'}
            strokeWidth={angle % 45 === 0 ? '1.2' : '1'}
            transform={`rotate(${angle} 80 80)`}
          />
        ))}
      </svg>
      <motion.svg
        viewBox="0 0 160 160"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: compact ? 22 : 28, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <path id={compact ? 'orbitTextCompact' : 'orbitText'} d="M80,80 m-57,0 a57,57 0 1,1 114,0 a57,57 0 1,1 -114,0" />
        </defs>
        <text fill="currentColor" fontSize={compact ? '11' : '9'} fontWeight="700" letterSpacing="1.2">
          <textPath href={`#${compact ? 'orbitTextCompact' : 'orbitText'}`} startOffset="0">
            STRATEGY / BUILD / SYSTEMS / 3KPRO
          </textPath>
        </text>
      </motion.svg>
      <div
        className={`${compact ? 'h-8 w-8 text-[10px]' : 'h-10 w-10 text-xs'} relative grid place-items-center rounded-full border border-white/50 bg-[#08080a]/92 font-bold text-white shadow-[inset_0_0_18px_rgba(255,255,255,0.08),0_0_22px_rgba(255,255,255,0.08)]`}
      >
        <span className="pointer-events-none absolute inset-1 rounded-full border border-white/12" />
        3K
      </div>
    </div>
  )
}

function ProjectDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close project drawer"
            className="fixed inset-0 z-[70] cursor-default bg-black/58 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.34, ease }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[80] flex h-screen w-full max-w-[540px] flex-col border-l border-white/10 bg-[#111111] px-7 py-8 text-white shadow-[0_0_120px_rgba(0,0,0,0.62)] sm:px-10"
            initial={{ x: '104%', opacity: 0.7 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '104%', opacity: 0.7 }}
            transition={{ duration: 0.68, ease }}
            role="dialog"
            aria-modal="true"
            aria-label="Start a project"
          >
            <button
              type="button"
              onClick={onClose}
              className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-white/12 text-2xl leading-none text-white/70 transition hover:border-white/30 hover:text-white"
              aria-label="Close"
            >
              x
            </button>
            <div className="mt-8 text-xs font-semibold uppercase text-white/45">04 / Contact</div>
            <h2 className="mt-7 text-5xl font-semibold leading-[0.96] md:text-6xl" style={{ letterSpacing: 0 }}>
              Start a
              <span className="block text-white/52">Project</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/58">
              Tell us what needs to move. We will turn it into a clean first scope.
            </p>
            <form className="mt-10 space-y-7">
              {['Your Name', 'Email Address', 'Project Details...'].map((label, index) => (
                <label key={label} className="block">
                  <span className="sr-only">{label}</span>
                  {index === 2 ? (
                    <textarea
                      rows={4}
                      placeholder={label}
                      className="w-full resize-none border-0 border-b border-white/14 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/24 focus:border-white/55"
                    />
                  ) : (
                    <input
                      placeholder={label}
                      className="w-full border-0 border-b border-white/14 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/24 focus:border-white/55"
                    />
                  )}
                </label>
              ))}
              <div>
                <div className="mb-3 text-xs font-semibold uppercase text-white/40">Budget range</div>
                <div className="flex flex-wrap gap-2">
                  {['< 10k', '10k - 50k', '50k - 100k', '> 100k'].map((range) => (
                    <button
                      key={range}
                      type="button"
                      className="rounded-full border border-white/14 px-4 py-2 text-xs text-white/70 transition hover:border-white/45 hover:text-white"
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="mt-5 min-h-14 w-full rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-white/88"
              >
                Send Message
              </button>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function PureSystemsV5({ concept }: Props) {
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const otherConcepts = useMemo(() => concepts.filter((item) => item.id !== concept.id), [concept.id])
  const ease = [0.22, 1, 0.36, 1] as const
  const shouldReduceMotion = !mounted || Boolean(reduceMotion)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    {
      eyebrow: '01 / Direction',
      title: 'Clean systems',
      italic: 'without theater.',
      copy: 'Strategy, website, automation, and handoff work presented as one calm operating surface.',
      points: ['Scope clarity', 'Buyer path', 'Launch standard'],
    },
    {
      eyebrow: '02 / Capabilities',
      title: 'Digital',
      italic: 'solutions.',
      copy: 'Slide-fade capability modules reveal as the user moves through the section instead of shouting from load.',
      points: ['Website rebuilds', 'Workflow automation', 'Internal tools', 'Product lanes'],
    },
    {
      eyebrow: '03 / Proof',
      title: 'Quiet proof',
      italic: 'beats noise.',
      copy: 'No AI cliche icons, no floating boxes fighting for attention. Motion points to business confidence.',
      points: ['Measured handoff', 'No mystery scope', 'Readable outcomes'],
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080a] text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: 0 }}>
      <style>{`
        .v5-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px),
            radial-gradient(circle at 50% 24%, rgba(89,72,150,0.34), transparent 34%),
            radial-gradient(circle at 50% 42%, rgba(255,255,255,0.075), transparent 30%);
          background-size: 64px 64px, 64px 64px, 100% 100%, 100% 100%;
        }

        .v5-name-glow {
          animation: v5Pulse 4.8s ease-in-out infinite;
        }

        @keyframes v5Pulse {
          0%, 100% { opacity: .34; transform: translate(-50%, -50%) scale(.98); filter: blur(34px); }
          50% { opacity: .58; transform: translate(-50%, -50%) scale(1.08); filter: blur(46px); }
        }

        .v5-title-frame {
          animation: v5FramePulse 5.8s ease-in-out infinite;
        }

        .v5-title-frame::before,
        .v5-title-frame::after {
          content: "";
          position: absolute;
          left: 50%;
          width: min(420px, 74%);
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
        }

        .v5-title-frame::before {
          top: -18px;
        }

        .v5-title-frame::after {
          bottom: -18px;
        }

        @keyframes v5FramePulse {
          0%, 100% { opacity: .36; filter: blur(0px); }
          50% { opacity: .72; filter: blur(.35px); }
        }

        @media (max-width: 720px) {
          .v5-hero-title {
            width: min(100%, calc(100vw - 40px));
            max-width: calc(100vw - 40px);
            min-width: 0;
            font-size: clamp(3.25rem, 14.5vw, 4rem) !important;
            overflow-wrap: break-word;
          }

          .v5-hero-title .v5-title-line {
            display: block;
            max-width: 100%;
          }

          .v5-title-frame {
            inset: -16px -12px !important;
          }

          .v5-hero-copy {
            width: min(100%, calc(100vw - 48px));
            max-width: calc(100vw - 48px);
            min-width: 0;
            overflow-wrap: break-word;
          }

          .v5-hero-copy p {
            width: min(100%, 320px);
            min-width: 0;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            font-size: 14px;
            line-height: 1.75;
            overflow-wrap: break-word;
          }
        }
      `}</style>
      <ProjectDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <motion.div
        className="v5-grid relative min-h-screen"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, ease }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.18),#08080a_92%)]" />

        <header className="relative z-20 border-b border-white/[0.06]">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link href="/preview" className="text-lg font-black uppercase text-white">
              3KPRO.SERVICES
            </Link>
            <nav className="hidden items-center gap-8 text-xs font-semibold uppercase text-white/72 md:flex">
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
              <button type="button" onClick={() => setDrawerOpen(true)} className="transition hover:text-white">
                Contact
              </button>
            </nav>
          </div>
        </header>

        <main className="relative z-10">
          <section className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col items-center justify-center px-5 pb-20 pt-12 text-center sm:px-6 lg:px-8">
            <motion.div
              className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.055] px-5 py-3 text-xs font-semibold uppercase text-white/68 backdrop-blur-xl"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <span className="h-2 w-2 rounded-full bg-[#19e06f] shadow-[0_0_18px_rgba(25,224,111,0.7)]" />
              Available for new projects
            </motion.div>

            <motion.div
              className="pointer-events-none absolute right-[8%] top-[22%] hidden md:block"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.82, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
            >
              <OrbitSeal />
            </motion.div>

            <motion.h1
              className="v5-hero-title relative isolate max-w-5xl text-[clamp(5.6rem,13vw,11rem)] font-semibold leading-[0.86] text-white"
              style={{ letterSpacing: 0 }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.22, ease }}
            >
              <span aria-hidden="true" className="v5-name-glow pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[440px] w-[440px] rounded-full bg-[#6658d9]/38" />
              <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
              <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]" />
              <span aria-hidden="true" className="v5-title-frame pointer-events-none absolute -inset-x-12 -inset-y-8 z-20">
                <span className="absolute left-0 top-0 h-10 w-10 border-l border-t border-white/40" />
                <span className="absolute right-0 top-0 h-10 w-10 border-r border-t border-white/40" />
                <span className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-white/40" />
                <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-white/40" />
                <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 -translate-y-4 bg-white/36" />
                <span className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 translate-y-4 bg-white/36" />
              </span>
              <span className="v5-title-line relative z-10 block">3KPRO</span>
              <span className="v5-title-line relative z-10 block text-white/64">Systems</span>
            </motion.h1>

            <motion.div
              className="v5-hero-copy mt-14 grid w-full max-w-4xl gap-8 text-center text-base leading-7 text-white/58 md:grid-cols-[1fr_auto_1fr] md:text-lg"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48, ease }}
            >
              <p>Business websites, automation, and software systems with precision and restraint.</p>
              <div className="mx-auto hidden h-full w-px bg-white/12 md:block" />
              <p>Tulsa based, remote capable, built for owners who want fewer moving parts.</p>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
            >
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition hover:bg-white/88"
              >
                Start a Project
              </button>
              <a
                href="#capabilities"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 px-8 text-sm font-semibold text-white/82 transition hover:border-white/34 hover:text-white"
              >
                View Capabilities
              </a>
            </motion.div>
          </section>

          <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">01 / Position</div>
                <h2 className="mt-8 text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  We craft
                  <span className="block text-white/52">silent</span>
                  systems.
                </h2>
              </div>
              <div className="grid gap-7 text-base leading-8 text-white/62 md:grid-cols-2">
                <p>In a world screaming for attention, this version moves like a premium studio but speaks like an operator.</p>
                <p>The goal is not decoration. The goal is confidence: clear scope, controlled motion, and a strong project path.</p>
              </div>
            </div>
          </section>

          <section id="capabilities" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="mb-14 grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">02 / Capabilities</div>
                <h2 className="mt-8 text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  Digital
                  <span className="block text-white/52">Solutions</span>
                </h2>
              </div>
              <p className="max-w-2xl border-l border-white/18 pl-8 text-lg leading-8 text-white/72">
                Move through the sections. The content reveals instead of dumping everything on the page at once.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {sections.map((section, index) => (
                <motion.button
                  key={section.eyebrow}
                  type="button"
                  onMouseEnter={() => setActiveSection(index)}
                  onFocus={() => setActiveSection(index)}
                  onClick={() => setActiveSection(index)}
                  className={`min-h-20 rounded-full border px-6 text-left transition ${
                    activeSection === index
                      ? 'border-white/36 bg-white text-black'
                      : 'border-white/12 bg-white/[0.035] text-white/76 hover:border-white/28'
                  }`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.52, delay: index * 0.08, ease }}
                >
                  <span className="block text-xs font-semibold uppercase opacity-60">{section.eyebrow}</span>
                  <span className="mt-1 block text-lg font-semibold">{section.title} {section.italic}</span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                className="mt-10 grid gap-5 md:grid-cols-[.9fr_1.1fr]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12, filter: 'blur(8px)' }}
                transition={{ duration: 0.52, ease }}
              >
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                  <div className="text-xs font-semibold uppercase text-white/40">{sections[activeSection].eyebrow}</div>
                  <h3 className="mt-7 text-4xl font-semibold leading-none md:text-5xl" style={{ letterSpacing: 0 }}>
                    {sections[activeSection].title}
                    <span className="block text-white/52">{sections[activeSection].italic}</span>
                  </h3>
                  <p className="mt-7 max-w-lg text-base leading-7 text-white/62">{sections[activeSection].copy}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {sections[activeSection].points.map((point, index) => (
                    <motion.div
                      key={point}
                      className="min-h-36 rounded-[28px] border border-white/10 bg-[#151515] p-6"
                      initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.44, delay: index * 0.06, ease }}
                    >
                      <div className="mb-8 flex items-center justify-between">
                        <span className="text-xs text-white/40">0{index + 1}</span>
                        <span className="h-2 w-2 rounded-full bg-white/52" />
                      </div>
                      <div className="text-xl font-semibold">{point}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-12 border-t border-white/10 pt-16 md:grid-cols-[1fr_1fr_auto] md:items-center">
              <div>
                <h2 className="text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  Let's
                  <span className="block text-white/52">Talk</span>
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex min-h-16 w-fit items-center gap-5 rounded-full bg-white py-2 pl-2 pr-8 text-xl font-semibold text-black transition hover:bg-white/88"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-black text-white">↗</span>
                Start a Project
              </button>
              <OrbitSeal compact />
            </div>
          </section>
        </main>

        <footer className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-white/38 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>V5 rebuild: orbit, grid, drawer, reveal sections.</div>
            <div className="flex flex-wrap gap-2">
              {otherConcepts.map((item) => (
                <Link key={item.id} href={item.route} className="rounded-full border border-white/10 px-3 py-2 text-white/50 transition hover:border-white/25 hover:text-white">
                  {item.id.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}

function LogoIntro({ concept }: Props) {
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || reduceMotion) return
    setVisible(true)
    const timer = window.setTimeout(() => setVisible(false), 1350)
    return () => window.clearTimeout(timer)
  }, [mounted, reduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center"
          style={{ backgroundColor: 'var(--preview-bg)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <motion.div
            className="flex flex-col items-center gap-5"
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative grid h-24 w-24 place-items-center">
              <motion.div
                className="absolute inset-0 border"
                style={{ borderColor: 'var(--preview-line)' }}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 45, opacity: 1 }}
                transition={{ duration: 0.55 }}
              />
              <motion.div
                className="absolute h-px w-28"
                style={{ backgroundColor: 'var(--preview-accent)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.45, delay: 0.2 }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.45 }}
              >
                <BrandMark />
              </motion.div>
            </div>
            <motion.div
              className="text-[10px] font-bold uppercase tracking-[0.34em]"
              style={{ color: 'var(--preview-muted)' }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
            >
              {concept.logoSteps.join(' / ')}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function RailBackground({ concept }: Props) {
  const dark = concept.id !== 'v1'
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `linear-gradient(to right, ${dark ? 'rgba(255,255,255,.11)' : 'rgba(17,24,39,.14)'} 1px, transparent 1px), linear-gradient(to bottom, ${dark ? 'rgba(255,255,255,.09)' : 'rgba(17,24,39,.1)'} 1px, transparent 1px)`,
          backgroundSize: concept.id === 'v3' ? '32px 32px' : '48px 48px',
        }}
      />
      <motion.div
        className="absolute left-0 right-0 top-28 h-px"
        style={{ backgroundColor: 'var(--preview-accent)' }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: concept.id === 'v2' ? 4.2 : 6, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

function SpecList({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="border p-5"
      style={{ backgroundColor: 'var(--preview-surface-alt)', borderColor: 'var(--preview-line)' }}
    >
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--preview-text)' }}>
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--preview-muted)' }}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: 'var(--preview-accent)' }} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntroShowpiece({ concept }: Props) {
  if (concept.template === 'editorial') {
    return (
      <div
        className={`border p-5 md:p-7 ${concept.radius}`}
        style={{ backgroundColor: 'var(--preview-surface)', borderColor: 'var(--preview-line)' }}
      >
        <div className="mb-12 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: 'var(--preview-muted)' }}>
            Studio index
          </span>
          <span className="h-px w-24" style={{ backgroundColor: 'var(--preview-accent)' }} />
        </div>
        <div className="space-y-2">
          {['3KPRO', 'SYSTEMS', 'STUDIO'].map((word, index) => (
            <motion.div
              key={word}
              className="border-b pb-3 text-5xl font-bold leading-none tracking-normal md:text-7xl"
              style={{ borderColor: 'var(--preview-line)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {word}
            </motion.div>
          ))}
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {['Audit', 'Build', 'Handoff'].map((item) => (
            <div key={item} className="border px-4 py-5 text-sm font-bold uppercase tracking-[0.18em]" style={{ borderColor: 'var(--preview-line)' }}>
              {item}
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7" style={{ color: 'var(--preview-muted)' }}>
          {concept.motionNote}
        </p>
      </div>
    )
  }

  if (concept.template === 'casefile') {
    return (
      <div
        className={`border p-5 md:p-7 ${concept.radius}`}
        style={{ backgroundColor: 'var(--preview-surface)', borderColor: 'var(--preview-line)' }}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Selected casefiles</h2>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--preview-muted)' }}>
            2026
          </span>
        </div>
        <div className="grid gap-3">
          {concept.sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="group grid gap-4 border p-4 transition-colors sm:grid-cols-[72px_1fr_auto]"
              style={{ backgroundColor: 'var(--preview-bg)', borderColor: 'var(--preview-line)' }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="font-mono text-sm" style={{ color: 'var(--preview-accent)' }}>
                CF-0{index + 1}
              </div>
              <div>
                <div className="text-lg font-bold tracking-normal">{section.title}</div>
                <p className="mt-2 line-clamp-2 text-sm leading-6" style={{ color: 'var(--preview-muted)' }}>
                  {section.copy}
                </p>
              </div>
              <div className="self-start text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--preview-muted)' }}>
                Open
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed" style={{ color: 'var(--preview-muted)' }}>
          {concept.motionNote}
        </p>
      </div>
    )
  }

  if (concept.template === 'drawer') {
    const chips = ['Website', 'Automation', 'AI Workspace', 'Internal Tool', 'Marketplace', 'Cleanup']
    return (
      <div
        className={`relative min-h-[520px] overflow-hidden border p-5 md:p-7 ${concept.radius}`}
        style={{ backgroundColor: 'var(--preview-surface-alt)', borderColor: 'var(--preview-line)' }}
      >
        <div className="absolute inset-y-0 right-0 w-full border-l p-6 shadow-2xl sm:w-[82%]" style={{ backgroundColor: 'var(--preview-surface)', borderColor: 'var(--preview-line)' }}>
          <div className="mb-7 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Project scope</h2>
            <span className="grid h-8 w-8 place-items-center border text-xs font-bold" style={{ borderColor: 'var(--preview-line)' }}>
              X
            </span>
          </div>
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--preview-muted)' }}>
                Lane
              </label>
              <div className="grid grid-cols-2 gap-2">
                {chips.map((chip, index) => (
                  <div
                    key={chip}
                    className="border px-3 py-3 text-xs font-bold"
                    style={{
                      color: index === 1 ? 'var(--preview-accent-text)' : 'var(--preview-text)',
                      backgroundColor: index === 1 ? 'var(--preview-accent)' : 'var(--preview-bg)',
                      borderColor: index === 1 ? 'var(--preview-accent)' : 'var(--preview-line)',
                    }}
                  >
                    {chip}
                  </div>
                ))}
              </div>
            </div>
            {['Email', 'Decision stage', 'What is broken right now?'].map((field, index) => (
              <div key={field} className="border px-4 py-4" style={{ backgroundColor: 'var(--preview-bg)', borderColor: 'var(--preview-line)' }}>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--preview-muted)' }}>
                  {field}
                </div>
                <div className="mt-3 h-px w-full" style={{ backgroundColor: index === 2 ? 'var(--preview-accent)' : 'var(--preview-line)' }} />
              </div>
            ))}
            <div className="border px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--preview-accent-text)', backgroundColor: 'var(--preview-accent)', borderColor: 'var(--preview-accent)' }}>
              Send qualified request
            </div>
          </div>
        </div>
        <div className="max-w-[180px] text-sm leading-7" style={{ color: 'var(--preview-muted)' }}>
          Backdrop keeps the page visible while the buyer scopes the job. Useful. Not cute. Good.
        </div>
      </div>
    )
  }

  return (
    <div
      className={`border p-5 md:p-7 ${concept.radius}`}
      style={{ backgroundColor: 'var(--preview-surface)', borderColor: 'var(--preview-line)' }}
    >
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Animated logo intro</h2>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--preview-muted)' }}>
          1.2s
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {concept.logoSteps.map((step, index) => (
          <motion.div
            key={step}
            className={`min-h-44 border p-4 ${concept.radius}`}
            style={{ backgroundColor: 'var(--preview-bg)', borderColor: 'var(--preview-line)' }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: 'var(--preview-muted)' }}>
                0{index + 1}
              </span>
              <div className="h-px w-10" style={{ backgroundColor: 'var(--preview-accent)' }} />
            </div>
            <BrandMark compact />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--preview-muted)' }}>
              {step}
            </p>
          </motion.div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed" style={{ color: 'var(--preview-muted)' }}>
        {concept.motionNote}
      </p>
    </div>
  )
}

export function PreviewConcept({ concept }: Props) {
  if (concept.id === 'v4') {
    return <StudioAuthorityV4 concept={concept} />
  }

  if (concept.id === 'v5') {
    return <PureSystemsV5 concept={concept} />
  }

  const otherConcepts = useMemo(() => concepts.filter((item) => item.id !== concept.id), [concept.id])

  return (
    <div className="min-h-screen" style={conceptStyle(concept)}>
      <LogoIntro concept={concept} />
      <motion.div
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: 'var(--preview-bg)', color: 'var(--preview-text)' }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <RailBackground concept={concept} />

        <header
          className="sticky top-0 z-50 border-b backdrop-blur-md"
          style={{ backgroundColor: `${concept.palette.surface}dd`, borderColor: 'var(--preview-line)' }}
        >
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link href="/preview" className="flex items-center gap-3">
              <BrandMark compact />
              <div>
                <div className="text-sm font-bold uppercase tracking-tight">3kpro.services</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--preview-muted)' }}>
                  {concept.name}
                </div>
              </div>
            </Link>
            <nav className="hidden items-center gap-7 md:flex">
              {['Services', 'Motion', 'Notes'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: 'var(--preview-muted)' }}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: 'var(--preview-accent-text)',
                  backgroundColor: 'var(--preview-accent)',
                  borderColor: 'var(--preview-accent)',
                }}
              >
                Start
              </a>
            </nav>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div>
              <div
                className={`mb-8 inline-flex border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] ${concept.radius}`}
                style={{
                  color: 'var(--preview-muted)',
                  backgroundColor: 'var(--preview-surface)',
                  borderColor: 'var(--preview-line)',
                }}
              >
                {concept.kicker}
              </div>
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-normal md:text-7xl">
                {concept.headline}
              </h1>
              <p className="mt-8 max-w-2xl text-base font-medium leading-8 md:text-lg" style={{ color: 'var(--preview-muted)' }}>
                {concept.subhead}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className={`inline-flex justify-center border px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] ${concept.radius}`}
                  style={{
                    color: 'var(--preview-accent-text)',
                    backgroundColor: 'var(--preview-accent)',
                    borderColor: 'var(--preview-accent)',
                  }}
                >
                  {concept.primaryAction}
                </a>
                <a
                  href="#services"
                  className={`inline-flex justify-center border px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] ${concept.radius}`}
                  style={{
                    color: 'var(--preview-text)',
                    backgroundColor: 'var(--preview-surface)',
                    borderColor: 'var(--preview-line)',
                  }}
                >
                  {concept.secondaryAction}
                </a>
              </div>
            </div>

            <IntroShowpiece concept={concept} />
          </section>

          <section id="services" className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: 'var(--preview-muted)' }}>
                  Service architecture
                </div>
                <h2 className="text-4xl font-bold tracking-normal md:text-5xl">Built around business outcomes.</h2>
              </div>
              <p className="max-w-md text-sm leading-7" style={{ color: 'var(--preview-muted)' }}>
                Each route keeps the pitch simple: what you build, why it matters, and how a buyer starts.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {concept.sections.map((section, index) => (
                <motion.article
                  key={section.title}
                  className={`border p-6 ${concept.radius}`}
                  style={{ backgroundColor: 'var(--preview-surface)', borderColor: 'var(--preview-line)' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs" style={{ color: 'var(--preview-muted)' }}>
                      0{index + 1}
                    </span>
                    <span className="h-2 w-2" style={{ backgroundColor: 'var(--preview-accent)' }} />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold tracking-normal">{section.title}</h3>
                  <p className="text-sm font-medium leading-7" style={{ color: 'var(--preview-muted)' }}>
                    {section.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
            {concept.metrics.map((metric) => (
              <div
                key={metric.label}
                className={`border p-6 ${concept.radius}`}
                style={{ backgroundColor: 'var(--preview-surface-alt)', borderColor: 'var(--preview-line)' }}
              >
                <div className="text-4xl font-bold tracking-normal">{metric.value}</div>
                <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--preview-muted)' }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </section>

          <section id="motion" className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-3">
              <SpecList title="Page transitions" items={concept.transitionSpecs} />
              <SpecList title="No-cliche visual rules" items={concept.visualRules} />
              <SpecList title="Implementation notes" items={concept.implementationNotes} />
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
            <div
              className={`border p-8 md:p-10 ${concept.radius}`}
              style={{ backgroundColor: 'var(--preview-surface)', borderColor: 'var(--preview-line)' }}
            >
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: 'var(--preview-muted)' }}>
                    Recommendation
                  </div>
                  <h2 className="text-3xl font-bold tracking-normal md:text-5xl">{concept.verdict}</h2>
                </div>
                <a
                  href="mailto:james@3kpro.services"
                  className={`inline-flex justify-center border px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] ${concept.radius}`}
                  style={{
                    color: 'var(--preview-accent-text)',
                    backgroundColor: 'var(--preview-accent)',
                    borderColor: 'var(--preview-accent)',
                  }}
                >
                  james@3kpro.services
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="relative z-10 border-t" style={{ borderColor: 'var(--preview-line)' }}>
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--preview-muted)' }}>
              Figma concepts: Precision / Momentum / Console / Studio / Casefile / Drawer
            </div>
            <div className="flex gap-3">
              {otherConcepts.map((item) => (
                <Link
                  key={item.id}
                  href={item.route}
                  className="border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: 'var(--preview-muted)', borderColor: 'var(--preview-line)' }}
                >
                  {item.id.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}
