import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { ensureUserProfile } from '@/lib/api/users';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/client';

  if (code) {
    try {
      const supabase = createRouteHandlerClient({ cookies });
      
      // Exchange the code for a session
      const { data: authData, error: authError } = await supabase.auth.exchangeCodeForSession(code);
      
      if (authError) {
        console.error('Error exchanging code for session:', authError);
        return NextResponse.redirect(
          new URL(`/auth/signin?error=${encodeURIComponent('Failed to verify email. Please try again.')}`, request.url)
        );
      }

      // If we have a valid session, ensure the user profile exists
      if (authData.session?.user) {
        console.log('Creating/updating user profile after email verification');
        
        // Create or update user profile with verified email status
        const userProfile = await ensureUserProfile(authData.session.user);
        
        if (!userProfile) {
          console.error('Failed to create/update user profile during callback');
        } else {
          console.log('User profile created/updated successfully');
        }
      }
    } catch (error) {
      console.error('Exception in auth callback:', error);
      return NextResponse.redirect(
        new URL(`/auth/signin?error=${encodeURIComponent('An unexpected error occurred. Please try again.')}`, request.url)
      );
    }
  }

  // Redirect to the specified next URL or default to client page
  return NextResponse.redirect(new URL(next, request.url));
}
