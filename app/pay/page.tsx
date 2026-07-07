import { Metadata } from 'next'
import Link from 'next/link'
import OperatorStyles from '@/components/operator/OperatorStyles'

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
    type: 'deposit',
    amountLabel: '$500 fixed',
    button: 'Pay Deposit',
  },
  {
    label: 'Invoice Balance',
    detail: 'Use when paying the remaining balance on approved work.',
    type: 'invoice',
    amountLabel: 'Enter invoice amount',
    button: 'Pay Invoice',
    min: 100,
    defaultAmount: 500,
  },
  {
    label: 'Custom Service Payment',
    detail: 'Use for quick one-off work, audits, fixes, and small upgrades.',
    type: 'custom',
    amountLabel: 'Enter agreed amount',
    button: 'Pay Custom Amount',
    min: 50,
    defaultAmount: 250,
  },
]

export default function PayPage() {
  return (
    <div className="op">
      <OperatorStyles />
      <nav className="topnav">
        <Link href="/" className="logo">
          <span className="sq" />3KPRO<span style={{ color: 'var(--faint)', fontWeight: 600 }}>·OS</span>
        </Link>
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/pay" className="active">Quick Pay</Link>
        </div>
        <div className="nav-clock" />
        <Link href="/#contact" className="btn nav-cta">Initiate</Link>
      </nav>

      <header className="pghead">
        <div className="eyebrow">Secure payment handoff</div>
        <h1>
          Quick <span className="amb">pay.</span><br />
          <span className="out">3K Pro Services</span>
        </h1>
        <p>
          Use this page after James has confirmed the work, price, and next step.
          Payments are processed through Stripe; 3K Pro Services never stores card details.
        </p>
      </header>

      <main>
        <div className="wrap tight">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start" style={{ display: 'grid' }}>
            <section>
              <div className="price-grid">
                {paymentOptions.map((option, index) => (
                  <form
                    key={option.label}
                    action="/api/quick-pay/checkout"
                    method="post"
                    className={`price${index === 0 ? ' feat' : ''}`}
                  >
                    <input type="hidden" name="type" value={option.type} />
                    <div className="lbl">{option.label}</div>
                    <p style={{ marginTop: 14 }}>{option.detail}</p>
                    <label className="block" style={{ marginTop: 'auto', display: 'block' }}>
                      <span className="lbl" style={{ display: 'block', marginTop: 20, marginBottom: 8 }}>
                        {option.amountLabel}
                      </span>
                      {option.defaultAmount ? (
                        <div className="field">
                          <span>$</span>
                          <input
                            name="amount"
                            type="number"
                            min={option.min}
                            step="25"
                            defaultValue={option.defaultAmount}
                            aria-label={`${option.label} amount`}
                          />
                        </div>
                      ) : (
                        <div className="fixed">$500.00</div>
                      )}
                    </label>
                    <button type="submit" className="btn">{option.button}</button>
                  </form>
                ))}
              </div>

              <p style={{ marginTop: 28, color: 'var(--dim)', fontSize: 13, lineHeight: 1.8, borderTop: '1px solid var(--line)', paddingTop: 24 }}>
                Stripe Checkout opens after choosing a payment path. For invoice and custom payments,
                enter the agreed amount before opening checkout.
              </p>
            </section>

            <aside className="panel-card">
              <div className="lbl">Scan to pay</div>
              <div className="qr">
                <img src={qrSrc} width="260" height="260" alt="QR code for 3K Pro Services quick pay page" />
              </div>
              <div className="rows">
                <div>
                  <span className="k">Page</span>
                  <a href={pageUrl}>{pageUrl}</a>
                </div>
                <div>
                  <span className="k">Phone</span>
                  <a href="tel:+19188168832">918-816-8832</a>
                </div>
                <div>
                  <span className="k">Email</span>
                  <a href="mailto:james@3kpro.services">james@3kpro.services</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="foot">
        <span>Payments handled through Stripe {'//'} Tulsa and Broken Arrow, OK</span>
        <div className="links">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </footer>
    </div>
  )
}
