import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Download, ExternalLink, Mail, Phone, MapPin, 
  Briefcase, GraduationCap, Code2, Sparkles, Check, Copy, Printer,
  FileText, Eye, CheckCircle2, Award, Terminal, ArrowUpRight, Search
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { EXPERIENCE_DATA } from '../../data/experience';
import { EDUCATION_DATA } from '../../data/education';
import { SKILLS_DATA } from '../../data/skills';

export const InteractiveResumeModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' | 'experience' | 'skills' | 'education'
  const [copiedField, setCopiedField] = useState(null);
  const [isPrinting, setIsPrinting] = useState(false);
  const [skillSearch, setSkillSearch] = useState('');
  const printIframeRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Direct PDF Print Functionality for Ali_Mehmood_Resume.pdf
  const handlePrintPDF = () => {
    setIsPrinting(true);
    const pdfUrl = PROFILE_DATA.resume || '/Ali_Mehmood_Resume.pdf';

    try {
      if (!printIframeRef.current) {
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        iframe.src = pdfUrl;
        document.body.appendChild(iframe);
        printIframeRef.current = iframe;

        iframe.onload = () => {
          setTimeout(() => {
            try {
              iframe.contentWindow.focus();
              iframe.contentWindow.print();
            } catch (err) {
              window.open(pdfUrl, '_blank');
            }
            setIsPrinting(false);
          }, 300);
        };
      } else {
        printIframeRef.current.contentWindow.focus();
        printIframeRef.current.contentWindow.print();
        setIsPrinting(false);
      }
    } catch (error) {
      window.open(pdfUrl, '_blank');
      setIsPrinting(false);
    }
  };

  if (!isOpen) return null;

  const tabs = [
    { id: 'pdf', label: 'PDF DOCUMENT', icon: FileText },
    { id: 'experience', label: `EXPERIENCE (${EXPERIENCE_DATA.length})`, icon: Briefcase },
    { id: 'skills', label: 'SKILLS MATRIX', icon: Code2 },
    { id: 'education', label: 'EDUCATION', icon: GraduationCap },
  ];

  // Filter skills based on user search query
  const filteredSkillCategories = (SKILLS_DATA.categories || []).map(cat => ({
    ...cat,
    skills: cat.skills.filter(sk => {
      const name = typeof sk === 'string' ? sk : sk.name || '';
      return name.toLowerCase().includes(skillSearch.toLowerCase());
    })
  })).filter(cat => cat.skills.length > 0);

  return createPortal(
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
        data-lenis-prevent="true"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-all"
        />

        {/* Executive Modal Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-6xl h-[92vh] max-h-[900px] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 my-auto transition-colors duration-300"
          data-lenis-prevent="true"
        >
          {/* Header Bar */}
          <div className="px-5 sm:px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] flex flex-wrap items-center justify-between gap-3 sticky top-0 z-30 shadow-sm shrink-0">
            {/* Title & Badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/15 border border-[var(--color-primary-bright)]/40 flex items-center justify-center text-[var(--color-primary-bright)] font-bold shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg font-extrabold text-[var(--color-text)] font-display uppercase tracking-tight">
                    {PROFILE_DATA.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] font-mono">
                  {PROFILE_DATA.title}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <button
                onClick={handlePrintPDF}
                disabled={isPrinting}
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:border-[var(--color-primary-bright)] hover:text-[var(--color-primary-bright)] transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                title="Print Official PDF File"
              >
                <Printer className="w-3.5 h-3.5 text-[var(--color-primary-bright)]" />
                <span>{isPrinting ? 'PRINTING...' : 'PRINT PDF'}</span>
              </button>

              <a
                href={PROFILE_DATA.resume || '/Ali_Mehmood_Resume.pdf'}
                download="Ali_Mehmood_Resume.pdf"
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] transition-all flex items-center gap-1.5 shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD CV</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-red-500/50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Split Container */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

            {/* LEFT SIDEBAR: Candidate Overview & Quick Data (4 Cols) */}
            <div 
              className="lg:col-span-4 border-r border-[var(--color-border)] bg-[var(--color-surface)]/40 p-5 overflow-y-auto space-y-5 custom-scrollbar"
              data-lenis-prevent="true"
            >
              
              {/* Profile Head Card */}
              <div className="p-4 sm:p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-3.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-primary-bright)]/50 shrink-0 bg-[var(--color-bg)] shadow-md">
                    <img 
                      src="/ali_portrait.jpg" 
                      alt="Ali Mehmood" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[var(--color-text)] font-display">
                      {PROFILE_DATA.name}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] font-mono">
                      {PROFILE_DATA.location}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] pt-3">
                  {PROFILE_DATA.aboutBio}
                </p>
              </div>

              {/* Contact Data Card */}
              <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-3">
                <h5 className="text-xs font-mono font-bold text-[var(--color-primary-bright)] uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CONTACT INFO</span>
                </h5>

                <div className="space-y-2 text-xs font-mono">
                  {/* Email */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <div className="flex items-center gap-2 truncate pr-2">
                      <Mail className="w-3.5 h-3.5 text-[var(--color-primary-bright)] shrink-0" />
                      <span className="truncate text-[var(--color-text)]">{PROFILE_DATA.email}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PROFILE_DATA.email, 'email')}
                      className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] cursor-pointer shrink-0"
                      title="Copy Email"
                    >
                      {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[var(--color-primary-bright)] shrink-0" />
                      <span className="text-[var(--color-text)]">{PROFILE_DATA.whatsapp}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PROFILE_DATA.whatsapp, 'phone')}
                      className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-primary-bright)] cursor-pointer shrink-0"
                      title="Copy WhatsApp"
                    >
                      {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-center">
                  <div className="text-xl font-extrabold text-[var(--color-text)] font-display text-gradient">1.5+</div>
                  <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">Yrs Experience</div>
                </div>
                <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-center">
                  <div className="text-xl font-extrabold text-[var(--color-text)] font-display text-gradient">15+</div>
                  <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">Projects Built</div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary-bright)] hover:text-[var(--color-primary-bright)] transition-colors text-xs font-mono font-bold uppercase flex items-center justify-center gap-1.5"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary-bright)] hover:text-[var(--color-primary-bright)] transition-colors text-xs font-mono font-bold uppercase flex items-center justify-center gap-1.5"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* RIGHT MAIN AREA: Interactive Tab Content (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col overflow-hidden bg-[var(--color-bg)]">

              {/* Tab Navigation Strip */}
              <div className="px-5 sm:px-6 border-b border-[var(--color-border)] bg-[var(--color-surface)]/60 flex items-center gap-2 overflow-x-auto text-xs font-mono font-bold shrink-0">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3.5 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'border-[var(--color-primary-bright)] text-[var(--color-primary-bright)] font-bold'
                          : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Scrollable Tab Content Container with data-lenis-prevent */}
              <div 
                className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 custom-scrollbar"
                data-lenis-prevent="true"
              >

                {/* TAB 1: PDF Viewer */}
                {activeTab === 'pdf' && (
                  <div className="w-full h-full min-h-[480px] rounded-xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)] flex flex-col">
                    <div className="px-4 py-2.5 bg-[var(--color-surface)] border-b border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] shrink-0">
                      <span className="font-semibold text-[var(--color-text)]">Official Document: Ali_Mehmood_Resume.pdf</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handlePrintPDF}
                          className="hover:text-[var(--color-primary-bright)] flex items-center gap-1 cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5" /> Print
                        </button>
                        <a
                          href="/Ali_Mehmood_Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--color-primary-bright)] flex items-center gap-1"
                        >
                          Open Direct <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                    <iframe
                      src={`${PROFILE_DATA.resume || '/Ali_Mehmood_Resume.pdf'}#toolbar=1&navpanes=0`}
                      className="w-full flex-1 border-0 min-h-[450px]"
                      title="Ali Mehmood Official Resume PDF"
                      data-lenis-prevent="true"
                    />
                  </div>
                )}

                {/* TAB 2: Experience Timeline */}
                {activeTab === 'experience' && (
                  <div className="space-y-5">
                    {EXPERIENCE_DATA.map((exp) => (
                      <div
                        key={exp.id}
                        className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 hover:border-[var(--color-primary-bright)]/40 transition-colors space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border)] pb-3">
                          <div>
                            <h4 className="text-base font-extrabold text-[var(--color-text)] font-display uppercase tracking-tight">
                              {exp.role}
                            </h4>
                            <p className="text-xs font-mono text-[var(--color-primary-bright)] font-bold pt-0.5">
                              {exp.company} &bull; {exp.location}
                            </p>
                          </div>
                          <span className="text-xs font-mono text-[var(--color-text-muted)] px-3 py-1 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] font-medium">
                            {exp.period}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h5 className="text-[11px] font-mono uppercase text-[var(--color-text-muted)] font-bold tracking-wider">
                            KEY RESPONSIBILITIES:
                          </h5>
                          <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)] leading-relaxed">
                            {exp.responsibilities.map((res, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-bright)] shrink-0 mt-0.5" />
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[10px] font-mono text-[var(--color-text-muted)] font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* TAB 3: Skills Matrix */}
                {activeTab === 'skills' && (
                  <div className="space-y-4">
                    {/* Search Bar for Skills */}
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-[var(--color-text-muted)]" />
                      <input
                        type="text"
                        placeholder="Search skills (e.g. React, NestJS, Docker, AWS)..."
                        value={skillSearch}
                        onChange={(e) => setSkillSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary-bright)] transition-colors placeholder:text-[var(--color-text-dim)]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredSkillCategories.map((cat, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 space-y-3 hover:border-[var(--color-primary-bright)]/40 transition-colors"
                        >
                          <div className="flex items-center gap-2 border-b border-[var(--color-border)] pb-2.5">
                            <Code2 className="w-4 h-4 text-[var(--color-primary-bright)]" />
                            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-text)]">
                              {cat.title}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {cat.skills.map((sk, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-3 py-1.5 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary-bright)] border border-[var(--color-primary-bright)]/25 text-xs font-mono font-semibold hover:border-[var(--color-primary-bright)] hover:bg-[var(--color-primary)]/20 transition-all"
                              >
                                {sk.name || sk}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 4: Education */}
                {activeTab === 'education' && (
                  <div className="space-y-4">
                    {EDUCATION_DATA.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 space-y-2 hover:border-[var(--color-primary-bright)]/40 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-[var(--color-primary-bright)] font-bold">
                          <span>{edu.institution}</span>
                          <span>{edu.period}</span>
                        </div>
                        <div className="text-base font-extrabold text-[var(--color-text)] font-display">
                          {edu.degree}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* Footer Status Bar */}
          <div className="px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Target File: <code className="text-[var(--color-primary-bright)] font-bold">/Ali_Mehmood_Resume.pdf</code></span>
            </div>
            <span>Executive Portfolio Modal</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
