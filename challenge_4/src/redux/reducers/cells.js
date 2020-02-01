import * as actions from '../actions/index';


const cells = (state = {}, action) => {
  switch (action.type) {   
    case actions.INITIALIZED_GAME:
      return action.cells;
    case actions.UNCOVERED_CELL:
      const { cellId } = action;
      return {...state, [cellId]: {...(state[cellId]), isCovered: false} }
    default:
      return state;
  }
};

export default cells;
