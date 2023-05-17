import React, { useState } from "react";
import * as THREE from "three";
import { Plane } from "@react-three/drei";
import { useDashStore } from "./store";
import { useFrame, useLoader } from "@react-three/fiber";

export default function Ground() {
  const isGamePlaying = useDashStore((state) => state.gameStatus === "playing");
  const [ground, setGround] = useState(40);

  useFrame(({ clock }) => {
    if (isGamePlaying) {
      const time = clock.getElapsedTime();
      const speed = 0.1;
      const offset = time * speed;
      setGround((p) => p + offset);
    }
  });

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <CustomPane ground={ground} x={-1} />
      <CustomPane ground={ground} x={0} />
      <CustomPane ground={ground} x={1} />
    </group>
  );
}

type CustomPaneProps = {
  ground: number;
  x: number;
};

const CustomPane = ({ ground, x }: CustomPaneProps) => {
  const texture = useLoader(THREE.TextureLoader, "/ground.jpeg");
  return (
    <Plane args={[1, 1000]} position={[x, ground, -0.5]}>
      <meshStandardMaterial map={texture} />
    </Plane>
  );
};
