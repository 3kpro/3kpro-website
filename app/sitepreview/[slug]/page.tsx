import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, BadgeCheck, ExternalLink, FileText, MapPin, SearchCheck, ShieldCheck } from 'lucide-react'
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
  const title = `${preview.shortName} Website Preview`
  const description = preview.conceptSubtitle
  const image = {
    url: preview.heroImage,
    width: 1200,
    height: 630,
    alt: `${preview.shortName} website preview`,
  }

  return {
    title: `${title} | 3K Pro Services`,
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
      title,
      description,
      url: pageUrl,
      siteName: '3K Pro Services',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@3KPRO_SAAS',
      images: [image],
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
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#182417]" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: 0 }}>
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/20 bg-[#112115]/45 text-white backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-black uppercase">
            3KPRO.SERVICES
          </Link>
          <nav className="flex items-center gap-5 text-xs font-semibold uppercase text-white/78">
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
        <section
          className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-[#132316] px-5 pb-10 pt-32 text-white sm:px-6 lg:px-8"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8,21,10,0.88), rgba(8,21,10,0.52) 45%, rgba(8,21,10,0.16)), linear-gradient(0deg, rgba(8,21,10,0.86), transparent 42%), url(${preview.heroImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.92fr_0.58fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/24 bg-white/14 px-5 py-3 text-xs font-semibold uppercase text-white shadow-[0_14px_50px_rgba(0,0,0,0.22)] backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9be15d] shadow-[0_0_18px_rgba(155,225,93,0.85)]" />
                Tulsa lawn, landscape & irrigation
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.9] md:text-7xl lg:text-8xl" style={{ letterSpacing: 0 }}>
                {preview.shortName}
                <span className="block text-[#d8f7b2]">lawn care website preview</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84">{preview.conceptSubtitle}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote-flow"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#f2c14e] px-7 text-sm font-black text-[#15200f] shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition hover:bg-[#ffd666]"
                >
                  {preview.primaryCta}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/18"
                >
                  {preview.secondaryCta}
                </a>
              </div>
            </div>

            <aside className="rounded-[28px] border border-white/22 bg-[#f8f3e7]/94 p-5 text-[#172315] shadow-[0_26px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <div className="flex items-center gap-3 text-sm font-black uppercase text-[#386018]">
                <SearchCheck size={18} aria-hidden="true" />
                Website rescue angle
              </div>
              <p className="mt-4 text-sm leading-7 text-[#3b4635]">{preview.observedOpportunity}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-[0_12px_34px_rgba(24,36,23,0.09)]">
                  <div className="text-xs font-black uppercase text-[#7a846f]">Location</div>
                  <div className="mt-2 text-lg font-black">{preview.location}</div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-[0_12px_34px_rgba(24,36,23,0.09)]">
                  <div className="text-xs font-black uppercase text-[#7a846f]">Primary fix</div>
                  <div className="mt-2 text-lg font-black">Estimate flow</div>
                </div>
              </div>
              <p className="mt-4 rounded-2xl border border-[#d7ccb7] bg-[#fffaf0] p-4 text-xs leading-6 text-[#6b6251]">
                Stock images are placeholders for preview only. Replace with Horizon trucks, crew, lawns, and before/after photos.
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-[#f5f1e8] px-5 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="text-xs font-black uppercase text-[#5f7d2f]">What this page should sell instantly</div>
              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-[#15200f] md:text-6xl">
                Green lawns, fixed sprinklers, easy estimates.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#56614c]">
              Visitors should understand the service category, local coverage, and estimate path immediately, then see enough proof to keep moving instead of bouncing back to Google.
            </p>
          </div>
        </section>

        <section id="services" className="bg-[#f5f1e8] px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
            {preview.services.map((service) => {
              const Icon = service.icon

              return (
                <article key={service.title} className="overflow-hidden rounded-[26px] bg-white shadow-[0_18px_60px_rgba(35,48,27,0.12)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#d9e7c5]">
                    <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-full bg-white text-[#386018] shadow-lg">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-[#172315]">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#5c6655]">{service.copy}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="quote-flow" className="bg-[#20351b] px-5 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-xs font-black uppercase text-[#bde681]">Recommended quote flow</div>
              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">Turn yard problems into clean leads.</h2>
              <p className="mt-6 text-sm leading-7 text-white/72">
                The site should behave like a front-office intake assistant: route the customer, gather the right detail, and make follow-up easy.
              </p>
              <div className="mt-8 overflow-hidden rounded-[24px] border border-white/14 bg-white/8">
                <img src={preview.gallery[1]?.image} alt={preview.gallery[1]?.imageAlt} className="aspect-[5/3] w-full object-cover" />
              </div>
            </div>

            <div className="space-y-3">
              {preview.conversionFlow.map((item, index) => (
                <div key={item} className="grid gap-4 rounded-[20px] border border-white/12 bg-white/[0.075] p-4 sm:grid-cols-[auto_1fr] sm:items-center">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f2c14e] text-sm font-black text-[#15200f]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            {preview.gallery.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_70px_rgba(35,48,27,0.12)]">
                <img src={item.image} alt={item.imageAlt} className="aspect-[16/10] w-full object-cover" />
                <div className="p-6 sm:p-8">
                  <h2 className="text-3xl font-black text-[#172315]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#5c6655]">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#eef4df] px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_60px_rgba(35,48,27,0.1)]">
              <div className="flex items-center gap-3 text-sm font-black uppercase text-[#386018]">
                <ShieldCheck size={18} aria-hidden="true" />
                Trust signals to surface
              </div>
              <div className="mt-6 space-y-3">
                {preview.trustPoints.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-6 text-[#56614c]">
                    <BadgeCheck className="mt-0.5 shrink-0 text-[#5f8d24]" size={16} aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_60px_rgba(35,48,27,0.1)]">
              <div className="flex items-center gap-3 text-sm font-black uppercase text-[#386018]">
                <FileText size={18} aria-hidden="true" />
                Listing cleanup notes
              </div>
              <div className="mt-6 space-y-3">
                {preview.listingNotes.map((note) => (
                  <div key={note} className="flex gap-3 text-sm leading-6 text-[#56614c]">
                    <BadgeCheck className="mt-0.5 shrink-0 text-[#5f8d24]" size={16} aria-hidden="true" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#172315] px-5 py-14 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 rounded-[30px] border border-white/10 bg-white/[0.06] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3 text-xs font-black uppercase text-[#bde681]">
                  <MapPin size={15} aria-hidden="true" />
                  Public research snapshot
                </div>
                <h2 className="mt-4 text-3xl font-black">Sources used for this concept</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/64">{preview.preparedFor}</p>
              </div>
              <Link
                href="/sitepreview"
                className="inline-flex min-h-12 w-fit items-center justify-center rounded-full border border-white/18 px-6 text-sm font-semibold text-white/86 transition hover:bg-white/10"
              >
                How previews work
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {preview.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.065] px-4 py-3 text-sm font-semibold text-white/76 transition hover:border-white/28 hover:text-white"
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
  )
}
