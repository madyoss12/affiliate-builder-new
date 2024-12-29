import { createServerClient as _createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { CookieOptions } from '@supabase/ssr'

export const createServerClient = (
  supabaseUrl: string,
  supabaseKey: string,
  options: { cookies: {
    get: (name: string) => string | undefined
    set: (name: string, value: string, options: CookieOptions) => void
    remove: (name: string, options: CookieOptions) => void
  }}
) => {
  return _createServerClient(
    supabaseUrl,
    supabaseKey,
    options
  )
}
