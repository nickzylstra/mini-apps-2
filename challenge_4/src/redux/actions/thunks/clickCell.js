import { getNeighborCellIds } from '../../utils';
import { 
  uncoverCell,
  startGame,
  winGame,
  loseGame,
  statuses,
} from '../index';


const getUncoveredNeighborIds = (cellId, stateCopy, uncoveredNeighborIds = []) => {
  const neighborCellIds = getNeighborCellIds(stateCopy, cellId);
  neighborCellIds.forEach((neighborCellId) => {
    const { adjMineCount, isCovered } = stateCopy.cells[neighborCellId];
    if (isCovered) {
      uncoveredNeighborIds.push(neighborCellId);
      stateCopy.cells[neighborCellId].isCovered = false;
      if (adjMineCount === 0) {
        getUncoveredNeighborIds(neighborCellId, stateCopy, uncoveredNeighborIds);
      }
    }
  });

  return uncoveredNeighborIds;
};

export const clickCell = (cellId) => (dispatch, getState) => {
  const state = getState()
  const { gameStatus, cells, uncoveredCellsRemaining } = state;

  if (gameStatus === statuses.WON || gameStatus === statuses.LOST) return;
  if (gameStatus === statuses.READY) { 
    dispatch(startGame());
  }

  const cell = cells[cellId];
  if (cell.hasMine) {
    dispatch(loseGame());
    return;
  }
  
  if (cell.isCovered) {
    dispatch(uncoverCell(cellId));
    if (uncoveredCellsRemaining === 1) {
      dispatch(winGame());
      return;
    }
  }


  if (cell.adjMineCount === 0) {
    const stateCopy = {...state};
    if (cell.isCovered) { stateCopy.cells[cellId].isCovered = false; }
    const uncoveredNeighborIds = getUncoveredNeighborIds(cellId, stateCopy);
    uncoveredNeighborIds.forEach((uncoveredNeighborId) => {
      dispatch(uncoverCell(uncoveredNeighborId));
    });
  }
};
