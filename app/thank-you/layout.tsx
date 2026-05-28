import { Metadata } from 'next';

// Thank-you page has no rankable content — exclude from index
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
