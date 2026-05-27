import React from 'react';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import AnimatedCounter from '../Home/components/AnimatedCounter';

export const About = () => {
  const amenities = [
    { icon: '✨', title: 'Premium Hygiene', desc: 'All cars in our fleet undergo absolute cleaning and sanitation before every single booking. Ride in refreshing luxury.' },
    { icon: '🕉️', title: 'Pilgrim-Friendly Drivers', desc: 'Our drivers are polite, professional, and possess complete local route wisdom. They behave as helpful local guides for your temple visits.' },
    { icon: '📞', title: '24x7 Royal Support', desc: 'Have changes in your train or flight timings? Our support team is online 24 hours a day to rearrange your pickups instantly.' },
    { icon: '💰', title: 'Transparent Pricing', desc: 'What we quote is exactly what you pay. Zero surprise costs, zero extra driver charges, and complete peace of mind.' }
  ];

  const standards = [
    { title: '🔍 Police-Verified Drivers', desc: '100% background checks for secure traveling.' },
    { title: '🚭 Clean, Non-Smoking Cabs', desc: 'Pleasant smell, clean upholstery, and fully working AC.' },
    { title: '📍 Local Route Wisdom', desc: 'Expert navigation around Ujjain\'s narrow streets and highways.' },
    { title: '🛡️ Speed-Monitored Travel', desc: 'Adhering strictly to safe speed limits on toll routes.' }
  ];

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* sub-hero Banner */}
      <SubHero title="About Our Agency" breadcrumb="About Us" />

      {/* Main Section */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 space-y-24">
        
        {/* LEGACY & HISTORY SECTION */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 w-full">
            <img 
              src="/Images/premium_cab_fleet.webp" 
              alt="Premium Taxi Fleet in Ujjain" 
              width="640"
              height="400"
              loading="lazy"
              className="w-full rounded-2xl shadow-royal border-2 border-accent-gold max-h-[400px] object-cover"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-heading font-semibold text-gold-gradient pb-2 border-b border-[rgba(158,158,175,0.12)]">
              Ujjain's Pioneer Taxi Network — Since 2001
            </h2>
            <p className="text-text-muted leading-relaxed font-body text-base">
              For more than two decades, <strong>Taxi In Ujjain</strong> has served as a bridge of comfort and trust for tourists, pilgrims, and residents alike. We established our travel network with a simple goal: to elevate taxi services in central India to premium, royal levels, while maintaining extreme transparency and down-to-earth hospitality.
            </p>
            <p className="text-text-muted leading-relaxed font-body text-base">
              Whether you are entering the holy bounds of Ujjain for <em>Mahakaleshwar Jyotirlinga Darshan</em>, planning a peaceful trip to <em>Omkareshwar</em>, or setting off for Indore Airport, our professional fleet is ready to serve you 24x7.
            </p>
          </div>
        </section>

        {/* TRUST BAR COUNTERS */}
        <section className="bg-bg-secondary py-12 px-6 rounded-3xl border border-[rgba(255,184,0,0.22)] shadow-[inset_0_0_15px_rgba(255,184,0,0.1)] glow-gold">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-[rgba(255,184,0,0.22)]">
            <div>
              <div className="flex items-center justify-center">
                <AnimatedCounter target={25} />
                <span className="text-[3rem] font-bold text-accent-gold font-numbers text-gold-gradient">+</span>
              </div>
              <p className="text-[0.75rem] text-text-muted font-semibold tracking-[1.5px] uppercase mt-2">Years Experience</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <AnimatedCounter target={15000} />
                <span className="text-[3rem] font-bold text-accent-gold font-numbers text-gold-gradient">+</span>
              </div>
              <p className="text-[0.75rem] text-text-muted font-semibold tracking-[1.5px] uppercase mt-2">Happy Customers</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <AnimatedCounter target={284} />
                <span className="text-[3rem] font-bold text-accent-gold font-numbers text-gold-gradient">+</span>
              </div>
              <p className="text-[0.75rem] text-text-muted font-semibold tracking-[1.5px] uppercase mt-2">Google Reviews</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <AnimatedCounter target={45} />
                <span className="text-[3rem] font-bold text-accent-gold font-numbers text-gold-gradient">+</span>
              </div>
              <p className="text-[0.75rem] text-text-muted font-semibold tracking-[1.5px] uppercase mt-2">Premium Fleet</p>
            </div>
          </div>
        </section>

        {/* AMENITIES */}
        <section className="space-y-12">
          <SectionHeader 
            title="Why Travel With Us?" 
            subtitle="Every journey is crafted to feel premium, safe, and comfortable."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((item, idx) => (
              <div key={idx} className="bg-bg-secondary p-8 rounded-2xl border border-[rgba(158,158,175,0.12)] flex flex-col items-center text-center hover:border-accent-gold transition-colors duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STANDARDS */}
        <section className="space-y-12">
          <SectionHeader 
            title="Our Safe Carriage Standards" 
            subtitle="We train our chauffeurs systematically to prioritize your comfort and safety."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std, idx) => (
              <div key={idx} className="bg-bg-secondary p-6 rounded-2xl border border-[rgba(158,158,175,0.12)] hover:border-accent-gold transition-colors duration-300">
                <h4 className="text-base font-semibold text-text-primary mb-2">{std.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-bg-secondary p-8 rounded-2xl border border-[rgba(158,158,175,0.12)] max-w-[600px] mx-auto">
            <p className="text-sm text-text-muted mb-4">Have questions about planning your customized tour package?</p>
            <Button variant="primary" to="/contact">
              💬 Contact Our Travel Desk
            </Button>
          </div>
        </section>

      </main>
    </div>
  );
};
export default About;
