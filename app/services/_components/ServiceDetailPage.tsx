import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

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
    <div className="min-h-screen bg-white bg-grid">
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
      <SiteNav active="services" />

      <main className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link href="/#services" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#2563eb] transition-colors">
            Back to Services
          </Link>
        </div>

        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex border border-black px-3 py-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                {eyebrow}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-[0.95] tracking-tight">
              {title}<br />
              <span className="opacity-40">{mutedTitle}</span>
            </h1>
            <div className="w-12 h-[3px] bg-[#2563eb] mb-8" />
            <p className="max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-black/65">
              {summary}
            </p>
          </div>

          <div className="border border-black bg-white p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)]">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
              Project start
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
              Blueprint first
            </h2>
            <p className="text-sm font-medium leading-relaxed text-black/60 mb-6">
              Send the current mess. We map the first practical build, decide
              what matters now, and avoid building a beautiful system nobody
              actually uses.
            </p>
            <Link
              href="#contact"
              className="block w-full border border-black bg-black px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-black/90"
            >
              {primaryCta}
            </Link>
          </div>
        </section>

        <section className="mt-20 grid gap-px border border-black bg-black lg:grid-cols-3">
          {proof.map((item) => (
            <article key={item.label} className="bg-white p-8">
              <div className="mb-4 text-4xl font-bold tracking-tight text-black">
                {item.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
                {item.label}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-5">
              What this fixes
            </h2>
            <p className="text-sm font-medium leading-relaxed text-black/60">
              The offer is practical implementation. No mystery transformation
              deck, no tool-of-the-week theater, no rebuild just because a new
              trend appeared on your feed.
            </p>
          </div>
          <div className="space-y-6">
            {sections.map((section) => (
              <article key={section.title} className="border border-black/10 bg-white p-6">
                <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm font-medium leading-relaxed text-black/60">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-5">
              Deliverables
            </h2>
            <p className="text-sm font-medium leading-relaxed text-black/60">
              These are the outputs that make the work usable after launch.
            </p>
          </div>
          <div className="space-y-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start border border-black/10 bg-white p-5">
                <div className="w-2 h-2 bg-[#2563eb] rotate-45 mt-2 mr-4 flex-shrink-0" />
                <p className="text-sm font-medium leading-relaxed text-black/70">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-black pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-5">
                Common questions
              </h2>
              <p className="text-sm font-medium leading-relaxed text-black/60">
                The short version: if it creates leads, saves time, reduces
                confusion, or gives the business owner better control, it is on
                the table.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="border border-black/10 bg-white p-6">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-black">{faq.question}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-black/60">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 border-t border-black pt-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6 uppercase tracking-tighter">
                Start the blueprint
              </h2>
              <p className="text-black/60 font-medium mb-8">
                Tell us what is broken, slow, unclear, or costing you leads. We
                will map the first useful version and show you what to build.
              </p>
              <div className="space-y-5 text-xs font-bold uppercase tracking-widest">
                <div>
                  <span className="opacity-40 block mb-2">Service area</span>
                  Tulsa, Broken Arrow, and remote SMB teams
                </div>
                <div>
                  <span className="opacity-40 block mb-2">Direct phone</span>
                  <a href="tel:+19188168832" className="hover:underline">918-816-8832</a>
                </div>
              </div>
            </div>
            <div className="border border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
