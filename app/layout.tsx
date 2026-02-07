import type { Metadata, Viewport } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: '3K Pro Services - Enterprise IT & AI-Native Solutions',
  description: 'Professional IT services and AI solutions provider in Tulsa, OK. Specializing in cloud architecture, custom development, and AI-native SaaS products like XELORA.',
  keywords: [
    'IT services Tulsa',
    'AI solutions',
    'SaaS development',
    'cloud architecture',
    'enterprise software',
    'XELORA',
    'custom web development',
    '3kpro',
    'Tulsa software company'
  ],
  authors: [{ name: '3K Pro Services', url: 'https://3kpro.services' }],
  creator: '3K Pro Services',
  publisher: '3K Pro Services',
  metadataBase: new URL('https://3kpro.services'),
  alternates: {
    canonical: 'https://3kpro.services',
  },
  openGraph: {
    title: '3K Pro Services - Enterprise IT & AI-Native Solutions',
    description: 'Bridging the gap between professional IT services and AI innovation. Makers of XELORA. Serving Tulsa, OK and nationwide.',
    url: 'https://3kpro.services',
    siteName: '3K Pro Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '3K Pro Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3K Pro Services - Enterprise IT & AI-Native Solutions',
    description: 'Professional IT services and AI solutions. cloud architecture, and AI-native SaaS products.',
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
    name: '3K Pro Services',
    description: 'Professional IT services and AI solutions provider in Tulsa, OK. Specializing in website development, cloud architecture, and AI-native SaaS products like XELORA.',
    url: 'https://3kpro.services',
    logo: 'https://3kpro.services/og-image.png',
    email: 'james@3kpro.services',
    telephone: '+1-918-816-8832',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tulsa',
      addressRegion: 'OK',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-918-816-8832',
      email: 'james@3kpro.services',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://twitter.com/3KPRO_SAAS',
      'https://linkedin.com/company/3k-pro-services',
    ],
    owns: [
      {
        '@type': 'SoftwareApplication',
        name: 'XELORA',
        url: 'https://getxelora.com',
        applicationCategory: 'BusinessApplication',
        description: 'AI-powered predictive intelligence platform for content creators. Predict momentum. Engineer virality.',
      },
    ],
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Professional IT Services',
        description: 'Cloud architecture, custom development, and SaaS consulting.',
      },
      priceCurrency: 'USD',
      price: 'Custom'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services & Products',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise SaaS Development',
            description: 'Scalable AI-native applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local Business Solutions',
            description: 'Professional web presence and digital transformation',
          },
        },
      ],
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
    </html>
  )
}
