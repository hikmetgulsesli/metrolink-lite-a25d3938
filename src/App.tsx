import { useEffect, useSyncExternalStore } from 'react';
import { GameSettingsMetrolinkLite, GameplayMetrolinkLite } from './screens';
import { metroLinkStore } from './features/metrolink-lite/metrolink-lite.store';
import { attachMetroLinkTestBridge, detachMetroLinkTestBridge } from './test/bridge';

export default function App() {
  const { state, actions } = useSyncExternalStore(
    metroLinkStore.subscribe,
    metroLinkStore.getSnapshot,
    metroLinkStore.getSnapshot,
  );

  useEffect(() => {
    attachMetroLinkTestBridge({
      getState: () => metroLinkStore.getSnapshot().state,
      actions,
    });

    return detachMetroLinkTestBridge;
  }, [actions]);

  const gameplayActions = {
    'refresh-1': actions.refresh,
    'pause-2': actions.pause,
    'settings-3': actions.openSettings,
  };

  const settingsActions = {
    'close-1': actions.closeSettings,
    'beginner-2': () => actions.setDifficulty('beginner'),
    'commuter-3': () => actions.setDifficulty('commuter'),
    'express-4': () => actions.setDifficulty('express'),
    'bullet-5': () => actions.setDifficulty('bullet'),
    'button-6-6': actions.pause,
    'button-7-7': actions.advance,
    'reset-defaults-8': actions.resetDefaults,
    'save-and-return-9': actions.saveAndReturn,
  };

  return (
    <div data-setfarm-root="metrolink-lite" data-testid="setfarm-app-root">
      {state.activeScreen === 'settings' ? (
        <GameSettingsMetrolinkLite actions={settingsActions} />
      ) : (
        <GameplayMetrolinkLite actions={gameplayActions} runtime={state.runtime} />
      )}
      <output className="sr-only" aria-live="polite">
        {state.lastError ?? `MetroLink ${state.difficulty} ${state.storageStatus}`}
      </output>
    </div>
  );
}
