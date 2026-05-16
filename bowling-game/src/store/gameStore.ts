import { create } from 'zustand';

type GameState = 'idle' | 'thrown' | 'resetting' | 'resetting_ball';

interface GameStore {
  gameState: GameState;
  score: number;
  pinsKnocked: number[]; // Store IDs or indices of knocked pins
  setGameState: (state: GameState) => void;
  addKnockedPin: (pinIndex: number) => void;
  resetGame: () => void;
  resetBall: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  gameState: 'idle',
  score: 0,
  pinsKnocked: [],
  setGameState: (state) => set({ gameState: state }),
  addKnockedPin: (pinIndex) =>
    set((state) => {
      if (!state.pinsKnocked.includes(pinIndex)) {
        const newKnocked = [...state.pinsKnocked, pinIndex];
        return { pinsKnocked: newKnocked, score: newKnocked.length };
      }
      return state;
    }),
  resetGame: () => set({ gameState: 'resetting', score: 0, pinsKnocked: [] }),
  resetBall: () => set({ gameState: 'resetting_ball' }),
}));
