import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MarketingHeader, DashboardHeader } from '@/components/header'
import { Toaster } from 'react-hot-toast'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Affiliate Builder',
  description: 'Créez et gérez vos sites d\'affiliation facilement',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Récupérer le pathname pour déterminer quel header afficher
  const headersList = await headers()
  const pathname = headersList.get('x-invoke-path') || ''
  
  // Les pages qui devraient avoir le header du dashboard
  const dashboardPaths = ['/dashboard', '/mes-sites', '/analytics', '/outils']
  const isDashboardPage = dashboardPaths.some(path => 
    pathname.startsWith(path))

  return (
    <html lang="fr">
      <body className={inter.className}>
        {isDashboardPage ? <DashboardHeader /> : <MarketingHeader />}
        <main className={isDashboardPage ? "pt-16" : "pt-20"}>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
