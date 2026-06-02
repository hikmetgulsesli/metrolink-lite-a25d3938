// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - MetroLink Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Pause, RefreshCw, Settings } from "lucide-react";


export type GameplayMetrolinkLiteActionId = "refresh-1" | "pause-2" | "settings-3";

export interface GameplayMetrolinkLiteProps {
  actions?: Partial<Record<GameplayMetrolinkLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

const laneToColumn = (lane = 0) => Math.max(0, Math.min(7, lane + 2));
const positionToRow = (position = 0) => Math.max(0, Math.min(7, 7 - Math.floor((position / 160) * 7)));

export function GameplayMetrolinkLite({ actions, runtime }: GameplayMetrolinkLiteProps) {
  const score = runtime?.score ?? 1250;
  const energy = runtime?.energy ?? 58;
  const lives = runtime?.lives ?? 3;
  const efficiencyWidth = `${Math.max(0, Math.min(100, energy))}%`;
  const activeRoutes = Math.max(1, Math.min(3, lives));
  const playerColumn = laneToColumn(runtime?.player?.lane);
  const playerRow = positionToRow(runtime?.player?.position);
  const obstacles = runtime?.obstacles ?? [];
  const shards = runtime?.shards ?? [];

  const tileState = (row: number, column: number) => {
    if (row === playerRow && column === playerColumn) {
      return "player";
    }

    if (obstacles.some((obstacle) => row === positionToRow(obstacle.position) && column === laneToColumn(obstacle.lane))) {
      return "obstacle";
    }

    if (shards.some((shard) => row === positionToRow(shard.position) && column === laneToColumn(shard.lane))) {
      return "shard";
    }

    return "track";
  };

  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface shadow-sm docked full-width top-0 z-50">
      <div className="flex justify-between items-center w-full px-hud-padding py-2 max-w-full">
      <div className="flex items-center gap-4">
      <div className="font-display-lg text-headline-md text-primary tracking-tight">MetroLink Lite</div>
      <div className="h-6 w-px bg-outline-variant"></div>
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant">LEVEL 4</span>
      <span className="font-headline-sm text-headline-sm text-primary">Central Junction</span>
      </div>
      </div>
      <div className="flex items-center gap-8">
      <div className="flex flex-col items-end">
      <span className="font-label-caps text-label-caps text-on-surface-variant">SCORE</span>
      <span className="font-headline-sm text-headline-sm text-primary">{score.toLocaleString()}</span>
      </div>
      <div className="relative w-12 h-12 rounded-full border-4 border-on-tertiary-container flex items-center justify-center pulse-timer bg-surface-container-lowest">
      <span className="font-headline-sm text-headline-sm text-on-tertiary-container">{String(Math.max(0, Math.ceil(energy / 10))).padStart(2, "0")}</span>
      </div>
      <div className="flex gap-2">
      <button className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors shadow-tile-base active:translate-y-0.5 active:shadow-none" title="Refresh" type="button" data-action-id="refresh-1" onClick={actions?.["refresh-1"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
      </button>
      <button className="h-10 px-4 rounded bg-primary text-on-primary flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-tile-base active:translate-y-0.5 active:shadow-none" title="Pause" type="button" data-action-id="pause-2" onClick={actions?.["pause-2"]}>
      <Pause aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Pause</span>
      <span className="font-label-caps text-label-caps opacity-70 ml-2">ESC</span>
      </button>
      <button className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors shadow-tile-base active:translate-y-0.5 active:shadow-none hidden" title="Settings" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </header>
      {/* Main Gameplay Area */}
      <main className="flex-grow flex items-center justify-center p-8 bg-surface-container-lowest">
      {/* Playfield Container */}
      <div className="bg-surface-container-low p-6 rounded-xl shadow-tray">
      {/* 8x8 Grid */}
      <div className="grid grid-cols-8 grid-rows-8 gap-tile-gap w-[600px] h-[600px]" id="playfield">
      {Array.from({ length: 64 }, (_, index) => {
        const row = Math.floor(index / 8);
        const column = index % 8;
        const state = tileState(row, column);
        const stateClass =
          state === "player"
            ? "bg-primary text-on-primary shadow-tile-active"
            : state === "obstacle"
              ? "bg-error text-on-error shadow-tile-base"
              : state === "shard"
                ? "bg-tertiary text-on-tertiary shadow-tile-base"
                : "bg-surface-container-high text-on-surface-variant shadow-tile-base";
        const label =
          state === "player"
            ? "M"
            : state === "obstacle"
              ? "!"
              : state === "shard"
                ? "+"
                : "";

        return (
          <div
            className={`rounded flex items-center justify-center font-headline-sm text-headline-sm transition-colors ${stateClass}`}
            data-runtime-tile={state}
            key={`${row}-${column}`}
          >
            {label}
          </div>
        );
      })}
      </div>
      </div>
      </main>
      {/* Bottom Status Bar */}
      <footer className="bg-surface-container border-t border-outline-variant py-4 px-container-margin w-full flex items-center justify-between">
      <div className="flex items-center gap-4 w-1/2">
      <span className="font-label-caps text-label-caps text-on-surface-variant w-48">CONNECTION EFFICIENCY</span>
      <div className="flex-grow h-2 bg-surface-variant rounded-full overflow-hidden flex">
      <div className="h-full bg-secondary" style={{ width: efficiencyWidth }}></div>
      <div className="h-full bg-error" style={{ width: `${100 - Math.max(0, Math.min(100, energy))}%` }}></div>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">{Math.round(energy)}%</span>
      </div>
      <div className="font-body-md text-body-md text-on-surface-variant">
                  Routes Active: {activeRoutes} / 3
              </div>
      </footer>
    </>
  );
}
