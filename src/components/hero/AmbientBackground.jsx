import React from 'react';

export const AmbientBackground = ({ parallaxOffset = { x: 0, y: 0 } }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center transition-transform duration-700 ease-out"
      style={{
        transform: `translate3d(${parallaxOffset.x * 0.15}px, ${parallaxOffset.y * 0.15}px, 0)`,
      }}
    >
      {/* Soft Expansive Ambient Glow - Blends dynamically in Light & Dark Mode */}
      <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[var(--color-primary-glow)] via-blue-500/10 to-purple-500/15 blur-[120px] opacity-70" />
    </div>
  );
};
