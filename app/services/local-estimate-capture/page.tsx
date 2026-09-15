import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const url = 'https://3kpro.services/services/local-estimate-capture'
export const metadata: Metadata = {
  title: 'Tulsa Website & Estimate Capture Sprint | 3K Pro Services',
  description: 'A focused website and inquiry path for Tulsa and Broken Arrow service businesses. $1,500 total, $750 to start after written scope approval.',
  alternates: { canonical: url },
  openGraph: { title: 'Local Estimate Capture Sprint | 3K Pro Services', url,
    description: 'Make it easier for local customers to understand your services and request an estimate.' },
}

export default function EstimateCapturePage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: 'Local Estimate Capture Sprint', url,
    provider: { '@id': 'https://3kpro.services/#localbusiness' },
    areaServed: ['Tulsa, Oklahoma', 'Broken Arrow, Oklahoma'],
    offers: { '@type': 'Offer', price: '1500', priceCurrency: 'USD', url,
      description: '$750 deposit after written scope approval; $750 balance before launch unless otherwise agreed.' },
  }
  return (
    <div className="op">
      <SiteNav active="services" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      <main>
        <header className="pghead">
          <div className="eyebrow">Tulsa and Broken Arrow service businesses</div>
          <h1>Make it easier to<br /><span className="amb">request an estimate.</span></h1>
          <p>Your customers need to know what you do, where you work, and how to reach you. We build a focused website or repair the page you have, then connect inquiries to a documented follow-up process.</p>
          <a className="btn" href="#assessment">Request an assessment</a>{' '}
          <a className="btn ghost" href="tel:+19188168832">Call 918-816-8832</a>
        </header>
        <section><div className="wrap tight">
          <h2 className="h2">Local Estimate Capture Sprint</h2>
          <p className="lede">$1,500 total. $750 to start after you approve the written scope. The remaining $750 is due before launch unless agreed otherwise.</p>
          <h3>What we build</h3>
          <ul style={{lineHeight:2,paddingLeft:'1.5rem'}}>
            <li>One focused service page or a defined repair to your existing site.</li>
            <li>Clear service and service-area content, mobile phone links, and an inquiry form.</li>
            <li>Confirmed inquiry destination, response steps, and an owner handoff.</li>
            <li>Page titles, canonical URLs, sitemap treatment, and appropriate structured data.</li>
            <li>Basic inquiry and contact-click measurement, with verification where account access allows.</li>
          </ul>
          <h3>Before you pay</h3>
          <p className="lede">James checks your current site, customer action, account access, and content. You receive a written scope, revision allowance, timeline and any third-party costs. Work starts after that scope and the deposit are agreed. Assessment requests do not charge you.</p>
          <h3>Where this fits</h3>
          <p className="lede">For mechanics, landscapers, contractors and other local service businesses in Tulsa and Broken Arrow whose customers need an easy way to call or request a quote. We confirm your actual service area instead of inventing locations.</p>
          <h3>What is outside the sprint</h3>
          <p className="lede">Advertising spend, custom CRM systems, full branding, unlimited revisions and ongoing support are separately scoped. Domain and hosting costs are disclosed before work. Rankings, traffic and customer volume are not guaranteed.</p>
          <h3>You keep control</h3>
          <p className="lede">You receive the source and handoff instructions. We agree the account ownership and hosting arrangement in writing. Future changes can be handled as separate work.</p>
          <h3>How long does it take?</h3>
          <p className="lede">The written quote gives the delivery date after content and access are checked. Missing business details, approvals or account access can change that date.</p>
        </div></section>
        <section id="assessment"><div className="wrap tight">
          <h2 className="h2">Request an assessment</h2>
          <p className="lede">Tell James where inquiries get stuck. Response target: one business day. You decide whether to proceed after the scope is clear.</p>
          <div style={{background:'#fff',padding:'2rem',maxWidth:680,marginTop:24}}><ContactForm assessment /></div>
        </div></section>
      </main>
      <SiteFooter />
    </div>
  )
}
