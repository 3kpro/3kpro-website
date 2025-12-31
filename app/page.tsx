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
    <div className="min-h-screen bg-dark-900">
      {/* Navigation */}
      <nav className="bg-dark-900/95 backdrop-blur-sm border-b border-dark-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                {/* Logo Icon */}
                <div className="relative">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3KPRO Logo">
                    <title>3KPRO - Professional Website Development</title>
                    {/* Geometric abstract logo - three overlapping shapes */}
                    <circle cx="20" cy="20" r="18" fill="#e07856" opacity="0.2"/>
                    <path d="M20 4 L35 16 L30 32 L10 32 L5 16 Z" fill="#e07856"/>
                    <rect x="14" y="14" width="12" height="12" fill="white" opacity="0.9"/>
                    <path d="M20 10 L26 20 L20 30 L14 20 Z" fill="white"/>
                  </svg>
                </div>
                {/* Logo Text */}
                <span className="text-2xl font-bold text-white tracking-tight">3KPRO</span>
              </div>
            </Link>
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-dark-300 hover:text-primary-500 transition-colors">Services</a>
              <a href="#products" className="text-dark-300 hover:text-primary-500 transition-colors">Products</a>
              <a href="#pricing" className="text-dark-300 hover:text-primary-500 transition-colors">Pricing</a>
              <a href="#about" className="text-dark-300 hover:text-primary-500 transition-colors">About</a>
              <a href="#contact" className="text-dark-300 hover:text-primary-500 transition-colors">Contact</a>
              <a href="#contact" className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <AuroraBackground className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-primary-500">Professional IT Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <br />
              <span className="text-primary-500">Cutting-Edge Technology</span>
            </h1>

            <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
              We deliver enterprise-grade SaaS solutions and IT professional services that drive innovation and accelerate growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-semibold shadow-lg hover:shadow-primary-500/50"
              >
                Start Your Journey →
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-transparent text-white rounded-lg border-2 border-dark-700 hover:border-primary-500 transition-all font-semibold"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">{stat.value}</div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AuroraBackground>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-800/50">
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
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our <span className="text-primary-500">Services</span>
                  </h2>
                  <p className="text-dark-300 max-w-2xl mx-auto">
                    Comprehensive IT solutions designed to meet your unique business needs
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <motion.button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className="group p-6 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 text-left cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-14 h-14 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 mb-4 group-hover:bg-primary-500/20 transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-dark-400 mb-4">{service.description}</p>
                      <span className="text-primary-500 text-sm font-medium group-hover:underline">Learn more →</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Service Detail Modal
              <motion.div
                key="detail"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex items-center text-dark-400 hover:text-primary-500 transition-colors mb-8 group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Services
                </button>

                <div className="bg-dark-800 rounded-2xl border border-dark-700 p-8 md:p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-primary-500/10 rounded-lg border-2 border-primary-500/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                      {selectedService.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedService.name}</h2>
                      <p className="text-xl text-dark-300">{selectedService.fullDescription}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-dark-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedService.pricing && (
                    <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-6 mb-8">
                      <h3 className="text-xl font-bold text-white mb-2">Pricing</h3>
                      <p className="text-dark-300">{selectedService.pricing}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      onClick={() => setSelectedService(null)}
                      className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-semibold text-center shadow-lg hover:shadow-primary-500/50"
                    >
                      Get Started →
                    </a>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-8 py-4 bg-transparent text-white rounded-lg border-2 border-dark-700 hover:border-primary-500 transition-all font-semibold"
                    >
                      View All Services
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary-500">Our Products</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SaaS <span className="text-primary-500">Products</span>
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              AI-powered tools built by 3KPRO.SERVICES to help businesses and creators succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* XELORA */}
            <a
              href="https://xelora.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-800 border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">XELORA</h3>
                  <span className="text-primary-500 text-sm">xelora.app</span>
                </div>
              </div>
              <p className="text-dark-300 mb-4">
                AI-powered predictive intelligence for content creators. Predict momentum. Engineer virality.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-dark-400 text-sm">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Viral Score prediction with 87% accuracy
                </div>
                <div className="flex items-center text-dark-400 text-sm">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-platform content generation
                </div>
                <div className="flex items-center text-dark-400 text-sm">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time trend analysis
                </div>
              </div>
              <span className="text-primary-500 text-sm font-medium group-hover:underline">
                Visit XELORA →
              </span>
            </a>

            {/* TrendPulse */}
            <a
              href="https://trendpulse.3kpro.services"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-800 border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">TrendPulse</h3>
                  <span className="text-primary-500 text-sm">trendpulse.3kpro.services</span>
                </div>
              </div>
              <p className="text-dark-300 mb-4">
                Real-time trend monitoring and analytics platform. Track what's trending across the web.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-dark-400 text-sm">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time trend detection
                </div>
                <div className="flex items-center text-dark-400 text-sm">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-source aggregation
                </div>
                <div className="flex items-center text-dark-400 text-sm">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Analytics dashboard
                </div>
              </div>
              <span className="text-primary-500 text-sm font-medium group-hover:underline">
                Visit TrendPulse →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
                <span className="text-sm font-medium text-primary-500">Why 3KPRO</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Trusted Partner in
                <br />
                <span className="text-primary-500">Digital Transformation</span>
              </h2>
              <p className="text-dark-300 mb-8">
                With over 15 years of experience, we've helped hundreds of businesses transform their operations through innovative technology solutions. Our team of certified professionals is committed to delivering excellence in every project.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-500/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-dark-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-primary-500 mb-2">3K+</div>
                  <div className="text-dark-400">Successful Projects</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-dark-300">Client Retention</span>
                    <span className="text-white font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-dark-300">On-Time Delivery</span>
                    <span className="text-white font-semibold">98%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-dark-300">Team Experts</span>
                    <span className="text-white font-semibold">150+</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary-500">Affordable Website Packages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple <span className="text-primary-500">Website Solutions</span>
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              One-time fee. No monthly costs. FREE hosting included.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <p className="text-dark-400 text-sm">Perfect for small businesses getting started online</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary-500 mb-1">$899</div>
                <div className="text-dark-400 text-sm">One-time payment</div>
              </div>
              <div className="space-y-3 mb-8">
                {[
                  '3-page website (Home, About, Contact)',
                  'Mobile-responsive design',
                  'FREE lifetime hosting on Vercel',
                  'Domain setup (domain fee separate)',
                  'Contact form with email notifications',
                  'Google Maps integration',
                  'Basic SEO optimization',
                  '2 rounds of revisions',
                  '1-2 weeks delivery',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-all font-semibold"
              >
                Get Started
              </a>
            </div>

            {/* Professional Package */}
            <div className="bg-dark-800 border-2 border-primary-500 rounded-2xl p-8 relative transform md:scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
                <p className="text-dark-400 text-sm">Ideal for established local businesses</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary-500 mb-1">$1,499</div>
                <div className="text-dark-400 text-sm">One-time payment</div>
              </div>
              <div className="space-y-3 mb-8">
                {[
                  '5-7 page website (custom pages)',
                  'Premium mobile-responsive design',
                  'FREE lifetime hosting on Vercel',
                  'Domain setup (domain fee separate)',
                  'Advanced contact forms',
                  'Google Maps + Business Hours',
                  'Photo gallery/portfolio',
                  'Social media integration',
                  'Advanced SEO optimization',
                  'Google Business Profile setup',
                  '3 rounds of revisions',
                  '1-2 weeks delivery',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-semibold shadow-lg"
              >
                Get Started
              </a>
            </div>

            {/* Premium Package */}
            <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
                <p className="text-dark-400 text-sm">Full-featured solution for growing businesses</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary-500 mb-1">Custom</div>
                <div className="text-dark-400 text-sm">Starting at $2,499</div>
              </div>
              <div className="space-y-3 mb-8">
                {[
                  'Everything in Professional',
                  'Unlimited pages',
                  'E-commerce capabilities (optional)',
                  'Customer appointment booking',
                  'Blog/news section',
                  'Email marketing integration',
                  'Analytics dashboard',
                  'Custom features & integrations',
                  'Priority support',
                  'Unlimited revisions',
                  '2 weeks delivery',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-all font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-dark-800 border border-dark-700 rounded-xl p-6 max-w-2xl">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <p className="text-white font-semibold mb-2">What's Included in Every Package:</p>
                  <p className="text-dark-300 text-sm">
                    All packages include FREE lifetime hosting on Vercel (no monthly fees ever), mobile-responsive design,
                    SSL certificate (secure HTTPS), and full code ownership. Domain registration through Namecheap
                    (~$12-15/year, paid directly to registrar). We also provide training on how to update your site content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-dark-300 text-lg mb-8">
            Let's discuss how our IT solutions can help you achieve your goals. Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-semibold">
              Schedule a Call
            </a>
            <div className="flex items-center justify-center gap-4 text-dark-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:james@3kpro.services" className="hover:text-primary-500 transition-colors">
                  james@3kpro.services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-dark-300">
              Have a project in mind? Let's discuss how we can help you succeed.
            </p>
          </div>
          <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#e07856" opacity="0.2"/>
                  <path d="M20 4 L35 16 L30 32 L10 32 L5 16 Z" fill="#e07856"/>
                  <rect x="14" y="14" width="12" height="12" fill="white" opacity="0.9"/>
                  <path d="M20 10 L26 20 L20 30 L14 20 Z" fill="white"/>
                </svg>
                <span className="text-2xl font-bold text-white">3KPRO</span>
              </div>
              <p className="text-dark-400 text-sm">
                Delivering cutting-edge IT solutions and professional services since 2010.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-dark-400 hover:text-primary-500 transition-colors text-sm">Cloud Solutions</a>
                <a href="#services" className="block text-dark-400 hover:text-primary-500 transition-colors text-sm">Custom Development</a>
                <a href="#services" className="block text-dark-400 hover:text-primary-500 transition-colors text-sm">Data Management</a>
                <a href="#services" className="block text-dark-400 hover:text-primary-500 transition-colors text-sm">Cybersecurity</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-dark-400 hover:text-primary-500 transition-colors text-sm">About Us</a>
                <a href="#services" className="block text-dark-400 hover:text-primary-500 transition-colors text-sm">Services</a>
                <a href="#contact" className="block text-dark-400 hover:text-primary-500 transition-colors text-sm">Contact</a>
                <a href="#products" className="block text-dark-400 hover:text-primary-500 transition-colors text-sm">Products</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com/3kpro" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-500 transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://github.com/3kpro" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-500 transition-colors" aria-label="GitHub">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/3kpro" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              <p className="text-dark-400 mt-4 text-sm">
                <a href="mailto:james@3kpro.services" className="hover:text-primary-500 transition-colors">
                  james@3kpro.services
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-dark-800 pt-8 text-center text-dark-500 text-sm">
            <p>© {new Date().getFullYear()} 3KPRO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
