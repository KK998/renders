"use client";

import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Hud from "./Hud";
import Player from "./Player";
import Ground from "./Ground";
import SkyBox from "./SkyBox";

export const Controls = {
  left: "left",
  right: "right",
  escape: "escape",
} as const;

export type Controls = keyof typeof Controls;

export default function Game() {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.escape, keys: ["Escape"] },
    ],
    []
  );

  return (
    <Hud>
      <KeyboardControls map={map}>
        <Canvas
          className="m-h-full m-w-full"
          camera={{
            position: [0, 3, 6],
            fov: 50,
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <SkyBox />
          <Suspense>
            <Physics>
              <group>
                <Player />
                <Ground />
              </group>
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </Hud>
  );
}
