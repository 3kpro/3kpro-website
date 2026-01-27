"use client";

import { motion } from "framer-motion";
import { Check, Cloud, Shield, Coins, ArrowRight, Zap, Database, Server, Lock, Download, Activity, Target } from "lucide-react";
import { useState, Suspense } from "react";
import { CloudLedgerNavigation } from "./CloudLedgerNavigation";
import { CloudLedgerFooter } from "./CloudLedgerFooter";
import { useSearchParams } from "next/navigation";

function CloudLedgerContent() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success") === "true";

  const handleCheckout = async (planType: "one-time" | "monthly") => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/cloud-ledger/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planType }),
      });
      const data = await response.json();
      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        const errorMessage = data.error || "Something went wrong initializing checkout.";
        console.error("Checkout failed:", errorMessage);
        alert(`Checkout Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white bg-grid text-black font-sans flex flex-col selection:bg-black selection:text-white">
        <CloudLedgerNavigation />
        <div className="flex-1 flex items-center justify-center px-4 relative overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 md:p-16 border-2 border-black max-w-lg w-full text-center shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] relative z-10"
            >
                <div className="w-20 h-20 border border-black flex items-center justify-center mx-auto mb-10">
                    <Check className="w-10 h-10 text-black" />
                </div>
                <h1 className="text-4xl font-bold mb-6 tracking-tighter uppercase">Access Authorized.</h1>
                <p className="text-black/60 mb-12 text-sm font-medium uppercase tracking-widest leading-relaxed">
                    Environmental provisioning complete. Systems online. Data channels established.
                </p>
                <a 
                    href={process.env.NEXT_PUBLIC_CLOUD_LEDGER_URL || "http://localhost:3002"}
                    className="block w-full py-6 bg-black text-white hover:bg-white hover:text-black border border-black font-bold uppercase tracking-[0.3em] text-xs transition-all"
                >
                    Launch Command Center
                </a>
            </motion.div>
        </div>
        <CloudLedgerFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <CloudLedgerNavigation />

      {/* Structural Hero Section */}
      <section className="relative min-h-screen pt-40 pb-32 bg-grid flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-3 py-1 border border-black mb-12 text-[10px] uppercase tracking-[0.3em] font-bold"
          >
              <Cloud className="w-3 h-3" /> Azure Logic Verification // Read-Only
          </motion.div>
          
          <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] uppercase mb-12"
          >
            ERADICATE <br/>
            <span className="opacity-40">ZOMBIE WASTE.</span>
          </motion.h1>
          
          <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-medium text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-16 uppercase tracking-widest leading-relaxed"
          >
            The structural intelligence layer that scans your Azure estate, identifies idle assets, and recovers leaked capital in seconds.
          </motion.p>
          
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col md:flex-row gap-6 w-full md:w-auto justify-center"
          >
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 bg-black text-white hover:bg-white hover:text-black border border-black font-bold uppercase tracking-[0.3em] text-xs transition-all"
              >
                  Initialize Audit
              </button>
              <div className="flex items-center justify-center gap-8 px-8 text-[10px] font-bold uppercase tracking-widest opacity-40">
                  <span className="flex items-center gap-2"><Check className="w-3 h-3" /> Agent-Free</span>
                  <span className="flex items-center gap-2"><Check className="w-3 h-3" /> Non-Destructive</span>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Analytical Bento Matrix */}
      <section className="py-32 border-t border-black bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center px-3 py-1 border border-black mb-8">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Detection Matrix</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">SUBSTRATE <br/> VISIBILITY.</h2>
                    <p className="text-lg text-black/60 font-medium leading-relaxed uppercase tracking-widest">Complex billing architectures are designed for opacity. Cloud Ledger is designed for precision.</p>
                </div>
                <div className="hidden md:block w-32 h-px bg-black"></div>
            </div>

            <div className="flex flex-wrap justify-center overflow-hidden border-t border-l border-black">
                {/* Large Analytical Block */}
                <div className="w-full lg:w-2/3 p-12 md:p-20 bg-white border-r border-b border-black group hover:bg-black hover:text-white transition-all duration-700">
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className="w-16 h-16 border border-black group-hover:border-white/20 flex items-center justify-center mb-10 transition-colors">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold mb-8 uppercase tracking-tight">The Zombie Protocol</h3>
                            <p className="text-sm opacity-70 leading-relaxed max-w-lg uppercase tracking-widest font-bold mb-12">
                                Instantly isolate idle VMs, unattached managed disks, and orphan public IPs. We typically identify 15-30% in immediate monthly savings on the first recursive scan.
                            </p>
                        </div>
                        <div className="mt-8">
                             <div className="border border-black group-hover:border-white/20 p-8 bg-black/[0.02] group-hover:bg-white/5 transition-all">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">System Waste Recovery</span>
                                    <span className="text-xl font-bold tracking-tighter">-$1,240.50/MO</span>
                                </div>
                                <div className="w-full bg-black/5 group-hover:bg-white/10 h-1">
                                    <div className="bg-black group-hover:bg-white h-full w-[75%]"></div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Vertical Matrix Column */}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <div className="p-12 bg-white border-r border-b border-black flex-1 group hover:bg-black hover:text-white transition-all duration-500">
                        <Activity className="w-8 h-8 mb-8" />
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Inventory Matrix</h3>
                        <p className="text-xs opacity-60 font-bold uppercase tracking-widest leading-relaxed">A unified pane for every resource across the entire structural estate. No more portal fragmenting.</p>
                    </div>

                    <div className="p-12 bg-white border-r border-b border-black flex-1 group hover:bg-black hover:text-white transition-all duration-500">
                        <Lock className="w-8 h-8 mb-8" />
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">READ-ONLY INTEGRITY</h3>
                        <p className="text-xs opacity-60 font-bold uppercase tracking-widest leading-relaxed">Ephemeral tokens. Non-destructive scanning. We never touch your production state.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* PRICING MATRIX */}
      <section id="pricing" className="py-32 bg-grid border-t border-black relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter uppercase italic opacity-10">ALLOCATION</h2>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter uppercase -mt-20">FAIR PRICING.</h2>
            <p className="text-black/60 mb-20 text-xs font-bold uppercase tracking-[0.3em] max-w-xl mx-auto leading-loose">
              Capital efficiency shouldn't be taxed. We reject percentage-of-spend models in favor of structural flat-rate indices.
            </p>
            
            <div className="grid md:grid-cols-2 gap-px bg-black border border-black overflow-hidden max-w-5xl mx-auto shadow-[30px_30px_0px_0px_rgba(0,0,0,0.05)]">
                {/* Single Audit */}
                <div className="bg-white p-12 md:p-16 flex flex-col text-left group hover:bg-zinc-50 transition-colors">
                    <div className="mb-12">
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4">Tactical Intervention</div>
                        <h3 className="text-3xl font-bold uppercase tracking-tighter mb-8">One-Time Cleanup</h3>
                        <div className="text-6xl font-bold mb-4 tracking-tighter">$49</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">PER DIAGNOSTIC RUN</div>
                    </div>
                    <div className="space-y-6 mb-16 flex-1">
                        {[
                          'Full Structural Inventory',
                          'Zombie Resource Diagnostic',
                          'Capital Recovery Export (PDF)',
                          'Priority Execution Support'
                        ].map((feat, i) => (
                          <div key={i} className="flex gap-4 items-center text-[10px] font-bold uppercase tracking-widest opacity-60">
                            <div className="w-1 h-1 bg-black"></div>
                            {feat}
                          </div>
                        ))}
                    </div>
                    <button 
                        onClick={() => handleCheckout("one-time")}
                        disabled={isLoading}
                        className="w-full py-6 border border-black bg-white text-black hover:bg-black hover:text-white font-bold uppercase tracking-[0.3em] text-[10px] transition-all disabled:opacity-50"
                    >
                        {isLoading ? "PROCESSING..." : "GET INSTANT DIAGNOSTIC"}
                    </button>
                </div>

                {/* Subscription - Most Popular */}
                <div className="bg-white p-12 md:p-16 flex flex-col text-left relative group bg-zinc-50/50">
                     <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
                     <div className="mb-12">
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4">Continuous Overwatch</div>
                        <h3 className="text-3xl font-bold uppercase tracking-tighter mb-8 text-black">Strategic Watchdog</h3>
                        <div className="text-6xl font-bold mb-4 tracking-tighter">$9</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">PER MONTHLY CYCLE</div>
                    </div>
                    <div className="space-y-6 mb-16 flex-1">
                        {[
                          'Recursive Structural Scanning',
                          'Weekly Variance Reports',
                          'Waste Alerts (Email Channel)',
                          'Premium Asset Management',
                          'Unlimited Audit Cycles'
                        ].map((feat, i) => (
                          <div key={i} className="flex gap-4 items-center text-[10px] font-bold uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 bg-black rotate-45"></div>
                            {feat}
                          </div>
                        ))}
                    </div>
                    <button 
                         onClick={() => handleCheckout("monthly")}
                         disabled={isLoading}
                        className="w-full py-6 bg-black text-white hover:bg-black/90 font-bold uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                    >
                        {isLoading ? "LOGGING..." : "INITIALIZE SUBSCRIPTION"}
                    </button>
                </div>
            </div>
            <div className="mt-16">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Secure Transaction Layer via Stripe. Zero storage policy for payment credentials.</p>
            </div>
        </div>
      </section>

      <CloudLedgerFooter />
    </div>
  );
}

export default function CloudLedgerPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white text-black flex items-center justify-center font-bold uppercase tracking-[0.4em]">Initializing Structural Data...</div>}>
            <CloudLedgerContent />
        </Suspense>
    );
}
