import React from 'react';
import { Send, Calendar, Clock, Sparkles, FileText, CheckCircle, Activity, Globe, Layout, ShieldCheck } from 'lucide-react';

export const ProjectVisualComposition = ({ type }) => {
  switch (type) {
    case 'chat':
      return (
        <div className="w-full h-full min-h-[320px] md:min-h-[420px] p-6 sm:p-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[24px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
          {/* Ambient Glow Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-glow)] blur-3xl pointer-events-none opacity-40" />

          {/* PulseChat UI Mockup */}
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center text-white font-bold font-mono text-sm shadow-md">
                PC
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--color-text)] flex items-center gap-2 font-mono">
                  PulseChat Room <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h4>
                <p className="text-[11px] text-[var(--color-text-muted)] font-mono">Socket.io • JWT Authenticated</p>
              </div>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-semibold border border-emerald-500/30">
              Live WebSocket 14ms
            </span>
          </div>

          <div className="space-y-3.5 py-6 relative z-10">
            <div className="max-w-[78%] p-4 rounded-2xl rounded-tl-none bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] text-xs space-y-1 shadow-sm">
              <p className="font-semibold text-[var(--color-primary-bright)] text-[10px] font-mono">SYSTEM LOG // CLIENT_08</p>
              <p className="leading-relaxed">JWT handshake established. Real-time message broadcast active via Socket.io.</p>
              <span className="text-[9px] text-[var(--color-text-dim)] font-mono block text-right">10:42 AM</span>
            </div>

            <div className="max-w-[78%] ml-auto p-4 rounded-2xl rounded-tr-none bg-[var(--color-primary)] text-white text-xs space-y-1 shadow-lg shadow-[var(--color-primary-glow)]">
              <p className="leading-relaxed">MERN stack socket handlers synced with MongoDB persistence.</p>
              <span className="text-[9px] text-white/70 font-mono block text-right">10:43 AM</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-4 border-t border-[var(--color-border)] relative z-10">
            <div className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-full px-4 py-2.5 text-xs text-[var(--color-text-muted)] font-mono flex items-center justify-between">
              <span>Type message... (Socket connected)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <button className="p-2.5 rounded-full bg-[var(--color-primary)] text-white shrink-0 hover:bg-[var(--color-primary-bright)] transition-colors shadow-md">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      );

    case 'mobile':
      return (
        <div className="w-full h-full min-h-[320px] md:min-h-[420px] p-6 sm:p-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[24px] flex items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="w-60 h-[360px] rounded-[36px] border-4 border-[var(--color-border)] bg-[var(--color-bg)] p-4 flex flex-col justify-between shadow-2xl relative">
            <div className="w-24 h-4 bg-[var(--color-border)] rounded-full mx-auto mb-3" />
            
            <div className="space-y-3.5">
              <div className="flex items-center justify-between text-[var(--color-text)]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[var(--color-primary-bright)]" />
                  <span className="text-xs font-bold font-mono">DoctorCare</span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">API READY</span>
              </div>

              <div className="p-3 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] space-y-1 shadow-sm">
                <span className="text-[9px] uppercase tracking-wider text-[var(--color-primary-bright)] font-mono font-semibold">Angular / Ionic</span>
                <p className="text-xs font-bold">Dr. Sarah Jenkins</p>
                <div className="flex items-center gap-2 text-[10px] text-[var(--color-text-muted)] font-mono pt-0.5">
                  <Clock className="w-3 h-3 text-emerald-400" /> 02:30 PM Today
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[var(--color-surface)]/60 border border-[var(--color-border)] text-[var(--color-text)] space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] font-mono">PHP Slim API</span>
                <p className="text-xs font-semibold">Patient Record Sync</p>
              </div>
            </div>

            <div className="w-full py-2.5 bg-[var(--color-primary)] rounded-full text-center text-white text-[11px] font-bold font-mono uppercase tracking-wider shadow-md">
              Book Appointment
            </div>
          </div>
        </div>
      );

    case 'corporate':
      return (
        <div className="w-full h-full min-h-[320px] md:min-h-[420px] p-6 sm:p-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[24px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-[var(--color-text-muted)]">influxcomms.com</span>
          </div>

          <div className="space-y-4 py-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-glow)] text-[var(--color-primary-bright)] border border-[var(--color-border-glow)] text-xs font-mono font-semibold">
              React.js • Tailwind CSS • Framer Motion
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[var(--color-text)] tracking-tight">
              Next-Gen Business Communications
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-md mx-auto leading-relaxed">
              Responsive corporate digital platform optimized for user conversion, high aesthetic appeal, and brand clarity.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 pt-2">
            <div className="p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center text-[var(--color-text)] font-mono text-[10px] font-semibold">BRANDING</div>
            <div className="p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center text-[var(--color-text)] font-mono text-[10px] font-semibold">USABILITY</div>
            <div className="p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center text-[var(--color-text)] font-mono text-[10px] font-semibold">PERFORMANCE</div>
          </div>
        </div>
      );

    case 'hr':
      return (
        <div className="w-full h-full min-h-[320px] md:min-h-[420px] p-6 sm:p-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[24px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="space-y-2">
            <span className="editorial-label text-xs font-mono font-bold text-[var(--color-primary-bright)]">ENTERPRISE PORTAL COMPONENTS</span>
            <h4 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] font-display">ZamZam HR Solutions Platform</h4>
          </div>

          <div className="grid grid-cols-2 gap-3.5 my-4">
            <div className="p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-1.5">
              <Layout className="w-4 h-4 text-[var(--color-primary-bright)]" />
              <p className="text-xs font-bold text-[var(--color-text)]">Company Profile</p>
              <p className="text-[10px] text-[var(--color-text-muted)] font-mono">Modular showcases</p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-1.5">
              <Sparkles className="w-4 h-4 text-[var(--color-primary-bright)]" />
              <p className="text-xs font-bold text-[var(--color-text)]">Services Section</p>
              <p className="text-[10px] text-[var(--color-text-muted)] font-mono">Reusable architecture</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border-glow)] text-[var(--color-text)] flex items-center justify-between">
            <span className="text-xs font-semibold font-mono">Contact &amp; Intake Modules</span>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-[var(--color-primary-glow)] text-[var(--color-primary-bright)] font-mono font-semibold">React.js</span>
          </div>
        </div>
      );

    case 'cv':
      return (
        <div className="w-full h-full min-h-[320px] md:min-h-[420px] p-6 sm:p-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[24px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[var(--color-primary-bright)]" />
              <span className="text-xs font-bold text-[var(--color-text)] font-display">SmartCV Document Engine</span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/30">PDF Generator</span>
          </div>

          <div className="my-4 p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--color-text)] font-mono">Step-by-Step Resume Builder</span>
              <span className="text-[10px] text-[var(--color-text-muted)] font-mono">Node.js + MongoDB</span>
            </div>
            <div className="w-full bg-[var(--color-surface)] h-2 rounded-full overflow-hidden border border-[var(--color-border)]">
              <div className="bg-gradient-to-r from-blue-500 to-[var(--color-primary-bright)] h-full w-4/5" />
            </div>
            <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] font-mono">
              <span>Personal Data</span>
              <span>Experience</span>
              <span className="text-emerald-400 font-bold">PDF Export Ready</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-mono text-[11px]">Dynamic state forms with server-assisted document rendering</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
