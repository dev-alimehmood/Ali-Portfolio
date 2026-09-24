import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setScrollPercent(Math.round(scrolled));
      if (winScroll > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  // Calculate SVG Circle circumference for percentage indicator
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-[95] flex items-center gap-2.5 select-none animate-fade-in">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#110D16]/90 backdrop-blur-xl border border-purple-500/40 text-purple-300 hover:text-white shadow-2xl shadow-purple-950/80 hover:shadow-purple-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
      >
        {/* Ambient Glowing Purple Orbs */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 opacity-60 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none" />
        
        {/* Radial Pulse Ring */}
        <span className="absolute -inset-0.5 rounded-full bg-purple-500/20 group-hover:bg-purple-500/40 animate-pulse pointer-events-none" />

        {/* SVG Scroll Progress Circle ring indicator */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 52 52">
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="stroke-purple-950/60"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="stroke-purple-400 transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Glossy Top Glass Hairline */}
        <span className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple-300/60 to-transparent pointer-events-none" />

        {/* Arrow Icon */}
        <ArrowUp className="w-5 h-5 relative z-10 text-white group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
};
