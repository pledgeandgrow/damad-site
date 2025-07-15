import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  company: string | null;
  role: string;
  email_verified: boolean;
  stripe_customer_id: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Create a user profile in the users table
 * This should be called during registration or email confirmation, not during login
 */
export async function createUserProfile(authUser: User): Promise<UserProfile | null> {
  try {
    // Check if user already exists to avoid duplicates
    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('id', authUser.id)
      .single();

    if (existingUser) {
      console.log('User profile already exists, skipping creation');
      return existingUser;
    }

    // Generate avatar URL from initials if name is available
    let avatarUrl = null;
    if (authUser.user_metadata?.first_name || authUser.user_metadata?.last_name) {
      const firstName = authUser.user_metadata?.first_name || '';
      const lastName = authUser.user_metadata?.last_name || '';
      const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
      avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=0D8ABC&color=fff`;
    }

    // Direct insert approach for reliability
    const { data, error } = await supabase
      .from('users')
      .insert({
        id: authUser.id,
        email: authUser.email,
        first_name: authUser.user_metadata?.first_name || null,
        last_name: authUser.user_metadata?.last_name || null,
        avatar_url: avatarUrl,
        role: 'client', // Default role
        email_verified: authUser.email_confirmed_at ? true : false,
        stripe_customer_id: null, // Will be populated later if needed
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating user profile:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Exception creating user profile:', error);
    return null;
  }
}

/**
 * Get a user profile by ID
 */
export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Exception fetching user profile:', error);
    return null;
  }
}

/**
 * Update a user's email verification status
 * This should be called when a user confirms their email
 */
export async function updateEmailVerificationStatus(userId: string, isVerified: boolean): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('users')
      .update({ 
        email_verified: isVerified,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId);

    if (error) {
      console.error('Error updating email verification status:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Exception updating email verification status:', error);
    return false;
  }
}

/**
 * Update a user's last login timestamp
 */
export async function updateLastLogin(userId: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('users')
      .update({ 
        last_login: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('id', userId);

    if (error) {
      console.error('Error updating last login:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Exception updating last login:', error);
    return false;
  }
}

/**
 * Ensure a user profile exists, creating it if it doesn't
 * This should be used in the auth callback route, not during login
 */
export async function ensureUserProfile(authUser: User): Promise<UserProfile | null> {
  try {
    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('id', authUser.id)
      .single();

    if (existingUser) {
      // Update email verification status if needed
      if (authUser.email_confirmed_at && !existingUser.email_verified) {
        await updateEmailVerificationStatus(authUser.id, true);
        // Fetch the updated profile
        const { data: updatedUser } = await supabase
          .from('users')
          .select('*')
          .eq('id', authUser.id)
          .single();
          
        return updatedUser || existingUser;
      }
      
      return existingUser;
    }

    // Create new user profile if it doesn't exist
    return await createUserProfile(authUser);
  } catch (error) {
    console.error('Exception ensuring user profile:', error);
    return null;
  }
}
