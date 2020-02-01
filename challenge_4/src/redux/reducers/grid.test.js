import grid from './grid';
import * as actions from '../actions/index';

const {
  INITIALIZED_GAME,
} = actions;

describe('grid reducer', () => {
  it('should set initial state', () => {
    const initialState = grid(undefined, {});
    expect(initialState).toEqual([[]]);
  });

  it('should set new game state', () => {
    const state = [[]];
    const nextGrid = [['cell1', 'cell2'], ['cell3', 'cell4']];
    const action = {
      type: INITIALIZED_GAME,
      grid: nextGrid, 
    };
    const nextState = grid(state, action);
    expect(nextState).toEqual(nextGrid);
  });
});
