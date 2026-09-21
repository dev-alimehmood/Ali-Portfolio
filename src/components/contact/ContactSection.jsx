import React from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { PROFILE_DATA } from '../../data/profile';

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 md:py-36 border-t border-[var(--color-border)] relative overflow-hidden"
    >
      {/* Background Large Violet Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary-glow)] rounded-full blur-[160px] pointer-events-none opacity-50" />

      <div className="portfolio-container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Supporting Callout */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="editorial-label">05 / CONTACT</span>
              <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold display-title tracking-tight text-[var(--color-text)] uppercase leading-[1.05]">
              LET'S BUILD <br />
              <span className="text-gradient">SOMETHING</span> <br />
              REMARKABLE.
            </h2>

            <p className="max-w-xl text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed font-normal">
              Have an idea, product engineering opportunity, or AI automation workflow worth building? Let's connect and execute.
            </p>
          </div>

          {/* Action Callout & Links */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 p-6 sm:p-8 rounded-3xl glass-panel border border-[var(--color-border-glow)] shadow-2xl">
            <MagneticButton
              href={`mailto:${PROFILE_DATA.email}`}
              className="w-full py-4 sm:py-5 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] transition-all shadow-xl shadow-[var(--color-primary-glow)] group"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>

            <div className="w-full space-y-4 pt-4 border-t border-[var(--color-border)]">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--color-primary-bright)] shrink-0" />
                <span>{PROFILE_DATA.email}</span>
              </a>

              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[var(--color-primary-bright)] shrink-0" />
                <span>linkedin.com/in/dev-alimehmood</span>
              </a>

              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[var(--color-primary-bright)] shrink-0" />
                <span>github.com/dev-alimehmood</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
