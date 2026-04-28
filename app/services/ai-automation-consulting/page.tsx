import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'AI Automation Consulting for Tulsa & Broken Arrow Businesses | 3K Pro Services',
  description: 'Partner with 3K Pro Services in Tulsa & Broken Arrow to turn your SOPs into AI-native workflows, agents, and automations that cut manual work across your business.',
}

export default function AIAutomationConsulting() {
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
          AI Automation Consulting<br />
          <span className="opacity-40">in Tulsa & Broken Arrow</span>
        </h1>

        <div className="prose prose-lg prose-black max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Problem Framing: Manual Workflows & Legacy Tools</h2>
            <p>
              Many small and medium-sized businesses in the Tulsa and Broken Arrow area are hitting a growth ceiling not because of a lack of demand, but because their internal systems simply can't scale. If your team is bogged down by manual data entry, disconnected spreadsheets, and repetitive standard operating procedures (SOPs), your operational overhead is eating directly into your profit margins. Legacy tools and fragmented workflows lead to errors, delays, and employee burnout.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Our AI-Native Approach to Automation for Local SMBs</h2>
            <p>
              At 3K Pro Services, we don't just "add AI" for the sake of buzzwords. We treat AI as a structural engineering tool. We map out your existing business processes, identify the critical bottlenecks, and deploy custom AI agents and workflow orchestrations that perform tasks at machine speed. By replacing legacy software loops with modern, AI-native micro-SaaS and automated pipelines, we help Broken Arrow and Tulsa businesses ship faster, communicate better, and dramatically reduce operational drag.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Example Workflows & Agent Systems We Implement</h2>
            <ul className="space-y-4 my-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Intelligent Lead Triage:</strong> Automated systems that ingest web inquiries, score the leads based on your criteria using AI, and route the most valuable prospects directly to your sales team's phones or CRMs.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Automated Client Onboarding:</strong> Replacing heavy manual paperwork with smart intake forms that automatically provision client portals, draft initial service agreements, and set up project folders.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0"></div>
                <span><strong>Back-office Orchestration:</strong> Linking your accounting software, email inboxes, and project management tools so that invoices, updates, and deliverables trigger each other seamlessly without human intervention.</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Who We Serve in Tulsa & Beyond</h2>
            <p>
              Whether you are a specialized professional services firm in Broken Arrow, a growing construction contractor in Bixby, or a modern e-commerce brand operating out of downtown Tulsa, if your business relies on digital processes, those processes can be optimized. We partner specifically with businesses that have proven demand but are bottlenecked by their own operational complexity.
            </p>
          </section>
        </div>

        {/* Contact Form Section */}
        <section id="contact" className="border-t border-black pt-16">
          <h2 className="text-3xl font-bold text-black mb-8 uppercase tracking-tighter">Schedule an AI Automation Blueprint Session</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-black/60 font-medium mb-8">
                Ready to stop bike-shedding and start scaling? Reach out to schedule a consultation. We will audit your current workflows and provide a concrete plan for AI integration.
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

      {/* Footer */}
      <footer className="bg-white border-t border-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">© {new Date().getFullYear()} 3KPRO.SERVICES. ALL RIGHTS RESERVED. | TULSA & BROKEN ARROW, OK</p>
        </div>
      </footer>
    </div>
  )
}