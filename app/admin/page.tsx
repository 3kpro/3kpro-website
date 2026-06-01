import Link from "next/link";
import {
  Activity,
  BarChart3,
  CreditCard,
  LogOut,
  MonitorPlay,
  Users,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";

const adminTools = [
  {
    href: "/admin/analytics",
    title: "Marketplace Analytics",
    description: "Portfolio revenue, subscriptions, product activity, and recent events.",
    icon: BarChart3,
  },
  {
    href: "/admin/health",
    title: "Platform Health",
    description: "Supabase and Stripe status checks before a live selling session.",
    icon: Activity,
  },
  {
    href: "/marketplace/cloud-ledger",
    title: "Cloud Ledger Demo",
    description: "Open the live product page for a prospect walkthrough.",
    icon: MonitorPlay,
  },
  {
    href: "/marketplace/fairmerge",
    title: "FairMerge Demo",
    description: "Open the refreshed FairMerge pitch page and review visuals.",
    icon: Users,
  },
  {
    href: "/pay",
    title: "Quick Pay",
    description: "Create or present the payment path for deposits and custom work.",
    icon: CreditCard,
  },
];

export default async function AdminHomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen bg-white bg-grid text-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-col gap-8 border-b border-black pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-black text-xs font-bold">
                3K
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-black/50">
                Admin
              </span>
            </div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              Seller Backend
            </p>
            <h1 className="text-5xl font-bold uppercase leading-none tracking-tight md:text-7xl">
              Control Room
            </h1>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="border border-black px-4 py-3 text-sm font-medium text-black/70">
              {user?.email}
            </div>
            <Link
              href="/admin/logout"
              className="inline-flex items-center justify-center border border-black bg-black px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
            >
              <LogOut className="mr-3 h-4 w-4" />
              Sign Out
            </Link>
          </div>
        </header>

        <section className="mb-12 grid gap-5 lg:grid-cols-3">
          <div className="border border-black bg-black p-8 text-white lg:col-span-2">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
              Field Mode
            </p>
            <h2 className="mb-5 text-3xl font-bold uppercase tracking-tight">
              Start here before a sales conversation.
            </h2>
            <p className="max-w-3xl text-base font-medium leading-relaxed text-white/65">
              Check platform health, open the right product demo, then use Quick Pay
              when the prospect is ready to move. This is the admin foundation; lead
              capture and demo datasets can bolt onto this cleanly next.
            </p>
          </div>

          <div className="border border-black bg-white p-8">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              Access Level
            </p>
            <div className="text-4xl font-bold uppercase tracking-tight">Seller</div>
            <p className="mt-5 text-sm font-medium leading-relaxed text-black/55">
              Allowed admin/seller accounts are controlled by the environment allowlist.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {adminTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group min-h-56 border border-black bg-white p-7 transition hover:bg-black hover:text-white"
              >
                <div className="mb-10 flex items-center justify-between">
                  <Icon className="h-6 w-6" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35 group-hover:text-white/40">
                    Open
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight">
                  {tool.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-black/55 group-hover:text-white/60">
                  {tool.description}
                </p>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}

