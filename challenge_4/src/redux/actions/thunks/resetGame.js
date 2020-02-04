import { 
  initializeGame,
  manageTimer,
  manageTimerCommands,
} from '../index';

export const resetGame = () => (dispatch) => {
  dispatch(initializeGame());
  dispatch(manageTimer(manageTimerCommands.STOP));
};
