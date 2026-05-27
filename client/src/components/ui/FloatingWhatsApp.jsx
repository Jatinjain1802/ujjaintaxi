import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '../../utils/whatsapp';

/**
 * Pulsing sticky WhatsApp FAB.
 * 
 * LEARNING TIP (State-free functional components):
 * Some components are entirely static or visual, meaning they don't hold any React state (no useState).
 * These are simple presentation wrappers that only render HTML based on static strings or static helpers.
 */
export const FloatingWhatsApp = () => {
  const waChatURL = getWhatsAppLink('Hi, I want to book a taxi in Ujjain');
  const waCallURL = getWhatsAppLink('Hi, please call me for taxi booking support.');

  return (
    <>
      <a
        href="tel:+919522205111"
        className="fixed bottom-[30px] left-[20px] md:left-[30px] h-[54px] px-4 bg-[var(--color-accent-saffron)] text-white rounded-full inline-flex items-center gap-2 z-[9999] shadow-[0_10px_24px_rgba(232,93,4,0.35)] hover:brightness-105 transition-all duration-300"
        aria-label="Call Now"
      >
        <FiPhoneCall className="text-xl" />
        <span className="text-sm font-semibold tracking-wide">Call</span>
      </a>

      <div className="fixed bottom-[30px] right-[20px] md:right-[30px] z-[9999] flex flex-col items-end gap-3">

        <a
          href={waChatURL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[60px] h-[60px] bg-success-green rounded-full flex justify-center items-center shadow-[0_8px_30px_rgba(46,204,113,0.4)] animate-wa-pulse"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-[2.05rem]" />
        </a>
      </div>
    </>
  );
};
export default FloatingWhatsApp;
