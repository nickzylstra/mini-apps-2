import gameStatus from './gameStatus';
import * as actions from '../actions';
import { statuses } from '../actions';

const {
  INITIALIZED_GAME,
  STARTED_GAME,
} = actions;

describe('gameStatus reducer', () => {
  it('should set initial state', () => {
    const initialState = gameStatus(undefined, {});
    expect(initialState).toEqual(statuses.INIT);
  });

  it('should set new game state', () => {
    const state = statuses.INIT;
    const action = {
      type: INITIALIZED_GAME,
    };
    const nextState = gameStatus(state, action);
    expect(nextState).toEqual(statuses.READY);
  });

  it('should set in progress state', () => {
    const state = statuses.READY;
    const action = {
      type: STARTED_GAME,
    };
    const nextState = gameStatus(state, action);
    expect(nextState).toEqual(statuses.INPROGRESS);
  });
});
