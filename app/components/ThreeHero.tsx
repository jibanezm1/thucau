"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const PALETTE = ["#68a63a", "#9dce3a", "#159cc4", "#ffd52a", "#ff6b22"];

type Shard = {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  offset: number;
};

function usePointer() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return pointer;
}

function ShardField() {
  const group = useRef<THREE.Group>(null);
  const pointer = usePointer();
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const shards: Shard[] = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 4.5,
          (Math.random() - 0.5) * 3.5 - 1,
        ],
        scale: 0.3 + Math.random() * 0.5,
        color: PALETTE[i % PALETTE.length],
        speed: 0.12 + Math.random() * 0.22,
        offset: Math.random() * Math.PI * 2,
      })),
    []
  );

  useFrame((state) => {
    if (!group.current || reducedMotion) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.045 + pointer.current.x * 0.25;
    group.current.rotation.x = pointer.current.y * 0.12;
    group.current.children.forEach((child, i) => {
      const shard = shards[i];
      child.position.y += Math.sin(t * shard.speed + shard.offset) * 0.0016;
      child.rotation.x = t * shard.speed * 0.6;
      child.rotation.y = t * shard.speed;
    });
  });

  return (
    <group ref={group}>
      {shards.map((shard, i) => (
        <mesh key={i} position={shard.position} scale={shard.scale}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={shard.color}
            flatShading
            roughness={0.35}
            metalness={0.08}
          />
        </mesh>
      ))}
    </group>
  );
}

export function ThreeHero() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight intensity={0.6} position={[4, 4, 5]} />
      <directionalLight color="#159cc4" intensity={0.25} position={[-5, -2, -3]} />
      <ShardField />
    </Canvas>
  );
}
