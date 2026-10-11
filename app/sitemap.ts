import type { MetadataRoute } from 'next'
import { marketplaceItems } from '@/lib/data/marketplace'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://3kpro.services'
  // No invented lastModified timestamps; checkout and intake are not search destinations.
  const routes = ['', '/services/local-estimate-capture', '/services/website-systems',
    '/services/workflow-systems', '/services/ai-workspace-implementation',
    '/services/operating-systems', '/marketplace', '/cloud-ledger', '/factory', '/parascanai',
    '/privacy', '/terms']
  return [...routes.map(route => ({url: `${base}${route}`})),
    ...marketplaceItems.map(item => ({url: `${base}/marketplace/${item.slug}`}))]
}
