import React, { useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '../../data/experience';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line expansion
      gsap.fromTo(
        '.timeline-progress-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1
          }
        }
      );

      // Animate experience nodes reveal
      const nodes = gsap.utils.toArray('.experience-timeline-node');
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-36 border-t border-[var(--color-border)] relative"
    >
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="editorial-label">03 / EXPERIENCE</span>
              <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold display-title tracking-tight text-[var(--color-text)] uppercase leading-none">
              CAREER <span className="text-gradient">TIMELINE</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[var(--color-text-muted)] font-normal">
            Proven track record of designing, building, and delivering scalable full-stack web applications and APIs.
          </p>
        </div>

        {/* Editorial Vertical Timeline Stage */}
        <div className="relative">
          
          {/* Background Timeline Static Line */}
          <div className="absolute top-0 left-3 md:left-4 w-[2px] h-full bg-[var(--color-border)] -translate-x-1/2" />
          
          {/* Animated Illuminating Scroll Line */}
          <div className="timeline-progress-line absolute top-0 left-3 md:left-4 w-[2px] h-full bg-[var(--color-primary-bright)] origin-top shadow-[0_0_12px_#9400D3] -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {EXPERIENCE_DATA.map((exp) => (
              <div
                key={exp.id}
                className="experience-timeline-node relative pl-10 md:pl-14"
              >
                {/* Node Indicator Dot Centered Directly Over Line */}
                <div className="absolute left-3 md:left-4 -translate-x-1/2 top-1.5 w-5 h-5 rounded-full border-2 border-[var(--color-primary-bright)] bg-[var(--color-bg)] group-hover:bg-[var(--color-primary)] group-hover:scale-125 transition-all duration-300 flex items-center justify-center z-10 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-bright)]" />
                </div>

                {/* Node Content Grid */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 group">
                  
                  {/* Left Meta: Company & Dates */}
                  <div className="md:w-1/3 space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary-bright)]">
                      {exp.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-[var(--color-text)] tracking-tight group-hover:text-[var(--color-primary-bright)] transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-[var(--color-primary-bright)]" />
                      {exp.role}
                    </p>
                    <p className="text-xs text-[var(--color-text-dim)] flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" /> {exp.location} • {exp.type}
                    </p>
                  </div>

                  {/* Right Content: Responsibilities */}
                  <div className="md:w-2/3 space-y-4 p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 group-hover:border-[var(--color-border-glow)] transition-colors shadow-lg">
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-bright)] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Used */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--color-border)]">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-dim)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
