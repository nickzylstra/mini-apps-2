import grid, { rowCount, colCount, cellKey } from './grid';

describe('grid reducer', () => {
  it('should set initial state', () => {
    const initialState = grid(undefined, {});
    expect(initialState).toEqual([[]]);
  })
  // it('should set initial state', () => {
  //   const initialState = grid(undefined, {});
  //   expect(initialState.length).toEqual(rowCount);
  //   expect(initialState[colCount - 1].length).toEqual(colCount);
  //   expect(initialState[rowCount - 1][colCount - 1]).toEqual(`${cellKey}${rowCount * colCount - 1}`)
  // })
})