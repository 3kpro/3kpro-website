"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Cloud } from "lucide-react";

interface NavigationProps {
  onContactClick?: () => void;
}

export const CloudLedgerNavigation: React.FC<NavigationProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-black fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/cloud-ledger"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <div className="w-10 h-10 border border-black flex items-center justify-center font-bold text-xl tracking-tighter group-hover:bg-black group-hover:text-white transition-all">
              3K
            </div>
            <span className="text-xl font-bold text-black uppercase tracking-tight">
              Cloud <span className="opacity-40">Ledger</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">
              Repository
            </Link>
            <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">
              Terms
            </Link>
             <a
              href={process.env.NEXT_PUBLIC_CLOUD_LEDGER_URL || "http://localhost:3002"}
              className="px-6 py-2 border border-black bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Analyze Access
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black py-4 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-[10px] font-bold uppercase tracking-widest text-black"
              >
                Repository
              </Link>
              <Link
                href="/privacy"
                className="text-[10px] font-bold uppercase tracking-widest text-black"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-[10px] font-bold uppercase tracking-widest text-black"
              >
                Terms
              </Link>
              <a
                href={process.env.NEXT_PUBLIC_CLOUD_LEDGER_URL || "http://localhost:3002"}
                className="block text-center w-full py-4 border border-black bg-black text-white text-[10px] font-bold uppercase tracking-widest"
              >
                Analyze Access
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
