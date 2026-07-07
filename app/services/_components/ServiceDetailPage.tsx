import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import OperatorStyles from '@/components/operator/OperatorStyles'

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
    <div className="op">
      <OperatorStyles />
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

      <nav className="topnav">
        <Link href="/" className="logo">
          <span className="sq" />3KPRO<span style={{ color: 'var(--faint)', fontWeight: 600 }}>·OS</span>
        </Link>
        <div className="nav-links">
          <Link href="/#services" className="active">Services</Link>
          <Link href="/#products">Products</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="nav-clock" />
        <Link href="/#contact" className="btn nav-cta">Start</Link>
      </nav>

      <header className="pghead">
        <Link href="/#services" className="back">← Back to services</Link>
        <div className="eyebrow">{eyebrow}</div>
        <h1>
          <span className="amb">{title}</span><br />
          <span className="out">{mutedTitle}</span>
        </h1>
        <p>{summary}</p>
        <div className="hero-ctas" style={{ display: 'flex', gap: 16, marginTop: 38, flexWrap: 'wrap' }}>
          <Link href="#contact" className="btn">{primaryCta}</Link>
          <Link href="/#services" className="btn ghost">View all services</Link>
        </div>
      </header>

      <section>
        <div className="wrap tight">
          <div className="prod-grid" style={{ gridTemplateColumns: `repeat(${proof.length}, 1fr)` }}>
            {proof.map((item) => (
              <div key={item.label} style={{ border: '1px solid var(--line)', background: 'var(--panel)', padding: '26px 24px' }}>
                <div className="disp" style={{ fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: 'var(--ink)' }}>{item.value}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9.5, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--faint)', marginTop: 10 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--panel)' }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="tagchip">01 / Fix the drag</span>
            <h2 className="h2">What this <span className="out">fixes.</span></h2>
          </div>
          <div className="dossier">
            {sections.map((section, index) => (
              <div className="row" key={section.title}>
                <span className="id">0{index + 1}</span>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="tagchip">02 / Deliverables</span>
            <h2 className="h2">Built to <span className="out">handoff.</span></h2>
          </div>
          <div className="svc-grid">
            {deliverables.map((item, index) => (
              <div className="svc" key={item} style={{ clipPath: 'none' }}>
                <div className="top">
                  <span className="num">0{index + 1}</span>
                  <span className="st">ONLINE</span>
                </div>
                <p style={{ marginTop: 20 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--panel)' }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="tagchip">03 / Questions</span>
            <h2 className="h2">Common <span className="out">questions.</span></h2>
          </div>
          <div className="svc-grid cols-3">
            {faqs.map((faq) => (
              <div className="svc" key={faq.question} style={{ clipPath: 'none' }}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" id="contact">
        <div className="wrap">
          <span className="tagchip">04 / Contact</span>
          <h2 className="h2" style={{ marginTop: 26 }}>Start the <span className="amb">blueprint.</span></h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Tell us what is broken, slow, unclear, or costing you leads. We will map the
            first useful version and show you what to build.
          </p>
          <div className="contact-line">
            <span style={{ color: 'var(--faint)' }}>Tulsa and Broken Arrow</span>
            <a href="tel:+19188168832">918-816-8832</a>
            <a href="mailto:james@3kpro.services">james@3kpro.services</a>
          </div>
          <div className="contact-frame" style={{ marginTop: 32, maxWidth: 620 }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="foot">
        <span>3KPRO Systems {'//'} Tulsa, Oklahoma {'//'} Remote capable</span>
        <div className="links">
          <Link href="/#services">Services</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/pay">Quick Pay</Link>
        </div>
      </footer>
    </div>
  )
}
