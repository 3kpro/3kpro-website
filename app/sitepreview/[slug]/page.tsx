import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, BadgeCheck, ExternalLink, FileText, Gauge, MapPin, PhoneCall, SearchCheck, ShieldCheck, Wrench } from 'lucide-react'
import { getSitePreview, sitePreviewExtraSlugs, sitePreviews } from '@/lib/sitePreviews'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return [...sitePreviews.map((preview) => preview.slug), ...sitePreviewExtraSlugs].map((slug) => ({ slug }))
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
    description: `A 3KPRO concept preview for ${preview.businessName}: ${preview.conceptTitle}`,
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

  const categoryEyebrow = preview.categoryEyebrow ?? preview.category
  const headline = preview.headline ?? preview.shortName
  const headlineAccent = preview.headlineAccent ?? 'lawn care website preview'
  const primaryFix = preview.primaryFix ?? 'Estimate flow'
  const placeholderNote =
    preview.placeholderNote ??
    `Stock images are placeholders for preview only. Replace with ${preview.shortName} trucks, crew, real work, and before/after photos.`
  const sectionKicker = preview.sectionKicker ?? 'What this page should sell instantly'
  const sectionHeadline = preview.sectionHeadline ?? 'Green lawns, fixed sprinklers, easy estimates.'
  const sectionCopy =
    preview.sectionCopy ??
    'Visitors should understand the service category, local coverage, and estimate path immediately, then see enough proof to keep moving instead of bouncing back to Google.'
  const quoteFlowKicker = preview.quoteFlowKicker ?? 'Recommended quote flow'
  const quoteFlowHeadline = preview.quoteFlowHeadline ?? 'Turn yard problems into clean leads.'
  const quoteFlowCopy =
    preview.quoteFlowCopy ??
    'The site should behave like a front-office intake assistant: route the customer, gather the right detail, and make follow-up easy.'
  const trustHeading = preview.trustHeading ?? 'Trust signals to surface'
  const listingHeading = preview.listingHeading ?? 'Listing cleanup notes'
  const isMechanicPreview = preview.category === 'Mobile Mechanic'
  const logoImage = preview.logoImage
  const logoAlt = preview.logoAlt ?? `${preview.shortName} logo`
  const heroSurface = isMechanicPreview ? 'bg-[#0f1115]' : 'bg-[#132316]'
  const heroOverlay = isMechanicPreview
    ? `linear-gradient(90deg, rgba(8,10,13,0.94), rgba(8,10,13,0.68) 46%, rgba(8,10,13,0.2)), linear-gradient(0deg, rgba(8,10,13,0.9), transparent 46%), url(${preview.heroImage})`
    : `linear-gradient(90deg, rgba(8,21,10,0.88), rgba(8,21,10,0.52) 45%, rgba(8,21,10,0.16)), linear-gradient(0deg, rgba(8,21,10,0.86), transparent 42%), url(${preview.heroImage})`
  const accentText = isMechanicPreview ? 'text-[#ffd166]' : 'text-[#d8f7b2]'
  const primaryButton = isMechanicPreview
    ? 'bg-[#ffb703] text-[#111318] hover:bg-[#ffd166]'
    : 'bg-[#f2c14e] text-[#15200f] hover:bg-[#ffd666]'
  const proofStats =
    preview.proofStats ??
    [
      {
        value: preview.location,
        label: 'local service area',
      },
      {
        value: primaryFix,
        label: 'primary conversion path',
      },
      {
        value: 'Noindex',
        label: 'private concept preview',
      },
    ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#182417]" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: 0 }}>
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/20 bg-black/45 text-white backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            {logoImage ? (
              <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/22 bg-white p-1 shadow-[0_10px_28px_rgba(0,0,0,0.22)]">
                <img src={logoImage} alt={logoAlt} className="h-full w-full object-contain" />
              </span>
            ) : null}
            <span className="min-w-0">
              <span className="block truncate text-sm font-black uppercase leading-tight sm:text-base">{preview.businessName}</span>
              <span className="block text-[10px] font-bold uppercase text-white/58">Preview by 3KPRO</span>
            </span>
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
          className={`relative isolate flex min-h-[88svh] items-end overflow-hidden ${heroSurface} px-5 pb-10 pt-32 text-white sm:px-6 lg:px-8`}
          style={{
            backgroundImage: heroOverlay,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {isMechanicPreview ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(90deg,rgba(255,183,3,0.18)_1px,transparent_1px),linear-gradient(0deg,rgba(255,183,3,0.12)_1px,transparent_1px)] bg-[size:56px_56px] opacity-70" />
          ) : null}
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.92fr_0.58fr] lg:items-end">
            <div className="max-w-3xl">
              {logoImage ? (
                <div className="mb-7 inline-flex items-center gap-4 rounded-[24px] border border-white/22 bg-white/94 p-3 pr-5 text-[#111318] shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-md">
                  <span className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-[18px] bg-white">
                    <img src={logoImage} alt={logoAlt} className="h-full w-full object-contain" />
                  </span>
                  <span className="max-w-[13rem] text-left text-sm font-black uppercase leading-tight sm:max-w-none sm:text-base">
                    {preview.businessName}
                  </span>
                </div>
              ) : null}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/24 bg-white/14 px-5 py-3 text-xs font-semibold uppercase text-white shadow-[0_14px_50px_rgba(0,0,0,0.22)] backdrop-blur-md">
                <span className={`h-2.5 w-2.5 rounded-full ${isMechanicPreview ? 'bg-[#ffb703] shadow-[0_0_22px_rgba(255,183,3,0.95)]' : 'bg-[#9be15d] shadow-[0_0_18px_rgba(155,225,93,0.85)]'}`} />
                {categoryEyebrow}
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.9] md:text-7xl lg:text-8xl" style={{ letterSpacing: 0 }}>
                {headline}
                <span className={`block ${accentText}`}>{headlineAccent}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84">{preview.conceptSubtitle}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote-flow"
                  className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 text-sm font-black shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition ${primaryButton}`}
                >
                  {preview.primaryCta}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  href={preview.variations ? '#variations' : '#services'}
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/18"
                >
                  {preview.secondaryCta}
                </a>
              </div>
              {isMechanicPreview ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-xs font-black uppercase text-white/86 backdrop-blur-md">
                    <PhoneCall size={14} aria-hidden="true" />
                    Call or text first
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-xs font-black uppercase text-white/86 backdrop-blur-md">
                    <Gauge size={14} aria-hidden="true" />
                    Diagnostic before quote
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-xs font-black uppercase text-white/86 backdrop-blur-md">
                    <Wrench size={14} aria-hidden="true" />
                    Repair approval flow
                  </span>
                </div>
              ) : null}
            </div>

            <aside className={`rounded-[28px] border ${isMechanicPreview ? 'border-[#ffb703]/36 bg-[#111318]/90 text-white' : 'border-white/22 bg-[#f8f3e7]/94 text-[#172315]'} p-5 shadow-[0_26px_80px_rgba(0,0,0,0.28)] backdrop-blur-md`}>
              {logoImage ? (
                <div className={`mb-5 flex items-center gap-4 rounded-[22px] border p-4 ${isMechanicPreview ? 'border-white/12 bg-white/[0.08]' : 'border-[#d7ccb7] bg-white'}`}>
                  <span className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-[18px] bg-white p-1">
                    <img src={logoImage} alt={logoAlt} className="h-full w-full object-contain" />
                  </span>
                  <div>
                    <div className={`text-[11px] font-black uppercase ${isMechanicPreview ? 'text-[#ffd166]' : 'text-[#386018]'}`}>Logo in preview</div>
                    <div className="mt-2 text-xl font-black leading-tight">{preview.shortName}</div>
                  </div>
                </div>
              ) : null}
              <div className={`flex items-center gap-3 text-sm font-black uppercase ${isMechanicPreview ? 'text-[#ffd166]' : 'text-[#386018]'}`}>
                <SearchCheck size={18} aria-hidden="true" />
                {isMechanicPreview ? 'Diagnostic-first angle' : 'Website rescue angle'}
              </div>
              <p className={`mt-4 text-sm leading-7 ${isMechanicPreview ? 'text-white/76' : 'text-[#3b4635]'}`}>{preview.observedOpportunity}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className={`${isMechanicPreview ? 'bg-white/10 ring-1 ring-white/12' : 'bg-white shadow-[0_12px_34px_rgba(24,36,23,0.09)]'} rounded-2xl p-4`}>
                  <div className={`text-xs font-black uppercase ${isMechanicPreview ? 'text-white/54' : 'text-[#7a846f]'}`}>Location</div>
                  <div className="mt-2 text-lg font-black">{preview.location}</div>
                </div>
                <div className={`${isMechanicPreview ? 'bg-[#ffb703] text-[#111318]' : 'bg-white shadow-[0_12px_34px_rgba(24,36,23,0.09)]'} rounded-2xl p-4`}>
                  <div className={`text-xs font-black uppercase ${isMechanicPreview ? 'text-[#5c4300]' : 'text-[#7a846f]'}`}>Primary fix</div>
                  <div className="mt-2 text-lg font-black">{primaryFix}</div>
                </div>
              </div>
              <p className={`mt-4 rounded-2xl border p-4 text-xs leading-6 ${isMechanicPreview ? 'border-white/12 bg-white/[0.06] text-white/62' : 'border-[#d7ccb7] bg-[#fffaf0] text-[#6b6251]'}`}>
                {placeholderNote}
              </p>
            </aside>
          </div>
        </section>

        <section className={`${isMechanicPreview ? 'bg-[#111318]' : 'bg-[#20351b]'} px-5 py-6 text-white sm:px-6 lg:px-8`}>
          <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
            {proofStats.map((stat) => (
              <div key={`${stat.value}-${stat.label}`} className="rounded-[22px] border border-white/12 bg-white/[0.075] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                <div className={`text-3xl font-black ${isMechanicPreview ? 'text-[#ffd166]' : 'text-[#d8f7b2]'}`}>{stat.value}</div>
                <div className="mt-2 text-xs font-black uppercase text-white/58">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f5f1e8] px-5 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="text-xs font-black uppercase text-[#5f7d2f]">{sectionKicker}</div>
              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-[#15200f] md:text-6xl">
                {sectionHeadline}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#56614c]">
              {sectionCopy}
            </p>
          </div>
        </section>

        {preview.variations ? (
          <section id="variations" className="bg-[#f5f1e8] px-5 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
              {preview.variations.map((variation, index) => (
                <article key={variation.title} className="group overflow-hidden rounded-[28px] bg-white shadow-[0_18px_60px_rgba(35,48,27,0.12)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(17,19,24,0.18)]">
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#182417]">
                    <img src={variation.image} alt={variation.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className={`absolute inset-0 ${isMechanicPreview ? 'bg-gradient-to-t from-black/82 via-black/22 to-transparent' : 'bg-gradient-to-t from-black/72 via-black/18 to-transparent'}`} />
                    {isMechanicPreview ? (
                      <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/48 px-3 py-2 text-[11px] font-black uppercase text-[#ffd166] backdrop-blur-md">
                        Option {index + 1}
                      </div>
                    ) : null}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`inline-grid h-10 w-10 place-items-center rounded-full text-sm font-black ${isMechanicPreview ? 'bg-[#ffb703] text-[#111318]' : 'bg-[#f2c14e] text-[#15200f]'}`}>
                        {index + 1}
                      </span>
                      <h3 className="mt-3 text-2xl font-black leading-tight text-white">{variation.title}</h3>
                    </div>
                  </div>
                  <div className="space-y-5 p-6">
                    <p className="text-sm leading-7 text-[#56614c]">{variation.subtitle}</p>
                    <div>
                      <div className="text-xs font-black uppercase text-[#7a846f]">Best for</div>
                      <p className="mt-2 text-sm leading-6 text-[#172315]">{variation.bestFor}</p>
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase text-[#7a846f]">Visual direction</div>
                      <p className="mt-2 text-sm leading-6 text-[#172315]">{variation.visualDirection}</p>
                    </div>
                    <div className="rounded-2xl bg-[#eef4df] p-4">
                      <div className="text-xs font-black uppercase text-[#5f7d2f]">Customer action</div>
                      <p className="mt-2 text-sm font-bold leading-6 text-[#172315]">{variation.customerAction}</p>
                    </div>
                    {variation.linkHref ? (
                      <Link
                        href={variation.linkHref}
                        className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-black transition ${isMechanicPreview ? 'bg-[#111318] text-white hover:bg-[#2a2d35]' : 'bg-[#172315] text-white hover:bg-[#2a3a21]'}`}
                      >
                        Open this preview
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

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
              <div className="text-xs font-black uppercase text-[#bde681]">{quoteFlowKicker}</div>
              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">{quoteFlowHeadline}</h2>
              <p className="mt-6 text-sm leading-7 text-white/72">
                {quoteFlowCopy}
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
                {trustHeading}
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
                {listingHeading}
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
