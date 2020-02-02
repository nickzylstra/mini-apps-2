import * as actions from '../actions/index';

const uncoveredCellsRemaining = (state = 0, action) => {
  switch (action.type) {   
    case actions.UNCOVERED_CELL:
      return state -= 1;
    case actions.INITIALIZED_GAME:
      const { rowCount, colCount, mineCount } = action;
      return ((rowCount * colCount) - mineCount);
    default:
      return state;
  }
};

export default uncoveredCellsRemaining;
