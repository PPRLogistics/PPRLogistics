import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, ArrowUpRight, Clock, Tag } from 'lucide-react';

export default function BlogSlider() {
  const blogPosts = [
    {
      id: 1,
      title: 'Cross-Border Transit: Optimizing Cargo Clearance Across Corridors',
      category: 'International Shipping',
      date: 'July 17, 2026',
      readTime: '5 min read',
      author: 'PPR Operations Desk',
      desc: 'Seamless custom clearance, strategic border hubs, and SMGS/CMR route selection are vital to coordinate high-volume freight transit safely.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      title: '3PL & Multimodal Strategy: Supporting Enterprise Commercial Growth',
      category: 'Supply Chain Architecture',
      date: 'July 10, 2026',
      readTime: '4 min read',
      author: 'PPR Strategy Desk',
      desc: 'Discover how outsourcing wagon fleets, bonded warehousing, and multimodal freight forwarding to a 3PL partner lowers transit risk and overhead.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 3,
      title: 'Freight Consolidation: Maximizing LCL & Bulk Rail Shipping Efficiency',
      category: 'Operations & Fleet',
      date: 'July 3, 2026',
      readTime: '6 min read',
      author: 'PPR Logistics Engineer',
      desc: 'Container consolidation and specialized wagon assignment allow enterprises to reduce shipping costs, decrease carbon footprints, and track timelines.',
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
    <div className="w-full relative font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10 inline-block">
            Industry Intelligence
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Logistics Insights & Global Trade Analysis
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-medium mr-2 hidden md:inline">
            Article {currentIndex + 1} of {blogPosts.length}
          </span>
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-xl border border-slate-200 hover:border-primary text-slate-700 hover:text-primary flex items-center justify-center transition-all bg-white shadow-sm hover:shadow-md cursor-pointer active:scale-95"
            aria-label="Previous insight post"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-xl border border-slate-200 hover:border-primary text-slate-700 hover:text-primary flex items-center justify-center transition-all bg-white shadow-sm hover:shadow-md cursor-pointer active:scale-95"
            aria-label="Next insight post"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Grid of posts on Desktop, Slide view on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={post.id}
            className={`bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md card-hover-elevation flex flex-col h-full ${
              index === currentIndex ? 'flex ring-2 ring-primary/20 md:ring-0' : 'hidden md:flex'
            }`}
          >
            {/* Post Image */}
            <div className="relative overflow-hidden h-52">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                <Tag size={11} className="text-primary-light" />
                {post.category}
              </div>
            </div>

            {/* Post Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-4 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-slate-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-slate-400" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 leading-snug hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-primary font-bold text-xs uppercase tracking-wider group cursor-pointer">
                <span>Read Research</span>
                <span className="w-8 h-8 rounded-lg bg-primary/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
