import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import CatalogStyles from '@/components/marketplace/CatalogStyles'
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
    alternates: { canonical: `https://3kpro.services/marketplace/${product.slug}` },
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
  const isPreRelease = product.status === 'In Development' || product.status === 'Coming Soon'
  const isFreeBeta = product.status === 'Beta' && product.price === 0

  return (
    <div id="top" className="op catalog-pages">
      <CatalogStyles />
      <SiteNav active="marketplace" />

      <main className="catalog-detail">
        {/* Product Hero - Structural Layout */}
        <section className="relative pt-32 pb-20 border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Info */}
              <div className="space-y-10">
                <div>
                  <div className="inline-flex items-center px-3 py-1 border border-[var(--line)] mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{product.category}</span>
                  </div>
                  
                  <p className="catalog-status text-xs font-bold uppercase tracking-widest mb-4">{product.status}</p>
                  <h1 className="text-5xl md:text-7xl font-bold text-[var(--ink)] mb-6 leading-[0.95] tracking-tight uppercase">
                    {product.name}
                  </h1>
                  <p className="text-xl font-bold opacity-40 uppercase tracking-tight mb-8">
                    {product.tagline}
                  </p>
                  
                  {isFairMerge ? (
                    <div className="space-y-5 mb-12 max-w-2xl">
                      <p className="text-xl text-[var(--dim)] leading-relaxed font-medium">
                        FairMerge is built for the moment a pull request stops being engineering and starts being committee theater.
                      </p>
                      <p className="text-base text-[var(--dim)] leading-relaxed font-medium">
                        It reads review patterns, separates useful critique from style churn, exposes overloaded reviewers, and gives the team a clean operating picture before delivery velocity quietly bleeds out.
                      </p>
                    </div>
                  ) : (
                    <p className="text-lg text-[var(--dim)] mb-12 leading-relaxed font-medium max-w-xl">
                      {product.description}
                    </p>
                  )}
                </div>

                {isPreRelease && (
                  <p className="border border-[var(--line)] p-5 text-sm leading-relaxed">
                    This product is {product.status.toLowerCase()}. The features below are planned and are not available for use or purchase.
                  </p>
                )}
                {isFreeBeta && (
                  <p className="border border-[var(--line)] p-5 text-sm leading-relaxed">
                    Free during the open beta. Pricing will be introduced when beta ends. Use sample or redacted documents during testing.
                  </p>
                )}

                {isFairMerge && <FairMergeVisuals />}

                <div className="space-y-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">{isPreRelease ? 'Planned Capabilities' : 'System Capabilities'}</h3>
                  <div className="grid gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center p-4 border border-[var(--line)] bg-[var(--panel2)] hover:bg-[var(--panel2)] transition-colors">
                        <div className="w-1.5 h-1.5 bg-[var(--panel2)] mr-4 rotate-45"></div>
                        <span className="text-sm font-medium text-[var(--dim)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="catalog-actions flex flex-col sm:flex-row gap-6 pt-10">
                   {!isPreRelease && !isFreeBeta && (
                      <PurchaseAction product={product} />
                   )}
                   
                   {!isPreRelease && product.demoUrl && (
                     <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn ghost"
                      >
                        <Globe className="w-4 h-4 mr-3" />
                        {isFreeBeta ? 'Explore Free Beta' : 'Execute Demo'}
                      </a>
                   )}
                </div>
              </div>

              {/* Right Column: Visual Unit */}
              <div className="lg:sticky lg:top-32 lg:pb-10">
                <div className="catalog-side border border-[var(--line)] bg-[var(--panel)] p-12 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 text-[60px] font-bold opacity-[0.03] leading-none select-none">
                      {product.name.substring(0, 2).toUpperCase()}
                   </div>

                   {isFairMerge ? (
                     <FairMergeCommandCard price={product.price} />
                   ) : (
                     <div className="relative z-10 text-center py-12">
                        <div className="w-32 h-32 border border-[var(--line)] mx-auto flex items-center justify-center mb-10">
                           <span className="text-4xl font-bold tracking-tighter">
                             {product.name.substring(0,2).toUpperCase()}
                           </span>
                        </div>

                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4">
                          {isPreRelease ? 'Product Status' : isFreeBeta ? 'Open Beta' : 'Allocation Matrix'}
                        </div>
                        <div className={`${isPreRelease ? "text-2xl sm:text-3xl" : "text-5xl"} font-bold text-[var(--ink)] mb-2 tracking-tighter catalog-price`}>
                          {isPreRelease ? product.status.toUpperCase() : product.price === 0 ? 'FREE' : `$${product.price}`}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-12">
                          {isPreRelease ? 'Not available for use or purchase' : isFreeBeta ? 'Free during beta. Pricing coming later.' : product.price === 0 ? 'Public Utility Access' : 'Single Structural Asset'}
                        </div>

                        {!isPreRelease && <div className="border-t border-[var(--line)] pt-10 text-left space-y-5">
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
                        </div>}
                     </div>
                   )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {isFairMerge && <FairMergeDeepDive />}
      </main>

      <SiteFooter />
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
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-6 mb-8">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-40 mb-2">Operator Console</div>
          <div className="text-2xl font-bold uppercase tracking-tighter">Review Velocity</div>
        </div>
        <div className="w-14 h-14 border border-[var(--line)] flex items-center justify-center font-bold text-xl">FM</div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-8">
        {pipeline.map((step) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="border border-[var(--line)] bg-[var(--panel2)] p-3 min-h-24 flex flex-col justify-between">
              <Icon className="w-5 h-5" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--dim)]">{step.label}</span>
            </div>
          )
        })}
      </div>

      <div className="border border-[var(--line)] bg-[var(--panel2)] text-[var(--ink)] p-6 mb-8">
        <div className="flex items-end gap-2 mb-2">
          <span className="text-5xl font-bold tracking-tighter">20%</span>
          <span className="text-sm font-bold uppercase text-[var(--dim)] mb-2">target lift</span>
        </div>
        <p className="text-sm font-medium leading-relaxed text-[var(--dim)]">
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
          <div key={label} className="border border-[var(--line)] p-3">
            <div className="text-[9px] font-bold uppercase tracking-widest text-[var(--dim)] mb-1">{label}</div>
            <div className="text-sm font-bold uppercase">{value}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-[var(--line)] pt-8">
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
    <section className="border-b border-[var(--line)] bg-[var(--panel)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 mb-20">
          <div>
            <div className="w-12 h-1 bg-[var(--panel2)] mb-8"></div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--dim)] mb-6">3KPRO Context</div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8">
              Merge review needs a referee, not another meeting.
            </h2>
            <p className="text-lg text-[var(--dim)] font-medium leading-relaxed">
              FairMerge gives engineering teams a factual way to talk about review friction. No personality trial. No process theater. Just the patterns hiding in the pull request trail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {contextBlocks.map((block) => (
              <div key={block.title} className="border border-[var(--line)] p-6 bg-[var(--panel)] min-h-64 flex flex-col justify-between">
                <div className="w-8 h-8 border border-[var(--line)] flex items-center justify-center mb-8">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-4">{block.title}</h3>
                  <p className="text-sm text-[var(--dim)] font-medium leading-relaxed">{block.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 border border-[var(--line)] mb-20">
          {watchList.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.title} className={`p-8 bg-[var(--panel)] ${index !== watchList.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-[var(--line)]' : ''}`}>
                <Icon className="w-6 h-6 mb-10" />
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--dim)] mb-4">
                  Watches 0{index + 1}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-sm text-[var(--dim)] font-medium leading-relaxed">{item.copy}</p>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-start">
          <div className="border border-[var(--line)] bg-[var(--panel2)] text-[var(--ink)] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--dim)]">Signal Pipeline</span>
            </div>
            <div className="space-y-4">
              {lanes.map(([number, title, copy]) => (
                <div key={number} className="grid md:grid-cols-[64px_1fr] gap-5 border border-[var(--line)] p-5">
                  <div className="text-3xl font-bold tracking-tighter text-[var(--dim)]">{number}</div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{title}</h3>
                    <p className="text-sm text-[var(--dim)] font-medium leading-relaxed">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-[var(--line)] p-8 bg-[var(--panel)]">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--dim)] mb-6">Where It Pays Off</div>
              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-5">Fewer blocked PRs. Cleaner review culture. Better release tempo.</h3>
              <p className="text-base text-[var(--dim)] font-medium leading-relaxed">
                FairMerge is the product you install when the team is good, the code matters, and the review process is starting to act like invisible tax.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                ['PRs', 'Unstuck'],
                ['Comments', 'Classified'],
                ['Reviews', 'Balanced'],
              ].map(([metric, label]) => (
                <div key={metric} className="border border-[var(--line)] p-4 text-center bg-[var(--panel)]">
                  <div className="text-lg font-bold uppercase tracking-tight">{metric}</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[var(--dim)]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
