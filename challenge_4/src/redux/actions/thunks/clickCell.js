import { getNeighborCellIds } from '../../utils';
import { uncoverCell, startGame, statuses } from '../index';


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

export const clickCell = (cellId) => (dispatch, getState) => {
  const { gameStatus, cells } = getState();

  if (gameStatus === statuses.WON || gameStatus === statuses.LOST) return;

  if (gameStatus === statuses.READY) { dispatch(startGame()); }

  const cell = cells[cellId];

  // if cell.hasMine
    // dispatch(loseGame())
    // return
  
  dispatch(uncoverCell(cellId))

  // if uncoveredCellsRemaining === 0
    // dispatch(winGame())

  if (cell.adjMineCount === 0) { dispatch(peekCellNeighbors(cellId)); }
};
