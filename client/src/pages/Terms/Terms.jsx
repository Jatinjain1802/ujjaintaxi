import React from 'react';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';
import { termsData } from '../../data/terms';

export const Terms = () => {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* sub-hero Banner */}
      <SubHero title="Terms & Conditions" breadcrumb="Terms" />

      {/* Main Section */}
      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 space-y-12">
        <SectionHeader 
          title="Terms & Conditions — Please Read Before Booking" 
          subtitle="Please read our fleet operational and booking rules carefully before confirming your ride."
        />

        <div className="bg-bg-secondary rounded-3xl p-8 md:p-12 border border-[rgba(255,184,0,0.22)] shadow-royal glow-gold max-w-[900px] mx-auto">
          <div className="space-y-6">
            {termsData.map((term) => (
              <div key={term.id} className="flex gap-5 items-start font-body pb-4 border-b border-[rgba(158,158,175,0.06)] last:border-b-0 last:pb-0">
                <span className="text-accent-gold font-numbers font-semibold text-base leading-none bg-[rgba(255,184,0,0.08)] py-1.5 px-3 rounded-md border border-[rgba(255,184,0,0.22)] shadow-inner-gold">
                  {term.id}
                </span>
                <p className="text-base text-text-muted leading-relaxed pt-0.5">
                  <strong className="text-white block mb-1">{term.title}:</strong>
                  {term.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section at bottom */}
        <div className="text-center mt-12 bg-bg-secondary p-8 rounded-2xl border border-[rgba(158,158,175,0.12)] max-w-[600px] mx-auto space-y-4">
          <p className="text-lg font-heading font-semibold text-white">Have questions about interstate permits or toll rates for Omkareshwar?</p>
          <p className="text-sm text-text-muted">Our representatives are happy to clear all doubts before you make a booking deposit.</p>
          <a 
            href="https://wa.me/919826157552?text=I+have+a+question+about+booking+terms" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-saffron-gradient text-white font-semibold rounded-full shadow-[0_4px_20px_var(--color-accent-saffron-glow)] hover:shadow-[0_8px_25px_var(--color-accent-saffron-glow)] hover:shadow-saffron hover:-translate-y-[3px] transition-all duration-400 px-7 py-3 text-[0.95rem] gap-2 cursor-pointer"
          >
            💬 Speak To Support on WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
};
export default Terms;
