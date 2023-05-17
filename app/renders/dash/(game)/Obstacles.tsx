import React, { useMemo, useRef, useState } from "react";
import { MeshWobbleMaterial } from "@react-three/drei";
import colors from "tailwindcss/colors";
import type { Mesh } from "@/app/(lib)/types";
import { useDashStore } from "./store";
import { Vector3Array } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const resetPosition = (): Vector3Array => {
  const x = randomIntFromInterval(-1, 1);
  const y = 1;
  const z = randomIntFromInterval(-20, -200);
  return [x, y, z];
};

const Obstacle = () => {
  const obstacle = useRef<Mesh>(null);
  const { player, endGame, gameStatus, level, incrementScore } = useDashStore(
    (state) => ({
      player: state.playerRef,
      endGame: state.endGame,
      gameStatus: state.gameStatus,
      level: state.level,
      incrementScore: state.incrementScore,
    })
  );

  const [position, setPosition] = useState<Vector3Array>(resetPosition);

  useFrame(() => {
    if (
      obstacle.current &&
      player &&
      player.current &&
      gameStatus === "playing"
    ) {
      const distance = player.current.position.distanceTo(
        obstacle.current.position
      );
      if (distance < 1.2) {
        endGame();
      }

      if (obstacle.current.position.z > 5) {
        incrementScore();
      }

      setPosition((p) => {
        const [x, y, z] = p;
        const isObstacleAtEnd = z > 5;

        if (isObstacleAtEnd) {
          return [x, y, randomIntFromInterval(-30 * level, -200)];
        }

        return [x, y, z + 0.115 * level];
      });
    }
  });
  const colorIndex = (level * 100) as 100 | 200;

  return (
    <mesh position={position} ref={obstacle}>
      <boxGeometry args={[0.5, 2, 1]} />
      <MeshWobbleMaterial
        color={colors.red[colorIndex]}
        speed={1}
        factor={0.6}
      />
    </mesh>
  );
};

export default function Obstacles() {
  const { level } = useDashStore((state) => ({
    level: state.level,
  }));

  const obstacleArray = useMemo(
    () => [...Array(Math.floor(100 * (level / 20)))],
    [level]
  );

  return (
    <>
      {obstacleArray.map((_, i) => (
        <Obstacle key={i} />
      ))}
    </>
  );
}
