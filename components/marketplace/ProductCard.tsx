'use client'

import Link from 'next/link'
import { MarketplaceItem } from '@/lib/data/marketplace'

export default function ProductCard({ item }: { item: MarketplaceItem }) {
  const isPreRelease = item.status === 'In Development' || item.status === 'Coming Soon'
  const isFreeBeta = item.status === 'Beta' && item.price === 0
  const priceLabel = isPreRelease ? 'Not available' : isFreeBeta ? 'FREE DURING BETA' :
    item.price === 0 ? 'FREE' : item.price > 0 ? `FIXED · $${item.price}` : 'QUOTE REQ'

  return (
    <Link href={`/marketplace/${item.slug}`} className="prod">
      <div className="scr">
        <b>{item.name.substring(0, 1)}</b>
        <span className="badge">{item.status}</span>
      </div>
      <div className="body">
        <h3>{item.name}</h3>
        <div className="tag">{item.tagline}</div>
        <p>{item.description}</p>
        {isPreRelease && <div className="availability">Planned capabilities — not yet available.</div>}
        <div className="feat-list">
          {item.features.slice(0, 2).map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        {isFreeBeta && <div className="availability">Pricing will be introduced when beta ends.</div>}
        <div className="price-row">
          <span className="pv">{priceLabel}</span>
          <span className="go">{isPreRelease ? "View plans" : isFreeBeta ? "Explore beta" : "View product"} →</span>
        </div>
      </div>
    </Link>
  )
}
