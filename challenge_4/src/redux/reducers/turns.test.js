import turns from './turns';
import * as actions from '../actions/index';

const {
  UNCOVERED_CELL,
} = actions;

describe('turns reducer', () => {
  it('should set initial state', () => {
    const initialState = turns(undefined, {});
    expect(initialState).toEqual([]);
  });

  it('should set new game state', () => {
    const state = [];
    const cellId = 'cell0'
    const action = {
      type: UNCOVERED_CELL,
      cellId, 
    };
    const nextState = turns(state, action);
    expect(nextState).toEqual([cellId]);
  });
});
