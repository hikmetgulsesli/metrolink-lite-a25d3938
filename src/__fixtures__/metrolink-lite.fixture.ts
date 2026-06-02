import { createMetroLinkRuntime } from '../game/game-runtime';
import type { MetroLinkDifficulty } from '../game/game-runtime';

export const metroLinkDefaultDifficulty: MetroLinkDifficulty = 'commuter';

export const metroLinkDefaultPreferences = {
  difficulty: metroLinkDefaultDifficulty,
  highScore: 0,
};

export const metroLinkDefaultRuntime = createMetroLinkRuntime(metroLinkDefaultDifficulty);
