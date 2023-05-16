import React, { useEffect, useRef } from "react";
import { Box, ContactShadows, useKeyboardControls } from "@react-three/drei";
import { PlayerRef, useDashStore } from "./store";
import { Controls } from "./Game";

const Player = () => {
  const playerRef = useRef<PlayerRef>(null);
  const setPlayerRef = useDashStore((state) => state.setPlayerRef);

  const leftPressed = useKeyboardControls<Controls>((state) => state.left);
  const rightPressed = useKeyboardControls<Controls>((state) => state.right);

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
    <Box ref={playerRef} material-color="red" position={[0, 0, 0]}>
      <ContactShadows frames={1} position={[0, 0.1, 0]} blur={1} far={1} />
    </Box>
  );
};

export default Player;
