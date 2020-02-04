import { updateTimer } from '../index';

const manageTimerCommands = {
  START: 'START',
  STOP: 'STOP',
}

let timerInterval;

const manageTimer = (command) =>  (dispatch, getState) => {
  if (command === manageTimerCommands.START) {
    timerInterval = setInterval(() => dispatch(updateTimer()), 1000)
  }
  if (command === manageTimerCommands.STOP) {
    clearInterval(timerInterval);
  }
};

export {
  manageTimer,
  manageTimerCommands,
};
