import mockStore from '../../../../testUtils/mockStore';
import { clickCell } from './clickCell';
import { UNCOVERED_CELL, UPDATED_GAME_STATUS, statuses, } from '../index';


describe('clickCell', () => {
  const cellIds = ['cell0', 'cell1', 'cell2'];

  it('uncovers mine free and covered clicked cell', () => {
    const grid = [[cellIds[0]]];
    const rowCount = 1;
    const colCount = 1;
    const cells = {
      [cellIds[0]]: {
        hasMine: false,
        adjMineCount: 0,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 0,
      },
    }
    const initialState = {
      cells,
      grid,
      rowCount,
      colCount,
    }
    const store = mockStore(initialState);
    store.dispatch(clickCell(cellIds[0]));
    const actions = store.getActions();
    const expectedPayload = [{ type: UNCOVERED_CELL, cellId: cellIds[0] }];
    expect(actions).toEqual(expectedPayload);
  });

  it('uncovers neighbors of clicked cell with no adjMines', () => {
    const grid = [[cellIds[0], cellIds[1]]];
    const rowCount = 1;
    const colCount = 2;
    const cells = {
      [cellIds[0]]: {
        hasMine: false,
        adjMineCount: 0,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 0,
      },
      [cellIds[1]]: {
        hasMine: false,
        adjMineCount: 0,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 1,
      },
    }
    const initialState = {
      cells,
      grid,
      rowCount,
      colCount,
    }
    const store = mockStore(initialState);
    store.dispatch(clickCell(cellIds[0]));
    const actions = store.getActions();
    const expectedPayload = [
      { type: UNCOVERED_CELL, cellId: cellIds[0] },
      { type: UNCOVERED_CELL, cellId: cellIds[1] },
    ];
    expect(actions).toEqual(expectedPayload);
  });

  it('does not uncover neighbors of clicked cell with adjMines', () => {
    const grid = [[cellIds[0], cellIds[1]]];
    const rowCount = 1;
    const colCount = 2;
    const cells = {
      [cellIds[0]]: {
        hasMine: false,
        adjMineCount: 1,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 0,
      },
      [cellIds[1]]: {
        hasMine: false,
        adjMineCount: 0,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 1,
      },
    }
    const initialState = {
      cells,
      grid,
      rowCount,
      colCount,
    }
    const store = mockStore(initialState);
    store.dispatch(clickCell(cellIds[0]));
    const actions = store.getActions();
    const expectedPayload = [
      { type: UNCOVERED_CELL, cellId: cellIds[0] },
    ];
    expect(actions).toEqual(expectedPayload);
  });

  it('uncovers neighbors of mine free clicked cell, stopping at neighbors with non-zero adjacent mine count', () => {
    const grid = [[cellIds[0], cellIds[1]]];
    const rowCount = 1;
    const colCount = 3;
    const cells = {
      [cellIds[0]]: {
        hasMine: false,
        adjMineCount: 0,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 0,
      },
      [cellIds[1]]: {
        hasMine: false,
        adjMineCount: 1,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 1,
      },
      [cellIds[2]]: {
        hasMine: false,
        adjMineCount: 0,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 1,
      },
    }
    const initialState = {
      cells,
      grid,
      rowCount,
      colCount,
    }
    const store = mockStore(initialState);
    store.dispatch(clickCell(cellIds[0]));
    const actions = store.getActions();
    const expectedPayload = [
      { type: UNCOVERED_CELL, cellId: cellIds[0] },
      { type: UNCOVERED_CELL, cellId: cellIds[1] },
    ];
    expect(actions).toEqual(expectedPayload);
  });

  it('dispatches win after all open cells uncovered', () => {
    const grid = [[cellIds[0]]];
    const rowCount = 1;
    const colCount = 1;
    const cells = {
      [cellIds[0]]: {
        hasMine: false,
        adjMineCount: 0,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 0,
      },
    }
    const uncoveredCellsRemaining = 1;
    const initialState = {
      cells,
      grid,
      rowCount,
      colCount,
      uncoveredCellsRemaining,
    }
    const store = mockStore(initialState);
    store.dispatch(clickCell(cellIds[0]));
    const actions = store.getActions();
    const expectedPayload = [
      { type: UNCOVERED_CELL, cellId: cellIds[0] },
      { type: UPDATED_GAME_STATUS, status: statuses.WON },
    ];
    expect(actions).toEqual(expectedPayload);
  });

  it('dispatches loss when clicking a mine', () => {
    const grid = [[cellIds[0]]];
    const rowCount = 1;
    const colCount = 1;
    const cells = {
      [cellIds[0]]: {
        hasMine: true,
        adjMineCount: 0,
        isCovered: true,
        isFlagged: false,
        row: 0,
        col: 0,
      },
    }
    const uncoveredCellsRemaining = 1;
    const initialState = {
      cells,
      grid,
      rowCount,
      colCount,
      uncoveredCellsRemaining,
    }
    const store = mockStore(initialState);
    store.dispatch(clickCell(cellIds[0]));
    const actions = store.getActions();
    const expectedPayload = [
      { type: UPDATED_GAME_STATUS, status: statuses.LOST },
    ];
    expect(actions).toEqual(expectedPayload);
  });  
});
