import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Ledger - Azure Asset & Waste Audit",
  description: "Professional Azure Asset & Waste Audit. See everything. Pay for nothing you don’t use. Powered by 3K Pro Services.",
  openGraph: {
    title: "Cloud Ledger - Azure Asset & Waste Audit",
    description: "Professional Azure Asset & Waste Audit. See everything. Pay for nothing you don’t use. Powered by 3K Pro Services.",
    siteName: "Cloud Ledger",
    type: "website",
    images: [
      {
        url: "https://3kpro.services/og-cloud-ledger.png",
        width: 1200,
        height: 630,
        alt: "Cloud Ledger - Azure Audit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Ledger - Azure Asset & Waste Audit",
    description: "Professional Azure Asset & Waste Audit. See everything. Pay for nothing you don’t use.",
  },
};

export default function CloudLedgerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
