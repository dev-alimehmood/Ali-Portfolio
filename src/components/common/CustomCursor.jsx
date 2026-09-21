import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop) & non-reduced-motion
    const isTouch = window.matchMedia('(hover: none)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || isReducedMotion) return;

    document.body.classList.add('custom-cursor-active');
    setIsVisible(true);

    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorFollower = document.getElementById('custom-cursor-follower');

    if (!cursorDot || !cursorFollower) return;

    const onMouseMove = (e) => {
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: 'power3.out'
      });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (e.target.closest('a, button, [role="button"]')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Dot */}
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ backgroundColor: 'var(--color-primary-bright)' }}
      />

      {/* Smooth Outer Ring / Capsule */}
      <div
        id="custom-cursor-follower"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 flex items-center justify-center border text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm ${
          isHovered
            ? cursorText
              ? 'w-16 h-16 bg-[var(--color-primary)] text-white border-transparent scale-100 shadow-lg'
              : 'w-10 h-10 border-[var(--color-primary-bright)] bg-[var(--color-primary-glow)] scale-110'
            : 'w-8 h-8 border-[var(--color-border)] bg-transparent scale-100'
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </>
  );
};
