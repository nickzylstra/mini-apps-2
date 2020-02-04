import * as actions from '../actions/index';
import { statuses } from '../actions/index';


const gameStatus = (state = statuses.INIT, action) => {
  switch (action.type) {
    case actions.UPDATED_GAME_STATUS:
      return action.status;
    case actions.INITIALIZED_GAME:
      return statuses.READY;
    default:
      return state;
  }
};

export default gameStatus;
