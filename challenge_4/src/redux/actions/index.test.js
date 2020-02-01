import * as actions from './index';
import initializeGame from './initializeGame';
import { getNeighborCellIds } from './utils';

const {
  INITIALIZED_GAME,
} = actions;

describe('actions', () => {
  describe('initializeGame', () => {
    const rowCount = 10;
    const colCount = 10;
    const cellCount = rowCount * colCount;
    const mineCount = 10;
    const cellIdGen = (num) => `cell${num}`;

    const {
      type,
      grid,
      cells,
    } = initializeGame(rowCount, colCount, mineCount, cellIdGen);

    it('should return action type', () => {
      expect(type).toEqual(INITIALIZED_GAME);
    });

    it('should initialize grid', () => {
      expect(grid.length).toEqual(rowCount);
      expect(grid[colCount - 1].length).toEqual(colCount);
      expect(grid[rowCount - 1][colCount - 1]).toEqual(cellIdGen(cellCount - 1))
    })

    it('should initialize cells data struture', () => {
      expect(Object.keys(cells).length).toEqual(cellCount);
      const sampleCell = cells[cellIdGen(cellCount - 1)];
      expect(sampleCell.hasOwnProperty('hasMine')).toBe(true);
      expect(sampleCell.hasOwnProperty('adjMineCount')).toBe(true);
      expect(sampleCell.hasOwnProperty('isCovered')).toBe(true);
      expect(sampleCell.hasOwnProperty('flagged')).toBe(true);
      expect(sampleCell.hasOwnProperty('row')).toBe(true);
      expect(sampleCell.hasOwnProperty('col')).toBe(true);
    });

    it('should place correct number of mines', () => {
      const foundMineCount = Object.values(cells).reduce((count, { hasMine }) => (
        hasMine ? count + 1 : count), 0);
      expect(foundMineCount).toEqual(mineCount);
    });

    it('should update cells mineCount', () => {
      const sampleCellId = cellIdGen(cellCount - 1);
      const sampleCell = cells[sampleCellId];
      const neighborCellIds = getNeighborCellIds({ grid, cells, rowCount, colCount }, sampleCellId);

      let sampleCellMineCount = 0;
      neighborCellIds.forEach((neighbor) => {
        if (neighbor.hasMine) sampleCellMineCount += 1;
      });
      expect(sampleCellMineCount).toEqual(sampleCell.adjMineCount);
    });
  });
});
