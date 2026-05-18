import type { Metadata, Viewport } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: '3K Pro Services - AI-Native IT & Automation in Tulsa & Broken Arrow',
  description: '3K Pro Services helps Tulsa & Broken Arrow businesses deploy AI-native IT, cloud architecture, and micro-SaaS workflows. Book a strategy session today.',
  icons: { icon: '/favicon.ico' },
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
    title: '3K Pro Services - AI-Native IT & Automation in Tulsa & Broken Arrow',
    description: '3K Pro Services helps Tulsa & Broken Arrow businesses deploy AI-native IT, cloud architecture, and micro-SaaS workflows. Book a strategy session today.',
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
    title: '3K Pro Services - AI-Native IT & Automation in Tulsa & Broken Arrow',
    description: '3K Pro Services helps Tulsa & Broken Arrow businesses deploy AI-native IT, cloud architecture, and micro-SaaS workflows. Book a strategy session today.',
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
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://3kpro.services/#localbusiness',
    name: '3K Pro Services',
    description: 'AI-native IT services, automation consulting, custom micro-SaaS development, and cloud architecture for Tulsa and Broken Arrow businesses.',
    url: 'https://3kpro.services',
    logo: 'https://3kpro.services/og-image.png',
    image: 'https://3kpro.services/og-image.png',
    email: 'james@3kpro.services',
    telephone: '+1-918-816-8832',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Broken Arrow',
      addressRegion: 'OK',
      postalCode: '74014',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.06095,
      longitude: -95.79745,
    },
    areaServed: [
      'Tulsa, OK',
      'Broken Arrow, OK',
      'Owasso, OK',
      'Bixby, OK',
      'Jenks, OK'
    ],
    serviceArea: [
      {
        '@type': 'City',
        name: 'Tulsa',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'OK',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'City',
        name: 'Broken Arrow',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'OK',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'City',
        name: 'Bixby',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'OK',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'City',
        name: 'Jenks',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'OK',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'City',
        name: 'Owasso',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'OK',
          addressCountry: 'US',
        },
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
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
      'https://www.linkedin.com/company/3kpro-services',
      'https://www.tiktok.com/@3kpro.services',
      'https://www.youtube.com/@3KPRO.SERVICES',
      'https://twitter.com/3KPRO_SAAS',
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
