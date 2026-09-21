import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const DigitalCore = ({ isMobile = false }) => {
  const groupRef = useRef(null);
  const outerGlassRef = useRef(null);
  const innerNodeRef = useRef(null);
  const nodesGroupRef = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    // Smooth damped mouse-responsive parallax tracking
    const targetX = state.pointer.x * 0.25;
    const targetY = state.pointer.y * 0.25;

    mousePos.current.x += (targetX - mousePos.current.x) * (delta * 3.0);
    mousePos.current.y += (targetY - mousePos.current.y) * (delta * 3.0);

    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Very subtle parallax and gentle vertical float
      groupRef.current.rotation.y = mousePos.current.x * 0.35;
      groupRef.current.rotation.x = -mousePos.current.y * 0.35;
      groupRef.current.position.y = Math.sin(time * 1.1) * 0.08;
    }

    // 1. Subtle, slow glass crystal rotation
    if (outerGlassRef.current) {
      outerGlassRef.current.rotation.y += delta * 0.15;
      outerGlassRef.current.rotation.x += delta * 0.08;
    }

    // 2. Inner architecture node counter-rotation
    if (innerNodeRef.current) {
      innerNodeRef.current.rotation.y -= delta * 0.22;
      innerNodeRef.current.rotation.z += delta * 0.1;
    }

    // 3. Connected micro-services nodes float
    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y += delta * 0.18;
    }
  });

  // Vertex node coordinates representing system microservice endpoints
  const nodePositions = [
    [1.6, 0, 0],
    [-1.6, 0, 0],
    [0, 1.6, 0],
    [0, -1.6, 0],
    [0, 0, 1.6],
    [0, 0, -1.6]
  ];

  return (
    <group ref={groupRef} scale={isMobile ? 0.7 : 0.9}>
      
      {/* 1. Primary Glass/Metal Geometric Core (Octahedron Architecture) */}
      <mesh ref={outerGlassRef}>
        <octahedronGeometry args={[1.25, 0]} />
        <meshPhysicalMaterial
          color="#A820EC"
          emissive="#6A008F"
          emissiveIntensity={0.18}
          roughness={0.04}
          metalness={0.2}
          transmission={0.94}
          thickness={1.3}
          clearcoat={1}
          clearcoatRoughness={0.04}
          ior={1.52}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* 2. Inner System Node Wireframe Grid */}
      <mesh ref={innerNodeRef} scale={0.65}>
        <icosahedronGeometry args={[1.0, 0]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#9400D3"
          emissiveIntensity={0.9}
          wireframe
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* 3. Subtle Connected Microservice Vertex Nodes */}
      <group ref={nodesGroupRef}>
        {nodePositions.map((pos, idx) => (
          <group key={idx} position={pos}>
            {/* Connected node dot */}
            <mesh scale={0.08}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial
                color="#FFFFFF"
                emissive="#C44DFF"
                emissiveIntensity={2.0}
                roughness={0.1}
                metalness={0.9}
              />
            </mesh>
          </group>
        ))}
      </group>

    </group>
  );
};
