import { Metadata } from 'next';

// Admin routes must never be indexed — they contain internal tooling
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
