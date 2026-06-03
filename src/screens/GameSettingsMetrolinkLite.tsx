// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - MetroLink Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { Gauge, MousePointerClick, Music, Route, Timer, Volume2, X } from "lucide-react";


export type GameSettingsMetrolinkLiteActionId = "close-1" | "beginner-2" | "commuter-3" | "express-4" | "bullet-5" | "button-6-6" | "button-7-7" | "reset-defaults-8" | "save-and-return-9";

export interface GameSettingsMetrolinkLiteProps {
  actions?: Partial<Record<GameSettingsMetrolinkLiteActionId, () => void>>;

}

export function GameSettingsMetrolinkLite({ actions }: GameSettingsMetrolinkLiteProps) {
  const [difficulty, setDifficulty] = useState("commuter");
  const [gameSpeed, setGameSpeed] = useState(50);
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true);
  const [backgroundJazzEnabled, setBackgroundJazzEnabled] = useState(false);
  const [settingsMessage, setSettingsMessage] = useState("Commuter settings ready");

  const speedLabel = gameSpeed < 35 ? "Relaxed" : gameSpeed > 70 ? "Rapid" : "Normal";
  const selectDifficulty = (nextDifficulty: string, actionId: GameSettingsMetrolinkLiteActionId) => {
    setDifficulty(nextDifficulty);
    setSettingsMessage(`${nextDifficulty[0].toUpperCase()}${nextDifficulty.slice(1)} difficulty selected`);
    actions?.[actionId]?.();
  };

  return (
    <>
      {/* Simulated Dimmed Gameplay Background */}
      <div className="absolute inset-0 z-0 bg-surface-variant flex items-center justify-center">
      {/* Placeholder Grid for Context */}
      <div className="grid grid-cols-4 gap-tile-gap opacity-30">
      <div className="w-16 h-16 bg-surface-container-lowest rounded shadow-sm"></div>
      <div className="w-16 h-16 bg-surface-container-lowest rounded shadow-sm"></div>
      <div className="w-16 h-16 bg-surface-container-lowest rounded shadow-sm"></div>
      <div className="w-16 h-16 bg-surface-container-lowest rounded shadow-sm"></div>
      <div className="w-16 h-16 bg-surface-container-lowest rounded shadow-sm"></div>
      <div className="w-16 h-16 bg-surface-container-lowest rounded shadow-sm"></div>
      <div className="w-16 h-16 bg-surface-container-lowest rounded shadow-sm"></div>
      <div className="w-16 h-16 bg-surface-container-lowest rounded shadow-sm"></div>
      </div>
      </div>
      {/* Dimming Overlay */}
      <div className="absolute inset-0 z-10 glass-overlay"></div>
      {/* Modal Container (Level 4 Elevation) */}
      <div className="relative z-20 w-full max-w-[560px] bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant flex flex-col max-h-[921px]">
      {/* Header */}
      <div className="px-container-margin py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest rounded-t-xl shrink-0">
      <div>
      <h1 className="font-headline-md text-headline-md text-primary">Game Settings</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 uppercase">MetroLink Lite</p>
      </div>
      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary" type="button" aria-label="Close" data-action-id="close-1" onClick={actions?.["close-1"]}>
      <X  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Scrollable Content */}
      <div className="p-container-margin overflow-y-auto flex flex-col gap-8">
      {/* Difficulty Section */}
      <section>
      <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-3 uppercase">Difficulty</h2>
      <div className="flex bg-surface-container-low rounded-lg p-1 border border-outline-variant">
      <button className={`flex-1 py-2 px-3 rounded-md font-body-md text-body-md text-center transition-colors focus:outline-none focus:ring-2 focus:ring-secondary ${difficulty === "beginner" ? "bg-surface-container-lowest text-primary shadow-sm border border-outline-variant font-bold" : "text-on-surface-variant hover:bg-surface-variant"}`} type="button" aria-pressed={difficulty === "beginner"} data-action-id="beginner-2" onClick={() => selectDifficulty("beginner", "beginner-2")}>Beginner</button>
      <button className={`flex-1 py-2 px-3 rounded-md font-body-md text-body-md text-center transition-colors focus:outline-none focus:ring-2 focus:ring-secondary ${difficulty === "commuter" ? "bg-surface-container-lowest text-primary shadow-sm border border-outline-variant font-bold" : "text-on-surface-variant hover:bg-surface-variant"}`} type="button" aria-pressed={difficulty === "commuter"} data-action-id="commuter-3" onClick={() => selectDifficulty("commuter", "commuter-3")}>Commuter</button>
      <button className={`flex-1 py-2 px-3 rounded-md font-body-md text-body-md text-center transition-colors focus:outline-none focus:ring-2 focus:ring-secondary ${difficulty === "express" ? "bg-surface-container-lowest text-primary shadow-sm border border-outline-variant font-bold" : "text-on-surface-variant hover:bg-surface-variant"}`} type="button" aria-pressed={difficulty === "express"} data-action-id="express-4" onClick={() => selectDifficulty("express", "express-4")}>Express</button>
      <button className={`flex-1 py-2 px-3 rounded-md font-body-md text-body-md text-center transition-colors focus:outline-none focus:ring-2 focus:ring-secondary ${difficulty === "bullet" ? "bg-surface-container-lowest text-primary shadow-sm border border-outline-variant font-bold" : "text-on-surface-variant hover:bg-surface-variant"}`} type="button" aria-pressed={difficulty === "bullet"} data-action-id="bullet-5" onClick={() => selectDifficulty("bullet", "bullet-5")}>Bullet</button>
      </div>
      </section>
      {/* Game Speed Section */}
      <section>
      <div className="flex justify-between items-center mb-3">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Game Speed</h2>
      <span className="font-body-md text-body-md text-primary font-bold">{speedLabel}</span>
      </div>
      <div className="flex items-center gap-4">
      <Gauge  style={{fontVariationSettings: "'FILL' 0"}} className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <div className="relative flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
      <div className="absolute top-0 left-0 h-full bg-secondary rounded-full" style={{ width: `${gameSpeed}%` }}></div>
      </div>
      <Gauge  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <input aria-label="Game Speed Slider" aria-valuetext={speedLabel} className="w-full mt-2 opacity-0 absolute h-6 cursor-pointer" max="100" min="1" type="range" value={gameSpeed} onChange={(event) => {
        const nextSpeed = Number(event.currentTarget.value);
        const nextSpeedLabel = nextSpeed < 35 ? "Relaxed" : nextSpeed > 70 ? "Rapid" : "Normal";

        setGameSpeed(nextSpeed);
        setSettingsMessage(`${nextSpeedLabel} game speed selected`);
      }} />
      </section>
      {/* Audio Section */}
      <section>
      <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-3 uppercase">Audio</h2>
      <div className="space-y-4">
      {/* Toggle 1 */}
      <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
      <Volume2  style={{fontVariationSettings: "'FILL' 0"}} className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md text-primary">Sound Effects</span>
      </div>
      <button aria-checked={soundEffectsEnabled} className={`w-12 h-6 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary border ${soundEffectsEnabled ? "bg-secondary border-transparent" : "bg-surface-container-high border-outline-variant"}`} role="switch" type="button" aria-label="Button 6" data-action-id="button-6-6" onClick={() => {
        setSoundEffectsEnabled((enabled) => {
          setSettingsMessage(`Sound effects ${enabled ? "off" : "on"}`);
          return !enabled;
        });
        actions?.["button-6-6"]?.();
      }}>
      <span className={`absolute ${soundEffectsEnabled ? "right-1" : "left-1"} top-1 w-4 h-4 bg-surface-container-lowest rounded-full transition-transform`}></span>
      </button>
      </div>
      {/* Toggle 2 */}
      <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
      <Music  style={{fontVariationSettings: "'FILL' 0"}} className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md text-on-surface-variant">Background Jazz</span>
      </div>
      <button aria-checked={backgroundJazzEnabled} className={`w-12 h-6 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary border ${backgroundJazzEnabled ? "bg-secondary border-transparent" : "bg-surface-container-high border-outline-variant"}`} role="switch" type="button" aria-label="Button 7" data-action-id="button-7-7" onClick={() => {
        setBackgroundJazzEnabled((enabled) => {
          setSettingsMessage(`Background jazz ${enabled ? "off" : "on"}`);
          return !enabled;
        });
        actions?.["button-7-7"]?.();
      }}>
      <span className={`absolute ${backgroundJazzEnabled ? "right-1 bg-surface-container-lowest" : "left-1 bg-surface-tint"} top-1 w-4 h-4 rounded-full transition-transform`}></span>
      </button>
      </div>
      </div>
      </section>
      {/* Help Section */}
      <section>
      <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-3 uppercase">How to Play</h2>
      <div className="bg-surface-container rounded-lg p-4 border border-outline-variant flex flex-col gap-3">
      <div className="flex items-start gap-3">
      <MousePointerClick  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary mt-0.5" aria-hidden={true} focusable="false" />
      <p className="font-body-md text-body-md text-primary">Click tiles to rotate them and form paths.</p>
      </div>
      <div className="flex items-start gap-3">
      <Route  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary mt-0.5" aria-hidden={true} focusable="false" />
      <p className="font-body-md text-body-md text-primary">Connect all stations to complete the level.</p>
      </div>
      <div className="flex items-start gap-3">
      <Timer  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary mt-0.5" aria-hidden={true} focusable="false" />
      <p className="font-body-md text-body-md text-primary">Be faster for bonus points.</p>
      </div>
      </div>
      </section>
      </div>
      {/* Actions */}
      <div className="px-container-margin py-4 border-t border-outline-variant bg-surface-container-lowest rounded-b-xl flex justify-between items-center shrink-0">
      <p className="font-body-md text-body-md text-on-surface-variant" aria-live="polite">{settingsMessage}</p>
      <button className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1" type="button" data-action-id="reset-defaults-8" onClick={() => {
        setDifficulty("commuter");
        setGameSpeed(50);
        setSoundEffectsEnabled(true);
        setBackgroundJazzEnabled(false);
        setSettingsMessage("Default settings restored");
        actions?.["reset-defaults-8"]?.();
      }}>Reset Defaults</button>
      <button className="bg-primary text-on-primary font-body-md text-body-md font-bold py-2 px-6 rounded transit-shadow-level-2 transit-button-press transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:transit-shadow-level-3" type="button" data-action-id="save-and-return-9" onClick={() => {
        setSettingsMessage("Preferences saved");
        actions?.["save-and-return-9"]?.();
      }}>Save &amp; Return</button>
      </div>
      </div>
    </>
  );
}
