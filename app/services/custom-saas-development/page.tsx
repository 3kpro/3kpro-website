import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Custom SaaS Development for Tulsa & Broken Arrow | 3K Pro Services',
  description: 'Design and deploy custom micro-SaaS and internal tools specifically built for your Tulsa or Broken Arrow business. Stop forcing generic software to fit your unique needs.',
  alternates: {
    canonical: 'https://3kpro.services/services/custom-saas-development',
  },
  openGraph: {
    title: 'Custom SaaS Development for Tulsa & Broken Arrow | 3K Pro Services',
    description: 'Design and deploy custom micro-SaaS and internal tools specifically built for your Tulsa or Broken Arrow business. Stop forcing generic software to fit your unique needs.',
    url: 'https://3kpro.services/services/custom-saas-development',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '3K Pro Services — Custom SaaS Development' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom SaaS Development for Tulsa & Broken Arrow | 3K Pro Services',
    description: 'Design and deploy custom micro-SaaS and internal tools specifically built for your Tulsa or Broken Arrow business. Stop forcing generic software to fit your unique needs.',
    images: ['/og-image.png'],
  },
}

export default function CustomSaaSDevelopment() {
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
          Custom SaaS Development<br />
          <span className="opacity-40">in Tulsa & Broken Arrow</span>
        </h1>
        <div className="w-12 h-[3px] bg-[#2563eb] mb-8" />

        <div className="prose prose-lg prose-black max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Problem Framing: The Cost of Generic Software</h2>
            <p>
              Off-the-shelf software rarely fits a specialized business perfectly. Companies across Tulsa and Broken Arrow often find themselves paying thousands of dollars a month for enterprise "all-in-one" platforms, only to use 10% of the features while still relying on Excel to bridge the gap. This leads to disjointed data, high licensing costs, and a workflow that forces your team to adapt to the software, rather than the software adapting to your team.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Our Micro-SaaS Approach for Local Businesses</h2>
            <p>
              At 3K Pro Services, we build targeted, lightweight, and incredibly fast internal tools and micro-SaaS applications tailored exactly to your operational needs. Instead of building monolithic software that takes years to deploy, we focus on high-velocity development. We create the exact dashboard, database, or client portal you need to eliminate friction. 
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">What We Build</h2>
            <ul className="space-y-4 my-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#2563eb] rotate-45 mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Internal Operational Tools:</strong> Custom dashboards that unify your data, track your KPIs in real time, and give your management team a single pane of glass to view business health without logging into 5 different platforms.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#2563eb] rotate-45 mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Client Portals:</strong> Secure, brand-aligned web applications where your clients can log in, view project statuses, download secure files, or pay invoices directly.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#2563eb] rotate-45 mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Monetizable Micro-SaaS:</strong> Have a unique process that other businesses in your industry would pay for? We can turn your internal framework into a standalone SaaS product you can sell on a subscription basis.</span>
              </li>
            </ul>
          </section>
        </div>

        <section id="contact" className="border-t border-black pt-16 mt-16">
          <h2 className="text-3xl font-bold text-black mb-8 uppercase tracking-tighter">Schedule a SaaS Architecture Session</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-black/60 font-medium mb-8">
                Ready to build the exact tool your business has been missing? Reach out to schedule a technical evaluation. We'll outline a lightweight architecture that fits your exact parameters.
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
