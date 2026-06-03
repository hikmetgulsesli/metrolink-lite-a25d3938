import { act, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('exposes a structured smoke snapshot through window.app', () => {
    render(<App />);

    expect(window.app?.actions.openSettings).toEqual(expect.any(Function));
    act(() => {
      window.app?.actions.openSettings();
    });

    const snapshot = window.app?.inspect();
    expect(snapshot).toMatchObject({
      app: 'metrolink-lite',
      status: 'ready',
      route: 'settings',
      state: { activeScreen: 'settings' },
      actions: expect.arrayContaining(['openSettings', 'saveAndReturn']),
    });
    expect(JSON.parse(JSON.stringify(window.app))).toMatchObject({
      app: 'metrolink-lite',
      status: 'ready',
      route: 'settings',
    });
  });
});
