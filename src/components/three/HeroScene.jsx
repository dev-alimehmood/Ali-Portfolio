import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { DigitalCore } from './DigitalCore';
import { ParticleField } from './ParticleField';
import { SceneLights } from './SceneLights';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const FallbackCore = () => (
  <div className="w-full h-full flex items-center justify-center p-8">
    <div className="w-36 h-36 rounded-full border border-[var(--color-border-glow)] bg-[var(--color-surface)] animate-pulse flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] opacity-30 blur-xl" />
    </div>
  </div>
);

export const HeroScene = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  if (isReducedMotion) {
    return <FallbackCore />;
  }

  return (
    <div className="w-full h-[320px] sm:h-[380px] md:h-[440px] relative pointer-events-auto cursor-grab active:cursor-grabbing overflow-hidden flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 40 }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <SceneLights />
          <DigitalCore isMobile={isMobile} />
          <ParticleField count={isMobile ? 15 : 35} />
        </Suspense>
      </Canvas>
    </div>
  );
};
