import Link from 'next/link'

/**
 * Shared site footer — OPERATOR direction (2026-07-06), matches homepage.
 * Renders inside a page-level `.op` wrapper.
 */
export default function SiteFooter() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} 3KPRO SYSTEMS {'//'} TULSA CONTROL</span>
      <div className="links">
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/pay">Quick Pay</Link>
        <a href="#top">Return to top ↑</a>
      </div>
    </footer>
  )
}
