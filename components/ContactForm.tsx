'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { submitContactForm } from '@/app/actions'

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
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('company', data.company || '')
      formData.append('message', data.message)

      const result = await submitContactForm(null, formData)

      if (result.success) {
        setSubmitStatus('success')
        reset()
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = "w-full px-4 py-4 bg-white border border-black focus:outline-none focus:ring-0 focus:border-black/40 transition-all text-black font-medium placeholder:text-black/20 text-sm"

  return (
    <div className="font-sans">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div>
          <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.25em] text-black mb-3">
            Entity Name / Representative *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Identification required' })}
            className={`${inputClasses} ${errors.name ? 'border-red-500' : 'border-black'}`}
            placeholder="E.G. JOHN DOE"
          />
          {errors.name && (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.25em] text-black mb-3">
            Communication Channel *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Communication channel required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid channel format'
              }
            })}
            className={`${inputClasses} ${errors.email ? 'border-red-500' : 'border-black'}`}
            placeholder="NAME@ORGANIZATION.COM"
          />
          {errors.email && (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-[10px] font-bold uppercase tracking-[0.25em] text-black mb-3">
            Organization (Optional)
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className={inputClasses}
            placeholder="LEGAL ENTITY NAME"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.25em] text-black mb-3">
            What can we bring to life? *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: 'Parameters required' })}
            className={`${inputClasses} resize-none ${errors.message ? 'border-red-500' : 'border-black'}`}
            placeholder="DESCRIBE THE SYSTEM PARAMETERS OR YOUR VISION..."
          />
          {errors.message && (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-6 bg-black text-white hover:bg-black/90 transition-all font-bold uppercase tracking-[0.3em] text-xs disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'PROCESSING...' : 'INITIALIZE SUBMISSION'}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="mt-8 p-6 border border-black bg-black text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Transmission Successful. Our engineers will review your parameters shortly.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-8 p-6 border border-red-500 bg-red-500/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">Transmission Interrupted. Please re-validate your parameters or contact james@3kpro.services directly.</p>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-black/10 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
          Direct Data Channel: <a href="mailto:james@3kpro.services" className="text-black hover:underline">james@3kpro.services</a>
        </p>
      </div>
    </div>
  )
}
