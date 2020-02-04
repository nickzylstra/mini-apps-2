import { 
  updateGameStatus,
  statuses,
  manageTimer, 
  manageTimerCommands,
} from '../index';

export const winGame = () => (dispatch) => {
  dispatch(updateGameStatus(statuses.WON));
  dispatch(manageTimer(manageTimerCommands.STOP));
};
