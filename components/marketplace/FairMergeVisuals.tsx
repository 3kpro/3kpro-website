"use client";

import React from "react";
import { TrendingDown, Clock, AlertTriangle } from "lucide-react";

export function FairMergeVisuals() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {/* Visual 1: Nitpick Ratio */}
      <div className="border border-black p-6 bg-white relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-black/60">Nitpick Analysis</h3>
          <TrendingDown className="w-4 h-4 text-black" />
        </div>
        
        <div className="flex items-end gap-2 mb-2">
          <span className="text-4xl font-bold">42%</span>
          <span className="text-sm font-bold text-red-500 mb-1">Impact</span>
        </div>
        <p className="text-xs text-black/60 font-medium mb-6">of review comments are trivial styling preferences.</p>

        {/* Bar Chart Visualization */}
        <div className="space-y-2">
           <div className="flex items-center text-[10px] font-bold uppercase tracking-widest">
              <span className="w-16">Style</span>
              <div className="flex-1 h-2 bg-black/5 mx-2 relative">
                 <div className="absolute left-0 top-0 h-full bg-black w-[42%]"></div>
              </div>
              <span>42%</span>
           </div>
           <div className="flex items-center text-[10px] font-bold uppercase tracking-widest">
              <span className="w-16">Logic</span>
              <div className="flex-1 h-2 bg-black/5 mx-2 relative">
                 <div className="absolute left-0 top-0 h-full bg-black w-[35%]"></div>
              </div>
              <span>35%</span>
           </div>
           <div className="flex items-center text-[10px] font-bold uppercase tracking-widest">
              <span className="w-16">Arch</span>
              <div className="flex-1 h-2 bg-black/5 mx-2 relative">
                 <div className="absolute left-0 top-0 h-full bg-black w-[23%]"></div>
              </div>
              <span>23%</span>
           </div>
        </div>
      </div>

      {/* Visual 2: Velocity Killer */}
      <div className="border border-black p-6 bg-white relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-black/60">Velocity Cost</h3>
            <AlertTriangle className="w-4 h-4 text-black" />
        </div>

        <div className="flex items-end gap-2 mb-2">
           <span className="text-4xl font-bold">15h</span>
           <span className="text-sm font-bold text-black/40 mb-1">/ Dev / Mo</span>
        </div>
        <p className="text-xs text-black/60 font-medium mb-6">Projected time lost to bike-shedding.</p>

        <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 border border-black/10 bg-black/5">
                <div className="text-lg font-bold">5</div>
                <div className="text-[8px] font-bold uppercase tracking-widest opacity-60">Days</div>
            </div>
             <div className="p-2 border border-black/10 bg-black/5">
                <div className="text-lg font-bold">120</div>
                <div className="text-[8px] font-bold uppercase tracking-widest opacity-60">Commts</div>
            </div>
             <div className="p-2 border border-black/10 bg-black/5">
                <div className="text-lg font-bold">3</div>
                <div className="text-[8px] font-bold uppercase tracking-widest opacity-60">Delays</div>
            </div>
        </div>
      </div>
    </div>
  );
}
