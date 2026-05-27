import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Wraps any element or group of elements to apply premium, high-performance scroll-driven animations.
 * 
 * LEARNING TIP (High-Performance Animations in React):
 * 1. IntersectionObserver is a native browser API that lets us watch when an element enters the screen.
 * 2. It is extremely performant because the browser optimizes it, avoiding scroll event-listener bottlenecks.
 * 3. We use local state `isVisible` to toggle CSS classes, letting the GPU handle the transition using CSS transitions!
 */
export const ScrollReveal = ({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  duration = 800,   // Transition duration in ms
  delay = 0,        // Start delay in ms
  threshold = 0.1,  // Trigger when 10% of element is visible
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it reveals, we can stop observing to preserve memory and keep it visible
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        // Trigger slightly before the element fully enters to make the animation feel natural
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  // Determine starting translation based on direction
  const getDirectionClass = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0';
    
    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-12';
      case 'down':
        return 'opacity-0 -translate-y-12';
      case 'left':
        return 'opacity-0 translate-x-12';
      case 'right':
        return 'opacity-0 -translate-x-12';
      case 'none':
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all cubic-bezier(0.2, 0.8, 0.2, 1) ease-out transform ${getDirectionClass()}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
