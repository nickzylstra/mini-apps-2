import * as actions from './index';

const {
  INITIALIZED_GAME,
  initializeGame,
} = actions;

describe('actions', () => {
  describe('initializeGame', () => {
    const rowCount = 10;
    const colCount = 10;
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
      expect(grid[rowCount - 1][colCount - 1]).toEqual(cellIdGen(rowCount * colCount - 1))
    })

    it('should initialize cells', () => {
    });

    it('should place correct number of mines', () => {
    });

    it('should update cells mineCount', () => {
    });
  });
});
