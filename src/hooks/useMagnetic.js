import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useMagnetic = (strength = 0.35) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch devices or reduced motion
    const isTouch = window.matchMedia('(hover: none)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || isReducedMotion) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power2.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power2.out" });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      xTo(deltaX);
      yTo(deltaY);
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(el, { clearProps: "transform" });
        }
      });
    };


    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
};

