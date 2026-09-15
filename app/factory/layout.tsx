import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Software Factory | 3K Pro Services',
  alternates: { canonical: 'https://3kpro.services/factory' },
}
export default function Layout({children}: {children: React.ReactNode}) { return <>{children}</> }
