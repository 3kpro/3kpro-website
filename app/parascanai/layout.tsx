import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Parascan AI | 3K Pro Services',
  alternates: { canonical: 'https://3kpro.services/parascanai' },
}
export default function Layout({children}: {children: React.ReactNode}) { return <>{children}</> }
