import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: '3KPRO - Professional Websites for Local Businesses | One-Time Fee, FREE Hosting',
  description: 'Custom websites for local businesses with great reputations but no online presence. $1,500-$2,000 one-time fee includes design, development, and FREE lifetime hosting on Vercel. No monthly costs. Serving businesses nationwide.',
  keywords: [
    'local business websites',
    'small business web design',
    'affordable website development',
    'one-time website fee',
    'free website hosting',
    'local business web development',
    'professional website design',
    'custom business websites',
    'Vercel hosting',
    'mobile-first websites',
    'SEO optimized websites',
    'local SEO'
  ],
  authors: [{ name: '3KPRO', url: 'https://3kpro.services' }],
  creator: '3KPRO',
  publisher: '3KPRO',
  metadataBase: new URL('https://3kpro.services'),
  alternates: {
    canonical: 'https://3kpro.services',
  },
  openGraph: {
    title: '3KPRO - Professional Websites for Local Businesses',
    description: 'Custom websites for local businesses. $1,500-$2,000 one-time fee includes everything + FREE lifetime hosting. No monthly costs.',
    url: 'https://3kpro.services',
    siteName: '3KPRO',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '3KPRO - Professional Local Business Websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3KPRO - Professional Websites for Local Businesses',
    description: 'Custom websites for local businesses. One-time fee + FREE lifetime hosting.',
    creator: '@3kpro',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '3KPRO',
    description: 'Professional website development for local businesses with one-time fees and free lifetime hosting.',
    url: 'https://3kpro.services',
    telephone: '+1-XXX-XXX-XXXX', // Add your phone number
    email: 'james@3kpro.services',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$1500-$2000',
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Local Business Website Development',
        description: 'Custom responsive website with FREE lifetime hosting on Vercel',
      },
      price: '1500-2000',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1500-2000',
        priceCurrency: 'USD',
        billingDuration: 'One-time payment',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local Business Websites',
            description: 'Professional websites for local businesses with FREE hosting',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and migration services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Development',
            description: 'Tailored software solutions built with cutting-edge technologies',
          },
        },
      ],
    },
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="dark">{children}</body>
    </html>
  )
}
