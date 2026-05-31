import { MetadataRoute } from 'next'
import { marketplaceItems } from '@/lib/data/marketplace'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://3kpro.services'
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services/ai-automation-consulting`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/custom-saas-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/it-strategy-cloud-architecture`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/marketplace`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pay`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cloud-ledger`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/factory`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/parascanai`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // thank-you is noindexed — excluded from sitemap intentionally
  ]

  const productRoutes: MetadataRoute.Sitemap = marketplaceItems.map((item) => ({
    url: `${baseUrl}/marketplace/${item.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...productRoutes]
}
