import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, User, ArrowUpRight } from 'lucide-react';

export default function BlogSlider() {
  const blogPosts = [
    {
      id: 1,
      title: 'Cross Border Logistics: Managing Cargo Across Borders',
      category: 'International Shipping',
      date: 'July 17, 2026',
      author: 'pprlogisticadmin',
      desc: 'Seamless custom clearance, strategic hubs, and optimal route selection are vital to coordinate transit safely across border crossings.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      title: '3PL Logistics Services: Supporting Commercial Growth',
      category: 'Supply Chain',
      date: 'July 10, 2026',
      author: 'pprlogisticadmin',
      desc: 'Discover how outsourcing warehousing, inventory distribution, and freight forwarding to a third-party logistics partner cuts costs.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 3,
      title: 'Freight Consolidation: Improving Cargo Shipping Efficiency',
      category: 'Operations',
      date: 'July 3, 2026',
      author: 'pprlogisticadmin',
      desc: 'LCL (Less than Container Load) shipping consolidation helps businesses save budget, reduce environmental footprints, and secure storage.',
      image: 'https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Latest Insights</span>
          <h2 className="text-3xl font-extrabold text-navy-dark">Logistics News & Articles</h2>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-lg border border-gray-200 hover:border-primary hover:text-primary flex items-center justify-center transition-all bg-white shadow-sm cursor-pointer"
            aria-label="Previous posts"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-lg border border-gray-200 hover:border-primary hover:text-primary flex items-center justify-center transition-all bg-white shadow-sm cursor-pointer"
            aria-label="Next posts"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Grid of posts on Desktop, Carousel display on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className={`bg-white rounded-2xl overflow-hidden border border-gray-150/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col ${
              index === currentIndex ? 'ring-2 ring-primary/20 md:ring-0' : 'hidden md:flex'
            }`}
          >
            {/* Post Image */}
            <div className="relative overflow-hidden h-52">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-md">
                {post.category}
              </div>
            </div>

            {/* Post Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    By Admin
                  </span>
                </div>
                <h3 className="font-bold text-lg text-navy-dark leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-3">
                  {post.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between text-primary font-semibold text-sm group-hover:text-primary-dark">
                <span>Read Article</span>
                <span className="w-8 h-8 rounded-lg bg-primary/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
