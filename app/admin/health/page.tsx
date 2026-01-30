"use client";

import { useEffect, useState } from "react";

export default function PlatformHealth() {
  const [health, setHealth] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkHealth = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/health");
      const data = await res.json();
      setHealth(data);
      setLastChecked(new Date());
    } catch (e) {
      console.error("Health check failed", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    if (status === "healthy") return "bg-green-100 text-green-800 border-green-200";
    if (status.startsWith("degraded")) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Platform Health 🩺</h1>
          <button 
            onClick={checkHealth}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Refreshing..." : "Refresh Now"}
          </button>
        </div>

        {health && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Supabase Status */}
            <div className={`p-6 rounded-lg border-2 ${getStatusColor(health.services.supabase)}`}>
              <h2 className="text-xl font-bold mb-2">Supabase (Database & Auth)</h2>
              <div className="text-lg font-mono">{health.services.supabase.toUpperCase()}</div>
              <p className="mt-2 text-sm opacity-80">Checks `profiles` table connectivity.</p>
            </div>

            {/* Stripe Status */}
            <div className={`p-6 rounded-lg border-2 ${getStatusColor(health.services.stripe)}`}>
              <h2 className="text-xl font-bold mb-2">Stripe (Payments)</h2>
              <div className="text-lg font-mono">{health.services.stripe.toUpperCase()}</div>
               <p className="mt-2 text-sm opacity-80">Checks API connectivity (Balance Retrieve).</p>
            </div>

            {/* Application Uptime */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-700 mb-2">System Uptime</h2>
                <div className="text-2xl font-mono text-gray-900">
                    {Math.floor(health.uptime / 60)} minutes
                </div>
                <div className="text-xs text-gray-500 mt-2">
                    Last Checked: {lastChecked?.toLocaleTimeString()}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
