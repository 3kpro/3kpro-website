import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const pageUrl = 'https://3kpro.services/services/ai-workspace-implementation'

export const metadata: Metadata = {
  title: 'AI Workspace Implementation for Small Businesses | 3K Pro Services',
  description:
    'Turn daily business work into a configured AI workspace. 3K Pro Services builds small-business, sales, marketing, and operations AI workspaces for Tulsa and remote SMBs.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'AI Workspace Implementation for Small Businesses | 3K Pro Services',
    description:
      'Turn daily business work into a configured AI workspace for owners, sales teams, marketing, operations, and back office work.',
    url: pageUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '3K Pro Services AI Workspace Implementation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workspace Implementation | 3K Pro Services',
    description:
      'Configured AI workspaces for small-business operations, sales, marketing, and admin teams.',
    images: ['/og-image.png'],
  },
}

const bundles = [
  {
    name: 'Ops Workspace',
    price: '$2,500+ setup',
    detail: 'For owners and operators who need SOPs, recurring admin work, client intake, invoicing, and internal answers in one AI-assisted workspace.',
  },
  {
    name: 'Revenue Workspace',
    price: '$5,000+ setup',
    detail: 'For sales and marketing teams that need campaign planning, lead follow-up, content drafting, pipeline review, and customer notes configured around their actual business.',
  },
  {
    name: 'Compliance Workspace',
    price: '$7,500+ setup',
    detail: 'For finance, legal, or regulated teams that need document review, policy playbooks, evidence collection, and repeatable review workflows.',
  },
]

const deliverables = [
  'Configured AI workspace matched to your business roles, terminology, and tools.',
  'Reusable command library for daily work: sales follow-up, operations notes, document review, reporting, and planning.',
  'Private operating playbooks that teach the AI how your business actually works.',
  'Quick-start training for the owner or team lead.',
  'Optional monthly support retainer for updates, new workflows, and staff onboarding.',
]

const faqs = [
  {
    question: 'What is an AI workspace implementation?',
    answer:
      'It is a configured operating workspace that gives AI the right business context, reusable workflows, and guardrails for daily sales, operations, marketing, and admin work.',
  },
  {
    question: 'Who is this for?',
    answer:
      'The best fit is a small business owner, local service company, agency, sales team, or operator with repeatable work trapped in inboxes, spreadsheets, SOPs, notes, or disconnected tools.',
  },
  {
    question: 'How does the blueprint deposit work?',
    answer:
      'The $500 deposit reserves a scoped blueprint session. That session maps the first workflows, confirms fit, and turns the implementation into a clear build quote.',
  },
]

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
      name: 'AI Workspace Implementation',
      item: pageUrl,
    },
  ],
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

export default function AIWorkspaceImplementation() {
  return (
    <div className="op">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteNav active="services" />

      <header className="pghead">
        <Link href="/#services" className="back">← Back to services</Link>
        <div className="eyebrow">Productized AI implementation</div>
        <h1>
          <span className="amb">AI Workspace</span><br />
          <span className="out">Implementation</span>
        </h1>
        <p>
          Most businesses do not need another chatbot. They need a configured
          workspace that knows their roles, workflows, documents, customers,
          and repetitive decisions. 3K Pro Services builds that layer so the
          owner and team can get useful work out of AI every day.
        </p>
      </header>

      <main>
        <section>
          <div className="wrap tight">
            <div className="price-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="price feat">
                <div className="lbl">Fast start</div>
                <div className="amt">$500<small> blueprint deposit</small></div>
                <p>
                  Use the deposit to reserve a build slot after scope is confirmed. The first
                  session maps your work, picks the workspace bundle, and defines the first
                  five workflows.
                </p>
                <Link href="/pay" className="btn">Open Quick Pay</Link>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--panel)' }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="tagchip">01 / Bundles</span>
              <h2 className="h2">Pick the <span className="out">workspace.</span></h2>
            </div>
            <div className="price-grid">
              {bundles.map((bundle) => (
                <div className="price" key={bundle.name}>
                  <div className="lbl">{bundle.price}</div>
                  <div className="amt" style={{ fontSize: '1.5rem' }}>{bundle.name}</div>
                  <p>{bundle.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="sec-head">
              <span className="tagchip">02 / Deliverables</span>
              <h2 className="h2">What gets <span className="out">delivered.</span></h2>
            </div>
            <p className="lede" style={{ marginBottom: 40 }}>
              This is implementation, not a slide deck. The output is a working AI workspace
              your team can use, with documented workflows and guardrails.
            </p>
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
            <h2 className="h2" style={{ marginTop: 26 }}>Book the <span className="amb">blueprint.</span></h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Send the current mess: spreadsheets, inboxes, SOPs, CRM, client intake, or
              whatever your team keeps manually repeating. We will turn it into the first
              workspace map and quote the implementation.
            </p>
            <div className="contact-line">
              <span style={{ color: 'var(--faint)' }}>Best fit: SMB owners, local service firms, agencies, sales teams</span>
              <Link href="/pay">3kpro.services/pay</Link>
            </div>
            <div className="contact-frame" style={{ marginTop: 32, maxWidth: 620 }}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
