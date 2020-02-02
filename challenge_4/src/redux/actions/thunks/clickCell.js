import { getNeighborCellIds } from '../../utils';
import { uncoverCell, startGame, statuses } from '../index';


const getUncoveredNeighborIds = (cellId, state, uncoveredNeighborIds = []) => {
  const neighborCellIds = getNeighborCellIds(state, cellId);
  neighborCellIds.forEach((neighborCellId) => {
    const { adjMineCount, isCovered } = state.cells[neighborCellId];
    if (isCovered) {
      uncoveredNeighborIds.push(neighborCellId);
      state.cells[neighborCellId].isCovered = false;
      if (adjMineCount === 0) {
        getUncoveredNeighborIds(neighborCellId, state, uncoveredNeighborIds);
      }
    }
  });

  return uncoveredNeighborIds;
};

export const clickCell = (cellId) => (dispatch, getState) => {
  const state = getState()
  const { gameStatus, cells } = state;

  if (gameStatus === statuses.WON || gameStatus === statuses.LOST) return;
  if (gameStatus === statuses.READY) { dispatch(startGame()); }

  const cell = cells[cellId];
  // if cell.hasMine
    // dispatch(loseGame())
    // return
  
  if (cell.isCovered) { dispatch(uncoverCell(cellId)); }

  // if uncoveredCellsRemaining === 0
    // dispatch(winGame())

  if (cell.adjMineCount === 0) {
    const stateCopy = {...state};
    if (cell.isCovered) { stateCopy.cells[cellId].isCovered = false; }
    const uncoveredNeighborIds = getUncoveredNeighborIds(cellId, stateCopy);
    uncoveredNeighborIds.forEach((uncoveredNeighborId) => {
      dispatch(uncoverCell(uncoveredNeighborId));
    });
  }
};
