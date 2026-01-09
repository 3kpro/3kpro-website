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
    <nav className="bg-[#0f172a]/95 backdrop-blur-md border-b border-blue-500/10 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/cloud-ledger"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Cloud className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">
              Cloud <span className="text-blue-500">Ledger</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              3K Pro Services
            </Link>
            <div className="h-4 w-px bg-gray-700"></div>
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors font-medium">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors font-medium">
              Terms
            </Link>
             <a
              href={process.env.NEXT_PUBLIC_CLOUD_LEDGER_URL || "http://localhost:3002"}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-500/20"
            >
              Log In
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors p-2"
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
          <div className="md:hidden border-t border-gray-700/30 py-4 bg-[#0f172a]/95">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                3K Pro Services
              </Link>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <a
                href={process.env.NEXT_PUBLIC_CLOUD_LEDGER_URL || "http://localhost:3002"}
                className="block text-center w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold"
              >
                Log In
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
