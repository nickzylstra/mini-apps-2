import { combineReducers } from 'redux';
import { types as actionTypes } from '../actions/index';

const {
  CELL_CLICKED,
} = actionTypes;

// cellsById - { cell0: { hasMine: true, adjMineCount: 3, isCovered: true }, ... }
// grid - array of row arrays containing cellIds [[cell0, ...], ...]
// turns - [turn0, turn1, ...]
// turnsById - { turn0: { row: 0, col: 3 }, ... }
// timeElapsed - int - seconds
// gameStatus - string - values: start, inProgress, lost, won
// minesLeft - int

const rootReducer = combineReducers({
  // TODO - add reducers
});

export default rootReducer;
