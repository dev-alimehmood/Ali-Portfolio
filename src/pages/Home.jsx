import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from '../components/common/CustomCursor';
import { FloatingWhatsappWidget } from '../components/common/FloatingWhatsappWidget';
import { BackToTopButton } from '../components/common/BackToTopButton';
import { Navbar } from '../components/navigation/Navbar';
import { HeroSection } from '../components/hero/HeroSection';
import { AboutSection } from '../components/about/AboutSection';
import { ProjectsSection } from '../components/projects/ProjectsSection';
import { ExperienceSection } from '../components/experience/ExperienceSection';
import { ExpertiseSection } from '../components/expertise/ExpertiseSection';
import { TechUniverse } from '../components/universe/TechUniverse';
import { EducationSection } from '../components/education/EducationSection';
import { ContactSection } from '../components/contact/ContactSection';
import { Footer } from '../components/footer/Footer';

export const Home = () => {
  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const isTouch = window.matchMedia('(hover: none)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || isReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Floating WhatsApp Widget on Bottom Left */}
      <FloatingWhatsappWidget />

      {/* Back To Top Button on Bottom Right */}
      <BackToTopButton />

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Content Sections Composition */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ExpertiseSection />
        <TechUniverse />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
