import React from 'react';
import { ArrowDownRight, Sparkles, Send } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { PROFILE_DATA } from '../../data/profile';

export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center space-y-5 md:space-y-6">

      {/* Top Status Label Pill - Executive Emerald Green Availability */}
      <div className="hero-animate inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold tracking-widest uppercase shadow-sm w-fit backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>{PROFILE_DATA.status}</span>
      </div>

      {/* Large Editorial Heading */}
      <div className="hero-animate space-y-1">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black display-title tracking-tight text-[var(--color-text)] uppercase leading-none">
          ALI <br />
          <span className="text-gradient">MEHMOOD</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-[var(--color-text-muted)] tracking-tight pt-1 flex flex-wrap items-center gap-1.5">
          <span>FULL STACK DEVELOPER</span>
          <span className="text-[var(--color-primary-bright)]">&amp;</span>
          <span>AI AUTOMATION ENGINEER</span>
        </p>
      </div>

      {/* Supporting Text */}
      <p className="hero-animate max-w-xl text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed font-normal">
        {PROFILE_DATA.heroSubtitle}
      </p>

      {/* Action CTA Buttons */}
      <div className="hero-animate flex flex-wrap items-center gap-3.5 pt-2">
        <MagneticButton
          href="#projects"
          className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] transition-all shadow-xl shadow-[var(--color-primary-glow)] group"
        >
          <span>VIEW SELECTED WORK</span>
          <ArrowDownRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
        </MagneticButton>

        <MagneticButton
          href="#contact"
          className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary-bright)] hover:text-[var(--color-primary-bright)] transition-all group"
        >
          <span>LET'S CONNECT</span>
          <Send className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 transition-transform" />
        </MagneticButton>
      </div>

      {/* Tech Stack Strip */}
      <div className="hero-animate pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--color-text-dim)] border-t border-[var(--color-border)]">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--color-text-muted)]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary-bright)]" /> ARCHITECTURE STACK:
        </span>
        {["REACT", "NEXT.JS", "NODE.JS", "NESTJS", "AI AUTOMATION"].map((tech, idx) => (
          <React.Fragment key={tech}>
            <span className="hover:text-[var(--color-primary-bright)] transition-colors">{tech}</span>
            {idx < 4 && <span className="opacity-30">/</span>}
          </React.Fragment>
        ))}
      </div>

    </div>
  );
};
