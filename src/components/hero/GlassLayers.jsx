import React from 'react';

export const GlassLayers = ({ parallaxOffset = { x: 0, y: 0 }, isHovered = false }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out flex items-center justify-center"
      style={{
        transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)`,
      }}
    >
      {/* Sleek Offset Architectural Panel Backing */}
      <div
        className={`w-[78%] sm:w-[82%] h-[84%] sm:h-[88%] rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/60 backdrop-blur-xl transition-all duration-700 ${isHovered
            ? 'translate-x-3 -translate-y-3 border-[var(--color-primary-bright)]/40 shadow-2xl shadow-[var(--color-primary-glow)]'
            : 'translate-x-1.5 -translate-y-1.5'
          }`}
      />
    </div>
  );
};
