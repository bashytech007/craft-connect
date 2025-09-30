import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSearch}>
          <div className="flex items-center bg-white rounded-xl shadow-lg border-2 border-gray-100 p-2 hover:border-amber-200 transition-colors">
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try 'Masonry & Workshop'"
              className="flex-1 px-4 py-4 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none text-lg"
            />
          <div className='flex items-center'>
              <button 
              type="submit"
              className="bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-600 font-semibold text-lg transition-colors"
            >
             <Search className="w-6 h-6  text-gray-400 ml-4" />
            </button>
          </div>
          </div>
        </form>
        
        {/* Popular searches */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-3">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Woodworking', 'Pottery', 'Metalwork', 'Leather Craft', 'Jewelry'].map((tag) => (
              <button 
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-amber-100 hover:text-amber-700 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;