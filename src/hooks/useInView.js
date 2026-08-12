import { useEffect, useRef, useState } from 'react';

/**
 * useInView — triggers when an element enters the viewport.
 * Respects prefers-reduced-motion: if the user prefers reduced motion,
 * the element is considered always visible so no animation plays.
 *
 * @param {Object} options
 * @param {number}  options.threshold  - 0–1, portion of element visible before trigger (default 0.12)
 * @param {string}  options.rootMargin - IntersectionObserver rootMargin (default '0px 0px -40px 0px')
 * @param {boolean} options.once       - only trigger once, do not re-animate on re-entry (default true)
 * @returns {{ ref: React.Ref, inView: boolean }}
 */
export function useInView({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion — skip animation entirely
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
