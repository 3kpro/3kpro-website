'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.scroll-reveal'))

    if (!items.length) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return null
}
