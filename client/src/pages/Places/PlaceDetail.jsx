import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { placesData } from '../../data/places';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import { FiArrowLeft } from 'react-icons/fi';

export const PlaceDetail = () => {
  const { slug } = useParams();
  const place = placesData.find((p) => p.slug === slug);

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

  if (!place) {
    return (
      <div className="pt-[150px] pb-24 text-center bg-bg-primary min-h-screen">
        <h2 className="text-3xl font-heading text-text-primary mb-6">Place Not Found</h2>
        <Button to="/">Return Home</Button>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen font-body">
      {/* Dynamic sub-hero Banner */}
      <SubHero title={place.name} breadcrumb={place.name} />

      {/* Main Section */}
      <main className="max-w-[900px] mx-auto px-6 py-16">
        
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-accent-gold text-sm mb-8 transition-colors">
          <FiArrowLeft /> Back to Home
        </Link>

        {/* Section Header */}
        <SectionHeader title={place.name} subtitle="Explore Ujjain's sacred history and plan your holy pilgrimage." />

        {/* Place Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-[rgba(255,184,0,0.22)] shadow-royal glow-gold mb-12">
          <img 
            src={place.img} 
            alt={place.name} 
            width="900"
            height="400"
            fetchpriority="high"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detailed Copy */}
        <div className="bg-bg-secondary p-8 md:p-12 rounded-3xl border border-[rgba(158,158,175,0.12)] space-y-6">
          <h3 className="text-xl font-heading font-semibold text-text-primary">About the Sacred Destination</h3>
          <p className="text-text-muted leading-relaxed text-[1.05rem]">
            {parseMarkdownLinks(place.description)}
          </p>
          <p className="text-text-muted leading-relaxed text-[1.05rem]">
            Ujjain is one of the most ancient and sacred cities in India, known for its divine energy, rich spiritual heritage, and majestic historical temples. Book a reliable taxi service with us today to travel comfortably to {place.name} and explore the sacred lands with ease.
          </p>

          <div className="pt-6 border-t border-[rgba(158,158,175,0.12)] flex flex-wrap gap-4 items-center justify-between">
            <span className="text-sm font-semibold text-accent-gold">
              🚩 Safe Darshan Assured with Professional Pilots
            </span>
            <Button variant="primary" href={getWhatsAppLink(place.waText)}>
              🚖 Book Taxi to {place.name}
            </Button>
          </div>
        </div>

      </main>
    </div>
  );
};
export default PlaceDetail;
