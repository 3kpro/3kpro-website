import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

type ServiceDetailPageProps = {
  eyebrow: string
  title: string
  mutedTitle: string
  summary: string
  pageUrl: string
  primaryCta: string
  sections: {
    title: string
    body: string
  }[]
  deliverables: string[]
  proof: {
    value: string
    label: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export default function ServiceDetailPage({
  eyebrow,
  title,
  mutedTitle,
  summary,
  pageUrl,
  primaryCta,
  sections,
  deliverables,
  proof,
  faqs,
}: ServiceDetailPageProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://3kpro.services',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://3kpro.services/#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: pageUrl,
      },
    ],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    provider: {
      '@type': 'ProfessionalService',
      name: '3K Pro Services',
      url: 'https://3kpro.services',
      telephone: '+1-918-816-8832',
    },
    areaServed: ['Tulsa, OK', 'Broken Arrow, OK', 'Bixby, OK', 'Jenks, OK', 'Owasso, OK'],
    url: pageUrl,
    description: summary,
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080a] text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: 0 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative min-h-screen bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.12),#08080a_94%)]" />

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#08080a]/82 backdrop-blur-xl">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-black uppercase text-white">
              3KPRO.SERVICES
            </Link>
            <nav className="hidden items-center gap-8 text-xs font-semibold uppercase text-white/72 md:flex">
              <Link href="/#services" className="transition hover:text-white">Services</Link>
              <Link href="/#products" className="transition hover:text-white">Products</Link>
              <Link href="/#pricing" className="transition hover:text-white">Pricing</Link>
              <Link href="/#contact" className="transition hover:text-white">Contact</Link>
            </nav>
            <Link
              href="/#contact"
              className="inline-flex min-h-10 items-center rounded-full bg-white px-4 text-xs font-semibold text-black transition hover:bg-white/88"
            >
              Start
            </Link>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <Link href="/#services" className="mb-10 inline-flex items-center rounded-full border border-white/12 bg-white/[0.045] px-5 py-3 text-xs font-semibold uppercase text-white/64 backdrop-blur-xl transition hover:border-white/28 hover:text-white">
                Back to services
              </Link>

              <div className="mb-8 text-xs font-semibold uppercase text-white/45">{eyebrow}</div>
              <h1 className="relative max-w-4xl text-6xl font-semibold leading-[0.9] text-white md:text-8xl" style={{ letterSpacing: 0 }}>
                <span aria-hidden="true" className="pointer-events-none absolute -inset-x-8 -inset-y-6 z-0">
                  <span className="absolute left-0 top-0 h-10 w-10 border-l border-t border-white/36" />
                  <span className="absolute right-0 top-0 h-10 w-10 border-r border-t border-white/36" />
                  <span className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-white/36" />
                  <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-white/36" />
                </span>
                <span className="relative z-10 block">{title}</span>
                <span className="relative z-10 block text-white/52">{mutedTitle}</span>
              </h1>
              <p className="mt-12 max-w-2xl text-lg leading-8 text-white/68">
                {summary}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition hover:bg-white/88"
                >
                  {primaryCta}
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 px-8 text-sm font-semibold text-white/82 transition hover:border-white/34 hover:text-white"
                >
                  View all services
                </Link>
              </div>
            </div>

            <aside className="rounded-[34px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="text-xs font-semibold uppercase text-white/45">Project start</div>
              <h2 className="mt-8 text-4xl font-semibold leading-none text-white">
                Blueprint
                <span className="block text-white/52">first.</span>
              </h2>
              <p className="mt-7 text-sm leading-7 text-white/58">
                Send the current mess. We map the first practical build, decide
                what matters now, and avoid building a beautiful system nobody
                actually uses.
              </p>
              <div className="mt-8 grid gap-3">
                {proof.map((item) => (
                  <div key={item.label} className="rounded-[22px] border border-white/10 bg-[#111113] p-5">
                    <div className="text-3xl font-semibold text-white">{item.value}</div>
                    <div className="mt-3 text-xs font-semibold uppercase text-white/42">{item.label}</div>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">01 / Fix the drag</div>
                <h2 className="mt-8 text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  What this
                  <span className="block text-white/52">fixes.</span>
                </h2>
              </div>
              <p className="max-w-2xl border-l border-white/18 pl-8 text-lg leading-8 text-white/70">
                Practical implementation. No mystery transformation deck, no
                tool-of-the-week theater, no rebuild just because a new trend
                appeared on your feed.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {sections.map((section, index) => (
                <article key={section.title} className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs text-white/40">0{index + 1}</span>
                    <span className="h-2 w-2 rounded-full bg-white/52" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/58">{section.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-8 rounded-[34px] border border-white/10 bg-white/[0.035] p-7 md:grid-cols-[0.85fr_1.15fr] md:p-10">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">02 / Deliverables</div>
                <h2 className="mt-8 text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  Built to
                  <span className="block text-white/52">handoff.</span>
                </h2>
                <p className="mt-8 max-w-md text-sm leading-7 text-white/58">
                  These are the outputs that make the work usable after launch.
                </p>
              </div>
              <div className="grid gap-4">
                {deliverables.map((item, index) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-[#111113] p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs text-white/38">0{index + 1}</span>
                      <span className="h-2 w-2 rounded-full bg-[#19e06f]" />
                    </div>
                    <p className="text-sm leading-7 text-white/68">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="mb-14 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">03 / Questions</div>
                <h2 className="mt-8 text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  Common
                  <span className="block text-white/52">questions.</span>
                </h2>
              </div>
              <p className="max-w-2xl border-l border-white/18 pl-8 text-lg leading-8 text-white/70">
                The short version: if it creates leads, saves time, reduces
                confusion, or gives the business owner better control, it is on
                the table.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7">
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/58">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-xs font-semibold uppercase text-white/45">04 / Contact</div>
                <h2 className="mt-8 text-5xl font-semibold leading-[0.94] md:text-7xl" style={{ letterSpacing: 0 }}>
                  Start the
                  <span className="block text-white/52">blueprint.</span>
                </h2>
                <p className="mt-8 max-w-md text-base leading-7 text-white/62">
                  Tell us what is broken, slow, unclear, or costing you leads. We
                  will map the first useful version and show you what to build.
                </p>
                <div className="mt-10 flex flex-wrap gap-4 text-xs text-white/42">
                  <span>Tulsa and Broken Arrow</span>
                  <a href="tel:+19188168832" className="transition hover:text-white">918-816-8832</a>
                  <a href="mailto:james@3kpro.services" className="transition hover:text-white">james@3kpro.services</a>
                </div>
              </div>
              <div className="rounded-[28px] bg-white p-5 text-black sm:p-7">
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-white/38 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>3KPRO Systems / Tulsa, Oklahoma / Remote capable</div>
            <div className="flex flex-wrap gap-4">
              <Link href="/#services" className="transition hover:text-white">Services</Link>
              <Link href="/marketplace" className="transition hover:text-white">Marketplace</Link>
              <Link href="/pay" className="transition hover:text-white">Quick Pay</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
