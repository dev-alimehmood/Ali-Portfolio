import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { MagneticButton } from './MagneticButton';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <MagneticButton
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="w-9 h-9 p-0 shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary-bright)] hover:text-[var(--color-primary-bright)] transition-colors flex items-center justify-center"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-500 hover:rotate-90" />
      ) : (
        <Moon className="w-4 h-4 text-violet-600 transition-transform duration-500 hover:-rotate-12" />
      )}
    </MagneticButton>
  );
};

