'use client'

import Link from 'next/link'
import OperatorStyles from '@/components/operator/OperatorStyles'

type NavSection = 'services' | 'marketplace' | 'about'

/**
 * Shared site navigation — OPERATOR direction (2026-07-06).
 * Matches the amber mission-control redesign on the homepage. Links use
 * absolute paths so anchors resolve correctly from any route.
 */
export default function SiteNav({ active }: { active?: NavSection }) {
  const link = (section: NavSection) => (active === section ? 'active' : undefined)

  // Note: this renders inside a page-level `.op` wrapper (not its own),
  // so OperatorStyles' CSS vars and classes cascade to the whole page.
  return (
    <>
      <OperatorStyles />
      <nav className="topnav">
        <Link href="/" className="logo">
          <span className="sq" />3KPRO<span style={{ color: 'var(--faint)', fontWeight: 600 }}>·OS</span>
        </Link>
        <div className="nav-links">
          <Link href="/#services" className={link('services')}>Services</Link>
          <Link href="/services/local-estimate-capture">Estimate Capture Sprint</Link>
          <Link href="/pay">Quick Pay</Link>
          <Link href="/#about" className={link('about')}>About</Link>
        </div>
        <div className="nav-clock" />
        <Link href="/services/local-estimate-capture#assessment" className="btn nav-cta">Request assessment</Link>
      </nav>
    </>
  )
}
