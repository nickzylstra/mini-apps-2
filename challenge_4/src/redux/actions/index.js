import { INITIALIZED_GAME, initializeGame } from './initializeGame';
import { UNCOVERED_CELL, uncoverCell } from './uncoverCell';
import { clickCell } from './thunks/clickCell';

// export const STARTED_GAME = 'STARTED_GAME';
// export const UNCLICKED_CELL = 'UNCLICKED_CELL';
// export const FLAGGED_CELL = 'FLAGGED_CELL';

// if mine and all neighbors uncovered, flag cellId, update minesLeft

export {
  INITIALIZED_GAME,
  initializeGame,
  UNCOVERED_CELL,
  uncoverCell,
  clickCell,
}