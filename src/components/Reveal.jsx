import React from 'react';
import { useInView } from '../hooks/useInView';

/**
 * Reveal — wraps children in a fade-up / fade-in entrance animation
 * triggered when the element scrolls into view.
 *
 * Props:
 *   variant  — 'fade-up' | 'fade-in' | 'scale-in' | 'slide-right'  (default 'fade-up')
 *   delay    — CSS delay string e.g. '0ms', '100ms', '200ms'         (default '0ms')
 *   duration — CSS duration string e.g. '500ms', '600ms'             (default '550ms')
 *   className — extra classes forwarded to the wrapper div
 *   threshold — IntersectionObserver threshold                        (default 0.1)
 */
export default function Reveal({
  children,
  variant = 'fade-up',
  delay = '0ms',
  duration = '550ms',
  className = '',
  threshold = 0.1,
}) {
  const { ref, inView } = useInView({ threshold, rootMargin: '0px 0px -30px 0px' });

  const baseHidden = {
    'fade-up':    'opacity-0 translate-y-5',
    'fade-in':    'opacity-0',
    'scale-in':   'opacity-0 scale-[0.97]',
    'slide-right':'opacity-0 -translate-x-6',
  };

  const baseVisible = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ease-out will-change-[opacity,transform] ${
        inView ? baseVisible : (baseHidden[variant] ?? 'opacity-0')
      } ${className}`}
      style={{
        transitionDuration: duration,
        transitionDelay: inView ? delay : '0ms',
      }}
    >
      {children}
    </div>
  );
}
