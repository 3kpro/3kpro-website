import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login | 3KPRO",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <main className="min-h-screen bg-white bg-grid text-black">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <section className="mb-12 lg:mb-0">
          <Link
            href="/"
            className="mb-14 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
          >
            <span className="flex h-10 w-10 items-center justify-center border border-black text-xs">
              3K
            </span>
            3kpro.services
          </Link>

          <div className="mb-8 h-1 w-12 bg-black" />
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
            Admin Access
          </p>
          <h1 className="mb-8 text-5xl font-bold uppercase leading-none tracking-tight md:text-7xl">
            Sales<br />Control Room
          </h1>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-black/60">
            Protected access for James and approved sellers. Use this for live
            demos, platform health, checkout tools, and lead follow-up as the
            backend grows.
          </p>
        </section>

        <section className="border border-black bg-white p-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.06)] sm:p-10">
          <div className="mb-10 flex items-center justify-between border-b border-black pb-6">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                Secure Session
              </p>
              <h2 className="text-2xl font-bold uppercase tracking-tight">
                Sign In
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center border border-black">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </div>

          <LoginForm nextPath={next} />
        </section>
      </div>
    </main>
  );
}

