import type { Metadata } from 'next'
import { marketplaceItems } from '@/lib/data/marketplace'
import ProductCard from '@/components/marketplace/ProductCard'
import { AuroraBackground } from '@/components/ui/aurora-background'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marketplace | 3KPRO',
  description: 'Discover premium apps, micro-SaaS, and workflows built by 3KPRO.',
}

export default function MarketplacePage() {
  const categories = Array.from(new Set(marketplaceItems.map(item => item.category)))

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Navigation - Duplicated from Layout/Home for consistency (ideally should be in Layout) */}
      <nav className="bg-dark-900/95 backdrop-blur-sm border-b border-dark-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                 <div className="relative">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#e07856" opacity="0.2"/>
                    <path d="M20 4 L35 16 L30 32 L10 32 L5 16 Z" fill="#e07856"/>
                    <rect x="14" y="14" width="12" height="12" fill="white" opacity="0.9"/>
                    <path d="M20 10 L26 20 L20 30 L14 20 Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">3KPRO</span>
              </div>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/#services" className="text-dark-300 hover:text-primary-500 transition-colors">Services</Link>
              <Link href="/marketplace" className="text-primary-500 transition-colors font-medium">Marketplace</Link>
              <Link href="/#pricing" className="text-dark-300 hover:text-primary-500 transition-colors">Pricing</Link>
              <Link href="/#contact" className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <AuroraBackground className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
               <span className="text-sm font-medium text-primary-500">3KPRO Marketplace</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Premium Software & <span className="text-primary-500">Tools</span>
            </h1>
            <p className="text-xl text-dark-300">
              Accelerate your business with our curated collection of Micro-SaaS, AI wrappers, and workflow automation templates.
            </p>
          </div>
          
          {/* Categories/Filters could go here */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </AuroraBackground>
      
      {/* Footer Reuse or Placeholder */}
       <footer className="bg-dark-900 border-t border-dark-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-dark-500 text-sm">© {new Date().getFullYear()} 3KPRO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
