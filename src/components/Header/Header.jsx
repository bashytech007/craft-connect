// import React, { useState } from 'react';
// import { User, Menu, X } from 'lucide-react';
// import ccLogo from "../../assets/cc-logo.svg";
// import dropdown from "../../assets/dropdown.svg";
// import global from "../../assets/globe.svg";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm border-b">
//       <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        
//         {/* Left side: Hamburger + Logo + Brand */}
//         <div className="flex items-center space-x-2">
//           {/* Hamburger only visible on mobile */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-gray-700 hover:text-amber-600 transition-colors"
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>

//           {/* Logo + Brand */}
//           <img src={ccLogo} alt="CraftConnect Logo" className="h-8 w-auto" />
//           <span className="font-bold text-gray-900 text-lg md:text-xl">CraftConnect</span>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <div className="flex items-center space-x-1">
//             <a href="#" className="text-gray-700 hover:text-amber-600 text-sm font-medium">Learning</a>
//             <img src={dropdown} alt="dropdown" />
//           </div>
//           <div className="flex items-center space-x-1">
//             <a href="#" className="text-gray-700 hover:text-amber-600 text-sm font-medium">Explore</a>
//             <img src={dropdown} alt="dropdown" />
//           </div>
//           <div className="flex items-center space-x-1">
//             <a href="#" className="text-gray-700 hover:text-amber-600 text-sm font-medium">English</a>
//             <img src={global} alt="global" />
//           </div>
//           <div className="flex items-center space-x-1">
//             <a href="#" className="text-gray-700 hover:text-amber-600 text-sm font-medium">Sign in</a>
//             <User className="w-5 h-5 text-gray-700" />
//           </div>
//           <button className="bg-[#D6B42F] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
//             Sign in
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Navigation */}
//       {isMobileMenuOpen && (
//         <div className="bg-white border-t md:hidden">
//           <div className="px-4 pt-2 pb-4 space-y-2">
//             <a href="#" className="block text-gray-700 hover:text-amber-600">Learning</a>
//             <a href="#" className="block text-gray-700 hover:text-amber-600">Explore</a>
//             <a href="#" className="block text-gray-700 hover:text-amber-600">English</a>
//             <a href="#" className="block text-gray-700 hover:text-amber-600">Sign in</a>
//             <button className="w-full bg-[#D6B42F] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
//               Sign in
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Header() {
//   const navigate = useNavigate();

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div 
//             className="flex items-center gap-2 cursor-pointer" 
//             onClick={() => navigate('/')}
//           >
//             <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">C</span>
//             </div>
//             <span className="font-bold text-xl text-gray-900">CraftConnect</span>
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               Landing
//             </a>
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               Explore
//             </a>
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               English
//             </a>
//           </nav>

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => navigate('/sign-in')}
//               className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
//             >
//               Login
//             </button>
//             <button 
//               onClick={() => navigate('/sign-up')}
//               className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { supabase } from '../../lib/supabase';
// import { User, LogOut } from 'lucide-react';

// function Header() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Get initial session
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user ?? null);
//       setLoading(false);
//     });

//     // Listen for auth changes
//     const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div 
//             className="flex items-center gap-2 cursor-pointer" 
//             onClick={() => navigate('/')}
//           >
//             <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">C</span>
//             </div>
//             <span className="font-bold text-xl text-gray-900">CraftConnect</span>
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               Landing
//             </a>
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               Explore
//             </a>
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               English
//             </a>
//           </nav>

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-4">
//             {loading ? (
//               <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
//             ) : user ? (
//               // Logged in state
//               <>
//                 <div className="flex items-center gap-2 text-gray-700">
//                   <User className="w-5 h-5" />
//                   <span className="font-medium hidden sm:inline">
//                     {user.email?.split('@')[0]}
//                   </span>
//                 </div>
//                 <button 
//                   onClick={handleSignOut}
//                   className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
//                 >
//                   <LogOut className="w-5 h-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             ) : (
//               // Logged out state
//               <>
//                 <button 
//                   onClick={() => navigate('/sign-in')}
//                   className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
//                 >
//                   Login
//                 </button>
//                 <button 
//                   onClick={() => navigate('/sign-up')}
//                   className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
//                 >
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "../../contexts/AuthContext";
import { User, LogOut, ChevronDown, Globe } from "lucide-react";
import cclogo from "../../assets/cc-logo.svg";
import dropdown from "../../assets/dropdown.svg";
import globeIcon from "../../assets/globe.svg";

function Header() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    logout();
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => router.push("/")}
          >
            <Image
              src={cclogo}
              alt="CraftConnect Logo"
              width={40}
              height={40}
              className="h-8 md:h-10 w-auto"
              unoptimized
            />
            <span className="font-bold text-gray-900 text-lg md:text-xl">
              CraftConnect
            </span>
            </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors"
              >
                Learning
            </a>
              <Image
                src={dropdown}
                alt="dropdown"
                width={16}
                height={16}
                className="w-4 h-4"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors"
              >
              Explore
            </a>
              <Image
                src={dropdown}
                alt="dropdown"
                width={16}
                height={16}
                className="w-4 h-4"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors"
              >
              English
            </a>
              <Image
                src={globeIcon}
                alt="globe"
                width={16}
                height={16}
                className="w-4 h-4"
                unoptimized
              />
            </div>
            {loading ? (
              <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
            ) : user ? (
              <>
                <button 
                  onClick={() => router.push("/profile")}
                  className="flex items-center gap-1 text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors"
                >
                  <span>Sign in</span>
                  <User className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors font-medium text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => router.push("/sign-in")}
                    className="text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors"
                  >
                    Sign in
                  </button>
                  <User className="w-4 h-4 text-gray-700" />
                </div>
                <button
                  onClick={() => router.push("/join")}
                  className="bg-[#D6B42F] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Join
                </button>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-amber-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Golden horizontal line */}
        <div className="h-px bg-amber-500"></div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            <a
              href="#"
              className="block text-gray-700 hover:text-amber-600 transition-colors"
            >
              Learning
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-amber-600 transition-colors"
            >
              Explore
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-amber-600 transition-colors"
            >
              English
            </a>
            {!user && (
              <>
                <button 
                  onClick={() => {
                    router.push("/sign-in");
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Sign in
                </button>
                <button 
                  onClick={() => {
                    router.push("/join");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#D6B42F] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Join
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
