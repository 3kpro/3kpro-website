import type { Metadata } from 'next'
import ServiceDetailPage from '../_components/ServiceDetailPage'

const pageUrl = 'https://3kpro.services/services/website-systems'

export const metadata: Metadata = {
  title: 'Website Systems for Local Businesses | 3K Pro Services',
  description:
    'Premium business websites, landing pages, local SEO foundations, quote flows, and launch handoff systems for Tulsa and Broken Arrow businesses.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Website Systems for Local Businesses | 3K Pro Services',
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
    <ServiceDetailPage
      eyebrow="Website systems"
      title="Website Systems"
      mutedTitle="for local business"
      summary="Your website should not be a brochure nobody trusts. It should explain the offer, prove you are real, capture the right lead, and give your team a clean handoff path after launch."
      pageUrl={pageUrl}
      primaryCta="Start website blueprint"
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
    />
  )
}
