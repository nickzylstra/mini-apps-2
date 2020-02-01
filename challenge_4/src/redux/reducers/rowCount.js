import * as actions from '../actions/index';


const rowCount = (state = 0, action) => {
  switch (action.type) {   
    case actions.INITIALIZED_GAME:
      return action.rowCount;
    default:
      return state;
  }
};

export default rowCount;
