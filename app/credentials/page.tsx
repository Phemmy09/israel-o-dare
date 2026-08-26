import type { Metadata } from 'next'
import CredentialsClient from './CredentialsClient'

export const metadata: Metadata = {
  title: 'Institutional Credentials & Dossier | Israel Dare',
  description:
    'Formal academic record, First Class Honours B.Eng., engineering research, Upwork Top Rated Plus verification, and institutional evaluation dossier of Israel Dare.',
}

export default function CredentialsPage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen pt-28 sm:pt-36">
      <CredentialsClient />
    </div>
  )
}
