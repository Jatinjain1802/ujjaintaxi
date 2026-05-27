import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMessageCircle } from 'react-icons/fi';
import Button from '../ui/Button';

/**
 * Sticky Glassmorphic Navbar with Responsive Mobile Navigation.
 * 
 * LEARNING TIP (Hooks used here):
 * 1. useState: Stores UI states (e.g. mobile menu open/closed, scrolled state).
 * 2. useEffect: Triggers side-effects (like listening to window scroll events).
 * 3. useLocation: React Router hook that gives us the current pathname. We use it 
 *    to highlight the active nav item and automatically close the mobile menu on page change.
 */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatically close mobile menu on page transition
  useEffect(() => {
    setIsMenuOpen(false);
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Taxis', path: '/services', hash: '#taxi' },
    { name: 'Our Tours', path: '/tours' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
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
    <nav className={`fixed top-0 left-0 w-full z-[1000] border-b border-[rgba(255,184,0,0.18)] backdrop-blur-md transition-all duration-400 ${
      isScrolled ? 'bg-bg-primary shadow-royal py-3' : 'bg-[rgba(252,252,253,0.82)] py-5'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 font-heading font-bold text-2xl text-gold-gradient">
          <img 
            src="/Images/logo.webp" 
            alt="Taxi In Ujjain Logo" 
            width="57"
            height="44"
            className="h-11 w-auto drop-shadow-[0_0_8px_rgba(255,184,0,0.2)]"
          />
          <span>Taxi In Ujjain</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link 
                to={link.path}
                onClick={() => handleLinkClick(link)}
                className={`relative font-medium text-[0.95rem] tracking-wider py-1 transition-all duration-300 hover:text-accent-gold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-gradient after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === link.path && !link.hash ? 'text-accent-gold after:w-full' : 'text-text-muted'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT CTA BUTTONS (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="primary" href="tel:+919522205111" className="!py-2.5 !px-5 text-sm">
            <FiPhone /> Call Now
          </Button>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <div className="flex lg:hidden items-center gap-4">
          <a href="tel:+919522205111" className="text-accent-gold p-2 border border-accent-gold rounded-full hover:bg-[rgba(255,184,0,0.08)]">
            <FiPhone size={18} />
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-accent-gold focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-bg-primary/95 backdrop-blur-lg border-t border-[rgba(158,158,175,0.12)] transition-all duration-500 transform ${
        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } lg:hidden z-[999]`}>
        <ul className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link 
                to={link.path}
                onClick={() => {
                  handleLinkClick(link);
                  setIsMenuOpen(false);
                }}
                className={`text-xl font-medium tracking-widest transition-colors hover:text-accent-gold ${
                  location.pathname === link.path && !link.hash ? 'text-accent-gold' : 'text-text-muted'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="w-full max-w-[280px] mt-4">
            <Button variant="wa-ghost" href="https://wa.me/919826157552" className="w-full flex items-center justify-center gap-2">
              <FiMessageCircle /> WhatsApp Karein
            </Button>
          </li>
        </ul>
      </div>

    </nav>
  );
};
export default Navbar;
