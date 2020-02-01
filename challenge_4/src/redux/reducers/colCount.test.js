import colCount from './colCount';
import * as actions from '../actions/index';

const {
  INITIALIZED_GAME,
} = actions;

describe('colCount reducer', () => {
  it('should set initial state', () => {
    const initialState = colCount(undefined, {});
    expect(initialState).toEqual(0);
  });

  it('should set new game state', () => {
    const state = 0;
    const nextColCount = 4;
    const action = {
      type: INITIALIZED_GAME,
      colCount: nextColCount, 
    };
    const nextState = colCount(state, action);
    expect(nextState).toEqual(nextColCount);
  });
});
