import React, { useState } from 'react';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { PROFILE_DATA } from '../../data/profile';
import { RevealBottom, RevealRight } from '../common/ScrollAnimations';
import { ContactPurposeModal } from '../common/ContactPurposeModal';

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="py-24 md:py-36 border-t border-[var(--color-border)] relative overflow-hidden"
      >
        {/* Background Large Violet Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary-glow)] rounded-full blur-[160px] pointer-events-none opacity-50" />

        <div className="portfolio-container relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Main Headline & Supporting Callout (Coming from Bottom) */}
            <div className="lg:col-span-7 space-y-6">
              <RevealBottom className="flex items-center gap-3">
                <span className="editorial-label">05 / CONTACT</span>
                <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
              </RevealBottom>

              <RevealBottom distance={50} delay={0.1}>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold display-title tracking-tight text-[var(--color-text)] uppercase leading-[1.05]">
                  LET'S BUILD <br />
                  <span className="text-gradient">SOMETHING</span> <br />
                  REMARKABLE.
                </h2>
              </RevealBottom>

              <RevealBottom distance={40} delay={0.2}>
                <p className="max-w-xl text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed font-normal">
                  Have an idea, product engineering opportunity, or AI automation workflow worth building? Select your purpose below and we'll prepare your email automatically.
                </p>
              </RevealBottom>
            </div>

            {/* Action Callout & Links (Coming from Right) */}
            <RevealRight className="lg:col-span-5 flex flex-col items-start gap-6 p-6 sm:p-8 rounded-3xl glass-panel border border-[var(--color-border-glow)] shadow-2xl relative z-10" distance={60} delay={0.25}>
              <div className="w-full relative py-1 px-1">
                <MagneticButton
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  strength={0.15}
                  className="w-full py-4 sm:py-5 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] transition-colors shadow-xl shadow-[var(--color-primary-glow)] group cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-purple-300" />
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </MagneticButton>
              </div>

              <div className="w-full space-y-4 pt-4 border-t border-[var(--color-border)]">

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] transition-colors text-left cursor-pointer group"
                >
                  <Mail className="w-4 h-4 text-[var(--color-primary-bright)] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{PROFILE_DATA.email}</span>
                </button>

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
            </RevealRight>

          </div>

        </div>
      </section>

      {/* Contact Purpose Modal System */}
      <ContactPurposeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
