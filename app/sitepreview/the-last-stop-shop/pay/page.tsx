import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react'

const pageUrl = 'https://3kpro.services/sitepreview/the-last-stop-shop/pay'
const cashAppUrl = 'https://cash.app/$tlss18'
const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=14&data=${encodeURIComponent(cashAppUrl)}`

export const metadata: Metadata = {
  title: 'Pay Diagnostic | The Last Stop Shop LLC',
  description: 'Pay the mobile diagnostic fee for The Last Stop Shop LLC.',
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'Pay Diagnostic | The Last Stop Shop LLC',
    description: 'Pay the mobile diagnostic fee for The Last Stop Shop LLC.',
    url: pageUrl,
    type: 'website',
  },
}

export default function LastStopShopPayPage() {
  return (
    <main className="min-h-screen bg-[#07080a] px-5 py-8 text-white sm:px-6 lg:px-8" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: 0 }}>
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,rgba(229,9,20,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:56px_56px] opacity-70" />
      <div className="relative mx-auto max-w-5xl">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/sitepreview/the-last-stop-shop" className="inline-flex items-center gap-2 text-xs font-black uppercase text-white/68 transition hover:text-white">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to service page
          </Link>
          <div className="flex items-center gap-3">
            <img src="/sitepreview/the-last-stop-shop/logo-transparent.png" alt="The Last Stop Shop LLC logo" className="h-12 w-12 object-contain drop-shadow-[0_0_20px_rgba(229,9,20,0.55)]" />
            <div className="hidden text-right sm:block">
              <div className="text-sm font-black uppercase">The Last Stop Shop LLC</div>
              <div className="text-[10px] font-bold uppercase text-white/50">Mobile diagnostics and repair</div>
            </div>
          </div>
        </nav>

        <section className="grid gap-8 py-16 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e50914]/34 bg-[#e50914]/12 px-5 py-3 text-xs font-black uppercase text-[#ff2a2a]">
              <ShieldCheck size={16} aria-hidden="true" />
              Diagnostic payment
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.92] md:text-7xl">
              Pay the <span className="text-[#ff2a2a]">$125.00 diagnostic.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Use this page when The Last Stop Shop has confirmed a diagnostic visit and asked for upfront payment.
              Parts and repair labor are reviewed separately after the diagnostic.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['Amount', '$125.00'],
                ['Payee', '$tlss18'],
                ['Service', 'Mobile diagnostic'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[22px] border border-white/12 bg-white/[0.075] p-5">
                  <div className="text-[10px] font-black uppercase text-white/46">{label}</div>
                  <div className="mt-2 text-xl font-black">{value}</div>
                </div>
              ))}
            </div>

            <a
              href={cashAppUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#e50914] px-8 text-sm font-black text-white shadow-[0_20px_50px_rgba(229,9,20,0.25)] transition hover:bg-[#ff2a2a]"
            >
              Open Cash App
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          </div>

          <aside className="rounded-[30px] border border-white/12 bg-white/[0.075] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.28)]">
            <div className="text-xs font-black uppercase text-[#ff2a2a]">Scan to pay</div>
            <div className="mt-5 rounded-[24px] bg-white p-5">
              <img src={qrSrc} width="280" height="280" alt="QR code for The Last Stop Shop Cash App payment" className="mx-auto h-auto w-full max-w-[280px]" />
            </div>
            <div className="mt-5 rounded-[22px] border border-white/12 bg-black/22 p-4">
              <div className="text-[10px] font-black uppercase text-white/46">Cash App</div>
              <a href={cashAppUrl} target="_blank" rel="noreferrer" className="mt-2 block break-all text-sm font-bold text-white transition hover:text-[#ff2a2a]">
                {cashAppUrl}
              </a>
            </div>
            <p className="mt-5 text-xs leading-6 text-white/54">
              Payment goes to The Last Stop Shop LLC. Confirm appointment timing before sending payment.
            </p>
          </aside>
        </section>
      </div>
    </main>
  )
}
