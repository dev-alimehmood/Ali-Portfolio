import React, { useState, useEffect, useRef } from 'react';
import { SKILLS_DATA } from '../../data/skills';
import { ArrowUpRight, Code2, Server, BrainCircuit, Zap, Activity, Cloud } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getServiceIcon = (index) => {
  switch (index) {
    case 0: return <Code2 className="w-5 h-5 text-[var(--color-primary-bright)]" />;
    case 1: return <Server className="w-5 h-5 text-[var(--color-primary-bright)]" />;
    case 2: return <BrainCircuit className="w-5 h-5 text-[var(--color-primary-bright)]" />;
    case 3: return <Zap className="w-5 h-5 text-[var(--color-primary-bright)]" />;
    case 4: return <Activity className="w-5 h-5 text-[var(--color-primary-bright)]" />;
    case 5: return <Cloud className="w-5 h-5 text-[var(--color-primary-bright)]" />;
    default: return <Code2 className="w-5 h-5 text-[var(--color-primary-bright)]" />;
  }
};

export const ExpertiseSection = () => {
  const [activeItem, setActiveItem] = useState(0); // Open first item by default for crisp look
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.expertise-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-24 md:py-36 border-t border-[var(--color-border)] relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[var(--color-primary-glow)] rounded-full blur-[160px] pointer-events-none opacity-20" />

      <div className="portfolio-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="editorial-label">04 / EXPERTISE</span>
              <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black display-title tracking-tight text-[var(--color-text)] uppercase leading-none">
              CORE <span className="text-gradient">CAPABILITIES</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[var(--color-text-muted)] font-normal leading-relaxed">
            Specialized engineering capabilities spanning full-stack web platforms, microservices architecture, and automated AI workflows.
          </p>
        </div>

        {/* Executive Interactive Capability Cards */}
        <div className="space-y-4">
          {SKILLS_DATA.services.map((service, idx) => {
            const isOpen = activeItem === idx;

            return (
              <div
                key={service.number}
                onClick={() => setActiveItem(isOpen ? null : idx)}
                onMouseEnter={() => setActiveItem(idx)}
                className={`expertise-card group cursor-pointer rounded-[24px] border transition-all duration-500 overflow-hidden relative ${
                  isOpen
                    ? 'bg-[var(--color-surface)] border-[var(--color-primary-bright)]/50 shadow-xl shadow-[var(--color-primary-glow)]/10'
                    : 'bg-[var(--color-surface)]/50 border-[var(--color-border)] hover:border-[var(--color-border-glow)] hover:bg-[var(--color-surface)]'
                }`}
              >
                {/* Active Left Gradient Accent Strip */}
                <div
                  className={`absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[var(--color-primary-bright)] to-[var(--color-primary)] transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                  }`}
                />

                <div className="p-6 sm:p-8">
                  {/* Card Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Left: Icon + Number + Title */}
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="p-3 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm shrink-0">
                        {getServiceIcon(idx)}
                      </span>

                      <span className="text-xl sm:text-2xl font-mono font-extrabold text-[var(--color-primary-bright)]">
                        {service.number}
                      </span>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-primary-bright)] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Right Action Button */}
                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      <span className="text-xs font-mono text-[var(--color-text-muted)] hidden sm:inline-block">
                        {isOpen ? 'COLLAPSE' : 'EXPAND'}
                      </span>
                      <span
                        className={`p-3 rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'bg-[var(--color-primary)] border-[var(--color-primary-bright)] text-white rotate-45 scale-105'
                            : 'bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]'
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5 transition-transform" />
                      </span>
                    </div>

                  </div>

                  {/* Expanded Content Area */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-500 overflow-hidden ${
                      isOpen ? 'max-h-60 opacity-100 pt-6 mt-4 border-t border-[var(--color-border)]/60' : 'max-h-0 opacity-0 pt-0 mt-0 border-t-0'
                    }`}
                  >
                    <div className="lg:col-span-7">
                      <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="lg:col-span-5 flex flex-wrap gap-2 items-center lg:justify-end">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:text-[var(--color-primary-bright)] hover:border-[var(--color-primary-bright)]/40 transition-colors shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
