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
                {/* Modern hexagonal logo */}
                <div className="relative w-10 h-10 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-tron-red/20 rotate-0 group-hover:rotate-180 transition-transform duration-700 hexagon-shape"></div>
                  <div className="absolute inset-0 border-2 border-tron-red group-hover:border-tron-red-glow transition-colors hexagon-shape"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-tron-red font-bold text-lg font-display">3K</span>
                  </div>
                  <div className="absolute inset-0 bg-tron-red/0 group-hover:bg-tron-red/10 transition-all duration-300 hexagon-glow"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-display text-tron-red group-hover:text-tron-red-glow group-hover:drop-shadow-[0_0_8px_rgba(255,0,64,0.6)] transition-all tracking-tight">
                    3KPRO
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase -mt-1">Professional Services</span>
                </div>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-gray-300 hover:text-tron-red transition-colors font-medium">Services</a>
                <a href="#about" className="text-gray-300 hover:text-tron-red transition-colors font-medium">About</a>
                <a href="#contact" className="text-gray-300 hover:text-tron-red transition-colors font-medium">Contact</a>
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
              <svg className="w-4 h-4 text-tron-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-tron-red">Trusted by 50+ Growing Businesses</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Launch Faster.
              <br />
              <span className="bg-gradient-to-r from-tron-red via-tron-red-glow to-tron-accent bg-clip-text text-transparent animate-glow">
                Scale Smarter.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4"
            >
              We build <span className="text-white font-semibold">AI-powered SaaS platforms</span>, <span className="text-white font-semibold">intelligent automation workflows</span>, and <span className="text-white font-semibold">cloud infrastructure</span> that actually work.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
            >
              No enterprise bloat. No 12-month timelines. Just modern tech, deployed fast, built to scale.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-tron-red text-white rounded-lg border-2 border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.8),0_0_40px_rgba(255,0,64,0.4)] transition-all duration-300 font-semibold transform hover:scale-105 inline-flex items-center justify-center"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="https://trendpulse.3kpro.services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent text-white rounded-lg border-2 border-tron-red/50 hover:border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.8),0_0_40px_rgba(255,0,64,0.4)] transition-all duration-300 font-semibold transform hover:scale-105 inline-flex items-center justify-center"
              >
                View Live Demo
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>

            {/* Value Props */}
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-tron-darker/50 backdrop-blur-sm p-6 rounded-lg border border-tron-red/20">
                <div className="text-3xl font-bold text-tron-red mb-2">8 weeks</div>
                <div className="text-gray-300">Average time to MVP</div>
              </div>
              <div className="bg-tron-darker/50 backdrop-blur-sm p-6 rounded-lg border border-tron-red/20">
                <div className="text-3xl font-bold text-tron-red mb-2">3x faster</div>
                <div className="text-gray-300">Than traditional agencies</div>
              </div>
              <div className="bg-tron-darker/50 backdrop-blur-sm p-6 rounded-lg border border-tron-red/20">
                <div className="text-3xl font-bold text-tron-red mb-2">50% cost</div>
                <div className="text-gray-300">Savings vs. in-house team</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tron-red rounded-full blur-3xl opacity-10 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-tron-accent rounded-full blur-3xl opacity-10 -z-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-tron-darker border-y border-tron-red/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tron-red to-tron-red-glow bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-400 font-medium">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tron-red to-tron-red-glow bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-400 font-medium">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tron-red to-tron-red-glow bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-400 font-medium">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tron-red to-tron-red-glow bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-400 font-medium">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work - TrendPulse */}
      <section className="py-24 bg-tron-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-tron-red/10 rounded-full mb-4 border-2 border-tron-red/30">
              <span className="text-sm font-semibold text-tron-red">Featured Project</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">TrendPulse™: AI Content Automation</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our flagship SaaS platform that transforms how businesses create and manage social media content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-tron-darker to-tron-dark p-8 rounded-lg border-2 border-tron-red/30 shadow-[0_0_30px_rgba(255,0,64,0.2)]">
                <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                <p className="text-gray-300 mb-6">
                  Small businesses struggle to maintain consistent social media presence while managing day-to-day operations. Traditional solutions are either too expensive or too complex.
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
                <p className="text-gray-300 mb-6">
                  TrendPulse uses AI to discover trending topics, generate platform-optimized content, and schedule posts automatically. One platform, multiple AI providers, zero complexity.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-300"><span className="font-semibold text-white">TrendPulse™</span> discovers viral content opportunities</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-300"><span className="font-semibold text-white">AI Cascade™</span> generates content for 6 platforms simultaneously</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300"><span className="font-semibold text-white">$29-99/mo</span> with BYOK option (free AI usage)</span>
                  </div>
                </div>

                <a
                  href="https://trendpulse.3kpro.services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-tron-red text-white rounded-lg border-2 border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.8),0_0_40px_rgba(255,0,64,0.4)] transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  View Live Demo
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-tron-red/10 to-tron-accent/10 p-8 rounded-lg border-2 border-tron-red/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-tron-dark/50 p-4 rounded border border-tron-red/20">
                    <div className="text-tron-red text-sm font-semibold mb-1">Frontend</div>
                    <div className="text-white">Next.js 15</div>
                    <div className="text-white">React 19</div>
                    <div className="text-white">TypeScript</div>
                  </div>
                  <div className="bg-tron-dark/50 p-4 rounded border border-tron-red/20">
                    <div className="text-tron-red text-sm font-semibold mb-1">Backend</div>
                    <div className="text-white">Supabase</div>
                    <div className="text-white">PostgreSQL</div>
                    <div className="text-white">Redis</div>
                  </div>
                  <div className="bg-tron-dark/50 p-4 rounded border border-tron-red/20">
                    <div className="text-tron-red text-sm font-semibold mb-1">AI Integration</div>
                    <div className="text-white">Claude Opus</div>
                    <div className="text-white">Gemini Flash</div>
                    <div className="text-white">LM Studio</div>
                  </div>
                  <div className="bg-tron-dark/50 p-4 rounded border border-tron-red/20">
                    <div className="text-tron-red text-sm font-semibold mb-1">Infrastructure</div>
                    <div className="text-white">Vercel Edge</div>
                    <div className="text-white">OAuth 2.0</div>
                    <div className="text-white">Zod</div>
                  </div>
                </div>

                <div className="bg-tron-dark/30 p-6 rounded-lg border border-tron-red/20">
                  <h4 className="text-lg font-bold text-white mb-4">Key Results</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Time to Market</span>
                      <span className="text-tron-red font-bold">8 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Performance Score</span>
                      <span className="text-tron-red font-bold">95+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">User Satisfaction</span>
                      <span className="text-tron-red font-bold">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-tron-red rounded-full blur-3xl opacity-5 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-tron-accent rounded-full blur-3xl opacity-5 -z-10"></div>
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

      {/* Testimonials Section */}
      <section className="py-24 bg-tron-darker/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Trusted by businesses that demand excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-gradient-to-br from-tron-dark to-tron-darker p-8 rounded-lg border-2 border-tron-red/30 hover:border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.4)] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-tron-red" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "TrendPulse completely transformed our social media strategy. We're generating 10x more content in half the time, and our engagement has never been higher. The ROI is incredible."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-tron-red/20 rounded-full flex items-center justify-center mr-3 border-2 border-tron-red/30">
                  <span className="text-tron-red font-bold text-lg">SC</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Chen</div>
                  <div className="text-gray-400 text-sm">Marketing Director, TechFlow</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-tron-dark to-tron-darker p-8 rounded-lg border-2 border-tron-red/30 hover:border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.4)] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-tron-red" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Working with 3KPRO was a game-changer. They built our entire cloud infrastructure from scratch and had us live in under 6 weeks. Professional, responsive, and incredibly skilled."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-tron-red/20 rounded-full flex items-center justify-center mr-3 border-2 border-tron-red/30">
                  <span className="text-tron-red font-bold text-lg">MR</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Michael Rodriguez</div>
                  <div className="text-gray-400 text-sm">CTO, DataStream Solutions</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-tron-dark to-tron-darker p-8 rounded-lg border-2 border-tron-red/30 hover:border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.4)] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-tron-red" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The AI workflow automation they built saves us 20 hours per week. It's like having an extra team member who never sleeps. Absolutely worth the investment."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-tron-red/20 rounded-full flex items-center justify-center mr-3 border-2 border-tron-red/30">
                  <span className="text-tron-red font-bold text-lg">JP</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Jessica Park</div>
                  <div className="text-gray-400 text-sm">Founder, GrowthHub Agency</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process / How We Work */}
      <section className="py-24 bg-tron-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-tron-red/10 rounded-full mb-4 border-2 border-tron-red/30">
              <span className="text-sm font-semibold text-tron-red">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From discovery to deployment, we follow a proven process to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="relative group"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-tron-red/20 to-tron-red/5 rounded-full border-2 border-tron-red flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                  <span className="text-3xl font-bold text-tron-red">1</span>
                  <div className="absolute inset-0 bg-tron-red/20 blur-xl group-hover:bg-tron-red/40 transition-all duration-300 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                <p className="text-gray-400">
                  We dive deep into your business goals, challenges, and technical requirements
                </p>
              </div>
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-tron-red to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-tron-red/20 to-tron-red/5 rounded-full border-2 border-tron-red flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                  <span className="text-3xl font-bold text-tron-red">2</span>
                  <div className="absolute inset-0 bg-tron-red/20 blur-xl group-hover:bg-tron-red/40 transition-all duration-300 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Design</h3>
                <p className="text-gray-400">
                  Architect a scalable solution with modern tech stack and best practices
                </p>
              </div>
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-tron-red to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-tron-red/20 to-tron-red/5 rounded-full border-2 border-tron-red flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                  <span className="text-3xl font-bold text-tron-red">3</span>
                  <div className="absolute inset-0 bg-tron-red/20 blur-xl group-hover:bg-tron-red/40 transition-all duration-300 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Build</h3>
                <p className="text-gray-400">
                  Agile sprints with weekly demos. You see progress, provide feedback, stay in control
                </p>
              </div>
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-tron-red to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-tron-red/20 to-tron-red/5 rounded-full border-2 border-tron-red flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                  <span className="text-3xl font-bold text-tron-red">4</span>
                  <div className="absolute inset-0 bg-tron-red/20 blur-xl group-hover:bg-tron-red/40 transition-all duration-300 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Launch</h3>
                <p className="text-gray-400">
                  Deploy to production with monitoring, documentation, and ongoing support
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-tron-darker to-tron-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-tron-red/10 rounded-full mb-4 border-2 border-tron-red/30">
              <span className="text-sm font-semibold text-tron-red">Flexible Options</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the engagement model that fits your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Fixed Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-gradient-to-br from-tron-dark to-tron-darker p-8 rounded-lg border-2 border-tron-red/30 hover:border-tron-red hover:shadow-[0_0_30px_rgba(255,0,64,0.4)] transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Fixed Scope</h3>
                <p className="text-gray-400 text-sm mb-4">Best for well-defined projects</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-tron-red">$15K</span>
                  <span className="text-gray-400 ml-2">- $75K+</span>
                </div>
                <p className="text-gray-500 text-sm">One-time project fee</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Clear deliverables & timeline</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Predictable budget</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">30 days post-launch support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Source code & documentation</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full px-6 py-3 bg-transparent text-white rounded-lg border-2 border-tron-red/50 hover:border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.6)] transition-all duration-300 font-semibold text-center"
              >
                Get Quote
              </a>
            </motion.div>

            {/* Retainer - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-tron-red/10 to-tron-dark p-8 rounded-lg border-2 border-tron-red relative hover:shadow-[0_0_40px_rgba(255,0,64,0.5)] transition-all duration-300 transform md:scale-105"
            >
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <div className="px-4 py-1 bg-tron-red rounded-full text-white text-xs font-bold uppercase">
                  Most Popular
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Monthly Retainer</h3>
                <p className="text-gray-400 text-sm mb-4">Ongoing development & support</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-tron-red">$8K</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-500 text-sm">~160 hours/month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Dedicated development team</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Flexible scope & priorities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Weekly sprint reviews</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Priority support (response < 4hrs)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Cancel anytime (30 days notice)</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full px-6 py-3 bg-tron-red text-white rounded-lg border-2 border-tron-red hover:shadow-[0_0_25px_rgba(255,0,64,0.8)] transition-all duration-300 font-semibold text-center"
              >
                Start Retainer
              </a>
            </motion.div>

            {/* Hourly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-tron-dark to-tron-darker p-8 rounded-lg border-2 border-tron-red/30 hover:border-tron-red hover:shadow-[0_0_30px_rgba(255,0,64,0.4)] transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Hourly</h3>
                <p className="text-gray-400 text-sm mb-4">For consulting & small tasks</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-tron-red">$150</span>
                  <span className="text-gray-400 ml-2">/hour</span>
                </div>
                <p className="text-gray-500 text-sm">Billed weekly</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">No minimum commitment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Perfect for quick tasks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Code reviews & audits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-tron-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Technical consulting</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full px-6 py-3 bg-transparent text-white rounded-lg border-2 border-tron-red/50 hover:border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.6)] transition-all duration-300 font-semibold text-center"
              >
                Book Time
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm">
              All prices in USD. Custom packages available for enterprise clients.
            </p>
          </motion.div>
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
              <div className="flex items-center mb-4">
                <div className="relative w-8 h-8 mr-2">
                  <div className="absolute inset-0 bg-tron-red/20 hexagon-shape"></div>
                  <div className="absolute inset-0 border-2 border-tron-red hexagon-shape"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-tron-red font-bold text-sm font-display">3K</span>
                  </div>
                </div>
                <span className="text-xl font-bold font-display bg-gradient-to-r from-tron-red to-tron-red-glow bg-clip-text text-transparent">3KPRO</span>
              </div>
              <p className="text-gray-400 text-sm">Professional Services</p>
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
                <a href="mailto:hello@3kpro.services" className="hover:text-tron-red transition-colors">hello@3kpro.services</a>
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
