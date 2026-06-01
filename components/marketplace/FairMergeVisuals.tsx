"use client";

import React from "react";
import { AlertTriangle, GitPullRequest, Scale } from "lucide-react";

export function FairMergeVisuals() {
  const reviewSignals = [
    { label: "Taste", value: "42%", width: "42%", tone: "bg-black" },
    { label: "Logic", value: "35%", width: "35%", tone: "bg-black/70" },
    { label: "Risk", value: "23%", width: "23%", tone: "bg-black/40" },
  ];

  const loadMap = [
    { reviewer: "Lead", prs: "18", load: "91%" },
    { reviewer: "Senior", prs: "11", load: "64%" },
    { reviewer: "Builder", prs: "4", load: "21%" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="border border-black p-6 bg-white relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="absolute right-0 top-0 h-20 w-20 border-l border-b border-black/10 bg-[linear-gradient(135deg,transparent_48%,rgba(0,0,0,0.18)_49%,rgba(0,0,0,0.18)_51%,transparent_52%)]"></div>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-black/60">Review Signal Split</h3>
          <Scale className="w-4 h-4 text-black" />
        </div>

        <div className="flex items-end gap-2 mb-2">
          <span className="text-4xl font-bold tracking-tighter">42%</span>
          <span className="text-sm font-bold text-black/40 mb-1 uppercase">noise</span>
        </div>
        <p className="text-xs text-black/60 font-medium mb-6">
          Flags review comments that look like preference churn instead of release-blocking signal.
        </p>

        <div className="space-y-2">
          {reviewSignals.map((item) => (
            <div key={item.label} className="flex items-center text-[10px] font-bold uppercase tracking-widest">
              <span className="w-16">{item.label}</span>
              <div className="flex-1 h-2 bg-black/5 mx-2 relative">
                <div className={`absolute left-0 top-0 h-full ${item.tone}`} style={{ width: item.width }}></div>
              </div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-black p-6 bg-white relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-black/60">Review Load Map</h3>
          <GitPullRequest className="w-4 h-4 text-black" />
        </div>

        <div className="flex items-end gap-2 mb-2">
          <span className="text-4xl font-bold tracking-tighter">91%</span>
          <span className="text-sm font-bold text-black/40 mb-1 uppercase">hotspot</span>
        </div>
        <p className="text-xs text-black/60 font-medium mb-6">
          Shows when one senior engineer becomes the merge gate for the entire team.
        </p>

        <div className="space-y-2">
          {loadMap.map((item) => (
            <div key={item.reviewer} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border border-black/10 bg-black/[0.02] px-3 py-2">
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.reviewer}</span>
              <span className="text-[10px] font-mono opacity-50">{item.prs} PRs</span>
              <span className="text-[10px] font-bold">{item.load}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 border border-black bg-black text-white p-6 relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/3 opacity-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35))]"></div>
        <div className="relative z-10 grid md:grid-cols-[1.1fr_1fr] gap-6 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Bike-Shed Detector</span>
            </div>
            <p className="text-sm font-medium leading-relaxed text-white/75">
              FairMerge does not tell engineers to stop reviewing. It tells the team where review is turning into drag.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              ["15h", "Monthly drag"],
              ["3d", "Stale risk"],
              ["8", "Blocked PRs"],
            ].map(([value, label]) => (
              <div key={label} className="border border-white/20 p-3">
                <div className="text-xl font-bold tracking-tighter">{value}</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-white/45">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
