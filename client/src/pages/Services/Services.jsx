import React, { useState } from 'react';
import SubHero from '../../components/layout/SubHero';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import { fleetData } from '../../data/fleet';
import { getWhatsAppLink, generateBookingMessage } from '../../utils/whatsapp';

export const Services = () => {
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

  const handleEstimateRequest = (e) => {
    e.preventDefault();
    const message = generateBookingMessage({
      name: formData.name,
      mobile: formData.mobile,
      pickup: formData.pickup,
      drop: formData.drop,
      date: formData.date,
      carType: `${formData.carType} (ESTIMATE INQUIRY)`
    });
    window.open(getWhatsAppLink(message), '_blank');
  };

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
      {/* sub-hero Banner */}
      <SubHero title="Taxi Services & Tariff" breadcrumb="Our Services" />

      {/* Main Section */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 space-y-24">
        
        {/* CORE SERVICES GRID */}
        <section className="space-y-12">
          <SectionHeader 
            title="Our Cab Packages in Ujjain" 
            subtitle="We supply a diverse array of professional transport models tailored for travelers."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <div key={idx} className="bg-bg-secondary p-8 rounded-2xl border border-[rgba(158,158,175,0.12)] flex flex-col justify-between hover:border-accent-gold transition-colors duration-300">
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
            ))}
          </div>
        </section>

        {/* FLEET SECTION */}
        <section id="taxi" className="border-t border-[rgba(158,158,175,0.12)] pt-20 space-y-12">
          <SectionHeader 
            title="Our Premium Fleet & Tariff Directory" 
            subtitle="Transparent rates, verified vehicle quality, and completely comfortable AC environments."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((car) => (
              <div 
                key={car.id} 
                className={`bg-bg-secondary rounded-3xl p-6 border border-[rgba(158,158,175,0.12)] flex flex-col justify-between transition-all duration-400 relative overflow-hidden hover:-translate-y-2 hover:border-accent-gold ${
                  car.popular ? 'border-accent-gold hover:shadow-royal hover:glow-gold' : ''
                }`}
              >
                {car.popular && (
                  <span className="absolute top-4 right-4 bg-gold-gradient text-bg-primary font-bold text-[0.7rem] px-3 py-1 rounded-full uppercase tracking-wider">
                    ⭐ Most Booked
                  </span>
                )}
                <div>
                  <img src={car.img} alt={car.model} width="360" height="192" loading="lazy" className="w-full h-48 object-contain mb-6 hover:scale-105 transition-transform" />
                  <span className="text-xs font-semibold text-text-muted tracking-wider uppercase block mb-1">{car.name}</span>
                  <h3 className="text-2xl font-heading font-semibold text-text-primary mb-2">{car.model}</h3>
                  <div className="text-3xl font-heading text-accent-gold mb-6">
                    {typeof car.price === 'number' ? (
                      <>
                        ₹{car.price}
                        <span className="text-sm font-body text-text-muted ml-1">/km</span>
                      </>
                    ) : (
                      car.price
                    )}
                  </div>
                  <ul className="space-y-2 mb-8 text-sm text-text-muted font-body">
                    {car.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <Button variant="outline-gold" href="#quick-booking" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quick-booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Get Estimate
                  </Button>
                  <Button variant="wa-full" href={getWhatsAppLink(`Book ${car.model}`)} className="justify-center">
                    WhatsApp Book
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ESTIMATION REQUEST FORM */}
        <section id="quick-booking" className="border-t border-[rgba(158,158,175,0.12)] pt-20 space-y-12">
          <SectionHeader 
            title="Request a Fare Estimate" 
            subtitle="Submit your travel details and we will respond instantly via WhatsApp with the exact total fare calculation."
          />
          
          <div className="flex justify-center">
            <div className="bg-bg-secondary p-8 rounded-3xl border border-[rgba(158,158,175,0.12)] w-full max-w-[600px]">
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-6 border-b border-[rgba(158,158,175,0.2)] pb-2 text-center">
                Estimate Inquiry Form
              </h3>
              <form onSubmit={handleEstimateRequest} className="space-y-4 font-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  />
                  <input 
                    type="tel" 
                    id="mobile"
                    required
                    placeholder="Mobile Number" 
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    id="pickup"
                    required
                    placeholder="Pickup Location" 
                    value={formData.pickup}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  />
                  <input 
                    type="text" 
                    id="drop"
                    required
                    placeholder="Drop Location" 
                    value={formData.drop}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    id="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  />
                  <select 
                    id="carType"
                    required
                    value={formData.carType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-slate-200 rounded-xl text-text-primary outline-none focus:border-accent-gold focus:bg-white transition-all duration-300 text-sm"
                  >
                    <option value="" disabled>Select Car</option>
                    <option value="Dzire">Maruti Dzire (Economy)</option>
                    <option value="Ertiga">Maruti Ertiga (Standard)</option>
                    <option value="Innova Crysta">Toyota Innova Crysta (Business)</option>
                    <option value="Innova Hycross">Toyota Innova Hycross (Premium)</option>
                    <option value="14 Seater Tempo">14 Seater Tempo Traveller</option>
                    <option value="Large Tempo">17/20/26 Seater Tempo Traveller</option>
                  </select>
                </div>
                
                <Button variant="wa-full" type="submit" className="justify-center !mt-6">
                  🚖 Send Inquiry via WhatsApp
                </Button>
              </form>
              <p className="text-center text-xs text-text-muted mt-4">✅ Free Cancellation | ✅ Safe verified travel</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
export default Services;
