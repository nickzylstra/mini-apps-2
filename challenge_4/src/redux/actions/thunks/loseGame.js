import { 
  updateGameStatus,
  statuses,
  manageTimer, 
  manageTimerCommands,
} from '../index';

export const loseGame = () => (dispatch) => {
  dispatch(updateGameStatus(statuses.LOST));
  dispatch(manageTimer(manageTimerCommands.STOP));
};
