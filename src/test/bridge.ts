import type { MetroLinkActions, MetroLinkState } from '../features/metrolink-lite/metrolink-lite.store';

export interface MetroLinkSmokeSnapshot {
  app: 'metrolink-lite';
  status: 'ready';
  route: MetroLinkState['activeScreen'];
  state: MetroLinkState;
  actions: Array<keyof MetroLinkActions>;
}

export interface MetroLinkTestBridge {
  getState: () => MetroLinkState;
  getSnapshot: () => MetroLinkSmokeSnapshot;
  inspect: () => MetroLinkSmokeSnapshot;
  toJSON: () => MetroLinkSmokeSnapshot;
  actions: MetroLinkActions;
}

export interface MetroLinkTestBridgeSource {
  getState: () => MetroLinkState;
  actions: MetroLinkActions;
}

declare global {
  interface Window {
    app?: MetroLinkTestBridge;
  }
}

const actionIds: Array<keyof MetroLinkActions> = [
  'refresh',
  'pause',
  'openSettings',
  'closeSettings',
  'setDifficulty',
  'resetDefaults',
  'saveAndReturn',
  'advance',
];

function createSmokeSnapshot(state: MetroLinkState): MetroLinkSmokeSnapshot {
  return {
    app: 'metrolink-lite',
    status: 'ready',
    route: state.activeScreen,
    state,
    actions: actionIds,
  };
}

export function attachMetroLinkTestBridge(bridge: MetroLinkTestBridgeSource): void {
  window.app = {
    ...bridge,
    getSnapshot: () => createSmokeSnapshot(bridge.getState()),
    inspect: () => createSmokeSnapshot(bridge.getState()),
    toJSON: () => createSmokeSnapshot(bridge.getState()),
  };
}

export function detachMetroLinkTestBridge(): void {
  delete window.app;
}
