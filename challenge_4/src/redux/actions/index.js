import { INITIALIZED_GAME, initializeGame } from './initializeGame';
import { UNCOVERED_CELL, uncoverCell } from './uncoverCell';
import { STARTED_GAME, startGame } from './startGame';
import { WON_GAME, winGame } from './winGame';
import { LOST_GAME, loseGame } from './loseGame';
import { clickCell } from './thunks/clickCell';

// export const UNCLICKED_CELL = 'UNCLICKED_CELL';
// export const FLAGGED_CELL = 'FLAGGED_CELL';

// if mine and all neighbors uncovered, flag cellId, update minesLeft

export const statuses = {
  INIT: 'INIT',
  READY: 'READY',
  INPROGRESS: 'INPROGRESS',
  LOST: 'LOST',
  WON: 'WON',
};

export {
  INITIALIZED_GAME,
  initializeGame,
  STARTED_GAME,
  startGame,
  WON_GAME,
  winGame,
  LOST_GAME,
  loseGame,
  UNCOVERED_CELL,
  uncoverCell,
  clickCell,
}