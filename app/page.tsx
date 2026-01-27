'use client'

import ContactForm from '@/components/ContactForm'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'

type Service = {
  id: string
  name: string
  description: string
  fullDescription: string
  features: string[]
  pricing?: string
  icon: React.ReactElement
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const services: Service[] = [
    {
      id: 'local-websites',
      name: 'Website Development',
      description: 'Affordable websites for small businesses. One-time fee includes design, development, and FREE hosting.',
      fullDescription: 'Simple, professional websites for businesses that need an online presence. Fast delivery with no monthly fees.',
      features: [
        'Custom responsive design (mobile-first)',
        'FREE lifetime hosting on Vercel',
        'Domain registration via Namecheap',
        'Contact forms with email notifications',
        'Google Maps integration',
        'Fast loading times (optimized for SEO)',
        'Full code ownership',
        'Local business schema markup for better Google visibility'
      ],
      pricing: 'One-time fee starting at $899 (no monthly costs)',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      fullDescription: 'Move your business to the cloud with confidence. We handle everything from architecture design to migration and ongoing management.',
      features: [
        'Cloud architecture design and planning',
        'AWS, Azure, and Google Cloud expertise',
        'Migration from on-premise to cloud',
        'Cost optimization and monitoring',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup solutions'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      id: 'custom-dev',
      name: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies.',
      fullDescription: 'Build software that perfectly fits your business processes. From concept to deployment, we create custom applications with modern technologies.',
      features: [
        'Full-stack web applications',
        'React, Next.js, Node.js, Python',
        'Database design and optimization',
        'API development and integration',
        'Real-time features (WebSockets)',
        'Testing and quality assurance'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'data',
      name: 'Data Management',
      description: 'Robust database design, optimization, and data analytics services.',
      fullDescription: 'Transform your data into actionable insights. Expert database design, optimization, and analytics solutions.',
      features: [
        'Database design and architecture',
        'PostgreSQL, MySQL, MongoDB expertise',
        'Performance optimization and indexing',
        'Data migration and ETL pipelines',
        'Analytics and reporting dashboards',
        'Data security and backup strategies'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      fullDescription: 'Protect your business from cyber threats with enterprise-grade security solutions and best practices.',
      features: [
        'Security audits and penetration testing',
        'SSL/TLS certificate management',
        'Authentication and authorization systems',
        'Data encryption and secure storage',
        'Compliance (GDPR, HIPAA, SOC 2)',
        'Incident response planning'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 'mobile',
      name: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      fullDescription: 'Reach your customers on mobile with native and cross-platform apps that deliver exceptional user experiences.',
      features: [
        'Native iOS and Android development',
        'Cross-platform with React Native',
        'App Store and Play Store deployment',
        'Push notifications and real-time updates',
        'Offline-first architecture',
        'Backend API integration'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'automation',
      name: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflows.',
      fullDescription: 'Save time and reduce errors with intelligent automation. We build custom workflows that handle repetitive tasks automatically.',
      features: [
        'Business process automation',
        'Workflow design and implementation',
        'Integration with existing systems',
        'Email and notification automation',
        'Data processing pipelines',
        'Reporting and analytics automation'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: '15+', label: 'Years Experience' },
  ]

  const features = [
    'Industry-leading expertise and certifications',
    'Agile development methodology',
    '24/7 dedicated support team',
    'Scalable and future-proof solutions',
    'Transparent pricing and communication',
    'Proven track record of success',
  ]

  return (
      <div className="min-h-screen bg-white bg-grid">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                {/* Minimalist Vector Logo */}
                <div className="relative w-10 h-10 flex items-center justify-center border border-black group-hover:bg-black group-hover:text-white transition-all">
                  <span className="font-bold text-xl tracking-tighter">3K</span>
                </div>
                {/* Logo Text */}
                <span className="text-xl font-bold text-black tracking-tight uppercase">3kpro.services</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#services" className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest">Services</a>
              <Link href="/marketplace" className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest">Marketplace</Link>
              <a href="#about" className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest">About</a>
              <a href="#contact" className="px-6 py-2 border border-black text-black text-sm font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest">
                Initiate Project
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
      {/* Hero Section - Structural Vector */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center px-3 py-1 border border-black mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Architecture of Innovation</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-[0.95] tracking-tight">
                PRECISION.<br />
                <span className="opacity-40">ENGINEERED.</span>
              </h1>

              <div className="w-20 h-1 bg-black mb-8"></div>

              <p className="text-lg text-black/70 max-w-lg mb-12 leading-relaxed">
                We design and build precision-engineered digital infrastructure for high-growth enterprises. Sophisticated systems, simplified for maximum impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#contact"
                  className="px-10 py-5 bg-black text-white hover:bg-black/90 transition-all font-bold uppercase tracking-widest text-xs"
                >
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="px-10 py-5 bg-transparent text-black border border-black/20 hover:border-black transition-all font-bold uppercase tracking-widest text-xs"
                >
                  The Methodology
                </a>
              </div>
            </motion.div>

            {/* Central Structural Graphic Placeholder/Abstract */}
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-square border border-black/5 bg-white/50 backdrop-blur-sm p-12 flex items-center justify-center overflow-hidden">
                {/* Decorative blueprint lines */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div className="absolute top-0 left-1/2 w-px h-full bg-black"></div>
                  <div className="absolute top-1/2 left-0 w-full h-px bg-black"></div>
                  <div className="absolute top-0 left-0 w-full h-full border border-black rotate-45 scale-150"></div>
                </div>

                {/* Abstract 3D/Geometric Concept (Vector 3K) */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                   <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 100L200 50L300 100L300 300L200 350L100 300Z" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M200 50V350" stroke="black" strokeWidth="0.5" opacity="0.2" />
                      <path d="M100 100H300" stroke="black" strokeWidth="0.5" opacity="0.2" />
                      <path d="M100 300H300" stroke="black" strokeWidth="0.5" opacity="0.2" />
                      
                      {/* Stylized '3' and 'K' in vector style */}
                      <path d="M150 150H250L200 200L250 250H150" stroke="black" strokeWidth="3" />
                      <path d="M180 150V250" stroke="black" strokeWidth="3" />
                      <path d="M180 200L250 150" stroke="black" strokeWidth="3" />
                      <path d="M180 200L250 250" stroke="black" strokeWidth="3" />
                      
                      {/* Connection Points */}
                      <circle cx="200" cy="50" r="3" fill="black" />
                      <circle cx="300" cy="100" r="3" fill="black" />
                      <circle cx="300" cy="300" r="3" fill="black" />
                      <circle cx="200" cy="350" r="3" fill="black" />
                      <circle cx="100" cy="300" r="3" fill="black" />
                      <circle cx="100" cy="100" r="3" fill="black" />
                   </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats Section - Precise Cards */}
      <section className="border-y border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black border border-black overflow-hidden">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-10 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-black mb-3">{stat.value}</div>
                <div className="text-black/40 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Geometric Grid */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {!selectedService ? (
              // Services Grid
              <motion.div
                key="grid"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                  <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                      CORE<br />CAPABILITIES.
                    </h2>
                    <p className="text-black/60 font-medium">
                      Tailored technological intervention across the entire digital stack.
                    </p>
                  </div>
                  <div className="hidden md:block w-32 h-px bg-black/20"></div>
                </div>

                <div className="flex flex-wrap justify-center">
                  {services.map((service, index) => (
                    <motion.button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className="group p-10 bg-white hover:bg-black hover:text-white transition-all duration-300 text-left cursor-pointer relative overflow-hidden w-full md:w-1/2 lg:w-1/3 border border-black -ml-px -mt-px"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative z-10">
                        <div className="w-12 h-12 border border-current flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                          {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
                        </div>
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.name}</h3>
                        <p className="text-sm opacity-60 mb-10 line-clamp-2 font-medium">{service.description}</p>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                          Analyze Specifications
                          <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </div>
                      </div>
                      {/* Decorative index number */}
                      <span className="absolute bottom-10 right-10 text-4xl font-bold opacity-[0.03] group-hover:opacity-10 transition-opacity">
                        0{index + 1}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Service Detail - Technical Deep Dive
              <motion.div
                key="detail"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex items-center text-[10px] font-bold uppercase tracking-widest hover:text-black/60 transition-colors mb-12 group"
                >
                  <span className="mr-3 group-hover:-translate-x-1 transition-transform">←</span>
                  Back to Index
                </button>

                <div className="border border-black p-10 md:p-20 bg-white relative">
                   <div className="absolute top-0 right-0 p-8 text-[10px] font-mono opacity-20">
                      REF: {selectedService.id.toUpperCase()}_v1.0
                   </div>
                  <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
                    <div className="w-20 h-20 border border-black flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(selectedService.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">{selectedService.name}</h2>
                      <p className="text-xl text-black/60 font-medium leading-relaxed">{selectedService.fullDescription}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 opacity-40">Modular Components</h3>
                      <div className="grid gap-4">
                        {selectedService.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center p-4 border border-black/5 hover:border-black/20 transition-colors bg-black/[0.02]">
                            <div className="w-1.5 h-1.5 bg-black mr-4 rotate-45"></div>
                            <span className="text-sm font-medium text-black/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-12">
                      {selectedService.pricing && (
                        <div>
                           <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-40">Cost Structure</h3>
                           <div className="p-8 border border-black bg-black text-white">
                              <div className="text-3xl font-bold mb-2">{selectedService.pricing.split('(')[0]}</div>
                              <div className="text-[10px] uppercase tracking-widest opacity-60">Fixed-Price Allocation</div>
                           </div>
                        </div>
                      )}

                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-40">Engagement</h3>
                        <div className="flex flex-col gap-4">
                          <a
                            href="#contact"
                            onClick={() => setSelectedService(null)}
                            className="w-full py-5 bg-black text-white hover:bg-black/90 transition-all font-bold uppercase tracking-widest text-xs text-center"
                          >
                            Initiate Selection
                          </a>
                          <button
                            onClick={() => setSelectedService(null)}
                            className="w-full py-5 border border-black text-black hover:bg-black/5 transition-all font-bold uppercase tracking-widest text-xs"
                          >
                            Configuration Index
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Products Section - Productized Solutions */}
      <section id="products" className="py-32 border-t border-black bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 opacity-40">Direct Acquisition</div>
               <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                SAAS<br />DEPLOYMENTS.
              </h2>
            </div>
            <p className="text-black/60 font-medium max-w-sm">
              Standardized software products engineered for immediate operational utility.
            </p>
          </div>

          <div className="max-w-3xl">
            {/* XELORA */}
            <a
              href="https://getxelora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-black p-12 hover:bg-black hover:text-white transition-all duration-500 relative bg-white"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
                <div className="w-16 h-16 border border-current flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                   <span className="font-bold text-2xl">X</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter">XELORA</h3>
                  <span className="opacity-40 text-xs font-mono uppercase tracking-widest">getxelora.com</span>
                </div>
              </div>
              <p className="text-lg opacity-60 mb-10 font-medium leading-relaxed">
                AI-powered predictive intelligence for content creators. Predict momentum. Engineer virality.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  'Viral Score prediction with 87% accuracy',
                  'Multi-platform content generation',
                  'Real-time trend analysis',
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-xs font-bold uppercase tracking-tight">
                    <div className="w-1 h-1 bg-current mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] group-hover:translate-x-4 transition-transform inline-flex items-center gap-2">
                Access Platform <span>→</span>
              </div>
            </a>
          </div>

          <div className="mt-20">
            <Link href="/marketplace" className="inline-flex items-center px-10 py-5 bg-white border border-black text-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all group">
              Explore Marketplace 
              <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Foundational Integrity */}
      <section id="about" className="py-32 border-t border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="w-12 h-1 bg-black mb-10"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-10 leading-tight">
                FOUNDATIONAL<br />
                <span className="opacity-40 text-3xl md:text-4xl">INTEGRITY & MASTERY.</span>
              </h2>
              <p className="text-lg text-black/60 mb-12 font-medium leading-relaxed">
                Since 2010, 3KPRO has maintained a rigorous standard of excellence in software engineering and IT consulting. Our approach is rooted in structural stability and architectural foresight.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-4 h-4 border border-black mr-6 flex items-center justify-center group-hover:bg-black transition-colors">
                      <div className="w-1 h-1 bg-black group-hover:bg-white"></div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-black/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="border border-black p-12 md:p-16 bg-white bg-grid relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <svg width="200" height="200" viewBox="0 0 200 200">
                      <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="1" fill="none" />
                      <path d="M100 0V200M0 100H200" stroke="black" strokeWidth="0.5" />
                   </svg>
                </div>
                <div className="text-center mb-16 relative z-10">
                  <div className="text-7xl font-bold text-black mb-2 tracking-tighter">3K+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Systemic Successes</div>
                </div>
                <div className="space-y-10 relative z-10">
                  {[
                    { label: 'Client Retention', value: '95%' },
                    { label: 'On-Time Delivery', value: '98%' },
                    { label: 'Core Technical Experts', value: '150+' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">{item.label}</span>
                        <span className="text-sm font-bold">{item.value}</span>
                      </div>
                      <div className="w-full h-px bg-black opacity-10">
                        <div className="bg-black h-px" style={{ width: item.value.includes('+') ? '100%' : item.value }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Transparent Tiers */}
      <section id="pricing" className="py-32 border-t border-black bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              WEB<br />ARCHITECTURE.
            </h2>
            <p className="text-black/60 font-medium">
              Standardized packages for businesses requiring structural digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-black border border-black overflow-hidden">
            {[
              {
                name: 'Starter',
                price: '$899',
                desc: 'Reputational Anchor',
                features: ['3-page core site', 'Structural hosting', 'Mobile precision', 'Secure handshake', '1-2 weeks build'],
              },
              {
                name: 'Professional',
                price: '$1,499',
                desc: 'Operational Base',
                popular: true,
                features: ['7-page system', 'Premium design', 'Advanced SEO logic', 'G-Business integration', 'Portfolio array'],
              },
              {
                name: 'Premium',
                price: 'Custom',
                desc: 'Enterprise Node',
                features: ['Unlimited architecture', 'E-commerce logic', 'Customer portal', 'Priority sync', 'High-density support'],
              }
            ].map((tier, idx) => (
              <div key={idx} className={`bg-white p-12 flex flex-col relative ${tier.popular ? 'z-10' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
                )}
                <div className="mb-12">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">{tier.desc}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">{tier.name}</h3>
                  <div className="text-4xl font-bold mb-2">{tier.price}</div>
                  <div className="text-[10px] font-bold uppercase tracking-tight opacity-40">Single Allocation</div>
                </div>
                <div className="space-y-4 mb-16 flex-grow">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-center text-xs font-medium">
                      <div className="w-1 h-1 bg-black mr-4"></div>
                      {f}
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`w-full py-5 text-center text-xs font-bold uppercase tracking-widest border border-black transition-all ${tier.popular ? 'bg-black text-white hover:bg-black/90' : 'bg-white text-black hover:bg-black hover:text-white'}`}
                >
                  Configure {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Terminal */}
      <section className="py-32 border-y border-black bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 invert"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
            INNOVATION REQUIRES<br />STRUCTURAL STABILITY.
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Join the collective of forward-thinking enterprises operating on the 3KPRO standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="px-12 py-6 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all">
              Initiate Consultation
            </a>
            <div className="flex items-center justify-center gap-4 text-white/40 font-mono text-xs">
              sys@3kpro.services
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Data Entry */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl font-bold text-black mb-10 uppercase tracking-tighter">Engagement<br />Interface.</h2>
               <p className="text-black/60 font-medium mb-12">Submit your project parameters for technical evaluation.</p>
               <div className="space-y-6">
                  <div className="text-xs font-bold uppercase tracking-widest">
                    <span className="opacity-40 block mb-2">Location</span>
                    Tulsa, Oklahoma, USA
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest">
                    <span className="opacity-40 block mb-2">Direct Channel</span>
                    james@3kpro.services
                  </div>
               </div>
            </div>
            <div className="border border-black p-10 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer - Index */}
      <footer className="bg-white border-t border-black py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 border border-black flex items-center justify-center font-bold text-xs">3K</div>
                <span className="text-xl font-bold uppercase tracking-tighter">3KPRO.SERVICES</span>
              </div>
              <p className="text-black/60 text-sm font-medium max-w-sm leading-relaxed mb-10">
                Precision-engineered digital infrastructure and professional services. Operational since 2010.
              </p>
              <div className="flex space-x-6">
                {['Twitter', 'GitHub', 'LinkedIn'].map((p) => (
                  <a key={p} href={`https://${p.toLowerCase()}.com/3kpro`} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:underline">
                    {p}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 opacity-40">Inventory</h3>
              <div className="space-y-4">
                {['Cloud Solutions', 'Custom Dev', 'Data Systems', 'Security'].map((s) => (
                   <a key={s} href="#services" className="block text-xs font-bold uppercase tracking-tight hover:opacity-60 transition-opacity">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 opacity-40">Hierarchy</h3>
              <div className="space-y-4">
                {['About', 'Marketplace', 'Services', 'Contact'].map((s) => (
                   <a key={s} href={`#${s.toLowerCase()}`} className="block text-xs font-bold uppercase tracking-tight hover:opacity-60 transition-opacity">{s}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-black pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">© {new Date().getFullYear()} 3KPRO.SYSTEMS. ALL RIGHTS RESERVED.</p>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Tulsa // OK // USA</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
