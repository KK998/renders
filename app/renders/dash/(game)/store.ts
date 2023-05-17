import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type PlayerRef = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[]
>;

interface DashStore {
  gameStatus: "playing" | "paused" | "finished" | "start";
  level: number;
  score: number;
  currentSpeed: number;
  playerRef?: React.RefObject<PlayerRef>;
  setPlayerRef: (ref: React.RefObject<PlayerRef>) => void;
  increaseLevel: () => void;
  restartGame: () => void;
  pauseGame: () => void;
  endGame: () => void;
}

export const useDashStore = create<DashStore>()(
  devtools(
    persist(
      (set) => ({
        level: 1,
        score: 0,
        gameStatus: "start",
        currentSpeed: 0,
        setPlayerRef: (ref) => set({ playerRef: ref }),
        increaseLevel: () => set((state) => ({ level: state.level + 1 })),
        restartGame: () => set({ level: 1 }),
        pauseGame: () => {},
        endGame: () => {},
      }),
      {
        name: "dash-store",
      }
    ),
    {
      enabled: process.env.NODE_ENV === "development",
    }
  )
);
