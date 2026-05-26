import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaStar } from 'react-icons/fa';

import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import BookingForm from './components/BookingForm';
import AnimatedCounter from './components/AnimatedCounter';

import { fleetData } from '../../data/fleet';
import { toursData } from '../../data/tours';
import { placesData } from '../../data/places';
import { testimonialsData } from '../../data/testimonials';
import { termsData } from '../../data/terms';
import { getWhatsAppLink, generateBookingMessage } from '../../utils/whatsapp';

export const Home = () => {
  // Secondary Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    mobile: '',
    pickup: '',
    drop: '',
    carType: '',
    date: '',
  });

  const handleContactChange = (e) => {
    const { id, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const message = generateBookingMessage({
      name: contactForm.name,
      mobile: contactForm.mobile,
      pickup: contactForm.pickup,
      drop: contactForm.drop,
      date: contactForm.date,
      carType: `${contactForm.carType} (QUICK BOOKING)`,
    });
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="font-body select-none">
      
      {/* 1. HERO SECTION */}
      <header className="relative min-h-screen bg-[radial-gradient(circle_at_10%_20%,#13131C_0%,#0A0A0F_80%)] flex items-center pt-[120px] pb-16 overflow-hidden">
        {/* Starry Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,184,0,0.08)_1.2px,transparent_1.2px),radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.16)_1.2px,transparent_1.2px),radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.14)_1.5px,transparent_1.5px)] bg-[size:28px_28px,100%_100%] opacity-65 pointer-events-none animate-starry-twinkle" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* HERO LEFT TEXT */}
          <div className="flex-1 max-w-[620px]">
            <span className="inline-block text-text-gold border border-[rgba(255,184,0,0.22)] px-[18px] py-1.5 rounded-full text-xs font-medium tracking-widest mb-8 bg-[rgba(255,184,0,0.06)] shadow-[inset_0_0_15px_rgba(255,184,0,0.1)]">
              ✦ Ujjain's Most Trusted Since 2001
            </span>
            <h1 className="font-hero text-[3.8rem] md:text-[4.8rem] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFEFCF] to-accent-gold mb-6">
              Mahakal Darshan<br />Ki Sahi Sawari
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-10 tracking-wide">
              Local • Outstation • Airport • Pilgrimage Tours
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" href="tel:+919522205111">
                <FiPhone /> Call Now — 9522205111
              </Button>
              <Button variant="wa-ghost" href={getWhatsAppLink("Namaste, I want to inquire about Ujjain Taxi booking.")}>
                <FaWhatsapp /> WhatsApp Karein
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm text-text-muted border-t border-[rgba(158,158,175,0.12)] pt-6">
              <span>⭐ 4.9 Rating</span>
              <span>284 Reviews</span>
              <span>24x7 Available</span>
              <span>AC Cabs</span>
            </div>
          </div>

          {/* HERO RIGHT FORM */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <BookingForm />
          </div>

        </div>
      </header>

      {/* 2. TRUST BAR */}
      <section className="bg-bg-secondary py-12 border-t border-b border-[rgba(255,184,0,0.22)] shadow-[inset_0_0_15px_rgba(255,184,0,0.1)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-[rgba(255,184,0,0.22)]">
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

      {/* 3. SERVICES SECTION */}
      <section className="bg-bg-primary py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader 
            title="Our Taxi Services in Ujjain" 
            subtitle="Reliable rides and holy pilgrimage packages designed with convenience and transparent pricing in mind."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-secondary p-10 rounded-2xl border border-[rgba(158,158,175,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-accent-gold hover:shadow-royal hover:glow-gold">
              <div className="text-4xl mb-4 text-accent-gold">✈️</div>
              <h3 className="text-xl font-semibold mb-3 font-heading text-white">Indore Airport Drop</h3>
              <p className="text-sm text-text-muted mb-6 leading-relaxed">Seamless Indore airport transfers at ₹1,560 flat rate.</p>
              <a href={getWhatsAppLink("I need a cab for Indore Airport Drop")} className="text-accent-saffron hover:text-accent-gold font-semibold flex items-center gap-1">
                Book Now <FiArrowRight />
              </a>
            </div>
            <div className="bg-bg-secondary p-10 rounded-2xl border border-[rgba(158,158,175,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-accent-gold hover:shadow-royal hover:glow-gold">
              <div className="text-4xl mb-4 text-accent-gold">🕉️</div>
              <h3 className="text-xl font-semibold mb-3 font-heading text-white">Ujjain Darshan</h3>
              <p className="text-sm text-text-muted mb-6 leading-relaxed">Complete city tour of Mahakal, Harsiddhi, and Kaal Bhairav.</p>
              <a href={getWhatsAppLink("I need a cab for Ujjain Darshan")} className="text-accent-saffron hover:text-accent-gold font-semibold flex items-center gap-1">
                Book Now <FiArrowRight />
              </a>
            </div>
            <div className="bg-bg-secondary p-10 rounded-2xl border border-[rgba(158,158,175,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-accent-gold hover:shadow-royal hover:glow-gold">
              <div className="text-4xl mb-4 text-accent-gold">🚘</div>
              <h3 className="text-xl font-semibold mb-3 font-heading text-white">Local & Outstation</h3>
              <p className="text-sm text-text-muted mb-6 leading-relaxed">Comfortable outstation rides to Omkareshwar, Bhopal, Sanchi.</p>
              <a href={getWhatsAppLink("I need a local or outstation cab")} className="text-accent-saffron hover:text-accent-gold font-semibold flex items-center gap-1">
                Book Now <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLEET SECTION */}
      <section id="taxi" className="bg-bg-secondary py-24 px-6 md:px-12 border-t border-b border-[rgba(158,158,175,0.12)]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader title="Choose Your Ride" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((car) => (
              <div 
                key={car.id} 
                className={`bg-bg-primary rounded-3xl p-6 border border-[rgba(158,158,175,0.12)] flex flex-col justify-between transition-all duration-400 relative overflow-hidden hover:-translate-y-2 hover:border-accent-gold ${
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
                  <h3 className="text-2xl font-heading font-semibold text-white mb-2">{car.model}</h3>
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
                  <Button variant="outline-gold" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    Get Estimate
                  </Button>
                  <Button variant="wa-full" href={getWhatsAppLink(`Book ${car.model}`)} className="justify-center">
                    WhatsApp Book
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TOUR PACKAGES SECTION */}
      <section className="bg-bg-primary py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader title="Popular Yatra Packages from Ujjain" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {toursData.map((tour) => (
              <div key={tour.id} className="bg-bg-secondary rounded-2xl overflow-hidden border border-[rgba(158,158,175,0.12)] flex flex-col justify-between hover:border-accent-gold transition-colors duration-300">
                <img src={tour.img} alt={tour.title} width="290" height="192" loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-[rgba(255,87,34,0.12)] text-accent-saffron text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                      {tour.category}
                    </span>
                    <h3 className="text-lg font-heading font-semibold text-white mb-1">{tour.title}</h3>
                    <p className="text-xs text-text-muted tracking-wide mb-4">{tour.route}</p>
                  </div>
                  <div>
                    <div className="text-xl font-heading text-accent-gold font-bold mb-4">{tour.price}</div>
                    <a href={getWhatsAppLink(tour.waText)} className="text-accent-saffron hover:text-accent-gold font-semibold flex items-center gap-1 text-sm">
                      Book This Package <FiArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT US SECTION */}
      <section className="bg-bg-secondary py-24 px-6 md:px-12 border-t border-b border-[rgba(158,158,175,0.12)]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12">
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
          <div className="flex-1">
            <h2 className="text-4xl font-heading font-semibold text-gold-gradient mb-6 pb-2 border-b border-[rgba(158,158,175,0.12)]">
              Ujjain Ka Apna Taxi Wala — Since 2001
            </h2>
            <p className="text-text-muted text-[1.05rem] leading-relaxed mb-6 font-body">
              We are the most trusted, reliable, and premium taxi booking service provider in Ujjain. Our goal is to make your Mahakal Yatra and general travel safe, comfortable, and memorable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-sm font-semibold text-white flex items-center gap-2">✔️ Sanitized & clean vehicles</div>
              <div className="text-sm font-semibold text-white flex items-center gap-2">✔️ Polite, local, and professional drivers</div>
              <div className="text-sm font-semibold text-white flex items-center gap-2">✔️ 24/7 client support</div>
              <div className="text-sm font-semibold text-white flex items-center gap-2">✔️ Transparent billing with zero hidden costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SACRED PLACES SECTION */}
      <section className="bg-bg-primary py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader 
            title="Ujjain Ke Pavitra Sthal" 
            subtitle="Explore the Sacred City with our trusted drivers"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {placesData.map((place) => (
              <div key={place.id} className="bg-bg-secondary rounded-2xl overflow-hidden border border-[rgba(158,158,175,0.12)] flex flex-col justify-between hover:border-accent-gold transition-colors duration-300">
                <Link to={`/places/${place.slug}`}>
                  <img src={place.img} alt={place.name} width="290" height="160" loading="lazy" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="text-sm font-heading font-semibold text-white hover:text-accent-gold transition-colors">
                      {place.name}
                    </h4>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <a href={getWhatsAppLink(place.waText)} className="text-xs text-accent-saffron hover:text-accent-gold font-semibold inline-block">
                    Book Taxi →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-bg-secondary p-8 rounded-2xl border border-[rgba(158,158,175,0.12)] max-w-[600px] mx-auto">
            <p className="text-sm text-text-muted mb-4">Planning a darshan tour? Call us and we'll arrange everything.</p>
            <Button variant="primary" href={getWhatsAppLink("Plan My Ujjain Tour")}>
              Plan My Ujjain Tour
            </Button>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="bg-bg-secondary py-24 px-6 md:px-12 border-t border-b border-[rgba(158,158,175,0.12)]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader title="Pujari Ji & Yatri Reviews" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {testimonialsData.map((test, idx) => (
              <div key={idx} className="bg-bg-primary rounded-2xl p-6 border border-[rgba(158,158,175,0.12)] flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-accent-gold text-sm mb-4">
                    {[...Array(test.stars)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="text-sm italic text-text-muted leading-relaxed mb-6">"{test.quote}"</p>
                </div>
                <div className="border-t border-[rgba(158,158,175,0.12)] pt-4 text-xs">
                  <h4 className="font-semibold text-white">{test.reviewer}</h4>
                  <p className="text-text-muted mt-1">{test.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="https://google.com" target="_blank" rel="noreferrer" className="text-accent-saffron hover:text-accent-gold font-semibold transition-colors duration-200 inline-block text-sm">
              See All 284 Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* 9. TERMS & CONDITIONS */}
      <section className="bg-bg-primary py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader title="Terms & Conditions — Please Read Before Booking" />
          <div className="bg-bg-secondary rounded-3xl p-8 border border-[rgba(255,184,0,0.22)] shadow-royal glow-gold">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {termsData.map((term) => (
                <div key={term.id} className="flex gap-4 items-start font-body">
                  <span className="text-accent-gold font-numbers font-semibold text-sm leading-none bg-[rgba(255,184,0,0.08)] py-1 px-2.5 rounded-md border border-[rgba(255,184,0,0.22)]">
                    {term.id}
                  </span>
                  <p className="text-sm text-text-muted leading-relaxed">{term.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section className="bg-bg-secondary py-24 px-6 md:px-12 border-t border-[rgba(158,158,175,0.12)]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader title="Hamse Baat Karein" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* CONTACT INFO */}
            <div className="space-y-6">
              <div className="bg-bg-primary rounded-xl p-5 border border-[rgba(158,158,175,0.12)] text-sm flex gap-3 items-center">
                <span>📞 Call Us:</span>
                <a href="tel:+919522205111" className="text-accent-gold font-semibold hover:underline">+91 9522205111</a>
              </div>
              <div className="bg-bg-primary rounded-xl p-5 border border-[rgba(158,158,175,0.12)] text-sm flex gap-3 items-center">
                <span>📱 WhatsApp:</span>
                <a href="https://wa.me/919826157552" className="text-success-green font-semibold hover:underline">+91 9826157552</a>
              </div>
              <div className="bg-bg-primary rounded-xl p-5 border border-[rgba(158,158,175,0.12)] text-sm flex gap-3 items-center">
                <span>📧 Email:</span>
                <a href="mailto:taxiinujjain.in@gmail.com" className="text-accent-gold font-semibold hover:underline">taxiinujjain.in@gmail.com</a>
              </div>
              <div className="bg-bg-primary rounded-xl p-5 border border-[rgba(158,158,175,0.12)] text-sm leading-relaxed">
                📍 <strong>Address:</strong> <br />
                67B, Atharva Vihar Colony, Ujjain-Indore Road, near Hotel Shanti Palace, Nanakheda, Ujjain — 456010
              </div>
              <iframe
                title="Taxi in Ujjain Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.331295982736!2d75.7681!3d23.1485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA4JzU0LjYiTiA3NcKwNDYnMDguMiJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* QUICK CONTACT BOOKING FORM */}
            <div className="bg-bg-primary rounded-2xl p-8 border border-[rgba(158,158,175,0.12)] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-6 border-b border-[rgba(158,158,175,0.12)] pb-2">
                  Quick Booking Request
                </h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Your Name" 
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white outline-none focus:border-accent-gold transition-all duration-300"
                  />
                  <input 
                    type="tel" 
                    id="mobile"
                    required
                    placeholder="Mobile Number" 
                    value={contactForm.mobile}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white outline-none focus:border-accent-gold transition-all duration-300"
                  />
                  <input 
                    type="text" 
                    id="pickup"
                    required
                    placeholder="Pickup Location" 
                    value={contactForm.pickup}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white outline-none focus:border-accent-gold transition-all duration-300"
                  />
                  <input 
                    type="text" 
                    id="drop"
                    required
                    placeholder="Drop Location" 
                    value={contactForm.drop}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white outline-none focus:border-accent-gold transition-all duration-300"
                  />
                  <select 
                    id="carType"
                    required
                    value={contactForm.carType}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white outline-none focus:border-accent-gold transition-all duration-300"
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
                  <input 
                    type="date" 
                    id="date"
                    required
                    value={contactForm.date}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 bg-[rgba(10,10,15,0.7)] border border-[rgba(158,158,175,0.12)] rounded-xl text-white outline-none focus:border-accent-gold transition-all duration-300 color-scheme-dark"
                  />
                  <Button variant="wa-full" type="submit" className="justify-center mt-2">
                    Send Booking Request via WhatsApp
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
export default Home;
