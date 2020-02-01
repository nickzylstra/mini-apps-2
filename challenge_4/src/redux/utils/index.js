export const getNeighborCellIds = (state, cellId) => {
  const { grid, cells, rowCount, colCount } = state;
  const { row, col } = cells[cellId];
  const dirs = [
    [1, -1],
    [1, 0],
    [1, 1],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  return dirs.reduce((neighborCellIds, dir) => {
    const dirRow = dir[0] + row;
    const isDirRowInGrid = dirRow < rowCount && dirRow >= 0;
    const dirCol = dir[1] + col;
    const isDirColInGrid = dirCol < colCount && dirCol >= 0;
    if (isDirRowInGrid && isDirColInGrid) { neighborCellIds.push(grid[dirRow][dirCol]); }
    return neighborCellIds;
  }, []);
};
