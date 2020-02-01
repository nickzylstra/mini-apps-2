import rowCount from './rowCount';
import * as actions from '../actions/index';

const {
  INITIALIZED_GAME,
} = actions;

describe('rowCount reducer', () => {
  it('should set initial state', () => {
    const initialState = rowCount(undefined, {});
    expect(initialState).toEqual(0);
  });

  it('should set new game state', () => {
    const state = 0;
    const nextRowCount = 4;
    const action = {
      type: INITIALIZED_GAME,
      rowCount: nextRowCount, 
    };
    const nextState = rowCount(state, action);
    expect(nextState).toEqual(nextRowCount);
  });
});
