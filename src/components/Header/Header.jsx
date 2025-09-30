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

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-xl text-gray-900">CraftConnect</span>
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
            <button 
              onClick={() => navigate('/sign-in')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/sign-up')}
              className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;