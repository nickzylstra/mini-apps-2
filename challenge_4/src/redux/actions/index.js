import { getNeighborCellIds } from './utils';

export const INITIALIZED_GAME = 'INITIALIZED_GAME';
export const STARTED_GAME = 'STARTED_GAME';
export const UNCOVERED_CELL = 'UNCOVERED_CELL';
// export const UNCLICKED_CELL = 'UNCLICKED_CELL';
// export const FLAGGED_CELL = 'FLAGGED_CELL';

const uncoverCell = (cellId) => ({
  type: UNCOVERED_CELL,
  cellId,
});

// if mine and all neighbors uncovered, flag cellId, update minesLeft

const peekCellNeighbors = (cellId) => (dispatch, getState) => {
  const state = getState();
  const neighborCellIds = getNeighborCellIds(state, cellId);
  neighborCellIds.forEach((cellId) => {
    const { adjMineCount, isCovered } = state.cells[cellId];
    if (isCovered) {
      dispatch(uncoverCell(cellId));
    }
    if (adjMineCount === 0) {
      // dispatch(peekCellNeighbors(cellId));
    }
  });
};

export const clickCell = (cellId) => (dispatch, getState) => {
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

