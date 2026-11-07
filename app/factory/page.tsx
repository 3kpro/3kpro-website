'use client'

import { useState } from 'react'
import Link from 'next/link'
import { marketplaceItems } from '@/lib/data/marketplace'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ProductCard from '@/components/marketplace/ProductCard'
import CatalogStyles from '@/components/marketplace/CatalogStyles'

const categories = ['All', ...new Set(marketplaceItems.map(product => product.category))]

export default function FactoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const filteredProducts = selectedCategory === 'All' ? marketplaceItems :
    marketplaceItems.filter(product => product.category === selectedCategory)
  const availableCount = marketplaceItems.filter(product => product.status === 'Available').length
  const betaCount = marketplaceItems.filter(product => product.status === 'Beta').length

  return (
    <div id="top" className="op catalog-pages">
      <CatalogStyles />
      <SiteNav active="marketplace" />
      <main>
        <header className="pghead">
          <Link href="/marketplace" className="back">Back to marketplace</Link>
          <div className="eyebrow">Software Factory</div>
          <h1>Our software<br />catalog.</h1>
          <p>Explore available tools, open betas, and products in development. Every listing shows its current stage; planned features are not yet available.</p>
          <div className="catalog-meta">
            <span>{availableCount} available</span><span>{betaCount} in beta</span><span>{marketplaceItems.length} catalog entries</span>
          </div>
        </header>
        <section className="wrap tight" aria-label="Product catalog">
          <div className="catalog-filters" role="group" aria-label="Filter by category">
            {categories.map(category => (
              <button key={category} type="button" className="catalog-filter" aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)}>{category}</button>
            ))}
          </div>
          <p className="lede mb-6" aria-live="polite">{filteredProducts.length} products shown</p>
          {filteredProducts.length ? (
            <div className="prod-grid">{filteredProducts.map(product => <ProductCard key={product.id} item={product} />)}</div>
          ) : <p className="catalog-empty">No products in this category.</p>}
        </section>
        <section className="cta-band">
          <div className="wrap">
            <h2 className="h2">Need a custom tool?</h2>
            <p className="lede mt-6 mb-8">Tell us about the work you want to simplify. We build business websites, internal tools, and workflow automation.</p>
            <Link href="/services/local-estimate-capture#assessment" className="btn">Request assessment</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
