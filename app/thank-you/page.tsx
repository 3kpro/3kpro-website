'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AuroraBackground } from '@/components/ui/aurora-background'

export default function ThankYouPage() {
  return (
    <AuroraBackground>
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Thank You!
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            We've received your inquiry and will get back to you within 24 hours.
          </motion.p>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              What Happens Next?
            </h2>
            <ul className="text-left text-white/80 space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Our team reviews your inquiry</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>We'll reach out within 24 hours to discuss your needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Get a custom proposal tailored to your business</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/marketplace"
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Explore Marketplace
            </Link>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-sm text-white/60"
          >
            Need immediate assistance? Email us at{' '}
            <a href="mailto:contact@3kpro.services" className="text-white/80 hover:text-white underline">
              contact@3kpro.services
            </a>
          </motion.p>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}
