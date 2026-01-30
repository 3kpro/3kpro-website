import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marketplaceItems } from '@/lib/data/marketplace'
import { Check, ArrowLeft, Shield, Zap, Globe } from 'lucide-react'
import { PurchaseAction } from '@/components/marketplace/PurchaseAction'
import { FairMergeVisuals } from '@/components/marketplace/FairMergeVisuals'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = marketplaceItems.find((p) => p.slug === slug)

  if (!product) {
    return {
      title: 'Product Not Found | 3KPRO',
    }
  }

  return {
    title: `${product.name} | Marketplace | 3KPRO`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${product.tagline}`,
      description: product.description,
      type: 'website',
      images: [
        {
          url: product.image || '/og-image.png',
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | 3KPRO`,
      description: product.description,
      images: [product.image || '/og-image.png'],
    },
  }
}

export async function generateStaticParams() {
  return marketplaceItems.map((item) => ({
    slug: item.slug,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = marketplaceItems.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white bg-grid text-black">
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
             <div className="flex items-center space-x-8">
              <Link href="/marketplace" className="text-sm font-bold text-black/60 hover:text-black flex items-center transition-colors uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Repository
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Product Hero - Structural Layout */}
        <section className="relative pt-32 pb-20 border-b border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Info */}
              <div className="space-y-10">
                <div>
                  <div className="inline-flex items-center px-3 py-1 border border-black mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{product.category}</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-[0.95] tracking-tight uppercase">
                    {product.name}
                  </h1>
                  <p className="text-xl font-bold opacity-40 uppercase tracking-tight mb-8">
                    {product.tagline}
                  </p>
                  
                  <p className="text-lg text-black/70 mb-12 leading-relaxed font-medium max-w-xl">
                    {product.description}
                  </p>
                </div>

                {product.slug === 'fairmerge' && <FairMergeVisuals />}

                <div className="space-y-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">System Capabilities</h3>
                  <div className="grid gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center p-4 border border-black/5 bg-black/[0.01] hover:bg-black/[0.03] transition-colors">
                        <div className="w-1.5 h-1.5 bg-black mr-4 rotate-45"></div>
                        <span className="text-sm font-medium text-black/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-10">
                   {(product.status === 'Available' || product.status === 'Beta' || product.status === 'Coming Soon') && (
                      <PurchaseAction product={product} />
                   )}
                   
                   {product.demoUrl && (
                     <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-5 border border-black text-black hover:bg-black hover:text-white transition-all font-bold uppercase tracking-widest text-xs flex items-center justify-center"
                      >
                        <Globe className="w-4 h-4 mr-3" />
                        Execute Demo
                      </a>
                   )}
                </div>
              </div>

              {/* Right Column: Visual Unit */}
              <div className="lg:sticky lg:top-32 lg:pb-10">
                <div className="border border-black bg-white p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden">
                  {/* Decorative index number */}
                   <div className="absolute top-0 right-0 p-8 text-[60px] font-bold opacity-[0.03] leading-none select-none">
                      {product.id === 'xelora' ? '00' : '01'}
                   </div>

                   <div className="relative z-10 text-center py-12">
                      <div className="w-32 h-32 border border-black mx-auto flex items-center justify-center mb-10 group-hover:bg-black group-hover:text-white transition-all">
                         <span className="text-4xl font-bold tracking-tighter">
                           {product.name.substring(0,2).toUpperCase()}
                         </span>
                      </div>
                      
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4">
                        Allocation Matrix
                      </div>
                      <div className="text-5xl font-bold text-black mb-2 tracking-tighter">
                        {product.price === 0 ? 'FREE' : `$${product.price}`}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-12">
                        {product.price === 0 ? 'Public Utility Access' : 'Single Structural Asset'}
                      </div>

                      <div className="border-t border-black/10 pt-10 text-left space-y-5">
                         <div className="flex items-center text-xs font-bold uppercase tracking-widest opacity-60">
                           <Shield className="w-4 h-4 mr-4" />
                           Architectural Integrity
                         </div>
                         <div className="flex items-center text-xs font-bold uppercase tracking-widest opacity-60">
                           <Zap className="w-4 h-4 mr-4" />
                           Engineering Support
                         </div>
                         <div className="flex items-center text-xs font-bold uppercase tracking-widest opacity-60">
                            <Globe className="w-4 h-4 mr-4" />
                            Structural Ownership
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
