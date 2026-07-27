"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function roundedRectShape(width: number, height: number, radius: number) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

function Frame({ x }: { x: number }) {
  const frameGeometry = useMemo(() => {
    const outer = roundedRectShape(2.28, 1.34, 0.42);
    const inner = roundedRectShape(1.92, 1.02, 0.31);
    outer.holes.push(inner);
    const geometry = new THREE.ExtrudeGeometry(outer, {
      depth: 0.13,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.055,
      bevelThickness: 0.04,
      curveSegments: 18,
    });
    geometry.center();
    return geometry;
  }, []);

  return (
    <group position={[x, 0, 0]}>
      <mesh geometry={frameGeometry}>
        <meshStandardMaterial color="#141715" metalness={0.88} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.02]}>
        <shapeGeometry args={[roundedRectShape(1.92, 1.02, 0.31), 18]} />
        <meshPhysicalMaterial
          color="#b9d1c5"
          transparent
          opacity={0.17}
          roughness={0.08}
          metalness={0.05}
          transmission={0.45}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0, 0.085]}>
        <torusGeometry args={[0.09, 0.025, 16, 36]} />
        <meshBasicMaterial color="#edff7a" transparent opacity={0.42} />
      </mesh>
    </group>
  );
}

function GlassesModel() {
  const glasses = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!glasses.current) return;
    const targetX = state.pointer.y * 0.13 - 0.04;
    const targetY = state.pointer.x * 0.24;
    glasses.current.rotation.x = THREE.MathUtils.lerp(glasses.current.rotation.x, targetX, 0.035);
    glasses.current.rotation.y = THREE.MathUtils.lerp(
      glasses.current.rotation.y,
      targetY + state.clock.elapsedTime * 0.105,
      0.025,
    );
    glasses.current.position.y = Math.sin(state.clock.elapsedTime * 0.75) * 0.045;
    glasses.current.rotation.z += delta * 0.002;
  });

  return (
    <Float speed={1.05} rotationIntensity={0.08} floatIntensity={0.2}>
      <group ref={glasses} rotation={[-0.05, -0.2, -0.025]} scale={0.92}>
        <Frame x={-1.22} />
        <Frame x={1.22} />

        <mesh position={[0, 0.12, 0]}>
          <capsuleGeometry args={[0.1, 0.58, 8, 20]} />
          <meshStandardMaterial color="#181b19" metalness={0.88} roughness={0.22} />
        </mesh>

        <mesh position={[-2.36, 0.25, -0.47]} rotation={[0.05, 0.22, -0.08]}>
          <boxGeometry args={[0.19, 0.24, 2.25]} />
          <meshStandardMaterial color="#171a18" metalness={0.86} roughness={0.23} />
        </mesh>
        <mesh position={[2.36, 0.25, -0.47]} rotation={[0.05, -0.22, 0.08]}>
          <boxGeometry args={[0.19, 0.24, 2.25]} />
          <meshStandardMaterial color="#171a18" metalness={0.86} roughness={0.23} />
        </mesh>

        <group position={[-2.37, 0.28, 0.07]}>
          <mesh>
            <cylinderGeometry args={[0.23, 0.23, 0.15, 36]} />
            <meshStandardMaterial color="#0a0c0b" metalness={0.72} roughness={0.18} />
          </mesh>
          <mesh position={[0, 0.09, 0]}>
            <cylinderGeometry args={[0.105, 0.105, 0.03, 32]} />
            <meshPhysicalMaterial color="#6e8ea0" metalness={0.75} roughness={0.08} clearcoat={1} />
          </mesh>
          <pointLight color="#edff7a" intensity={0.55} distance={1.2} position={[0, 0.22, 0.2]} />
        </group>

        <mesh position={[2.36, 0.28, 0.08]}>
          <boxGeometry args={[0.08, 0.08, 0.36]} />
          <meshBasicMaterial color="#edff7a" />
        </mesh>
      </group>
    </Float>
  );
}

function SceneDetails() {
  return (
    <>
      <ambientLight intensity={1.55} />
      <directionalLight position={[2, 4, 5]} intensity={3.2} color="#f5fff0" />
      <pointLight position={[-4, -1, 4]} intensity={14} distance={9} color="#edff7a" />
      <pointLight position={[4, 2, 1]} intensity={8} distance={8} color="#ffd5c3" />
      <GlassesModel />
      <mesh position={[0, 0, -1.3]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.75, 0.012, 8, 140]} />
        <meshBasicMaterial color="#edff7a" transparent opacity={0.2} />
      </mesh>
      <mesh position={[0, 0, -1.35]} rotation={[Math.PI / 2, 0, 0]} scale={1.18}>
        <torusGeometry args={[2.75, 0.006, 8, 140]} />
        <meshBasicMaterial color="#edff7a" transparent opacity={0.08} />
      </mesh>
    </>
  );
}

export function HeroGlasses() {
  return (
    <div className="heroProduct" aria-label="360 度旋轉展示 AI 眼鏡">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.15, 7.8], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <SceneDetails />
      </Canvas>
      <div className="productHalo" aria-hidden="true" />
      <div className="productCaption">
        <span>AI VISION / FIELD EDITION</span>
        <strong>第一人稱即時錄影</strong>
      </div>
      <div className="productSpec" aria-hidden="true">
        <span>4K</span><span>LIVE</span><span>ALL DAY</span>
      </div>
    </div>
  );
}
