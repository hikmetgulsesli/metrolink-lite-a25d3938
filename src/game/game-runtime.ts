export type MetroLinkDifficulty = 'beginner' | 'commuter' | 'express' | 'bullet';

export interface MetroLinkRuntimeEntity {
  lane: number;
  position: number;
}

export interface MetroLinkRuntimeState {
  player: MetroLinkRuntimeEntity;
  obstacles: MetroLinkRuntimeEntity[];
  shards: MetroLinkRuntimeEntity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
}

const difficultySpeed: Record<MetroLinkDifficulty, number> = {
  beginner: 1,
  commuter: 2,
  express: 3,
  bullet: 4,
};

export function createMetroLinkRuntime(
  difficulty: MetroLinkDifficulty,
  paused = false,
): MetroLinkRuntimeState {
  const speed = difficultySpeed[difficulty];

  return {
    player: { lane: 1, position: 12 },
    obstacles: [
      { lane: 0, position: 84 - speed * 3 },
      { lane: 2, position: 142 - speed * 4 },
    ],
    shards: [
      { lane: 1, position: 58 - speed * 2 },
      { lane: 0, position: 116 - speed * 3 },
    ],
    score: speed * 125,
    energy: Math.max(62, 94 - speed * 7),
    lives: difficulty === 'bullet' ? 2 : 3,
    paused,
  };
}

export function advanceMetroLinkRuntime(
  runtime: MetroLinkRuntimeState,
  difficulty: MetroLinkDifficulty,
): MetroLinkRuntimeState {
  if (runtime.paused) {
    return runtime;
  }

  const speed = difficultySpeed[difficulty];
  const move = (entity: MetroLinkRuntimeEntity, index: number): MetroLinkRuntimeEntity => ({
    lane: entity.lane,
    position: entity.position <= 0 ? 160 + index * 34 : entity.position - speed * 5,
  });

  return {
    ...runtime,
    obstacles: runtime.obstacles.map(move),
    shards: runtime.shards.map(move),
    score: runtime.score + speed * 10,
    energy: Math.max(0, runtime.energy - speed),
  };
}
