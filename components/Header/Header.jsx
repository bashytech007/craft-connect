'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { User, LogOut } from 'lucide-react';
import Image from 'next/image';
import cclogo from '@/public/assets/cc-logo.svg';

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => router.push('/')}
          >
            <div className="flex items-center justify-center space-x-2">
              <Image src={cclogo} alt="craft-connect-logo" width={56} height={56} />
            </div>
            <div className="font-bold text-xl text-gray-900">CraftConnect</div>
          </div>
          

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Landing
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Explore
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              English
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {loading ? (
              <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
            ) : user ? (
              // Logged in state
              <>
                <button 
                  onClick={() => router.push('/profile')}
                  className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">Profile</span>
                </button>
                <button 
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            ) : (
              // Logged out state
              <>
                <button 
                  onClick={() => router.push('/sign-in')}
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                >
                  Login
                </button>
                <button 
                  onClick={() => router.push('/sign-up')}
                  className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

