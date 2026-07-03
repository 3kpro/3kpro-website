'use client'

import { submitContactForm } from '@/app/actions'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type PreviewFormData = {
  contactName: string
  email: string
  businessName: string
  currentWebsite: string
  services: string
  serviceArea: string
  primaryGoal: string
  timeline: string
  notes: string
}

const inputClasses =
  'w-full rounded-xl border border-white/12 bg-white/[0.055] px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-white/28 focus:border-white/36'

const labelClasses = 'block text-[10px] font-bold uppercase tracking-[0.24em] text-white/54 mb-3'

export default function SitePreviewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PreviewFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: PreviewFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const message = [
      'WEBSITE PREVIEW REQUEST',
      '',
      `Business name: ${data.businessName}`,
      `Current website: ${data.currentWebsite || 'Not provided'}`,
      `Services / offer: ${data.services}`,
      `Service area: ${data.serviceArea}`,
      `Primary goal: ${data.primaryGoal}`,
      `Timeline: ${data.timeline || 'Not provided'}`,
      '',
      'Notes:',
      data.notes || 'Not provided',
    ].join('\n')

    const formData = new FormData()
    formData.append('name', data.contactName)
    formData.append('email', data.email)
    formData.append('company', data.businessName)
    formData.append('message', message)

    try {
      const result = await submitContactForm(null, formData)

      if (!result.success) {
        throw new Error(result.message || 'Preview request failed')
      }

      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus('idle'), 6000)
    } catch (error) {
      console.error('Preview request error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contactName" className={labelClasses}>
            Contact name *
          </label>
          <input
            id="contactName"
            type="text"
            className={`${inputClasses} ${errors.contactName ? 'border-red-400' : ''}`}
            placeholder="James"
            {...register('contactName', { required: 'Contact name required' })}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={`${inputClasses} ${errors.email ? 'border-red-400' : ''}`}
            placeholder="name@company.com"
            {...register('email', {
              required: 'Email required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Valid email required',
              },
            })}
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="businessName" className={labelClasses}>
            Business name *
          </label>
          <input
            id="businessName"
            type="text"
            className={`${inputClasses} ${errors.businessName ? 'border-red-400' : ''}`}
            placeholder="Company LLC"
            {...register('businessName', { required: 'Business name required' })}
          />
        </div>
        <div>
          <label htmlFor="currentWebsite" className={labelClasses}>
            Current website
          </label>
          <input
            id="currentWebsite"
            type="text"
            className={inputClasses}
            placeholder="https://example.com"
            {...register('currentWebsite')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="services" className={labelClasses}>
          Services or offer *
        </label>
        <textarea
          id="services"
          rows={3}
          className={`${inputClasses} resize-none ${errors.services ? 'border-red-400' : ''}`}
          placeholder="What do they sell, install, repair, advise, quote, or deliver?"
          {...register('services', { required: 'Services or offer required' })}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="serviceArea" className={labelClasses}>
            Service area *
          </label>
          <input
            id="serviceArea"
            type="text"
            className={`${inputClasses} ${errors.serviceArea ? 'border-red-400' : ''}`}
            placeholder="Tulsa, Broken Arrow, remote, etc."
            {...register('serviceArea', { required: 'Service area required' })}
          />
        </div>
        <div>
          <label htmlFor="primaryGoal" className={labelClasses}>
            Main action *
          </label>
          <input
            id="primaryGoal"
            type="text"
            className={`${inputClasses} ${errors.primaryGoal ? 'border-red-400' : ''}`}
            placeholder="Calls, quote requests, bookings, payments"
            {...register('primaryGoal', { required: 'Primary goal required' })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className={labelClasses}>
          Timeline
        </label>
        <input
          id="timeline"
          type="text"
          className={inputClasses}
          placeholder="ASAP, this month, before a campaign, no rush"
          {...register('timeline')}
        />
      </div>

      <div>
        <label htmlFor="notes" className={labelClasses}>
          Notes
        </label>
        <textarea
          id="notes"
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Competitors, style references, bad current site issues, must-have sections, or constraints."
          {...register('notes')}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/88 disabled:cursor-not-allowed disabled:opacity-55"
      >
        {isSubmitting ? 'Sending preview request...' : 'Request website preview'}
      </button>

      {submitStatus === 'success' && (
        <div className="rounded-xl border border-[#19e06f]/40 bg-[#19e06f]/10 p-4 text-sm font-semibold text-[#b9ffd4]">
          Preview request sent. Next step: fit check, then a preview scope and deposit path.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-sm font-semibold text-red-100">
          Request failed. Email james@3kpro.services or call 918-816-8832.
        </div>
      )}
    </form>
  )
}
