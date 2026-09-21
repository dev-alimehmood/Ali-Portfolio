import React, { useEffect, useRef } from 'react';
import { EDUCATION_DATA } from '../../data/education';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EducationSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.edu-reveal',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="py-20 md:py-28 border-t border-[var(--color-border)] relative">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="edu-reveal flex items-center gap-3 mb-4">
          <span className="editorial-label">ACADEMIC &amp; CERTIFICATION</span>
          <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
        </div>

        <h2 className="edu-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold display-title tracking-tight text-[var(--color-text)] uppercase leading-tight mb-12">
          FOUNDATIONAL <span className="text-gradient">KNOWLEDGE</span>
        </h2>

        {/* Minimal Editorial Rows */}
        <div className="divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="edu-reveal py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center group hover:bg-[var(--color-surface)]/40 transition-colors px-4 sm:px-6 rounded-xl"
            >
              {/* Type Badge */}
              <div className="md:col-span-3 flex items-center gap-3">
                {item.type === 'Degree' ? (
                  <GraduationCap className="w-5 h-5 text-[var(--color-primary-bright)]" />
                ) : (
                  <Award className="w-5 h-5 text-[var(--color-primary-bright)]" />
                )}
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--color-text-muted)]">
                  {item.type}
                </span>
              </div>

              {/* Title & Institution */}
              <div className="md:col-span-6 space-y-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold font-display text-[var(--color-text)] tracking-tight group-hover:text-[var(--color-primary-bright)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] flex flex-wrap items-center gap-2">
                  <span>{item.institution}</span>
                  <span className="opacity-40">•</span>
                  <span className="text-xs text-[var(--color-text-dim)] flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {item.location}
                  </span>
                </p>
              </div>

              {/* Period */}
              <div className="md:col-span-3 text-left md:text-right">
                <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary-bright)]">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
