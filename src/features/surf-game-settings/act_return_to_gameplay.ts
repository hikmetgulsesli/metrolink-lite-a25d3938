import type { MetroLinkActions } from '../metrolink-lite/metrolink-lite.store';

export function actReturnToGameplay(actions: Pick<MetroLinkActions, 'closeSettings'>): () => void {
  return () => {
    actions.closeSettings();
  };
}
