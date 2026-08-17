'use client'

import { submitContactForm } from '@/app/actions'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type LastStopShopRequest = {
  name: string
  email: string
  phone: string
  vehicle: string
  location: string
  issue: string
  preferredWindow: string
}

const inputClasses =
  'w-full rounded-2xl border border-white/12 bg-white/[0.065] px-4 py-4 text-sm font-semibold text-white outline-none transition placeholder:text-white/30 focus:border-[#ff2a2a]/80'
const labelClasses = 'mb-2 block text-[10px] font-black uppercase text-white/54'

export function LastStopShopRequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LastStopShopRequest>()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onSubmit = async (data: LastStopShopRequest) => {
    setStatus('sending')

    const message = [
      'THE LAST STOP SHOP SERVICE REQUEST',
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Vehicle / equipment: ${data.vehicle}`,
      `Service location: ${data.location}`,
      `Preferred window: ${data.preferredWindow || 'Not provided'}`,
      '',
      'Issue:',
      data.issue,
    ].join('\n')

    const formData = new FormData()
    formData.append('recipient', 'tlss')
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('company', 'The Last Stop Shop LLC')
    formData.append('message', message)

    try {
      const result = await submitContactForm(null, formData)

      if (!result.success) {
        throw new Error(result.message || 'Service request failed')
      }

      reset()
      setStatus('sent')
    } catch (error) {
      console.error('The Last Stop Shop request error:', error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="scroll-reveal rounded-[24px] border border-white/14 bg-white/[0.07] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      <div className="text-xs font-black uppercase text-[#ff2a2a]">Request service</div>
      <h3 className="mt-3 text-2xl font-black leading-tight text-white">Send the job details to Randall.</h3>
      <p className="mt-3 text-sm leading-6 text-white/62">
        Include the vehicle or equipment, location, AC symptoms, hydraulic issues, and best time for a diagnostic.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label>
          <span className={labelClasses}>Name *</span>
          <input className={`${inputClasses} ${errors.name ? 'border-red-400' : ''}`} {...register('name', { required: true })} />
        </label>
        <label>
          <span className={labelClasses}>Phone *</span>
          <input type="tel" className={`${inputClasses} ${errors.phone ? 'border-red-400' : ''}`} {...register('phone', { required: true })} />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label>
          <span className={labelClasses}>Email *</span>
          <input type="email" className={`${inputClasses} ${errors.email ? 'border-red-400' : ''}`} {...register('email', { required: true })} />
        </label>
        <label>
          <span className={labelClasses}>Vehicle or equipment *</span>
          <input className={`${inputClasses} ${errors.vehicle ? 'border-red-400' : ''}`} placeholder="2016 Ford F-150, mower, generator" {...register('vehicle', { required: true })} />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label>
          <span className={labelClasses}>Service location *</span>
          <input className={`${inputClasses} ${errors.location ? 'border-red-400' : ''}`} placeholder="Tulsa, driveway, job site" {...register('location', { required: true })} />
        </label>
        <label>
          <span className={labelClasses}>Preferred window</span>
          <input className={inputClasses} placeholder="Today, tomorrow morning, this week" {...register('preferredWindow')} />
        </label>
      </div>

      <label className="mt-4 block">
        <span className={labelClasses}>What is it doing? *</span>
        <textarea rows={4} className={`${inputClasses} resize-none ${errors.issue ? 'border-red-400' : ''}`} placeholder="AC not cold, no-start, check-engine light, overheating, hydraulic leak, small-engine issue, noise, codes, or recent repairs." {...register('issue', { required: true })} />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-5 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-[#e50914] px-6 text-sm font-black text-white transition hover:bg-[#ff2a2a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending request...' : 'Send service request'}
      </button>

      {status === 'sent' ? (
        <div className="mt-4 rounded-2xl border border-[#19e06f]/35 bg-[#19e06f]/10 p-4 text-sm font-bold text-[#b9ffd4]">
          Request sent to randall@thelaststopshop.com.
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="mt-4 rounded-2xl border border-red-400/40 bg-red-500/10 p-4 text-sm font-bold text-red-100">
          Request failed. Email randall@thelaststopshop.com directly.
        </div>
      ) : null}
    </form>
  )
}
