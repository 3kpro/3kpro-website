import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, ClipboardCheck, CreditCard, MonitorCheck, Rocket } from 'lucide-react'
import SitePreviewForm from '@/components/SitePreviewForm'

const pageUrl = 'https://3kpro.services/sitepreview'

export const metadata: Metadata = {
  title: 'Website Preview Request | 3K Pro Services',
  description:
    'Request a fast website preview from 3K Pro Services. Built for local businesses that need a clearer web presence, quote path, and launch process.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Website Preview Request | 3K Pro Services',
    description:
      'Start with a focused preview, then move through deposit, build, approval, final payment, and launch.',
    url: pageUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '3K Pro Services Website Preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Preview Request | 3K Pro Services',
    description: 'Request a focused website preview and clear project path.',
    images: ['/og-image.png'],
  },
}

const process = [
  {
    title: 'Inquiry',
    copy: 'Submit the business, current site, service area, offer, and desired customer action.',
    icon: ClipboardCheck,
  },
  {
    title: 'Fit check',
    copy: 'We verify the angle, current web presence, local trust gaps, and the fastest useful preview path.',
    icon: MonitorCheck,
  },
  {
    title: 'Preview',
    copy: 'You get a focused concept direction with positioning, structure, and conversion recommendations.',
    icon: BadgeCheck,
  },
  {
    title: 'Deposit',
    copy: 'Approved projects move through Quick Pay with a deposit before production work starts.',
    icon: CreditCard,
  },
  {
    title: 'Build',
    copy: 'The site is built, reviewed, revised, documented, and prepared for launch.',
    icon: Rocket,
  },
]

const requiredInputs = [
  'Business name, contact name, and email',
  'Current website or social profile if no site exists',
  'Core services, offer, and best customer action',
  'Service area, city, or market focus',
  'Any competitor, inspiration, or must-avoid examples',
]

const gates = [
  'No build starts until the preview direction and first paid milestone are approved.',
  'No production launch happens without explicit final approval.',
  'Final balance is collected through Quick Pay before final handoff unless otherwise agreed.',
]

export default function SitePreviewPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080a] text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: 0 }}>
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), radial-gradient(circle at 70% 12%, rgba(89,72,150,0.28), transparent 34%)',
          backgroundSize: '64px 64px, 64px 64px, 100% 100%',
        }}
      >
        <header className="border-b border-white/[0.06] bg-[#08080a]/82 backdrop-blur-xl">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-black uppercase text-white">
              3KPRO.SERVICES
            </Link>
            <nav className="flex items-center gap-5 text-xs font-semibold uppercase text-white/68">
              <Link href="/services/website-systems" className="hidden transition hover:text-white sm:inline">
                Website systems
              </Link>
              <Link href="/pay" className="transition hover:text-white">
                Quick Pay
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <section className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="pt-4">
              <div className="text-xs font-semibold uppercase text-white/45">Website preview intake</div>
              <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.92] md:text-7xl" style={{ letterSpacing: 0 }}>
                Preview first.
                <span className="block text-white/52">Build after proof.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">
                This is the clean starting lane for a client website project: send the inputs, get a focused preview direction, approve the scope, pay the deposit, then build without guessing.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#preview-request"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-white/88"
                >
                  Start preview request
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <Link
                  href="/pay"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/14 px-7 text-sm font-semibold text-white/82 transition hover:border-white/34 hover:text-white"
                >
                  Open Quick Pay
                  <CreditCard size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-[#111113] p-5">
                  <div className="text-xs font-semibold uppercase text-white/40">Starting lane</div>
                  <div className="mt-6 text-3xl font-semibold">$500</div>
                  <p className="mt-4 text-sm leading-6 text-white/58">
                    Typical deposit path after preview approval. Final scope depends on build size.
                  </p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-[#111113] p-5">
                  <div className="text-xs font-semibold uppercase text-white/40">Decision output</div>
                  <div className="mt-6 text-3xl font-semibold">Fit / Fix / Build</div>
                  <p className="mt-4 text-sm leading-6 text-white/58">
                    The preview should make the next move obvious, not create a bigger fog machine.
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-[22px] border border-white/10 bg-[#111113] p-5">
                <div className="text-xs font-semibold uppercase text-white/40">What this prevents</div>
                <p className="mt-5 text-sm leading-7 text-white/62">
                  Random screenshots, half-scoped promises, missing payment gates, and the classic small-business trap where everyone is excited but nobody knows who owes what next.
                </p>
              </div>
            </div>
          </section>

          <section className="py-18 mt-16">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">Inquiry to payout</div>
                <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">The operating path</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/58">
                This is intentionally linear. If a client cannot move through these gates, the project is not ready.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-5">
              {process.map((step, index) => {
                const Icon = step.icon

                return (
                  <article key={step.title} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-xs text-white/40">0{index + 1}</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/72">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/58">{step.copy}</p>
                  </article>
                )
              })}
            </div>
          </section>

          <section id="preview-request" className="grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-xs font-semibold uppercase text-white/45">Preview request</div>
              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Send enough signal to build the angle.</h2>
              <p className="mt-6 text-sm leading-7 text-white/60">
                Weak intake creates weak work. The form asks for the minimum useful context so the preview can focus on business fit, trust, conversion, and next action.
              </p>

              <div className="mt-8 space-y-3">
                {requiredInputs.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm text-white/68">
                    <BadgeCheck className="mt-0.5 shrink-0 text-[#19e06f]" size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#101012] p-5 shadow-[0_0_120px_rgba(0,0,0,0.28)] sm:p-7">
              <SitePreviewForm />
            </div>
          </section>

          <section className="grid gap-5 py-16 md:grid-cols-3">
            {gates.map((gate) => (
              <div key={gate} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-6">
                <div className="mb-6 h-2 w-2 rounded-full bg-[#19e06f]" />
                <p className="text-sm leading-7 text-white/64">{gate}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}
