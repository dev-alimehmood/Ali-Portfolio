import React, { useState, useEffect, useCallback } from 'react';
import { Rocket, Bot, Briefcase, MessageSquare, PhoneCall, X, Sparkles, ArrowRight, Copy, Check, Mail, ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

const CONVERSATION_OPTIONS = [
  {
    id: 'project',
    title: 'Project Inquiry',
    icon: Rocket,
    desc: 'I have a website, app, SaaS, or digital product idea.',
    subject: 'Project Inquiry - Discussion Request',
    getBody: () => 
      `Hi Ali,\n\nI was reviewing your online portfolio and was very impressed by your work in full-stack engineering and digital product development.\n\nI would like to discuss a potential project with you and explore your availability to help bring our idea to life.\n\nPlease let me know when you might be free for an initial discovery conversation.\n\nBest Regards,`
  },
  {
    id: 'ai_automation',
    title: 'AI Automation',
    icon: Bot,
    desc: 'I need workflow automation, AI agents, integrations, or process optimization.',
    subject: 'AI Automation Consultation',
    getBody: () => 
      `Hi Ali,\n\nI came across your portfolio and was particularly interested in your expertise in AI automation, AI agents, and workflow optimization.\n\nI would love to discuss an automation solution for our current processes to streamline our operations.\n\nLooking forward to hearing from you.\n\nBest Regards,`
  },
  {
    id: 'job',
    title: 'Job Opportunity',
    icon: Briefcase,
    desc: 'I have a full-time, part-time, freelance, or contract opportunity.',
    subject: 'Job Opportunity - Ali Mehmood',
    getBody: () => 
      `Hi Ali,\n\nI recently reviewed your portfolio and technical background. Your experience in modern web development and scalable architectures aligns very well with what we are looking for.\n\nI would like to discuss a professional opportunity with you. Please let me know if you are open to exploring new roles or contract projects.\n\nThank you.\n\nBest Regards,`
  },
  {
    id: 'general',
    title: 'General Discussion',
    icon: MessageSquare,
    desc: "I'd like to connect, collaborate, or ask a question.",
    subject: "Let's Connect",
    getBody: () => 
      `Hi Ali,\n\nI visited your portfolio and wanted to reach out to connect with you regarding your work in full-stack web development and AI systems.\n\nLooking forward to staying in touch and exchanging ideas.\n\nBest Regards,`
  },
  {
    id: 'schedule_call',
    title: 'Schedule a Call',
    icon: PhoneCall,
    desc: "I'd like to schedule a 1-on-1 call with you.",
    subject: 'Call Discussion Request',
    getBody: () => 
      `Hi Ali,\n\nAfter exploring your portfolio, I would like to schedule a 1-on-1 call with you to discuss a potential collaboration in more detail.\n\nPlease share your available time slots or let me know what works best for you.\n\nBest Regards,`
  }
];

export const ContactPurposeModal = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [copiedType, setCopiedType] = useState(null);
  const [isSentSubmitted, setIsSentSubmitted] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedOption(null);
      setCopiedType(null);
      setIsSentSubmitted(false);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const recipient = PROFILE_DATA.email || 'dev.alimehmood@gmail.com';

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleCopyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  // Open Gmail Web Composer & show Thank You screen
  const handleOpenGmail = () => {
    if (!selectedOption) return;
    const encSub = encodeURIComponent(selectedOption.subject);
    const encBody = encodeURIComponent(selectedOption.getBody());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encSub}&body=${encBody}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setIsSentSubmitted(true);
  };

  // Open Outlook Web Composer & show Thank You screen
  const handleOpenOutlook = () => {
    if (!selectedOption) return;
    const encSub = encodeURIComponent(selectedOption.subject);
    const encBody = encodeURIComponent(selectedOption.getBody());
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${recipient}&subject=${encSub}&body=${encBody}`;
    window.open(outlookUrl, '_blank', 'noopener,noreferrer');
    setIsSentSubmitted(true);
  };

  // Mailto Fallback & show Thank You screen
  const handleOpenMailto = () => {
    if (!selectedOption) return;
    const encSub = encodeURIComponent(selectedOption.subject);
    const encBody = encodeURIComponent(selectedOption.getBody());
    const mailtoUrl = `mailto:${recipient}?subject=${encSub}&body=${encBody}`;

    try {
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      window.open(mailtoUrl, '_self');
    }
    setIsSentSubmitted(true);
  };

  return (
    <div
      style={{ zIndex: 99999 }}
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Card Container */}
      <div
        data-lenis-prevent
        className="relative w-full max-w-2xl bg-[#110D16] border border-purple-500/30 rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden text-[#F7F3FA] max-h-[88vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Ambient Radial Purple Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

        {/* STEP 3: Attractive Thank You Confirmation Screen */}
        {isSentSubmitted ? (
          <div className="py-8 sm:py-12 flex flex-col items-center text-center space-y-5 animate-fade-in">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-950 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-xl shadow-purple-900/50">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 animate-bounce" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="space-y-2.5 max-w-md">
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-400" /> DIRECT TRANSMISSION SUCCESSFUL
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white uppercase">
                Email Received!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                Your email has been <strong className="text-emerald-400 font-semibold">sent &amp; received successfully</strong>. Thank you for connecting through my portfolio! I will review your request and get back to you within <strong className="text-purple-300 font-semibold">24 hours</strong>.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-purple-600 hover:bg-purple-500 text-white shadow-xl transition-all cursor-pointer"
              >
                RETURN TO PORTFOLIO
              </button>
            </div>
          </div>
        ) : !selectedOption ? (
          /* STEP 1: Purpose Selection Modal */
          <>
            {/* Fixed Header Bar */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 shrink-0">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" /> CONTACT SYSTEM
                </div>
                <h2 id="modal-title" className="text-xl sm:text-3xl font-extrabold font-display tracking-tight text-white uppercase">
                  How can I help you?
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Choose the purpose of your message and we'll prepare the email for you.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 sm:p-2.5 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 ml-3"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Cards Container */}
            <div
              data-lenis-prevent
              className="py-4 space-y-3 overflow-y-auto overflow-x-hidden pr-1.5 scrollbar-thin scrollbar-thumb-purple-600/40 hover:scrollbar-thumb-purple-500/70 scrollbar-track-transparent my-2"
              style={{ touchAction: 'pan-y' }}
            >
              {CONVERSATION_OPTIONS.map((option) => {
                const IconComp = option.icon;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelectOption(option)}
                    className="w-full text-left p-3.5 sm:p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-950/50 hover:border-purple-500/60 transition-all duration-300 group flex items-center justify-between gap-3 sm:gap-4 cursor-pointer shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-900/30"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                          {option.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-normal truncate mt-0.5 font-normal">
                          {option.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono font-bold bg-purple-600 text-white group-hover:bg-purple-500 transition-colors shrink-0">
                      <span>SELECT</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Fixed Footer Note */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
              <span className="truncate">Direct Email: <strong className="text-white font-semibold">{recipient}</strong></span>
              <button
                type="button"
                onClick={() => handleCopyText(recipient, 'email_direct')}
                className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 shrink-0 ml-2"
              >
                {copiedType === 'email_direct' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'email_direct' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </>
        ) : (
          /* STEP 2: Prepared Email Preview & Direct Send Options */
          <>
            {/* Header Bar with Back Button */}
            <div className="flex items-start justify-between pb-3 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  type="button"
                  onClick={() => setSelectedOption(null)}
                  className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  aria-label="Back to purpose selection"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold truncate">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" /> PREPARED EMAIL PREVIEW
                  </div>
                  <h2 className="text-lg sm:text-2xl font-extrabold font-display tracking-tight text-white uppercase mt-0.5 truncate">
                    {selectedOption.title}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2.5 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 ml-3"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div
              data-lenis-prevent
              className="py-3 space-y-3 overflow-y-auto overflow-x-hidden pr-1.5 my-2 scrollbar-thin scrollbar-thumb-purple-600/40 hover:scrollbar-thumb-purple-500/70 scrollbar-track-transparent"
              style={{ touchAction: 'pan-y' }}
            >
              {/* Recipient & Subject Header */}
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-white/10">
                  <span className="text-slate-500 uppercase tracking-wider font-semibold">To:</span>
                  <span className="text-purple-300 font-bold truncate ml-2">{recipient}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 pt-1">
                  <span className="text-slate-500 uppercase tracking-wider font-semibold shrink-0">Subject:</span>
                  <span className="text-white font-bold truncate ml-2">{selectedOption.subject}</span>
                </div>
              </div>

              {/* Message Body Box (Clean Ready Email without prompts) */}
              <div className="relative p-3.5 sm:p-4 rounded-2xl bg-[#0B080F] border border-purple-500/20 text-xs sm:text-sm font-mono text-slate-200 leading-relaxed max-h-56 overflow-y-auto whitespace-pre-wrap scrollbar-thin scrollbar-thumb-purple-600/30 select-text">
                {selectedOption.getBody()}
              </div>
            </div>

            {/* Fixed Action Buttons Footer Grid */}
            <div className="pt-3 border-t border-white/10 space-y-2.5 shrink-0">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold block">
                SEND VIA WEB CLIENT OR COPY:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Open Gmail */}
                <button
                  type="button"
                  onClick={handleOpenGmail}
                  className="w-full py-2.5 px-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-red-600/90 hover:bg-red-500 text-white shadow-lg shadow-red-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Gmail</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </button>

                {/* Open Outlook */}
                <button
                  type="button"
                  onClick={handleOpenOutlook}
                  className="w-full py-2.5 px-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-blue-600/90 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Outlook</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </button>

                {/* Copy Full Message */}
                <button
                  type="button"
                  onClick={() => {
                    handleCopyText(`Subject: ${selectedOption.subject}\n\n${selectedOption.getBody()}`, 'message');
                    setIsSentSubmitted(true);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  {copiedType === 'message' ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedType === 'message' ? 'Copied!' : 'Copy Message'}</span>
                </button>
              </div>

              {/* Mailto Fallback Link */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Default App Fallback:</span>
                <button
                  type="button"
                  onClick={handleOpenMailto}
                  className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Open Mailto App</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
