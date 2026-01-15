import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marketplaceItems } from '@/lib/data/marketplace'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { Check, ArrowLeft, Shield, Zap, Globe } from 'lucide-react'
import Image from 'next/image'

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
    <div className="min-h-screen bg-dark-900">
      <nav className="bg-dark-900/95 backdrop-blur-sm border-b border-dark-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold text-white tracking-tight">3KPRO</span>
            </Link>
             <div className="flex items-center space-x-8">
              <Link href="/marketplace" className="text-sm text-dark-300 hover:text-white flex items-center transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Marketplace
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <AuroraBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Column: Info */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-6">
                {product.category}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl text-primary-500 mb-6 font-light">
                {product.tagline}
              </p>
              
              <p className="text-lg text-dark-300 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-4 mb-10">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-dark-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                 {(product.status === 'Available' || product.status === 'Beta' || product.status === 'Coming Soon') && (
                    <>
                      {product.stripePaymentLink ? (
                        <a
                          href={product.stripePaymentLink}
                          className="px-8 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all font-bold text-lg shadow-lg hover:shadow-primary-500/30 flex items-center justify-center"
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Get Access - ${product.price}
                        </a>
                      ) : (
                        <Link
                          href="/#contact"
                          className="px-8 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all font-bold text-lg shadow-lg hover:shadow-primary-500/30 flex items-center justify-center"
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Contact Sales
                        </Link>
                      )}
                    </>
                 )}
                 
                 {product.demoUrl && (
                   <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-dark-800 text-white border border-dark-700 rounded-xl hover:border-primary-500/50 transition-all font-bold text-lg flex items-center justify-center"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      View Demo
                    </a>
                 )}
              </div>
            </div>

            {/* Right Column: Visual/Card */}
            <div className="sticky top-24">
              <div className="bg-dark-800 border border-dark-700 rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full pointer-events-none -mr-32 -mt-32"></div>
                
                <div className="relative z-10 text-center py-12">
                   <div className="w-32 h-32 bg-gradient-to-br from-dark-700 to-dark-600 rounded-3xl mx-auto flex items-center justify-center shadow-inner mb-8 border border-dark-500">
                      <span className="text-4xl font-bold text-dark-400">
                        {product.name.substring(0,2)}
                      </span>
                   </div>
                   
                   <div className="text-white font-medium mb-2">
                     {product.price === 0 ? 'Free Access' : 'One-Time Payment'}
                   </div>
                   <div className="text-4xl font-bold text-white mb-2">
                     {product.price === 0 ? 'Free' : `$${product.price}`}
                   </div>
                   <div className="text-dark-400 text-sm mb-8">
                     Lifetime access • {product.category}
                   </div>

                   {product.stripePaymentLink && (
                     <a
                       href={product.stripePaymentLink}
                       className="block w-full py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all font-bold text-lg shadow-lg hover:shadow-primary-500/30 mb-8"
                     >
                       Get It Now
                     </a>
                   )}

                   <div className="border-t border-dark-700 pt-8 text-left space-y-4">
                      <div className="flex items-center text-sm text-dark-300">
                        <Shield className="w-5 h-5 text-primary-500 mr-3" />
                        Professional Setup
                      </div>
                      <div className="flex items-center text-sm text-dark-300">
                        <Zap className="w-5 h-5 text-primary-500 mr-3" />
                        Priority Support
                      </div>
                      <div className="flex items-center text-sm text-dark-300">
                         <Globe className="w-5 h-5 text-primary-500 mr-3" />
                         Full Source Code Included
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}
