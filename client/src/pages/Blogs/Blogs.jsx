import React from 'react';
import { Link } from 'react-router-dom';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import { blogsData } from '../../data/blogs';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';

/**
 * Premium Blogs Archive Page.
 * Displays our custom pilgrimage blogs in a beautiful glassmorphic grid.
 * 
 * LEARNING TIP (React Mapping & Dynamic Lists):
 * 1. We import the static array `blogsData` from our data layer.
 * 2. In the JSX return, we use `blogsData.map((blog) => ( ... ))` to iterate over the array.
 * 3. Crucial Concept: Every mapped parent element MUST have a unique `key` prop (e.g. `key={blog.id}`). 
 *    This helps React's Virtual DOM keep track of which items changed, added, or removed, making updates super fast!
 */
export const Blogs = () => {
  return (
    <div className="bg-bg-primary min-h-screen font-body">
      {/* Premium sub-hero Banner */}
      <SubHero title="Spiritual Travel Blogs" breadcrumb="Blogs" />

      {/* Main Section */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 space-y-12">
        
        {/* Section Header */}
        <SectionHeader 
          title="Sacred Travel Insights & Guides" 
          subtitle="Deep-dive articles on holy destinations, historical mythology, rituals, and local travel tips curated by our expert guides."
        />

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <article 
              key={blog.id} 
              className="group bg-bg-secondary rounded-3xl overflow-hidden border border-[rgba(158,158,175,0.12)] flex flex-col justify-between hover:border-accent-gold transition-all duration-400 shadow-royal hover:-translate-y-2"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={blog.img} 
                  alt={blog.title} 
                  width="600"
                  height="400"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Floating Category Badge */}
                <span className="absolute top-4 left-4 bg-bg-primary/80 backdrop-blur-md text-accent-gold text-xs font-semibold px-4 py-1.5 rounded-full border border-[rgba(255,184,0,0.3)] tracking-wider uppercase">
                  {blog.category}
                </span>
              </div>

              {/* Blog Content Summary */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Meta Tags (Date & Read Time) */}
                  <div className="flex items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-accent-saffron" /> {blog.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock className="text-accent-gold" /> {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-white group-hover:text-accent-gold transition-colors duration-300 line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4 border-t border-[rgba(158,158,175,0.08)] flex justify-between items-center">
                  <Link 
                    to={`/blogs/${blog.slug}`} 
                    className="text-accent-saffron hover:text-accent-gold font-semibold flex items-center gap-2 text-sm transition-colors duration-300"
                  >
                    Read Full Article <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Support Banner */}
        <div className="text-center mt-16 bg-bg-secondary p-8 md:p-12 rounded-3xl border border-[rgba(255,184,0,0.22)] max-w-[800px] mx-auto glow-gold">
          <h3 className="text-xl font-heading font-semibold text-gold-gradient mb-2">Planning a Holy Pilgrimage in Central India?</h3>
          <p className="text-sm text-text-muted max-w-[600px] mx-auto mb-6">
            We provide clean, air-conditioned premium cabs and highly experienced drivers who double as knowledgeable local guides for Ujjain, Omkareshwar, Nalkheda, and beyond.
          </p>
          <Button variant="primary" to="/contact">
            📞 Book Chauffeur-Driven Cab Now
          </Button>
        </div>

      </main>
    </div>
  );
};

export default Blogs;
