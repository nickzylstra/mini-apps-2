import * as actions from '../actions/index';

const turns = (state = [], action) => {
  switch (action.type) {   
    case actions.UNCOVERED_CELL:
      return [...state, action.cellId];
    default:
      return state;
  }
};

export default turns;
