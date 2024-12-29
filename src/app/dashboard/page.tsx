'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

type User = {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser()
        
        if (error || !user) {
          router.push('/login')
          return
        }

        setUser(user)
      } catch (error) {
        console.error('Error fetching user:', error)
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    getUser()
  }, [router])

  if (loading) {
    return <div>Chargement...</div>
  }

  if (!user) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8">
          Tableau de bord
        </h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Bienvenue {user.email}
          </h2>
          <p className="text-gray-600">
            Commencez à créer votre premier site d&apos;affiliation !
          </p>
        </div>
      </div>
    </main>
  )
}
