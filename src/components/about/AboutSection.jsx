import React, { useEffect, useRef } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-36 border-t border-[var(--color-border)] relative"
    >
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="about-reveal flex items-center gap-3 mb-8">
          <span className="editorial-label">01 / ABOUT</span>
          <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
        </div>

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="about-reveal text-3xl sm:text-5xl md:text-6xl font-extrabold display-title tracking-tight text-[var(--color-text)] uppercase leading-[1.05]">
              ENGINEERING <br />
              <span className="text-gradient">SCALABLE PRODUCTS</span> &amp; AI AUTOMATION
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <p className="about-reveal text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              {PROFILE_DATA.aboutBio}
            </p>
            <p className="about-reveal text-sm text-[var(--color-text-dim)] leading-relaxed border-l-2 border-[var(--color-primary-bright)] pl-4 italic">
              Based in Lahore, Pakistan. Currently expanding expertise into autonomous AI agents, workflow automation, and custom LLM API integrations.
            </p>
          </div>
        </div>

        {/* Executive Metric Facts Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[var(--color-border)]">
          
          <div className="about-reveal space-y-3 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-primary-bright)] transition-all overflow-hidden group">
            <div className="text-3xl sm:text-4xl font-black font-display text-[var(--color-text)] tracking-tight">
              1.5<span className="text-[var(--color-primary-bright)]">+</span> <span className="text-sm font-mono text-[var(--color-text-muted)] font-normal">YEARS</span>
            </div>
            <div className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-primary-bright)]">
              EXPERIENCE
            </div>
            <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Full Stack Web &amp; API Systems
            </div>
          </div>

          <div className="about-reveal space-y-3 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-primary-bright)] transition-all overflow-hidden group">
            <div className="text-2xl sm:text-3xl font-black font-display text-[var(--color-text)] tracking-tight truncate">
              FULL <span className="text-[var(--color-primary-bright)]">STACK</span>
            </div>
            <div className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-primary-bright)]">
              REACT &amp; NESTJS
            </div>
            <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Node.js, Next.js &amp; MongoDB
            </div>
          </div>

          <div className="about-reveal space-y-3 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-primary-bright)] transition-all overflow-hidden group">
            <div className="text-2xl sm:text-3xl font-black font-display text-[var(--color-text)] tracking-tight truncate">
              AI <span className="text-[var(--color-primary-bright)]">AGENTS</span>
            </div>
            <div className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-primary-bright)]">
              AUTOMATION
            </div>
            <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Webhooks &amp; Workflow Systems
            </div>
          </div>

          <div className="about-reveal space-y-3 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-primary-bright)] transition-all overflow-hidden group">
            <div className="text-2xl sm:text-3xl font-black font-display text-[var(--color-text)] tracking-tight truncate">
              REAL <span className="text-[var(--color-primary-bright)]">TIME</span>
            </div>
            <div className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-primary-bright)]">
              SOCKET.IO &amp; APIS
            </div>
            <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Low-latency Systems
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
