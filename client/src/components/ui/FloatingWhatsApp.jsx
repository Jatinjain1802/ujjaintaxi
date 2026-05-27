import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { getWhatsAppLink } from '../../utils/whatsapp';

/**
 * Pulsing sticky WhatsApp FAB.
 * 
 * LEARNING TIP (State-free functional components):
 * Some components are entirely static or visual, meaning they don't hold any React state (no useState).
 * These are simple presentation wrappers that only render HTML based on static strings or static helpers.
 */
export const FloatingWhatsApp = () => {
  const waURL = getWhatsAppLink("Hi, I want to book a taxi in Ujjain");

  return (
    <a
      href={waURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] bg-success-green rounded-full flex justify-center items-center z-[9999] shadow-[0_8px_30px_rgba(46,204,113,0.4)] animate-wa-pulse"
      aria-label="Book via WhatsApp"
    >
      <FiMessageCircle className="text-white text-3xl" />
    </a>
  );
};
export default FloatingWhatsApp;
