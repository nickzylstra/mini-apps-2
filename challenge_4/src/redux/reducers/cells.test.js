import cells from './cells';
import * as actions from '../actions/index';

const {
  INITIALIZED_GAME,
  UNCOVERED_CELL,
} = actions;

describe('cells reducer', () => {
  it('should set initial state', () => {
    const initialState = cells(undefined, {});
    expect(initialState).toEqual({});
  });

  const testCell = {
    hasMine: false,
    adjMineCount: 0,
    isCovered: true,
    flagged: false,
    row: 0,
    col: 0,
  };

  it('should respond to initialized_game action', () => {
    const state = {};
    const nextCells = { cell0: {...testCell}};
    const action = {
      type: INITIALIZED_GAME,
      cells: nextCells, 
    };
    const nextState = cells(state, action);
    expect(nextState).toEqual(nextCells);
  });

  it('should respond to uncovered_cell action', () => {
    const state = { cell0: {...testCell}};
    const action = {
      type: UNCOVERED_CELL,
      cellId: 'cell0',
    };
    const nextState = cells(state, action);
    expect(nextState.cell0.isCovered).toEqual(false);
  });
});
