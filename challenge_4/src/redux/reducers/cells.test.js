import cells from './cells';
import * as actions from '../actions/index';

const {
  INITIALIZED_GAME,
} = actions;

describe('cells reducer', () => {
  it('should set initial state', () => {
    const initialState = cells(undefined, {});
    expect(initialState).toEqual({});
  });

  it('should set new game state', () => {
    const state = {};
    const nextCells = { cell0: {
      hasMine: false,
      adjMineCount: 0,
      isCovered: true,
      flagged: false,
      row: 0,
      col: 0,
    }};
    const action = {
      type: INITIALIZED_GAME,
      cells: nextCells, 
    };
    const nextState = cells(state, action);
    expect(nextState).toEqual(nextCells);
  });
});
