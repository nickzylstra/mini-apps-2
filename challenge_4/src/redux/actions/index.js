
export const UNCOVERED_CELL = 'UNCOVERED_CELL';
// export const CELL_UNCLICKED = 'CELL_UNCLICKED';
// export const CELL_FLAGGED = 'CELL_FLAGGED';
export const GAME_STARTED = 'GAME_STARTED';

const uncoverCell = (cellId) => ({
  type: UNCOVERED_CELL,
  cellId,
});

// if mine and all neighbors uncovered, flag cellId

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

