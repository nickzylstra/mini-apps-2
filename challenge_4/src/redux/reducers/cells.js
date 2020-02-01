import * as actions from '../actions/index';


const cells = (state = {}, action) => {
  switch (action.type) {   
    case actions.INITIALIZED_GAME:
      return action.cells;
    default:
      return state;
  }
};

export default cells;
