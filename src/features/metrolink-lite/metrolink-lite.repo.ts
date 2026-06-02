import { metroLinkDefaultPreferences } from '../../__fixtures__/metrolink-lite.fixture';
import type { MetroLinkDifficulty } from '../../game/game-runtime';

export interface MetroLinkPreferences {
  difficulty: MetroLinkDifficulty;
  highScore: number;
}

export type MetroLinkStorageStatus = 'ready' | 'recovered' | 'unavailable';

export interface MetroLinkLoadResult {
  preferences: MetroLinkPreferences;
  status: MetroLinkStorageStatus;
  error: string | null;
}

const storageKey = 'metrolink-lite:preferences';
const difficulties: MetroLinkDifficulty[] = ['beginner', 'commuter', 'express', 'bullet'];

function isDifficulty(value: unknown): value is MetroLinkDifficulty {
  return typeof value === 'string' && difficulties.includes(value as MetroLinkDifficulty);
}

function normalizePreferences(value: unknown): MetroLinkPreferences | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const candidate = value as Partial<MetroLinkPreferences>;
  if (!isDifficulty(candidate.difficulty)) {
    return null;
  }

  return {
    difficulty: candidate.difficulty,
    highScore:
      typeof candidate.highScore === 'number' && Number.isFinite(candidate.highScore)
        ? Math.max(0, Math.floor(candidate.highScore))
        : 0,
  };
}

export function loadMetroLinkPreferences(storage: Storage | null = window.localStorage): MetroLinkLoadResult {
  if (!storage) {
    return {
      preferences: metroLinkDefaultPreferences,
      status: 'unavailable',
      error: 'Preferences storage is unavailable.',
    };
  }

  try {
    const raw = storage.getItem(storageKey);
    if (!raw) {
      return { preferences: metroLinkDefaultPreferences, status: 'ready', error: null };
    }

    const preferences = normalizePreferences(JSON.parse(raw));
    if (!preferences) {
      storage.removeItem(storageKey);
      return {
        preferences: metroLinkDefaultPreferences,
        status: 'recovered',
        error: 'Saved MetroLink preferences were corrupted and have been reset.',
      };
    }

    return { preferences, status: 'ready', error: null };
  } catch {
    return {
      preferences: metroLinkDefaultPreferences,
      status: 'recovered',
      error: 'Saved MetroLink preferences were corrupted and have been reset.',
    };
  }
}

export function saveMetroLinkPreferences(
  preferences: MetroLinkPreferences,
  storage: Storage | null = window.localStorage,
): MetroLinkLoadResult {
  if (!storage) {
    return {
      preferences,
      status: 'unavailable',
      error: 'Preferences storage is unavailable.',
    };
  }

  try {
    storage.setItem(storageKey, JSON.stringify(preferences));
    return { preferences, status: 'ready', error: null };
  } catch {
    return {
      preferences,
      status: 'unavailable',
      error: 'Preferences storage is unavailable.',
    };
  }
}
