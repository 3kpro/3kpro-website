'use client'

import Link from 'next/link'
import { MarketplaceItem } from '@/lib/data/marketplace'
import { ArrowRight, Check, Zap } from 'lucide-react'

export default function ProductCard({ item }: { item: MarketplaceItem }) {
  const isAvailable = item.status === 'Available' || item.status === 'Beta'

  return (
    <Link
      href={`/marketplace/${item.slug}`}
      className="group block bg-dark-800 border border-dark-700 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl flex items-center justify-center border border-dark-600 group-hover:border-primary-500/30 transition-colors">
            <Zap className="w-6 h-6 text-primary-500" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
            item.status === 'Available' 
              ? 'bg-green-500/10 text-green-500 border-green-500/20' 
              : item.status === 'Beta'
              ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
              : 'bg-dark-700 text-dark-300 border-dark-600'
          }`}>
            {item.status}
          </span>
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors mb-1">{item.name}</h3>
          <p className="text-sm text-primary-500 font-medium">{item.tagline}</p>
        </div>

        <p className="text-dark-300 text-sm mb-6 flex-grow line-clamp-3">
          {item.description}
        </p>

        <div className="space-y-2 mb-6">
          {item.features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-center text-xs text-dark-400">
              <Check className="w-3 h-3 text-primary-500 mr-2" />
              {feature}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-dark-700/50 flex items-end justify-between mt-auto">
          <div>
            <div className="text-xs text-dark-400 uppercase tracking-wider mb-1">Pricing</div>
            <div className="text-xl font-bold text-white">
              Contact Sales
            </div>
          </div>
          
          <div className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
            <ArrowRight className="w-5 h-5 text-dark-300 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  )
}
