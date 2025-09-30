// src/pages/LandingPage.jsx
import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero/HeroSection';
import SearchSection from '../components/Search/SearchSection';
import CategoriesSection from '../components/Categories/CategoriesSection';
import FeaturedArtisans from '../components/Artisans/FeaturedArtisans';
import Footer from '../components/Footer/Footer';
import WhyTrustSection from '../components/CTA/WhyTrustSection';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <SearchSection />
        <CategoriesSection />
        <FeaturedArtisans />
        <WhyTrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;