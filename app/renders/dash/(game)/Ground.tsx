import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { MeshReflectorMaterial, Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

export default function Ground() {
  const [ground] = useState(40);

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
  const [roughness, normal] = useLoader(THREE.TextureLoader, [
    "/textures/floor_bricks_02_rough_4k.jpg",
    "/textures/floor_bricks_02_disp_4k.png",
  ]);
  useEffect(() => {
    [roughness, normal].forEach((texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(5, 5);
    });

    normal.encoding = THREE.LinearEncoding;
  }, [roughness, normal]);

  return (
    <Plane args={[1, 200]} position={[x, ground, -0.5]} receiveShadow>
      <MeshReflectorMaterial
        envMapIntensity={0}
        dithering
        color={[0.015, 0.015, 0.015]}
        roughness={0.9}
        blur={[200, 200]}
        mixBlur={10}
        mixStrength={10}
        mixContrast={1}
        resolution={256}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={1}
        reflectorOffset={0.001}
        mirror={1}
        normalMap={normal}
        roughnessMap={roughness}
      />
    </Plane>
  );
};
