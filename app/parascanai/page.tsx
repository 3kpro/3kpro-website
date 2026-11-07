"use client";

import { motion } from "framer-motion";
import { Check, Scale, FileText, Brain, Shield, Gavel } from "lucide-react";
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import CatalogStyles from '@/components/marketplace/CatalogStyles';

const tiers = [
  {
    id: "scan",
    label: "Option A",
    name: "SCAN",
    subtitle: "General Analysis",
    model: "Gemini 2.0 Flash",
    description: "Standard documents with clear language. Fast, accurate, affordable.",
    examples: ["Employment letters", "Simple NDAs", "Standard lease agreements", "Basic vendor contracts"],
    badge: "GENERAL",
    accent: false,
  },
  {
    id: "pro",
    label: "Option B",
    name: "PRO",
    subtitle: "Reasoning Power",
    model: "GPT-4o Mini",
    description: "Multi-party agreements and documents with conditional or nested clauses.",
    examples: ["Partnership agreements", "Licensing deals", "Multi-party contracts", "Settlement terms"],
    badge: "ENHANCED",
    accent: false,
  },
  {
    id: "premium",
    label: "Option C",
    name: "PREMIUM",
    subtitle: "Complex Documents",
    model: "Claude Sonnet",
    description: "Dense regulatory, multi-jurisdiction, or technically complex filings.",
    examples: ["Securities filings", "Healthcare compliance", "IP licensing", "Cross-border agreements"],
    badge: "ADVANCED",
    accent: true,
  },
  {
    id: "counsel",
    label: "Option D",
    name: "COUNSEL",
    subtitle: "High-Stakes Analysis",
    model: "Claude Opus",
    description: "Critical litigation, precedent analysis, or documents where accuracy is paramount.",
    examples: ["Court briefs", "Appellate arguments", "M&A due diligence", "High-profile case review"],
    badge: "MAXIMUM",
    accent: false,
  },
];

export default function ParascanPage() {
  const appUrl = process.env.NEXT_PUBLIC_PARASCAN_URL || "#";

  return (
    <div id="top" className="op catalog-pages">
      <CatalogStyles />
      <SiteNav />
      <main className="catalog-detail">

      {/* Beta Banner */}
      <div className="catalog-beta-banner text-center px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em]">
          ⚖ Open Beta — Free During Beta Period &nbsp;•&nbsp; Limited Time &nbsp;•&nbsp;
          <a href="mailto:james@3kpro.services" className="underline underline-offset-2 hover:opacity-70 transition-opacity ml-1">
            Share Feedback
          </a>
        </p>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen pt-52 pb-32 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-3 py-1 border border-[var(--line)] mb-12 text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            <Scale className="w-3 h-3" /> AI Legal Document Analysis // Beta
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.9] uppercase mb-12"
          >
            PARA<br />
            <span className="opacity-60">SCAN.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-medium text-lg md:text-xl text-[var(--dim)] max-w-2xl mx-auto mb-16 uppercase tracking-widest leading-relaxed"
          >
            Upload any legal document. Select your analysis tier. Get an AI-powered opinion in seconds.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-bold text-sm text-[var(--dim)] max-w-xl mx-auto mb-16 uppercase tracking-widest leading-relaxed italic"
          >
            "What your attorney charges $400/hr to read — analyzed in 60 seconds."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Launch Parascan Beta
            </a>
            <div className="flex items-center justify-center gap-8 px-8 text-[10px] font-bold uppercase tracking-widest opacity-40">
              <span className="flex items-center gap-2"><Check className="w-3 h-3" /> No Account Required</span>
              <span className="flex items-center gap-2"><Check className="w-3 h-3" /> PDF Upload</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--dim)] max-w-lg mx-auto leading-loose mt-4"
          >
            Beta notice &mdash; This environment is not end-to-end encrypted. We recommend redacting sensitive client information, using sample documents, or substituting mock data during the beta period.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 border-t border-[var(--line)] bg-[var(--panel)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <div className="inline-flex items-center px-3 py-1 border border-[var(--line)] mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Process</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">THREE<br/>STEPS.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--panel2)] border border-[var(--line)] overflow-hidden">
            {[
              { step: "01", title: "Upload PDF", desc: "Drop any legal document — contract, brief, statute, NDA. Up to 200MB." },
              { step: "02", title: "Select Tier", desc: "Match your analysis depth to document complexity. Four tiers from General to Counsel." },
              { step: "03", title: "Interrogate", desc: "Ask anything. Get AI-powered answers with citations from your document." },
            ].map((item) => (
              <div key={item.step} className="bg-[var(--panel)] p-12 md:p-16 group hover:bg-[var(--panel2)] hover:text-[var(--ink)] transition-all duration-500">
                <div className="text-5xl font-bold opacity-10 mb-8 tracking-tighter">{item.step}</div>
                <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-xs opacity-60 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-32 border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-3 py-1 border border-[var(--line)] mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Analysis Tiers</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">MATCH THE<br/><span className="opacity-60">WEIGHT.</span></h2>
            <p className="text-[var(--dim)] text-xs font-bold uppercase tracking-[0.3em] max-w-xl mx-auto">
              Select the tier that matches your document's complexity and the stakes involved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-[var(--panel2)] border border-[var(--line)] overflow-hidden">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`p-10 flex flex-col relative group transition-all duration-500 ${
                  tier.accent
                    ? "bg-[var(--panel2)] text-[var(--ink)]"
                    : "bg-[var(--panel)] text-[var(--ink)] hover:bg-[var(--panel2)] hover:text-[var(--ink)]"
                }`}
              >
                {tier.accent && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-[var(--panel)] opacity-60" />
                )}
                <div className="mb-8">
                  <div className={`text-[9px] font-bold uppercase tracking-[0.3em] mb-3 ${tier.accent ? "opacity-50" : "opacity-40"}`}>
                    {tier.label}
                  </div>
                  <div className={`inline-flex px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest mb-4 border ${
                    tier.accent ? "border-[var(--line)] text-[var(--ink)]" : "border-[var(--line)] text-[var(--ink)] group-hover:border-[var(--line)] group-hover:text-[var(--ink)]"
                  }`}>
                    {tier.badge}
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter mb-1">{tier.name}</h3>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-6 ${tier.accent ? "opacity-50" : "opacity-40"}`}>
                    {tier.subtitle}
                  </p>
                  <div className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 border inline-flex mb-6 ${
                    tier.accent ? "border-[var(--line)] text-[var(--dim)]" : "border-[var(--line)] text-[var(--dim)] group-hover:border-[var(--line)] group-hover:text-[var(--dim)]"
                  }`}>
                    {tier.model}
                  </div>
                  <p className={`text-xs leading-relaxed font-medium mb-8 ${tier.accent ? "opacity-70" : "opacity-60"}`}>
                    {tier.description}
                  </p>
                </div>
                <div className="mt-auto space-y-3">
                  {tier.examples.map((ex, i) => (
                    <div key={i} className={`flex gap-3 items-center text-[10px] font-bold uppercase tracking-widest ${tier.accent ? "opacity-60" : "opacity-50"}`}>
                      <div className={`w-1 h-1 ${tier.accent ? "bg-[var(--panel)]" : "bg-[var(--panel2)] group-hover:bg-[var(--panel)]"}`} />
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="py-32 border-t border-[var(--line)] bg-[var(--panel)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-3 py-1 border border-[var(--line)] mb-12 text-[10px] uppercase tracking-[0.3em] font-bold">
            ⚖ Open Beta — Free For a Limited Time
          </div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-10">
            READ IT.<br/><span className="opacity-60">KNOW IT.</span>
          </h2>
          <p className="text-[var(--dim)] text-xs font-bold uppercase tracking-[0.3em] max-w-xl mx-auto mb-6 leading-loose">
            Parascan is in open beta and free to use during this period. No account. No payment. Upload your document and interrogate it.
          </p>
          <p className="text-[var(--dim)] text-[10px] font-bold uppercase tracking-[0.25em] max-w-xl mx-auto mb-16 leading-loose">
            Pricing will be introduced when beta ends. Help shape the product —{" "}
            <a href="mailto:james@3kpro.services" className="underline underline-offset-2 hover:text-[var(--ink)] transition-colors">send us your feedback</a>.
          </p>
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Launch Parascan — It&apos;s Free
          </a>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
