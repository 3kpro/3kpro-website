'use client'

import ContactForm from '@/components/ContactForm'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

type Service = {
  id: string
  name: string
  description: string
  fullDescription: string
  features: string[]
  technologies: string[]
  icon: React.ReactElement
  link?: string
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const services: Service[] = [
    {
      id: 'saas',
      name: 'SaaS Solutions',
      description: 'From concept to launch, we build scalable software-as-a-service platforms that drive revenue. Our flagship: TrendPulse - AI-powered social media campaign automation.',
      fullDescription: 'We specialize in building complete SaaS platforms from the ground up. From architecture design to deployment, we handle every aspect of creating a scalable, revenue-generating software service.',
      features: [
        'Full-stack development (React, Next.js, Node.js)',
        'Scalable cloud infrastructure',
        'Payment integration (Stripe, PayPal)',
        'User authentication & authorization',
        'Analytics & reporting dashboards',
        'API development & documentation'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
      icon: <svg className="w-6 h-6 text-tron-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      link: 'https://trendpulse.3kpro.services'
    },
    {
      id: 'ai',
      name: 'AI Agents & Workflows',
      description: 'Custom AI agents that handle complex workflows autonomously. From data processing to customer service, we build intelligent systems that work 24/7.',
      fullDescription: 'Harness the power of AI to automate complex business processes. We build custom AI agents using cutting-edge LLMs and machine learning models tailored to your specific needs.',
      features: [
        'Custom AI agent development',
        'Workflow automation',
        'Natural language processing',
        'Data extraction & analysis',
        'Integration with existing systems',
        'Continuous learning & improvement'
      ],
      technologies: ['Python', 'LangChain', 'OpenAI', 'Anthropic', 'Vector DBs', 'FastAPI'],
      icon: <svg className="w-6 h-6 text-tron-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    },
    {
      id: 'custom-dev',
      name: 'Custom Software Development',
      description: 'Enterprise-grade applications tailored to your business logic. Full-stack expertise: React, Next.js, Node.js, Python, cloud-native architecture.',
      fullDescription: 'Build software that perfectly fits your business processes. We develop custom applications with modern technologies, ensuring scalability, security, and maintainability.',
      features: [
        'Custom web applications',
        'Mobile app development',
        'Database design & optimization',
        'API development & integration',
        'Real-time features (WebSockets)',
        'Testing & quality assurance'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'Kubernetes'],
      icon: <svg className="w-6 h-6 text-tron-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    },
    {
      id: 'consulting',
      name: 'IT Strategy & Consulting',
      description: 'Navigate complex technology decisions with confidence. Architecture reviews, scalability planning, security audits, and digital transformation roadmaps.',
      fullDescription: 'Make informed technology decisions with expert guidance. We provide strategic consulting to help you choose the right technologies and architecture for your business goals.',
      features: [
        'Technology stack assessment',
        'Architecture design & review',
        'Scalability planning',
        'Security audits',
        'Performance optimization',
        'Digital transformation strategy'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Microservices', 'DevOps', 'CI/CD'],
      icon: <svg className="w-6 h-6 text-tron-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    },
    {
      id: 'cloud',
      name: 'Cloud Infrastructure',
      description: 'AWS, Azure, GCP - we design, deploy, and manage cloud infrastructure that scales. Infrastructure-as-code, DevOps, CI/CD, monitoring, and cost optimization.',
      fullDescription: 'Build and manage cloud infrastructure that scales with your business. We handle everything from initial setup to ongoing optimization and monitoring.',
      features: [
        'Infrastructure-as-Code (Terraform, CloudFormation)',
        'Container orchestration (Kubernetes, ECS)',
        'CI/CD pipeline setup',
        'Monitoring & alerting',
        'Cost optimization',
        'Disaster recovery planning'
      ],
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus'],
      icon: <svg className="w-6 h-6 text-tron-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    },
    {
      id: 'integration',
      name: 'System Integration',
      description: 'Connect disparate systems seamlessly. APIs, webhooks, ETL pipelines, and middleware that make your tech stack work as one unified platform.',
      fullDescription: 'Make your systems work together seamlessly. We build the connective tissue between your tools and platforms, ensuring smooth data flow and process automation.',
      features: [
        'REST & GraphQL API development',
        'Webhook integrations',
        'ETL pipeline creation',
        'Third-party API integration',
        'Data synchronization',
        'Real-time event processing'
      ],
      technologies: ['Node.js', 'Python', 'Apache Kafka', 'RabbitMQ', 'Redis', 'PostgreSQL'],
      icon: <svg className="w-6 h-6 text-tron-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    },
    {
      id: 'local-websites',
      name: 'Local Business Websites',
      description: 'Professional websites for local businesses with great reputations but no online presence. One-time fee includes design, development, domain, and FREE hosting.',
      fullDescription: 'Your business deserves to be found online. We build fast, modern websites for local businesses that look professional and convert visitors into customers. Unlike big agencies, you work directly with me - a local developer who understands your community.',
      features: [
        'Custom responsive design (mobile-first)',
        'FREE hosting on Vercel (no monthly fees)',
        'Domain registration via Namecheap',
        'Contact forms with email notifications',
        'Google Maps integration',
        'Fast loading (optimized for SEO)',
        'Full code ownership',
        'Local business schema markup'
      ],
      technologies: ['Next.js', 'React', 'Vercel', 'Namecheap', 'Resend'],
      icon: <svg className="w-6 h-6 text-tron-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    }
  ]

  return (
    <div className="min-h-screen bg-tron-dark tron-grid scanlines">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-tron-darker/80 border-b border-tron-red/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-tron-red mr-2 group-hover:drop-shadow-[0_0_12px_rgba(255,0,64,1)] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-3xl font-bold text-tron-red group-hover:text-tron-red-glow group-hover:drop-shadow-[0_0_12px_rgba(255,0,64,0.8)] transition-all duration-300 tracking-tight">
                  3KPRO
                </span>
              </div>
              <span className="ml-3 text-sm text-gray-400 font-medium">Professional Services</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-gray-300 hover:text-tron-red transition-colors">Services</a>
                <a href="#about" className="text-gray-300 hover:text-tron-red transition-colors">About</a>
                <a href="#contact" className="text-gray-300 hover:text-tron-red transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-tron-red/10 rounded-full mb-6 border-2 border-tron-red/30"
            >
              <span className="text-sm font-semibold text-tron-red">Engineering Tomorrow's Infrastructure</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Systems That Scale
              <br />
              <span className="bg-gradient-to-r from-tron-red via-tron-red-glow to-tron-accent bg-clip-text text-transparent animate-glow">
                Solutions That Matter
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Custom AI workflows, SaaS platforms, and cloud infrastructure designed for businesses ready to scale.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-tron-red text-white rounded-lg border-2 border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.8),0_0_40px_rgba(255,0,64,0.4)] transition-all duration-300 font-semibold transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-transparent text-white rounded-lg border-2 border-tron-red/50 hover:border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.8),0_0_40px_rgba(255,0,64,0.4)] transition-all duration-300 font-semibold transform hover:scale-105"
              >
                View Services
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tron-red rounded-full blur-3xl opacity-10 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-tron-accent rounded-full blur-3xl opacity-10 -z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-tron-darker/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {selectedService ? (
              // Service Detail View
              <motion.div
                key="detail"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl mx-auto"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex items-center text-gray-400 hover:text-tron-red transition-colors mb-8 group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Services
                </button>

                <div className="bg-gradient-to-br from-tron-dark to-tron-darker p-8 md:p-12 rounded-lg border-2 border-tron-red shadow-[0_0_30px_rgba(255,0,64,0.3),inset_0_0_20px_rgba(255,0,64,0.1)]">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-tron-red/20 rounded-lg border-2 border-tron-red flex items-center justify-center mr-4">
                      {selectedService.icon}
                    </div>
                    <h2 className="text-4xl font-bold text-white">{selectedService.name}</h2>
                  </div>

                  <p className="text-xl text-gray-300 mb-8">{selectedService.fullDescription}</p>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-tron-red mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-6 h-6 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-tron-red mb-4">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedService.technologies.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-tron-red/10 border-2 border-tron-red/30 rounded-full text-tron-red font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {selectedService.link ? (
                      <a
                        href={selectedService.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-tron-red text-white rounded-lg border-2 border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.8),0_0_40px_rgba(255,0,64,0.4)] transition-all duration-300 font-semibold transform hover:scale-105 text-center"
                      >
                        View Demo
                      </a>
                    ) : null}
                    <a
                      href="#contact"
                      className="px-8 py-4 bg-transparent text-white rounded-lg border-2 border-tron-red/50 hover:border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.8),0_0_40px_rgba(255,0,64,0.4)] transition-all duration-300 font-semibold transform hover:scale-105 text-center"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Services Grid View
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold text-white mb-4">What We Build</h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Full-stack solutions engineered for performance and scalability
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group p-8 bg-gradient-to-br from-tron-dark to-tron-darker rounded-lg border-2 border-tron-red/30 hover:border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.6),0_0_40px_rgba(255,0,64,0.3),inset_0_0_10px_rgba(255,0,64,0.1)] transition-all duration-500 transform hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedService(service)}
                    >
                      <div className="w-12 h-12 bg-tron-red/20 rounded border-2 border-tron-red/50 flex items-center justify-center mb-6 group-hover:bg-tron-red/30 group-hover:shadow-[0_0_20px_rgba(255,0,64,0.6)] transition-all">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <span className="text-tron-red hover:text-tron-red-glow font-semibold inline-flex items-center group">
                        Learn More →
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-tron-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Built for Small & Medium Businesses</h2>
              <p className="text-lg text-gray-300 mb-6">
                We understand the challenges of growing a business. Limited resources, tight budgets, and the need to move fast.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                That's why we focus on delivering maximum value with minimum complexity. No enterprise bloat. No unnecessary features. Just solutions that work.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-tron-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Rapid prototyping and iteration</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-tron-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Transparent pricing and timelines</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-tron-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Direct communication with developers</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-tron-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Ongoing support and maintenance</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-tron-red/5 backdrop-blur-sm rounded-lg p-8 border-2 border-tron-red/30 shadow-[inset_0_0_20px_rgba(255,0,64,0.1)]"
            >
              <blockquote className="text-xl text-white mb-4">
                "Technology should accelerate your business, not complicate it."
              </blockquote>
              <p className="text-gray-400">— The 3KPRO Philosophy</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-tron-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Let's Talk</h2>
            <p className="text-lg text-gray-300">
              Ready to build something great? Get in touch.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tron-darker text-white py-12 border-t border-tron-red/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-tron-red to-tron-red-glow bg-clip-text text-transparent">3KPRO</span>
              <p className="text-gray-400 mt-2">Professional Services</p>
              <p className="text-gray-400 mt-4 text-sm">
                Software and service solutions for growing businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-tron-red transition-colors">Services</a>
                <a href="#about" className="block text-gray-400 hover:text-tron-red transition-colors">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-tron-red transition-colors">Contact</a>
                <a href="https://trendpulse.3kpro.services" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-tron-red transition-colors">TrendPulse</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/3kpro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tron-red transition-colors" aria-label="GitHub">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/3kpro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tron-red transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/3kpro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tron-red transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                <a href="mailto:james@3kpro.services" className="hover:text-tron-red transition-colors">james@3kpro.services</a>
              </p>
            </div>
          </div>
          <div className="border-t border-tron-red/20 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} 3KPRO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
