import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Color, Mesh } from "three";

const Rings = () => {
  const ringsRef = useRef<any>([]); // FIX: any :/

  useFrame(() => {
    ringsRef.current.forEach((el: Mesh, i: number) => {
      const z = (i - 7) * 4;
      const dist = Math.abs(z);
      const material = el.material as any; // does not support emissive... types definitions are corrupted? / wrong version?

      el.position.set(-1.5, 0, -z);
      el.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      let colorScale = 1;
      if (dist > 2) {
        colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }
      colorScale *= 0.5;

      if (i % 2 === 0) {
        material.emissive = new Color(6, 0.15, 0.7).multiplyScalar(colorScale);
      } else {
        material.emissive = new Color(0.1, 0.7, 3).multiplyScalar(colorScale);
      }
    });
  });

  return (
    <>
      {[...Array(14)].map((_, i) => (
        <mesh
          ref={(el) => (ringsRef.current[i] = el)}
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
        >
          <torusGeometry args={[3.25, 0.033, 20, 160]} />
          <meshStandardMaterial color={[0, 0, 0]} emissive={[0.5, 0.5, 0.5]} />
        </mesh>
      ))}
    </>
  );
};

export default Rings;
