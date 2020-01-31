import grid from './grid';

describe('grid reducer', () => {
  it('should set initial state', () => {
    const initialState = grid(undefined, {});
    expect(initialState).toEqual([[]]);
  })
})