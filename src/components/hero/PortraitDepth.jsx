import React from 'react';

export const PortraitDepth = ({ parallaxOffset = { x: 0, y: 0 }, imageSrc = '/avatar.jpg' }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out flex items-center justify-center"
      style={{
        transform: `translate3d(${parallaxOffset.x * 0.7}px, ${parallaxOffset.y * 0.7}px, 0)`,
      }}
    >
      <div className="w-[74%] sm:w-[78%] h-[82%] sm:h-[86%] rounded-2xl overflow-hidden opacity-25 dark:opacity-40 blur-xl transform scale-105 translate-x-3 translate-y-3">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover object-center filter grayscale brightness-50"
        />
      </div>
    </div>
  );
};
