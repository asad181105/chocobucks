import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'
  const message = searchParams.get('message')
  const error = searchParams.get('error')
  const errorDescription = searchParams.get('error_description')

  // Handle OAuth errors
  if (error) {
    const errorMsg = errorDescription || error
    return NextResponse.redirect(
      `${origin}/auth/signin?error=${encodeURIComponent(errorMsg)}`
    )
  }

  // Handle OAuth code exchange
  if (code) {
    const supabase = await createClient()
    const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
    
    if (exchangeError) {
      return NextResponse.redirect(
        `${origin}/auth/signin?error=${encodeURIComponent(exchangeError.message)}`
      )
    }

    // User successfully authenticated
    // User data is automatically stored in Supabase auth.users table
    // No need for separate profile table management here

    // Redirect with success message if provided
    const redirectUrl = message 
      ? `${origin}${next}?message=${message}`
      : `${origin}${next}`
    
    return NextResponse.redirect(redirectUrl)
  }

  // No code provided - redirect to sign in with error
  return NextResponse.redirect(
    `${origin}/auth/signin?error=${encodeURIComponent('Authentication failed. Please try again.')}`
  )
}
