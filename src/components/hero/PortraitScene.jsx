import React, { useState, useRef, useEffect } from 'react';
import { AmbientBackground } from './AmbientBackground';
import { GlassLayers } from './GlassLayers';
import { LightSweep } from './LightSweep';
import { PortraitDepth } from './PortraitDepth';
import { PortraitImage } from './PortraitImage';
import { TechnicalElements } from './TechnicalElements';

export const PortraitScene = () => {
  const containerRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Calculate normalized cursor position relative to container center (-1 to 1)
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);

      const clampedX = Math.max(-1, Math.min(1, normX));
      const clampedY = Math.max(-1, Math.min(1, normY));

      animationFrameId = requestAnimationFrame(() => {
        setParallaxOffset({
          x: clampedX * 22,
          y: clampedY * 18,
          rotateX: -clampedY * 8, // Subtle 3D tilt X
          rotateY: clampedX * 10, // Subtle 3D tilt Y
        });
      });
    };

    const handleMouseLeave = () => {
      setParallaxOffset({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
      setIsHovered(false);
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('mouseenter', () => setIsHovered(true));
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] sm:h-[500px] lg:h-[580px] flex items-center justify-center select-none perspective-1000"
      style={{ perspective: '1200px' }}
    >
      {/* Layer 0: Ambient Background Atmospheric Glow */}
      <AmbientBackground parallaxOffset={parallaxOffset} />

      {/* Layer 1: Luxury Glass Architectural Backing */}
      <GlassLayers parallaxOffset={parallaxOffset} isHovered={isHovered} />

      {/* Subtle Specular Light Sweep */}
      <LightSweep />

      {/* Layer 2: Spatial Portrait Depth Shadow */}
      <PortraitDepth parallaxOffset={parallaxOffset} imageSrc="/avatar.jpg" />

      {/* Layer 3: Main Executive Studio Portrait with 3D Parallax & Tilt */}
      <PortraitImage parallaxOffset={parallaxOffset} isHovered={isHovered} imageSrc="/avatar.jpg" />

      {/* Layer 4: Precision Micro-Technical UI Elements */}
      <TechnicalElements parallaxOffset={parallaxOffset} />
    </div>
  );
};
