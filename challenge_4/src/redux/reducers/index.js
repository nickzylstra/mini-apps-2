import { combineReducers } from 'redux';
import grid from './grid';
import cells from './cells';
import rowCount from './rowCount';
import colCount from './colCount';
import gameStatus, { statuses } from './gameStatus';
import turns from './turns';
import uncoveredCellRemaining from './uncoveredCellsRemaining';

// timeElapsed - int - seconds
// minesLeft - int

const rootReducer = combineReducers({
  grid,
  cells,
  rowCount,
  colCount,
  gameStatus,
  turns,
  uncoveredCellRemaining,
});

export { statuses };

export default rootReducer;
