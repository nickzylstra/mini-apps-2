import turns from './turns';
import * as actions from '../actions/index';

const {
  UNCOVERED_CELL,
} = actions;

describe('turns reducer', () => {
  it('should set initial state', () => {
    const initialState = turns(undefined, {});
    expect(initialState).toEqual([]);
  });
});
