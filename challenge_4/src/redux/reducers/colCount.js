import * as actions from '../actions/index';


const colCount = (state = 0, action) => {
  switch (action.type) {   
    case actions.INITIALIZED_GAME:
      return action.colCount;
    default:
      return state;
  }
};

export default colCount;
