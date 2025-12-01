import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 md:mb-16">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSearch} className="w-full">
          <div className="flex items-center bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try 'Masonry & Bricklaying'"
              className="flex-1 px-4 md:px-6 py-3 md:py-4 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none text-base md:text-lg"
            />
            <button
              type="submit"
              className="bg-[#D6B42F] text-white px-4 md:px-6 py-3 md:py-4 hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
