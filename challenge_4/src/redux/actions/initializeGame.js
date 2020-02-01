import { INITIALIZED_GAME } from './index';
import { getNeighborCellIds } from '../utils';


const createGridAndCells = (rowCount, colCount, cellIdGen) => {
  const grid = [];
  const cells = {};

  for (let r = 0; r < rowCount; r += 1) {
    grid[r] = [];
    for (let c = 0; c < colCount; c += 1) {
      const cellId = cellIdGen(c + r * colCount);
      grid[r][c] = cellId;
      cells[cellId] = {
        hasMine: false,
        adjMineCount: 0,
        isCovered: true,
        isFlagged: false,
        row: r,
        col: c,
      }
    }
  }

  return [grid, cells];
};

const placeMines = (cells, mineCount, rowCount, colCount, cellIdGen ) => {
  let placedMineCount = 0;
  while (placedMineCount < mineCount) {
    const randCellId = cellIdGen(Math.trunc(Math.random() * rowCount * colCount));
    const randCell = cells[randCellId];
    if (!randCell.hasMine) {
      randCell.hasMine = true;
      placedMineCount += 1;
    }
  }
};

const updateMineCounts = (cells, grid, rowCount, colCount) => {
  Object.keys(cells).forEach((cellId) => {
    const neighborCellIds = getNeighborCellIds({ grid, cells, rowCount, colCount }, cellId);
    let cellMineCount = 0;
    neighborCellIds.forEach((neighbor) => {
      if (cells[neighbor].hasMine) {
        cellMineCount += 1;
      } 
    });
    cells[cellId].adjMineCount = cellMineCount;
  })
};

const initializeGame = (
    rowCount = 10, 
    colCount = 10,
    mineCount = 10,
    cellIdGen = (num) => `cell${num}`
  ) => {  
    const [grid, cells] = createGridAndCells(rowCount, colCount, cellIdGen);  

    placeMines(cells, mineCount, rowCount, colCount, cellIdGen);

    updateMineCounts(cells, grid, rowCount, colCount);

    return {
      type: INITIALIZED_GAME,
      grid,
      cells,
      rowCount,
      colCount,
      mineCount,
    };
}

export default initializeGame;
