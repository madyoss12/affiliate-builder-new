import { createBrowserClient } from '@supabase/ssr'

const isDevelopment = process.env.NODE_ENV === 'development'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// En développement, utiliser des valeurs par défaut
const url = isDevelopment ? 'http://localhost:54321' : supabaseUrl
const key = isDevelopment ? 'dummy-key' : supabaseAnonKey

if (typeof window !== 'undefined' && (!supabaseUrl || !supabaseAnonKey)) {
  console.error('Missing Supabase environment variables')
}

export const supabase = createBrowserClient(url!, key!)
