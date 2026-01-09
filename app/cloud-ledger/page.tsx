"use client";

import { motion } from "framer-motion";
import { Check, Cloud, Shield, Coins, ArrowRight, Zap, Database, Server, Lock } from "lucide-react";
import { useState, Suspense } from "react";
import { CloudLedgerNavigation } from "./CloudLedgerNavigation";
import { CloudLedgerFooter } from "./CloudLedgerFooter";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

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
      <div className="min-h-screen bg-dark-900 text-white font-sans flex flex-col">
        <CloudLedgerNavigation />
        <div className="flex-1 flex items-center justify-center px-4 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-dark-800/80 backdrop-blur-xl p-10 rounded-3xl border border-primary-500/30 max-w-lg w-full text-center shadow-2xl relative z-10"
            >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-green-500/50">
                    <Check className="w-10 h-10 text-green-400" />
                </div>
                <h1 className="text-3xl font-bold mb-4 font-space-grotesk text-white">Access Granted</h1>
                <p className="text-dark-300 mb-8 text-lg">
                    Your environment is being provisioned. Ready to find those savings?
                </p>
                <a 
                    href={process.env.NEXT_PUBLIC_CLOUD_LEDGER_URL || "http://localhost:3002"}
                    className="block w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold transition-all shadow-lg hover:shadow-primary-500/25"
                >
                    Launch Dashboard
                </a>
            </motion.div>
        </div>
        <CloudLedgerFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-primary-500/30">
      <CloudLedgerNavigation />

      {/* 3KPRO-Style Hero with Aurora */}
      <AuroraBackground className="min-h-[90vh] pb-20">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-5xl mx-auto text-center z-10"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-4 animate-pulse">
                <Cloud className="w-3 h-3" /> Microsoft Azure Compatible
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-space-grotesk tracking-tight leading-[1.1]">
              Stop Paying for <br/>
              <span className="text-primary-500">Zombie Resources.</span>
            </h1>
            
            <p className="font-light text-xl md:text-2xl text-dark-300 py-6 max-w-2xl mx-auto">
              The intelligent audit tool that scans your Azure estate, kills waste, and generates a savings report in seconds.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-4">
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(224,120,86,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                    Start Free Audit <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 px-6 text-sm text-dark-400">
                    <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> Read-Only</span>
                    <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> No Agents</span>
                </div>
            </div>
        </motion.div>
      </AuroraBackground>

      {/* BENTO GRID FEATURES */}
      <section className="py-24 bg-dark-900 border-t border-dark-800">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">See What Microsoft Hides</h2>
                <p className="text-dark-400 text-xl max-w-2xl mx-auto">Complex billing portals are designed to confuse you. Cloud Ledger is designed to save you money.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                {/* Large Left Card */}
                <div className="md:col-span-2 md:row-span-2 bg-dark-800 rounded-3xl p-8 border border-dark-700 relative overflow-hidden group hover:border-primary-500/50 transition-all">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Coins className="w-64 h-64 text-primary-500" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-primary-500" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">The Zombie Hunter</h3>
                            <p className="text-dark-300 text-lg leading-relaxed max-w-md">
                                Instantly detect "Zombie" resources—VMs that are running but idle, unattached managed disks costing $30/month each, and public IPs leading nowhere. 
                                <br/><br/>
                                <span className="text-white font-semibold">We typically find $500–$2,000 in waste on the first scan.</span>
                            </p>
                        </div>
                        <div className="mt-8">
                             <div className="bg-dark-900/50 rounded-xl p-4 border border-dark-700 backdrop-blur-sm">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-dark-400">Potential Savings Found</span>
                                    <span className="text-green-400 font-mono font-bold">-$1,240.50/mo</span>
                                </div>
                                <div className="w-full bg-dark-700 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full w-[75%] animate-pulse"></div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Top Right */}
                <div className="bg-dark-800 rounded-3xl p-8 border border-dark-700 hover:border-blue-500/50 transition-all group">
                    <Server className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">Inventory Matrix</h3>
                    <p className="text-dark-400 text-sm">A single pane of glass for every resource across every subscription. No more clicking through 50 portals.</p>
                </div>

                 {/* Bottom Right */}
                 <div className="bg-dark-800 rounded-3xl p-8 border border-dark-700 hover:border-purple-500/50 transition-all group">
                    <Lock className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">Zero-Trust Security</h3>
                    <p className="text-dark-400 text-sm">We use ephemeral Read-Only tokens. We can't change your settings, we can only help you fix them.</p>
                </div>
            </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-dark-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,120,86,0.05)_0,transparent_70%)]"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-space-grotesk">Fair Pricing.</h2>
            <p className="text-center text-dark-400 mb-16 text-lg">Most tools charge a % of your spend. We think that's a tax on success.</p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* One Time */}
                <div className="bg-dark-800/50 rounded-[2rem] p-8 border border-dark-700 hover:bg-dark-800 transition-colors flex flex-col h-full">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">One-Time Cleanup</h3>
                        <p className="text-dark-400">Perfect for quarterly audits.</p>
                    </div>
                    <div className="text-5xl font-bold mb-8 tracking-tight">$49<span className="text-lg text-dark-500 font-normal">/run</span></div>
                    <ul className="mb-8 space-y-4 flex-1">
                        <li className="flex gap-3 items-center text-dark-200"><Check className="w-5 h-5 text-primary-500" /> Full Resource Inventory</li>
                        <li className="flex gap-3 items-center text-dark-200"><Check className="w-5 h-5 text-primary-500" /> Zombie Resource Report</li>
                        <li className="flex gap-3 items-center text-dark-200"><Check className="w-5 h-5 text-primary-500" /> CSV/PDF Export</li>
                    </ul>
                    <button 
                        onClick={() => handleCheckout("one-time")}
                        disabled={isLoading}
                        className="w-full py-4 rounded-xl bg-dark-700 hover:bg-dark-600 text-white font-semibold transition-all disabled:opacity-50 border border-dark-600"
                    >
                        {isLoading ? "Loading..." : "Get Instant Report"}
                    </button>
                </div>

                {/* Subscription - Highlighted */}
                <div className="bg-gradient-to-b from-dark-800 to-dark-900 rounded-[2rem] p-1 border border-primary-500/50 shadow-2xl shadow-primary-900/20 relative">
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                     <div className="rounded-[1.9rem] bg-dark-900/90 h-full p-8 flex flex-col backdrop-blur-sm">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Continuous Watchdog</h3>
                            <p className="text-dark-400">Sleep better knowing waste is caught early.</p>
                        </div>
                        <div className="text-5xl font-bold mb-8 tracking-tight text-primary-500">$9<span className="text-lg text-dark-500 font-normal text-white">/mo</span></div>
                        <ul className="mb-8 space-y-4 flex-1">
                            <li className="flex gap-3 items-center text-white"><Check className="w-5 h-5 text-primary-500" /> <strong>All Audit Features</strong></li>
                            <li className="flex gap-3 items-center text-white"><Check className="w-5 h-5 text-primary-500" /> Weekly Variance Reports</li>
                            <li className="flex gap-3 items-center text-white"><Check className="w-5 h-5 text-primary-500" /> New Trash Alerts (Email)</li>
                            <li className="flex gap-3 items-center text-white"><Check className="w-5 h-5 text-primary-500" /> Priority Support</li>
                        </ul>
                        <button 
                             onClick={() => handleCheckout("monthly")}
                             disabled={isLoading}
                            className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-900/30 disabled:opacity-50"
                        >
                            {isLoading ? "Processing..." : <>Start Subscription <ArrowRight /></>}
                        </button>
                     </div>
                </div>
            </div>
            <div className="mt-12 text-center">
                <p className="text-dark-500 text-sm">Secure handling via Stripe. We never store your payment data.</p>
            </div>
        </div>
      </section>

      <CloudLedgerFooter />
    </div>
  );
}

export default function CloudLedgerPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-dark-900 text-white flex items-center justify-center">Loading Cloud Ledger...</div>}>
            <CloudLedgerContent />
        </Suspense>
    );
}
