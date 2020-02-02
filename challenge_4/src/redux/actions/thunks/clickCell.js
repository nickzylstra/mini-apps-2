import { getNeighborCellIds } from '../../utils';
import { uncoverCell, startGame } from '../index';
import { statuses } from '../../reducers';


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
  // if gameStatus === lost || won
    // return

  const { gameStatus, cells } = getState();
  if (gameStatus === statuses.READY) { dispatch(startGame()); }

  const cell = cells[cellId];

  // if cell.hasMine
    // dispatch(loseGame())
    // return
  
  dispatch(uncoverCell(cellId))

  if (cell.adjMineCount === 0) { dispatch(peekCellNeighbors(cellId)); }
};
