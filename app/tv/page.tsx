import type { Metadata } from 'next'
import TvPrepApp from './TvPrepApp'

export const metadata: Metadata = {
  title: 'Total Valve Interview Brief | 3KPRO',
  description: 'A focused interview brief hosted by 3KPRO for quick review.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  },
}

export default function TotalValveInterviewPage() {
  return <TvPrepApp />
}
