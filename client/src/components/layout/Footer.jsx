import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Taxis', path: '/services', hash: '#taxi' },
    { name: 'Our Tours', path: '/tours' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  const destinations = [
    { name: 'Mahakaleshwar Jyotirlinga', path: '/places/mahakaleshwar' },
    { name: 'Mahakal Lok', path: '/places/mahakal-lok' },
    { name: 'Ram Ghat / Shipra', path: '/places/ram-ghat' },
    { name: 'Harsiddhi Mata', path: '/places/harsiddhi-mata' },
    { name: 'Bada Ganesh', path: '/places/bada-ganesh' },
    { name: 'ISKCON Temple', path: '/places/iskcon-ujjain' },
    { name: 'Mangalnath Temple', path: '/places/mangalnath' },
    { name: 'Kal Bhairav Temple', path: '/places/kal-bhairav' }
  ];

  const handleLinkClick = (link) => {
    if (link.hash) {
      setTimeout(() => {
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-bg-secondary border-t border-[rgba(255,184,0,0.22)] text-text-muted font-body">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* BRAND COLUMN */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3 font-heading font-bold text-2xl text-gold-gradient">
            <img 
              src="/Images/logo.webp" 
              alt="Taxi In Ujjain Logo" 
              className="h-11 w-auto drop-shadow-[0_0_8px_rgba(255,184,0,0.2)]"
            />
            <span>Taxi In Ujjain</span>
          </Link>
          <p className="text-sm leading-relaxed mt-2">
            Ujjain's most trusted, reliable, and premium taxi booking service provider since 2001. Making your Mahakal Yatra and general travel safe, comfortable, and memorable.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-heading font-semibold text-white text-lg tracking-wider mb-6 border-b border-[rgba(158,158,175,0.12)] pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link 
                  to={link.path}
                  onClick={() => handleLinkClick(link)}
                  className="text-sm transition-all duration-300 hover:text-accent-gold hover:translate-x-1 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* DESTINATIONS */}
        <div>
          <h4 className="font-heading font-semibold text-white text-lg tracking-wider mb-6 border-b border-[rgba(158,158,175,0.12)] pb-2 inline-block">
            Ujjain Local Tours
          </h4>
          <ul className="grid grid-cols-1 gap-3 text-sm">
            {destinations.map((dest, idx) => (
              <li key={idx}>
                <Link 
                  to={dest.path} 
                  className="hover:text-accent-gold transition-colors duration-200 block"
                >
                  {dest.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="font-heading font-semibold text-white text-lg tracking-wider mb-6 border-b border-[rgba(158,158,175,0.12)] pb-2 inline-block">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3">
              <FiPhone className="text-accent-gold min-w-[16px]" />
              <a href="tel:+919522205111" className="hover:text-accent-gold transition-colors">
                +91 9522205111
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-success-green min-w-[16px]" />
              <a href="https://wa.me/919826157552" target="_blank" rel="noreferrer" className="hover:text-accent-gold transition-colors">
                +91 9826157552 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="text-accent-gold min-w-[16px]" />
              <a href="mailto:taxiinujjain.in@gmail.com" className="hover:text-accent-gold transition-colors">
                taxiinujjain.in@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <FiMapPin className="text-accent-gold min-w-[16px] mt-1" />
              <span>
                67B, Atharva Vihar Colony, Ujjain-Indore Road, near Hotel Shanti Palace, Nanakheda, Ujjain — 456010
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-[rgba(158,158,175,0.12)] py-6 text-center text-xs">
        <p className="max-w-[1400px] mx-auto px-6">
          &copy; {new Date().getFullYear()} Taxi In Ujjain. All rights reserved. | Powered by Heerova Solution
        </p>
      </div>

    </footer>
  );
};
export default Footer;
