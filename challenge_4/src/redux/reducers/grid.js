
export const rowCount = 10;
export const colCount = 10;
export const cellKey = 'cell';

const initializeGrid = (rowCount, colCount) => {
  const grid = [];
  
  for (let r = 0; r < rowCount; r += 1) {
    grid[r] = [];
    for (let c = 0; c < colCount; c += 1) {
      grid[r][c] = `${cellKey}${c + r * colCount}`
    }
  }

  return grid;
}

const initialState = initializeGrid(rowCount, colCount);

const grid = (state = initialState, action) => {
  switch (action.type) {   
    default:
      return state;
  }
};

export default grid;
