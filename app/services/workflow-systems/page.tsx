import type { Metadata } from 'next'
import ServiceDetailPage from '../_components/ServiceDetailPage'

const pageUrl = 'https://3kpro.services/services/workflow-systems'

export const metadata: Metadata = {
  title: 'Workflow Systems and Automation | 3K Pro Services',
  description:
    'Automation, internal tools, reporting paths, and cleanup for small teams losing time to repeatable work.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Workflow Systems and Automation | 3K Pro Services',
    description:
      'Clean up repeatable business work with practical automation, internal tools, reporting paths, and owner-ready documentation.',
    url: pageUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '3K Pro Services Workflow Systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workflow Systems | 3K Pro Services',
    description:
      'Automation, internal tools, reporting paths, and cleanup for teams losing time to repeatable work.',
    images: ['/og-image.png'],
  },
}

export default function WorkflowSystemsPage() {
  return (
    <ServiceDetailPage
      eyebrow="Workflow systems"
      title="Workflow Systems"
      mutedTitle="for repeatable work"
      summary="When work depends on memory, inbox archaeology, or five disconnected spreadsheets, the business is paying a tax every day. We map the repeatable work and build the simplest system that removes drag."
      pageUrl={pageUrl}
      primaryCta="Start workflow blueprint"
      proof={[
        { value: 'Map', label: 'Current process' },
        { value: 'Build', label: 'Useful automation' },
        { value: 'Handoff', label: 'Docs and ownership' },
      ]}
      sections={[
        {
          title: 'The actual problem',
          body: 'Manual handoffs, duplicate entry, unclear ownership, and buried status updates create operational drag. The issue is usually not effort. It is that the system is making good people do low-value work.',
        },
        {
          title: 'The build approach',
          body: 'We identify the repeatable loop, decide what should be automated, what should stay human, and where the record of truth belongs. Then we build the smallest reliable version.',
        },
        {
          title: 'Where this fits',
          body: 'Best fit for lead intake, quoting, onboarding, reporting, admin follow-up, customer updates, internal dashboards, and recurring office work.',
        },
      ]}
      deliverables={[
        'Workflow map showing the trigger, owner, data source, decision point, and output.',
        'Automation or internal tool that removes one measurable repeat-work bottleneck.',
        'Reporting path or dashboard where the owner can see status without asking three people.',
        'Runbook and handoff docs so the system can be operated after launch.',
      ]}
      faqs={[
        {
          question: 'Do you automate everything?',
          answer:
            'No. Bad automation creates faster confusion. We automate the repeatable pieces and keep human review where judgment, risk, or customer tone matters.',
        },
        {
          question: 'What tools do you connect?',
          answer:
            'It depends on the business. Common targets include forms, email, spreadsheets, CRM, payment tools, project tools, and internal databases.',
        },
        {
          question: 'What is a good first workflow?',
          answer:
            'Lead intake, quote follow-up, customer onboarding, status reporting, or any task your team repeats weekly with the same steps and the same frustration.',
        },
      ]}
    />
  )
}
