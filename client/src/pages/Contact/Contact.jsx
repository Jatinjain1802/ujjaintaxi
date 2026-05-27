import React, { useState } from 'react';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink, generateBookingMessage } from '../../utils/whatsapp';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pickup: '',
    drop: '',
    carType: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = generateBookingMessage({
      name: formData.name,
      mobile: formData.mobile,
      pickup: formData.pickup,
      drop: formData.drop,
      date: formData.date,
      carType: `${formData.carType} (CONTACT FORM)`
    });
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* sub-hero Banner */}
      <SubHero title="Contact Our Travel Desk" breadcrumb="Contact Us" />

      {/* Main Section */}
      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 space-y-12">
        <SectionHeader 
          title="Connect with Our Support" 
          subtitle="Reach out 24/7 for booking confirmations, custom routing quotes, and travel assistance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* LEFT: Contact info and map */}
          <div className="space-y-6">
            <div className="bg-bg-secondary p-6 rounded-2xl border border-[rgba(158,158,175,0.12)] flex items-center gap-4">
              <div className="p-3 bg-[rgba(255,184,0,0.08)] rounded-xl border border-[rgba(255,184,0,0.22)] text-accent-gold text-2xl">
                <FiPhone />
              </div>
              <div>
                <h4 className="text-sm text-text-muted">Primary Phone Number</h4>
                <a href="tel:+919522205111" className="text-lg font-bold text-text-primary hover:underline">+91 9522205111</a>
              </div>
            </div>

            <div className="bg-bg-secondary p-6 rounded-2xl border border-[rgba(158,158,175,0.12)] flex items-center gap-4">
              <div className="p-3 bg-[rgba(46,204,113,0.08)] rounded-xl border border-[rgba(46,204,113,0.22)] text-success-green text-2xl">
                <FaWhatsapp />
              </div>
              <div>
                <h4 className="text-sm text-text-muted">WhatsApp Booking Support</h4>
                <a href="https://wa.me/919826157552" target="_blank" rel="noreferrer" className="text-lg font-bold text-text-primary hover:underline">+91 9826157552</a>
              </div>
            </div>

            <div className="bg-bg-secondary p-6 rounded-2xl border border-[rgba(158,158,175,0.12)] flex items-center gap-4">
              <div className="p-3 bg-[rgba(255,184,0,0.08)] rounded-xl border border-[rgba(255,184,0,0.22)] text-accent-gold text-2xl">
                <FiMail />
              </div>
              <div>
                <h4 className="text-sm text-text-muted">Email Assistance</h4>
                <a href="mailto:taxiinujjain.in@gmail.com" className="text-lg font-bold text-text-primary hover:underline">taxiinujjain.in@gmail.com</a>
              </div>
            </div>

            <div className="bg-bg-secondary p-6 rounded-2xl border border-[rgba(158,158,175,0.12)] flex gap-4 items-start">
              <div className="p-3 bg-[rgba(255,184,0,0.08)] rounded-xl border border-[rgba(255,184,0,0.22)] text-accent-gold text-2xl mt-1">
                <FiMapPin />
              </div>
              <div>
                <h4 className="text-sm text-text-muted mb-1">Office Address</h4>
                <p className="text-text-primary leading-relaxed text-sm">
                  67B, Atharva Vihar Colony, Ujjain-Indore Road, near Hotel Shanti Palace, Nanakheda, Ujjain — 456010
                </p>
              </div>
            </div>

            <iframe
              title="Taxi in Ujjain Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.331295982736!2d75.7681!3d23.1485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA4JzU0LjYiTiA3NcKwNDYnMDguMiJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%" 
              height="250" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          {/* RIGHT: Quick Booking Form */}
          <div className="bg-bg-secondary p-8 rounded-3xl border border-[rgba(158,158,175,0.12)]">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6 border-b border-[rgba(158,158,175,0.2)] pb-3">
              Quick Booking Request
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 font-body">
              <div>
                <label className="text-xs text-text-muted uppercase block mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  placeholder="E.g. Jatin Jain"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-text-muted uppercase block mb-1">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile"
                  required
                  placeholder="E.g. +91 98261XXXXX"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-text-muted uppercase block mb-1">Pickup Location</label>
                  <input 
                    type="text" 
                    id="pickup"
                    required
                    placeholder="E.g. Indore Airport"
                    value={formData.pickup}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-muted uppercase block mb-1">Drop Location</label>
                  <input 
                    type="text" 
                    id="drop"
                    required
                    placeholder="E.g. Mahakal Mandir"
                    value={formData.drop}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-text-muted uppercase block mb-1">Car Type</label>
                  <select 
                    id="carType"
                    required
                    value={formData.carType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  >
                    <option value="" disabled>Car Type</option>
                    <option value="Dzire">Dzire</option>
                    <option value="Ertiga">Ertiga</option>
                    <option value="Innova Crysta">Innova Crysta</option>
                    <option value="Innova Hycross">Innova Hycross</option>
                    <option value="14 Seater Tempo Traveler">14 Seater Tempo Traveler</option>
                    <option value="17 Seater Tempo Traveler">17 Seater Tempo Traveler</option>
                    <option value="20 Seater Tempo Traveler">20 Seater Tempo Traveler</option>
                    <option value="26 Seater Tempo Traveler">26 Seater Tempo Traveler</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-text-muted uppercase block mb-1">Travel Date</label>
                  <input 
                    type="date" 
                    id="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <Button variant="wa-full" type="submit" className="justify-center !mt-6">
                Send Booking Request via WhatsApp
              </Button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
};
export default Contact;
