import type { Metadata } from 'next'
import { marketplaceItems } from '@/lib/data/marketplace'
import ProductCard from '@/components/marketplace/ProductCard'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Marketplace | 3KPRO',
  description: 'Discover premium apps, micro-SaaS, and workflows built by 3KPRO.',
}

export default function MarketplacePage() {
  const items = marketplaceItems.filter(
    (item) => item.slug === 'xelora' || item.slug === 'fairmerge' || item.slug === 'cloud-ledger'
  )

  return (
    <div className="op">
      <SiteNav active="marketplace" />

      <main>
        {/* Marketplace header */}
        <header className="pghead">
          <div className="eyebrow">Deployment repository</div>
          <h1>
            Premium <span className="amb">software</span><br />
            <span className="out">&amp; tools.</span>
          </h1>
          <p>
            Direct acquisition of structural digital assets. A curated collection of
            micro-SaaS, AI frameworks, and architectural workflows from the 3KPRO ecosystem.
          </p>
        </header>

        {/* Product grid */}
        <section>
          <div className="wrap tight">
            <div className="sec-head">
              <span className="tagchip">01 / Direct acquisition</span>
              <h2 className="h2">Available <span className="out">products.</span></h2>
            </div>
            <div className="prod-grid">
              {items.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
