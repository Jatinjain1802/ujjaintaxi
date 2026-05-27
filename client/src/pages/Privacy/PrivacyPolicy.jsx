import React from 'react';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-bg-primary min-h-screen">
      <SubHero title="Privacy Policy" breadcrumb="Privacy Policy" />

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 space-y-12">
        <SectionHeader
          title="Your Privacy Matters"
          subtitle="This Privacy Policy explains what information we collect, how we use it, and how we protect it when you use Taxi In Ujjain services."
        />

        <div className="bg-bg-secondary rounded-3xl p-8 md:p-12 border border-[rgba(201,151,0,0.22)] shadow-royal max-w-[950px] mx-auto space-y-8">
          <section className="space-y-2">
            <h3 className="font-heading text-xl text-text-primary font-semibold">1. Information We Collect</h3>
            <p className="text-text-muted leading-relaxed">
              We may collect your name, phone number, pickup and drop locations, travel date, selected vehicle type, and communication details shared through forms, calls, or WhatsApp.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-heading text-xl text-text-primary font-semibold">2. How We Use Your Information</h3>
            <p className="text-text-muted leading-relaxed">
              We use your information to confirm bookings, provide fare details, coordinate rides, offer customer support, and improve service quality.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-heading text-xl text-text-primary font-semibold">3. Payment and Booking Communication</h3>
            <p className="text-text-muted leading-relaxed">
              We may contact you by phone, WhatsApp, or email regarding booking updates, driver details, timing changes, and payment follow-ups.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-heading text-xl text-text-primary font-semibold">4. Data Sharing</h3>
            <p className="text-text-muted leading-relaxed">
              We do not sell your personal data. Information is shared only when necessary for service delivery, such as with assigned drivers or required local authorities.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-heading text-xl text-text-primary font-semibold">5. Data Security</h3>
            <p className="text-text-muted leading-relaxed">
              We apply reasonable technical and operational safeguards to protect your data from unauthorized access, loss, or misuse.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-heading text-xl text-text-primary font-semibold">6. Retention of Information</h3>
            <p className="text-text-muted leading-relaxed">
              Booking records may be retained for operational, legal, and accounting purposes for a limited period as required by business and law.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-heading text-xl text-text-primary font-semibold">7. Your Choices</h3>
            <p className="text-text-muted leading-relaxed">
              You can request correction or deletion of your personal information by contacting us, subject to legal and operational requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-heading text-xl text-text-primary font-semibold">8. Policy Updates</h3>
            <p className="text-text-muted leading-relaxed">
              We may update this policy from time to time. Updated versions will be published on this page with immediate effect.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-heading text-xl text-text-primary font-semibold">9. Contact</h3>
            <p className="text-text-muted leading-relaxed">
              For privacy-related questions, contact us at <a className="text-accent-saffron hover:underline" href="mailto:taxiinujjain.in@gmail.com">taxiinujjain.in@gmail.com</a> or call <a className="text-accent-saffron hover:underline" href="tel:+919522205111">+91 9522205111</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
