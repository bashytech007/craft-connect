"use client";

import React from "react";
import Image from "next/image";
import craftlefthome from "../../assets/craftlefthome.svg";
import craftcenter from "../../assets/craftcenter.svg";
import craftright from "../../assets/craftright.svg";

const HeroSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top icons row */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6">
          {/* Artisan */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center shadow-sm overflow-hidden">
            <Image
              src={craftlefthome}
              alt="craft-home-img"
              fill
              className="object-contain p-2"
              unoptimized
            />
          </div>

          {/* Central circle */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-lg ring-4 ring-amber-200 overflow-hidden">
            <Image
              src={craftcenter}
              alt="craft-logo"
              fill
              className="object-cover p-2"
              unoptimized
            />
          </div>

          {/* Client */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-amber-100 flex items-center justify-center shadow-sm overflow-hidden">
            <Image
              src={craftright}
              alt="craft-right"
              fill
              className="object-contain p-2"
              unoptimized
            />
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between max-w-xs sm:max-w-md mx-auto text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8">
          <span className="font-medium">Artisan</span>
          <span className="font-medium">Client</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Where your <span className="text-amber-600">Craft</span>
            <br />
            connect you to <span className="text-amber-600">Clients</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mx-auto max-w-2xl">
            Join thousands of skilled artisans connecting with clients who value
            quality craftsmanship
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
