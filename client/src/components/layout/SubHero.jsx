import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable premium Subpage Hero Banner.
 */
export const SubHero = ({ title, breadcrumb }) => {
  return (
    <header className="relative min-h-[34vh] md:min-h-[38vh] bg-[radial-gradient(circle_at_12%_18%,#1E2A44_0%,#111827_55%,#0F172A_100%)] flex items-center justify-center pt-[110px] pb-14 overflow-hidden text-center border-b border-[rgba(201,151,0,0.30)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,151,0,0.18),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_55%)] pointer-events-none" />

      <div className="relative z-10 space-y-5 px-6">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gold-gradient tracking-[0.01em] leading-tight">
          {title}
        </h1>
        <div className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(201,151,0,0.28)] bg-[rgba(15,23,42,0.45)] px-4 py-2 text-xs md:text-sm text-slate-200/90 font-body backdrop-blur-sm">
          <Link to="/" className="hover:text-[var(--color-accent-gold)] transition-colors">Home</Link>
          <span className="text-[var(--color-accent-gold)]/80">/</span>
          <span className="text-[var(--color-accent-gold)] font-semibold">{breadcrumb}</span>
        </div>
      </div>
    </header>
  );
};

export default SubHero;
