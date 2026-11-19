import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceDetailPage from '../_components/ServiceDetailPage'

const pageUrl = 'https://3kpro.services/services/website-design-broken-arrow'

export const metadata: Metadata = {
  title: 'Broken Arrow Website Design for Local Businesses | 3K Pro Services',
  description: 'Website design and practical inquiry paths for Broken Arrow businesses. Explore new builds, focused site repairs, local SEO foundations, and a clear handoff.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Broken Arrow Website Design | 3K Pro Services',
    description: 'A clear website and inquiry path for Broken Arrow service businesses.',
    url: pageUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '3K Pro Services' }],
  },
}

export default function BrokenArrowWebsiteDesignPage() {
  return (
    <ServiceDetailPage
      eyebrow="Broken Arrow website design"
      title="Website Design"
      mutedTitle="for Broken Arrow businesses"
      summary="Help local customers understand your services and reach you from their phones. 3K Pro Services builds and repairs websites for Broken Arrow businesses that rely on calls and estimate requests."
      pageUrl={pageUrl}
      primaryCta="Request an assessment"
      proof={[
        { value: 'Local', label: 'Broken Arrow and Tulsa area' },
        { value: 'Mobile', label: 'Clear call and inquiry paths' },
        { value: 'Handoff', label: 'Documentation for your team' },
      ]}
      sections={[
        { title: 'New site or targeted repair', body: 'We start with your current site, services, and the questions customers ask before they call. The assessment identifies whether a focused repair or a new site is the useful first step.' },
        { title: 'Make the next step clear', body: 'A customer should be able to find your service area, understand what you offer, and call or request an estimate without hunting through the page.' },
        { title: 'Local search foundations', body: 'We organize service content, page titles, links, and sitemap coverage around your actual work and service area. Search visibility depends on indexing, competition, and ongoing work.' },
      ]}
      deliverables={[
        'An agreed website scope tailored to the services and locations you actually cover.',
        'Responsive pages with a visible phone number and an inquiry or quote path.',
        'Local SEO foundations, including page metadata, internal links, and sitemap coverage where appropriate.',
        'A practical handoff explaining what changed, where inquiries go, and what to check after launch.',
      ]}
      faqs={[
        { question: 'Can you improve the site I already have?', answer: 'Yes. We assess the existing site and hosting before recommending a focused repair or a new build.' },
        { question: 'What does the first engagement cost?', answer: 'The Local Estimate Capture Sprint is $1,500 total, with $750 to start after written scope approval. Other projects are scoped separately.' },
        { question: 'Can you guarantee a first-place Google ranking?', answer: 'No. We improve the site and its search foundations, then use available Search Console data to monitor visibility over time.' },
      ]}
    >
      <section style={{ background: 'var(--panel)' }}>
        <div className="wrap">
          <div className="sec-head"><span className="tagchip">Local work</span><h2 className="h2">An example from <span className="out">the Tulsa area.</span></h2></div>
          <div className="dossier"><div className="row"><span className="id">Mobile mechanic</span><h3>The Last Stop Shop</h3><div>
            <p>We helped bring this mobile mechanic website to its own hosting and prepared its local search foundations. Customers can review services, request an appointment, and find payment options from their phone.</p>
            <a className="btn ghost" style={{ marginTop: 20 }} href="https://thelaststopshop.com/" target="_blank" rel="noopener noreferrer">Visit The Last Stop Shop</a>
          </div></div></div>
          <p style={{ marginTop: 28 }}>See the <Link href="/services/local-estimate-capture" style={{ color: 'var(--amber)', textDecoration: 'underline' }}>Local Estimate Capture Sprint</Link> or explore our <Link href="/services/website-systems" style={{ color: 'var(--amber)', textDecoration: 'underline' }}>website design services</Link>.</p>
        </div>
      </section>
    </ServiceDetailPage>
  )
}
