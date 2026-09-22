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

  const baseStyle = `inline-flex items-center justify-center relative select-none z-10 hover:z-30 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseStyle}
        {...props}
      >
        <span
          ref={magneticRef}
          className="inline-flex items-center justify-center w-full h-full"
        >
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseStyle}
      {...props}
    >
      <span
        ref={magneticRef}
        className="inline-flex items-center justify-center w-full h-full"
      >
        {children}
      </span>
    </button>
  );
};


