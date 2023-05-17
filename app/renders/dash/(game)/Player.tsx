import React, { useEffect, useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { PlayerRef, useDashStore } from "./store";
import { Controls } from "./Game";
import colors from "tailwindcss/colors";

const Player = () => {
  const playerRef = useRef<PlayerRef>(null);
  const setPlayerRef = useDashStore((state) => state.setPlayerRef);
  const togglePause = useDashStore((state) => state.togglePause);

  const leftPressed = useKeyboardControls<Controls>((state) => state.left);
  const rightPressed = useKeyboardControls<Controls>((state) => state.right);
  const escPressed = useKeyboardControls<Controls>((state) => state.escape);

  useEffect(() => {
    if (escPressed) {
      togglePause();
    }
  }, [escPressed, togglePause]);

  useEffect(() => {
    if (playerRef.current) {
      setPlayerRef(playerRef);
    }
  }, [playerRef, setPlayerRef]);

  useEffect(() => {
    if (playerRef.current) {
      const currentPosition = playerRef.current.position;
      if (leftPressed && currentPosition.x > -1) {
        playerRef.current.position.set(
          currentPosition.x - 1,
          currentPosition.y,
          currentPosition.z
        );
      }
      if (rightPressed && currentPosition.x < 1) {
        playerRef.current.position.set(
          currentPosition.x + 1,
          currentPosition.y,
          currentPosition.z
        );
      }
    }
  }, [leftPressed, rightPressed, playerRef]);

  return (
    <mesh ref={playerRef} position={[0, 0, 0]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={colors.red[500]} />
    </mesh>
  );
};

export default Player;
