'use client'

import ContactForm from '@/components/ContactForm'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Service = {
  eyebrow: string
  title: string
  copy: string
  points: string[]
  href: string
}

type Product = {
  mono: string
  name: string
  copy: string
  href: string
  label: string
  external?: boolean
}

const services: Service[] = [
  {
    eyebrow: '01 / Web',
    title: 'Website systems',
    copy: 'Premium business sites, landing pages, local SEO foundations, conversion paths, and handoff docs.',
    points: ['Positioning', 'Responsive build', 'Launch handoff'],
    href: '/services/website-systems',
  },
  {
    eyebrow: '02 / Automation',
    title: 'Workflow systems',
    copy: 'Automation, internal tools, reporting paths, and cleanup for teams losing time to repeatable work.',
    points: ['Process map', 'Integration build', 'Owner-ready docs'],
    href: '/services/workflow-systems',
  },
  {
    eyebrow: '03 / AI Workspace',
    title: 'AI workspace systems',
    copy: 'Configured AI workspaces for owners, sales teams, operators, and staff who need repeatable work handled with context.',
    points: ['Role setup', 'Workflow library', 'Team handoff'],
    href: '/services/ai-workspace-implementation',
  },
  {
    eyebrow: '04 / Advisory',
    title: 'Operating systems',
    copy: 'Technical strategy, cloud architecture, and software planning for practical operators.',
    points: ['Systems audit', 'Architecture plan', 'Build roadmap'],
    href: '/services/operating-systems',
  },
]

const products: Product[] = [
  {
    mono: 'X',
    name: 'Xelora',
    copy: 'Predictive content intelligence for creators and operators who need stronger launch momentum.',
    href: 'https://getxelora.com',
    label: 'Live platform',
    external: true,
  },
  {
    mono: 'C',
    name: 'Cloud Ledger',
    copy: 'Self-service Azure waste audit for finding idle resources, cost leaks, and practical savings.',
    href: '/cloud-ledger',
    label: 'Available',
  },
  {
    mono: 'M',
    name: 'Marketplace',
    copy: 'A growing catalog of software assets, audits, and operating tools from the 3KPRO ecosystem.',
    href: '/marketplace',
    label: 'Explore',
  },
]

const proof = [
  { value: '2010', label: 'Operating since' },
  { value: '3', label: 'Core build lanes' },
  { value: '24h', label: 'Response target' },
]

const credibility = [
  {
    title: 'Tulsa operator, not a faceless agency',
    copy: '3KPRO is built for local owners who need clear systems, direct communication, and practical execution without a bloated handoff maze.',
  },
  {
    title: 'Enterprise-shaped judgment',
    copy: 'The work is informed by two decades around serious Tulsa-area operating environments, including ONEOK, PSO, and Enerflex.',
  },
  {
    title: 'Small first, useful fast',
    copy: 'Projects start with a narrow blueprint, a working first version, and documentation the owner can actually use after launch.',
  },
]

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
            className="fixed inset-0 z-[70] cursor-default bg-black/62 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.34, ease }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[80] h-screen w-full max-w-[620px] overflow-y-auto border-l border-white/10 bg-[#101012] px-6 py-8 text-white shadow-[0_0_120px_rgba(0,0,0,0.62)] sm:px-10"
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
              className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-white/12 text-xl leading-none text-white/70 transition hover:border-white/30 hover:text-white"
              aria-label="Close"
            >
              x
            </button>
            <div className="mt-8 text-xs font-semibold uppercase text-white/45">Project intake</div>
            <h2 className="mt-7 text-5xl font-semibold leading-[0.96] md:text-6xl" style={{ letterSpacing: 0 }}>
              Start a
              <span className="block text-white/52">Project</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/58">
              Use the form below for real requests. The drawer is the visual interaction; the form still sends through the existing site action.
            </p>
            <div className="mt-9 bg-white p-5 text-black sm:p-7">
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
  const [mounted, setMounted] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const shouldReduceMotion = !mounted || Boolean(reduceMotion)
  const ease = [0.22, 1, 0.36, 1] as const

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080a] text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: 0 }}>
      <style>{`
        .home-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px),
            radial-gradient(circle at 50% 24%, rgba(89,72,150,0.34), transparent 34%),
            radial-gradient(circle at 50% 42%, rgba(255,255,255,0.075), transparent 30%);
          background-size: 64px 64px, 64px 64px, 100% 100%, 100% 100%;
        }

        .home-name-glow {
          animation: homePulse 4.8s ease-in-out infinite;
        }

        .home-title-frame {
          animation: homeFramePulse 5.8s ease-in-out infinite;
        }

        .home-title-frame::before,
        .home-title-frame::after {
          content: "";
          position: absolute;
          left: 50%;
          width: min(420px, 74%);
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
        }

        .home-title-frame::before { top: -18px; }
        .home-title-frame::after { bottom: -18px; }

        @keyframes homePulse {
          0%, 100% { opacity: .34; transform: translate(-50%, -50%) scale(.98); filter: blur(34px); }
          50% { opacity: .58; transform: translate(-50%, -50%) scale(1.08); filter: blur(46px); }
        }

        @keyframes homeFramePulse {
          0%, 100% { opacity: .36; filter: blur(0px); }
          50% { opacity: .72; filter: blur(.35px); }
        }

        @media (max-width: 720px) {
          .home-hero-title {
            width: min(100%, calc(100vw - 40px));
            max-width: calc(100vw - 40px);
            min-width: 0;
            font-size: clamp(3.25rem, 14.5vw, 4rem) !important;
            overflow-wrap: break-word;
          }

          .home-title-frame {
            inset: -16px -12px !important;
          }

          .home-hero-copy {
            width: min(100%, calc(100vw - 48px));
            max-width: calc(100vw - 48px);
          }

          .home-hero-copy p {
            width: min(100%, 320px);
            margin-left: auto;
            margin-right: auto;
            font-size: 14px;
            line-height: 1.75;
          }
        }
      `}</style>

      <ProjectDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <div className="home-grid relative min-h-screen">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.18),#08080a_92%)]" />

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#08080a]/82 backdrop-blur-xl">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-black uppercase text-white">
              3KPRO.SERVICES
            </Link>
            <nav className="hidden items-center gap-8 text-xs font-semibold uppercase text-white/72 md:flex">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#products" className="transition hover:text-white">Products</a>
              <a href="#pricing" className="transition hover:text-white">Pricing</a>
              <button type="button" onClick={() => setDrawerOpen(true)} className="transition hover:text-white">
                Contact
              </button>
            </nav>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex min-h-10 items-center rounded-full bg-white px-4 text-xs font-semibold text-black transition hover:bg-white/88 md:hidden"
            >
              Start
            </button>
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
              className="home-hero-title relative isolate max-w-5xl text-[clamp(5.6rem,13vw,11rem)] font-semibold leading-[0.86] text-white"
              style={{ letterSpacing: 0 }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.22, ease }}
            >
              <span aria-hidden="true" className="home-name-glow pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[440px] w-[440px] rounded-full bg-[#6658d9]/38" />
              <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
              <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]" />
              <span aria-hidden="true" className="home-title-frame pointer-events-none absolute -inset-x-12 -inset-y-8 z-20">
                <span className="absolute left-0 top-0 h-10 w-10 border-l border-t border-white/40" />
                <span className="absolute right-0 top-0 h-10 w-10 border-r border-t border-white/40" />
                <span className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-white/40" />
                <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-white/40" />
                <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 -translate-y-4 bg-white/36" />
                <span className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 translate-y-4 bg-white/36" />
              </span>
              <span className="relative z-10 block">3KPRO</span>
              <span className="relative z-10 block text-white/64">Systems</span>
            </motion.h1>

            <motion.div
              className="home-hero-copy mt-14 grid w-full max-w-4xl gap-8 text-center text-base leading-7 text-white/58 md:grid-cols-[1fr_auto_1fr] md:text-lg"
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
                href="#services"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 px-8 text-sm font-semibold text-white/82 transition hover:border-white/34 hover:text-white"
              >
                View Services
              </a>
            </motion.div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
            {proof.map((item, index) => (
              <motion.div
                key={item.label}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease }}
              >
                <div className="text-4xl font-semibold">{item.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase text-white/44">{item.label}</div>
              </motion.div>
            ))}
          </section>

          <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">00 / Credibility</div>
                <h2 className="mt-8 text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  Local trust,
                  <span className="block text-white/52">real systems.</span>
                </h2>
              </div>
              <div className="grid gap-4">
                {credibility.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease }}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-xs text-white/40">0{index + 1}</span>
                      <span className="h-2 w-2 rounded-full bg-[#19e06f]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/58">{item.copy}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="mb-14 grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">01 / Services</div>
                <h2 className="mt-8 text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  Digital
                  <span className="block text-white/52">Solutions</span>
                </h2>
              </div>
              <p className="max-w-2xl border-l border-white/18 pl-8 text-lg leading-8 text-white/72">
                The site now sells 3KPRO as one calm operating surface: web, automation, technical strategy, and product systems.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`min-h-20 rounded-full border px-6 text-left transition ${
                    activeService === index
                      ? 'border-white/36 bg-white text-black'
                      : 'border-white/12 bg-white/[0.035] text-white/76 hover:border-white/28'
                  }`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.52, delay: index * 0.08, ease }}
                >
                  <span className="block text-xs font-semibold uppercase opacity-60">{service.eyebrow}</span>
                  <span className="mt-1 block text-lg font-semibold">{service.title}</span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="mt-10 grid gap-5 md:grid-cols-[.9fr_1.1fr]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12, filter: 'blur(8px)' }}
                transition={{ duration: 0.52, ease }}
              >
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                  <div className="text-xs font-semibold uppercase text-white/40">{services[activeService].eyebrow}</div>
                  <h3 className="mt-7 text-4xl font-semibold leading-none md:text-5xl" style={{ letterSpacing: 0 }}>
                    {services[activeService].title}
                  </h3>
                  <p className="mt-7 max-w-lg text-base leading-7 text-white/62">{services[activeService].copy}</p>
                  <Link
                    href={services[activeService].href}
                    className="mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/88"
                  >
                    View details
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {services[activeService].points.map((point, index) => (
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

          <section id="products" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">02 / Product ecosystem</div>
                <h2 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  Useful tools,
                  <span className="block text-white/52">not shelfware.</span>
                </h2>
              </div>
              <Link href="/marketplace" className="inline-flex min-h-12 w-fit items-center rounded-full border border-white/14 px-6 text-sm font-semibold text-white/82 transition hover:border-white/34 hover:text-white">
                Explore marketplace
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {products.map((product, index) => (
                <motion.article
                  key={product.name}
                  className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.52, delay: index * 0.08, ease }}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/16 text-sm font-bold">{product.mono}</span>
                    <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/52">{product.label}</span>
                  </div>
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="mt-4 min-h-24 text-sm leading-7 text-white/58">{product.copy}</p>
                  <Link
                    href={product.href}
                    target={product.external ? '_blank' : undefined}
                    rel={product.external ? 'noreferrer' : undefined}
                    className="mt-7 inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/88"
                  >
                    Open
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-8 rounded-[34px] border border-white/10 bg-white/[0.035] p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">03 / Entry points</div>
                <h2 className="mt-8 text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  Clear ways
                  <span className="block text-white/52">to start.</span>
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ['Website rebuild', '$899+', 'A focused business site with launch basics.'],
                  ['Automation sprint', 'Scoped', 'One workflow mapped, built, and handed over.'],
                  ['AI workspace', 'Blueprint', 'Private knowledge and assistant setup for teams.'],
                ].map(([name, price, copy]) => (
                  <div key={name} className="rounded-[24px] border border-white/10 bg-[#111113] p-5">
                    <div className="text-sm font-semibold">{name}</div>
                    <div className="mt-5 text-3xl font-semibold">{price}</div>
                    <p className="mt-5 text-sm leading-6 text-white/56">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
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
                <span className="grid h-12 w-12 place-items-center rounded-full bg-black text-white">3K</span>
                Start a Project
              </button>
              <OrbitSeal compact />
            </div>
          </section>
        </main>

        <footer className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-white/38 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>3KPRO Systems / Tulsa, Oklahoma / Remote capable</div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+19188168832" className="transition hover:text-white">918-816-8832</a>
              <a href="mailto:james@3kpro.services" className="transition hover:text-white">james@3kpro.services</a>
              <Link href="/marketplace" className="transition hover:text-white">Marketplace</Link>
              <Link href="/pay" className="transition hover:text-white">Quick Pay</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
