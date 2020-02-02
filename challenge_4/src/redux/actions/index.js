import { getNeighborCellIds } from '../utils';
import { INITIALIZED_GAME, initializeGame } from './initializeGame';
import { UNCOVERED_CELL, uncoverCell } from './uncoverCell';

export const STARTED_GAME = 'STARTED_GAME';
// export const UNCLICKED_CELL = 'UNCLICKED_CELL';
// export const FLAGGED_CELL = 'FLAGGED_CELL';

// if mine and all neighbors uncovered, flag cellId, update minesLeft

const peekCellNeighbors = (cellId) => (dispatch, getState) => {
  const state = getState();
  const neighborCellIds = getNeighborCellIds(state, cellId);
  neighborCellIds.forEach((cellId) => {
    const { adjMineCount, isCovered } = state.cells[cellId];
    if (isCovered) {
      dispatch(uncoverCell(cellId));
      if (adjMineCount === 0) {
        dispatch(peekCellNeighbors(cellId));
      }
    }
  });
};

const clickCell = (cellId) => (dispatch, getState) => {
  // if gameStatus === lost || won
    // return

  // if gameStatus === start
    // dispatch(startGame())

  const { cells } = getState();
  const cell = cells[cellId];

  // if cell.hasMine
    // dispatch(loseGame())
    // return
  
  dispatch(uncoverCell(cellId))

  if (cell.adjMineCount === 0) {
    dispatch(peekCellNeighbors(cellId));
  }
};

export {
  INITIALIZED_GAME,
  initializeGame,
  UNCOVERED_CELL,
  uncoverCell,
  clickCell,
}