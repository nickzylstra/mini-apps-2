import { combineReducers } from 'redux';
import grid from './grid';
import cells from './cells';
import rowCount from './rowCount';
import colCount from './colCount';
import gameStatus from './gameStatus';
import turns from './turns';
import uncoveredCellsRemaining from './uncoveredCellsRemaining';
import timer from './timer';

// minesLeft - int

const rootReducer = combineReducers({
  grid,
  cells,
  rowCount,
  colCount,
  gameStatus,
  turns,
  uncoveredCellsRemaining,
  timer,
});

export default rootReducer;
