import { UNCOVERED_CELL, uncoverCell } from './uncoverCell';

describe('uncoverCell', () => {
  it('should return action type', () => {
    const testCellId = 'cell1';
    const action = uncoverCell(testCellId);
    const { type, cellId } = action;
    expect(type).toEqual(UNCOVERED_CELL);
    expect(cellId).toEqual(testCellId);
  });
});
