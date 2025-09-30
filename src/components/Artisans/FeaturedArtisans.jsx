import React, { useState } from 'react';
import { Play } from 'lucide-react';

const FeaturedArtisans = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  // Main featured video data
  const featuredVideo = {
    thumbnail: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=1200&h=600&fit=crop",
    title: "See Our Craft in Action",
    description: "Watch our skilled artisans demonstrate their expertise and passion for their craft",
  };

  // Thumbnail videos for the slider
  const thumbnailVideos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-24">
      {/* Main Featured Video */}
      <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-8 group cursor-pointer">
        <img
          src={featuredVideo.thumbnail}
          alt={featuredVideo.title}
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
        
        {/* Play button centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 hover:bg-amber-500 group">
            <Play className="w-10 h-10 md:w-12 md:h-12 text-amber-600 group-hover:text-white fill-current ml-1" />
          </button>
        </div>
      </div>

      {/* Thumbnail Slider - Centered */}
      <div className="flex justify-center gap-4 overflow-x-auto pb-6 scrollbar-hide">
        {thumbnailVideos.map((video, index) => (
          <div
            key={video.id}
            onClick={() => setActiveVideo(index)}
            className={`relative flex-shrink-0 w-40 h-28 md:w-48 md:h-32 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
              activeVideo === index
                ? "ring-4 ring-amber-500 shadow-xl"
                : "hover:ring-2 hover:ring-gray-300 shadow-md"
            }`}
          >
            <img
              src={video.thumbnail}
              alt={`Video ${video.id}`}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all"></div>
            
            {/* Small play icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-gray-800 fill-current ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtisans;