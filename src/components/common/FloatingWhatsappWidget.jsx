import React from 'react';
import { WhatsappIcon } from './SocialIcons';
import { PROFILE_DATA } from '../../data/profile';

export const FloatingWhatsappWidget = () => {
  // Default fallback WhatsApp number if not specified in profile data
  const rawNumber = PROFILE_DATA.whatsapp || '+923000000000';
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');

  const defaultMessage = `Hi Ali, I was reviewing your online portfolio and would like to discuss a potential project / opportunity with you!`;
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 left-6 z-[95] select-none">
      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ali Mehmood on WhatsApp"
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/50 hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer border border-emerald-300/30"
      >
        {/* Pulsing Emerald Radar Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none group-hover:opacity-0 transition-opacity" />

        {/* Ambient Back Glow */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 blur-md opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none" />

        {/* WhatsApp Icon */}
        <WhatsappIcon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 text-white transition-transform group-hover:rotate-12" />
      </a>
    </div>
  );
};
