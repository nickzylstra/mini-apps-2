import uncoveredCellsRemaining from './uncoveredCellsRemaining';
import * as actions from '../actions/index';

const {
  INITIALIZED_GAME,
  UNCOVERED_CELL,
} = actions;

describe('uncoveredCellsRemaining reducer', () => {
  it('should set initial state', () => {
    const initialState = uncoveredCellsRemaining(undefined, {});
    expect(initialState).toEqual(0);
  });

  it('should set new game state', () => {
    const state = 0;
    const rowCount = 2;
    const colCount = 2;
    const mineCount = 1;
    const action = {
      type: INITIALIZED_GAME,
      rowCount,
      colCount,
      mineCount, 
    };
    const nextState = uncoveredCellsRemaining(state, action);
    expect(nextState).toEqual(3);
  });

  it('should increment count after a cell is uncovered', () => {
    const state = 1;
    const action = {
      type: UNCOVERED_CELL,
    };
    const nextState = uncoveredCellsRemaining(state, action);
    expect(nextState).toEqual(0);
  });
});
