import React, { useState } from 'react';
import { ArrowUpRight, Mail, Sparkles, ChevronDown } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { PROFILE_DATA } from '../../data/profile';
import { RevealBottom, RevealRight } from '../common/ScrollAnimations';
import { ContactPurposeModal } from '../common/ContactPurposeModal';

const FAQS_DATA = [
  {
    question: "What types of services and projects do you specialize in?",
    answer: "I specialize in Full Stack Web Development (MERN Stack: React, Next.js, Node.js, Express, NestJS, MongoDB) and AI Automation engineering (Autonomous AI Agents, custom API integrations, Webhooks, Make/n8n workflows, and real-time Socket.io applications)."
  },
  {
    question: "How long does a typical project take from start to launch?",
    answer: "Timelines depend on project complexity. MVP web applications and AI workflow automations typically take 1 to 3 weeks, while comprehensive full-scale digital products or enterprise platforms usually take 4 to 8 weeks."
  },
  {
    question: "What is your approach to communication and updates during development?",
    answer: "I believe in transparent, frequent updates. I provide regular progress demos, keep code repositories organized with full documentation, and communicate via Slack, Email, or WhatsApp according to client preference."
  },
  {
    question: "Are you available for full-time, contract, or freelance work?",
    answer: "Yes! I am open to full-time remote developer roles, fixed-scope contract projects, and freelance AI automation consultations."
  },
  {
    question: "How do we get started on a project together?",
    answer: "Simply click the 'START A CONVERSATION' button above or email me directly. Choose your message purpose, and we can schedule a 1-on-1 discovery call to align on project requirements, scope, and timeline."
  }
];

const FaqItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RevealBottom delay={index * 0.08}>
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 overflow-hidden transition-all duration-300 hover:border-[var(--color-primary-bright)]/60 shadow-sm">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
        >
          <span className="text-sm sm:text-base font-bold text-[var(--color-text)] tracking-tight">
            {faq.question}
          </span>
          <div className={`p-2 rounded-full border border-[var(--color-border)] text-[var(--color-primary-bright)] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[var(--color-primary)] text-white border-transparent' : 'bg-[var(--color-surface)]'}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        {isOpen && (
          <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]/40 font-normal animate-fade-in">
            <p className="pt-3">{faq.answer}</p>
          </div>
        )}
      </div>
    </RevealBottom>
  );
};

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="py-16 md:py-24 relative overflow-hidden"
      >
        {/* Background Large Violet Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary-glow)] rounded-full blur-[160px] pointer-events-none opacity-50" />

        <div className="portfolio-container relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Main Headline & Supporting Callout (Coming from Bottom) */}
            <div className="lg:col-span-7 space-y-6">
              <RevealBottom className="flex items-center gap-3">
                <span className="editorial-label">05 / CONTACT</span>
                <div className="h-[1px] w-12 bg-[var(--color-primary-bright)]" />
              </RevealBottom>

              <RevealBottom distance={50} delay={0.1}>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold display-title tracking-tight text-[var(--color-text)] uppercase leading-[1.05]">
                  LET'S BUILD <br />
                  <span className="text-gradient">SOMETHING</span> <br />
                  REMARKABLE.
                </h2>
              </RevealBottom>

              <RevealBottom distance={40} delay={0.2}>
                <p className="max-w-xl text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed font-normal">
                  Have an idea, product engineering opportunity, or AI automation workflow worth building? Select your purpose below and we'll prepare your email automatically.
                </p>
              </RevealBottom>
            </div>

            {/* Action Callout & Links (Coming from Right) */}
            <RevealRight className="lg:col-span-5 flex flex-col items-start gap-6 p-6 sm:p-8 rounded-3xl glass-panel border border-[var(--color-border-glow)] shadow-2xl relative z-10" distance={60} delay={0.25}>
              <div className="w-full relative py-1 px-1">
                <MagneticButton
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  strength={0.15}
                  className="w-full py-4 sm:py-5 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] transition-colors shadow-xl shadow-[var(--color-primary-glow)] group cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-purple-300" />
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </MagneticButton>
              </div>

              <div className="w-full space-y-4 pt-4 border-t border-[var(--color-border)]">

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] transition-colors text-left cursor-pointer group"
                >
                  <Mail className="w-4 h-4 text-[var(--color-primary-bright)] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{PROFILE_DATA.email}</span>
                </button>

                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[var(--color-primary-bright)] shrink-0" />
                  <span>linkedin.com/in/dev-alimehmood</span>
                </a>

                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[var(--color-primary-bright)] shrink-0" />
                  <span>github.com/dev-alimehmood</span>
                </a>
              </div>
            </RevealRight>

          </div>

          {/* Frequently Asked Questions (Accordion FAQs) */}
          <div className="mt-20 sm:mt-28 pt-16 border-t border-[var(--color-border)] max-w-4xl mx-auto">
            <RevealBottom className="text-center space-y-3 mb-12">
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-[var(--color-primary-bright)] uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary-bright)]" /> COMMON INQUIRIES
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-[var(--color-text)] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-lg mx-auto">
                Got questions before starting a project or scheduling a discovery call? Here are answers to common client questions.
              </p>
            </RevealBottom>

            <div className="space-y-4">
              {FAQS_DATA.map((faq, index) => (
                <FaqItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact Purpose Modal System */}
      <ContactPurposeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
