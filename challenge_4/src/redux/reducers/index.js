import { combineReducers } from 'redux';
import grid from './grid';
import cells from './cells';
import rowCount from './rowCount';
import colCount from './colCount';

// turns - [cell3, cell0, ...]
// timeElapsed - int - seconds
// gameStatus - string - values: start, inProgress, mid-LClick, lost, won
// minesLeft - int

const rootReducer = combineReducers({
  grid,
  cells,
  rowCount,
  colCount,
});

export default rootReducer;
