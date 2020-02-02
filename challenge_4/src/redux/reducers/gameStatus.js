import * as actions from '../actions/index';
import { statuses } from '../actions/index';


const gameStatus = (state = statuses.INIT, action) => {
  switch (action.type) {   
    case actions.STARTED_GAME:
      return statuses.INPROGRESS;
    case actions.INITIALIZED_GAME:
      return statuses.READY;
    default:
      return state;
  }
};

export default gameStatus;
