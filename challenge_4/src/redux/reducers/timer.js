import * as actions from '../actions/index';


const timer = (state = {}, action) => {
  switch (action.type) {   
    case actions.UPDATED_TIMER:
      return {
        ...state,
        elapsed: Math.trunc((new Date() - state.started) / 1000),
      };
    case actions.STARTED_GAME:
      return {
        started: new Date(),
        elapsed: 0,
      }; 
    case actions.INITIALIZED_GAME:
      return {
        started: null,
        elapsed: 0,
      };
    default:
      return state;
  }
};

export default timer;
