'use client'

import ContactForm from '@/components/ContactForm'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

type Service = {
  id: string
  name: string
  description: string
  fullDescription: string
  features: string[]
  pricing?: string
  icon: React.ReactElement
}

type Product = {
  mono: string
  name: string
  tagline: string
  badge: { label: string; tone: 'available' | 'beta' }
  description: string
  features: string[]
  priceNote: string
  cta: string
  href: string
  external?: boolean
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const services: Service[] = [
    {
      id: 'local-websites',
      name: 'Website Development',
      description:
        'Affordable websites for small businesses. One-time fee includes design, development, and FREE hosting.',
      fullDescription:
        'Simple, professional websites for businesses that need an online presence. Fast delivery with no monthly fees.',
      features: [
        'Custom responsive design (mobile-first)',
        'FREE lifetime hosting on Vercel',
        'Domain registration via Namecheap',
        'Contact forms with email notifications',
        'Google Maps integration',
        'Fast loading times (optimized for SEO)',
        'Full code ownership',
        'Local business schema markup for better Google visibility',
      ],
      pricing: 'One-time fee starting at $899 (no monthly costs)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and migration services. AWS, Azure, and Google Cloud expertise.',
      fullDescription:
        'Move your business to the cloud with confidence. We handle everything from architecture design to migration and ongoing management.',
      features: [
        'Cloud architecture design and planning',
        'AWS, Azure, and Google Cloud expertise',
        'Migration from on-premise to cloud',
        'Cost optimization and monitoring',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup solutions',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      id: 'custom-dev',
      name: 'Custom Development',
      description:
        'Tailored software solutions. React, Next.js, Node.js, Python. Full-stack with API integration.',
      fullDescription:
        'Build software that perfectly fits your business processes. From concept to deployment, we create custom applications with modern technologies.',
      features: [
        'Full-stack web applications',
        'React, Next.js, Node.js, Python',
        'Database design and optimization',
        'API development and integration',
        'Real-time features (WebSockets)',
        'Testing and quality assurance',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'data',
      name: 'Data Management',
      description:
        'Database architecture, PostgreSQL, MongoDB. ETL pipelines, analytics dashboards, data security.',
      fullDescription:
        'Transform your data into actionable insights. Expert database design, optimization, and analytics solutions.',
      features: [
        'Database design and architecture',
        'PostgreSQL, MySQL, MongoDB expertise',
        'Performance optimization and indexing',
        'Data migration and ETL pipelines',
        'Analytics and reporting dashboards',
        'Data security and backup strategies',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      description:
        'Security audits, SSL/TLS, authentication. GDPR, HIPAA, SOC 2 compliance. Incident response.',
      fullDescription:
        'Protect your business from cyber threats with enterprise-grade security solutions and best practices.',
      features: [
        'Security audits and penetration testing',
        'SSL/TLS certificate management',
        'Authentication and authorization systems',
        'Data encryption and secure storage',
        'Compliance (GDPR, HIPAA, SOC 2)',
        'Incident response planning',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      id: 'automation',
      name: 'Process Automation',
      description:
        'Business workflow automation and n8n integrations. Save 10–50 hours per workflow deployed.',
      fullDescription:
        'Save time and reduce errors with intelligent automation. We build custom workflows that handle repetitive tasks automatically.',
      features: [
        'Business process automation',
        'n8n workflow design and implementation',
        'Integration with existing systems',
        'Email and notification automation',
        'Data processing pipelines',
        'Reporting and analytics automation',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const stats = [
    { value: '10+', label: 'Industries Served', accent: false },
    { value: '$2M+', label: 'Revenue Generated for Clients', accent: false },
    { value: '95%', label: 'Project Success Rate', accent: false },
    { value: '15+', label: 'Years Experience', accent: true },
  ]

  const products: Product[] = [
    {
      mono: 'X',
      name: 'XELORA',
      tagline: 'getxelora.com · Viral DNA Decoder',
      badge: { label: 'Available', tone: 'available' },
      description:
        'AI-powered predictive intelligence for content creators. Predict momentum. Engineer virality.',
      features: [
        'Viral Score™ Prediction — 87% Accuracy',
        'Multi-Platform Content Generation',
        'Real-time Trend Analysis',
      ],
      priceNote: 'Free → $29 → $79/mo',
      cta: 'Access Platform',
      href: 'https://getxelora.com',
      external: true,
    },
    {
      mono: 'F',
      name: 'FAIRMERGE',
      tagline: 'Engineering Velocity Engine',
      badge: { label: 'Beta', tone: 'beta' },
      description:
        'Stop bike-shedding. Ship 20% faster. Analyze PR patterns to identify bottlenecks, reduce nitpicks, and improve team velocity.',
      features: ['Nitpick Ratio Analysis', 'Review Load Balancing', 'Staleness Detection'],
      priceNote: 'From $149/mo',
      cta: 'Initialize FairMerge',
      href: '/marketplace/fairmerge',
    },
    {
      mono: 'C',
      name: 'CLOUD LEDGER',
      tagline: 'Azure Waste Audit',
      badge: { label: 'Available', tone: 'available' },
      description:
        'Self-service Azure audit for SMBs. Identify idle VMs, unattached disks, unused IPs. Save 20–40% on your Azure bill instantly.',
      features: [
        'Secure Read-Only Azure Connection',
        'Waste Detection & Rightsizing',
        'PDF/HTML Report Generation',
      ],
      priceNote: 'One-time $49',
      cta: 'Acquire Audit',
      href: '/cloud-ledger',
    },
  ]

  const aboutFeatures = [
    'Industry-leading expertise and certifications',
    'Agile development methodology',
    '24/7 dedicated support team',
    'Scalable and future-proof solutions',
    'Transparent pricing and communication',
  ]

  const aboutMetrics = [
    { label: 'Client Retention', value: '95%', width: '95%' },
    { label: 'On-Time Delivery', value: '98%', width: '98%' },
    { label: 'Structural Assets', value: '85+', width: '85%' },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$899',
      desc: 'Reputational Anchor',
      sub: 'Single Allocation',
      popular: false,
      features: [
        '3-page core site',
        'Structural hosting',
        'Mobile precision',
        'Secure handshake (SSL)',
        '1–2 week build',
      ],
    },
    {
      name: 'Professional',
      price: '$1,499',
      desc: 'Operational Base',
      sub: 'Single Allocation · Most Selected',
      popular: true,
      features: [
        '7-page system',
        'Premium design',
        'Advanced SEO logic',
        'Google Business integration',
        'Portfolio array',
      ],
    },
    {
      name: 'Premium',
      price: 'Custom',
      desc: 'Enterprise Node',
      sub: 'Quotation Required',
      popular: false,
      features: [
        'Unlimited architecture',
        'E-commerce logic',
        'Customer portal',
        'Priority sync',
        'High-density support',
      ],
    },
  ]

  const socials = [
    { label: 'X', href: 'https://x.com/3KPRO_SAAS' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@3kpro.services' },
    { label: 'YouTube', href: 'https://www.youtube.com/@3KPRO.SERVICES' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/3kpro-services' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/92 backdrop-blur-md border-b border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-[42px] h-[42px] border border-black flex items-center justify-center font-bold text-[17px] tracking-tighter group-hover:bg-black group-hover:text-white transition-all">
                3K
              </div>
              <span className="hidden sm:block text-lg font-bold tracking-tight uppercase">
                3kpro.services
              </span>
            </Link>
            <div className="flex items-center gap-4 md:gap-10">
              <a
                href="#services"
                className="hidden md:block text-[11px] font-bold text-black/55 hover:text-black transition-colors uppercase tracking-[0.18em]"
              >
                Services
              </a>
              <Link
                href="/marketplace"
                className="hidden md:block text-[11px] font-bold text-black/55 hover:text-black transition-colors uppercase tracking-[0.18em]"
              >
                Marketplace
              </Link>
              <Link
                href="/pay"
                className="hidden md:block text-[11px] font-bold text-black/55 hover:text-black transition-colors uppercase tracking-[0.18em]"
              >
                Quick Pay
              </Link>
              <a
                href="#about"
                className="hidden md:block text-[11px] font-bold text-black/55 hover:text-black transition-colors uppercase tracking-[0.18em]"
              >
                About
              </a>
              <a
                href="#contact"
                className="px-4 md:px-[22px] py-[9px] border border-black text-[10px] md:text-[11px] font-bold hover:bg-black hover:text-white transition-all uppercase tracking-[0.18em]"
              >
                Initiate Project
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero — Dark Navy */}
        <section className="relative bg-[#080d1a] pt-[72px] pb-14 md:pt-[120px] md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
          <div
            className="absolute -top-24 right-[10%] w-[500px] h-[500px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
            }}
          />
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">
              <motion.div initial="initial" animate="animate" variants={fadeInUp}>
                <div className="inline-flex items-center px-3 py-1 border border-white/[0.18] mb-7">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                    Serving Tulsa &amp; Broken Arrow Since 2010
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-[-0.03em]">
                  Websites.
                  <br />
                  Automation.
                  <br />
                  <span className="opacity-[0.35]">
                    AI. Built for
                    <br />
                    Local Business.
                  </span>
                </h1>

                <div className="w-12 h-[3px] bg-[#2563eb] my-7" />

                <p className="text-[17px] text-white/60 max-w-[480px] mb-10 leading-relaxed font-medium">
                  We help Tulsa and Broken Arrow businesses get online, automate operations, and
                  grow — without the enterprise price tag.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#contact"
                    className="px-9 py-4 bg-[#2563eb] text-white border border-[#2563eb] hover:bg-[#1d4ed8] hover:border-[#1d4ed8] hover:shadow-[6px_6px_0_0_rgba(37,99,235,0.25)] transition-all font-bold uppercase tracking-[0.2em] text-[11px] text-center"
                  >
                    Book a Free Strategy Call
                  </a>
                  <a
                    href="#pricing"
                    className="px-9 py-4 bg-transparent text-white/70 border border-white/20 hover:border-white/60 hover:text-white transition-all font-bold uppercase tracking-[0.2em] text-[11px] text-center"
                  >
                    See Pricing →
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[12px] text-white/40 font-medium font-mono">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
                    />
                  </svg>
                  <a href="tel:+19188168832" className="text-white/55 hover:text-white transition-colors">
                    918-816-8832
                  </a>
                  <span className="opacity-30">·</span>
                  <span>Broken Arrow, OK</span>
                </div>
              </motion.div>

              {/* Hero Visual — structural hexagon mark */}
              <motion.div
                className="relative hidden lg:flex border border-white/[0.08] bg-white/[0.03] p-10 aspect-square items-center justify-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-90">
                  <path d="M200 40L360 130V270L200 360L40 270V130Z" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <path d="M200 80L320 150V250L200 320L80 250V150Z" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <path d="M200 40V360M40 130L360 270M40 270L360 130" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <path
                    d="M140 155 H230 Q255 155 255 180 Q255 200 200 200 Q255 200 255 225 Q255 250 230 250 H140"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="5"
                    strokeLinecap="square"
                    fill="none"
                  />
                  <line x1="275" y1="155" x2="275" y2="250" stroke="rgba(255,255,255,0.9)" strokeWidth="5" strokeLinecap="square" />
                  <line x1="275" y1="200" x2="340" y2="155" stroke="rgba(255,255,255,0.9)" strokeWidth="5" strokeLinecap="square" />
                  <line x1="275" y1="200" x2="340" y2="250" stroke="rgba(255,255,255,0.9)" strokeWidth="5" strokeLinecap="square" />
                  <circle cx="200" cy="40" r="3" fill="#2563eb" />
                  <circle cx="360" cy="130" r="3" fill="#2563eb" />
                  <circle cx="360" cy="270" r="3" fill="#2563eb" />
                  <circle cx="200" cy="360" r="3" fill="#2563eb" />
                  <circle cx="40" cy="270" r="3" fill="#2563eb" />
                  <circle cx="40" cy="130" r="3" fill="#2563eb" />
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`py-8 px-6 text-center border-black ${
                    index < 3 ? 'md:border-r' : ''
                  } ${index % 2 === 0 ? 'border-r md:border-r' : ''} ${
                    index >= 2 ? 'border-t md:border-t-0' : ''
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`text-4xl md:text-5xl font-bold mb-2 tracking-[-0.04em] ${
                      stat.accent ? 'text-[#2563eb]' : 'text-black'
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-black/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-14 md:py-24 bg-white bg-grid">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {!selectedService ? (
                <motion.div key="grid" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2563eb] mb-3">
                        Core Capabilities
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-black tracking-[-0.03em]">SERVICES.</h2>
                    </div>
                    <p className="text-sm text-black/50 font-medium max-w-[320px] leading-relaxed">
                      Tailored technological intervention across the entire digital stack.
                    </p>
                  </div>

                  <div className="flex flex-wrap border border-black">
                    {services.map((service, index) => (
                      <motion.button
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className="group w-full md:w-1/2 lg:w-1/3 min-h-[240px] p-8 bg-white hover:bg-black hover:text-white transition-all duration-300 text-left cursor-pointer relative overflow-hidden flex flex-col border-b border-r border-black [&:nth-child(3n)]:lg:border-r-0 [&:nth-child(2n)]:md:border-r-0 lg:[&:nth-child(2n)]:border-r"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <div className="w-11 h-11 border border-current flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-110">
                          {React.cloneElement(
                            service.icon as React.ReactElement<{ className?: string }>,
                            { className: 'w-5 h-5' }
                          )}
                        </div>
                        <h3 className="text-[17px] font-bold mb-2.5 uppercase tracking-[-0.02em]">{service.name}</h3>
                        <p className="text-[13px] opacity-55 mb-6 font-medium leading-relaxed flex-1">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                          Analyze Specifications
                          <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                        </div>
                        <span className="absolute bottom-7 right-7 text-[5rem] leading-none font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                          0{index + 1}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Local SEO service pages (preserved for organic search) */}
                  <div className="mt-10 grid gap-4 md:grid-cols-3" aria-label="Local service pages">
                    <Link
                      href="/services/ai-automation-consulting"
                      className="border border-black/10 p-6 hover:border-[#2563eb] transition-colors group"
                    >
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-3">
                        Local Service Page
                      </span>
                      <span className="font-bold uppercase tracking-tight text-sm group-hover:text-[#2563eb] transition-colors">
                        AI Automation Consulting in Tulsa &amp; Broken Arrow →
                      </span>
                    </Link>
                    <Link
                      href="/services/custom-saas-development"
                      className="border border-black/10 p-6 hover:border-[#2563eb] transition-colors group"
                    >
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-3">
                        Local Service Page
                      </span>
                      <span className="font-bold uppercase tracking-tight text-sm group-hover:text-[#2563eb] transition-colors">
                        Custom SaaS Development in Tulsa &amp; Broken Arrow →
                      </span>
                    </Link>
                    <Link
                      href="/services/it-strategy-cloud-architecture"
                      className="border border-black/10 p-6 hover:border-[#2563eb] transition-colors group"
                    >
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-3">
                        Local Service Page
                      </span>
                      <span className="font-bold uppercase tracking-tight text-sm group-hover:text-[#2563eb] transition-colors">
                        IT Strategy &amp; Cloud Architecture in Tulsa &amp; Broken Arrow →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ) : (
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
                    className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#2563eb] transition-colors mb-12 group"
                  >
                    <span className="mr-3 group-hover:-translate-x-1 transition-transform">←</span>
                    Back to Index
                  </button>

                  <div className="border border-black p-8 md:p-16 bg-white relative">
                    <div className="absolute top-0 right-0 p-8 text-[10px] font-mono opacity-20">
                      REF: {selectedService.id.toUpperCase()}_v1.0
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                      <div className="w-20 h-20 border border-black flex items-center justify-center flex-shrink-0">
                        {React.cloneElement(
                          selectedService.icon as React.ReactElement<{ className?: string }>,
                          { className: 'w-10 h-10' }
                        )}
                      </div>
                      <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                          {selectedService.name}
                        </h2>
                        <p className="text-xl text-black/60 font-medium leading-relaxed">
                          {selectedService.fullDescription}
                        </p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 opacity-40">
                          Modular Components
                        </h3>
                        <div className="grid gap-3">
                          {selectedService.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center p-4 border border-black/5 hover:border-[#2563eb]/40 transition-colors bg-black/[0.02]"
                            >
                              <div className="w-1.5 h-1.5 bg-[#2563eb] mr-4 rotate-45" />
                              <span className="text-sm font-medium text-black/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-10">
                        {selectedService.pricing && (
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-40">
                              Cost Structure
                            </h3>
                            <div className="p-8 border border-black bg-[#080d1a] text-white">
                              <div className="text-3xl font-bold mb-2">
                                {selectedService.pricing.split('(')[0]}
                              </div>
                              <div className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                                Fixed-Price Allocation
                              </div>
                            </div>
                          </div>
                        )}

                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-40">Engagement</h3>
                          <div className="flex flex-col gap-4">
                            <a
                              href="#contact"
                              onClick={() => setSelectedService(null)}
                              className="w-full py-4 bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all font-bold uppercase tracking-[0.2em] text-[11px] text-center"
                            >
                              Initiate Selection
                            </a>
                            <button
                              onClick={() => setSelectedService(null)}
                              className="w-full py-4 border border-black text-black hover:bg-black hover:text-white transition-all font-bold uppercase tracking-[0.2em] text-[11px]"
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

        {/* Products — Dark Navy */}
        <section id="products" className="py-14 md:py-24 bg-[#080d1a] bg-grid-dark border-t border-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 mb-3">
                  Direct Acquisition
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.05]">
                  SAAS
                  <br />
                  DEPLOYMENTS.
                </h2>
              </div>
              <p className="text-[15px] text-white/45 font-medium max-w-[300px] leading-relaxed">
                Standardized software products engineered for immediate operational utility.
              </p>
            </div>

            <div className="flex flex-col max-w-[760px]">
              {products.map((product, index) => {
                const inner = (
                  <>
                    <div className="flex items-start gap-4 md:gap-6 mb-7">
                      <div className="w-14 h-14 border border-white/25 flex-shrink-0 flex items-center justify-center font-bold text-[22px] tracking-[-0.03em] text-white transition-transform duration-300 group-hover:rotate-12">
                        {product.mono}
                      </div>
                      <div>
                        <div className="text-2xl md:text-[2rem] font-bold uppercase tracking-[-0.03em] text-white leading-none mb-1">
                          {product.name}
                        </div>
                        <div className="font-mono text-[11px] text-white/35 tracking-[0.12em] uppercase">
                          {product.tagline}
                        </div>
                      </div>
                      <span
                        className={`ml-auto px-2.5 py-[3px] border text-[9px] font-bold uppercase tracking-[0.2em] flex-shrink-0 ${
                          product.badge.tone === 'available'
                            ? 'border-green-500/40 text-green-400 bg-green-600/10'
                            : 'border-amber-400/40 text-amber-400 bg-amber-500/[0.08]'
                        }`}
                      >
                        {product.badge.label}
                      </span>
                    </div>
                    <p className="text-[15px] text-white/50 font-medium leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-7">
                      {product.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white/50"
                        >
                          <div className="w-1 h-1 bg-[#2563eb] rounded-full flex-shrink-0" />
                          {feat}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-6 border-t border-white/[0.08]">
                      <div className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                        {product.priceNote}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/50 group-hover:text-white group-hover:translate-x-1.5 transition-all inline-flex items-center gap-2">
                        {product.cta} →
                      </div>
                    </div>
                  </>
                )

                const cls =
                  'group block border border-white/10 -mt-px p-7 md:p-10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.22] transition-all'

                return product.external ? (
                  <a key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link key={product.name} href={product.href} className={cls}>
                    {inner}
                  </Link>
                )
              })}
            </div>

            <div className="mt-10">
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-[#2563eb]/35 text-[#3b82f6] font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] hover:shadow-[6px_6px_0_0_rgba(37,99,235,0.2)] transition-all"
              >
                Explore Full Marketplace <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-14 md:py-24 bg-white border-t border-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="block w-9 h-[3px] bg-[#2563eb] mb-7" />
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-[-0.03em]">
                  FOUNDATIONAL
                  <br />
                  <span className="opacity-30 text-3xl md:text-4xl block">INTEGRITY &amp; MASTERY.</span>
                </h2>
                <p className="text-base text-black/60 mb-10 font-medium leading-[1.7]">
                  Since 2010, 3KPRO has maintained a rigorous standard of excellence in software
                  engineering and IT consulting. Our approach is rooted in structural stability and
                  architectural foresight.
                </p>
                <div className="flex flex-col gap-4">
                  {aboutFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-5 h-5 border border-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] group-hover:border-[#2563eb] transition-colors">
                        <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full group-hover:bg-white" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/75">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-black p-10 md:p-12 bg-white bg-grid relative overflow-hidden">
                <div className="text-center mb-10 relative z-10">
                  <div className="text-[5.5rem] leading-none font-bold text-black tracking-[-0.05em] mb-1.5">3K+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                    Systemic Successes
                  </div>
                </div>
                <div className="space-y-6 relative z-10">
                  {aboutMetrics.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">
                          {item.label}
                        </span>
                        <span className="text-[13px] font-bold">{item.value}</span>
                      </div>
                      <div className="w-full h-[2px] bg-black/[0.08]">
                        <div className="h-[2px] bg-[#2563eb]" style={{ width: item.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-14 md:py-24 bg-[#f8fafc] border-t border-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mb-14">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2563eb] mb-3">
                Web Architecture
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.05] tracking-[-0.03em]">
                STANDARDIZED
                <br />
                PACKAGES.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 border border-black">
              {pricingTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-10 bg-white flex flex-col relative border-black ${
                    idx < 2 ? 'md:border-r' : ''
                  } ${idx < 2 ? 'border-b md:border-b-0' : ''}`}
                >
                  {tier.popular && <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2563eb]" />}
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 mb-2">
                    {tier.desc}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-[-0.02em] mb-4">{tier.name}</h3>
                  <div className="text-5xl font-bold mb-1 tracking-[-0.04em]">{tier.price}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40 mb-8">
                    {tier.sub}
                  </div>
                  <div className="flex flex-col gap-3 mb-8 flex-1">
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[12px] font-semibold">
                        <div className="w-1 h-1 bg-[#2563eb] flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className={`w-full py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.2em] border border-black transition-all ${
                      tier.popular
                        ? 'bg-[#2563eb] text-white border-[#2563eb] hover:bg-[#1d4ed8] hover:border-[#1d4ed8]'
                        : 'bg-white text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    Configure {tier.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-16 md:py-24 bg-black border-y border-black overflow-hidden bg-grid-dark">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)' }}
          />
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-[-0.03em]">
              INNOVATION REQUIRES
              <br />
              STRUCTURAL STABILITY.
            </h2>
            <p className="text-white/50 text-base mb-10 max-w-[560px] mx-auto font-medium leading-relaxed">
              Join the collective of forward-thinking enterprises operating on the 3KPRO standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#contact"
                className="px-11 py-[18px] bg-[#2563eb] text-white font-bold uppercase tracking-[0.2em] text-[12px] hover:bg-[#1d4ed8] hover:shadow-[6px_6px_0_0_rgba(37,99,235,0.25)] transition-all"
              >
                Initiate Consultation
              </a>
              <span className="font-mono text-[13px] text-white/35 tracking-[0.08em]">918-816-8832</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-[-0.03em] leading-tight">
                  Engagement
                  <br />
                  Interface.
                </h2>
                <p className="text-[15px] text-black/50 font-medium mb-10 leading-relaxed">
                  Submit your project parameters for technical evaluation. Response within 24 hours.
                </p>
                <div className="space-y-5">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-1.5">
                      Location
                    </div>
                    <div className="text-[13px] font-bold uppercase tracking-[0.1em]">
                      Tulsa &amp; Broken Arrow, OK 74014
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-1.5">
                      Direct Phone
                    </div>
                    <div className="text-[13px] font-bold uppercase tracking-[0.1em]">
                      <a href="tel:+19188168832" className="hover:text-[#2563eb] transition-colors">
                        918-816-8832
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-1.5">
                      Direct Email
                    </div>
                    <div className="text-[13px] font-bold uppercase tracking-[0.1em]">
                      <a href="mailto:james@3kpro.services" className="hover:text-[#2563eb] transition-colors">
                        james@3kpro.services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-black p-7 md:p-10 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.06)]">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border border-black flex items-center justify-center font-bold text-xs">3K</div>
                <span className="text-[17px] font-bold uppercase tracking-[-0.02em]">3KPRO.SERVICES</span>
              </div>
              <p className="text-[13px] text-black/50 font-medium max-w-[320px] leading-relaxed mb-6">
                Precision-engineered digital infrastructure and professional services. Operational
                since 2010.
              </p>
              <div className="flex gap-5">
                {socials.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40 hover:text-black transition-colors"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 mb-5">Inventory</h3>
              <div className="flex flex-col gap-3">
                {['Cloud Solutions', 'Custom Dev', 'Data Systems', 'Security'].map((s) => (
                  <a
                    key={s}
                    href="#services"
                    className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 mb-5">Hierarchy</h3>
              <div className="flex flex-col gap-3">
                <a href="#about" className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors">
                  About
                </a>
                <Link href="/marketplace" className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors">
                  Marketplace
                </Link>
                <a href="#services" className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors">
                  Services
                </a>
                <Link href="/pay" className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors">
                  Quick Pay
                </Link>
                <a href="#contact" className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-black/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
              © {new Date().getFullYear()} 3KPRO.SERVICES. ALL RIGHTS RESERVED.
            </p>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">Tulsa // OK // USA</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
