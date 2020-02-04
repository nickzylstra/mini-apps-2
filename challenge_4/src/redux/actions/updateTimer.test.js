import { UPDATED_TIMER, updateTimer } from './updateTimer';

describe('updateTimer', () => {
  it('should return action type', () => {
    const action = updateTimer();
    const { type } = action;
    expect(type).toEqual(UPDATED_TIMER);
  });
});
