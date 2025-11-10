'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-3 bg-tron-darker/50 border-2 rounded-lg focus:ring-2 focus:ring-tron-red focus:border-tron-red transition-all text-white ${
                errors.name ? 'border-tron-red' : 'border-tron-red/30'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-tron-red-glow">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`w-full px-4 py-3 bg-tron-darker/50 border-2 rounded-lg focus:ring-2 focus:ring-tron-red focus:border-tron-red transition-all text-white ${
                errors.email ? 'border-tron-red' : 'border-tron-red/30'
              }`}
              placeholder="john@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-tron-red-glow">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className="w-full px-4 py-3 bg-tron-darker/50 border-2 border-tron-red/30 rounded-lg focus:ring-2 focus:ring-tron-red focus:border-tron-red transition-all text-white"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            What can we help you with? *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message', { required: 'Message is required' })}
            className={`w-full px-4 py-3 bg-tron-darker/50 border-2 rounded-lg focus:ring-2 focus:ring-tron-red focus:border-tron-red transition-all resize-none text-white ${
              errors.message ? 'border-tron-red' : 'border-tron-red/30'
            }`}
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-tron-red-glow">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-tron-red text-white rounded-lg border-2 border-tron-red hover:shadow-[0_0_20px_rgba(255,0,64,0.8),0_0_40px_rgba(255,0,64,0.4)] transition-all duration-300 font-semibold transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="mt-6 p-4 bg-tron-red/10 border-2 border-tron-red/30 rounded-lg">
          <p className="text-tron-red-glow font-medium">Thank you! We'll get back to you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg">
          <p className="text-red-400 font-medium">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      <p className="text-center text-sm text-gray-400 mt-8">
        Or email us directly at{' '}
        <a href="mailto:james@3kpro.services" className="text-tron-red hover:text-tron-red-glow font-medium transition-colors">
          james@3kpro.services
        </a>
      </p>
    </div>
  )
}
