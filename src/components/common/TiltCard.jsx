import React, { useRef } from 'react';
import gsap from 'gsap';

export const TiltCard = ({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  ...props
}) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const isTouch = window.matchMedia('(hover: none)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || isReducedMotion) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.4,
    });

    if (glare && glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      gsap.to(glareRef.current, {
        opacity: 0.18,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)`,
        duration: 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power3.out',
      duration: 0.6,
    });

    if (glare && glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0,
        duration: 0.4,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu transition-shadow duration-300 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 transition-opacity"
          style={{ transform: 'translateZ(1px)' }}
        />
      )}
    </div>
  );
};
