import React, { useMemo, useRef, useState } from "react";
import { MeshWobbleMaterial, useKeyboardControls } from "@react-three/drei";
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
  const isSpacePressed = useKeyboardControls((state) => state.space);

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
          return [x, y, randomIntFromInterval(-50 * level, -150 * level)];
        }

        let nextSpeed = isSpacePressed ? 0.4 * level : 0.115 * level;
        if (nextSpeed > 2) {
          nextSpeed = 2;
        }
        return [x, y, z + nextSpeed];
      });
    }
  });

  const colorIndex = (level * 100 < 900 ? level * 100 : 900) as 100 | 200 | 300;

  return (
    <mesh position={position} ref={obstacle}>
      <boxGeometry args={[0.5, 2, 0.5]} />
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
    () => [...Array(Math.floor(100 * (level / 25)))],
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
