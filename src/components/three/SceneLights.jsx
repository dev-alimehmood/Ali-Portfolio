import React from 'react';

export const SceneLights = () => {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[10, 15, 10]} intensity={1.8} color="#FFFFFF" />
      <pointLight position={[-10, -8, -8]} intensity={2.0} color="#9400D3" />
      <pointLight position={[6, 6, 6]} intensity={1.5} color="#C44DFF" />
      <spotLight
        position={[0, 10, 0]}
        intensity={2.2}
        color="#9400D3"
        angle={0.5}
        penumbra={1}
      />
    </>
  );
};
