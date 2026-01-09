"use client";

import { motion } from "framer-motion";
import { Check, Cloud, Shield, Coins, ArrowRight } from "lucide-react";
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
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong initializing checkout.");
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
      <div className="min-h-screen bg-[#0f172a] text-white font-sans flex flex-col">
        <CloudLedgerNavigation />
        <div className="flex-1 flex items-center justify-center px-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#1e293b] p-10 rounded-3xl border border-blue-500/30 max-w-lg w-full text-center shadow-2xl shadow-blue-500/20"
            >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-400" />
                </div>
                <h1 className="text-3xl font-bold mb-4">You're In!</h1>
                <p className="text-gray-300 mb-8 text-lg">
                    Thank you for joining Cloud Ledger. Your account is ready for auditing.
                </p>
                <a 
                    href={process.env.NEXT_PUBLIC_CLOUD_LEDGER_URL || "http://localhost:3002"}
                    className="block w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/25"
                >
                    Go to Dashboard
                </a>
            </motion.div>
        </div>
        <CloudLedgerFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <CloudLedgerNavigation />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] to-[#0f172a] z-0" />
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-4 rounded-full bg-blue-500/10 mb-6 border border-blue-500/20">
              <Cloud className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Cloud <span className="text-blue-500">Ledger</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Professional Azure Asset & Waste Audit. <br />
              <span className="text-blue-400 font-semibold">See everything. Pay for nothing you don’t use.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Full Inventory", desc: "Every resource in your subscription, unified into one clean view.", icon: Cloud },
                    { title: "Waste Detection", desc: "Identify idle VMs, unattached disks, and unused IPs instantly.", icon: Coins },
                    { title: "Read-Only Secure", desc: "Uses ephemeral tokens with strict Reader access. No agents.", icon: Shield }
                ].map((f, i) => (
                    <div key={i} className="bg-[#1e293b] p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                        <f.icon className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                        <p className="text-gray-400">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-[#0f172a] relative">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-16">Simple Pricing</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* One Time */}
                <div className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">One-Time Audit</h3>
                    <p className="text-gray-400 mb-6">Perfect for periodic cleanups.</p>
                    <div className="text-4xl font-bold mb-6">$49</div>
                    <ul className="mb-8 space-y-3 flex-1">
                        <li className="flex gap-2 items-center text-gray-300"><Check className="text-blue-500" /> Full Resource Inventory</li>
                        <li className="flex gap-2 items-center text-gray-300"><Check className="text-blue-500" /> Waste Detection Report</li>
                        <li className="flex gap-2 items-center text-gray-300"><Check className="text-blue-500" /> CSV Export</li>
                    </ul>
                    <button 
                        onClick={() => handleCheckout("one-time")}
                        disabled={isLoading}
                        className="w-full py-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-all disabled:opacity-50"
                    >
                        {isLoading ? "Loading..." : "Buy Audit"}
                    </button>
                </div>

                {/* Subscription */}
                <div className="bg-[#1e293b] rounded-3xl p-8 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/10 flex flex-col relative overflow-hidden">
                    <div className="absolute top-5 right-5 bg-blue-500 text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Continuous Monitoring</h3>
                    <p className="text-gray-400 mb-6">For ongoing cost control.</p>
                    <div className="text-4xl font-bold mb-6">$9<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                    <ul className="mb-8 space-y-3 flex-1">
                        <li className="flex gap-2 items-center text-white"><Check className="text-blue-400" /> <strong>All Audit Features</strong></li>
                        <li className="flex gap-2 items-center text-white"><Check className="text-blue-400" /> Monthly Change Tracking</li>
                        <li className="flex gap-2 items-center text-white"><Check className="text-blue-400" /> New Waste Alerts</li>
                        <li className="flex gap-2 items-center text-white"><Check className="text-blue-400" /> Priority Support</li>
                    </ul>
                    <button 
                         onClick={() => handleCheckout("monthly")}
                         disabled={isLoading}
                        className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                        {isLoading ? "Processing..." : <>Subscribe Now <ArrowRight /></>}
                    </button>
                </div>
            </div>
        </div>
      </section>

      <CloudLedgerFooter />
    </div>
  );
}

export default function CloudLedgerPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">Loading Cloud Ledger...</div>}>
            <CloudLedgerContent />
        </Suspense>
    );
}
