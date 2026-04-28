import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Custom SaaS Development for Tulsa & Broken Arrow | 3K Pro Services',
  description: 'Design and deploy custom micro-SaaS and internal tools specifically built for your Tulsa or Broken Arrow business. Stop forcing generic software to fit your unique needs.',
}

export default function CustomSaaSDevelopment() {
  return (
    <div className="min-h-screen bg-white bg-grid">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex items-center justify-center border border-black group-hover:bg-black group-hover:text-white transition-all">
                  <span className="font-bold text-xl tracking-tighter">3K</span>
                </div>
                <span className="text-xl font-bold text-black tracking-tight uppercase">3kpro.services</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/#services" className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest">Services</Link>
              <Link href="/marketplace" className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest">Marketplace</Link>
              <Link href="/#about" className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest">About</Link>
              <Link href="#contact" className="px-6 py-2 border border-black text-black text-sm font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest">
                Initiate Project
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link href="/#services" className="text-[10px] font-bold uppercase tracking-widest hover:text-black/60 transition-colors">
            ← Back to Services
          </Link>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight tracking-tight">
          Custom SaaS Development<br />
          <span className="opacity-40">in Tulsa & Broken Arrow</span>
        </h1>

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
                <div className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Internal Operational Tools:</strong> Custom dashboards that unify your data, track your KPIs in real time, and give your management team a single pane of glass to view business health without logging into 5 different platforms.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Client Portals:</strong> Secure, brand-aligned web applications where your clients can log in, view project statuses, download secure files, or pay invoices directly.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0"></div>
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
                  +1 (918) 816-8832
                </div>
                <div className="text-xs font-bold uppercase tracking-widest">
                  <span className="opacity-40 block mb-2">Direct Channel</span>
                  james@3kpro.services
                </div>
              </div>
            </div>
            <div className="border border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">© {new Date().getFullYear()} 3KPRO.SERVICES. ALL RIGHTS RESERVED. | TULSA & BROKEN ARROW, OK</p>
        </div>
      </footer>
    </div>
  )
}