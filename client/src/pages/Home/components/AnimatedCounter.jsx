import React, { useState, useEffect, useRef } from 'react';

/**
 * Animated counter that increments smoothly from 0 to target when visible.
 * 
 * LEARNING TIP (IntersectionObserver & Animation in React):
 * Instead of writing raw JS that queries DOM elements, we use a React `useRef` to reference the specific element
 * and trigger the animation only when `IntersectionObserver` sees the counter enter the viewport.
 */
export const AnimatedCounter = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className="counter font-numbers text-[3rem] font-bold text-accent-gold text-gold-gradient">
      {count.toLocaleString()}
    </span>
  );
};
export default AnimatedCounter;
