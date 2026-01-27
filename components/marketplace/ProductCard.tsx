'use client'

import Link from 'next/link'
import { MarketplaceItem } from '@/lib/data/marketplace'

export default function ProductCard({ item }: { item: MarketplaceItem }) {
  return (
    <Link
      href={`/marketplace/${item.slug}`}
      className="group block bg-white p-10 hover:bg-black hover:text-white transition-all duration-500 relative overflow-hidden h-full flex flex-col"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-10">
          <div className="w-12 h-12 border border-current flex items-center justify-center group-hover:rotate-12 transition-transform">
             <span className="font-bold text-xl uppercase tracking-tighter">
                {item.name.substring(0, 1)}
             </span>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">
              {item.status}
            </span>
            <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 border border-current opacity-20 group-hover:opacity-40">
              {item.category}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">{item.name}</h3>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{item.tagline}</div>
        </div>

        <p className="text-sm font-medium opacity-60 mb-10 leading-relaxed flex-grow line-clamp-3">
          {item.description}
        </p>

        <div className="space-y-3 mb-12">
          {item.features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-center text-[10px] font-bold uppercase tracking-tight">
              <div className="w-1 h-1 bg-current mr-3"></div>
              {feature}
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-current/10 flex items-center justify-between mt-auto">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-1">Provisioning Cost</div>
            <div className="text-2xl font-bold">
              {item.price === 0 ? 'FIXED: NULL' : item.price > 0 ? `FIXED: $${item.price}` : 'QUOTATION REQ'}
            </div>
          </div>
          
          <div className="text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
            Analyze →
          </div>
        </div>
      </div>
    </Link>
  )
}
