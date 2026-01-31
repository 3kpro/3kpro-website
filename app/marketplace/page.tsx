import type { Metadata } from 'next'
import { marketplaceItems } from '@/lib/data/marketplace'
import ProductCard from '@/components/marketplace/ProductCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marketplace | 3KPRO',
  description: 'Discover premium apps, micro-SaaS, and workflows built by 3KPRO.',
}

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-white bg-grid">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex items-center justify-center border border-black group-hover:bg-black group-hover:text-white transition-all">
                  <span className="font-bold text-xl tracking-tighter">3K</span>
                </div>
                <span className="text-xl font-bold text-black tracking-tight uppercase">3kpro.services</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/#services" className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest">Services</Link>
              <Link href="/marketplace" className="text-sm font-bold text-black transition-colors uppercase tracking-widest">Marketplace</Link>
              <Link href="/#about" className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest">About</Link>
              <Link href="/#contact" className="px-6 py-2 border border-black text-black text-sm font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest">
                Initiate Project
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Marketplace Hero */}
        <section className="relative pt-32 pb-20 border-b border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-3 py-1 border border-black mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Deployment Repository</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-[0.95] tracking-tight">
                  PREMIUM<br />
                  <span className="opacity-40 text-4xl md:text-6xl uppercase">Software & Tools.</span>
                </h1>
                <p className="text-lg text-black/70 max-w-lg leading-relaxed font-medium">
                  Direct acquisition of structural digital assets. A curated collection of micro-SaaS, AI frameworks, and architectural workflows.
                </p>
              </div>
              <div className="hidden md:block w-32 h-px bg-black/20"></div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center">
              {marketplaceItems
                .filter((item) => item.id === 'fairmerge')
                .map((item) => (
                  <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 border border-black -ml-px -mt-px">
                    <ProductCard item={item} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Index Style */}
      <footer className="bg-white border-t border-black py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-black flex items-center justify-center font-bold text-xs">3K</div>
              <span className="text-xl font-bold uppercase tracking-tighter">3KPRO.SERVICES</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
               <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">© {new Date().getFullYear()} 3KPRO.SYSTEMS. ALL RIGHTS RESERVED.</p>
               <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Tulsa // OK // USA</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
