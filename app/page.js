'use client';

import Header from '../src/components/Header/Header';
import HeroSection from '../src/components/Hero/HeroSection';
import SearchSection from '../src/components/Search/SearchSection';
import CategoriesSection from '../src/components/Categories/CategoriesSection';
import FeaturedArtisans from '../src/components/Artisans/FeaturedArtisans';
import Footer from '../src/components/Footer/Footer';
import WhyTrustSection from '../src/components/CTA/WhyTrustSection';
import { Bot } from 'lucide-react';

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SearchSection />
        <CategoriesSection />
        <FeaturedArtisans />
        <WhyTrustSection />
      </main>
      <Footer />
      
      {/* Floating Craft AI Button */}
      <button
        className="fixed right-4 md:right-6 bottom-6 md:bottom-8 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 md:p-5 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center group"
        aria-label="Craft AI"
      >
        <Bot className="w-6 h-6 md:w-7 md:h-7 mb-1" />
        <span className="text-xs md:text-sm font-semibold">Craft AI</span>
      </button>
    </div>
  );
}


