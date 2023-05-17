import { createHash } from "crypto";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type PlayerRef = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[]
>;

export type GameStatus = "playing" | "paused" | "game_over" | "start";
interface DashStore {
  currentGame: string;
  gameStatus: GameStatus;
  level: number;
  score: number;
  playerRef?: React.RefObject<PlayerRef>;
  setPlayerRef: (ref: React.RefObject<PlayerRef>) => void;
  increaseLevel: () => void;
  setGameStatus: (status: GameStatus) => void;
  endGame: () => void;
  startNewGame: () => void;
  togglePause: () => void;
  playTheGame: () => void;
  incrementScore: () => void;
}

export const useDashStore = create<DashStore>()(
  devtools(
    (set) => ({
      currentGame: createHash("md5")
        .update(`${new Date().getTime()}`)
        .digest("hex"),
      level: 1,
      score: 0,
      gameStatus: "start",
      setPlayerRef: (ref) => set({ playerRef: ref }),
      increaseLevel: () => set((state) => ({ level: state.level + 1 })),
      setGameStatus: (status) => set({ gameStatus: status }),
      incrementScore: () => {
        set((state) => {
          const level = Math.floor(state.score / 10);
          return {
            score: state.score + 1,
            level: level > 0 ? level : 1,
          };
        });
      },
      endGame: () => {
        set({ gameStatus: "game_over" });
      },
      startNewGame: () => {
        set({
          currentGame: createHash("md5")
            .update(`${new Date().getTime()}`)
            .digest("hex"),
          gameStatus: "start",
          level: 1,
          score: 0,
        });
      },
      playTheGame: () => set({ gameStatus: "playing" }),
      togglePause: () => {
        set((state) => ({
          gameStatus: state.gameStatus === "paused" ? "playing" : "paused",
        }));
      },
    }),
    {
      enabled: process.env.NODE_ENV === "development",
    }
  )
);
