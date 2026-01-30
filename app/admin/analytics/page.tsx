import { Suspense } from 'react';

// This would usually be a server action or a direct Supabase query
const stats = {
  totalRevenue: 15420,
  totalUsers: 142,
  activeSubscriptions: 89,
  products: [
    { name: 'ReviewLens', revenue: 9400, users: 42, color: '#818cf8' },
    { name: 'Cloud Ledger', revenue: 4500, users: 85, color: '#4ade80' },
    { name: 'Azure Optimizer', revenue: 1520, users: 15, color: '#60a5fa' },
  ],
  recentEvents: [
    { id: '1', user: 'alice@example.com', product: 'ReviewLens', event: 'Subscription Created', time: '2 mins ago' },
    { id: '2', user: 'bob@example.com', product: 'Cloud Ledger', event: 'Payment Succeeded', time: '15 mins ago' },
    { id: '3', user: 'charlie@example.com', product: 'ReviewLens', event: 'Subscription Cancelled', time: '1 hour ago' },
  ]
};

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Marketplace Analytics</h1>
          <p className="text-neutral-400">Real-time health of the 3K Pro Services portfolio.</p>
        </header>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-sm text-neutral-400 mb-1">Total Revenue (MRR)</p>
            <p className="text-3xl font-mono font-bold">${stats.totalRevenue.toLocaleString()}</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-sm text-neutral-400 mb-1">Total Users</p>
            <p className="text-3xl font-mono font-bold">{stats.totalUsers}</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-sm text-neutral-400 mb-1">Active Subscriptions</p>
            <p className="text-3xl font-mono font-bold">{stats.activeSubscriptions}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Breakdown */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Product Performance</h2>
            <div className="space-y-4">
              {stats.products.map((product) => (
                <div key={product.name} className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{product.name}</span>
                    <span className="font-mono text-neutral-400">${product.revenue.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${(product.revenue / stats.totalRevenue) * 100}%`,
                        backgroundColor: product.color 
                      }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-neutral-500">
                    {product.users} users · {Math.round((product.revenue / stats.totalRevenue) * 100)}% of total
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Events */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Live Feed</h2>
            <div className="space-y-3">
              {stats.recentEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4 p-3 text-sm border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-neutral-600" />
                  <div className="flex-1">
                    <span className="text-neutral-200 font-medium">{event.user}</span>
                    <span className="text-neutral-500"> {event.event.toLowerCase()} for </span>
                    <span className="text-neutral-200">{event.product}</span>
                  </div>
                  <div className="text-neutral-500 text-xs">{event.time}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
