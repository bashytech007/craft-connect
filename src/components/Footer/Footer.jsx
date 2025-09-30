import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { 
      Icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: "#", 
      label: "X (Twitter)" 
    },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { 
      Icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ), 
      href: "#", 
      label: "TikTok" 
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Brand and Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 text-lg">CraftConnect</span>
              <span className="text-gray-600 text-sm">Craftconnect Nigeria Ltd. 2025</span>
            </div>
          </div>

          {/* Social Icons and Language */}
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* Language Selector */}
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">English</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;