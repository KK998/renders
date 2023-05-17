"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ground from "./Ground";
import Car from "./Car";
import Rings from "./Rings";

export default function Game() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
        <Car />
        <Rings />
        <Ground />
      </Canvas>
    </Suspense>
  );
}

const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={50} />

      <color attach="background" args={["#000000"]} />

      <spotLight
        intensity={1.5}
        color={[1, 0.25, 0.7]}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        intensity={2}
        color={[0.14, 0.5, 1]}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
};
