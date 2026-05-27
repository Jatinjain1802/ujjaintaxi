import React from 'react';
import { Link } from 'react-router-dom';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';
import { toursData } from '../../data/tours';
import { FiArrowRight } from 'react-icons/fi';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const Tours = () => {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* sub-hero Banner */}
      <SubHero title="Ujjain Yatra Packages" breadcrumb="Our Tours" />

      {/* Main Section */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 space-y-12">
        <ScrollReveal direction="none" duration={1000}>
          <SectionHeader 
            title="Popular Yatra Packages from Ujjain" 
            subtitle="Pre-planned, highly optimized travel packages mapping key pilgrimage sites, historical wonders, and natural highlights."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {toursData.map((tour, index) => (
            <ScrollReveal key={tour.id} direction="up" delay={index * 80} duration={600}>
              <div className="bg-bg-secondary rounded-2xl overflow-hidden border border-[rgba(158,158,175,0.12)] flex flex-col justify-between hover:border-accent-gold transition-colors duration-300 h-full">
                <Link to={`/tours/${tour.id}`}>
                  <img src={tour.img} alt={tour.title} width="290" height="192" loading="lazy" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </Link>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-[rgba(255,87,34,0.12)] text-accent-saffron text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                      {tour.category}
                    </span>
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-1 hover:text-accent-gold transition-colors duration-200">
                      <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
                    </h3>
                    <p className="text-xs text-text-muted tracking-wide mb-4">{tour.route}</p>
                  </div>
                  <div>
                    <div className="text-xl font-heading text-accent-gold font-bold mb-4">{tour.price}</div>
                    <Link to={`/tours/${tour.id}`} className="text-accent-saffron hover:text-accent-gold font-semibold flex items-center gap-1 text-sm transition-colors">
                      View Package Details <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </div>
  );
};
export default Tours;
