import * as utils from './utils';

const {
  getNeighborCellIds,
} = utils;

describe('utils', () => {
  describe('getNeighborCellIds', () => {
    const rowCount = 2;
    const colCount = 2;
    const grid = [['cell1', 'cell2'], ['cell3', 'cell4']];
    const cells = {};
    grid.forEach((row, rowIdx) => {
      row.forEach((cell, colIdx) => {
        cells[cell] = {
          row: rowIdx,
          col: colIdx,
        }
      });
    });
    const state = { grid, cells, rowCount, colCount };

    it('should return the correct number of neighbors', () => {
      expect(getNeighborCellIds(state, 'cell1').length).toEqual(3);
    });
  });
});
