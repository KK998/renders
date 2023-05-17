import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import {
  BufferGeometry,
  Color,
  Material,
  Mesh,
  NormalBufferAttributes,
  Vector3,
} from "three";

const resetPosition = () => {
  const vector = new Vector3(
    (Math.random() * 2 - 1) * 3,
    Math.random() * 3,
    (Math.random() * 2 - 1) * 15
  );
  if (vector.x <= 0) {
    vector.x -= 3.75;
  }
  if (vector.x >= 0) {
    vector.x += 1.75;
  }
  return vector;
};

type BoxProps = {
  color: Color;
};
const Box = ({ color }: BoxProps) => {
  const box =
    useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(
      null
    );
  const [yRotationSpeed] = useState(() => Math.random());
  const [xRotationSpeed] = useState(() => Math.random());
  const [scale] = useState(() => Math.pow(Math.random(), 2) * 1.5 + 0.15);
  const [position] = useState(resetPosition);

  useFrame((_, delta) => {
    if (box.current) {
      box.current.position.set(position.x, position.y, position.z);
      box.current.rotation.y += yRotationSpeed * delta;
      box.current.rotation.x += xRotationSpeed * delta;
    }
  });

  return (
    <mesh ref={box} scale={scale} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
};

const red = new Color(0.4, 0.1, 0.1);
const blue = new Color(0.05, 0.15, 0.4);

export default function Boxes() {
  return (
    <>
      {Array.from({ length: 20 }, (_, i) => (
        <Box key={i} color={i % 2 === 0 ? red : blue} />
      ))}
    </>
  );
}
