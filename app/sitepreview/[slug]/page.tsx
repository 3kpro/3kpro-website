import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, BadgeCheck, ExternalLink, FileText, SearchCheck, ShieldCheck } from 'lucide-react'
import { getSitePreview, sitePreviews } from '@/lib/sitePreviews'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return sitePreviews.map((preview) => ({ slug: preview.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const preview = getSitePreview(slug)

  if (!preview) {
    return {}
  }

  const pageUrl = `https://3kpro.services/sitepreview/${preview.slug}`

  return {
    title: `${preview.shortName} Website Preview | 3K Pro Services`,
    description: `A 3KPRO concept preview for ${preview.businessName}: website recovery, quote flow, listings cleanup, and local service positioning.`,
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    openGraph: {
      title: `${preview.shortName} Website Preview`,
      description: preview.conceptSubtitle,
      url: pageUrl,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${preview.shortName} website preview` }],
    },
  }
}

export default async function ProspectSitePreviewPage({ params }: PageProps) {
  const { slug } = await params
  const preview = getSitePreview(slug)

  if (!preview) {
    notFound()
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080a] text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: 0 }}>
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), radial-gradient(circle at 76% 10%, rgba(25,224,111,0.16), transparent 26%), radial-gradient(circle at 22% 20%, rgba(89,72,150,0.24), transparent 32%)',
          backgroundSize: '64px 64px, 64px 64px, 100% 100%, 100% 100%',
        }}
      >
        <header className="border-b border-white/[0.06] bg-[#08080a]/82 backdrop-blur-xl">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-black uppercase text-white">
              3KPRO.SERVICES
            </Link>
            <nav className="flex items-center gap-5 text-xs font-semibold uppercase text-white/68">
              <Link href="/sitepreview" className="hidden transition hover:text-white sm:inline">
                Preview system
              </Link>
              <a href="mailto:james@3kpro.services" className="transition hover:text-white">
                Contact James
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.055] px-5 py-3 text-xs font-semibold uppercase text-white/68">
                <span className="h-2 w-2 rounded-full bg-[#19e06f] shadow-[0_0_18px_rgba(25,224,111,0.7)]" />
                Concept preview
              </div>
              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.92] md:text-7xl" style={{ letterSpacing: 0 }}>
                {preview.shortName}
                <span className="block text-white/52">{preview.category}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">{preview.conceptTitle}</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/54">{preview.conceptSubtitle}</p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote-flow"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-white/88"
                >
                  {preview.primaryCta}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 px-7 text-sm font-semibold text-white/82 transition hover:border-white/34 hover:text-white"
                >
                  {preview.secondaryCta}
                </a>
              </div>
            </div>

            <aside className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">
              <div className="rounded-[24px] border border-[#19e06f]/25 bg-[#19e06f]/10 p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#b9ffd4]">
                  <SearchCheck size={18} aria-hidden="true" />
                  Observed opportunity
                </div>
                <p className="mt-5 text-sm leading-7 text-white/72">{preview.observedOpportunity}</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-[#111113] p-5">
                  <div className="text-xs font-semibold uppercase text-white/40">Location</div>
                  <div className="mt-4 text-2xl font-semibold">{preview.location}</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-[#111113] p-5">
                  <div className="text-xs font-semibold uppercase text-white/40">Primary fix</div>
                  <div className="mt-4 text-2xl font-semibold">Quote path</div>
                </div>
              </div>
              <p className="mt-5 rounded-[18px] border border-white/10 bg-black/20 p-4 text-xs leading-6 text-white/44">
                {preview.preparedFor}
              </p>
            </aside>
          </section>

          <section id="services" className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">Previewed service structure</div>
                <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Clear services, clear next step.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/58">
                A customer should know what Horizon does, where they work, and how to request help before they scroll twice.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {preview.services.map((service) => {
                const Icon = service.icon

                return (
                  <article key={service.title} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/76">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className="mt-8 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/58">{service.copy}</p>
                  </article>
                )
              })}
            </div>
          </section>

          <section id="quote-flow" className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
            <div>
              <div className="text-xs font-semibold uppercase text-white/45">Recommended quote flow</div>
              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Stop losing people after they find you.</h2>
              <p className="mt-6 text-sm leading-7 text-white/60">
                The site should act like an intake assistant: route the customer, capture the right detail, and give the office a usable lead.
              </p>
            </div>
            <div className="space-y-3">
              {preview.conversionFlow.map((item, index) => (
                <div key={item} className="grid gap-4 rounded-[20px] border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-[auto_1fr] sm:items-center">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-semibold text-black">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/68">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <ShieldCheck size={18} aria-hidden="true" />
                Trust signals to surface
              </div>
              <div className="mt-6 space-y-3">
                {preview.trustPoints.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-6 text-white/64">
                    <BadgeCheck className="mt-0.5 shrink-0 text-[#19e06f]" size={16} aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <FileText size={18} aria-hidden="true" />
                Listing cleanup notes
              </div>
              <div className="mt-6 space-y-3">
                {preview.listingNotes.map((note) => (
                  <div key={note} className="flex gap-3 text-sm leading-6 text-white/64">
                    <BadgeCheck className="mt-0.5 shrink-0 text-[#19e06f]" size={16} aria-hidden="true" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
            <div className="rounded-[30px] border border-white/10 bg-[#101012] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="text-xs font-semibold uppercase text-white/45">Public research snapshot</div>
                  <h2 className="mt-4 text-3xl font-semibold">Sources used for this concept</h2>
                </div>
                <Link
                  href="/sitepreview"
                  className="inline-flex min-h-12 w-fit items-center justify-center rounded-full border border-white/14 px-6 text-sm font-semibold text-white/82 transition hover:border-white/34 hover:text-white"
                >
                  How previews work
                </Link>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {preview.sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70 transition hover:border-white/28 hover:text-white"
                  >
                    {source.label}
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
