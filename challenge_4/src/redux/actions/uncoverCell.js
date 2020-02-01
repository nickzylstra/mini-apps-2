export const UNCOVERED_CELL = 'UNCOVERED_CELL';

export const uncoverCell = (cellId) => ({
  type: UNCOVERED_CELL,
  cellId,
});

