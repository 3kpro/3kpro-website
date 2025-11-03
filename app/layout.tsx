import type { Metadata, Viewport } from 'next'
import { DM_Sans, Manrope } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: '3KPRO - Software & Service Solutions | SaaS, AI, Custom Development',
  description: 'Professional software and IT services for growing businesses. Custom AI agents, SaaS solutions, cloud infrastructure, and system integrations. Featuring TrendPulse - our flagship social media monitoring platform.',
  keywords: ['SaaS solutions', 'AI agents', 'custom software development', 'IT consulting', 'cloud infrastructure', 'system integration', 'TrendPulse', 'business automation'],
  authors: [{ name: '3KPRO' }],
  openGraph: {
    title: '3KPRO - Software & Service Solutions',
    description: 'Professional software and IT services for growing businesses. Custom AI agents, SaaS solutions, and more.',
    url: 'https://3kpro.services',
    siteName: '3KPRO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3KPRO - Software & Service Solutions',
    description: 'Professional software and IT services for growing businesses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${dmSans.variable} ${manrope.variable}`}>
      <body className="dark font-sans">{children}</body>
    </html>
  )
}
