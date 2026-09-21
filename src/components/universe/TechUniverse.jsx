import React, { useState, useRef, useEffect } from 'react';
import { SKILLS_DATA } from '../../data/skills';
import { Cpu } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import gsap from 'gsap';

export const TechUniverse = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredNode, setHoveredNode] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const sectionRef = useRef(null);
  const avatarImgRef = useRef(null);

  const categories = [
    { id: 'all', label: 'ALL STACK' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'database', label: 'DATABASES' },
    { id: 'devops', label: 'CLOUD & DEVOPS' },
    { id: 'ai', label: 'AI & AUTOMATION' }
  ];

  const filteredNodes = SKILLS_DATA.techUniverseNodes.filter((node) =>
    activeCategory === 'all' ? true : node.category === activeCategory
  );

  // Position nodes radially around center for desktop orbital layout
  const getNodeOrbitPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const radius = index % 2 === 0 ? (isMobile ? 130 : 230) : (isMobile ? 160 : 300);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  // Full 90-Degree Image 3D Rotation on Cursor Movement
  useEffect(() => {
    const section = sectionRef.current;
    const avatarImg = avatarImgRef.current;

    if (!section || !avatarImg) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates (-1 to +1) relative to section center
      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp normalized values between -1 and 1
      const clampedX = Math.max(-1, Math.min(1, normX));
      const clampedY = Math.max(-1, Math.min(1, normY));

      // Rotate image position 90 degrees tracking cursor movement
      gsap.to(avatarImg, {
        rotationY: clampedX * 90,
        rotationX: -clampedY * 25,
        scale: 1.15,
        transformPerspective: 800,
        transformOrigin: '50% 50%',
        duration: 0.45,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const handleMouseLeave = () => {
      // Smooth reset back to front-facing center (0 degrees)
      gsap.to(avatarImg, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 border-t border-[var(--color-border)] relative overflow-hidden"
    >
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="editorial-label">TECHNICAL UNIVERSE</span>
              <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold display-title tracking-tight text-[var(--color-text)] uppercase leading-none">
              TECH <span className="text-gradient">ECOSYSTEM</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary-glow)] scale-105'
                    : 'bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-glow)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ecosystem Stage Container */}
        <div className="relative min-h-[580px] sm:min-h-[680px] rounded-3xl border border-[var(--color-border)] bg-gradient-to-b from-[var(--color-surface)]/80 to-[var(--color-bg)] p-6 sm:p-12 overflow-hidden flex items-center justify-center shadow-2xl">
          
          {/* Ambient Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary-glow)] rounded-full blur-[170px] pointer-events-none opacity-60" />

          {/* Concentric Vector Orbit Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-[var(--color-primary-bright)] animate-spin-slow" />
            <div className="absolute w-[480px] h-[480px] md:w-[600px] md:h-[600px] rounded-full border border-[var(--color-border)]" />
          </div>

          {/* Fixed Outer Developer Core (Card Frame does NOT move) */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center pointer-events-auto">
            
            {/* Stationary Outer Holographic Glow Ring */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-[var(--color-primary-deep)] via-[var(--color-primary-bright)] to-[var(--color-primary)] shadow-[0_0_45px_#9400D3] animate-pulse-glow">
              
              {/* Stationary Inner Glass Frame */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/30 bg-[#09070D] relative flex items-center justify-center shadow-2xl">
                
                {/* 90-Degree Rotating Portrait Image */}
                <img
                  ref={avatarImgRef}
                  src="/avatar.jpg"
                  alt="Ali Mehmood Portrait"
                  className="w-full h-full object-cover object-center transform-gpu shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/img.jpeg';
                  }}
                />

                {/* Subtle Bottom Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-deep)]/60 via-transparent to-transparent pointer-events-none" />

                {/* Micro Live Status Tag */}
                <div className="absolute bottom-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[var(--color-primary-bright)] text-[10px] font-mono text-white flex items-center gap-1.5 shadow-lg pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>CORE ACTIVE</span>
                </div>
              </div>

            </div>

            {/* Stationary Developer Identity Label Pill */}
            <div className="mt-4 px-4 py-1.5 rounded-full glass-panel border border-[var(--color-border-glow)] text-center shadow-lg pointer-events-none">
              <span className="text-xs font-bold font-display tracking-wider text-white uppercase block">
                ALI MEHMOOD
              </span>
              <span className="text-[10px] font-mono text-[var(--color-primary-bright)] uppercase tracking-widest block">
                FULL STACK &amp; AI AUTOMATION
              </span>
            </div>

          </div>

          {/* Orbital Tech Stack Nodes Floating Radially */}
          {!isMobile ? (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-10">
              {filteredNodes.map((node, index) => {
                const { x, y } = getNodeOrbitPosition(index, filteredNodes.length);
                const isHovered = hoveredNode === node.name;

                return (
                  <div
                    key={node.name}
                    onMouseEnter={() => setHoveredNode(node.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide transition-all duration-500 cursor-pointer shadow-xl backdrop-blur-md flex items-center gap-2 group ${
                      isHovered
                        ? 'bg-[var(--color-primary)] text-white border-2 border-[var(--color-primary-bright)] scale-110 z-30 shadow-[0_0_30px_#9400D3]'
                        : node.highlight
                        ? 'border border-[var(--color-primary-bright)] bg-[var(--color-surface-glass)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white'
                        : 'border border-[var(--color-border)] bg-[var(--color-surface)]/90 text-[var(--color-text-muted)] hover:border-[var(--color-primary-bright)] hover:text-[var(--color-text)]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isHovered || node.highlight ? 'bg-[var(--color-primary-bright)] animate-pulse' : 'bg-white/40'
                      }`}
                    />
                    <span>{node.name}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Clean Mobile Responsive Badge Matrix */
            <div className="w-full max-w-xl flex flex-wrap items-center justify-center gap-2.5 pt-8 relative z-10">
              {filteredNodes.map((node) => (
                <div
                  key={node.name}
                  className={`px-3.5 py-2 rounded-full text-xs font-mono font-semibold border ${
                    node.highlight
                      ? 'border-[var(--color-primary-bright)] bg-[var(--color-surface)] text-[var(--color-text)]'
                      : 'border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-text-muted)]'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-bright)]" />
                    {node.name}
                  </span>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
