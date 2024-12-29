# Guide de Déploiement Next.js + Supabase sur Vercel

Ce guide couvre les problèmes courants et leurs solutions lors du déploiement d'une application Next.js avec Supabase sur Vercel.

## Configuration Initiale

### 1. Variables d'Environnement
```env
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon_supabase
```

### 2. Types TypeScript Essentiels

#### Types pour l'Authentification
```typescript
// Types pour les formulaires d'authentification
interface FormData {
  email: string;
  password: string;
  confirmPassword?: string; // Pour le formulaire d'inscription
}

// Types pour les erreurs d'authentification
type AuthError = {
  message: string;
  status?: number;
}
```

## Corrections Courantes

### 1. Gestion des Cookies avec Next.js 14+

```typescript
// src/lib/supabase/server.ts
import { createServerClient as _createServerClient } from '@supabase/ssr'
import type { CookieOptions } from '@supabase/ssr'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'

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
```

### 2. Route de Callback d'Authentification

```typescript
// src/app/auth/callback/route.ts
import { createServerClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { CookieOptions } from '@supabase/ssr'

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
              sameSite: options.sameSite as ResponseCookie['sameSite'],
            })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({
              name,
              ...options,
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

  return NextResponse.redirect(new URL('/auth/auth-code-error', request.url))
}
```

### 3. Layout avec Headers Asynchrones

```typescript
// src/app/layout.tsx
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const pathname = headersList.get('x-invoke-path') || ''
  
  // ... reste du code
}
```

## Notifications avec react-hot-toast

```typescript
// Méthodes disponibles
toast.success('Message de succès')
toast.error('Message d\'erreur')
toast('Message neutre')
toast.loading('Chargement...')

// NE PAS utiliser toast.info (non disponible)
```

## Problèmes Courants et Solutions

1. **Erreur : Property 'get' does not exist on type 'Promise<ReadonlyRequestCookies>'**
   - Solution : Ajouter `await` devant `cookies()`
   ```typescript
   const cookieStore = await cookies()
   ```

2. **Erreur : Property 'get' does not exist on type 'Promise<ReadonlyHeaders>'**
   - Solution : Ajouter `await` devant `headers()`
   ```typescript
   const headersList = await headers()
   ```

3. **Erreur : Type error with cookie options**
   - Solution : Convertir les options de Supabase en options Next.js
   ```typescript
   sameSite: options.sameSite as ResponseCookie['sameSite']
   ```

## Bonnes Pratiques

1. Toujours utiliser TypeScript pour bénéficier de la vérification des types
2. Gérer correctement les états de chargement et les erreurs
3. Utiliser les composants Server et Client appropriés
4. Ajouter des commentaires pour les parties complexes
5. Suivre la structure de dossiers Next.js 14+

## Dépendances Importantes

```json
{
  "dependencies": {
    "@supabase/ssr": "latest",
    "@supabase/supabase-js": "latest",
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-hot-toast": "latest",
    "typescript": "5.x"
  }
}
```
