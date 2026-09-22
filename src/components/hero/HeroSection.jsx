import React, { useEffect, useRef } from 'react';
import { HeroContent } from './HeroContent';
import { PortraitScene } from './PortraitScene';
import gsap from 'gsap';

export const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[80vh] pt-14 sm:pt-16 pb-10 md:py-20 flex flex-col justify-center overflow-hidden"
    >

      {/* Background Radial Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary-glow)] rounded-full blur-[160px] pointer-events-none opacity-30 dark:opacity-40" />

      <div className="portfolio-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

        {/* Left Column: Hero Editorial Typography (55% width area) */}
        <div className="lg:col-span-7">
          <HeroContent />
        </div>

        {/* Right Column: Interactive 2.5D Cinematic Portrait Experience (45% width area) */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <PortraitScene />
        </div>

      </div>
    </section>
  );
};
