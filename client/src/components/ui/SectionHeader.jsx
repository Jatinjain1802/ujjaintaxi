import React from 'react';

/**
 * Standard section header.
 * 
 * LEARNING TIP (Destructuring Props):
 * Instead of writing `props` and then referencing `props.title`, we write `({ title, subtitle })`.
 * This is ES6 destructuring, which is a cleaner and modern JavaScript syntax standard in React!
 */
export const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gold-gradient relative inline-block pb-4 mb-3">
        {title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-gold-gradient rounded-full shadow-[0_0_10px_rgba(255,184,0,0.4)]"></span>
      </h2>
      {subtitle && (
        <p className="text-text-muted text-[1.15rem] max-w-[600px] mx-auto mt-2 font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionHeader;
