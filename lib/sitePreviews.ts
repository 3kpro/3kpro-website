import type { LucideIcon } from 'lucide-react'
import { Droplets, Landmark, MapPin, Sprout } from 'lucide-react'

export type SitePreview = {
  slug: string
  businessName: string
  shortName: string
  category: string
  location: string
  conceptTitle: string
  conceptSubtitle: string
  observedOpportunity: string
  primaryCta: string
  secondaryCta: string
  services: Array<{
    title: string
    copy: string
    icon: LucideIcon
  }>
  trustPoints: string[]
  conversionFlow: string[]
  listingNotes: string[]
  sources: Array<{
    label: string
    href: string
  }>
  preparedFor: string
}

export const sitePreviews: SitePreview[] = [
  {
    slug: 'horizon-lawn',
    businessName: 'Horizon Lawn Landscape & Irrigation Inc.',
    shortName: 'Horizon Lawn',
    category: 'Lawn, Landscape & Irrigation',
    location: 'Tulsa, Oklahoma',
    conceptTitle: 'A clearer path from local search to estimate requests.',
    conceptSubtitle:
      'This preview shows how Horizon could turn its long operating history, service mix, and local visibility into a cleaner mobile-first quote flow.',
    observedOpportunity:
      'Public listings point to horizonlawn.com, but the domain timed out during a live check. That means a motivated customer can find the business and still hit a dead end before requesting service.',
    primaryCta: 'Request an estimate',
    secondaryCta: 'Review service areas',
    services: [
      {
        title: 'Lawn maintenance',
        copy: 'A simple maintenance path for recurring residential and commercial work.',
        icon: Sprout,
      },
      {
        title: 'Landscape design and install',
        copy: 'Before-and-after project sections for homeowners comparing options.',
        icon: Landmark,
      },
      {
        title: 'Irrigation service',
        copy: 'A direct repair and inspection CTA for sprinkler and system issues.',
        icon: Droplets,
      },
      {
        title: 'Drainage and problem areas',
        copy: 'A photo-upload quote flow for runoff, erosion, and yard trouble spots.',
        icon: MapPin,
      },
    ],
    trustPoints: [
      'Long-running Tulsa-area operating history should be visible above the fold.',
      'Customers need a fast quote request path before they bounce to another landscaper.',
      'Listings should agree on website, phone, hours, and service categories.',
      'Project photos, service proof, and local-area pages would support higher-intent search traffic.',
    ],
    conversionFlow: [
      'Customer lands from Google, Birdeye, BBB, Nextdoor, or a direct referral.',
      'Hero explains the service area, core services, and estimate path in under ten seconds.',
      'Customer selects lawn, landscape, irrigation, or drainage.',
      'Mobile form captures name, phone, address, service type, photos, and urgency.',
      'Office receives a clean lead summary for follow-up instead of a vague contact message.',
    ],
    listingNotes: [
      'Website availability needs immediate confirmation.',
      'Phone and contact listings should be reconciled across directories.',
      'Service categories should consistently include lawn, landscaping, irrigation, and drainage where accurate.',
      'The quote CTA should be the same everywhere a customer finds the business.',
    ],
    sources: [
      {
        label: 'BBB profile',
        href: 'https://www.bbb.org/us/ok/tulsa/profile/landscape-architect/horizon-lawn-landscape-irrigation-inc-1025-21000197',
      },
      {
        label: 'Birdeye profile',
        href: 'https://reviews.birdeye.com/horizon-lawn-landscape-inc-156221478041220',
      },
      {
        label: 'Nextdoor listing',
        href: 'https://nextdoor.com/pages/horizon-lawn-landscape-tulsa-ok/',
      },
      {
        label: 'Listed domain',
        href: 'http://horizonlawn.com',
      },
    ],
    preparedFor: 'Prepared as a concept preview by 3KPRO. This is not the official Horizon Lawn website.',
  },
]

export function getSitePreview(slug: string) {
  return sitePreviews.find((preview) => preview.slug === slug)
}
