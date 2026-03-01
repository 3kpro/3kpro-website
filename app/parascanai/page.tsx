"use client";

import { motion } from "framer-motion";
import { Check, Scale, FileText, Brain, Shield, Gavel } from "lucide-react";
import { ParascanNavigation } from "./ParascanNavigation";

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
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <ParascanNavigation />

      {/* Beta Banner */}
      <div className="fixed top-20 w-full z-40 bg-black text-white text-center py-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em]">
          ⚖ Beta Access — Invite Only &nbsp;•&nbsp; Select Attorneys
        </p>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen pt-52 pb-32 bg-grid flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-3 py-1 border border-black mb-12 text-[10px] uppercase tracking-[0.3em] font-bold"
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
            <span className="opacity-30">SCAN.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-medium text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-16 uppercase tracking-widest leading-relaxed"
          >
            Upload any legal document. Select your analysis tier. Get an AI-powered opinion in seconds.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-bold text-sm text-black/40 max-w-xl mx-auto mb-16 uppercase tracking-widest leading-relaxed italic"
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
              className="px-12 py-6 bg-black text-white hover:bg-white hover:text-black border border-black font-bold uppercase tracking-[0.3em] text-xs transition-all"
            >
              Launch Parascan Beta
            </a>
            <div className="flex items-center justify-center gap-8 px-8 text-[10px] font-bold uppercase tracking-widest opacity-40">
              <span className="flex items-center gap-2"><Check className="w-3 h-3" /> No Account Required</span>
              <span className="flex items-center gap-2"><Check className="w-3 h-3" /> PDF Upload</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 border-t border-black bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <div className="inline-flex items-center px-3 py-1 border border-black mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Process</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">THREE<br/>STEPS.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-black border border-black overflow-hidden">
            {[
              { step: "01", title: "Upload PDF", desc: "Drop any legal document — contract, brief, statute, NDA. Up to 200MB." },
              { step: "02", title: "Select Tier", desc: "Match your analysis depth to document complexity. Four tiers from General to Counsel." },
              { step: "03", title: "Interrogate", desc: "Ask anything. Get AI-powered answers with citations from your document." },
            ].map((item) => (
              <div key={item.step} className="bg-white p-12 md:p-16 group hover:bg-black hover:text-white transition-all duration-500">
                <div className="text-5xl font-bold opacity-10 mb-8 tracking-tighter">{item.step}</div>
                <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-xs opacity-60 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-32 bg-grid border-t border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-3 py-1 border border-black mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Analysis Tiers</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">MATCH THE<br/><span className="opacity-30">WEIGHT.</span></h2>
            <p className="text-black/60 text-xs font-bold uppercase tracking-[0.3em] max-w-xl mx-auto">
              Select the tier that matches your document's complexity and the stakes involved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-black border border-black overflow-hidden">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`p-10 flex flex-col relative group transition-all duration-500 ${
                  tier.accent
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {tier.accent && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-30" />
                )}
                <div className="mb-8">
                  <div className={`text-[9px] font-bold uppercase tracking-[0.3em] mb-3 ${tier.accent ? "opacity-50" : "opacity-40"}`}>
                    {tier.label}
                  </div>
                  <div className={`inline-flex px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest mb-4 border ${
                    tier.accent ? "border-white/30 text-white" : "border-black/30 text-black group-hover:border-white/30 group-hover:text-white"
                  }`}>
                    {tier.badge}
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter mb-1">{tier.name}</h3>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-6 ${tier.accent ? "opacity-50" : "opacity-40"}`}>
                    {tier.subtitle}
                  </p>
                  <div className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 border inline-flex mb-6 ${
                    tier.accent ? "border-white/20 text-white/60" : "border-black/20 text-black/50 group-hover:border-white/20 group-hover:text-white/60"
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
                      <div className={`w-1 h-1 ${tier.accent ? "bg-white" : "bg-black group-hover:bg-white"}`} />
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
      <section className="py-32 border-t border-black bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-3 py-1 border border-black mb-12 text-[10px] uppercase tracking-[0.3em] font-bold">
            ⚖ Beta Access — Attorneys Only
          </div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-10">
            READ IT.<br/><span className="opacity-30">KNOW IT.</span>
          </h2>
          <p className="text-black/60 text-xs font-bold uppercase tracking-[0.3em] max-w-xl mx-auto mb-16 leading-loose">
            You have been granted beta access to Parascan. No account. No payment. Upload your document and interrogate it.
          </p>
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-16 py-8 bg-black text-white hover:bg-white hover:text-black border border-black font-bold uppercase tracking-[0.3em] text-sm transition-all"
          >
            Launch Parascan
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold uppercase tracking-tight">⚖ Parascan</span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">by 3kpro.services</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
            AI Legal Document Analysis — Beta
          </p>
          <div className="flex gap-8">
            <a href="/privacy" className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Privacy</a>
            <a href="/terms" className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Terms</a>
            <a href="/" className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">3kpro.services</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
