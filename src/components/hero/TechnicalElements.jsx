import React from 'react';
import { Sparkles } from 'lucide-react';

export const TechnicalElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-30 select-none">
      {/* Floating Pill 1: Top-Right Full Stack Specialist Badge */}
      <div className="absolute top-1 -right-2 sm:top-2 sm:-right-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)]/95 border border-[var(--color-border)] text-[var(--color-text)] font-mono text-[10px] shadow-xl backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary-bright)]" />
        <span className="font-bold tracking-wider uppercase">FULL STACK SPECIALIST</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>


    </div>
  );
};
