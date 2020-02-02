import mockStore from '../../../../testUtils/mockStore';
import { clickCell } from './clickCell';
import { UNCOVERED_CELL } from '../index';


describe('clickCell', () => {
  const cellIds = ['cell0'];
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
  it('uncovers mine free and covered clicked cell', () => {
    store.dispatch(clickCell(cellIds[0]));
    const actions = store.getActions();
    const expectedPayload = [{ type: UNCOVERED_CELL, cellId: cellIds[0] }];
    expect(actions).toEqual(expectedPayload);
  });
});
