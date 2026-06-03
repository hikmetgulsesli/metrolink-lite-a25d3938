import type { MetroLinkActions } from '../metrolink-lite/metrolink-lite.store';

export function actSavePreferences(actions: Pick<MetroLinkActions, 'saveAndReturn'>): () => void {
  return () => {
    actions.saveAndReturn();
  };
}
