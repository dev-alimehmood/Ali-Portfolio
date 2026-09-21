import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Sparkles, Send } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { PROFILE_DATA } from '../../data/profile';

export const HeroContent = () => {
  const fullText = "ALI MEHMOOD";
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 90);

    return () => clearInterval(timer);
  }, []);

  // Render full typewriter string directly or with split space
  const firstName = displayText.startsWith("ALI ") ? "ALI " : displayText;
  const lastName = displayText.startsWith("ALI ") ? displayText.slice(4) : "";

  return (
    <div className="flex flex-col justify-center space-y-5 md:space-y-6">


      {/* Single Line Typewriter Editorial Heading */}
      <div className="hero-animate space-y-3 pt-2">
        <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-black display-title tracking-tight text-[var(--color-text)] uppercase leading-none whitespace-normal sm:whitespace-nowrap inline-flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3.5">
          <span>{firstName.trim()}</span>
          {lastName && <span className="text-gradient">{lastName}</span>}
          {!isTypingComplete && (
            <span className="inline-block w-1.5 h-8 sm:h-12 lg:h-14 ml-1 bg-[var(--color-primary-bright)] animate-pulse" />
          )}
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-display font-semibold text-[var(--color-text-muted)] tracking-tight pt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span>FULL STACK DEVELOPER</span>
          <span className="text-[var(--color-primary-bright)]">&amp;</span>
          <span>AI AUTOMATION ENGINEER</span>
        </p>
      </div>

      {/* Concise Punchy Supporting Text */}
      <p className="hero-animate max-w-lg text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed font-normal">
        Engineering scalable React/Next.js web applications, NestJS microservices, REST APIs, and automated AI workflows.
      </p>

      {/* Action CTA Buttons */}
      <div className="hero-animate flex flex-wrap items-center gap-3.5 pt-2">
        <MagneticButton
          href="#projects"
          className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] transition-all shadow-xl shadow-[var(--color-primary-glow)] group"
        >
          <span>VIEW SELECTED WORK</span>
          <ArrowDownRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
        </MagneticButton>

        <MagneticButton
          href="#contact"
          className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary-bright)] hover:text-[var(--color-primary-bright)] transition-all group"
        >
          <span>LET'S CONNECT</span>
          <Send className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 transition-transform" />
        </MagneticButton>
      </div>

      {/* Tech Stack Strip */}
      <div className="hero-animate pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--color-text-dim)] border-t border-[var(--color-border)]">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--color-text-muted)]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary-bright)]" /> ARCHITECTURE STACK:
        </span>
        {["REACT", "NEXT.JS", "NODE.JS", "NESTJS", "AI AUTOMATION"].map((tech, idx) => (
          <React.Fragment key={tech}>
            <span className="hover:text-[var(--color-primary-bright)] transition-colors">{tech}</span>
            {idx < 4 && <span className="opacity-30">/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
