import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../../data/blogs';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SubHero from '../../components/layout/SubHero';
import Button from '../../components/ui/Button';
import { FiArrowLeft, FiCalendar, FiClock, FiMapPin, FiCompass } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Premium Blog Detail Page.
 * Renders the full details of a specific blog post dynamically.
 * 
 * LEARNING TIP (React Router & useParams Hook):
 * 1. Inside `App.jsx`, we declare a path like `/blogs/:slug` (where `:slug` is a variable).
 * 2. In this component, we call `useParams()`. It returns an object containing the route parameters.
 *    For example, if the URL is `/blogs/omkareshwar-darshan-guide`, `useParams()` returns `{ slug: 'omkareshwar-darshan-guide' }`.
 * 3. We then use `blogsData.find((blog) => blog.slug === slug)` to look up and extract the matching blog.
 * 4. If no blog is found, we show a clean fallback UI to prevent crashes!
 */
export const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  // Helper function to parse markdown links: [Link Text](/url-path)
  const parseMarkdownLinks = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const result = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, linkText, url] = match;
      const matchIndex = match.index;

      // Add preceding plain text
      if (matchIndex > lastIndex) {
        result.push(text.substring(lastIndex, matchIndex));
      }

      // Add Link component or standard a tag
      if (url.startsWith('http') || url.startsWith('tel:') || url.startsWith('mailto:')) {
        result.push(
          <a
            key={matchIndex}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold hover:text-accent-saffron underline font-semibold transition-colors duration-200"
          >
            {linkText}
          </a>
        );
      } else {
        result.push(
          <Link
            key={matchIndex}
            to={url}
            className="text-accent-gold hover:text-accent-saffron underline font-semibold transition-colors duration-200"
          >
            {linkText}
          </Link>
        );
      }

      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    return result.length > 0 ? result : text;
  };

  // Fallback UI in case the user navigates to an invalid slug
  if (!blog) {
    return (
      <div className="pt-[150px] pb-24 text-center bg-bg-primary min-h-screen font-body">
        <div className="max-w-[500px] mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-heading text-text-primary">Article Not Found</h2>
          <p className="text-text-muted text-sm">
            The blog post you are looking for might have been moved or removed.
          </p>
          <Button to="/blogs">Return to Blogs</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen font-body text-text-primary">
      {/* SubHero Page Banner using the blog title dynamically */}
      <SubHero title={blog.title} breadcrumb={`Blogs / ${blog.category}`} />

      {/* Main Container */}
      <main className="max-w-[1000px] mx-auto px-6 py-16">
        
        {/* Back navigation link */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-gold text-sm mb-8 transition-colors duration-300"
        >
          <FiArrowLeft /> Back to Blogs Archive
        </Link>

        {/* Featured Editorial Card */}
        <div className="space-y-12">
          
          {/* Main Title & Metadata */}
          <div className="space-y-4">
            <span className="inline-block bg-[rgba(255,184,0,0.1)] text-accent-gold text-xs font-semibold px-4 py-1.5 rounded-full border border-[rgba(255,184,0,0.2)] uppercase tracking-wider">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-muted pt-2">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="text-accent-saffron" /> Published on {blog.publishDate}
              </span>
              <span className="flex items-center gap-1.5">
                <FiClock className="text-accent-gold" /> {blog.readTime}
              </span>
              <div className="flex items-center gap-2 md:border-l md:border-[rgba(158,158,175,0.22)] md:pl-6">
                <span className="text-text-primary font-medium">{blog.authorName}</span>
                <span className="text-xs bg-[rgba(255,184,0,0.1)] text-accent-gold px-2.5 py-0.5 rounded-full border border-[rgba(255,184,0,0.2)]">
                  {blog.authorRole}
                </span>
              </div>
            </div>
          </div>

          {/* Premium Framed Featured Image */}
          <div className="w-full h-[300px] md:h-[480px] rounded-3xl overflow-hidden border border-[rgba(255,184,0,0.22)] shadow-royal glow-gold">
            <img 
              src={blog.img} 
              alt={blog.title} 
              width="1000"
              height="480"
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Editorial Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Main Text Content */}
            <div className="lg:col-span-2 space-y-6 text-text-muted leading-relaxed text-base md:text-lg">
              {blog.content.map((paragraph, index) => {
                // If paragraph starts with a list marker (e.g. "1. ", "2. "), style it as a custom card/point
                const isNumberedPoint = /^\d+\.\s/.test(paragraph);

                if (isNumberedPoint) {
                  return (
                    <div 
                      key={index} 
                      className="bg-bg-secondary p-6 md:p-8 rounded-2xl border-l-4 border-accent-gold border-y border-r border-[rgba(158,158,175,0.12)] text-text-primary space-y-2 my-6 font-body"
                    >
                      <p className="font-heading font-medium text-lg leading-snug">
                        {parseMarkdownLinks(paragraph)}
                      </p>
                    </div>
                  );
                }

                return (
                  <p key={index} className="text-text-muted font-body">
                    {parseMarkdownLinks(paragraph)}
                  </p>
                );
              })}
            </div>

            {/* Travel Desk Sticky Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-[100px]">
              
              {/* Tour Logistics Card */}
              <div className="bg-bg-secondary p-6 rounded-3xl border border-[rgba(158,158,175,0.12)] space-y-6">
                <h3 className="text-lg font-heading font-semibold text-text-primary border-b border-[rgba(158,158,175,0.12)] pb-3 flex items-center gap-2">
                  <FiCompass className="text-accent-gold" /> Yatra Planner
                </h3>

                {/* Best Time */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-accent-saffron uppercase tracking-wider">Best Time to Visit</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {blog.bestTimeToVisit}
                  </p>
                </div>

                {/* How to Reach */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-accent-gold uppercase tracking-wider">How to Travel</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {blog.howToReach}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a 
                    href={getWhatsAppLink(blog.waText)} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-saffron-gradient text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-royal hover:opacity-95 text-sm"
                  >
                    <FaWhatsapp size={18} /> Book Pilgrimage Taxi
                  </a>
                </div>
              </div>

              {/* Secure Booking Guarantee Badge */}
              <div className="bg-[rgba(0,230,118,0.06)] p-5 rounded-2xl border border-[rgba(0,230,118,0.22)] text-center space-y-2">
                <span className="text-xl">🛡️</span>
                <h4 className="text-xs font-bold text-success-green uppercase tracking-wide">100% Secure Ride Promise</h4>
                <p className="text-[0.7rem] text-text-muted leading-relaxed">
                  Every cab features police-verified drivers, real-time GPS tracking, and complete sanitization before dispatch.
                </p>
              </div>

            </aside>

          </div>

        </div>

      </main>
    </div>
  );
};

export default BlogDetail;
