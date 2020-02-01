import * as actions from '../actions/index';


const grid = (state = [[]], action) => {
  switch (action.type) {   
    case actions.INITIALIZED_GAME:
      return action.grid;
    default:
      return state;
  }
};

export default grid;
