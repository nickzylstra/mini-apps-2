import { 
  updateGameStatus,
  statuses,
  manageTimer, 
  manageTimerCommands,
} from '../index';

export const startGame = () => (dispatch) => {
  dispatch(updateGameStatus(statuses.INPROGRESS));
  dispatch(manageTimer(manageTimerCommands.START));
};
