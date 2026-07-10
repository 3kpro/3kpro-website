import type { LucideIcon } from 'lucide-react'
import { Camera, ClipboardCheck, Droplets, Gauge, Landmark, Route, Sprout, Tractor } from 'lucide-react'

export type SitePreview = {
  slug: string
  businessName: string
  shortName: string
  category: string
  location: string
  categoryEyebrow?: string
  conceptTitle: string
  conceptSubtitle: string
  observedOpportunity: string
  primaryCta: string
  secondaryCta: string
  headline?: string
  headlineAccent?: string
  primaryFix?: string
  placeholderNote?: string
  sectionKicker?: string
  sectionHeadline?: string
  sectionCopy?: string
  quoteFlowKicker?: string
  quoteFlowHeadline?: string
  quoteFlowCopy?: string
  trustHeading?: string
  listingHeading?: string
  proofStats?: Array<{
    value: string
    label: string
  }>
  variations?: Array<{
    title: string
    subtitle: string
    bestFor: string
    visualDirection: string
    customerAction: string
    image: string
    imageAlt: string
    linkHref?: string
  }>
  services: Array<{
    title: string
    copy: string
    icon: LucideIcon
    image: string
    imageAlt: string
  }>
  heroImage: string
  heroImageAlt: string
  gallery: Array<{
    title: string
    copy: string
    image: string
    imageAlt: string
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

const randallVariantPreviews = {
  'randall-mobile-mechanic-urgent-diagnostic': {
    index: 0,
    headlineAccent: 'urgent diagnostics that come to you',
    conceptTitle: 'Urgent diagnostic preview built for fast call and booking action.',
    conceptSubtitle:
      'This direction is direct and high-contrast for customers with a car problem today: no-starts, warning lights, strange noises, and the need for a mechanic who can come to them.',
    sectionKicker: 'Variation 1',
    sectionHeadline: 'Book the diagnostic before the customer calls someone else.',
    sectionCopy:
      'The page leads with speed, the $129 diagnostic, and a large call path so urgent customers can move from problem to appointment without reading a full brochure.',
    quoteFlowHeadline: 'Urgent issue, clear first step.',
    quoteFlowCopy:
      'Capture the vehicle, symptom, location, photos, and service window first. The repair scope only gets priced after The Last Stop Shop completes the diagnostic.',
    primaryCta: 'Call for diagnostic',
  },
  'randall-mobile-mechanic-trusted-neighborhood': {
    index: 1,
    headlineAccent: 'the driveway mechanic customers can trust',
    conceptTitle: 'Trusted neighborhood mechanic preview built around confidence and repeat customers.',
    conceptSubtitle:
      'This direction feels warmer and more personal, positioning The Last Stop Shop as the local mechanic people can call for home driveway repairs and family vehicles.',
    sectionKicker: 'Variation 2',
    sectionHeadline: 'Make The Last Stop Shop feel familiar before the first call.',
    sectionCopy:
      'The page gives more space to trust proof, plain-language service explanations, review placeholders, and the diagnostic-first process.',
    quoteFlowHeadline: 'Explain the problem, then approve the repair.',
    quoteFlowCopy:
      'Customers describe what happened, upload photos or codes, and choose a service window. The Last Stop Shop diagnoses first, then sends parts and labor for approval.',
    primaryCta: 'Request a service window',
  },
  'randall-mobile-mechanic-fleet-work-truck': {
    index: 2,
    headlineAccent: 'mobile service for work trucks and small fleets',
    conceptTitle: 'Fleet and work-truck preview built for contractors who cannot afford downtime.',
    conceptSubtitle:
      'This direction is more operational, focused on contractors, work trucks, small fleets, recurring maintenance, and keeping vehicles moving.',
    sectionKicker: 'Variation 3',
    sectionHeadline: 'Sell uptime, scheduling, and clear repair approval.',
    sectionCopy:
      'The page frames The Last Stop Shop as a practical mobile service option for contractors who need diagnostics, repairs, and maintenance without losing a workday.',
    quoteFlowHeadline: 'Route fleet issues into a clean service queue.',
    quoteFlowCopy:
      'Capture vehicle count, issue type, location, urgency, and maintenance needs, then turn diagnostics into an approved parts-and-labor repair path.',
    primaryCta: 'Request fleet service',
  },
} as const

const sitePreviewAliasSlugs = ['the-last-stop-shop'] as const

export const sitePreviewExtraSlugs = [...Object.keys(randallVariantPreviews), ...sitePreviewAliasSlugs]

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
    heroImage:
      'https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&fm=jpg&q=72&w=2200',
    heroImageAlt: 'Lawn care crew mowing and trimming a residential yard',
    services: [
      {
        title: 'Lawn maintenance',
        copy: 'A simple maintenance path for recurring residential and commercial work.',
        icon: Sprout,
        image:
          'https://images.unsplash.com/photo-1590820292118-e256c3ac2676?auto=format&fit=crop&fm=jpg&q=70&w=1200',
        imageAlt: 'Push lawn mower on a green lawn',
      },
      {
        title: 'Landscape design and install',
        copy: 'Before-and-after project sections for homeowners comparing options.',
        icon: Landmark,
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&fm=jpg&q=72&w=1200',
        imageAlt: 'Fresh green lawn outside a landscaped property',
      },
      {
        title: 'Irrigation service',
        copy: 'A direct repair and inspection CTA for sprinkler and system issues.',
        icon: Droplets,
        image:
          'https://images.unsplash.com/photo-1770664945615-52203ab54c88?auto=format&fit=crop&fm=jpg&q=72&w=1200',
        imageAlt: 'Sprinklers watering a green lawn in warm light',
      },
      {
        title: 'Commercial mowing',
        copy: 'A zero-turn-ready path for larger lawns, weekly routes, and commercial properties.',
        icon: Tractor,
        image:
          'https://images.unsplash.com/photo-1750987776992-19c2abd847ee?auto=format&fit=crop&fm=jpg&q=72&w=1200',
        imageAlt: 'Person mowing grass with a zero-turn lawn mower',
      },
    ],
    gallery: [
      {
        title: 'Use real project photos here',
        copy: 'Replace this stock lawn-care image with Horizon crew, trucks, and finished-yard photos as soon as they are available.',
        image:
          'https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&fm=jpg&q=72&w=1400',
        imageAlt: 'Residential mowing and trimming crew sample image',
      },
      {
        title: 'Show irrigation clearly',
        copy: 'Sprinkler repair, inspections, and system tuning need a dedicated visual lane because they are high-intent service calls.',
        image:
          'https://images.unsplash.com/photo-1703243056931-265dbc9be205?auto=format&fit=crop&fm=jpg&q=72&w=1400',
        imageAlt: 'Multiple sprinklers watering a lawn sample image',
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
  {
    slug: 'randall-mobile-mechanic',
    businessName: 'The Last Stop Shop LLC',
    shortName: 'The Last Stop Shop',
    category: 'Mobile Mechanic',
    location: 'Tulsa area',
    categoryEyebrow: 'Tulsa-area mobile mechanic',
    conceptTitle: 'A branded mobile mechanic preview for turning calls into booked diagnostics.',
    conceptSubtitle:
      'This preview shows how The Last Stop Shop LLC can present mobile diagnostics, driveway repair, parts transparency, and direct booking while keeping the business name and brand clear everywhere.',
    observedOpportunity:
      'Mobile mechanic customers are usually in a hurry: the car is not starting, a warning light is on, or they need a trusted mechanic to come to them. A focused site should sell fast diagnosis first, then convert the repair into a clear parts-and-labor plan.',
    primaryCta: 'Book a diagnostic',
    secondaryCta: 'See site variations',
    headline: 'The Last Stop Shop LLC',
    headlineAccent: 'diagnostics and repair that come to you',
    primaryFix: '$129 diagnostic',
    proofStats: [
      {
        value: '$129',
        label: 'diagnostic first',
      },
      {
        value: 'Call/Text',
        label: 'mobile-first booking',
      },
      {
        value: 'Approve',
        label: 'parts and labor before repair',
      },
    ],
    placeholderNote:
      'Stock images are placeholders for preview only. Replace with The Last Stop Shop logo, Randall, his vehicle, real tools, and before/after repair photos before launch.',
    sectionKicker: 'Three directions to choose from',
    sectionHeadline: 'Same offer, different first impression.',
    sectionCopy:
      'Each version keeps the brand visible in the header, call/text buttons, diagnostic request area, confirmation message, and lead flow while keeping the core offer clear: a $129 diagnostic first, parts priced separately, labor scoped clearly, easy call/text booking, photo upload, and follow-up reminders.',
    quoteFlowKicker: 'Recommended booking flow',
    quoteFlowHeadline: 'Start with the diagnostic, then price the repair clearly.',
    quoteFlowCopy:
      'The site should work like a simple service desk: collect the vehicle issue, get photos or codes, schedule the diagnostic, and turn the result into an approved parts-and-labor repair.',
    trustHeading: 'Trust signals to surface',
    listingHeading: 'Launch notes',
    heroImage:
      'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&fm=jpg&q=72&w=2200',
    heroImageAlt: 'Mechanic working on a vehicle outdoors',
    services: [
      {
        title: '$129 diagnostic',
        copy: 'Make the first step obvious: confirm the problem before anyone commits to parts or repair labor.',
        icon: Gauge,
        image:
          'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&fm=jpg&q=72&w=1200',
        imageAlt: 'Close view of car engine and mechanic inspection',
      },
      {
        title: 'Mobile repair booking',
        copy: 'Let customers request driveway, home, or worksite service with a phone-first booking path.',
        icon: Route,
        image:
          'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&fm=jpg&q=72&w=1200',
        imageAlt: 'Mechanic working on a car outside',
      },
      {
        title: 'Photo and code upload',
        copy: 'Collect warning lights, VIN, part photos, noises, and issue notes before Randall arrives.',
        icon: Camera,
        image:
          'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&fm=jpg&q=72&w=1200',
        imageAlt: 'Close view of car engine and mechanic inspection',
      },
      {
        title: 'Parts plus labor approval',
        copy: 'Separate customer-paid parts from approved labor so every repair feels fair and documented.',
        icon: ClipboardCheck,
        image:
          'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&fm=jpg&q=72&w=1200',
        imageAlt: 'Mechanic tools and parts arranged on a workbench',
      },
    ],
    variations: [
      {
        title: 'Variation 1: Urgent Diagnostic',
        subtitle: 'Fast, direct, and call-heavy for drivers who need help today.',
        bestFor: 'No-starts, warning lights, roadside-style urgency, and quick diagnostic bookings.',
        visualDirection: 'Bold black, high-contrast yellow, close-up engine imagery, large phone CTA.',
        customerAction: 'Call or book the $129 diagnostic.',
        image:
          'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&fm=jpg&q=72&w=1400',
        imageAlt: 'Close view of car engine and mechanic inspection',
        linkHref: '/sitepreview/randall-mobile-mechanic-urgent-diagnostic',
      },
      {
        title: 'Variation 2: Trusted Neighborhood Mechanic',
        subtitle: 'Warmer and personal, built around The Last Stop Shop as the mechanic customers can trust.',
        bestFor: 'Home driveway repairs, repeat customers, family vehicles, and review-driven trust.',
        visualDirection: 'Warm white, steel blue, clean service cards, visible reviews and warranty language.',
        customerAction: 'Describe the issue and request a service window.',
        image:
          'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&fm=jpg&q=72&w=1400',
        imageAlt: 'Mechanic tools and car parts on a workbench',
        linkHref: '/sitepreview/randall-mobile-mechanic-trusted-neighborhood',
      },
      {
        title: 'Variation 3: Fleet and Work Truck Ready',
        subtitle: 'More operational and professional for contractors who cannot afford downtime.',
        bestFor: 'Small fleets, work trucks, contractors, mobile equipment, and scheduled maintenance.',
        visualDirection: 'White, red, charcoal, route map cues, maintenance plans, priority request path.',
        customerAction: 'Request fleet service or recurring maintenance.',
        image:
          'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&fm=jpg&q=72&w=1400',
        imageAlt: 'Mechanic repairing a vehicle outdoors',
        linkHref: '/sitepreview/randall-mobile-mechanic-fleet-work-truck',
      },
    ],
    gallery: [
      {
        title: 'Diagnostic-first offer',
        copy: 'Lead with the $129 diagnostic so customers understand the first paid step before repair scope, parts, or labor are discussed.',
        image:
          'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&fm=jpg&q=72&w=1400',
        imageAlt: 'Close view of car engine and mechanic inspection',
      },
      {
        title: 'Simple repair approval',
        copy: 'After diagnosis, the customer sees what parts are needed, what Randall handles for labor, and what is approved before work starts.',
        image:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&fm=jpg&q=72&w=1400',
        imageAlt: 'Mechanic working with tools in an auto shop',
      },
    ],
    trustPoints: [
      'Show the $129 diagnostic clearly before talking about bigger repairs.',
      'Make call, text, and booking buttons visible on mobile without scrolling too far.',
      'Keep The Last Stop Shop LLC name and logo clear in the header, call/text path, request form, and confirmation message.',
      'Use real photos of Randall, vehicle, tools, and completed repairs as soon as available.',
      'Explain parts are priced separately and labor is approved after diagnosis.',
      'Surface service area, hours, emergency availability, and review proof.',
    ],
    conversionFlow: [
      'Customer lands from Google, Facebook, referral, or a texted preview link.',
      'Hero makes mobile mechanic service and $129 diagnostic obvious immediately.',
      'Customer taps call, text, or book diagnostic.',
      'Form captures name, phone, vehicle, location, symptoms, photos, codes, urgency, and preferred service window.',
      'The Last Stop Shop sends diagnostic result with parts list, labor estimate, and approval step before repair starts.',
    ],
    listingNotes: [
      'Confirm exact logo file, phone, service area, and whether Randall wants call-only or online booking.',
      'Add Google Business Profile, Facebook, and review links when available.',
      'Prepare real photo slots: The Last Stop Shop logo, Randall headshot, service vehicle, tools, engine bay, completed repairs.',
      'Build the site around diagnostic booking first; full repair quote happens after the diagnosis.',
    ],
    sources: [
      {
        label: 'Preview brief from James',
        href: '/sitepreview/the-last-stop-shop',
      },
      {
        label: 'Book diagnostic CTA',
        href: '#quote-flow',
      },
      {
        label: 'Photo upload placeholder',
        href: 'mailto:james@3kpro.services',
      },
      {
        label: '3KPRO preview process',
        href: '/sitepreview',
      },
    ],
    preparedFor: 'Prepared as a concept preview by 3KPRO. This is not the official website for The Last Stop Shop LLC.',
  },
]

export function getSitePreview(slug: string) {
  const directPreview = sitePreviews.find((preview) => preview.slug === slug)

  if (directPreview) {
    return directPreview
  }

  const randallBase = sitePreviews.find((preview) => preview.slug === 'randall-mobile-mechanic')

  if (slug === 'the-last-stop-shop' && randallBase) {
    return {
      ...randallBase,
      slug,
      secondaryCta: 'Review the package',
      sources: [
        {
          label: 'Original preview set',
          href: '/sitepreview/randall-mobile-mechanic',
        },
        ...randallBase.sources,
      ],
    }
  }

  const randallVariant = randallVariantPreviews[slug as keyof typeof randallVariantPreviews]
  const variation = randallBase?.variations?.[randallVariant?.index]

  if (!randallBase || !randallVariant || !variation) {
    return undefined
  }

  return {
    ...randallBase,
    slug,
    conceptTitle: randallVariant.conceptTitle,
    conceptSubtitle: randallVariant.conceptSubtitle,
    headlineAccent: randallVariant.headlineAccent,
    primaryCta: randallVariant.primaryCta,
    secondaryCta: 'Compare all three',
    sectionKicker: randallVariant.sectionKicker,
    sectionHeadline: randallVariant.sectionHeadline,
    sectionCopy: randallVariant.sectionCopy,
    quoteFlowHeadline: randallVariant.quoteFlowHeadline,
    quoteFlowCopy: randallVariant.quoteFlowCopy,
    heroImage: variation.image,
    heroImageAlt: variation.imageAlt,
    variations: undefined,
    sources: [
      {
        label: 'Compare all three variations',
        href: '/sitepreview/randall-mobile-mechanic',
      },
      ...randallBase.sources,
    ],
  }
}
