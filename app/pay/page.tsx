import { Metadata } from 'next'
import Link from 'next/link'

const payUrl = process.env.NEXT_PUBLIC_STRIPE_QUICK_PAY_URL || ''
const depositUrl = process.env.NEXT_PUBLIC_STRIPE_DEPOSIT_PAY_URL || payUrl
const invoiceUrl = process.env.NEXT_PUBLIC_STRIPE_INVOICE_PAY_URL || payUrl
const customUrl = process.env.NEXT_PUBLIC_STRIPE_CUSTOM_PAY_URL || payUrl

const pageUrl = 'https://3kpro.services/pay'
const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=14&data=${encodeURIComponent(pageUrl)}`

export const metadata: Metadata = {
  title: 'Quick Pay | 3K Pro Services',
  description: 'Secure quick-pay page for 3K Pro Services deposits, invoice balances, and local consulting work.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Quick Pay | 3K Pro Services',
    description: 'Secure quick-pay page for 3K Pro Services deposits, invoice balances, and local consulting work.',
    url: pageUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '3K Pro Services Quick Pay' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick Pay | 3K Pro Services',
    description: 'Secure quick-pay page for 3K Pro Services deposits, invoice balances, and local consulting work.',
    images: ['/og-image.png'],
  },
}

const paymentOptions = [
  {
    label: 'Project Deposit',
    detail: 'Use after a scope, timeline, and price are confirmed.',
    href: depositUrl,
  },
  {
    label: 'Invoice Balance',
    detail: 'Use when paying the remaining balance on approved work.',
    href: invoiceUrl,
  },
  {
    label: 'Custom Service Payment',
    detail: 'Use for quick one-off work, audits, fixes, and small upgrades.',
    href: customUrl,
  },
]

export default function PayPage() {
  const hasPaymentLink = Boolean(payUrl || depositUrl || invoiceUrl || customUrl)

  return (
    <div className="min-h-screen bg-white bg-grid text-black">
      <nav className="bg-white/80 backdrop-blur-md border-b border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center border border-black transition-all group-hover:bg-black group-hover:text-white">
                <span className="text-xl font-bold tracking-tight">3K</span>
              </div>
              <span className="text-xl font-bold uppercase tracking-tight">3kpro.services</span>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link href="/#services" className="text-sm font-medium uppercase tracking-widest text-black/60 transition-colors hover:text-black">Services</Link>
              <Link href="/marketplace" className="text-sm font-medium uppercase tracking-widest text-black/60 transition-colors hover:text-black">Marketplace</Link>
              <Link href="/#contact" className="border border-black px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:items-start">
          <section>
            <div className="mb-8 inline-flex border border-black px-3 py-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secure payment handoff</span>
            </div>
            <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Quick Pay<br />
              <span className="opacity-40">3K Pro Services</span>
            </h1>
            <p className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-black/65">
              Use this page after James has confirmed the work, price, and next step. Payments are processed through Stripe; 3K Pro Services never stores card details.
            </p>

            <div className="grid gap-px overflow-hidden border border-black bg-black md:grid-cols-3">
              {paymentOptions.map((option) => {
                const enabled = Boolean(option.href)
                return (
                  <div key={option.label} className="flex min-h-[260px] flex-col bg-white p-8">
                    <div className="mb-8">
                      <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight">{option.label}</h2>
                      <p className="text-sm font-medium leading-relaxed text-black/60">{option.detail}</p>
                    </div>
                    <div className="mt-auto">
                      {enabled ? (
                        <a
                          href={option.href}
                          className="block w-full border border-black bg-black px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-black/90"
                          rel="noopener noreferrer"
                        >
                          Open Stripe
                        </a>
                      ) : (
                        <div className="border border-black/15 px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-black/35">
                          Link Pending
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {!hasPaymentLink && (
              <div className="mt-8 border border-black/10 bg-black/[0.02] p-6 text-sm font-medium leading-relaxed text-black/60">
                Payment buttons are waiting on live Stripe Payment Links. Set `NEXT_PUBLIC_STRIPE_QUICK_PAY_URL`, or separate deposit, invoice, and custom payment URLs, in Vercel before sending this page to customers.
              </div>
            )}
          </section>

          <aside className="border border-black bg-white p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)]">
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Scan to pay</div>
            <div className="mb-8 flex justify-center border border-black/10 bg-white p-6">
              <img src={qrSrc} width="260" height="260" alt="QR code for 3K Pro Services quick pay page" />
            </div>
            <div className="space-y-5 text-xs font-bold uppercase tracking-widest">
              <div>
                <span className="mb-2 block text-black/40">Page</span>
                <a href={pageUrl} className="break-all hover:underline">{pageUrl}</a>
              </div>
              <div>
                <span className="mb-2 block text-black/40">Phone</span>
                <a href="tel:+19188168832" className="hover:underline">918-816-8832</a>
              </div>
              <div>
                <span className="mb-2 block text-black/40">Email</span>
                <a href="mailto:james@3kpro.services" className="break-all hover:underline">james@3kpro.services</a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-black bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Payments handled through Stripe. Tulsa and Broken Arrow, OK.</p>
        </div>
      </footer>
    </div>
  )
}
