import { 
  manageTimer, 
  manageTimerCommands,
  updateGameStatus,
  statuses
} from '../index';

export const startGame = () => (dispatch) => {
  dispatch(updateGameStatus(statuses.INPROGRESS));
  dispatch(manageTimer(manageTimerCommands.START));
};
