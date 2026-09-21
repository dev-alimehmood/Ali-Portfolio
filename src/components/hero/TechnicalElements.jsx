import React from 'react';
import { Activity, Cpu } from 'lucide-react';

export const TechnicalElements = ({ parallaxOffset = { x: 0, y: 0 } }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-30 transition-transform duration-300 ease-out select-none"
      style={{
        transform: `translate3d(${parallaxOffset.x * 1.3}px, ${parallaxOffset.y * 1.3}px, 0)`,
      }}
    >
      {/* Floating Pill 1: Top-Right Latency Badge - Positioned Cleanly Outside Image */}
      <div className="absolute top-2 -right-3 sm:top-4 sm:-right-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)]/95 border border-[var(--color-border)] text-[var(--color-text)] font-mono text-[10px] shadow-xl backdrop-blur-md animate-float-slow">
        <Activity className="w-3.5 h-3.5 text-[var(--color-primary-bright)]" />
        <span className="font-bold tracking-wider">WS 14ms</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      </div>

      {/* Floating Pill 2: Bottom-Left AI Core Match - Positioned Cleanly Outside Image */}
      <div className="absolute bottom-8 -left-3 sm:bottom-12 sm:-left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)]/95 border border-[var(--color-border)] text-[var(--color-text)] font-mono text-[10px] shadow-xl backdrop-blur-md animate-float-reverse">
        <Cpu className="w-3.5 h-3.5 text-[var(--color-primary-bright)]" />
        <span className="font-bold tracking-wider">AI VECTOR CORE</span>
        <span className="text-[9px] font-semibold text-[var(--color-primary-bright)]">99.4%</span>
      </div>
    </div>
  );
};
