import timer from './timer';
import * as actions from '../actions';
import { statuses } from '../actions';

const {
  INITIALIZED_GAME,
  UPDATED_GAME_STATUS,
} = actions;

describe('timer reducer', () => {
  it('should set initial state', () => {
    const initialState = timer(undefined, {});
    expect(initialState).toEqual({});
  });

  it('should set new game state', () => {
    const state = {};
    const action = {
      type: INITIALIZED_GAME,
    };
    const nextState = timer(state, action);
    expect(nextState).toEqual({
      started: null,
      elapsed: 0,
    });
  });

  it('should set in progress state', () => {
    const state = {
      started: null,
    };
    const action = {
      type: UPDATED_GAME_STATUS,
      status: statuses.INPROGRESS,
    };
    const nextState = timer(state, action);
    expect(nextState.elapsed).toEqual(0);
    expect(nextState.started).not.toEqual(null);
  });

  it('should update timer display', () => {
    const state = {
      started: 0,
      elapsed: 0,
    };
    const action = {
      type: actions.UPDATED_TIMER,
    };
    const nextState = timer(state, action);
    expect(nextState.elapsed).toBeGreaterThan(0);
  });
});
