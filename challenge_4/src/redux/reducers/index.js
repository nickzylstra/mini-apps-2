import { combineReducers } from 'redux';
import grid from './grid';
import cells from './cells';
import rowCount from './rowCount';
import colCount from './colCount';
import gameStatus from './gameStatus';
import turns from './turns';

// timeElapsed - int - seconds
// cellsLeftToUncover - int
// minesLeft - int

const rootReducer = combineReducers({
  grid,
  cells,
  rowCount,
  colCount,
  gameStatus,
  turns,
});

export default rootReducer;
