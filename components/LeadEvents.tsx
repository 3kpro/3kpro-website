'use client'

import { useEffect } from 'react'
import { sendGAEvent } from '@next/third-parties/google'

export function recordLeadEvent(event: 'generate_lead' | 'phone_click' | 'email_click', form?: string) {
  // Analytics failures must never turn a successful inquiry into a failed form.
  try {
    sendGAEvent('event', event, { form_id: form || 'site_contact' })
  } catch { /* Optional measurement; no personal information is included. */ }
}

export default function LeadEvents() {
  useEffect(() => {
    const clicked = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest('a') : null
      const href = link?.getAttribute('href') || ''
      if (href.startsWith('tel:')) recordLeadEvent('phone_click')
      if (href.startsWith('mailto:')) recordLeadEvent('email_click')
    }
    document.addEventListener('click', clicked)
    return () => document.removeEventListener('click', clicked)
  }, [])
  return null
}
