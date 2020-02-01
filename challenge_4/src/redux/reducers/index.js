import { combineReducers } from 'redux';
import grid from './grid';
import cells from './cells';

// rowCount - int
// colCount - int
// cellsById - { cell0: { hasMine: true, adjMineCount: 3, isCovered: true, flagged: false }, ... }
// grid - array of row arrays containing cellIds [[cell0, ...], ...]
// turns - [cell3, cell0, ...]
// timeElapsed - int - seconds
// gameStatus - string - values: start, inProgress, mid-LClick, lost, won
// minesLeft - int

const rootReducer = combineReducers({
  grid,
  cells,
});

export default rootReducer;
