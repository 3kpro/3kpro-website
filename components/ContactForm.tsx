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
      // For now, just log to console
      // In production, this would send to an API endpoint
      console.log('Form submission:', data)

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

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
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors ${
                errors.email ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="john@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            What can we help you with? *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message', { required: 'Message is required' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">Thank you! We'll get back to you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      <p className="text-center text-sm text-slate-500 mt-8">
        Or email us directly at{' '}
        <a href="mailto:hello@3kpro.services" className="text-sky-600 hover:text-sky-700 font-medium">
          hello@3kpro.services
        </a>
      </p>
    </div>
  )
}
