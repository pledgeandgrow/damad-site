import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(request: NextRequest) {
  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req: request, res: NextResponse.next() });
  
  // Refresh session if expired - required for Server Components
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If the user is not signed in and the route starts with /client, redirect to sign in
  if (!session && request.nextUrl.pathname.startsWith('/client')) {
    // Store the original URL to redirect back after login
    const redirectUrl = request.nextUrl.pathname + request.nextUrl.search;
    const newUrl = new URL('/auth/signin', request.url);
    
    // Add the redirect URL as a search parameter
    newUrl.searchParams.set('redirect', redirectUrl);
    
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

// Specify which routes this middleware should run for
export const config = {
  matcher: [
    // Apply this middleware only to /client routes
    '/client/:path*',
  ],
};
