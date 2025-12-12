'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Zap, DollarSign, Users, Code, Activity, Save, Trash2 } from 'lucide-react';

interface BusinessPlan {
  title: string;
  oneLiner: string;
  targetAudience: string;
  problemSolved: string;
  monetization: string;
  mvpFeatures: string[];
  techStack: string;
  viabilityScore: number;
  viabilityReason: string;
  nextSteps: 'Start Project' | 'Save for Later' | 'Discard';
}

export default function IncubatorPage() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<BusinessPlan | null>(null);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setPlan(null);

    try {
      const res = await fetch('/api/incubator/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea })
      });
      
      if (!res.ok) throw new Error('Failed to analyze');
      
      const data = await res.json();
      setPlan(data);
    } catch (error) {
      console.error(error);
      alert('Failed to generate plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/factory" className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-purple-500" />
              The Incubator
            </h1>
            <p className="text-slate-400">Feed raw ideas, get business fundamentals.</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            What's your idea?
          </label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g. A Tinder for finding co-founders..."
            className="w-full h-32 bg-slate-950 border border-slate-800 rounded-lg p-4 text-white placeholder-slate-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handleAnalyze}
              disabled={loading || !idea.trim()}
              className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-purple-500/20"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Analyze Viability
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {plan && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
              {/* Plan Header */}
              <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{plan.title}</h2>
                  <p className="text-purple-400 font-medium">{plan.oneLiner}</p>
                </div>
                <div className={`px-4 py-2 rounded-lg border ${
                  plan.viabilityScore >= 8 ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                  plan.viabilityScore >= 5 ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                  'bg-red-500/10 border-red-500/20 text-red-400'
                }`}>
                  <div className="text-xs uppercase tracking-wider font-bold mb-1">Viability Score</div>
                  <div className="text-3xl font-bold text-center">{plan.viabilityScore}/10</div>
                </div>
              </div>

              {/* Plan Body */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Target Audience
                    </h3>
                    <p className="text-slate-300">{plan.targetAudience}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4" /> The Problem
                    </h3>
                    <p className="text-slate-300">{plan.problemSolved}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" /> Monetization
                    </h3>
                    <p className="text-slate-300">{plan.monetization}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> MVP Features
                    </h3>
                    <ul className="space-y-2">
                      {plan.mvpFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-purple-500 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" /> Tech Stack
                    </h3>
                    <p className="text-slate-300 font-mono text-sm bg-slate-950 p-3 rounded-lg border border-slate-800">
                      {plan.techStack}
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendation Footer */}
              <div className="bg-slate-950 p-6 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">AI Recommendation</div>
                    <div className={`text-lg font-bold ${
                      plan.nextSteps === 'Start Project' ? 'text-green-400' :
                      plan.nextSteps === 'Save for Later' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {plan.nextSteps}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 max-w-md">{plan.viabilityReason}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium transition-colors flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Discard
                    </button>
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold transition-colors shadow-lg shadow-green-500/20 flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      {plan.nextSteps === 'Start Project' ? 'Mint Project' : 'Save to Archive'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
