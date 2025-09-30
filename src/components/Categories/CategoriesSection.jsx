import React from "react";

// Import SVGs
import woodworking from "../../assets/categories/woodworking.svg";
import leather from "../../assets/categories/leather.svg";
import metal from "../../assets/categories/metal.svg";
import pottery from "../../assets/categories/pottery.svg";
import textiles from "../../assets/categories/textiles.svg";
import jewelry from "../../assets/categories/jewelry.svg";

const categories = [
  {
    name: "Wood Working",
    label: "Woodwork & Carving",
    image: woodworking,
    description: "Furniture, Carpentry, Restoration",
  },
  {
    name: "Leather Craft",
    label: "Pottery & Ceramics",
    image: leather,
    description: "Bags, Belts, Custom Goods",
  },
  {
    name: "Metal Working",
    label: "Metalwork & Smithing",
    image: metal,
    description: "Welding, Forging, Sculpture",
  },
  {
    name: "Pottery",
    label: "Visual Arts",
    image: pottery,
    description: "Ceramics, Tableware, Art",
  },
  {
    name: "Textiles",
    label: "Textiles",
    image: textiles,
    description: "Weaving, Embroidery, Tailoring",
  },
  {
    name: "Jewelry",
    label: "Building & Architectural Trades",
    image: jewelry,
    description: "Custom Pieces, Repairs, Design",
  },
];

const CategoriesSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Categories of Artisans
        </h2>
        <p className="text-xl text-gray-600">
          Discover skilled craftspeople in every field
        </p>
      </div>

      {/* Grid - 2 columns on mobile, 4 columns on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group ${
              index >= 4 ? 'lg:col-start-2' : ''
            } ${index === 5 ? 'lg:col-start-3' : ''}`}
          >
            {/* Full-width Image covering more space */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Content - Only label */}
            <div className="p-4 text-center">
              <p className="text-sm text-gray-700 font-medium">
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