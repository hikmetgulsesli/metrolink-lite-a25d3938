import {
  advanceMetroLinkRuntime,
  createMetroLinkRuntime,
  type MetroLinkDifficulty,
  type MetroLinkRuntimeState,
} from '../../game/game-runtime';
import {
  loadMetroLinkPreferences,
  saveMetroLinkPreferences,
  type MetroLinkStorageStatus,
} from './metrolink-lite.repo';

export type MetroLinkScreen = 'gameplay' | 'settings';

export interface MetroLinkState {
  activeScreen: MetroLinkScreen;
  difficulty: MetroLinkDifficulty;
  runtime: MetroLinkRuntimeState;
  progress: number;
  highScore: number;
  paused: boolean;
  gameOver: boolean;
  storageStatus: MetroLinkStorageStatus;
  lastError: string | null;
}

export interface MetroLinkActions {
  refresh: () => void;
  pause: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  setDifficulty: (difficulty: MetroLinkDifficulty) => void;
  resetDefaults: () => void;
  saveAndReturn: () => void;
  advance: () => void;
}

export interface MetroLinkStoreSnapshot {
  state: MetroLinkState;
  actions: MetroLinkActions;
}

type Listener = () => void;

function createInitialState(): MetroLinkState {
  const loaded = loadMetroLinkPreferences();

  return {
    activeScreen: 'gameplay',
    difficulty: loaded.preferences.difficulty,
    runtime: createMetroLinkRuntime(loaded.preferences.difficulty),
    progress: 0,
    highScore: loaded.preferences.highScore,
    paused: false,
    gameOver: false,
    storageStatus: loaded.status,
    lastError: loaded.error,
  };
}

class MetroLinkStore {
  private listeners = new Set<Listener>();
  private state = createInitialState();

  actions: MetroLinkActions = {
    refresh: () => {
      this.setState((state) => ({
        ...state,
        runtime: createMetroLinkRuntime(state.difficulty, false),
        progress: 0,
        paused: false,
        gameOver: false,
        lastError: null,
      }));
    },
    pause: () => {
      this.setState((state) => {
        const paused = !state.paused;

        return {
          ...state,
          paused,
          runtime: { ...state.runtime, paused },
        };
      });
    },
    openSettings: () => {
      this.setState((state) => ({ ...state, activeScreen: 'settings' }));
    },
    closeSettings: () => {
      this.setState((state) => ({ ...state, activeScreen: 'gameplay' }));
    },
    setDifficulty: (difficulty) => {
      this.setState((state) => ({
        ...state,
        difficulty,
        runtime: createMetroLinkRuntime(difficulty, state.paused),
      }));
    },
    resetDefaults: () => {
      this.setState((state) => ({
        ...state,
        difficulty: 'commuter',
        runtime: createMetroLinkRuntime('commuter', false),
        progress: 0,
        paused: false,
        gameOver: false,
        lastError: null,
      }));
    },
    saveAndReturn: () => {
      this.setState((state) => {
        const result = saveMetroLinkPreferences({
          difficulty: state.difficulty,
          highScore: Math.max(state.highScore, state.runtime.score),
        });

        return {
          ...state,
          activeScreen: 'gameplay',
          highScore: result.preferences.highScore,
          storageStatus: result.status,
          lastError: result.error,
        };
      });
    },
    advance: () => {
      this.setState((state) => {
        const runtime = advanceMetroLinkRuntime(state.runtime, state.difficulty);
        const gameOver = runtime.energy <= 0 || runtime.lives <= 0;

        return {
          ...state,
          runtime,
          progress: state.paused ? state.progress : Math.min(100, state.progress + 4),
          highScore: Math.max(state.highScore, runtime.score),
          gameOver,
        };
      });
    },
  };

  private snapshot: MetroLinkStoreSnapshot = {
    state: this.state,
    actions: this.actions,
  };

  getSnapshot = (): MetroLinkStoreSnapshot => this.snapshot;

  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  private setState(updater: (state: MetroLinkState) => MetroLinkState): void {
    this.state = updater(this.state);
    this.snapshot = {
      state: this.state,
      actions: this.actions,
    };
    this.listeners.forEach((listener) => listener());
  }
}

export const metroLinkStore = new MetroLinkStore();
