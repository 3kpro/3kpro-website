'use client'

import Link from 'next/link'
import { MarketplaceItem } from '@/lib/data/marketplace'

export default function ProductCard({ item }: { item: MarketplaceItem }) {
  const priceLabel =
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
        <div className="feat-list">
          {item.features.slice(0, 2).map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        <div className="price-row">
          <span className="pv">{priceLabel}</span>
          <span className="go">Analyze →</span>
        </div>
      </div>
    </Link>
  )
}
