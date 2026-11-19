import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceDetailPage from '../_components/ServiceDetailPage'

const pageUrl = 'https://3kpro.services/services/website-systems'

export const metadata: Metadata = {
  title: 'Tulsa Website Design for Local Businesses | 3K Pro Services',
  description:
    'Premium business websites, landing pages, local SEO foundations, quote flows, and launch handoff systems for Tulsa and Broken Arrow businesses.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Tulsa Website Design for Local Businesses | 3K Pro Services',
    description:
      'Build a business website that captures leads, explains the offer clearly, and gives local customers an easy next step.',
    url: pageUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '3K Pro Services Website Systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Systems | 3K Pro Services',
    description:
      'Premium business sites, landing pages, local SEO foundations, conversion paths, and handoff docs.',
    images: ['/og-image.png'],
  },
}

export default function WebsiteSystemsPage() {
  return (
    <>
    <div style={{background:'#15120c',color:'#fff',padding:'1rem',textAlign:'center'}}>
      Local Estimate Capture Sprint: $1,500 total, $750 to start. <Link href="/services/local-estimate-capture" style={{ color: 'var(--amber)', textDecoration: 'underline' }}>See scope and request an assessment →</Link>
    </div>
    <ServiceDetailPage
      eyebrow="Website systems"
      title="Website Design"
      mutedTitle="for Tulsa businesses"
      summary="Your website should not be a brochure nobody trusts. It should explain the offer, prove you are real, capture the right lead, and give your team a clean handoff path after launch."
      pageUrl={pageUrl}
      primaryCta="Request an assessment"
      proof={[
        { value: '3', label: 'Core conversion paths' },
        { value: 'Local', label: 'Tulsa and Broken Arrow SEO' },
        { value: 'Launch', label: 'Owner-ready handoff' },
      ]}
      sections={[
        {
          title: 'The actual problem',
          body: 'Most local business websites fail quietly. They look acceptable, but they do not explain the service fast enough, do not make quoting easy, and do not support follow-up once a customer reaches out.',
        },
        {
          title: 'The build approach',
          body: 'We structure the site around the offer, the service area, proof, quote capture, and the first operational handoff. The goal is not pretty pages. The goal is a working lead path.',
        },
        {
          title: 'Where this fits',
          body: 'Best fit for service businesses, consultants, operators, and small teams that need a sharper web presence without buying a bloated agency retainer.',
        },
      ]}
      deliverables={[
        'Positioned homepage and service pages matched to how customers actually search and decide.',
        'Mobile-first quote or contact path with clear next steps and reduced friction.',
        'Local SEO basics: service-area language, metadata, internal links, sitemap coverage, and structured data where appropriate.',
        'Launch handoff notes so the owner knows what changed, where leads go, and what to check next.',
      ]}
      faqs={[
        {
          question: 'Is this just a prettier website?',
          answer:
            'No. The visual layer matters, but the work is offer clarity, lead capture, local trust, and operational handoff. A pretty dead end is still a dead end.',
        },
        {
          question: 'Can you fix an existing site instead of rebuilding?',
          answer:
            'Yes, if the domain, hosting, content, and technical foundation are worth saving. If the old setup is slower than starting clean, we will say that early.',
        },
        {
          question: 'What does the first version usually include?',
          answer:
            'A focused homepage, key service content, local SEO foundations, contact or quote flow, analytics basics, and launch documentation.',
        },
      ]}
    >
      <section style={{ background: 'var(--panel)' }}>
        <div className="wrap">
          <div className="sec-head"><span className="tagchip">Client work</span><h2 className="h2">A site built for <span className="out">real requests.</span></h2></div>
          <div className="dossier"><div className="row"><span className="id">Tulsa area</span><h3>The Last Stop Shop</h3><div>
            <p>We helped move this mobile mechanic website to its own hosting and prepared its local search foundations. Customers can review services, request an appointment, and find payment options from their phone.</p>
            <a className="btn ghost" style={{ marginTop: 20 }} href="https://thelaststopshop.com/" target="_blank" rel="noopener noreferrer">Visit The Last Stop Shop</a>
          </div></div></div>
          <p style={{ marginTop: 28 }}>For a focused starting scope, explore the <Link href="/services/local-estimate-capture" style={{ color: 'var(--amber)', textDecoration: 'underline' }}>Local Estimate Capture Sprint</Link>. Serving Broken Arrow? See our <Link href="/services/website-design-broken-arrow" style={{ color: 'var(--amber)', textDecoration: 'underline' }}>Broken Arrow website design page</Link>.</p>
        </div>
      </section>
    </ServiceDetailPage>
    </>
  )
}
