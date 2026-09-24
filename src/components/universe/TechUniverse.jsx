import React, { useState, useEffect, useRef } from 'react';
import { SKILLS_DATA } from '../../data/skills';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Atom, Server, Cpu, Database, Cloud, Boxes, Globe, Webhook, BrainCircuit, Sparkles, Code2, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getNodeIcon = (category, name) => {
  const iconClass = "w-3.5 h-3.5 text-[var(--color-primary-bright)] group-hover:text-white transition-colors shrink-0";

  if (name.includes('React') || name.includes('Next')) {
    return <Atom className={iconClass} />;
  }
  if (name.includes('REST') || name.includes('API') || name.includes('Webhook')) {
    return <Globe className={iconClass} />;
  }
  if (name.includes('Mongo') || name.includes('SQL') || name.includes('Database')) {
    return <Database className={iconClass} />;
  }
  if (name.includes('AI') || name.includes('Agent')) {
    return <BrainCircuit className={iconClass} />;
  }
  if (name.includes('Docker') || name.includes('AWS') || name.includes('Kubernetes') || name.includes('Azure')) {
    return <Cloud className={iconClass} />;
  }
  if (name.includes('Node') || name.includes('Nest') || name.includes('Express')) {
    return <Server className={iconClass} />;
  }

  switch (category) {
    case 'frontend': return <Code2 className={iconClass} />;
    case 'backend': return <Server className={iconClass} />;
    case 'database': return <Database className={iconClass} />;
    case 'devops': return <Boxes className={iconClass} />;
    case 'ai': return <Sparkles className={iconClass} />;
    default: return <Terminal className={iconClass} />;
  }
};

export const TechUniverse = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredNode, setHoveredNode] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.universe-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="universe-reveal flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6">
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
        <div className="universe-reveal relative min-h-[580px] sm:min-h-[680px] rounded-3xl border border-[var(--color-border)] bg-gradient-to-b from-[var(--color-surface)]/80 to-[var(--color-bg)] p-6 sm:p-12 overflow-hidden flex items-center justify-center shadow-2xl">
          
          {/* Ambient Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary-glow)] rounded-full blur-[170px] pointer-events-none opacity-60" />

          {/* Concentric Vector Orbit Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-[var(--color-primary-bright)] animate-spin-slow" />
            <div className="absolute w-[480px] h-[480px] md:w-[600px] md:h-[600px] rounded-full border border-[var(--color-border)]" />
          </div>

          {/* Fixed Outer Developer Core */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center pointer-events-auto">
            
            {/* Outer Holographic Glow Ring */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-[var(--color-primary-deep)] via-[var(--color-primary-bright)] to-[var(--color-primary)] shadow-[0_0_45px_#9400D3]">
              
              {/* Inner Glass Frame */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/30 bg-[#09070D] relative flex items-center justify-center shadow-2xl">
                
                {/* Static Portrait Image */}
                <img
                  src="/avatar.jpg"
                  alt="Ali Mehmood Portrait"
                  className="w-full h-full object-cover object-center shadow-2xl"
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

            {/* Developer Identity Label Pill */}
            <div className="mt-4 px-4 py-1.5 rounded-full glass-panel border border-[var(--color-border-glow)] text-center shadow-lg pointer-events-none">
              <span className="text-xs font-bold font-display tracking-wider text-[var(--color-text)] uppercase block">
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
                const icon = getNodeIcon(node.category, node.name);

                return (
                  <div
                    key={node.name}
                    onMouseEnter={() => setHoveredNode(node.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md flex items-center gap-2 group ${
                      isHovered
                        ? 'bg-[var(--color-primary)] text-white border-2 border-[var(--color-primary-bright)] scale-110 z-30 shadow-[0_0_30px_#9400D3]'
                        : node.highlight
                        ? 'border border-[var(--color-primary-bright)] bg-[var(--color-surface-glass)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white'
                        : 'border border-[var(--color-border)] bg-[var(--color-surface)]/90 text-[var(--color-text-muted)] hover:border-[var(--color-primary-bright)] hover:text-[var(--color-text)]'
                    }`}
                  >
                    {icon}
                    <span>{node.name}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Clean Mobile Responsive Badge Matrix */
            <div className="w-full max-w-xl flex flex-wrap items-center justify-center gap-2.5 pt-8 relative z-10">
              {filteredNodes.map((node) => {
                const icon = getNodeIcon(node.category, node.name);

                return (
                  <div
                    key={node.name}
                    className={`px-3.5 py-2 rounded-full text-xs font-mono font-semibold border flex items-center gap-2 group ${
                      node.highlight
                        ? 'border-[var(--color-primary-bright)] bg-[var(--color-surface)] text-[var(--color-text)]'
                        : 'border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-text-muted)]'
                    }`}
                  >
                    {icon}
                    <span>{node.name}</span>
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
