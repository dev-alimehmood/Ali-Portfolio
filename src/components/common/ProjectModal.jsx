import React, { useEffect } from 'react';
import { X, CheckCircle2, ExternalLink, Layers, Sparkles, Terminal } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { ProjectVisualComposition } from '../projects/ProjectVisualComposition';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl transition-all duration-300 animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        data-lenis-prevent
        className="relative w-full max-w-4xl max-h-[85vh] my-auto overflow-y-auto overscroll-contain rounded-[32px] bg-[var(--color-surface)] p-6 sm:p-8 md:p-10 text-[var(--color-text)] border border-[var(--color-border-glow)] shadow-2xl shadow-purple-500/10"
        style={{ WebkitOverflowScrolling: 'touch' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Button Bar */}
        <div className="sticky top-0 right-0 z-30 flex justify-end -mr-2 -mt-2 pb-2">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md hover:bg-[var(--color-surface-hover)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-all shadow-md group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Modal Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="editorial-label text-xs font-mono font-bold text-[var(--color-primary-bright)]">
              {project.number}
            </span>
            <span className="text-xs px-3 py-1 rounded-full border border-[var(--color-border-glow)] bg-[var(--color-primary-glow)] text-[var(--color-primary-bright)] font-mono uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              VERIFIED DEPLOYMENT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black display-title tracking-tight text-[var(--color-text)] uppercase leading-none">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-primary-bright)] font-display font-semibold">
            {project.tagline}
          </p>
        </div>

        {/* Visual Preview Banner inside Modal */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-xl max-h-[340px]">
          <ProjectVisualComposition type={project.visualType} />
        </div>

        {/* Project Architecture Overview */}
        <div className="mb-8 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/60 backdrop-blur-md">
          <h3 className="text-xs font-mono uppercase tracking-widest font-semibold text-[var(--color-text-muted)] mb-2 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[var(--color-primary-bright)]" /> ARCHITECTURE OVERVIEW
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)]">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Key Engineering Highlights Grid */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[var(--color-primary-bright)]" /> KEY ENGINEERING HIGHLIGHTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 flex items-start gap-3 text-sm text-[var(--color-text)] shadow-sm hover:border-[var(--color-border-glow)] transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest font-semibold text-[var(--color-text)] mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary-bright)]" /> TECHNOLOGIES &amp; ARCHITECTURE
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border border-[var(--color-border)] bg-[var(--color-bg)]/80 text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] hover:border-[var(--color-primary-bright)]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs: Live Link & GitHub Link */}
        <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-[var(--color-text-dim)]">
            STATUS: <span className="text-emerald-400 font-semibold">PRODUCTION ACTIVE</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary-bright)] hover:text-[var(--color-primary-bright)] transition-all shadow-md"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>SOURCE CODE</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] transition-all shadow-lg shadow-[var(--color-primary-glow)]"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <MagneticButton
              onClick={onClose}
              className="px-6 py-3 rounded-full text-xs font-mono uppercase font-bold tracking-widest border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              CLOSE
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};
