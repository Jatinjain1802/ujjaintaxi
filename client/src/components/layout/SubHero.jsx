import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable premium Subpage Hero Banner.
 * Mimics the original 40vh sub-hero layout.
 * 
 * LEARNING TIP (Reusable Layouts):
 * Instead of duplicating the background gradient, overlay, and breadcrumb markup 
 * across 6 different page files, we encapsulate it into a single `<SubHero>` component.
 */
export const SubHero = ({ title, breadcrumb }) => {
  return (
    <header className="relative min-h-[40vh] bg-[radial-gradient(circle_at_10%_20%,#13131C_0%,#0A0A0F_80%)] flex items-center justify-center pt-[100px] pb-12 overflow-hidden text-center border-b border-[rgba(255,184,0,0.22)]">
      {/* Twinkling Starry Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,184,0,0.08)_1.2px,transparent_1.2px),radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.16)_1.2px,transparent_1.2px),radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.14)_1.5px,transparent_1.5px)] bg-[size:28px_28px,100%_100%] opacity-65 pointer-events-none animate-starry-twinkle" />
      
      <div className="relative z-10 space-y-4 px-6">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-gold-gradient tracking-wide">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-text-muted font-body">
          <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
          <span>➡️</span>
          <span className="text-accent-gold font-semibold">{breadcrumb}</span>
        </div>
      </div>
    </header>
  );
};
export default SubHero;
