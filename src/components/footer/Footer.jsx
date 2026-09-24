import React, { useState } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { ContactPurposeModal } from '../common/ContactPurposeModal';
import { Mail, Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPurposeModalOpen, setIsPurposeModalOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <ContactPurposeModal
        isOpen={isPurposeModalOpen}
        onClose={() => setIsPurposeModalOpen(false)}
      />
      <footer className="relative py-16 md:py-24 bg-[#060408] text-slate-400 text-xs overflow-hidden select-none">
        {/* Top Hairline Gradient Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        {/* Ambient Gradient Glow Orbs */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[250px] bg-gradient-to-br from-purple-900/30 via-indigo-900/15 to-transparent blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-gradient-to-tr from-blue-900/20 to-purple-900/20 blur-[140px] pointer-events-none" />

        <div className="portfolio-container relative z-10 space-y-12">

          {/* Main 3-Column Luxury Dark Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start justify-between">

            {/* Column 1: Brand Identity & Radar Status */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-display font-black uppercase tracking-widest text-base sm:text-lg text-slate-100 hover:text-purple-400 transition-colors flex items-center gap-2.5"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                  <span>ALI MEHMOOD</span>
                </a>

                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-800/50 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  AVAILABLE FOR WORK
                </span>
              </div>

              <p className="max-w-sm text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Full Stack Developer &amp; AI Automation Engineer engineering high-performance MERN/Next.js web platforms, NestJS APIs, and automated AI systems.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-3 font-mono">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-purple-400" /> NAVIGATION
              </span>
              <ul className="space-y-2 text-xs">
                {[
                  { label: 'HOME', href: '#hero' },
                  { label: 'ABOUT', href: '#about' },
                  { label: 'WORK', href: '#projects' },
                  { label: 'EXPERIENCE', href: '#experience' },
                  { label: 'EXPERTISE', href: '#expertise' },
                  { label: 'CONTACT', href: '#contact' },
                ].map((link) => (

                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-slate-400 hover:text-purple-300 transition-colors uppercase tracking-wider inline-flex items-center gap-1.5 group"
                    >
                      <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social Connectivity Pills */}
            <div className="md:col-span-4 space-y-3 font-mono md:text-right">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-1">
                CONNECTIVITY
              </span>
              <div className="flex flex-wrap gap-2.5 md:justify-end">
                {PROFILE_DATA.linkedin && (
                  <a
                    href={PROFILE_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/40 hover:scale-105 transition-all flex items-center gap-2 text-xs shadow-md"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                )}

                {PROFILE_DATA.github && (
                  <a
                    href={PROFILE_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/40 hover:scale-105 transition-all flex items-center gap-2 text-xs shadow-md"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}

                {PROFILE_DATA.email && (
                  <button
                    onClick={() => setIsPurposeModalOpen(true)}
                    className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/40 hover:scale-105 transition-all flex items-center gap-2 text-xs shadow-md cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Clean Bottom Copyright Bar */}
          <div className="pt-8 border-t border-slate-900/80 flex items-center justify-between font-mono text-[11px] text-slate-500">
            <div>
              © {currentYear} Ali Mehmood. All rights reserved.
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
