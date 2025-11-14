import React from "react";
import craftlefthome from "../../assets/craftlefthome.svg";
import craftcenter from "../../assets/craftcenter.svg";
import craftright from "../../assets/craftright.svg";
const HeroSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top icons row */}
        <div className="flex justify-center items-center gap-6 sm:gap-12 mb-6">
          {/* Artisan */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
            <img src={craftlefthome} alt="craft-home-img" />
          </div>

          {/* Central circle */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center shadow-lg ring-4 ring-amber-200 overflow-hidden">
            <img
              src={craftcenter}
              alt="craft-logo"
              className="w-full h-full object-cover p-2"
            />
          </div>

          {/* Client */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-100 flex items-center justify-center shadow-sm">
           <img src={craftright} alt="craft-right"/>
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between max-w-xs sm:max-w-md mx-auto text-sm sm:text-base text-gray-600 mb-8">
          <span className="font-medium">Artisan</span>
          <span className="font-medium">Client</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Where your <span className="text-amber-600">Craft</span>
            <br />
            connects you to <span className="text-amber-600">Clients</span>
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
