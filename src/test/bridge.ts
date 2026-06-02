import type { MetroLinkActions, MetroLinkState } from '../features/metrolink-lite/metrolink-lite.store';

export interface MetroLinkTestBridge {
  getState: () => MetroLinkState;
  actions: MetroLinkActions;
}

declare global {
  interface Window {
    app?: MetroLinkTestBridge;
  }
}

export function attachMetroLinkTestBridge(bridge: MetroLinkTestBridge): void {
  window.app = bridge;
}

export function detachMetroLinkTestBridge(): void {
  delete window.app;
}
