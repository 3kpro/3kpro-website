'use client'

import { useState } from 'react'
import Link from 'next/link'
import { marketplaceItems, getProductsByCategory, getAvailableProducts } from '@/lib/data/marketplace'

export default function FactoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'SaaS', 'Micro-SaaS', 'DevOps', 'Security', 'Workflow', 'Template', 'Cloud Tool']

  const filteredProducts = selectedCategory === 'All'
    ? marketplaceItems
    : getProductsByCategory(selectedCategory as any)

  const availableCount = getAvailableProducts().length
  const comingSoonCount = marketplaceItems.filter(p => p.status === 'Coming Soon').length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                3KPRO
              </Link>
              <p className="text-slate-400 text-sm mt-1">Software Factory</p>
            </div>
            <Link
              href="/marketplace"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-colors"
            >
              View Marketplace
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Bleeding-Edge B2B Automation
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Professional solutions built with agentic AI workflows. Ship faster, break less, spend smarter.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-slate-400"><span className="text-white font-semibold">{availableCount}</span> Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-slate-400"><span className="text-white font-semibold">{comingSoonCount}</span> Coming Soon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-slate-400"><span className="text-white font-semibold">{marketplaceItems.length}</span> Total Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:bg-slate-900 transition-all"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  product.status === 'Available'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : product.status === 'Beta'
                    ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    : product.status === 'In Development'
                    ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {product.status}
                </span>
                <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-indigo-400 mb-3 font-medium">
                {product.tagline}
              </p>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Features */}
              <ul className="mb-4 space-y-1">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="mb-4 pt-4 border-t border-slate-800">
                {product.pricingTiers && product.pricingTiers.length > 0 ? (
                  <div className="space-y-1">
                    <p className="text-xs text-slate-400 mb-2">Pricing Tiers:</p>
                    {product.pricingTiers.map((tier, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">{tier.name}</span>
                        <span className="text-white font-semibold">
                          ${tier.price}{tier.name.toLowerCase().includes('month') || tier.name.toLowerCase().includes('starter') || tier.name.toLowerCase().includes('growth') || tier.name.toLowerCase().includes('scale') ? '/mo' : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">
                      ${product.price}
                    </span>
                    <span className="text-sm text-slate-400">
                      {product.category === 'SaaS' || product.category === 'DevOps' || product.category === 'Security' ? '/mo' : 'one-time'}
                    </span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="flex gap-2">
                {product.status === 'Available' ? (
                  <>
                    <button className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                      Buy Now
                    </button>
                    {product.demoUrl && (
                      <Link
                        href={product.demoUrl}
                        target="_blank"
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors border border-slate-700"
                      >
                        Demo
                      </Link>
                    )}
                  </>
                ) : (
                  <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2 px-4 rounded-lg text-sm transition-colors border border-slate-700">
                    Notify Me
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We build custom automation solutions for engineering teams. From API integrations to full platform builds.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
