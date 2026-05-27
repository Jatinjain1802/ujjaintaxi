import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from '../../data/tours';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import { FiArrowLeft, FiClock, FiDollarSign, FiCompass, FiShield, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ScrollReveal from '../../components/ui/ScrollReveal';

/**
 * Premium Dynamic Tour Detail Page.
 * Renders rich itinerary, inclusions, and quick booking links for yatra packages.
 */
export const TourDetail = () => {
  const { id } = useParams();
  const tour = toursData.find((t) => t.id === id);

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

  // Fallback UI in case the user navigates to an invalid tour id
  if (!tour) {
    return (
      <div className="pt-[150px] pb-24 text-center bg-bg-primary min-h-screen font-body">
        <div className="max-w-[500px] mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-heading text-text-primary">Package Not Found</h2>
          <p className="text-text-muted text-sm">
            The yatra package you are looking for might have been moved or updated.
          </p>
          <Button to="/tours">Return to Packages</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen font-body text-text-primary">
      {/* SubHero Page Banner using the tour title dynamically */}
      <SubHero title={tour.title} breadcrumb={`Tours / ${tour.category}`} />

      {/* Main Container */}
      <main className="max-w-[1200px] mx-auto px-6 py-16">
        
        {/* Back navigation link */}
        <Link 
          to="/tours" 
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-gold text-sm mb-8 transition-colors duration-300"
        >
          <FiArrowLeft /> Back to Tour Packages
        </Link>

        {/* Section Header */}
        <ScrollReveal direction="none" duration={1000}>
          <SectionHeader title={tour.title} subtitle={tour.route} />
        </ScrollReveal>

        {/* Dynamic Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-12">
          
          {/* LEFT: Dynamic Image, Description, & Itinerary */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Featured Image */}
            <ScrollReveal direction="up" duration={800}>
              <div className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-[rgba(255,184,0,0.22)] shadow-royal glow-gold">
                <img 
                  src={tour.img} 
                  alt={tour.title} 
                  width="800"
                  height="450"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </ScrollReveal>

            {/* Tour Copy */}
            <ScrollReveal direction="up" delay={100} duration={800}>
              <div className="bg-bg-secondary p-8 md:p-12 rounded-3xl border border-[rgba(158,158,175,0.12)] space-y-6">
                <h3 className="text-2xl font-heading font-semibold text-text-primary">Yatra Overview</h3>
                <p className="text-text-muted leading-relaxed text-[1.05rem]">
                  {parseMarkdownLinks(tour.description)}
                </p>
                <p className="text-text-muted leading-relaxed text-[1.05rem]">
                  Our professional pilgrim travel desk coordinates every single pickup carefully. We promise completely sanitized AC carriages, polite drivers with extensive local route knowledge, and absolute pricing transparency with zero hidden charges.
                </p>
              </div>
            </ScrollReveal>

            {/* Tour Itinerary List */}
            {tour.itinerary && (
              <ScrollReveal direction="up" delay={150} duration={800}>
                <div className="bg-bg-secondary p-8 md:p-12 rounded-3xl border border-[rgba(158,158,175,0.12)] space-y-8">
                  <h3 className="text-2xl font-heading font-semibold text-text-primary flex items-center gap-3">
                    <FiCompass className="text-accent-gold animate-spin-slow" /> Sightseeing & Itinerary Points
                  </h3>
                  <ul className="space-y-4">
                    {tour.itinerary.map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-start text-[1.05rem] text-text-muted">
                        <span className="text-accent-saffron font-bold text-lg pt-0.5">🚩</span>
                        <p className="leading-relaxed">
                          <strong className="text-text-primary block md:inline mr-1">Point {idx + 1}:</strong> 
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )}

          </div>

          {/* RIGHT: Logistics, Pricing, & CTAs */}
          <aside className="space-y-6 lg:sticky lg:top-[100px]">
            
            {/* Tour Logistics Card */}
            <ScrollReveal direction="up" delay={200} duration={800}>
              <div className="bg-bg-secondary p-8 rounded-3xl border border-[rgba(158,158,175,0.12)] shadow-royal space-y-6">
                <h3 className="text-xl font-heading font-semibold text-text-primary border-b border-[rgba(158,158,175,0.12)] pb-4 flex items-center gap-2">
                  <FiCompass className="text-accent-gold" /> Yatra Details
                </h3>

                {/* Package Price */}
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider">Estimated Tariffs</h4>
                  <div className="text-3xl font-heading text-accent-gold font-bold">
                    {tour.price}
                    <span className="text-xs font-body text-text-muted ml-1">onwards</span>
                  </div>
                </div>

                {/* Route */}
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider">Route Mapping</h4>
                  <p className="text-sm text-text-primary font-medium">{tour.route}</p>
                </div>

                {/* Inclusions */}
                {tour.inclusions && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider">What's Included</h4>
                    <ul className="space-y-2 text-xs text-text-muted">
                      {tour.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <FiCheckCircle className="text-success-green min-w-[14px]" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Direct Booking Link */}
                <div className="pt-4 border-t border-[rgba(158,158,175,0.08)]">
                  <a 
                    href={getWhatsAppLink(tour.waText)} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-saffron-gradient text-white py-3.5 px-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-royal hover:opacity-95 text-sm"
                  >
                    <FaWhatsapp size={18} /> Book Yatra Package
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Travel Guarantee Badge */}
            <ScrollReveal direction="up" delay={250} duration={800}>
              <div className="bg-[rgba(0,200,83,0.05)] p-5 rounded-2xl border border-[rgba(0,200,83,0.18)] text-center space-y-2">
                <span className="text-xl">🛡️</span>
                <h4 className="text-xs font-bold text-success-green uppercase tracking-wide">Safe Pilgrim Promise</h4>
                <p className="text-[0.7rem] text-text-muted leading-relaxed">
                  Complete route transparency, real-time coordination, and courteous drivers dedicated to your holy pilgrimage comfort.
                </p>
              </div>
            </ScrollReveal>

          </aside>

        </div>

      </main>
    </div>
  );
};

export default TourDetail;
