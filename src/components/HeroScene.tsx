'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ── Animated core orb ─────────────────────────────────── */
function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.25;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1.4, 128, 128]}>
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.55}
          speed={2.5}
          roughness={0.1}
          metalness={0.8}
          emissive="#3b0764"
          emissiveIntensity={0.6}
        />
      </Sphere>
    </Float>
  );
}

/* ── Orbiting ring ─────────────────────────────────────── */
function OrbitRing() {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ringRef.current.rotation.x = Math.PI / 2.5;
    ringRef.current.rotation.z = clock.getElapsedTime() * 0.4;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.5, 0.04, 16, 120]} />
      <meshStandardMaterial
        color="#06b6d4"
        emissive="#06b6d4"
        emissiveIntensity={1.5}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}

/* ── Outer slower ring ─────────────────────────────────── */
function OuterRing() {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ringRef.current.rotation.x = -Math.PI / 3;
    ringRef.current.rotation.z = -clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.6, 0.02, 16, 120]} />
      <meshStandardMaterial
        color="#f59e0b"
        emissive="#f59e0b"
        emissiveIntensity={1.2}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}

/* ── Scene export ──────────────────────────────────────── */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#7c3aed" />
      <pointLight position={[-5, -5, 3]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[0, 5, -5]} intensity={1} color="#f59e0b" />

      <Stars
        radius={80}
        depth={50}
        count={4000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      <CoreOrb />
      <OrbitRing />
      <OuterRing />
    </Canvas>
  );
}
