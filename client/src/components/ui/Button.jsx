import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable premium Button component.
 * Supports React Router `Link`, native anchor tags `a`, and standard `button`.
 * 
 * LEARNING TIP (Props in React): 
 * Props let us pass custom configuration parameters to our components (like variant, href, onClick).
 * This allows us to reuse the same visual template for different behaviors and locations.
 */
export const Button = ({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  target,
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold rounded-full gap-2 transition-all duration-400 ease-out cursor-pointer hover:-translate-y-[3px]";
  
  const variants = {
    primary: "bg-saffron-gradient text-white shadow-[0_4px_20px_var(--color-accent-saffron-glow)] hover:shadow-[0_8px_25px_var(--color-accent-saffron-glow)] hover:shadow-saffron px-7 py-3 text-[0.95rem]",
    'wa-ghost': "bg-[rgba(46,204,113,0.08)] text-success-green border border-success-green hover:bg-success-green hover:text-white hover:shadow-[0_5px_20px_var(--color-success-green-glow)] px-7 py-3 text-[0.95rem]",
    'wa-full': "bg-success-green text-white w-full flex text-[1.05rem] shadow-[0_4px_15px_rgba(46,204,113,0.2)] hover:shadow-[0_8px_25px_var(--color-success-green-glow)] mb-3 px-7 py-3",
    'outline-gold': "bg-transparent text-accent-gold border border-accent-gold w-full hover:bg-[rgba(255,184,0,0.08)] hover:shadow-gold px-7 py-3",
  };

  const computedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={computedClass} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={computedClass} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={computedClass} {...props}>
      {children}
    </button>
  );
};
export default Button;
