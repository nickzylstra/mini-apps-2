import { INITIALIZED_GAME } from './index';
import { getNeighborCellIds } from './utils';


const initializeGame = (
  rowCount = 10, 
  colCount = 10,
  mineCount = 10,
  cellIdGen = (num) => `cell${num}`
) => {
  const grid = [];
  const cells = {};
  
  // populate grid with cellIds and create cells data structure
  for (let r = 0; r < rowCount; r += 1) {
    grid[r] = [];
    for (let c = 0; c < colCount; c += 1) {
      const cellId = cellIdGen(c + r * colCount);
      grid[r][c] = cellId;
      cells[cellId] = {
        hasMine: false,
        adjMineCount: 0,
        isCovered: true,
        flagged: false,
        row: r,
        col: c,
      }
    }
  }

  // place mines randomly
  let placedMineCount = 0;
  while (placedMineCount < mineCount) {
    const randCellId = cellIdGen(Math.trunc(Math.random() * rowCount * colCount));
    const randCell = cells[randCellId];
    if (!randCell.hasMine) {
      randCell.hasMine = true;
      placedMineCount += 1;
    }
  }

  // update mineCount
  Object.keys(cells).forEach((cellId) => {
    const neighborCellIds = getNeighborCellIds({ grid, cells, rowCount, colCount }, cellId);
    let cellMineCount = 0;
    neighborCellIds.forEach((neighbor) => {
      if (neighbor.hasMine) cellMineCount += 1;
    });
    cells[cellId].adjMineCount = cellMineCount;
  })

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
