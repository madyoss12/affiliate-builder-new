import { createServerClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { CookieOptions } from '@supabase/ssr'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            const cookie = cookieStore.get(name)
            return cookie?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({
              name,
              value,
              ...options,
              // Convertir les options de Supabase en options Next.js
              sameSite: options.sameSite as ResponseCookie['sameSite'],
            })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({
              name,
              ...options,
              // Convertir les options de Supabase en options Next.js
              sameSite: options.sameSite as ResponseCookie['sameSite'],
            })
          },
        },
      }
    )

    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  // Return the user to an error page with some instructions
  return NextResponse.redirect(new URL('/auth/auth-code-error', request.url))
}
