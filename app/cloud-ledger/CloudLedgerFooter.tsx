import { Cloud, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const CloudLedgerFooter: React.FC = () => {
  return (
    <footer className="bg-white text-black py-24 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-black flex items-center justify-center font-bold text-xs">3K</div>
              <span className="text-xl font-bold uppercase tracking-tighter text-black">Cloud Ledger</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                PROVOKED BY <a href="/" className="text-black hover:underline transition-all">3K PRO SERVICES</a>.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-widest opacity-40">
             <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Matrix</Link>
             <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Engagement</Link>
             <a href="mailto:info@3kpro.services" className="hover:opacity-100 transition-opacity">Direct Channel</a>
          </div>

          {/* Socials */}
          <div className="flex space-x-10">
              <a
                href="https://x.com/3KPRO_SAAS"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
              >
                <Twitter className="w-5 h-5 text-black" />
              </a>

              <a
                href="https://linkedin.com/company/3k-pro-services"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-black/10 text-center flex flex-col md:flex-row items-center justify-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
              © {new Date().getFullYear()} CLOUD_LEDGER_SYSTEM. ALL RIGHTS RESERVED.
            </p>
            <div className="w-1 h-1 bg-black/10 hidden md:block"></div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 leading-relaxed max-w-md">
              AN INDEPENDENT STRUCTURAL ASSET OF 3K PRO SYSTEMS
            </p>
        </div>
      </div>
    </footer>
  );
};
