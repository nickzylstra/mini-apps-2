export const INITIALIZED_GAME = 'INITIALIZED_GAME';
export const STARTED_GAME = 'STARTED_GAME';
export const UNCOVERED_CELL = 'UNCOVERED_CELL';
// export const UNCLICKED_CELL = 'UNCLICKED_CELL';
// export const FLAGGED_CELL = 'FLAGGED_CELL';


export const initializeGame = (
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

    return {
      type: INITIALIZED_GAME,
      grid,
      cells,
    };
}

const uncoverCell = (cellId) => ({
  type: UNCOVERED_CELL,
  cellId,
});

// if mine and all neighbors uncovered, flag cellId, update minesLeft

const peekCellNeighbors = (cellId) => (dispatch, getState) => {
  // uncover neighbors that don't have mines
  // peek neighbors that have mineCount === 0
  
  // declare coveredNeighborCellIds from getState
  // only get inbounds and covered neighbors
  // for each coveredNeighborCellId
    // if doesn't have mine
      // dispatch(uncoverCell(coveredNeighborCellId))
    // if neighbor mine count === 0
      // peekCellNeighbors(coveredNeighborCellId)
};

export const cellClick = (cellId) => (dispatch, getState) => {
  // if gameStatus === lost || won
    // return

  // if gameStatus === start
    // dispatch(startGame())

  // declare cell from getState
  // if cell.hasMine
    // dispatch(loseGame())
    // return 
  
  // dispatch(uncoverCell(cellId))

  // if cell.adjMineCount === 0
    // peekCellNeighbors(cellId)
};

