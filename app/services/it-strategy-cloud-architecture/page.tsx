import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'IT Strategy & Cloud Architecture in Tulsa & Broken Arrow | 3K Pro Services',
  description: 'Future-proof your business with scalable IT strategy and modern cloud architecture designed for Tulsa and Broken Arrow companies. Stop paying for bloated infrastructure.',
  alternates: {
    canonical: 'https://3kpro.services/services/it-strategy-cloud-architecture',
  },
  openGraph: {
    title: 'IT Strategy & Cloud Architecture in Tulsa & Broken Arrow | 3K Pro Services',
    description: 'Future-proof your business with scalable IT strategy and modern cloud architecture designed for Tulsa and Broken Arrow companies. Stop paying for bloated infrastructure.',
    url: 'https://3kpro.services/services/it-strategy-cloud-architecture',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '3K Pro Services — IT Strategy & Cloud Architecture' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Strategy & Cloud Architecture in Tulsa & Broken Arrow | 3K Pro Services',
    description: 'Future-proof your business with scalable IT strategy and modern cloud architecture designed for Tulsa and Broken Arrow companies. Stop paying for bloated infrastructure.',
    images: ['/og-image.png'],
  },
}

export default function ITStrategyCloudArchitecture() {
  return (
    <div className="min-h-screen bg-white bg-grid">
      {/* Navigation */}
      <SiteNav />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link href="/#services" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#2563eb] transition-colors">
            ← Back to Services
          </Link>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight tracking-tight">
          IT Strategy & Cloud Architecture<br />
          <span className="opacity-40">in Tulsa & Broken Arrow</span>
        </h1>
        <div className="w-12 h-[3px] bg-[#2563eb] mb-8" />

        <div className="prose prose-lg prose-black max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Problem Framing: The Weight of Bloated Infrastructure</h2>
            <p>
              Many established businesses in Tulsa and Broken Arrow are running on legacy servers or poorly configured cloud environments that were set up years ago. This technical debt leads to slow application performance, unpredictable hosting bills, and vulnerability to security breaches. When your infrastructure is a black box, scaling your business becomes a technical risk rather than a strategic advantage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Our Cloud Optimization Approach</h2>
            <p>
              At 3K Pro Services, we design and modernize infrastructure to be lean, fast, and secure. Whether you need to migrate an aging on-premise database to AWS, optimize your Azure spending, or architect a completely serverless environment for a new product, we provide the technical clarity required to make it happen. We remove the bloat, secure the perimeter, and ensure your cloud spending directly aligns with your actual usage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Core Architectural Services</h2>
            <ul className="space-y-4 my-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#2563eb] rotate-45 mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Cloud Cost Optimization:</strong> Auditing your current AWS, Google Cloud, or Azure environments to identify idle resources, right-size databases, and cut your monthly infrastructure bill—often by 30% or more.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#2563eb] rotate-45 mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Secure Migration & Deployment:</strong> Moving your data and applications to modern, scalable environments with zero downtime. We implement CI/CD pipelines so your future updates deploy seamlessly.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#2563eb] rotate-45 mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Fractional CTO Consulting:</strong> Providing high-level technical leadership for Tulsa businesses that need architectural foresight but don't need a full-time Chief Technology Officer on payroll.</span>
              </li>
            </ul>
          </section>
        </div>

        <section id="contact" className="border-t border-black pt-16 mt-16">
          <h2 className="text-3xl font-bold text-black mb-8 uppercase tracking-tighter">Schedule an IT Infrastructure Audit</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-black/60 font-medium mb-8">
                Stop guessing about your technical debt and cloud costs. Reach out to schedule a technical audit, and we will provide a concrete blueprint to modernize your infrastructure.
              </p>
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-widest">
                  <span className="opacity-40 block mb-2">Location</span>
                  Broken Arrow & Tulsa, OK 74014
                </div>
                <div className="text-xs font-bold uppercase tracking-widest">
                  <span className="opacity-40 block mb-2">Direct Phone</span>
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
