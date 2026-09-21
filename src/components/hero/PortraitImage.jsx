import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const PortraitImage = ({
  parallaxOffset = { x: 0, y: 0, rotateX: 0, rotateY: 0 },
  isHovered = false,
  imageSrc = '/avatar.jpg',
}) => {
  return (
    <div
      className="relative z-20 w-[78%] sm:w-[82%] h-[84%] sm:h-[88%] rounded-[32px] transition-all duration-500 ease-out group transform-gpu"
      style={{
        transform: `translate3d(${parallaxOffset.x * 1.0}px, ${parallaxOffset.y * 1.0}px, 0) rotateX(${
          parallaxOffset.rotateX
        }deg) rotateY(${parallaxOffset.rotateY}deg) scale(${isHovered ? 1.02 : 1.0})`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Sleek Outer Border Frame - Theme Aware */}
      <div
        className={`absolute -inset-[1px] rounded-[33px] bg-gradient-to-b from-white/20 via-[var(--color-border)] to-[var(--color-primary)]/20 transition-all duration-500 pointer-events-none ${
          isHovered ? 'from-emerald-400/50 via-[var(--color-primary)]/40 to-blue-500/50 shadow-2xl shadow-emerald-500/20' : ''
        }`}
      />

      {/* Main Portrait Card Container */}
      <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl">
        {/* High-Resolution Portrait Image */}
        <img
          src={imageSrc}
          alt="Ali Mehmood - Full Stack Developer & AI Engineer"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Soft Ambient Rim Lighting & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent pointer-events-none" />

        {/* Executive Identity Label & Emerald Verified Badge */}
        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-border)] flex items-center justify-between text-[var(--color-text)] shadow-lg">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <div className="flex flex-col">
              <span className="font-bold font-mono tracking-wider text-xs">ALI MEHMOOD</span>
              <span className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">FULL STACK & AI</span>
            </div>
          </div>
          
          {/* Executive Emerald Verified Badge */}
          <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 shadow-sm">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            <span>VERIFIED</span>
          </span>
        </div>
      </div>
    </div>
  );
};
