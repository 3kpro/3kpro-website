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
  return (
    <div className="min-h-screen bg-white">
      <SiteNav active="marketplace" />

      <main>
        {/* Marketplace Hero — structural grid + electric-blue eyebrow */}
        <section className="relative bg-white bg-grid pt-20 pb-16 md:pt-28 md:pb-20 border-b border-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div className="max-w-2xl">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2563eb] mb-3">
                  Deployment Repository
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-[1.05] tracking-[-0.03em]">
                  PREMIUM
                  <br />
                  <span className="opacity-30 text-4xl md:text-6xl uppercase">Software &amp; Tools.</span>
                </h1>
                <div className="w-12 h-[3px] bg-[#2563eb] mb-7" />
                <p className="text-lg text-black/60 max-w-lg leading-relaxed font-medium">
                  Direct acquisition of structural digital assets. A curated collection of
                  micro-SaaS, AI frameworks, and architectural workflows.
                </p>
              </div>
              <div className="text-right">
                <div className="text-[5rem] leading-none font-bold text-black tracking-[-0.05em]">
                  24<span className="text-[#2563eb]">+</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mt-2">
                  Products in Deployment
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2563eb] mb-3">
              Direct Acquisition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 tracking-[-0.03em] uppercase">
              Available Products
            </h2>
            <div className="flex flex-wrap border-l border-t border-black">
              {marketplaceItems
                .filter(
                  (item) =>
                    item.slug === 'xelora' ||
                    item.slug === 'fairmerge' ||
                    item.slug === 'cloud-ledger'
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-full md:w-1/2 lg:w-1/3 border-r border-b border-black"
                  >
                    <ProductCard item={item} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
