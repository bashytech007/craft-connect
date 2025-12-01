"use client";

import React from "react";
import Image from "next/image";

// Import SVGs
import woodworking from "../../assets/categories/woodworking.svg";
import leather from "../../assets/categories/leather.svg";
import metal from "../../assets/categories/metal.svg";
import pottery from "../../assets/categories/pottery.svg";
import textiles from "../../assets/categories/textiles.svg";
import jewelry from "../../assets/categories/jewelry.svg";

const categories = [
  {
    name: "Textiles",
    label: "Textile & Fashion Arts",
    image: textiles,
    description: "Weaving, Embroidery, Tailoring",
  },
  {
    name: "Wood Working",
    label: "Woodwork & Carving",
    image: woodworking,
    description: "Furniture, Carpentry, Restoration",
  },
  {
    name: "Pottery",
    label: "Pottery & Ceramics",
    image: pottery,
    description: "Ceramics, Tableware, Art",
  },
  {
    name: "Metal Working",
    label: "Metalwork & Smithing",
    image: metal,
    description: "Welding, Forging, Sculpture",
  },
  {
    name: "Jewelry",
    label: "Building & Architectural Trades",
    image: jewelry,
    description: "Custom Pieces, Repairs, Design",
  },
  {
    name: "Leather Craft",
    label: "Visual Arts",
    image: leather,
    description: "Bags, Belts, Custom Goods",
  },
];

const CategoriesSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 md:my-16 lg:my-24">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
          Categories of Artisans
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          Discover skilled craftspeople in every field
        </p>
      </div>

      {/* Grid - 2 columns on mobile, 3 columns on desktop (2 rows) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
          >
            {/* Full-width Image */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>

            {/* Text Content - Only label */}
            <div className="p-3 md:p-4 text-center">
              <p className="text-sm md:text-base text-gray-700 font-medium">
                {category.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
