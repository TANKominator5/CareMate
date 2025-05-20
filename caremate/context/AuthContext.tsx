// context/AuthContext.tsx
"use client"; // Still relevant for Next.js 13+ app router, can be kept for pages router too for clarity

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabaseClient'; // Adjust path if needed
import { useRouter } from 'next/navigation'; // For app router
// import { useRouter } from 'next/router'; // For pages router - CHOOSE ONE
import { Session, User, AuthError, SignUpWithPasswordCredentials } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUpWithEmailPassword: (credentials: SignUpWithPasswordCredentials & { options?: { data?: any, emailRedirectTo?: string } }) => Promise<{ data: { user: User | null; session: Session | null; }; error: AuthError | null; }>;
  signInWithPassword: (credentials: SignUpWithPasswordCredentials) => Promise<{ data: { user: User | null; session: Session | null; }; error: AuthError | null; }>;
  signInWithGoogle: () => Promise<{ data: { provider?: any; url?: string | null; }; error: AuthError | null; }>;
  signOut: () => Promise<{ error: AuthError | null }>;
  verifyOtp: (params: { email: string; token: string; type: 'signup' | 'email_change' | 'recovery' | 'sms' | 'phone_change' }) => Promise<{ data: { user: User | null; session: Session | null; }; error: AuthError | null; }>;
  updateUserFullName: (fullName: string) => Promise<any>; // Replace 'any' with more specific type if known
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter(); // Ensure this matches your Next.js router version

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error getting session:", error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);

        if (event === 'SIGNED_IN') {
          const currentUser = session?.user;
          if (currentUser) {
            // For pages router, window.location.pathname is fine.
            // For app router, usePathname() hook might be better if checking path from within AuthContext.
            if (typeof window !== 'undefined' && window.location.pathname !== '/verify-otp') {
                 router.push('/'); // Or your desired dashboard page
            }
          }
        } else if (event === 'SIGNED_OUT') {
          router.push('/login');
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, [router]);

  const value: AuthContextType = {
    user,
    loading,
    signUpWithEmailPassword: (credentials) =>
      supabase.auth.signUp(credentials),
    signInWithPassword: (credentials) =>
      supabase.auth.signInWithPassword(credentials),
    signInWithGoogle: () =>
      supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          // redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`, // Optional
        },
      }),
    signOut: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) console.error("Error signing out:", error.message);
      return { error };
    },
    verifyOtp: (params) =>
      supabase.auth.verifyOtp(params),
    updateUserFullName: (fullName: string) => {
        if (user) {
            return supabase.auth.updateUser({
                data: { full_name: fullName }
            });
        }
        return Promise.reject(new Error("User not logged in"));
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};