import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3KPRO - SaaS Solutions & AI Workflows for SMBs',
  description: 'Professional IT services, custom AI agents, and SaaS solutions for small to medium businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
