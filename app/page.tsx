import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent">
                3KPRO
              </span>
              <span className="ml-2 text-sm text-slate-600">Professional Services</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-700 hover:text-sky-600 transition-colors">Services</a>
              <a href="#about" className="text-slate-700 hover:text-sky-600 transition-colors">About</a>
              <a href="#contact" className="text-slate-700 hover:text-sky-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-sky-700">AI-Powered Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Technology Solutions
              <br />
              <span className="bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent">
                Built for Growth
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Custom AI workflows, SaaS solutions, and IT services designed for small to medium businesses ready to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold border border-slate-300"
              >
                View Services
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sky-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Build</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Full-stack solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SaaS Solutions */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors">
                <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">SaaS Solutions</h3>
              <p className="text-slate-600 mb-4">
                Cloud-based software platforms built to scale with your business. From MVP to production.
              </p>
              <a href="https://trendpulse.3kpro.services" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center">
                See TrendPulse →
              </a>
            </div>

            {/* AI Agents & Workflows */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors">
                <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Agents & Workflows</h3>
              <p className="text-slate-600 mb-4">
                Intelligent automation that works 24/7. Custom AI agents built for your specific business processes.
              </p>
              <span className="text-slate-500 font-semibold">Learn More →</span>
            </div>

            {/* Custom Development */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors">
                <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Development</h3>
              <p className="text-slate-600 mb-4">
                Bespoke software solutions tailored to your unique challenges. Web, mobile, and integrations.
              </p>
              <span className="text-slate-500 font-semibold">Learn More →</span>
            </div>

            {/* IT Services */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors">
                <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">IT Consulting</h3>
              <p className="text-slate-600 mb-4">
                Strategic technology guidance. Infrastructure, security, and digital transformation consulting.
              </p>
              <span className="text-slate-500 font-semibold">Learn More →</span>
            </div>

            {/* Cloud Solutions */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors">
                <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Solutions</h3>
              <p className="text-slate-600 mb-4">
                Scalable infrastructure on AWS, Azure, or GCP. Migration, optimization, and managed services.
              </p>
              <span className="text-slate-500 font-semibold">Learn More →</span>
            </div>

            {/* Integration Services */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors">
                <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">System Integrations</h3>
              <p className="text-slate-600 mb-4">
                Connect your tools and data. APIs, webhooks, and custom integrations that just work.
              </p>
              <span className="text-slate-500 font-semibold">Learn More →</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Built for Small & Medium Businesses</h2>
              <p className="text-lg text-slate-300 mb-6">
                We understand the challenges of growing a business. Limited resources, tight budgets, and the need to move fast.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                That's why we focus on delivering maximum value with minimum complexity. No enterprise bloat. No unnecessary features. Just solutions that work.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-sky-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Rapid prototyping and iteration</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-sky-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Transparent pricing and timelines</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-sky-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Direct communication with developers</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-sky-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Ongoing support and maintenance</span>
                </div>
              </div>
            </div>
            <div className="bg-sky-900/30 backdrop-blur-sm rounded-2xl p-8 border border-sky-700/30">
              <blockquote className="text-xl text-white mb-4">
                "Technology should accelerate your business, not complicate it."
              </blockquote>
              <p className="text-slate-400">— The 3KPRO Philosophy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Talk</h2>
            <p className="text-lg text-slate-600">
              Ready to build something great? Get in touch.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold">3KPRO</span>
              <p className="text-slate-400 mt-2">Professional Services</p>
              <p className="text-slate-400 mt-4 text-sm">
                Software and service solutions for growing businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-slate-400 hover:text-white transition-colors">Services</a>
                <a href="#about" className="block text-slate-400 hover:text-white transition-colors">About</a>
                <a href="#contact" className="block text-slate-400 hover:text-white transition-colors">Contact</a>
                <a href="https://trendpulse.3kpro.services" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-white transition-colors">TrendPulse</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/3kpro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/3kpro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/3kpro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              <p className="text-slate-400 mt-4 text-sm">
                <a href="mailto:hello@3kpro.services" className="hover:text-white transition-colors">hello@3kpro.services</a>
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>© {new Date().getFullYear()} 3KPRO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
