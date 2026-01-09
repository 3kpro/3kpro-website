import { Cloud, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const CloudLedgerFooter: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-2">
              <Cloud className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold">Cloud Ledger</span>
            </div>
            <p className="text-gray-400 text-sm">
                Powered by <a href="/" className="text-blue-400 hover:text-blue-300">3K Pro Services</a>.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
             <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
             <a href="mailto:info@3kpro.services" className="hover:text-blue-400 transition-colors">Contact Support</a>
          </div>

          {/* Socials */}
          <div className="flex space-x-6">
              <a
                href="https://x.com/3KPRO_SAAS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>

              <a
                href="https://linkedin.com/company/3k-pro-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Cloud Ledger. All rights reserved. An independent product by 3K Pro Services.
        </div>
      </div>
    </footer>
  );
};
