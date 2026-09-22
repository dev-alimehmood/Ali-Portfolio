import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectVisualComposition } from './ProjectVisualComposition';
import { ProjectModal } from '../common/ProjectModal';
import { MagneticButton } from '../common/MagneticButton';
import { RevealBottom, RevealRight } from '../common/ScrollAnimations';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 md:py-36 border-t border-[var(--color-border)] relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[var(--color-primary-glow)] rounded-full blur-[160px] pointer-events-none opacity-20" />

      <div className="portfolio-container relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <RevealBottom>
            <div className="flex items-center gap-3 mb-4">
              <span className="editorial-label">02 / SELECTED WORK</span>
              <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black display-title tracking-tight text-[var(--color-text)] uppercase leading-none">
              FEATURED <span className="text-gradient">ENGINEERING</span>
            </h2>
          </RevealBottom>
          <RevealRight distance={50} delay={0.15}>
            <p className="max-w-md text-sm md:text-base text-[var(--color-text-muted)] font-normal leading-relaxed">
              A curated showcase of scalable full-stack web platforms, real-time WebSocket applications, AI document engines, and enterprise software.
            </p>
          </RevealRight>
        </div>

        {/* Large Vertical Project Showcases */}
        <div className="space-y-24 md:space-y-36">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text Content Column (Revealing Bottom to Top or Right based on layout) */}
                <RevealBottom
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  distance={45}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold font-mono text-[var(--color-primary-bright)]">
                      {project.number}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] font-mono uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-primary-bright)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-[var(--color-border)] bg-[var(--color-surface)]/80 text-[var(--color-text-muted)] hover:border-[var(--color-primary-bright)]/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA Buttons & External Links */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <MagneticButton
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[var(--color-surface)] border border-[var(--color-border-glow)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-md group/btn"
                    >
                      <span>VIEW ARCHITECTURE</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </MagneticButton>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View Live Demo for ${project.title}`}
                        className="p-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] hover:border-[var(--color-primary-bright)]/40 transition-all shadow-sm group"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View Source Code for ${project.title}`}
                        className="p-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] hover:border-[var(--color-primary-bright)]/40 transition-all shadow-sm group"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                </RevealBottom>

                {/* Visual Composition Column (Revealing from Right) */}
                <RevealRight
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  distance={60}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative rounded-[24px] overflow-hidden cursor-pointer transform group-hover:scale-[1.015] transition-transform duration-500 ease-out shadow-2xl border border-[var(--color-border)] group-hover:border-[var(--color-primary-bright)]/50"
                  >
                    <ProjectVisualComposition type={project.visualType} />
                  </div>
                </RevealRight>
              </div>
            );
          })}
        </div>

      </div>

      {/* Reusable Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

