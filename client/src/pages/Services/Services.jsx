import React from 'react';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';
import { getWhatsAppLink } from '../../utils/whatsapp';
import ScrollReveal from '../../components/ui/ScrollReveal';

/**
 * Services Page Component
 * 
 * LEARNING EXPLANATION FOR REACT CONCEPTS USED:
 * 1. Stateless Functional Component: 
 *    - By removing the fleet section and form, this page is now a purely presentation component (stateless).
 *    - It receives no props and manages no internal state, which makes it extremely fast and simple to render.
 * 2. List Mapping:
 *    - We use `services.map((srv, idx) => ...)` to dynamically generate card elements.
 *    - Each list item has a unique `key={idx}` so React's reconciliation engine can efficiently update elements in the Virtual DOM.
 */
export const Services = () => {
  const services = [
    { icon: '✈️', title: 'Indore Airport Transfers', desc: 'Flat rates for reliable Indore Airport drops. We monitor flight arrivals to guarantee timely pickups. Starts at flat ₹1,560.', linkText: 'Book Airport Cab →', waMsg: 'I need a cab for Indore Airport Drop' },
    { icon: '🕉️', title: 'Ujjain Local City Darshan', desc: 'Visit Mahakaleshwar Temple, Kal Bhairav, Ram Ghat, and Harsiddhi Mata Temple in one comfortable, air-conditioned day trip.', linkText: 'Book Darshan Tour →', waMsg: 'I need a cab for Ujjain Darshan' },
    { icon: '🚘', title: 'Outstation Cabs', desc: 'Safe journeys to Omkareshwar Jyotirlinga, Dewas Tekri, Bhopal, Mandu, Sanchi, or Pachmarhi. Clean sedan or SUV fleet ready.', linkText: 'Book Outstation Cab →', waMsg: 'I need an outstation cab' },
    { icon: '🔄', title: 'Round Trip Services', desc: 'Multi-day custom travel plans. Hire a dedicated car and chauffeur for your entire family tour across Madhya Pradesh.', linkText: 'Book Round Trip →', waMsg: 'I need a round trip cab' },
    { icon: '➡️', title: 'One Way Intercity Drops', desc: 'Pay only for one-direction mileage. Ideal for swift drops from Ujjain to Indore, Dewas, Bhopal, or nearby cities.', linkText: 'Book One Way →', waMsg: 'I need a one way drop' },
    { icon: '🚐', title: 'Tempo Traveller & Group Fleet', desc: 'Traveling with an extended family or pilgrimage group? Hire our 14, 17, 20, or 26-seater luxury air-conditioned tempo travellers.', linkText: 'Call for Group Inquiry →', callOnly: true }
  ];

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* SubHero Banner */}
      <SubHero title="Taxi Services & Packages" breadcrumb="Our Services" />

      {/* Main Section */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        
        {/* CORE SERVICES GRID */}
        <section className="space-y-12">
          <ScrollReveal direction="none" duration={1000}>
            <SectionHeader 
              title="Our Cab Packages in Ujjain" 
              subtitle="We supply a diverse array of professional transport models tailored for travelers."
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100} duration={600}>
                <div className="bg-bg-secondary p-8 rounded-2xl border border-[rgba(158,158,175,0.12)] flex flex-col justify-between hover:border-accent-gold transition-colors duration-300 h-full">
                  <div>
                    <div className="text-4xl mb-4">{srv.icon}</div>
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">{srv.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">{srv.desc}</p>
                  </div>
                  <div>
                    {srv.callOnly ? (
                      <a href="tel:+919522205111" className="text-accent-saffron hover:text-accent-gold font-semibold text-sm transition-colors">
                        {srv.linkText}
                      </a>
                    ) : (
                      <a href={getWhatsAppLink(srv.waMsg)} className="text-accent-saffron hover:text-accent-gold font-semibold text-sm transition-colors">
                        {srv.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Services;
