import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserCircle } from 'lucide-react'

export const MarketingHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et nom */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-indigo-600">
              Affiliate Builder
            </span>
          </Link>

          {/* Navigation Marketing */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-indigo-600">
              Accueil
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-indigo-600">
              Fonctionnalités
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-indigo-600">
              Tarifs
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-indigo-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </Link>
          </nav>

          {/* Boutons d'action */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">
                Connexion
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                Essai Gratuit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export const DashboardHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et nom */}
          <Link href="/dashboard" className="text-xl font-medium text-indigo-600">
            Affiliate Builder
          </Link>

          {/* Navigation App */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/mes-sites" className="text-gray-600 hover:text-indigo-600">
              Mes Sites
            </Link>
            <Link href="/analytics" className="text-gray-600 hover:text-indigo-600">
              Analytics
            </Link>
            <Link href="/outils" className="text-gray-600 hover:text-indigo-600">
              Outils
            </Link>
          </nav>

          {/* Bouton de profil */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <UserCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
