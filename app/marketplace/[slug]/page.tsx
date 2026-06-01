import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marketplaceItems } from '@/lib/data/marketplace'
import {
  ArrowLeft,
  BarChart3,
  Check,
  Clock3,
  GitMerge,
  GitPullRequest,
  Globe,
  MessageSquare,
  SearchCheck,
  Shield,
  Users,
  Zap,
} from 'lucide-react'
import { PurchaseAction } from '@/components/marketplace/PurchaseAction'
import { FairMergeVisuals } from '@/components/marketplace/FairMergeVisuals'

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

  const isFairMerge = product.slug === 'fairmerge'

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
                  
                  {isFairMerge ? (
                    <div className="space-y-5 mb-12 max-w-2xl">
                      <p className="text-xl text-black/75 leading-relaxed font-medium">
                        FairMerge is built for the moment a pull request stops being engineering and starts being committee theater.
                      </p>
                      <p className="text-base text-black/60 leading-relaxed font-medium">
                        It reads review patterns, separates useful critique from style churn, exposes overloaded reviewers, and gives the team a clean operating picture before delivery velocity quietly bleeds out.
                      </p>
                    </div>
                  ) : (
                    <p className="text-lg text-black/70 mb-12 leading-relaxed font-medium max-w-xl">
                      {product.description}
                    </p>
                  )}
                </div>

                {isFairMerge && <FairMergeVisuals />}

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
                   <div className="absolute top-0 right-0 p-8 text-[60px] font-bold opacity-[0.03] leading-none select-none">
                      {product.id === 'xelora' ? '00' : '01'}
                   </div>

                   {isFairMerge ? (
                     <FairMergeCommandCard price={product.price} />
                   ) : (
                     <div className="relative z-10 text-center py-12">
                        <div className="w-32 h-32 border border-black mx-auto flex items-center justify-center mb-10">
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
                   )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {isFairMerge && <FairMergeDeepDive />}
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

function FairMergeCommandCard({ price }: { price: number }) {
  const pipeline = [
    { label: 'PR intake', icon: GitPullRequest },
    { label: 'Comment scan', icon: MessageSquare },
    { label: 'Merge signal', icon: GitMerge },
  ]

  return (
    <div className="relative z-10 py-4">
      <div className="flex items-center justify-between border-b border-black pb-6 mb-8">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-40 mb-2">Operator Console</div>
          <div className="text-2xl font-bold uppercase tracking-tighter">Review Velocity</div>
        </div>
        <div className="w-14 h-14 border border-black flex items-center justify-center font-bold text-xl">FM</div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-8">
        {pipeline.map((step) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="border border-black/10 bg-black/[0.02] p-3 min-h-24 flex flex-col justify-between">
              <Icon className="w-5 h-5" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-black/50">{step.label}</span>
            </div>
          )
        })}
      </div>

      <div className="border border-black bg-black text-white p-6 mb-8">
        <div className="flex items-end gap-2 mb-2">
          <span className="text-5xl font-bold tracking-tighter">20%</span>
          <span className="text-sm font-bold uppercase text-white/45 mb-2">target lift</span>
        </div>
        <p className="text-sm font-medium leading-relaxed text-white/70">
          A cleaner merge lane for teams that ship software, not meeting notes about software.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {[
          ['Noise', 'Detected'],
          ['Load', 'Balanced'],
          ['Stale', 'Escalated'],
          ['Bias', 'Surfaced'],
        ].map(([label, value]) => (
          <div key={label} className="border border-black/10 p-3">
            <div className="text-[9px] font-bold uppercase tracking-widest text-black/35 mb-1">{label}</div>
            <div className="text-sm font-bold uppercase">{value}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-black/10 pt-8">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-2">Team plan</div>
          <div className="text-4xl font-bold tracking-tighter">${price}</div>
        </div>
        <div className="text-right text-[10px] font-bold uppercase tracking-widest opacity-40">
          Beta access<br />3KPRO supported
        </div>
      </div>
    </div>
  )
}

function FairMergeDeepDive() {
  const contextBlocks = [
    {
      title: 'Built From Operator Scar Tissue',
      body: 'FairMerge comes from the part of software delivery nobody puts in the pitch deck: good engineers losing hours to vague review standards, uneven reviewer load, and merge queues that quietly stall.',
    },
    {
      title: 'Not A Manager Dashboard',
      body: 'The point is not surveillance. The point is a shared mirror for the team: what is blocking release, what is useful critique, and what is just taste wearing a hard hat.',
    },
    {
      title: 'For Small Teams That Move',
      body: 'Made for founders, agencies, product crews, and internal build teams that need fast review cycles without letting quality turn into folklore.',
    },
  ]

  const watchList = [
    { icon: MessageSquare, title: 'Comment Quality', copy: 'Classifies review comments by risk, logic, style, repetition, and release relevance.' },
    { icon: Users, title: 'Reviewer Load', copy: 'Shows who is carrying the merge gate and where work needs to be spread before burnout appears.' },
    { icon: Clock3, title: 'Stale Pull Requests', copy: 'Highlights aging PRs before they become context loss, rebase churn, and half-finished delivery.' },
    { icon: SearchCheck, title: 'Bias Patterns', copy: 'Surfaces inconsistent review behavior across authors, repos, components, or seniority levels.' },
  ]

  const lanes = [
    ['01', 'Connect GitHub', 'Pull request and review history becomes the raw signal.'],
    ['02', 'Separate Signal From Noise', 'FairMerge labels comments, cycle time, reviewer pressure, and stalled handoffs.'],
    ['03', 'Ship With Fewer Arguments', 'The team gets a weekly operating readout that makes process debt visible.'],
  ]

  return (
    <section className="border-b border-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 mb-20">
          <div>
            <div className="w-12 h-1 bg-black mb-8"></div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-6">3KPRO Context</div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8">
              Merge review needs a referee, not another meeting.
            </h2>
            <p className="text-lg text-black/60 font-medium leading-relaxed">
              FairMerge gives engineering teams a factual way to talk about review friction. No personality trial. No process theater. Just the patterns hiding in the pull request trail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {contextBlocks.map((block) => (
              <div key={block.title} className="border border-black p-6 bg-white min-h-64 flex flex-col justify-between">
                <div className="w-8 h-8 border border-black flex items-center justify-center mb-8">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-4">{block.title}</h3>
                  <p className="text-sm text-black/60 font-medium leading-relaxed">{block.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 border border-black mb-20">
          {watchList.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.title} className={`p-8 bg-white ${index !== watchList.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-black' : ''}`}>
                <Icon className="w-6 h-6 mb-10" />
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35 mb-4">
                  Watches 0{index + 1}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-sm text-black/60 font-medium leading-relaxed">{item.copy}</p>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-start">
          <div className="border border-black bg-black text-white p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">Signal Pipeline</span>
            </div>
            <div className="space-y-4">
              {lanes.map(([number, title, copy]) => (
                <div key={number} className="grid md:grid-cols-[64px_1fr] gap-5 border border-white/15 p-5">
                  <div className="text-3xl font-bold tracking-tighter text-white/35">{number}</div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{title}</h3>
                    <p className="text-sm text-white/60 font-medium leading-relaxed">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-black p-8 bg-white">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 mb-6">Where It Pays Off</div>
              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-5">Fewer blocked PRs. Cleaner review culture. Better release tempo.</h3>
              <p className="text-base text-black/60 font-medium leading-relaxed">
                FairMerge is the product you install when the team is good, the code matters, and the review process is starting to act like invisible tax.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                ['PRs', 'Unstuck'],
                ['Comments', 'Classified'],
                ['Reviews', 'Balanced'],
              ].map(([metric, label]) => (
                <div key={metric} className="border border-black p-4 text-center bg-white">
                  <div className="text-lg font-bold uppercase tracking-tight">{metric}</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-black/40">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
