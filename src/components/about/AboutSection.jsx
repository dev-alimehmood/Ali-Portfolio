import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { RevealBottom, RevealRight, StaggerContainer, StaggerItemBottom } from '../common/ScrollAnimations';
import { TiltCard } from '../common/TiltCard';
import { AnimatedCounter } from '../common/AnimatedCounter';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 relative"
    >
      <div className="portfolio-container">

        {/* Section Header */}
        <RevealBottom className="flex items-center gap-3 mb-8">
          <span className="editorial-label">01 / ABOUT</span>
          <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
        </RevealBottom>

        {/* Large Editorial Headline & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7">
            <RevealBottom distance={50}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold display-title tracking-tight text-[var(--color-text)] uppercase leading-[1.05]">
                ENGINEERING <br />
                <span className="text-gradient">SCALABLE PRODUCTS</span> &amp; AI AUTOMATION
              </h2>
            </RevealBottom>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <RevealRight distance={60} delay={0.1}>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
                {PROFILE_DATA.aboutBio}
              </p>
            </RevealRight>
            <RevealRight distance={60} delay={0.25}>
              <p className="text-sm text-[var(--color-text-dim)] leading-relaxed border-l-2 border-[var(--color-primary-bright)] pl-4 italic">
                Based in Lahore, Pakistan. Currently expanding expertise into autonomous AI agents, workflow automation, and custom LLM API integrations.
              </p>
            </RevealRight>
          </div>
        </div>

        {/* Metric Cards (Staggered Bottom to Top with 3D Tilt & Animated Counters) */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 items-stretch">

          <StaggerItemBottom className="h-full">
            <TiltCard className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-primary-bright)] transition-all overflow-hidden group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-black font-display text-[var(--color-text)] tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter value={1.5} decimals={1} duration={2} />
                  <span className="text-[var(--color-primary-bright)]">+</span>
                  <span className="text-xs font-mono text-[var(--color-text-muted)] font-normal uppercase ml-1">YEARS</span>
                </div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-primary-bright)]">
                  EXPERIENCE
                </div>
              </div>
              <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Full Stack Web &amp; API Systems
              </div>
            </TiltCard>
          </StaggerItemBottom>

          <StaggerItemBottom className="h-full">
            <TiltCard className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-primary-bright)] transition-all overflow-hidden group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-black font-display text-[var(--color-text)] tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter value={15} decimals={0} duration={2} />
                  <span className="text-[var(--color-primary-bright)]">+</span>
                  <span className="text-xs font-mono text-[var(--color-text-muted)] font-normal uppercase ml-1">PROJECTS</span>
                </div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-primary-bright)]">
                  DELIVERED
                </div>
              </div>
              <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Web Apps, Dashboards &amp; Bots
              </div>
            </TiltCard>
          </StaggerItemBottom>

          <StaggerItemBottom className="h-full">
            <TiltCard className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-primary-bright)] transition-all overflow-hidden group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-black font-display text-[var(--color-text)] tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter value={99.9} decimals={1} duration={2.5} suffix="%" />
                  <span className="text-xs font-mono text-[var(--color-text-muted)] font-normal uppercase ml-1">UPTIME</span>
                </div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-primary-bright)]">
                  RELIABILITY
                </div>
              </div>
              <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                High-availability Node &amp; NestJS backend
              </div>
            </TiltCard>
          </StaggerItemBottom>

          <StaggerItemBottom className="h-full">
            <TiltCard className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-primary-bright)] transition-all overflow-hidden group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-black font-display text-[var(--color-text)] tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter value={100} decimals={0} duration={2} suffix="%" />
                  <span className="text-xs font-mono text-[var(--color-text-muted)] font-normal uppercase ml-1">QUALITY</span>
                </div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-primary-bright)]">
                  CLEAN CODE
                </div>
              </div>
              <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Modern TypeScript &amp; React Architecture
              </div>
            </TiltCard>
          </StaggerItemBottom>

        </StaggerContainer>

      </div>
    </section>
  );
};


