import React from 'react';

export const LightSweep = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-10 opacity-75">
      <div
        className="w-[180%] h-[200%] absolute -top-1/2 -left-1/2 bg-gradient-to-r from-transparent via-blue-400/10 dark:via-blue-400/15 to-transparent transform -rotate-45 animate-light-sweep"
        style={{
          animationDuration: '10s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease-in-out',
        }}
      />
    </div>
  );
};
