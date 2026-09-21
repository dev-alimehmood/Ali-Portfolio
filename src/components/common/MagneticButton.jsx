import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

export const MagneticButton = ({
  children,
  onClick,
  className = '',
  href,
  target,
  rel,
  strength = 0.35,
  ...props
}) => {
  const magneticRef = useMagnetic(strength);

  const baseStyle = `inline-flex items-center justify-center relative overflow-hidden group transition-all duration-300 select-none ${className}`;

  if (href) {
    return (
      <a
        ref={magneticRef}
        href={href}
        target={target}
        rel={rel}
        className={baseStyle}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={magneticRef}
      onClick={onClick}
      className={baseStyle}
      {...props}
    >
      {children}
    </button>
  );
};
