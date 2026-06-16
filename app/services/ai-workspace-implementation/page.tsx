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

export default function AIWorkspaceImplementation() {
  return (
    <div className="min-h-screen bg-white bg-grid">
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
                Productized AI implementation
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-[0.95] tracking-tight">
              AI Workspace<br />
              <span className="opacity-40">Implementation</span>
            </h1>
            <div className="w-12 h-[3px] bg-[#2563eb] mb-8" />
            <p className="max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-black/65">
              Most businesses do not need another chatbot. They need a configured
              workspace that knows their roles, workflows, documents, customers,
              and repetitive decisions. 3K Pro Services builds that layer so the
              owner and team can get useful work out of AI every day.
            </p>
          </div>

          <div className="border border-black bg-white p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)]">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
              Fast start
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
              $500 Blueprint Deposit
            </h2>
            <p className="text-sm font-medium leading-relaxed text-black/60 mb-6">
              Use the deposit to reserve a build slot after scope is confirmed.
              The first session maps your work, picks the workspace bundle, and
              defines the first five workflows.
            </p>
            <Link
              href="/pay"
              className="block w-full border border-black bg-black px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-black/90"
            >
              Open Quick Pay
            </Link>
          </div>
        </section>

        <section className="mt-20 grid gap-px border border-black bg-black lg:grid-cols-3">
          {bundles.map((bundle) => (
            <article key={bundle.name} className="bg-white p-8">
              <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                {bundle.price}
              </div>
              <h2 className="mb-5 text-2xl font-bold uppercase tracking-tight">
                {bundle.name}
              </h2>
              <p className="text-sm font-medium leading-relaxed text-black/60">
                {bundle.detail}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-5">
              What gets delivered
            </h2>
            <p className="text-sm font-medium leading-relaxed text-black/60">
              This is implementation, not a slide deck. The output is a working
              AI workspace your team can use, with documented workflows and
              guardrails.
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6 uppercase tracking-tighter">
                Book the blueprint
              </h2>
              <p className="text-black/60 font-medium mb-8">
                Send the current mess: spreadsheets, inboxes, SOPs, CRM, client
                intake, or whatever your team keeps manually repeating. We will
                turn it into the first workspace map and quote the implementation.
              </p>
              <div className="space-y-5 text-xs font-bold uppercase tracking-widest">
                <div>
                  <span className="opacity-40 block mb-2">Best fit</span>
                  SMB owners, local service firms, agencies, sales teams, operators
                </div>
                <div>
                  <span className="opacity-40 block mb-2">Payment start</span>
                  <Link href="/pay" className="hover:underline">3kpro.services/pay</Link>
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
