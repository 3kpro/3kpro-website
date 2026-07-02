import type { Metadata } from 'next'
import ServiceDetailPage from '../_components/ServiceDetailPage'

const pageUrl = 'https://3kpro.services/services/operating-systems'

export const metadata: Metadata = {
  title: 'Operating Systems and Technical Strategy | 3K Pro Services',
  description:
    'Technical strategy, cloud architecture, AI workspace setup, and software planning for practical operators.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Operating Systems and Technical Strategy | 3K Pro Services',
    description:
      'Turn scattered tools, cloud decisions, software plans, and AI ideas into a practical operating roadmap.',
    url: pageUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '3K Pro Services Operating Systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operating Systems | 3K Pro Services',
    description:
      'Technical strategy, cloud architecture, and software planning for practical operators.',
    images: ['/og-image.png'],
  },
}

export default function OperatingSystemsPage() {
  return (
    <ServiceDetailPage
      eyebrow="Operating systems"
      title="Operating Systems"
      mutedTitle="for practical operators"
      summary="This is the planning layer for owners who need their tools, data, cloud, workflows, and AI direction to stop fighting each other. We turn scattered technical decisions into an executable roadmap."
      pageUrl={pageUrl}
      primaryCta="Start systems blueprint"
      proof={[
        { value: 'Audit', label: 'Current stack' },
        { value: 'Roadmap', label: 'Build sequence' },
        { value: 'Control', label: 'Owner clarity' },
      ]}
      sections={[
        {
          title: 'The actual problem',
          body: 'Most technical debt starts as reasonable short-term decisions. Over time, those decisions pile up until nobody knows which tool owns what, which system is trusted, or what should be built next.',
        },
        {
          title: 'The build approach',
          body: 'We review the current stack, expose the operational risk, separate urgent fixes from nice-to-have ideas, and define a build sequence that can actually be executed.',
        },
        {
          title: 'Where this fits',
          body: 'Best fit for cloud cleanup, software planning, AI workspace direction, internal-tool roadmaps, vendor decisions, and technical leadership without a full-time CTO.',
        },
      ]}
      deliverables={[
        'Current-state audit of systems, tools, workflows, risk points, and ownership gaps.',
        'Prioritized technical roadmap that separates urgent fixes, revenue opportunities, and later-phase work.',
        'Architecture notes for cloud, data, AI workspace, or internal software decisions.',
        'Executive summary the owner can use to make decisions without decoding technical noise.',
      ]}
      faqs={[
        {
          question: 'Is this fractional CTO work?',
          answer:
            'Yes, for the size of business that needs senior technical judgment but does not need or want a full-time technical executive.',
        },
        {
          question: 'Do you also build after the roadmap?',
          answer:
            'Yes, when the scope is a fit. The roadmap is designed to become implementation work, not a document that dies in a folder.',
        },
        {
          question: 'What should we bring to the first session?',
          answer:
            'Bring the tools you use, the recurring problems, the bills or systems you do not trust, and the business goal behind the technical mess.',
        },
      ]}
    />
  )
}
