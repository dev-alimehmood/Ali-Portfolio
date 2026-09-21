import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { MagneticButton } from '../common/MagneticButton';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section for nav highlight
      const sections = ['projects', 'about', 'experience', 'expertise', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'WORK', href: '#projects', id: 'projects' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'EXPERTISE', href: '#expertise', id: 'expertise' },
    { label: 'CONTACT', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at Top */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[var(--color-primary-bright)] via-purple-500 to-emerald-400 z-[100] transition-all duration-150 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500 px-4 sm:px-6 md:px-8 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`portfolio-container transition-all duration-300 ease-out flex items-center justify-between border ${
            isScrolled
              ? 'bg-[var(--color-surface)]/90 backdrop-blur-2xl border-[var(--color-border)] rounded-full px-5 sm:px-6 py-2.5 shadow-xl shadow-purple-500/5'
              : 'bg-transparent border-transparent px-2 sm:px-4 py-1.5 rounded-full'
          }`}
        >
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center font-black text-base sm:text-lg tracking-tight text-[var(--color-text)] shrink-0 select-none"
          >
            <span className="font-display font-extrabold uppercase tracking-widest text-xs sm:text-sm">
              ALI MEHMOOD
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-mono font-semibold tracking-widest transition-all relative py-1 ${
                    isActive
                      ? 'text-[var(--color-primary-bright)] font-bold'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-primary-bright)] rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Controls & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <MagneticButton
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] transition-all shadow-lg shadow-[var(--color-primary-glow)] group"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2.5 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-md"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[95] bg-[var(--color-bg)]/95 backdrop-blur-2xl flex flex-col justify-between px-6 sm:px-8 py-12 md:hidden animate-fade-in overflow-y-auto"
        >
          <div className="flex items-center justify-between pt-4 pb-6 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-primary-bright)] uppercase tracking-widest font-bold">
              <Sparkles className="w-4 h-4" /> NAVIGATION
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border border-[var(--color-border)] text-[var(--color-text)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-5 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-[var(--color-text)] hover:text-[var(--color-primary-bright)] transition-colors flex items-center justify-between border-b border-[var(--color-border)]/60 pb-3.5"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[var(--color-primary-bright)]" />
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-4 border-t border-[var(--color-border)]">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-4 text-center rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[var(--color-primary)] text-white shadow-xl flex items-center justify-center gap-2"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-[10px] font-mono text-center text-[var(--color-text-dim)] uppercase tracking-wider">
              ALI MEHMOOD // LAHORE, PAKISTAN
            </p>
          </div>
        </div>
      )}
    </>
  );
};
