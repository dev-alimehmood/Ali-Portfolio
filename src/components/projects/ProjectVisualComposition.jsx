import React, { useState } from 'react';
import { Lock, RotateCw, ExternalLink, Globe, Sparkles } from 'lucide-react';

export const ProjectVisualComposition = ({ type, project }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const liveUrl = project?.liveUrl;

  const handleContainerClick = () => {
    if (liveUrl) {
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const renderStaticFallback = () => (
    <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#120B24] via-[#0B0616] to-[#07040D] relative overflow-hidden">
      {/* Decorative subtle background grid & glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,0,211,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Static Mockup Content Header */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {project?.category || 'Static Showcase'}
          </span>
          <span className="text-[10px] font-mono text-[var(--color-text-dim)]">PREVIEW ARCHITECTURE</span>
        </div>
        <h4 className="text-xl sm:text-2xl font-black font-display text-[var(--color-text)] tracking-tight">
          {project?.title}
        </h4>
        <p className="text-xs sm:text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
          {project?.tagline || project?.description}
        </p>
      </div>

      {/* Tech Stack Pills in Static Fallback */}
      <div className="relative z-10 my-4 flex flex-wrap gap-1.5">
        {project?.technologies?.map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--color-border)] bg-[var(--color-surface)]/90 text-[var(--color-text-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Static Mockup Action Bar */}
      <div className="relative z-10 pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-primary-bright)] font-semibold">
        <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          STATIC PREVIEW MODE
        </span>
        <span className="flex items-center gap-1 text-[11px] hover:underline">
          OPEN PROJECT <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </div>
  );

  return (
    <div
      onClick={handleContainerClick}
      title={liveUrl ? "Click to open live project in a new tab" : "Project Showcase"}
      className="w-full h-full min-h-[340px] md:min-h-[420px] bg-[#0E0A17] border border-[var(--color-border)] rounded-[24px] flex flex-col justify-between relative overflow-hidden shadow-2xl group/mockup cursor-pointer hover:border-[var(--color-primary-bright)]/60 transition-all duration-300"
    >
      {/* Top Laptop / Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
        </div>

        {/* URL Address Bar */}
        <div className="flex-1 max-w-sm mx-3 sm:mx-6 px-3.5 py-1 rounded-full bg-[var(--color-bg)]/90 border border-[var(--color-border)] text-[11px] font-mono text-[var(--color-text-muted)] flex items-center justify-between gap-2 shadow-inner group-hover/mockup:border-[var(--color-primary-bright)]/40 transition-colors">
          <div className="flex items-center gap-1.5 truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate font-medium">{liveUrl || 'https://localhost:3000'}</span>
          </div>
          <RotateCw className="w-3 h-3 text-[var(--color-text-dim)] shrink-0 hover:rotate-180 transition-transform duration-500" />
        </div>

        {/* Live Indicator Button */}
        <div className="flex items-center gap-2">
          {liveUrl && (
            <div
              className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 shadow-sm group-hover/mockup:bg-emerald-500/20 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">LIVE PREVIEW</span>
              <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
            </div>
          )}
        </div>
      </div>

      {/* Screen Preview Container (Laptop Viewport Zoomed Out for Full Desktop Hero Visibility) */}
      <div className="relative flex-1 w-full min-h-[280px] md:min-h-[360px] bg-[#07050C] overflow-hidden flex items-center justify-center">
        {liveUrl && !iframeError ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden flex items-start justify-center">
            {/* 
              Laptop Screen Simulation:
              Scaled iframe container (1280px width scaled down to ~50% transform scale) 
              ensures the exact full desktop hero section is rendered without design breakage even on small card containers!
            */}
            <div className="w-[1280px] h-[720px] shrink-0 origin-top transform scale-[0.45] sm:scale-[0.52] md:scale-[0.55] lg:scale-[0.5] xl:scale-[0.55] transition-transform duration-500 pointer-events-none">
              <iframe
                src={liveUrl}
                title={project?.title || 'Live Preview'}
                className="w-full h-full border-0 bg-white"
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                onError={() => setIframeError(true)}
              />
            </div>

            {/* Crisp floating action badge at bottom-right corner of preview (Zero Blur on Card) */}
            <div className="absolute bottom-4 right-4 z-20 pointer-events-none opacity-90 group-hover/mockup:opacity-100 transform translate-y-1 group-hover/mockup:translate-y-0 transition-all duration-300">
              <div className="px-4 py-2 rounded-full bg-[#0F0921]/95 border border-[var(--color-primary-bright)]/70 text-[11px] font-mono font-bold tracking-wider text-white flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.6)] group-hover/mockup:border-emerald-400 group-hover/mockup:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="uppercase font-semibold">OPEN LIVE PROJECT</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover/mockup:translate-x-0.5 group-hover/mockup:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Loading Indicator before load */}
            {!iframeLoaded && (
              <div className="absolute inset-0 bg-[#0E0919] flex items-center justify-center pointer-events-none z-10">
                <div className="px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-glow)] text-xs font-mono text-[var(--color-primary-bright)] flex items-center gap-2 shadow-xl">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>LOADING LIVE PREVIEW...</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          renderStaticFallback()
        )}
      </div>
    </div>
  );
};



