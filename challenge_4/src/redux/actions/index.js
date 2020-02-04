import { UNCOVERED_CELL, uncoverCell } from './uncoverCell';
import { UPDATED_TIMER, updateTimer } from './updateTimer';
import { UPDATED_GAME_STATUS, updateGameStatus } from './updateGameStatus';
import { INITIALIZED_GAME, initializeGame } from './initializeGame';
import { resetGame } from './thunks/resetGame';
import { startGame } from './thunks/startGame';
import { winGame } from './thunks/winGame';
import { loseGame } from './thunks/loseGame';
import { clickCell } from './thunks/clickCell';
import { manageTimer, manageTimerCommands } from './thunks/manageTimer';

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
  UNCOVERED_CELL,
  uncoverCell,
  UPDATED_TIMER,
  updateTimer,
  UPDATED_GAME_STATUS,
  updateGameStatus,
  INITIALIZED_GAME,
  initializeGame,
  resetGame,
  startGame,
  loseGame,
  winGame,
  clickCell,
  manageTimer,
  manageTimerCommands,
}